# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [InstacartClient](src/Instacart/InstacartClient.cs)

## AuthenticationApi

> Source: [AuthenticationApi](src/Instacart/Api/AuthenticationApi.cs)

<details>
<summary><code>Task&lt;TokenResponse&gt; GenerateAccessToken(GenerateAccessTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AuthenticationApi.GenerateAccessToken(new GenerateAccessTokenRequest
    {
        Body = new TokenRequest
        {
            ClientId = "some example string",
            ClientSecret = "some example string",
            Scope = "some example string",
        },
    });
    // TODO: Handle 'response' of type TokenResponse
}
catch (ApiException<GenerateAccessTokenError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GenerateAccessTokenRequest](src/Instacart/Requests/AuthenticationApi/GenerateAccessTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](src/Instacart/Models/TokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[GenerateAccessTokenError](src/Instacart/Errors/GenerateAccessTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Chat

> Source: [Chat](src/Instacart/Api/Chat.cs)

<details>
<summary><code>Task&lt;ChatMessagesResponse&gt; GetChatMessages(GetChatMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Chat.GetChatMessages(new GetChatMessagesRequest { OrderId = "some example string" });
    // TODO: Handle 'response' of type ChatMessagesResponse
}
catch (ApiException<GetChatMessagesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetChatMessagesRequest](src/Instacart/Requests/Chat/GetChatMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessagesResponse](src/Instacart/Models/ChatMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[GetChatMessagesError](src/Instacart/Errors/GetChatMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChatMessage&gt; SendChatMessage(SendChatMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Chat.SendChatMessage(new SendChatMessageRequest
    {
        OrderId = "some example string",
        Body = new SendMessageRequest { Body = "some example string" },
    });
    // TODO: Handle 'response' of type ChatMessage
}
catch (ApiException<SendChatMessageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendChatMessageRequest](src/Instacart/Requests/Chat/SendChatMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatMessage](src/Instacart/Models/ChatMessage.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[SendChatMessageError](src/Instacart/Errors/SendChatMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Delivery

> Source: [Delivery](src/Instacart/Api/Delivery.cs)

<details>
<summary><code>Task&lt;OrderResponse&gt; CancelOrder(CancelOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.CancelOrder(new CancelOrderRequest
    {
        UserId = "some example string",
        OrderId = "some example string",
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<CancelOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelOrderRequest](src/Instacart/Requests/Delivery/CancelOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CancelOrderError](src/Instacart/Errors/CancelOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderResponse&gt; CreateDeliveryOrder(CreateDeliveryOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.CreateDeliveryOrder(new CreateDeliveryOrderRequest
    {
        UserId = "some example string",
        Body = new CreateOrderRequest { HoldId = "some example string" },
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<CreateDeliveryOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDeliveryOrderRequest](src/Instacart/Requests/Delivery/CreateDeliveryOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreateDeliveryOrderError](src/Instacart/Errors/CreateDeliveryOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoresResponse&gt; FindDeliveryStores(FindDeliveryStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.FindDeliveryStores(new FindDeliveryStoresRequest
    {
        Body = new FindStoresRequest(),
    });
    // TODO: Handle 'response' of type StoresResponse
}
catch (ApiException<FindDeliveryStoresError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindDeliveryStoresRequest](src/Instacart/Requests/Delivery/FindDeliveryStoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](src/Instacart/Models/StoresResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[FindDeliveryStoresError](src/Instacart/Errors/FindDeliveryStoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderResponse&gt; GetOrder(GetOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.GetOrder(new GetOrderRequest
    {
        UserId = "some example string",
        OrderId = "some example string",
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<GetOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderRequest](src/Instacart/Requests/Delivery/GetOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[GetOrderError](src/Instacart/Errors/GetOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceOptionsResponse&gt; PreviewDeliveryTimeSlots(PreviewDeliveryTimeSlotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.PreviewDeliveryTimeSlots(new PreviewDeliveryTimeSlotsRequest
    {
        UserId = "some example string",
        Body = new PreviewServiceOptionsRequest(),
    });
    // TODO: Handle 'response' of type ServiceOptionsResponse
}
catch (ApiException<PreviewDeliveryTimeSlotsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PreviewDeliveryTimeSlotsRequest](src/Instacart/Requests/Delivery/PreviewDeliveryTimeSlotsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](src/Instacart/Models/ServiceOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[PreviewDeliveryTimeSlotsError](src/Instacart/Errors/PreviewDeliveryTimeSlotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceOptionHoldResponse&gt; ReserveDeliveryTimeSlot(ReserveDeliveryTimeSlotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Delivery.ReserveDeliveryTimeSlot(new ReserveDeliveryTimeSlotRequest
    {
        UserId = "some example string",
        Body = new ReserveTimeSlotRequest { ServiceOptionId = "some example string" },
    });
    // TODO: Handle 'response' of type ServiceOptionHoldResponse
}
catch (ApiException<ReserveDeliveryTimeSlotError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReserveDeliveryTimeSlotRequest](src/Instacart/Requests/Delivery/ReserveDeliveryTimeSlotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionHoldResponse](src/Instacart/Models/ServiceOptionHoldResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[ReserveDeliveryTimeSlotError](src/Instacart/Errors/ReserveDeliveryTimeSlotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/Instacart/Api/Items.cs)

<details>
<summary><code>Task&lt;SubmissionResponse&gt; SubmitItems(SubmitItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Items.SubmitItems(new SubmitItemsRequest
    {
        Body = new ItemSubmissionRequest
        {
            Items = [new Item { ProductCode = "some example string", StoreCode = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type SubmissionResponse
}
catch (ApiException<SubmitItemsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubmitItemsRequest](src/Instacart/Requests/Items/SubmitItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmissionResponse](src/Instacart/Models/SubmissionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[SubmitItemsError](src/Instacart/Errors/SubmitItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LastMileDelivery

> Source: [LastMileDelivery](src/Instacart/Api/LastMileDelivery.cs)

<details>
<summary><code>Task&lt;OrderResponse&gt; CreateLastMileOrder(CreateLastMileOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LastMileDelivery.CreateLastMileOrder(new CreateLastMileOrderRequest
    {
        UserId = "some example string",
        Body = new CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi { HoldId = "some example string" },
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<CreateLastMileOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLastMileOrderRequest](src/Instacart/Requests/LastMileDelivery/CreateLastMileOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreateLastMileOrderError](src/Instacart/Errors/CreateLastMileOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoresResponse&gt; FindLastMileStores(FindLastMileStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LastMileDelivery.FindLastMileStores(new FindLastMileStoresRequest
    {
        Body = new FindStoresRequest(),
    });
    // TODO: Handle 'response' of type StoresResponse
}
catch (ApiException<FindLastMileStoresError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindLastMileStoresRequest](src/Instacart/Requests/LastMileDelivery/FindLastMileStoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](src/Instacart/Models/StoresResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[FindLastMileStoresError](src/Instacart/Errors/FindLastMileStoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceOptionsResponse&gt; PreviewLastMileServiceOptions(PreviewLastMileServiceOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LastMileDelivery.PreviewLastMileServiceOptions(new PreviewLastMileServiceOptionsRequest
    {
        UserId = "some example string",
        Body = new PreviewServiceOptionsRequest(),
    });
    // TODO: Handle 'response' of type ServiceOptionsResponse
}
catch (ApiException<PreviewLastMileServiceOptionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PreviewLastMileServiceOptionsRequest](src/Instacart/Requests/LastMileDelivery/PreviewLastMileServiceOptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](src/Instacart/Models/ServiceOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[PreviewLastMileServiceOptionsError](src/Instacart/Errors/PreviewLastMileServiceOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderResponse&gt; StageLastMileOrder(StageLastMileOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LastMileDelivery.StageLastMileOrder(new StageLastMileOrderRequest
    {
        OrderId = "some example string",
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<StageLastMileOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StageLastMileOrderRequest](src/Instacart/Requests/LastMileDelivery/StageLastMileOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[StageLastMileOrderError](src/Instacart/Errors/StageLastMileOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/Instacart/Api/Orders.cs)

<details>
<summary><code>Task&lt;OrderHandlingResponse&gt; GetOrderHandling(GetOrderHandlingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.GetOrderHandling(new GetOrderHandlingRequest
    {
        OrderId = "some example string",
    });
    // TODO: Handle 'response' of type OrderHandlingResponse
}
catch (ApiException<GetOrderHandlingError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderHandlingRequest](src/Instacart/Requests/Orders/GetOrderHandlingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderHandlingResponse](src/Instacart/Models/OrderHandlingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[GetOrderHandlingError](src/Instacart/Errors/GetOrderHandlingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrderItemsResponse&gt; GetOrderItems(GetOrderItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Orders.GetOrderItems(new GetOrderItemsRequest { OrderId = "some example string" });
    // TODO: Handle 'response' of type OrderItemsResponse
}
catch (ApiException<GetOrderItemsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderItemsRequest](src/Instacart/Requests/Orders/GetOrderItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderItemsResponse](src/Instacart/Models/OrderItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[GetOrderItemsError](src/Instacart/Errors/GetOrderItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pickup

> Source: [Pickup](src/Instacart/Api/Pickup.cs)

<details>
<summary><code>Task&lt;OrderResponse&gt; CreatePickupOrder(CreatePickupOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pickup.CreatePickupOrder(new CreatePickupOrderRequest
    {
        UserId = "some example string",
        Body = new CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi { HoldId = "some example string" },
    });
    // TODO: Handle 'response' of type OrderResponse
}
catch (ApiException<CreatePickupOrderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePickupOrderRequest](src/Instacart/Requests/Pickup/CreatePickupOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrderResponse](src/Instacart/Models/OrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreatePickupOrderError](src/Instacart/Errors/CreatePickupOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoresResponse&gt; FindPickupStores(FindPickupStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pickup.FindPickupStores(new FindPickupStoresRequest { Body = new FindStoresRequest() });
    // TODO: Handle 'response' of type StoresResponse
}
catch (ApiException<FindPickupStoresError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindPickupStoresRequest](src/Instacart/Requests/Pickup/FindPickupStoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoresResponse](src/Instacart/Models/StoresResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[FindPickupStoresError](src/Instacart/Errors/FindPickupStoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceOptionsResponse&gt; PreviewPickupTimeSlots(PreviewPickupTimeSlotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pickup.PreviewPickupTimeSlots(new PreviewPickupTimeSlotsRequest
    {
        UserId = "some example string",
        Body = new PreviewServiceOptionsRequest(),
    });
    // TODO: Handle 'response' of type ServiceOptionsResponse
}
catch (ApiException<PreviewPickupTimeSlotsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PreviewPickupTimeSlotsRequest](src/Instacart/Requests/Pickup/PreviewPickupTimeSlotsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceOptionsResponse](src/Instacart/Models/ServiceOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[PreviewPickupTimeSlotsError](src/Instacart/Errors/PreviewPickupTimeSlotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/Instacart/Api/Products.cs)

<details>
<summary><code>Task&lt;ProductsLinkResponse&gt; CreateRecipePage(CreateRecipePageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Products.CreateRecipePage(new CreateRecipePageRequest
    {
        Body = new RecipeRequest
        {
            Title = "some example string",
            Ingredients = [new Ingredient { Name = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type ProductsLinkResponse
}
catch (ApiException<CreateRecipePageError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRecipePageRequest](src/Instacart/Requests/Products/CreateRecipePageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductsLinkResponse](src/Instacart/Models/ProductsLinkResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreateRecipePageError](src/Instacart/Errors/CreateRecipePageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProductsLinkResponse&gt; CreateShoppingListPage(CreateShoppingListPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Products.CreateShoppingListPage(new CreateShoppingListPageRequest
    {
        Body = new ShoppingListRequest
        {
            Title = "some example string",
            LineItems = [new LineItem { Name = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type ProductsLinkResponse
}
catch (ApiException<CreateShoppingListPageError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateShoppingListPageRequest](src/Instacart/Requests/Products/CreateShoppingListPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductsLinkResponse](src/Instacart/Models/ProductsLinkResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreateShoppingListPageError](src/Instacart/Errors/CreateShoppingListPageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubmissionResponse&gt; SubmitProducts(SubmitProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Products.SubmitProducts(new SubmitProductsRequest
    {
        Body = new ProductSubmissionRequest
        {
            Products = [new Product { ProductCode = "some example string", Name = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type SubmissionResponse
}
catch (ApiException<SubmitProductsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubmitProductsRequest](src/Instacart/Requests/Products/SubmitProductsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubmissionResponse](src/Instacart/Models/SubmissionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[SubmitProductsError](src/Instacart/Errors/SubmitProductsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Replacements

> Source: [Replacements](src/Instacart/Api/Replacements.cs)

<details>
<summary><code>Task&lt;ReplacementResponse&gt; UpdateItemReplacement(UpdateItemReplacementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Replacements.UpdateItemReplacement(new UpdateItemReplacementRequest
    {
        OrderId = "some example string",
        OrderItemId = "some example string",
        Body = new ReplacementDecisionRequest { Status = StatusInstacartConnectPostCheckoutReplacementsApi.Approved },
    });
    // TODO: Handle 'response' of type ReplacementResponse
}
catch (ApiException<UpdateItemReplacementError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateItemReplacementRequest](src/Instacart/Requests/Replacements/UpdateItemReplacementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReplacementResponse](src/Instacart/Models/ReplacementResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[UpdateItemReplacementError](src/Instacart/Errors/UpdateItemReplacementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rest

> Source: [Rest](src/Instacart/Api/Rest.cs)

<details>
<summary><code>Task Create(CreateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Rest.Create(new CreateOperationRequest
    {
        Body = new CreateRequest
        {
            Title = "some example string",
            Ingredients = ["some example string"],
            Instructions = ["some example string"],
            Question = "some example string",
            PartnerName = "some example string",
        },
    });
}
catch (ApiException<CreateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOperationRequest](src/Instacart/Requests/Rest/CreateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Instacart/Core/Exceptions/ApiException.cs)&lt;[CreateError](src/Instacart/Errors/CreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

