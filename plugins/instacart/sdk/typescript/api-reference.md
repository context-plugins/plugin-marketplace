# Reference

> Source: [InstacartClient](src/client.ts)

## Authentication

> Source: [Authentication](src/resources/authentication.ts)

<details>
<summary><code>generateAccessToken(request: Authentication.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Authentication.GenerateAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token rather than generating a new one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authentication.generateAccessToken({
    body: {
      clientId: "some example string",
      clientSecret: "some example string",
      scope: "some example string",
    },
  });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authentication.GenerateAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authentication
  .generateAccessToken({
    body: {
      clientId: "some example string",
      clientSecret: "some example string",
      scope: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TokenRequest](src/models/token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authentication.generateAccessToken(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Authentication.GenerateAccessTokenError](src/resources/authentication.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authentication.generateAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Authentication.GenerateAccessTokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Chat

> Source: [Chat](src/resources/chat.ts)

<details>
<summary><code>getChatMessages(request: Chat.GetChatMessagesRequest, options?: RequestOptions): ApiPromise&lt;ChatMessagesResponse, Chat.GetChatMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all chat messages associated with an order between the customer and the shopper. Messages are returned in chronological order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.getChatMessages({ orderId: "some example string" });
  // TODO: Handle 'response' of type ChatMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Chat.GetChatMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.getChatMessages({ orderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatMessagesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order in the chat context. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.getChatMessages(request)`

- **OnSuccess**: <code>[ChatMessagesResponse](src/models/chat-messages-response.ts)</code>
- **OnError**: throws <code>[Chat.GetChatMessagesError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.getChatMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatMessagesResponse, Chat.GetChatMessagesError&gt;</code>, with `result.value` of type <code>[ChatMessagesResponse](src/models/chat-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendChatMessage(request: Chat.SendChatMessageRequest, options?: RequestOptions): ApiPromise&lt;ChatMessage, Chat.SendChatMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a chat message from the customer to the shopper associated with the order. Used for communicating about replacements, additions, or delivery instructions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.sendChatMessage({
    orderId: "some example string",
    body: { body: "some example string" },
  });
  // TODO: Handle 'response' of type ChatMessage
} catch (err) {
  // TODO: Handle 'err' of type Chat.SendChatMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat
  .sendChatMessage({ orderId: "some example string", body: { body: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order in the chat context. |
| <code>body</code> | <code>[SendMessageRequest](src/models/send-message-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.sendChatMessage(request)`

- **OnSuccess**: <code>[ChatMessage](src/models/chat-message.ts)</code>
- **OnError**: throws <code>[Chat.SendChatMessageError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.sendChatMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatMessage, Chat.SendChatMessageError&gt;</code>, with `result.value` of type <code>[ChatMessage](src/models/chat-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Delivery

> Source: [Delivery](src/resources/delivery.ts)

<details>
<summary><code>cancelOrder(request: Delivery.CancelOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, Delivery.CancelOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled through this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.cancelOrder({
    userId: "some example string",
    orderId: "some example string",
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.CancelOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery
  .cancelOrder({ userId: "some example string", orderId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.cancelOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[Delivery.CancelOrderError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.cancelOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, Delivery.CancelOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDeliveryOrder(request: Delivery.CreateDeliveryOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, Delivery.CreateDeliveryOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery details. Orders should be created as soon as possible after the time slot is reserved.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.createDeliveryOrder({
    userId: "some example string",
    body: { holdId: "some example string" },
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.CreateDeliveryOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery
  .createDeliveryOrder({ userId: "some example string", body: { holdId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequest](src/models/create-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.createDeliveryOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[Delivery.CreateDeliveryOrderError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.createDeliveryOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, Delivery.CreateDeliveryOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findDeliveryStores(request: Delivery.FindDeliveryStoresRequest, options?: RequestOptions): ApiPromise&lt;StoresResponse, Delivery.FindDeliveryStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer delivery for the customer's location, sorted by distance with the closest store first. Accepts location data such as latitude and longitude or a postal code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.findDeliveryStores({ body: {} });
  // TODO: Handle 'response' of type StoresResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.FindDeliveryStoresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery.findDeliveryStores({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoresResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](src/models/find-stores-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.findDeliveryStores(request)`

- **OnSuccess**: <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: throws <code>[Delivery.FindDeliveryStoresError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.findDeliveryStores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoresResponse, Delivery.FindDeliveryStoresError&gt;</code>, with `result.value` of type <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrder(request: Delivery.GetOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, Delivery.GetOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific order, including its current status, items, and delivery or pickup information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.getOrder({
    userId: "some example string",
    orderId: "some example string",
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.GetOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery
  .getOrder({ userId: "some example string", orderId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.getOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[Delivery.GetOrderError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.getOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, Delivery.GetOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewDeliveryTimeSlots(request: Delivery.PreviewDeliveryTimeSlotsRequest, options?: RequestOptions): ApiPromise&lt;ServiceOptionsResponse, Delivery.PreviewDeliveryTimeSlotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews possible service options and available time slots for delivery fulfillments. Useful for displaying delivery time options to customers before they complete checkout.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.previewDeliveryTimeSlots({
    userId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ServiceOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.PreviewDeliveryTimeSlotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery
  .previewDeliveryTimeSlots({ userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](src/models/preview-service-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.previewDeliveryTimeSlots(request)`

- **OnSuccess**: <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: throws <code>[Delivery.PreviewDeliveryTimeSlotsError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.previewDeliveryTimeSlots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceOptionsResponse, Delivery.PreviewDeliveryTimeSlotsError&gt;</code>, with `result.value` of type <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reserveDeliveryTimeSlot(request: Delivery.ReserveDeliveryTimeSlotRequest, options?: RequestOptions): ApiPromise&lt;ServiceOptionHoldResponse, Delivery.ReserveDeliveryTimeSlotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and must be followed by order creation before it expires.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.delivery.reserveDeliveryTimeSlot({
    userId: "some example string",
    body: { serviceOptionId: "some example string" },
  });
  // TODO: Handle 'response' of type ServiceOptionHoldResponse
} catch (err) {
  // TODO: Handle 'err' of type Delivery.ReserveDeliveryTimeSlotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.delivery
  .reserveDeliveryTimeSlot({
    userId: "some example string",
    body: { serviceOptionId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceOptionHoldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[ReserveTimeSlotRequest](src/models/reserve-time-slot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.delivery.reserveDeliveryTimeSlot(request)`

- **OnSuccess**: <code>[ServiceOptionHoldResponse](src/models/service-option-hold-response.ts)</code>
- **OnError**: throws <code>[Delivery.ReserveDeliveryTimeSlotError](src/resources/delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.delivery.reserveDeliveryTimeSlot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceOptionHoldResponse, Delivery.ReserveDeliveryTimeSlotError&gt;</code>, with `result.value` of type <code>[ServiceOptionHoldResponse](src/models/service-option-hold-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/resources/items.ts)

<details>
<summary><code>submitItems(request: Items.SubmitItemsRequest, options?: RequestOptions): ApiPromise&lt;SubmissionResponse, Items.SubmitItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates or sets item-level attributes for a product at a specific store location. Items contain information that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes can take around two to three hours before they are displayed on the storefront.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.submitItems({
    body: { items: [{ productCode: "some example string", storeCode: "some example string" }] },
  });
  // TODO: Handle 'response' of type SubmissionResponse
} catch (err) {
  // TODO: Handle 'err' of type Items.SubmitItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .submitItems({
    body: { items: [{ productCode: "some example string", storeCode: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubmissionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemSubmissionRequest](src/models/item-submission-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.submitItems(request)`

- **OnSuccess**: <code>[SubmissionResponse](src/models/submission-response.ts)</code>
- **OnError**: throws <code>[Items.SubmitItemsError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.submitItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubmissionResponse, Items.SubmitItemsError&gt;</code>, with `result.value` of type <code>[SubmissionResponse](src/models/submission-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LastMileDelivery

> Source: [LastMileDelivery](src/resources/last-mile-delivery.ts)

<details>
<summary><code>createLastMileOrder(request: LastMileDelivery.CreateLastMileOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, LastMileDelivery.CreateLastMileOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed items that require only delivery from the store to the customer location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lastMileDelivery.createLastMileOrder({
    userId: "some example string",
    body: { holdId: "some example string" },
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type LastMileDelivery.CreateLastMileOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lastMileDelivery
  .createLastMileOrder({ userId: "some example string", body: { holdId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi](src/models/create-order-request-instacart-connect-fulfillment-last-mile-delivery-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lastMileDelivery.createLastMileOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[LastMileDelivery.CreateLastMileOrderError](src/resources/last-mile-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lastMileDelivery.createLastMileOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, LastMileDelivery.CreateLastMileOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findLastMileStores(request: LastMileDelivery.FindLastMileStoresRequest, options?: RequestOptions): ApiPromise&lt;StoresResponse, LastMileDelivery.FindLastMileStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is for pre-packed orders that only require transportation from the store to the customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lastMileDelivery.findLastMileStores({ body: {} });
  // TODO: Handle 'response' of type StoresResponse
} catch (err) {
  // TODO: Handle 'err' of type LastMileDelivery.FindLastMileStoresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lastMileDelivery.findLastMileStores({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoresResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](src/models/find-stores-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lastMileDelivery.findLastMileStores(request)`

- **OnSuccess**: <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: throws <code>[LastMileDelivery.FindLastMileStoresError](src/resources/last-mile-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lastMileDelivery.findLastMileStores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoresResponse, LastMileDelivery.FindLastMileStoresError&gt;</code>, with `result.value` of type <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewLastMileServiceOptions(request: LastMileDelivery.PreviewLastMileServiceOptionsRequest, options?: RequestOptions): ApiPromise&lt;ServiceOptionsResponse, LastMileDelivery.PreviewLastMileServiceOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before creating the order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lastMileDelivery.previewLastMileServiceOptions({
    userId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ServiceOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type LastMileDelivery.PreviewLastMileServiceOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lastMileDelivery
  .previewLastMileServiceOptions({ userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](src/models/preview-service-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lastMileDelivery.previewLastMileServiceOptions(request)`

- **OnSuccess**: <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: throws <code>[LastMileDelivery.PreviewLastMileServiceOptionsError](src/resources/last-mile-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lastMileDelivery.previewLastMileServiceOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceOptionsResponse, LastMileDelivery.PreviewLastMileServiceOptionsError&gt;</code>, with `result.value` of type <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stageLastMileOrder(request: LastMileDelivery.StageLastMileOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, LastMileDelivery.StageLastMileOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called when the order items are packed and ready at the store.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lastMileDelivery.stageLastMileOrder({ orderId: "some example string" });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type LastMileDelivery.StageLastMileOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lastMileDelivery
  .stageLastMileOrder({ orderId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lastMileDelivery.stageLastMileOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[LastMileDelivery.StageLastMileOrderError](src/resources/last-mile-delivery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lastMileDelivery.stageLastMileOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, LastMileDelivery.StageLastMileOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>getOrderHandling(request: Orders.GetOrderHandlingRequest, options?: RequestOptions): ApiPromise&lt;OrderHandlingResponse, Orders.GetOrderHandlingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves handling information for a specific order, including the delivery or pickup address, the coordinates of the delivery or pickup address, information about the current shopper, and any notes or instructions included with the order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderHandling({ orderId: "some example string" });
  // TODO: Handle 'response' of type OrderHandlingResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderHandlingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderHandling({ orderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderHandlingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderHandling(request)`

- **OnSuccess**: <code>[OrderHandlingResponse](src/models/order-handling-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderHandlingError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderHandling(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderHandlingResponse, Orders.GetOrderHandlingError&gt;</code>, with `result.value` of type <code>[OrderHandlingResponse](src/models/order-handling-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderItems(request: Orders.GetOrderItemsRequest, options?: RequestOptions): ApiPromise&lt;OrderItemsResponse, Orders.GetOrderItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a shopper is picking the order to get real-time item status updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderItems({ orderId: "some example string" });
  // TODO: Handle 'response' of type OrderItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderItems({ orderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderItems(request)`

- **OnSuccess**: <code>[OrderItemsResponse](src/models/order-items-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderItemsError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderItemsResponse, Orders.GetOrderItemsError&gt;</code>, with `result.value` of type <code>[OrderItemsResponse](src/models/order-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pickup

> Source: [Pickup](src/resources/pickup.ts)

<details>
<summary><code>createPickupOrder(request: Pickup.CreatePickupOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, Pickup.CreatePickupOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders should be created as soon as possible after checkout to minimize wait time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pickup.createPickupOrder({
    userId: "some example string",
    body: { holdId: "some example string" },
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Pickup.CreatePickupOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pickup
  .createPickupOrder({ userId: "some example string", body: { holdId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi](src/models/create-order-request-instacart-connect-fulfillment-last-mile-delivery-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pickup.createPickupOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[Pickup.CreatePickupOrderError](src/resources/pickup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pickup.createPickupOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, Pickup.CreatePickupOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findPickupStores(request: Pickup.FindPickupStoresRequest, options?: RequestOptions): ApiPromise&lt;StoresResponse, Pickup.FindPickupStoresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest store first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pickup.findPickupStores({ body: {} });
  // TODO: Handle 'response' of type StoresResponse
} catch (err) {
  // TODO: Handle 'err' of type Pickup.FindPickupStoresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pickup.findPickupStores({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoresResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindStoresRequest](src/models/find-stores-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pickup.findPickupStores(request)`

- **OnSuccess**: <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: throws <code>[Pickup.FindPickupStoresError](src/resources/pickup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pickup.findPickupStores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoresResponse, Pickup.FindPickupStoresError&gt;</code>, with `result.value` of type <code>[StoresResponse](src/models/stores-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>previewPickupTimeSlots(request: Pickup.PreviewPickupTimeSlotsRequest, options?: RequestOptions): ApiPromise&lt;ServiceOptionsResponse, Pickup.PreviewPickupTimeSlotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Previews possible service options and available time slots for pickup fulfillments. Useful for displaying pickup time options to customers before they complete checkout.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pickup.previewPickupTimeSlots({ userId: "some example string", body: {} });
  // TODO: Handle 'response' of type ServiceOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Pickup.PreviewPickupTimeSlotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pickup
  .previewPickupTimeSlots({ userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier for the user in the retailer's system. |
| <code>body</code> | <code>[PreviewServiceOptionsRequest](src/models/preview-service-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pickup.previewPickupTimeSlots(request)`

- **OnSuccess**: <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: throws <code>[Pickup.PreviewPickupTimeSlotsError](src/resources/pickup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pickup.previewPickupTimeSlots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceOptionsResponse, Pickup.PreviewPickupTimeSlotsError&gt;</code>, with `result.value` of type <code>[ServiceOptionsResponse](src/models/service-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/resources/products.ts)

<details>
<summary><code>createRecipePage(request: Products.CreateRecipePageRequest, options?: RequestOptions): ApiPromise&lt;ProductsLinkResponse, Products.CreateRecipePageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their Instacart cart directly from the page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.createRecipePage({
    body: { title: "some example string", ingredients: [{ name: "some example string" }] },
  });
  // TODO: Handle 'response' of type ProductsLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.CreateRecipePageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products
  .createRecipePage({
    body: { title: "some example string", ingredients: [{ name: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsLinkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecipeRequest](src/models/recipe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.createRecipePage(request)`

- **OnSuccess**: <code>[ProductsLinkResponse](src/models/products-link-response.ts)</code>
- **OnError**: throws <code>[Products.CreateRecipePageError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.createRecipePage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsLinkResponse, Products.CreateRecipePageError&gt;</code>, with `result.value` of type <code>[ProductsLinkResponse](src/models/products-link-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createShoppingListPage(request: Products.CreateShoppingListPageRequest, options?: RequestOptions): ApiPromise&lt;ProductsLinkResponse, Products.CreateShoppingListPageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.createShoppingListPage({
    body: { title: "some example string", lineItems: [{ name: "some example string" }] },
  });
  // TODO: Handle 'response' of type ProductsLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.CreateShoppingListPageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products
  .createShoppingListPage({
    body: { title: "some example string", lineItems: [{ name: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductsLinkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ShoppingListRequest](src/models/shopping-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.createShoppingListPage(request)`

- **OnSuccess**: <code>[ProductsLinkResponse](src/models/products-link-response.ts)</code>
- **OnError**: throws <code>[Products.CreateShoppingListPageError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.createShoppingListPage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductsLinkResponse, Products.CreateShoppingListPageError&gt;</code>, with `result.value` of type <code>[ProductsLinkResponse](src/models/products-link-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitProducts(request: Products.SubmitProductsRequest, options?: RequestOptions): ApiPromise&lt;SubmissionResponse, Products.SubmitProductsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product, only the attributes included in the request body are modified and changes are displayed within a few hours.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.products.submitProducts({
    body: { products: [{ productCode: "some example string", name: "some example string" }] },
  });
  // TODO: Handle 'response' of type SubmissionResponse
} catch (err) {
  // TODO: Handle 'err' of type Products.SubmitProductsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.products
  .submitProducts({
    body: { products: [{ productCode: "some example string", name: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubmissionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProductSubmissionRequest](src/models/product-submission-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.products.submitProducts(request)`

- **OnSuccess**: <code>[SubmissionResponse](src/models/submission-response.ts)</code>
- **OnError**: throws <code>[Products.SubmitProductsError](src/resources/products.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.products.submitProducts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubmissionResponse, Products.SubmitProductsError&gt;</code>, with `result.value` of type <code>[SubmissionResponse](src/models/submission-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Replacements

> Source: [Replacements](src/resources/replacements.ts)

<details>
<summary><code>updateItemReplacement(request: Replacements.UpdateItemReplacementRequest, options?: RequestOptions): ApiPromise&lt;ReplacementResponse, Replacements.UpdateItemReplacementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the status as REJECTED. Items with a rejected replacement are automatically refunded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.replacements.updateItemReplacement({
    orderId: "some example string",
    orderItemId: "some example string",
    body: { status: StatusInstacartConnectPostCheckoutReplacementsApi.Approved },
  });
  // TODO: Handle 'response' of type ReplacementResponse
} catch (err) {
  // TODO: Handle 'err' of type Replacements.UpdateItemReplacementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.replacements
  .updateItemReplacement({
    orderId: "some example string",
    orderItemId: "some example string",
    body: { status: StatusInstacartConnectPostCheckoutReplacementsApi.Approved },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReplacementResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The unique identifier for the order. |
| <code>orderItemId</code> | <code>string</code> | The unique identifier for a specific item within the order. |
| <code>body</code> | <code>[ReplacementDecisionRequest](src/models/replacement-decision-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.replacements.updateItemReplacement(request)`

- **OnSuccess**: <code>[ReplacementResponse](src/models/replacement-response.ts)</code>
- **OnError**: throws <code>[Replacements.UpdateItemReplacementError](src/resources/replacements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.replacements.updateItemReplacement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReplacementResponse, Replacements.UpdateItemReplacementError&gt;</code>, with `result.value` of type <code>[ReplacementResponse](src/models/replacement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Rest

> Source: [Rest](src/resources/rest.ts)

<details>
<summary><code>create(request: Rest.CreateRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Rest.CreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.rest.create({
    body: {
      title: "some example string",
      ingredients: ["some example string"],
      instructions: ["some example string"],
      question: "some example string",
      partnerName: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type Rest.CreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rest
  .create({
    body: {
      title: "some example string",
      ingredients: ["some example string"],
      instructions: ["some example string"],
      question: "some example string",
      partnerName: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateRequest](src/models/create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rest.create(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Rest.CreateError](src/resources/rest.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rest.create(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Rest.CreateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[InstacartError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

