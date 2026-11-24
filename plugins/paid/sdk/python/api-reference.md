# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [PaidClient](paid/client.py)

## Agents

> Source: [Agents](paid/apis/agents.py)

<details>
<summary><code>def create(authorization: str, *, body: AgentCreate | AgentCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Agent</code></summary>

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
try:
    response = client.agents.create("some example string")
    # TODO: Handle 'response' of type Agent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.create("some example string")
    # TODO: Handle 'response' of type Agent
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentCreate](paid/models/agent_create.py) \| [AgentCreateDict](paid/models/agent_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](paid/models/agent.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.agents.delete("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.delete("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.agents.delete_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.delete_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get(agent_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Agent</code></summary>

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
try:
    response = client.agents.get("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.get("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](paid/models/agent.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Agent</code></summary>

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
try:
    response = client.agents.get_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.get_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](paid/models/agent.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Agent]</code></summary>

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
try:
    response = client.agents.list_("some example string")
    # TODO: Handle 'response' of type list[Agent]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.list_("some example string")
    # TODO: Handle 'response' of type list[Agent]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Agent](paid/models/agent.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update(agent_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Agent</code></summary>

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
try:
    response = client.agents.update("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.update("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
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
| <code>agent_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentUpdate](paid/models/agent_update.py) \| [AgentUpdateDict](paid/models/agent_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](paid/models/agent.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id(external_id: str, authorization: str, *, body: AgentUpdate | AgentUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Agent</code></summary>

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
try:
    response = client.agents.update_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.agents.update_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Agent
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[AgentUpdate](paid/models/agent_update.py) \| [AgentUpdateDict](paid/models/agent_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Agent](paid/models/agent.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Checkouts

> Source: [Checkouts](paid/apis/checkouts.py)

<details>
<summary><code>def archive_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.checkouts.archive_checkout("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCheckoutErrorBody
```

**Async**

```python
try:
    response = await async_client.checkouts.archive_checkout("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCheckoutErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ArchiveCheckoutErrorBody](paid/errors/archive_checkout_error.py)&#93;</code>

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
<summary><code>def create_checkout(authorization: str, *, body: CreateCheckoutRequest | CreateCheckoutRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Checkout</code></summary>

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
try:
    response = client.checkouts.create_checkout("some example string")
    # TODO: Handle 'response' of type Checkout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutErrorBody
```

**Async**

```python
try:
    response = await async_client.checkouts.create_checkout("some example string")
    # TODO: Handle 'response' of type Checkout
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutErrorBody
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

**OnSuccess**: <code>[Checkout](paid/models/checkout.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCheckoutErrorBody](paid/errors/create_checkout_error.py)&#93;</code>

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
<summary><code>def get_checkout(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutDetails</code></summary>

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
try:
    response = client.checkouts.get_checkout("some example string", "some example string")
    # TODO: Handle 'response' of type CheckoutDetails
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutErrorBody
```

**Async**

```python
try:
    response = await async_client.checkouts.get_checkout("some example string", "some example string")
    # TODO: Handle 'response' of type CheckoutDetails
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutErrorBody
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

**OnSuccess**: <code>[CheckoutDetails](paid/models/checkout_details.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCheckoutErrorBody](paid/errors/get_checkout_error.py)&#93;</code>

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
<summary><code>def list_checkouts(authorization: str, *, limit: int | None = 10, offset: int | None = None, status: CheckoutsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> CheckoutListResponse</code></summary>

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
try:
    response = client.checkouts.list_checkouts("some example string")
    # TODO: Handle 'response' of type CheckoutListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutsErrorBody
```

**Async**

```python
try:
    response = await async_client.checkouts.list_checkouts("some example string")
    # TODO: Handle 'response' of type CheckoutListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutsErrorBody
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

**OnSuccess**: <code>[CheckoutListResponse](paid/models/checkout_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCheckoutsErrorBody](paid/errors/list_checkouts_error.py)&#93;</code>

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
<summary><code>def create_contact(authorization: str, *, body: CreateContactRequest | CreateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact1</code></summary>

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
try:
    response = client.contacts.create_contact("some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.create_contact("some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactErrorBody
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

**OnSuccess**: <code>[Contact1](paid/models/contact1.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateContactErrorBody](paid/errors/create_contact_error.py)&#93;</code>

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
<summary><code>def create2(authorization: str, *, body: ContactCreate | ContactCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.create2("some example string")
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.create2("some example string")
    # TODO: Handle 'response' of type Contact
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ContactCreate](paid/models/contact_create.py) \| [ContactCreateDict](paid/models/contact_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](paid/models/contact.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.contacts.delete_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.delete_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.contacts.delete_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContactByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.delete_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContactByIdErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteContactByIdErrorBody](paid/errors/delete_contact_by_id_error.py)&#93;</code>

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
<summary><code>def delete2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.contacts.delete2("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.delete2("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.get_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.get_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Contact
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](paid/models/contact.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact1</code></summary>

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
try:
    response = client.contacts.get_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.get_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactByIdErrorBody
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

**OnSuccess**: <code>[Contact1](paid/models/contact1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetContactByIdErrorBody](paid/errors/get_contact_by_id_error.py)&#93;</code>

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
<summary><code>def get2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact</code></summary>

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
    response = client.contacts.get2("some example string", "some example string")
    # TODO: Handle 'response' of type Contact
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.get2("some example string", "some example string")
    # TODO: Handle 'response' of type Contact
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
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](paid/models/contact.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ContactListResponse</code></summary>

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
try:
    response = client.contacts.list_contacts("some example string")
    # TODO: Handle 'response' of type ContactListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.list_contacts("some example string")
    # TODO: Handle 'response' of type ContactListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsErrorBody
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

**OnSuccess**: <code>[ContactListResponse](paid/models/contact_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListContactsErrorBody](paid/errors/list_contacts_error.py)&#93;</code>

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
<summary><code>def list2(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Contact]</code></summary>

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
    response = client.contacts.list2("some example string")
    # TODO: Handle 'response' of type list[Contact]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.contacts.list2("some example string")
    # TODO: Handle 'response' of type list[Contact]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Contact](paid/models/contact.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contact_by_external_id(external_id: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact1</code></summary>

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
try:
    response = client.contacts.update_contact_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.update_contact_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactByExternalIdErrorBody
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

**OnSuccess**: <code>[Contact1](paid/models/contact1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateContactByExternalIdErrorBody](paid/errors/update_contact_by_external_id_error.py)&#93;</code>

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
<summary><code>def update_contact_by_id(id_: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Contact1</code></summary>

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
try:
    response = client.contacts.update_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts.update_contact_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Contact1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactByIdErrorBody
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

**OnSuccess**: <code>[Contact1](paid/models/contact1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateContactByIdErrorBody](paid/errors/update_contact_by_id_error.py)&#93;</code>

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
<summary><code>def create_costs(authorization: str, *, body: CostIngestRequest | CostIngestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CostIngestResponse</code></summary>

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
try:
    response = client.costs.create_costs("some example string")
    # TODO: Handle 'response' of type CostIngestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCostsErrorBody
```

**Async**

```python
try:
    response = await async_client.costs.create_costs("some example string")
    # TODO: Handle 'response' of type CostIngestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCostsErrorBody
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

**OnSuccess**: <code>[CostIngestResponse](paid/models/cost_ingest_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCostsErrorBody](paid/errors/create_costs_error.py)&#93;</code>

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
<summary><code>def create_credit_currency(authorization: str, *, body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditCurrency</code></summary>

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
try:
    response = client.credits.create_credit_currency("some example string")
    # TODO: Handle 'response' of type CreditCurrency
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCreditCurrencyErrorBody
```

**Async**

```python
try:
    response = await async_client.credits.create_credit_currency("some example string")
    # TODO: Handle 'response' of type CreditCurrency
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCreditCurrencyErrorBody
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

**OnSuccess**: <code>[CreditCurrency](paid/models/credit_currency.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCreditCurrencyErrorBody](paid/errors/create_credit_currency_error.py)&#93;</code>

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
<summary><code>def list_credit_currencies(authorization: str, *, status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL, request_options: RequestOptionsOrDict | None = None) -> CreditCurrencyListResponse</code></summary>

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
try:
    response = client.credits.list_credit_currencies("some example string")
    # TODO: Handle 'response' of type CreditCurrencyListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCreditCurrenciesErrorBody
```

**Async**

```python
try:
    response = await async_client.credits.list_credit_currencies("some example string")
    # TODO: Handle 'response' of type CreditCurrencyListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCreditCurrenciesErrorBody
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

**OnSuccess**: <code>[CreditCurrencyListResponse](paid/models/credit_currency_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCreditCurrenciesErrorBody](paid/errors/list_credit_currencies_error.py)&#93;</code>

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
<summary><code>def update_credit_currency_by_id(id_: str, authorization: str, *, body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditCurrency</code></summary>

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
try:
    response = client.credits.update_credit_currency_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type CreditCurrency
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCreditCurrencyByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.credits.update_credit_currency_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type CreditCurrency
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCreditCurrencyByIdErrorBody
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

**OnSuccess**: <code>[CreditCurrency](paid/models/credit_currency.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCreditCurrencyByIdErrorBody](paid/errors/update_credit_currency_by_id_error.py)&#93;</code>

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
<summary><code>def create_customer_group(authorization: str, *, body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupDetail</code></summary>

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
try:
    response = client.customer_groups.create_customer_group("some example string")
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.create_customer_group("some example string")
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerGroupErrorBody](paid/errors/create_customer_group_error.py)&#93;</code>

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
<summary><code>def create_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AddMembersResponse</code></summary>

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
try:
    response = client.customer_groups.create_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type AddMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.create_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type AddMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerGroupMembersErrorBody
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

**OnSuccess**: <code>[AddMembersResponse](paid/models/add_members_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerGroupMembersErrorBody](paid/errors/create_customer_group_members_error.py)&#93;</code>

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
<summary><code>def delete_customer_group(id_: UUID, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupDeleteResponse</code></summary>

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
try:
    response = client.customer_groups.delete_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.delete_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDeleteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroupDeleteResponse](paid/models/customer_group_delete_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteCustomerGroupErrorBody](paid/errors/delete_customer_group_error.py)&#93;</code>

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
<summary><code>def delete_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RemoveMembersResponse</code></summary>

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
try:
    response = client.customer_groups.delete_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type RemoveMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.delete_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type RemoveMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerGroupMembersErrorBody
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

**OnSuccess**: <code>[RemoveMembersResponse](paid/models/remove_members_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteCustomerGroupMembersErrorBody](paid/errors/delete_customer_group_members_error.py)&#93;</code>

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
<summary><code>def get_customer_group(id_: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupDetail</code></summary>

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
try:
    response = client.customer_groups.get_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.get_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerGroupErrorBody](paid/errors/get_customer_group_error.py)&#93;</code>

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
<summary><code>def list_customer_groups(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupListResponse</code></summary>

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
try:
    response = client.customer_groups.list_customer_groups("some example string")
    # TODO: Handle 'response' of type CustomerGroupListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.list_customer_groups("some example string")
    # TODO: Handle 'response' of type CustomerGroupListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerGroupsErrorBody
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

**OnSuccess**: <code>[CustomerGroupListResponse](paid/models/customer_group_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCustomerGroupsErrorBody](paid/errors/list_customer_groups_error.py)&#93;</code>

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
<summary><code>def update_customer_group(id_: UUID, authorization: str, *, body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerGroupDetail</code></summary>

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
try:
    response = client.customer_groups.update_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.update_customer_group(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type CustomerGroupDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupErrorBody
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

**OnSuccess**: <code>[CustomerGroupDetail](paid/models/customer_group_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCustomerGroupErrorBody](paid/errors/update_customer_group_error.py)&#93;</code>

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
<summary><code>def update_customer_group_members(id_: UUID, authorization: str, *, body: MemberRequest | MemberRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SetMembersResponse</code></summary>

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
try:
    response = client.customer_groups.update_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type SetMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_groups.update_customer_group_members(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type SetMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerGroupMembersErrorBody
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

**OnSuccess**: <code>[SetMembersResponse](paid/models/set_members_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCustomerGroupMembersErrorBody](paid/errors/update_customer_group_members_error.py)&#93;</code>

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
<summary><code>def check_entitlement(customer_id: str, event_name: str, authorization: str, *, view: CustomersCustomerIdEntitlementGetParametersViewOrStr | None = CustomersCustomerIdEntitlementGetParametersView.ACTIVE_ONLY, request_options: RequestOptionsOrDict | None = None) -> CustomersCheckEntitlementResponse200</code></summary>

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
    response = client.customers.check_entitlement("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CustomersCheckEntitlementResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEntitlementErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.check_entitlement(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomersCheckEntitlementResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEntitlementErrorBody
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

**OnSuccess**: <code>[CustomersCheckEntitlementResponse200](paid/models/customers_check_entitlement_response200.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CheckEntitlementErrorBody](paid/errors/check_entitlement_error.py)&#93;</code>

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
<summary><code>def create_customer(authorization: str, *, body: CreateCustomerRequest | CreateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer1</code></summary>

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
try:
    response = client.customers.create_customer("some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer("some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
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

**OnSuccess**: <code>[Customer1](paid/models/customer1.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerErrorBody](paid/errors/create_customer_error.py)&#93;</code>

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
<summary><code>def create_customer_alias(id_: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerAlias</code></summary>

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
try:
    response = client.customers.create_customer_alias("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAlias
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer_alias("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAlias
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAliasErrorBody
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

**OnSuccess**: <code>[CustomerAlias](paid/models/customer_alias.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerAliasErrorBody](paid/errors/create_customer_alias_error.py)&#93;</code>

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
<summary><code>def create_customer_alias_by_external_id(external_id: str, authorization: str, *, body: CustomerAliasCreateRequest | CustomerAliasCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerAlias</code></summary>

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
try:
    response = client.customers.create_customer_alias_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAlias
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAliasByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer_alias_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomerAlias
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAliasByExternalIdErrorBody
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

**OnSuccess**: <code>[CustomerAlias](paid/models/customer_alias.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerAliasByExternalIdErrorBody](paid/errors/create_customer_alias_by_external_id_error.py)&#93;</code>

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
<summary><code>def create_payment_method(external_id: str, authorization: str, *, body: CustomersExternalPaymentMethodsRequest | CustomersExternalPaymentMethodsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentMethod</code></summary>

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
try:
    response = client.customers.create_payment_method("some example string", "some example string")
    # TODO: Handle 'response' of type PaymentMethod
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentMethodErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_payment_method("some example string", "some example string")
    # TODO: Handle 'response' of type PaymentMethod
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentMethodErrorBody
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

**OnSuccess**: <code>[PaymentMethod](paid/models/payment_method.py)</code> -- Payment method created successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreatePaymentMethodErrorBody](paid/errors/create_payment_method_error.py)&#93;</code>

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
<summary><code>def create3(authorization: str, *, body: CustomerCreate | CustomerCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
    response = client.customers.create3("some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.create3("some example string")
    # TODO: Handle 'response' of type Customer
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerCreate](paid/models/customer_create.py) \| [CustomerCreateDict](paid/models/customer_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](paid/models/customer.py)</code> -- Success response - customer already exists with this externalId

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.customers.delete_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.delete_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_alias(id_: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.customers.delete_customer_alias(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.delete_customer_alias(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerAliasErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteCustomerAliasErrorBody](paid/errors/delete_customer_alias_error.py)&#93;</code>

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
<summary><code>def delete_customer_alias_by_external_id(external_id: str, alias: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.customers.delete_customer_alias_by_external_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerAliasByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.delete_customer_alias_by_external_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerAliasByExternalIdErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteCustomerAliasByExternalIdErrorBody](paid/errors/delete_customer_alias_by_external_id_error.py)&#93;</code>

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
<summary><code>def delete_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.customers.delete_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.delete_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerByIdErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteCustomerByIdErrorBody](paid/errors/delete_customer_by_id_error.py)&#93;</code>

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
<summary><code>def delete_payment_method(external_id: str, payment_method_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.customers.delete_payment_method(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePaymentMethodErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.delete_payment_method(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePaymentMethodErrorBody
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

**OnSuccess**: <code>Any</code> -- Payment method deleted successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeletePaymentMethodErrorBody](paid/errors/delete_payment_method_error.py)&#93;</code>

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
<summary><code>def delete3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.customers.delete3("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.delete3("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id3(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
    response = client.customers.get_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.get_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](paid/models/customer.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_costs_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> CostTracesResponse</code></summary>

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
    response = client.customers.get_costs_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type CostTracesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCostsByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_costs_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type CostTracesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCostsByExternalIdErrorBody
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

**OnSuccess**: <code>[CostTracesResponse](paid/models/cost_traces_response.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCostsByExternalIdErrorBody](paid/errors/get_costs_by_external_id_error.py)&#93;</code>

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
<summary><code>def get_customer_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Customer1</code></summary>

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
try:
    response = client.customers.get_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerByIdErrorBody
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

**OnSuccess**: <code>[Customer1](paid/models/customer1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerByIdErrorBody](paid/errors/get_customer_by_id_error.py)&#93;</code>

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
<summary><code>def get_customer_credit_balances(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CreditBalanceListResponse</code></summary>

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
try:
    response = client.customers.get_customer_credit_balances("some example string", "some example string")
    # TODO: Handle 'response' of type CreditBalanceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerCreditBalancesErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_credit_balances("some example string", "some example string")
    # TODO: Handle 'response' of type CreditBalanceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerCreditBalancesErrorBody
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

**OnSuccess**: <code>[CreditBalanceListResponse](paid/models/credit_balance_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerCreditBalancesErrorBody](paid/errors/get_customer_credit_balances_error.py)&#93;</code>

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
<summary><code>def get_customer_credit_balances_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CreditBalanceListResponse</code></summary>

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
try:
    response = client.customers.get_customer_credit_balances_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreditBalanceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerCreditBalancesByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_credit_balances_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreditBalanceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerCreditBalancesByExternalIdErrorBody
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

**OnSuccess**: <code>[CreditBalanceListResponse](paid/models/credit_balance_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerCreditBalancesByExternalIdErrorBody](paid/errors/get_customer_credit_balances_by_external_id_error.py)&#93;</code>

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
<summary><code>def get_customer_state_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomerState</code></summary>

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
try:
    response = client.customers.get_customer_state_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerStateByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_state_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomerState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerStateByExternalIdErrorBody
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

**OnSuccess**: <code>[CustomerState](paid/models/customer_state.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerStateByExternalIdErrorBody](paid/errors/get_customer_state_by_external_id_error.py)&#93;</code>

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
<summary><code>def get_customer_state_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomerState</code></summary>

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
try:
    response = client.customers.get_customer_state_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerStateByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_state_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerStateByIdErrorBody
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

**OnSuccess**: <code>[CustomerState](paid/models/customer_state.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomerStateByIdErrorBody](paid/errors/get_customer_state_by_id_error.py)&#93;</code>

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
<summary><code>def get_entitlements(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[EntitlementUsage]</code></summary>

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
    response = client.customers.get_entitlements("some example string", "some example string")
    # TODO: Handle 'response' of type list[EntitlementUsage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntitlementsErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_entitlements("some example string", "some example string")
    # TODO: Handle 'response' of type list[EntitlementUsage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntitlementsErrorBody
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

**OnSuccess**: <code>list&#91;[EntitlementUsage](paid/models/entitlement_usage.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetEntitlementsErrorBody](paid/errors/get_entitlements_error.py)&#93;</code>

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
<summary><code>def get_usage_by_external_id(external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> UsageSummariesResponse</code></summary>

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
    response = client.customers.get_usage_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type UsageSummariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_usage_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type UsageSummariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageByExternalIdErrorBody
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

**OnSuccess**: <code>[UsageSummariesResponse](paid/models/usage_summaries_response.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetUsageByExternalIdErrorBody](paid/errors/get_usage_by_external_id_error.py)&#93;</code>

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
<summary><code>def get3(customer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
    response = client.customers.get3("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.get3("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](paid/models/customer.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def grant_customer_credits(id_: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GrantCustomerCreditsResponse</code></summary>

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
try:
    response = client.customers.grant_customer_credits("some example string", "some example string")
    # TODO: Handle 'response' of type GrantCustomerCreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrantCustomerCreditsErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.grant_customer_credits("some example string", "some example string")
    # TODO: Handle 'response' of type GrantCustomerCreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrantCustomerCreditsErrorBody
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

**OnSuccess**: <code>[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GrantCustomerCreditsErrorBody](paid/errors/grant_customer_credits_error.py)&#93;</code>

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
<summary><code>def grant_customer_credits_by_external_id(external_id: str, authorization: str, *, body: CreditGrantCreateRequest | CreditGrantCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GrantCustomerCreditsResponse</code></summary>

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
try:
    response = client.customers.grant_customer_credits_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type GrantCustomerCreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrantCustomerCreditsByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.grant_customer_credits_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GrantCustomerCreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrantCustomerCreditsByExternalIdErrorBody
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

**OnSuccess**: <code>[GrantCustomerCreditsResponse](paid/models/grant_customer_credits_response.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GrantCustomerCreditsByExternalIdErrorBody](paid/errors/grant_customer_credits_by_external_id_error.py)&#93;</code>

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
<summary><code>def list_customer_aliases(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerAliasListResponse</code></summary>

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
try:
    response = client.customers.list_customer_aliases("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAliasListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAliasesErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customer_aliases("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAliasListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAliasesErrorBody
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

**OnSuccess**: <code>[CustomerAliasListResponse](paid/models/customer_alias_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCustomerAliasesErrorBody](paid/errors/list_customer_aliases_error.py)&#93;</code>

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
<summary><code>def list_customer_aliases_by_external_id(external_id: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerAliasListResponse</code></summary>

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
try:
    response = client.customers.list_customer_aliases_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type CustomerAliasListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAliasesByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customer_aliases_by_external_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomerAliasListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAliasesByExternalIdErrorBody
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

**OnSuccess**: <code>[CustomerAliasListResponse](paid/models/customer_alias_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCustomerAliasesByExternalIdErrorBody](paid/errors/list_customer_aliases_by_external_id_error.py)&#93;</code>

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
<summary><code>def list_customers(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, status: CustomersGetParametersStatusOrStr | None = None, creation_state: CustomersGetParametersCreationStateOrStr | None = None, created_at_from: str | None = None, created_at_to: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerListResponse</code></summary>

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
try:
    response = client.customers.list_customers("some example string")
    # TODO: Handle 'response' of type CustomerListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customers("some example string")
    # TODO: Handle 'response' of type CustomerListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
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

**OnSuccess**: <code>[CustomerListResponse](paid/models/customer_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCustomersErrorBody](paid/errors/list_customers_error.py)&#93;</code>

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
<summary><code>def list_payment_methods(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[PaymentMethod]</code></summary>

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
try:
    response = client.customers.list_payment_methods("some example string", "some example string")
    # TODO: Handle 'response' of type list[PaymentMethod]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentMethodsErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_payment_methods("some example string", "some example string")
    # TODO: Handle 'response' of type list[PaymentMethod]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentMethodsErrorBody
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

**OnSuccess**: <code>list&#91;[PaymentMethod](paid/models/payment_method.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListPaymentMethodsErrorBody](paid/errors/list_payment_methods_error.py)&#93;</code>

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
<summary><code>def list3(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Customer]</code></summary>

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
    response = client.customers.list3("some example string")
    # TODO: Handle 'response' of type list[Customer]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.list3("some example string")
    # TODO: Handle 'response' of type list[Customer]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Customer](paid/models/customer.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id2(external_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
    response = client.customers.update_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.update_by_external_id2("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerUpdate](paid/models/customer_update.py) \| [CustomerUpdateDict](paid/models/customer_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](paid/models/customer.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_by_id(id_: str, authorization: str, *, body: UpdateCustomerRequest | UpdateCustomerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer1</code></summary>

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
try:
    response = client.customers.update_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Customer1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerByIdErrorBody
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

**OnSuccess**: <code>[Customer1](paid/models/customer1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCustomerByIdErrorBody](paid/errors/update_customer_by_id_error.py)&#93;</code>

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
<summary><code>def update2(customer_id: str, authorization: str, *, body: CustomerUpdate | CustomerUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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
    response = client.customers.update2("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.customers.update2("some example string", "some example string")
    # TODO: Handle 'response' of type Customer
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
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[CustomerUpdate](paid/models/customer_update.py) \| [CustomerUpdateDict](paid/models/customer_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](paid/models/customer.py)</code> -- Customer updated successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_customer_user_by_external_id(customer_external_id: str, user_external_id: str, authorization: str, *, body: UpsertCustomerUserRequest | UpsertCustomerUserRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerUser</code></summary>

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
try:
    response = client.customers.upsert_customer_user_by_external_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomerUser
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertCustomerUserByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.upsert_customer_user_by_external_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomerUser
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertCustomerUserByExternalIdErrorBody
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

**OnSuccess**: <code>[CustomerUser](paid/models/customer_user.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpsertCustomerUserByExternalIdErrorBody](paid/errors/upsert_customer_user_by_external_id_error.py)&#93;</code>

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
<summary><code>def get_invoice_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.get_invoice_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.get_invoice_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceByIdErrorBody
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

**OnSuccess**: <code>[Invoice](paid/models/invoice.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetInvoiceByIdErrorBody](paid/errors/get_invoice_by_id_error.py)&#93;</code>

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
<summary><code>def get_invoice_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceLinesResponse</code></summary>

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
try:
    response = client.invoices.get_invoice_lines("some example string", "some example string")
    # TODO: Handle 'response' of type InvoiceLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceLinesErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.get_invoice_lines("some example string", "some example string")
    # TODO: Handle 'response' of type InvoiceLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceLinesErrorBody
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

**OnSuccess**: <code>[InvoiceLinesResponse](paid/models/invoice_lines_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetInvoiceLinesErrorBody](paid/errors/get_invoice_lines_error.py)&#93;</code>

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
<summary><code>def list_invoices(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, status: InvoicesGetParametersStatusOrStr | None = None, payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None, issue_date_from: str | None = None, issue_date_to: str | None = None, due_date_from: str | None = None, due_date_to: str | None = None, display_number: str | None = None, purchase_order_reference: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceListResponse</code></summary>

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
try:
    response = client.invoices.list_invoices("some example string")
    # TODO: Handle 'response' of type InvoiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.list_invoices("some example string")
    # TODO: Handle 'response' of type InvoiceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
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

**OnSuccess**: <code>[InvoiceListResponse](paid/models/invoice_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListInvoicesErrorBody](paid/errors/list_invoices_error.py)&#93;</code>

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
<summary><code>def update_invoice_by_id(id_: str, authorization: str, *, body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Invoice</code></summary>

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
try:
    response = client.invoices.update_invoice_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.update_invoice_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Invoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceByIdErrorBody
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

**OnSuccess**: <code>[Invoice](paid/models/invoice.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateInvoiceByIdErrorBody](paid/errors/update_invoice_by_id_error.py)&#93;</code>

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
<summary><code>def activate(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
    response = client.orders.activate("some example string", "some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders.activate("some example string", "some example string")
    # TODO: Handle 'response' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def activate_and_pay(order_id: str, authorization: str, *, body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
try:
    response = client.orders.activate_and_pay("some example string", "some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateAndPayErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.activate_and_pay("some example string", "some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateAndPayErrorBody
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

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Order activated and payment processed successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ActivateAndPayErrorBody](paid/errors/activate_and_pay_error.py)&#93;</code>

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
<summary><code>def activate_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order1</code></summary>

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
try:
    response = client.orders.activate_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateOrderByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.activate_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateOrderByIdErrorBody
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

**OnSuccess**: <code>[Order1](paid/models/order1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ActivateOrderByIdErrorBody](paid/errors/activate_order_by_id_error.py)&#93;</code>

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
<summary><code>def batch_order_seat_assignments(id_: str, authorization: str, *, body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BatchSeatAssignmentsResponse</code></summary>

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
try:
    response = client.orders.batch_order_seat_assignments("some example string", "some example string")
    # TODO: Handle 'response' of type BatchSeatAssignmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchOrderSeatAssignmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.batch_order_seat_assignments("some example string", "some example string")
    # TODO: Handle 'response' of type BatchSeatAssignmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchOrderSeatAssignmentsErrorBody
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

**OnSuccess**: <code>[BatchSeatAssignmentsResponse](paid/models/batch_seat_assignments_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[BatchOrderSeatAssignmentsErrorBody](paid/errors/batch_order_seat_assignments_error.py)&#93;</code>

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
<summary><code>def cancel_renewal(order_id: str, authorization: str, *, body: CancelRenewalRequest | CancelRenewalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CancelRenewalResponse</code></summary>

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
try:
    response = client.orders.cancel_renewal("some example string", "some example string")
    # TODO: Handle 'response' of type CancelRenewalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRenewalErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.cancel_renewal("some example string", "some example string")
    # TODO: Handle 'response' of type CancelRenewalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRenewalErrorBody
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

**OnSuccess**: <code>[CancelRenewalResponse](paid/models/cancel_renewal_response.py)</code> -- Order renewal cancelled successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CancelRenewalErrorBody](paid/errors/cancel_renewal_error.py)&#93;</code>

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
<summary><code>def create_order(authorization: str, *, body: CreateOrderRequest | CreateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Order1</code></summary>

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
try:
    response = client.orders.create_order("some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.create_order("some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrderErrorBody
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

**OnSuccess**: <code>[Order1](paid/models/order1.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateOrderErrorBody](paid/errors/create_order_error.py)&#93;</code>

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
<summary><code>def create4(authorization: str, *, body: OrderCreate | OrderCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
    response = client.orders.create4("some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders.create4("some example string")
    # TODO: Handle 'response' of type Order
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[OrderCreate](paid/models/order_create.py) \| [OrderCreateDict](paid/models/order_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.orders.delete_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteOrderByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.delete_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteOrderByIdErrorBody
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

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[DeleteOrderByIdErrorBody](paid/errors/delete_order_by_id_error.py)&#93;</code>

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
<summary><code>def delete4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.orders.delete4("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders.delete4("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_invoices(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[InvoicePaidOrdersApi]</code></summary>

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
try:
    response = client.orders.get_invoices("some example string", "some example string")
    # TODO: Handle 'response' of type list[InvoicePaidOrdersApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.get_invoices("some example string", "some example string")
    # TODO: Handle 'response' of type list[InvoicePaidOrdersApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoicesErrorBody
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

**OnSuccess**: <code>list&#91;[InvoicePaidOrdersApi](paid/models/invoice_paid_orders_api.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetInvoicesErrorBody](paid/errors/get_invoices_error.py)&#93;</code>

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
<summary><code>def get_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order1</code></summary>

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
try:
    response = client.orders.get_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.get_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderByIdErrorBody
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

**OnSuccess**: <code>[Order1](paid/models/order1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetOrderByIdErrorBody](paid/errors/get_order_by_id_error.py)&#93;</code>

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
<summary><code>def get_order_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> OrderLinesResponse</code></summary>

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
try:
    response = client.orders.get_order_lines("some example string", "some example string")
    # TODO: Handle 'response' of type OrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderLinesErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.get_order_lines("some example string", "some example string")
    # TODO: Handle 'response' of type OrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderLinesErrorBody
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

**OnSuccess**: <code>[OrderLinesResponse](paid/models/order_lines_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetOrderLinesErrorBody](paid/errors/get_order_lines_error.py)&#93;</code>

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
<summary><code>def get4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
    response = client.orders.get4("some example string", "some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders.get4("some example string", "some example string")
    # TODO: Handle 'response' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_order_seats(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, product_external_id: str | None = None, status: OrdersIdSeatsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> OrderSeatListResponse</code></summary>

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
try:
    response = client.orders.list_order_seats("some example string", "some example string")
    # TODO: Handle 'response' of type OrderSeatListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrderSeatsErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.list_order_seats("some example string", "some example string")
    # TODO: Handle 'response' of type OrderSeatListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrderSeatsErrorBody
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

**OnSuccess**: <code>[OrderSeatListResponse](paid/models/order_seat_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListOrderSeatsErrorBody](paid/errors/list_order_seats_error.py)&#93;</code>

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
<summary><code>def list_orders(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, external_id: str | None = None, creation_state: OrdersGetParametersCreationStateOrStr | None = None, status: OrdersGetParametersStatusOrStr | None = None, start_date_from: str | None = None, start_date_to: str | None = None, end_date_from: str | None = None, end_date_to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrderListResponse</code></summary>

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
try:
    response = client.orders.list_orders("some example string")
    # TODO: Handle 'response' of type OrderListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.list_orders("some example string")
    # TODO: Handle 'response' of type OrderListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrdersErrorBody
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

**OnSuccess**: <code>[OrderListResponse](paid/models/order_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListOrdersErrorBody](paid/errors/list_orders_error.py)&#93;</code>

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
<summary><code>def list4(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Order]</code></summary>

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
    response = client.orders.list4("some example string")
    # TODO: Handle 'response' of type list[Order]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders.list4("some example string")
    # TODO: Handle 'response' of type list[Order]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Order](paid/models/order.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def schedule_plan_change(order_id: str, authorization: str, *, body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ProrationUpgradeResponse</code></summary>

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
try:
    response = client.orders.schedule_plan_change("some example string", "some example string")
    # TODO: Handle 'response' of type ProrationUpgradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SchedulePlanChangeErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.schedule_plan_change("some example string", "some example string")
    # TODO: Handle 'response' of type ProrationUpgradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SchedulePlanChangeErrorBody
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

**OnSuccess**: <code>[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py)</code> -- Plan change scheduled successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[SchedulePlanChangeErrorBody](paid/errors/schedule_plan_change_error.py)&#93;</code>

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
<summary><code>def update_order_by_id(id_: str, authorization: str, *, body: UpdateOrderRequest | UpdateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Order1</code></summary>

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
try:
    response = client.orders.update_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.update_order_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Order1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderByIdErrorBody
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

**OnSuccess**: <code>[Order1](paid/models/order1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateOrderByIdErrorBody](paid/errors/update_order_by_id_error.py)&#93;</code>

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
<summary><code>def update_order_seat_assignment(id_: str, seat_id: str, authorization: str, *, body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> OrderSeat</code></summary>

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
try:
    response = client.orders.update_order_seat_assignment(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type OrderSeat
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderSeatAssignmentErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.update_order_seat_assignment(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type OrderSeat
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrderSeatAssignmentErrorBody
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

**OnSuccess**: <code>[OrderSeat](paid/models/order_seat.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateOrderSeatAssignmentErrorBody](paid/errors/update_order_seat_assignment_error.py)&#93;</code>

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
<summary><code>def create_plan(authorization: str, *, body: CreatePlanRequest | CreatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Plan1</code></summary>

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
try:
    response = client.plans.create_plan("some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePlanErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.create_plan("some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePlanErrorBody
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

**OnSuccess**: <code>[Plan1](paid/models/plan1.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreatePlanErrorBody](paid/errors/create_plan_error.py)&#93;</code>

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
<summary><code>def get_by_id(plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Plan</code></summary>

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
    response = client.plans.get_by_id(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_by_id(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type Plan
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetByIdErrorBody
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

**OnSuccess**: <code>[Plan](paid/models/plan.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetByIdErrorBody](paid/errors/get_by_id_error.py)&#93;</code>

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
<summary><code>def get_current(customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PlansGetCurrentResponse200</code></summary>

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
try:
    response = client.plans.get_current("some example string", "some example string")
    # TODO: Handle 'response' of type PlansGetCurrentResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_current("some example string", "some example string")
    # TODO: Handle 'response' of type PlansGetCurrentResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentErrorBody
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

**OnSuccess**: <code>[PlansGetCurrentResponse200](paid/models/plans_get_current_response200.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCurrentErrorBody](paid/errors/get_current_error.py)&#93;</code>

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
<summary><code>def get_group_by_id(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PlanGroup</code></summary>

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
    response = client.plans.get_group_by_id(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type PlanGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_group_by_id(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type PlanGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupByIdErrorBody
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

**OnSuccess**: <code>[PlanGroup](paid/models/plan_group.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetGroupByIdErrorBody](paid/errors/get_group_by_id_error.py)&#93;</code>

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
<summary><code>def get_group_plans(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[PlanWithFeatures]</code></summary>

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
try:
    response = client.plans.get_group_plans(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type list[PlanWithFeatures]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupPlansErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_group_plans(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type list[PlanWithFeatures]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupPlansErrorBody
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

**OnSuccess**: <code>list&#91;[PlanWithFeatures](paid/models/plan_with_features.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetGroupPlansErrorBody](paid/errors/get_group_plans_error.py)&#93;</code>

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
<summary><code>def get_plan_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Plan1</code></summary>

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
try:
    response = client.plans.get_plan_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_plan_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanByExternalIdErrorBody
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

**OnSuccess**: <code>[Plan1](paid/models/plan1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetPlanByExternalIdErrorBody](paid/errors/get_plan_by_external_id_error.py)&#93;</code>

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
<summary><code>def get_plan_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Plan1</code></summary>

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
try:
    response = client.plans.get_plan_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_plan_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPlanByIdErrorBody
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

**OnSuccess**: <code>[Plan1](paid/models/plan1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetPlanByIdErrorBody](paid/errors/get_plan_by_id_error.py)&#93;</code>

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
<summary><code>def get_usage(plan_id: UUID, external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> UsageSummariesResponse</code></summary>

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
    response = client.plans.get_usage(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UsageSummariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.get_usage(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UsageSummariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageErrorBody
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

**OnSuccess**: <code>[UsageSummariesResponse](paid/models/usage_summaries_response.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetUsageErrorBody](paid/errors/get_usage_error.py)&#93;</code>

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
<summary><code>def list_plans(authorization: str, *, limit: int | None = 10, offset: int | None = None, product_id: str | None = None, external_product_id: str | None = None, include_archived: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> PlanListResponse</code></summary>

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
try:
    response = client.plans.list_plans("some example string")
    # TODO: Handle 'response' of type PlanListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlansErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.list_plans("some example string")
    # TODO: Handle 'response' of type PlanListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlansErrorBody
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

**OnSuccess**: <code>[PlanListResponse](paid/models/plan_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListPlansErrorBody](paid/errors/list_plans_error.py)&#93;</code>

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
<summary><code>def subscribe(plan_id: UUID, customer_external_id: str, currency: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
try:
    response = client.plans.subscribe(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribeErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.subscribe(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubscribeErrorBody
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

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Customer subscribed to plan successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[SubscribeErrorBody](paid/errors/subscribe_error.py)&#93;</code>

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
<summary><code>def unsubscribe(plan_id: UUID, customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CancelRenewalResponse</code></summary>

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
try:
    response = client.plans.unsubscribe(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CancelRenewalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnsubscribeErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.unsubscribe(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CancelRenewalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnsubscribeErrorBody
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

**OnSuccess**: <code>[CancelRenewalResponse](paid/models/cancel_renewal_response.py)</code> -- Customer unsubscribed from plan successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UnsubscribeErrorBody](paid/errors/unsubscribe_error.py)&#93;</code>

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
<summary><code>def update_plan_by_external_id(external_id: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Plan1</code></summary>

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
try:
    response = client.plans.update_plan_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanByExternalIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.update_plan_by_external_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanByExternalIdErrorBody
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

**OnSuccess**: <code>[Plan1](paid/models/plan1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdatePlanByExternalIdErrorBody](paid/errors/update_plan_by_external_id_error.py)&#93;</code>

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
<summary><code>def update_plan_by_id(id_: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Plan1</code></summary>

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
try:
    response = client.plans.update_plan_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.update_plan_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type Plan1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanByIdErrorBody
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

**OnSuccess**: <code>[Plan1](paid/models/plan1.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdatePlanByIdErrorBody](paid/errors/update_plan_by_id_error.py)&#93;</code>

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
<summary><code>def update_plan_upgrade_path(authorization: str, *, body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PlanUpgradePathResponse</code></summary>

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
try:
    response = client.plans.update_plan_upgrade_path("some example string")
    # TODO: Handle 'response' of type PlanUpgradePathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanUpgradePathErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.update_plan_upgrade_path("some example string")
    # TODO: Handle 'response' of type PlanUpgradePathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePlanUpgradePathErrorBody
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

**OnSuccess**: <code>[PlanUpgradePathResponse](paid/models/plan_upgrade_path_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdatePlanUpgradePathErrorBody](paid/errors/update_plan_upgrade_path_error.py)&#93;</code>

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
<summary><code>def upgrade(customer_external_id: str, old_plan_id: UUID, new_plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ProrationUpgradeResponse</code></summary>

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
try:
    response = client.plans.upgrade(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
    )
    # TODO: Handle 'response' of type ProrationUpgradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpgradeErrorBody
```

**Async**

```python
try:
    response = await async_client.plans.upgrade(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
    )
    # TODO: Handle 'response' of type ProrationUpgradeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpgradeErrorBody
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

**OnSuccess**: <code>[ProrationUpgradeResponse](paid/models/proration_upgrade_response.py)</code> -- Plan upgrade completed successfully

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpgradeErrorBody](paid/errors/upgrade_error.py)&#93;</code>

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
<summary><code>def get_pricing(product_attribute_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PricingResponse</code></summary>

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
try:
    response = client.pricing_api.get_pricing(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type PricingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricingErrorBody
```

**Async**

```python
try:
    response = await async_client.pricing_api.get_pricing(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type PricingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricingErrorBody
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

**OnSuccess**: <code>[PricingResponse](paid/models/pricing_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetPricingErrorBody](paid/errors/get_pricing_error.py)&#93;</code>

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
<summary><code>def list_pricing(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> PricingListResponse</code></summary>

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
try:
    response = client.pricing_api.list_pricing("some example string", "some example string")
    # TODO: Handle 'response' of type PricingListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPricingErrorBody
```

**Async**

```python
try:
    response = await async_client.pricing_api.list_pricing("some example string", "some example string")
    # TODO: Handle 'response' of type PricingListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPricingErrorBody
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

**OnSuccess**: <code>[PricingListResponse](paid/models/pricing_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListPricingErrorBody](paid/errors/list_pricing_error.py)&#93;</code>

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
<summary><code>def update_pricing(product_attribute_id: UUID, authorization: str, *, body: UpdatePricingRequest | UpdatePricingRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PricingResponse</code></summary>

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
try:
    response = client.pricing_api.update_pricing(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type PricingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePricingErrorBody
```

**Async**

```python
try:
    response = await async_client.pricing_api.update_pricing(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type PricingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePricingErrorBody
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

**OnSuccess**: <code>[PricingResponse](paid/models/pricing_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdatePricingErrorBody](paid/errors/update_pricing_error.py)&#93;</code>

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
<summary><code>def create_product(authorization: str, *, body: CreateProductRequest | CreateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Product1</code></summary>

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
try:
    response = client.products.create_product("some example string")
    # TODO: Handle 'response' of type Product1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProductErrorBody
```

**Async**

```python
try:
    response = await async_client.products.create_product("some example string")
    # TODO: Handle 'response' of type Product1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProductErrorBody
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

**OnSuccess**: <code>[Product1](paid/models/product1.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateProductErrorBody](paid/errors/create_product_error.py)&#93;</code>

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
<summary><code>def create5(authorization: str, *, body: ProductCreate | ProductCreateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Product</code></summary>

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
    response = client.products.create5("some example string")
    # TODO: Handle 'response' of type Product
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.create5("some example string")
    # TODO: Handle 'response' of type Product
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductCreate](paid/models/product_create.py) \| [ProductCreateDict](paid/models/product_create.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](paid/models/product.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.products.delete_by_external_id4("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.delete_by_external_id4("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.products.delete5("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.delete5("some example string", "some example string")
    # TODO: Handle 'response' of type Any
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_by_external_id4(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Product</code></summary>

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
    response = client.products.get_by_external_id4("some example string", "some example string")
    # TODO: Handle 'response' of type Product
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.get_by_external_id4("some example string", "some example string")
    # TODO: Handle 'response' of type Product
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](paid/models/product.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_product_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ProductDetail</code></summary>

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
try:
    response = client.products.get_product_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ProductDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProductByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.products.get_product_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ProductDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProductByIdErrorBody
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

**OnSuccess**: <code>[ProductDetail](paid/models/product_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetProductByIdErrorBody](paid/errors/get_product_by_id_error.py)&#93;</code>

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
<summary><code>def get5(product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Product</code></summary>

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
    response = client.products.get5("some example string", "some example string")
    # TODO: Handle 'response' of type Product
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.get5("some example string", "some example string")
    # TODO: Handle 'response' of type Product
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](paid/models/product.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_products(authorization: str, *, limit: int | None = 10, offset: int | None = None, name: str | None = None, active: bool | None = None, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ProductListResponse</code></summary>

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
try:
    response = client.products.list_products("some example string")
    # TODO: Handle 'response' of type ProductListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProductsErrorBody
```

**Async**

```python
try:
    response = await async_client.products.list_products("some example string")
    # TODO: Handle 'response' of type ProductListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProductsErrorBody
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

**OnSuccess**: <code>[ProductListResponse](paid/models/product_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListProductsErrorBody](paid/errors/list_products_error.py)&#93;</code>

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
<summary><code>def list5(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Product]</code></summary>

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
    response = client.products.list5("some example string")
    # TODO: Handle 'response' of type list[Product]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.list5("some example string")
    # TODO: Handle 'response' of type list[Product]
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Product](paid/models/product.py)&#93;</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_by_external_id3(external_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Product</code></summary>

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
    response = client.products.update_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Product
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.update_by_external_id3("some example string", "some example string")
    # TODO: Handle 'response' of type Product
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
| <code>external_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductUpdate](paid/models/product_update.py) \| [ProductUpdateDict](paid/models/product_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](paid/models/product.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_product_by_id(id_: str, authorization: str, *, body: UpdateProductRequest | UpdateProductRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ProductDetail</code></summary>

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
try:
    response = client.products.update_product_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ProductDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProductByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.products.update_product_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ProductDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProductByIdErrorBody
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

**OnSuccess**: <code>[ProductDetail](paid/models/product_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateProductByIdErrorBody](paid/errors/update_product_by_id_error.py)&#93;</code>

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
<summary><code>def update4(product_id: str, authorization: str, *, body: ProductUpdate | ProductUpdateDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Product</code></summary>

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
    response = client.products.update4("some example string", "some example string")
    # TODO: Handle 'response' of type Product
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.products.update4("some example string", "some example string")
    # TODO: Handle 'response' of type Product
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
| <code>product_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[ProductUpdate](paid/models/product_update.py) \| [ProductUpdateDict](paid/models/product_update.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Product](paid/models/product.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signals

> Source: [Signals](paid/apis/signals.py)

<details>
<summary><code>def create_signals(authorization: str, *, body: BulkSignalsRequest | BulkSignalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkSignalsResponse</code></summary>

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
try:
    response = client.signals.create_signals("some example string")
    # TODO: Handle 'response' of type BulkSignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignalsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals.create_signals("some example string")
    # TODO: Handle 'response' of type BulkSignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSignalsErrorBody
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

**OnSuccess**: <code>[BulkSignalsResponse](paid/models/bulk_signals_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateSignalsErrorBody](paid/errors/create_signals_error.py)&#93;</code>

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
<summary><code>def get_traces(authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, external_customer_id: str | None = None, external_product_id: str | None = None, external_agent_id: str | None = None, metadata: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TracesResponse</code></summary>

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
    response = client.traces.get_traces("some example string")
    # TODO: Handle 'response' of type TracesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTracesErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_traces("some example string")
    # TODO: Handle 'response' of type TracesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTracesErrorBody
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

**OnSuccess**: <code>[TracesResponse](paid/models/traces_response.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetTracesErrorBody](paid/errors/get_traces_error.py)&#93;</code>

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
<summary><code>def check_usage(authorization: str, *, body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UsageCheckUsageResponse200</code></summary>

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
    response = client.usage.check_usage("some example string")
    # TODO: Handle 'response' of type UsageCheckUsageResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.usage.check_usage("some example string")
    # TODO: Handle 'response' of type UsageCheckUsageResponse200
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckUsageErrorBody
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

**OnSuccess**: <code>[UsageCheckUsageResponse200](paid/models/usage_check_usage_response200.py)</code> -- Usage check response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CheckUsageErrorBody](paid/errors/check_usage_error.py)&#93;</code>

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
<summary><code>def record_bulk(authorization: str, *, body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.usage.record_bulk("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.usage.record_bulk("some example string")
    # TODO: Handle 'response' of type Any
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
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[UsageSignalsBulkRequest](paid/models/usage_signals_bulk_request.py) \| [UsageSignalsBulkRequestDict](paid/models/usage_signals_bulk_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usage_record_bulk_v_2(authorization: str, *, body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
    response = client.usage.usage_record_bulk_v_2("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsageRecordBulkV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.usage.usage_record_bulk_v_2("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsageRecordBulkV2ErrorBody
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

**OnSuccess**: <code>Any</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UsageRecordBulkV2ErrorBody](paid/errors/usage_record_bulk_v2_error.py)&#93;</code>

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
<summary><code>def list_webhooks(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookListResponse</code></summary>

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
try:
    response = client.webhooks_api.list_webhooks("some example string")
    # TODO: Handle 'response' of type WebhookListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_webhooks("some example string")
    # TODO: Handle 'response' of type WebhookListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
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

**OnSuccess**: <code>[WebhookListResponse](paid/models/webhook_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListWebhooksErrorBody](paid/errors/list_webhooks_error.py)&#93;</code>

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
<summary><code>def rotate_webhook_secret(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> RotateWebhookSecretResponse</code></summary>

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
try:
    response = client.webhooks_api.rotate_webhook_secret("some example string")
    # TODO: Handle 'response' of type RotateWebhookSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateWebhookSecretErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.rotate_webhook_secret("some example string")
    # TODO: Handle 'response' of type RotateWebhookSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateWebhookSecretErrorBody
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

**OnSuccess**: <code>[RotateWebhookSecretResponse](paid/models/rotate_webhook_secret_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RotateWebhookSecretErrorBody](paid/errors/rotate_webhook_secret_error.py)&#93;</code>

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
<summary><code>def test_webhook(webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> WebhookTestResponse</code></summary>

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
try:
    response = client.webhooks_api.test_webhook(
        WebhooksWebhookNameTestPostParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
    )
    # TODO: Handle 'response' of type WebhookTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.test_webhook(
        WebhooksWebhookNameTestPostParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
    )
    # TODO: Handle 'response' of type WebhookTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestWebhookErrorBody
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

**OnSuccess**: <code>[WebhookTestResponse](paid/models/webhook_test_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[TestWebhookErrorBody](paid/errors/test_webhook_error.py)&#93;</code>

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
<summary><code>def update_webhook(webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr, authorization: str, *, body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> WebhookUpdateResponse</code></summary>

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
try:
    response = client.webhooks_api.update_webhook(
        WebhooksWebhookNamePatchParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
    )
    # TODO: Handle 'response' of type WebhookUpdateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_webhook(
        WebhooksWebhookNamePatchParametersWebhookName.BILLING_INVOICE_CREATED, "some example string"
    )
    # TODO: Handle 'response' of type WebhookUpdateResponse
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
| <code>webhook_name</code> | <code>[WebhooksWebhookNamePatchParametersWebhookNameOrStr](paid/models/enums/webhooks_webhook_name_patch_parameters_webhook_name.py)</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | API Key authentication using Bearer token |
| <code>body</code> | <code>[UpdateWebhookRequest](paid/models/update_webhook_request.py) \| [UpdateWebhookRequestDict](paid/models/update_webhook_request.py) \| None</code> | Body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookUpdateResponse](paid/models/webhook_update_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateWebhookErrorBody](paid/errors/update_webhook_error.py)&#93;</code>

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
<summary><code>def execute_analytics_query(authorization: str, *, body: AnalyticsQueryRequest | AnalyticsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AnalyticsQueryResponse</code></summary>

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
try:
    response = client.analytics_experimental.execute_analytics_query("some example string")
    # TODO: Handle 'response' of type AnalyticsQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExecuteAnalyticsQueryErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics_experimental.execute_analytics_query("some example string")
    # TODO: Handle 'response' of type AnalyticsQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExecuteAnalyticsQueryErrorBody
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

**OnSuccess**: <code>[AnalyticsQueryResponse](paid/models/analytics_query_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ExecuteAnalyticsQueryErrorBody](paid/errors/execute_analytics_query_error.py)&#93;</code>

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
<summary><code>def get_analytics_schema(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> AnalyticsSchemaResponse</code></summary>

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
try:
    response = client.analytics_experimental.get_analytics_schema("some example string")
    # TODO: Handle 'response' of type AnalyticsSchemaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnalyticsSchemaErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics_experimental.get_analytics_schema("some example string")
    # TODO: Handle 'response' of type AnalyticsSchemaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnalyticsSchemaErrorBody
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

**OnSuccess**: <code>[AnalyticsSchemaResponse](paid/models/analytics_schema_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetAnalyticsSchemaErrorBody](paid/errors/get_analytics_schema_error.py)&#93;</code>

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
<summary><code>def get_signals_metadata(authorization: str, *, signal_name: str | None = None, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> SignalsMetadataResponse</code></summary>

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
try:
    response = client.analytics_experimental.get_signals_metadata("some example string")
    # TODO: Handle 'response' of type SignalsMetadataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignalsMetadataErrorBody
```

**Async**

```python
try:
    response = await async_client.analytics_experimental.get_signals_metadata("some example string")
    # TODO: Handle 'response' of type SignalsMetadataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignalsMetadataErrorBody
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

**OnSuccess**: <code>[SignalsMetadataResponse](paid/models/signals_metadata_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetSignalsMetadataErrorBody](paid/errors/get_signals_metadata_error.py)&#93;</code>

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
<summary><code>def create_custom_view(authorization: str, *, body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomView</code></summary>

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
try:
    response = client.custom_views_experimental.create_custom_view("some example string")
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomViewErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.create_custom_view("some example string")
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomViewErrorBody
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

**OnSuccess**: <code>[CustomView](paid/models/custom_view.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomViewErrorBody](paid/errors/create_custom_view_error.py)&#93;</code>

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
<summary><code>def get_custom_view(display_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomViewDetail</code></summary>

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
try:
    response = client.custom_views_experimental.get_custom_view("some example string", "some example string")
    # TODO: Handle 'response' of type CustomViewDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.get_custom_view(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomViewDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewErrorBody
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

**OnSuccess**: <code>[CustomViewDetail](paid/models/custom_view_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomViewErrorBody](paid/errors/get_custom_view_error.py)&#93;</code>

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
<summary><code>def get_custom_view_data(display_id: str, authorization: str, *, customer_id: str | None = None, period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None, period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None, period_amount: int | None = None, period_start: str | None = None, period_end: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ViewDataResponse</code></summary>

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
try:
    response = client.custom_views_experimental.get_custom_view_data("some example string", "some example string")
    # TODO: Handle 'response' of type ViewDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewDataErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.get_custom_view_data(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ViewDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewDataErrorBody
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

**OnSuccess**: <code>[ViewDataResponse](paid/models/view_data_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomViewDataErrorBody](paid/errors/get_custom_view_data_error.py)&#93;</code>

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
<summary><code>def get_custom_view_embed_token(display_id: str, customer_id: str, authorization: str, *, ttl_seconds: int | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomViewEmbedTokenResponse</code></summary>

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
try:
    response = client.custom_views_experimental.get_custom_view_embed_token(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomViewEmbedTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewEmbedTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.get_custom_view_embed_token(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomViewEmbedTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomViewEmbedTokenErrorBody
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

**OnSuccess**: <code>[CustomViewEmbedTokenResponse](paid/models/custom_view_embed_token_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCustomViewEmbedTokenErrorBody](paid/errors/get_custom_view_embed_token_error.py)&#93;</code>

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
<summary><code>def list_custom_views(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomViewListResponse</code></summary>

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
try:
    response = client.custom_views_experimental.list_custom_views("some example string")
    # TODO: Handle 'response' of type CustomViewListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomViewsErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.list_custom_views("some example string")
    # TODO: Handle 'response' of type CustomViewListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomViewsErrorBody
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

**OnSuccess**: <code>[CustomViewListResponse](paid/models/custom_view_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListCustomViewsErrorBody](paid/errors/list_custom_views_error.py)&#93;</code>

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
<summary><code>def publish_custom_view(display_id: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomView</code></summary>

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
try:
    response = client.custom_views_experimental.publish_custom_view("some example string", "some example string")
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishCustomViewErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.publish_custom_view(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishCustomViewErrorBody
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

**OnSuccess**: <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[PublishCustomViewErrorBody](paid/errors/publish_custom_view_error.py)&#93;</code>

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
<summary><code>def update_custom_view(display_id: str, authorization: str, *, body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomView</code></summary>

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
try:
    response = client.custom_views_experimental.update_custom_view("some example string", "some example string")
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomViewErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.update_custom_view(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomViewErrorBody
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

**OnSuccess**: <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCustomViewErrorBody](paid/errors/update_custom_view_error.py)&#93;</code>

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
<summary><code>def update_custom_view_period(display_id: str, authorization: str, *, body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomView</code></summary>

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
try:
    response = client.custom_views_experimental.update_custom_view_period("some example string", "some example string")
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomViewPeriodErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_views_experimental.update_custom_view_period(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomViewPeriodErrorBody
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

**OnSuccess**: <code>[CustomView](paid/models/custom_view.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateCustomViewPeriodErrorBody](paid/errors/update_custom_view_period_error.py)&#93;</code>

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
<summary><code>def create_customer_portal(authorization: str, *, body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerPortal</code></summary>

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
try:
    response = client.customer_portals.create_customer_portal("some example string")
    # TODO: Handle 'response' of type CustomerPortal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerPortalErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_portals.create_customer_portal("some example string")
    # TODO: Handle 'response' of type CustomerPortal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerPortalErrorBody
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

**OnSuccess**: <code>[CustomerPortal](paid/models/customer_portal.py)</code> -- 201

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[CreateCustomerPortalErrorBody](paid/errors/create_customer_portal_error.py)&#93;</code>

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
<summary><code>def update3(order_id: str, authorization: str, *, body: OrdersLinesRequest | OrdersLinesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Order</code></summary>

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
    response = client.orders_lines.update3("some example string", "some example string")
    # TODO: Handle 'response' of type Order
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.orders_lines.update3("some example string", "some example string")
    # TODO: Handle 'response' of type Order
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
| <code>order_id</code> | <code>str</code> | Value sent with the request. |
| <code>authorization</code> | <code>str</code> | Bearer authentication |
| <code>body</code> | <code>[OrdersLinesRequest](paid/models/orders_lines_request.py) \| [OrdersLinesRequestDict](paid/models/orders_lines_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](paid/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Order](paid/models/order.py)</code> -- Success response

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RawError](paid/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValueModels

> Source: [ValueModels](paid/apis/value_models.py)

<details>
<summary><code>def get_current_value_model(authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ValueModelDetail</code></summary>

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
try:
    response = client.value_models.get_current_value_model("some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentValueModelErrorBody
```

**Async**

```python
try:
    response = await async_client.value_models.get_current_value_model("some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentValueModelErrorBody
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

**OnSuccess**: <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetCurrentValueModelErrorBody](paid/errors/get_current_value_model_error.py)&#93;</code>

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
<summary><code>def get_value_model_version(version: int, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ValueModelDetail</code></summary>

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
try:
    response = client.value_models.get_value_model_version(1, "some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetValueModelVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.value_models.get_value_model_version(1, "some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetValueModelVersionErrorBody
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

**OnSuccess**: <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetValueModelVersionErrorBody](paid/errors/get_value_model_version_error.py)&#93;</code>

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
<summary><code>def list_value_model_versions(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueModelVersionListResponse</code></summary>

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
try:
    response = client.value_models.list_value_model_versions("some example string")
    # TODO: Handle 'response' of type ValueModelVersionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListValueModelVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.value_models.list_value_model_versions("some example string")
    # TODO: Handle 'response' of type ValueModelVersionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListValueModelVersionsErrorBody
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

**OnSuccess**: <code>[ValueModelVersionListResponse](paid/models/value_model_version_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListValueModelVersionsErrorBody](paid/errors/list_value_model_versions_error.py)&#93;</code>

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
<summary><code>def refresh_value_model_backfill(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> BackfillResponse</code></summary>

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
try:
    response = client.value_models.refresh_value_model_backfill("some example string")
    # TODO: Handle 'response' of type BackfillResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshValueModelBackfillErrorBody
```

**Async**

```python
try:
    response = await async_client.value_models.refresh_value_model_backfill("some example string")
    # TODO: Handle 'response' of type BackfillResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshValueModelBackfillErrorBody
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

**OnSuccess**: <code>[BackfillResponse](paid/models/backfill_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RefreshValueModelBackfillErrorBody](paid/errors/refresh_value_model_backfill_error.py)&#93;</code>

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
<summary><code>def update_value_model(authorization: str, *, body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueModelDetail</code></summary>

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
try:
    response = client.value_models.update_value_model("some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateValueModelErrorBody
```

**Async**

```python
try:
    response = await async_client.value_models.update_value_model("some example string")
    # TODO: Handle 'response' of type ValueModelDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateValueModelErrorBody
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

**OnSuccess**: <code>[ValueModelDetail](paid/models/value_model_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UpdateValueModelErrorBody](paid/errors/update_value_model_error.py)&#93;</code>

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
<summary><code>def archive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.value_receipts.archive_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.archive_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveValueReceiptErrorBody
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

**OnSuccess**: <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ArchiveValueReceiptErrorBody](paid/errors/archive_value_receipt_error.py)&#93;</code>

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
<summary><code>def get_value_receipt_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptDetail</code></summary>

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
try:
    response = client.value_receipts.get_value_receipt_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetValueReceiptByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.get_value_receipt_by_id("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetValueReceiptByIdErrorBody
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

**OnSuccess**: <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[GetValueReceiptByIdErrorBody](paid/errors/get_value_receipt_by_id_error.py)&#93;</code>

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
<summary><code>def list_value_receipts(authorization: str, *, limit: int | None = 50, offset: int | None = 0, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, product_id: str | None = None, archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptListResponse</code></summary>

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
try:
    response = client.value_receipts.list_value_receipts("some example string")
    # TODO: Handle 'response' of type ValueReceiptListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListValueReceiptsErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.list_value_receipts("some example string")
    # TODO: Handle 'response' of type ValueReceiptListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListValueReceiptsErrorBody
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

**OnSuccess**: <code>[ValueReceiptListResponse](paid/models/value_receipt_list_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[ListValueReceiptsErrorBody](paid/errors/list_value_receipts_error.py)&#93;</code>

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
<summary><code>def publish_value_receipt(id_: str, authorization: str, *, body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptDetail</code></summary>

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
try:
    response = client.value_receipts.publish_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.publish_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishValueReceiptErrorBody
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

**OnSuccess**: <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[PublishValueReceiptErrorBody](paid/errors/publish_value_receipt_error.py)&#93;</code>

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
<summary><code>def refresh_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptSyncResponse</code></summary>

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
try:
    response = client.value_receipts.refresh_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.refresh_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshValueReceiptErrorBody
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

**OnSuccess**: <code>[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[RefreshValueReceiptErrorBody](paid/errors/refresh_value_receipt_error.py)&#93;</code>

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
<summary><code>def seal_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.value_receipts.seal_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SealValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.seal_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SealValueReceiptErrorBody
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

**OnSuccess**: <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[SealValueReceiptErrorBody](paid/errors/seal_value_receipt_error.py)&#93;</code>

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
<summary><code>def sync_value_receipt(authorization: str, *, body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptSyncResponse</code></summary>

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
try:
    response = client.value_receipts.sync_value_receipt("some example string")
    # TODO: Handle 'response' of type ValueReceiptSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SyncValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.sync_value_receipt("some example string")
    # TODO: Handle 'response' of type ValueReceiptSyncResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SyncValueReceiptErrorBody
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

**OnSuccess**: <code>[ValueReceiptSyncResponse](paid/models/value_receipt_sync_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[SyncValueReceiptErrorBody](paid/errors/sync_value_receipt_error.py)&#93;</code>

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
<summary><code>def unarchive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.value_receipts.unarchive_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnarchiveValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.unarchive_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnarchiveValueReceiptErrorBody
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

**OnSuccess**: <code>[SuccessResponse](paid/models/success_response.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UnarchiveValueReceiptErrorBody](paid/errors/unarchive_value_receipt_error.py)&#93;</code>

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
<summary><code>def unpublish_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> ValueReceiptDetail</code></summary>

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
try:
    response = client.value_receipts.unpublish_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishValueReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.value_receipts.unpublish_value_receipt("some example string", "some example string")
    # TODO: Handle 'response' of type ValueReceiptDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishValueReceiptErrorBody
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

**OnSuccess**: <code>[ValueReceiptDetail](paid/models/value_receipt_detail.py)</code> -- 200

**OnError**: <code>[ApiError](paid/core/exceptions.py)&#91;[UnpublishValueReceiptErrorBody](paid/errors/unpublish_value_receipt_error.py)&#93;</code>

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

