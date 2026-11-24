# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [InstacartClient](instacart/client.py)

## Authentication

> Source: [Authentication](instacart/apis/authentication.py)

<details>
<summary><code>def generate_access_token(body: TokenRequest | TokenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token rather than generating a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authentication.generate_access_token(
        TokenRequest(client_id="some example string", client_secret="some example string", scope="some example string")
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateAccessTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.authentication.generate_access_token(
        TokenRequest(client_id="some example string", client_secret="some example string", scope="some example string")
    )
    # TODO: Handle 'response' of type TokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateAccessTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TokenRequest](instacart/models/token_request.py) \| [TokenRequestDict](instacart/models/token_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](instacart/models/token_response.py)</code> -- Access token generated successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[GenerateAccessTokenErrorBody](instacart/errors/generate_access_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Chat

> Source: [Chat](instacart/apis/chat.py)

<details>
<summary><code>def get_chat_messages(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ChatMessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all chat messages associated with an order between the customer and the shopper. Messages are returned in chronological order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.chat.get_chat_messages("some example string")
    # TODO: Handle 'response' of type ChatMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChatMessagesErrorBody
```

**Async**

```python
try:
    response = await async_client.chat.get_chat_messages("some example string")
    # TODO: Handle 'response' of type ChatMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetChatMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order in the chat context. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessagesResponse](instacart/models/chat_messages_response.py)</code> -- List of chat messages

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[GetChatMessagesErrorBody](instacart/errors/get_chat_messages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_chat_message(order_id: str, body: SendMessageRequest | SendMessageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ChatMessage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a chat message from the customer to the shopper associated with the order. Used for communicating about replacements, additions, or delivery instructions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.chat.send_chat_message("some example string", SendMessageRequest(body="some example string"))
    # TODO: Handle 'response' of type ChatMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendChatMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.chat.send_chat_message(
        "some example string", SendMessageRequest(body="some example string")
    )
    # TODO: Handle 'response' of type ChatMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendChatMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order in the chat context. |
| <code>body</code> | <code>[SendMessageRequest](instacart/models/send_message_request.py) \| [SendMessageRequestDict](instacart/models/send_message_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessage](instacart/models/chat_message.py)</code> -- Message sent successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[SendChatMessageErrorBody](instacart/errors/send_chat_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Delivery

> Source: [Delivery](instacart/apis/delivery.py)

<details>
<summary><code>def cancel_order(user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled through this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.cancel_order("some example string", "some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.cancel_order("some example string", "some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Order canceled successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CancelOrderErrorBody](instacart/errors/cancel_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_delivery_order(user_id: str, body: CreateOrderRequest | CreateOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery details. Orders should be created as soon as possible after the time slot is reserved.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.create_delivery_order(
        "some example string", CreateOrderRequest(hold_id="some example string")
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeliveryOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.create_delivery_order(
        "some example string", CreateOrderRequest(hold_id="some example string")
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeliveryOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequest](instacart/models/create_order_request.py) \| [CreateOrderRequestDict](instacart/models/create_order_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Delivery order created successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreateDeliveryOrderErrorBody](instacart/errors/create_delivery_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def find_delivery_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> StoresResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer delivery for the customer's location, sorted by distance with the closest store first. Accepts location data such as latitude and longitude or a postal code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.find_delivery_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindDeliveryStoresErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.find_delivery_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindDeliveryStoresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](instacart/models/find_stores_request.py) \| [FindStoresRequestDict](instacart/models/find_stores_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](instacart/models/stores_response.py)</code> -- List of stores offering delivery

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[FindDeliveryStoresErrorBody](instacart/errors/find_delivery_stores_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order(user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific order, including its current status, items, and delivery or pickup information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.get_order("some example string", "some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.get_order("some example string", "some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Order details

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[GetOrderErrorBody](instacart/errors/get_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_delivery_time_slots(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ServiceOptionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews possible service options and available time slots for delivery fulfillments. Useful for displaying delivery time options to customers before they complete checkout.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.preview_delivery_time_slots("some example string", PreviewServiceOptionsRequest())
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewDeliveryTimeSlotsErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.preview_delivery_time_slots(
        "some example string", PreviewServiceOptionsRequest()
    )
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewDeliveryTimeSlotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](instacart/models/preview_service_options_request.py) \| [PreviewServiceOptionsRequestDict](instacart/models/preview_service_options_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](instacart/models/service_options_response.py)</code> -- Available delivery time slots

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[PreviewDeliveryTimeSlotsErrorBody](instacart/errors/preview_delivery_time_slots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reserve_delivery_time_slot(user_id: str, body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ServiceOptionHoldResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and must be followed by order creation before it expires.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delivery.reserve_delivery_time_slot(
        "some example string", ReserveTimeSlotRequest(service_option_id="some example string")
    )
    # TODO: Handle 'response' of type ServiceOptionHoldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReserveDeliveryTimeSlotErrorBody
```

**Async**

```python
try:
    response = await async_client.delivery.reserve_delivery_time_slot(
        "some example string", ReserveTimeSlotRequest(service_option_id="some example string")
    )
    # TODO: Handle 'response' of type ServiceOptionHoldResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReserveDeliveryTimeSlotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[ReserveTimeSlotRequest](instacart/models/reserve_time_slot_request.py) \| [ReserveTimeSlotRequestDict](instacart/models/reserve_time_slot_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionHoldResponse](instacart/models/service_option_hold_response.py)</code> -- Time slot reserved successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[ReserveDeliveryTimeSlotErrorBody](instacart/errors/reserve_delivery_time_slot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](instacart/apis/items.py)

<details>
<summary><code>def submit_items(body: ItemSubmissionRequest | ItemSubmissionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SubmissionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates or sets item-level attributes for a product at a specific store location. Items contain information that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes can take around two to three hours before they are displayed on the storefront.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.items.submit_items(
        ItemSubmissionRequest(items=[Item(product_code="some example string", store_code="some example string")])
    )
    # TODO: Handle 'response' of type SubmissionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.items.submit_items(
        ItemSubmissionRequest(items=[Item(product_code="some example string", store_code="some example string")])
    )
    # TODO: Handle 'response' of type SubmissionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemSubmissionRequest](instacart/models/item_submission_request.py) \| [ItemSubmissionRequestDict](instacart/models/item_submission_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmissionResponse](instacart/models/submission_response.py)</code> -- Items submitted successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[SubmitItemsErrorBody](instacart/errors/submit_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LastMileDelivery

> Source: [LastMileDelivery](instacart/apis/last_mile_delivery.py)

<details>
<summary><code>def create_last_mile_order(user_id: str, body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed items that require only delivery from the store to the customer location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.last_mile_delivery.create_last_mile_order(
        "some example string",
        CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi(hold_id="some example string"),
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLastMileOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.last_mile_delivery.create_last_mile_order(
        "some example string",
        CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi(hold_id="some example string"),
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateLastMileOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi](instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py) \| [CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict](instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Last mile delivery order created successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreateLastMileOrderErrorBody](instacart/errors/create_last_mile_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def find_last_mile_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> StoresResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is for pre-packed orders that only require transportation from the store to the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.last_mile_delivery.find_last_mile_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindLastMileStoresErrorBody
```

**Async**

```python
try:
    response = await async_client.last_mile_delivery.find_last_mile_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindLastMileStoresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](instacart/models/find_stores_request.py) \| [FindStoresRequestDict](instacart/models/find_stores_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](instacart/models/stores_response.py)</code> -- List of stores offering last mile delivery

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[FindLastMileStoresErrorBody](instacart/errors/find_last_mile_stores_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_last_mile_service_options(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ServiceOptionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before creating the order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.last_mile_delivery.preview_last_mile_service_options(
        "some example string", PreviewServiceOptionsRequest()
    )
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewLastMileServiceOptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.last_mile_delivery.preview_last_mile_service_options(
        "some example string", PreviewServiceOptionsRequest()
    )
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewLastMileServiceOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](instacart/models/preview_service_options_request.py) \| [PreviewServiceOptionsRequestDict](instacart/models/preview_service_options_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](instacart/models/service_options_response.py)</code> -- Service options for last mile delivery

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[PreviewLastMileServiceOptionsErrorBody](instacart/errors/preview_last_mile_service_options_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stage_last_mile_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called when the order items are packed and ready at the store.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.last_mile_delivery.stage_last_mile_order("some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StageLastMileOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.last_mile_delivery.stage_last_mile_order("some example string")
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StageLastMileOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Order staged successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[StageLastMileOrderErrorBody](instacart/errors/stage_last_mile_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](instacart/apis/orders.py)

<details>
<summary><code>def get_order_handling(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrderHandlingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves handling information for a specific order, including the delivery or pickup address, the coordinates of the delivery or pickup address, information about the current shopper, and any notes or instructions included with the order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.orders.get_order_handling("some example string")
    # TODO: Handle 'response' of type OrderHandlingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderHandlingErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.get_order_handling("some example string")
    # TODO: Handle 'response' of type OrderHandlingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderHandlingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderHandlingResponse](instacart/models/order_handling_response.py)</code> -- Order handling details

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[GetOrderHandlingErrorBody](instacart/errors/get_order_handling_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_order_items(order_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OrderItemsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a shopper is picking the order to get real-time item status updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.orders.get_order_items("some example string")
    # TODO: Handle 'response' of type OrderItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.orders.get_order_items("some example string")
    # TODO: Handle 'response' of type OrderItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrderItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderItemsResponse](instacart/models/order_items_response.py)</code> -- List of order items with their statuses

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[GetOrderItemsErrorBody](instacart/errors/get_order_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pickup

> Source: [Pickup](instacart/apis/pickup.py)

<details>
<summary><code>def create_pickup_order(user_id: str, body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict, *, request_options: RequestOptionsOrDict | None = None) -> OrderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders should be created as soon as possible after checkout to minimize wait time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pickup.create_pickup_order(
        "some example string",
        CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi(hold_id="some example string"),
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePickupOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.pickup.create_pickup_order(
        "some example string",
        CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi(hold_id="some example string"),
    )
    # TODO: Handle 'response' of type OrderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePickupOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi](instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py) \| [CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict](instacart/models/create_order_request_instacart_connect_fulfillment_last_mile_delivery_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](instacart/models/order_response.py)</code> -- Pickup order created successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreatePickupOrderErrorBody](instacart/errors/create_pickup_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def find_pickup_stores(body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> StoresResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest store first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pickup.find_pickup_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindPickupStoresErrorBody
```

**Async**

```python
try:
    response = await async_client.pickup.find_pickup_stores(FindStoresRequest())
    # TODO: Handle 'response' of type StoresResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindPickupStoresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](instacart/models/find_stores_request.py) \| [FindStoresRequestDict](instacart/models/find_stores_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](instacart/models/stores_response.py)</code> -- List of stores offering pickup

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[FindPickupStoresErrorBody](instacart/errors/find_pickup_stores_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_pickup_time_slots(user_id: str, body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ServiceOptionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews possible service options and available time slots for pickup fulfillments. Useful for displaying pickup time options to customers before they complete checkout.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pickup.preview_pickup_time_slots("some example string", PreviewServiceOptionsRequest())
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewPickupTimeSlotsErrorBody
```

**Async**

```python
try:
    response = await async_client.pickup.preview_pickup_time_slots(
        "some example string", PreviewServiceOptionsRequest()
    )
    # TODO: Handle 'response' of type ServiceOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewPickupTimeSlotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](instacart/models/preview_service_options_request.py) \| [PreviewServiceOptionsRequestDict](instacart/models/preview_service_options_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](instacart/models/service_options_response.py)</code> -- Available pickup time slots

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[PreviewPickupTimeSlotsErrorBody](instacart/errors/preview_pickup_time_slots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](instacart/apis/products.py)

<details>
<summary><code>def create_recipe_page(body: RecipeRequest | RecipeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProductsLinkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their Instacart cart directly from the page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.products.create_recipe_page(
        RecipeRequest(title="some example string", ingredients=[Ingredient(name="some example string")])
    )
    # TODO: Handle 'response' of type ProductsLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecipePageErrorBody
```

**Async**

```python
try:
    response = await async_client.products.create_recipe_page(
        RecipeRequest(title="some example string", ingredients=[Ingredient(name="some example string")])
    )
    # TODO: Handle 'response' of type ProductsLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecipePageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecipeRequest](instacart/models/recipe_request.py) \| [RecipeRequestDict](instacart/models/recipe_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductsLinkResponse](instacart/models/products_link_response.py)</code> -- Recipe page created successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreateRecipePageErrorBody](instacart/errors/create_recipe_page_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error2](instacart/models/error2.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_shopping_list_page(body: ShoppingListRequest | ShoppingListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProductsLinkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.products.create_shopping_list_page(
        ShoppingListRequest(title="some example string", line_items=[LineItem(name="some example string")])
    )
    # TODO: Handle 'response' of type ProductsLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateShoppingListPageErrorBody
```

**Async**

```python
try:
    response = await async_client.products.create_shopping_list_page(
        ShoppingListRequest(title="some example string", line_items=[LineItem(name="some example string")])
    )
    # TODO: Handle 'response' of type ProductsLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateShoppingListPageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ShoppingListRequest](instacart/models/shopping_list_request.py) \| [ShoppingListRequestDict](instacart/models/shopping_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductsLinkResponse](instacart/models/products_link_response.py)</code> -- Shopping list page created successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreateShoppingListPageErrorBody](instacart/errors/create_shopping_list_page_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error2](instacart/models/error2.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_products(body: ProductSubmissionRequest | ProductSubmissionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SubmissionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product, only the attributes included in the request body are modified and changes are displayed within a few hours.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.products.submit_products(
        ProductSubmissionRequest(products=[Product(product_code="some example string", name="some example string")])
    )
    # TODO: Handle 'response' of type SubmissionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitProductsErrorBody
```

**Async**

```python
try:
    response = await async_client.products.submit_products(
        ProductSubmissionRequest(products=[Product(product_code="some example string", name="some example string")])
    )
    # TODO: Handle 'response' of type SubmissionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitProductsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProductSubmissionRequest](instacart/models/product_submission_request.py) \| [ProductSubmissionRequestDict](instacart/models/product_submission_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmissionResponse](instacart/models/submission_response.py)</code> -- Products submitted successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[SubmitProductsErrorBody](instacart/errors/submit_products_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Replacements

> Source: [Replacements](instacart/apis/replacements.py)

<details>
<summary><code>def update_item_replacement(order_id: str, order_item_id: str, body: ReplacementDecisionRequest | ReplacementDecisionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ReplacementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the status as REJECTED. Items with a rejected replacement are automatically refunded.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.replacements.update_item_replacement(
        "some example string",
        "some example string",
        ReplacementDecisionRequest(status=StatusInstacartConnectPostCheckoutReplacementsApi.APPROVED),
    )
    # TODO: Handle 'response' of type ReplacementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemReplacementErrorBody
```

**Async**

```python
try:
    response = await async_client.replacements.update_item_replacement(
        "some example string",
        "some example string",
        ReplacementDecisionRequest(status=StatusInstacartConnectPostCheckoutReplacementsApi.APPROVED),
    )
    # TODO: Handle 'response' of type ReplacementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemReplacementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order_id</code> | <code>str</code> | The unique identifier for the order. |
| <code>order_item_id</code> | <code>str</code> | The unique identifier for a specific item within the order. |
| <code>body</code> | <code>[ReplacementDecisionRequest](instacart/models/replacement_decision_request.py) \| [ReplacementDecisionRequestDict](instacart/models/replacement_decision_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReplacementResponse](instacart/models/replacement_response.py)</code> -- Replacement decision applied successfully

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[UpdateItemReplacementErrorBody](instacart/errors/update_item_replacement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](instacart/models/error.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Rest

> Source: [Rest](instacart/apis/rest.py)

<details>
<summary><code>def create(body: CreateRequest | CreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
    client.rest.create(
        CreateRequest(
            title="some example string",
            ingredients=["some example string"],
            instructions=["some example string"],
            question="some example string",
            partner_name="some example string",
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateErrorBody
```

**Async**

```python
try:
    await async_client.rest.create(
        CreateRequest(
            title="some example string",
            ingredients=["some example string"],
            instructions=["some example string"],
            question="some example string",
            partner_name="some example string",
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateRequest](instacart/models/create_request.py) \| [CreateRequestDict](instacart/models/create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instacart/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](instacart/core/exceptions.py)&#91;[CreateErrorBody](instacart/errors/create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](instacart/core/results.py)</code> |
| anything unmapped | <code>[RawError](instacart/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

