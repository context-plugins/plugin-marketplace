# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [PostscriptClient](src/Postscript/PostscriptClient.cs)

## Compliance

> Source: [Compliance](src/Postscript/Api/Compliance.cs)

<details>
<summary><code>Task&lt;ApiV2ComplianceRedactResponse&gt; Redact(RedactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint will also unsubscribe the subscriber if they have an active subscription

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Compliance.Redact(new RedactRequest());
    // TODO: Handle 'response' of type ApiV2ComplianceRedactResponse
}
catch (ApiException<RedactError> ex)
{
    if (ex.Error.TryGetApiV2ComplianceRedact403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2ComplianceRedact403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RedactRequest](src/Postscript/Requests/Compliance/RedactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2ComplianceRedactResponse](src/Postscript/Models/ApiV2ComplianceRedactResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[RedactError](src/Postscript/Errors/RedactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2ComplianceUnsubscribeResponse&gt; Unsubscribe(UnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Opt outs subscribers from Postscript messaging.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Compliance.Unsubscribe(new UnsubscribeRequest());
    // TODO: Handle 'response' of type ApiV2ComplianceUnsubscribeResponse
}
catch (ApiException<UnsubscribeError> ex)
{
    if (ex.Error.TryGetApiV2ComplianceUnsubscribe403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2ComplianceUnsubscribe403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnsubscribeRequest](src/Postscript/Requests/Compliance/UnsubscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2ComplianceUnsubscribeResponse](src/Postscript/Models/ApiV2ComplianceUnsubscribeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[UnsubscribeError](src/Postscript/Errors/UnsubscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Postscript/Api/Events.cs)

<details>
<summary><code>Task&lt;ApiV2EventsResponse&gt; CreateCustomEvent(CreateCustomEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Custom Event to use in Flows

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.CreateCustomEvent(new CreateCustomEventRequest());
    // TODO: Handle 'response' of type ApiV2EventsResponse
}
catch (ApiException<CreateCustomEventError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomEventRequest](src/Postscript/Requests/Events/CreateCustomEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2EventsResponse](src/Postscript/Models/ApiV2EventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[CreateCustomEventError](src/Postscript/Errors/CreateCustomEventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Identity

> Source: [Identity](src/Postscript/Api/Identity.cs)

<details>
<summary><code>Task&lt;ApiV2MeResponse&gt; VerifyIdentity(VerifyIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identity.VerifyIdentity(new VerifyIdentityRequest());
    // TODO: Handle 'response' of type ApiV2MeResponse
}
catch (ApiException<VerifyIdentityError> ex)
{
    if (ex.Error.TryGetApiV2Me400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Me400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VerifyIdentityRequest](src/Postscript/Requests/Identity/VerifyIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MeResponse](src/Postscript/Models/ApiV2MeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[VerifyIdentityError](src/Postscript/Errors/VerifyIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Keywords

> Source: [Keywords](src/Postscript/Api/Keywords.cs)

<details>
<summary><code>Task&lt;ApiV2KeywordsResponse&gt; GetKeyword(GetKeywordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Keyword by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keywords.GetKeyword(new GetKeywordRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV2KeywordsResponse
}
catch (ApiException<GetKeywordError> ex)
{
    if (ex.Error.TryGetApiV2Keywords404Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Keywords404Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKeywordRequest](src/Postscript/Requests/Keywords/GetKeywordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2KeywordsResponse](src/Postscript/Models/ApiV2KeywordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetKeywordError](src/Postscript/Errors/GetKeywordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2KeywordsResponse1&gt; GetKeywords(GetKeywordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all active keywords for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keywords.GetKeywords(new GetKeywordsRequest());
    // TODO: Handle 'response' of type ApiV2KeywordsResponse1
}
catch (ApiException<GetKeywordsError> ex)
{
    if (ex.Error.TryGetApiV2Keywords403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2Keywords403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKeywordsRequest](src/Postscript/Requests/Keywords/GetKeywordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2KeywordsResponse1](src/Postscript/Models/ApiV2KeywordsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetKeywordsError](src/Postscript/Errors/GetKeywordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/Postscript/Api/Messages.cs)

<details>
<summary><code>Task&lt;ApiV2MessageRequestsResponse&gt; CreateMessage(CreateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a subscriber.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.CreateMessage(new CreateMessageRequest
    {
        Body = new ApiV2MessageRequestsRequest
        {
            Phone = "15555555555",
            Body = "Hello, world",
            Category = Category.Promotional,
            MediaUrl = "https://example.com/great_pic.png",
        },
    });
    // TODO: Handle 'response' of type ApiV2MessageRequestsResponse
}
catch (ApiException<CreateMessageError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMessageRequest](src/Postscript/Requests/Messages/CreateMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MessageRequestsResponse](src/Postscript/Models/ApiV2MessageRequestsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[CreateMessageError](src/Postscript/Errors/CreateMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2MessageRequestsResponse&gt; GetMessageRequest(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.GetMessageRequest(new GetMessageRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV2MessageRequestsResponse
}
catch (ApiException<GetMessageRequestError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMessageRequest](src/Postscript/Requests/Messages/GetMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MessageRequestsResponse](src/Postscript/Models/ApiV2MessageRequestsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetMessageRequestError](src/Postscript/Errors/GetMessageRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2SentMessagesResponse&gt; GetSentMessage(GetSentMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.GetSentMessage(new GetSentMessageRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV2SentMessagesResponse
}
catch (ApiException<GetSentMessageError> ex)
{
    if (ex.Error.TryGetApiV2SentMessages400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2SentMessages400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSentMessageRequest](src/Postscript/Requests/Messages/GetSentMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2SentMessagesResponse](src/Postscript/Models/ApiV2SentMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetSentMessageError](src/Postscript/Errors/GetSentMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribers

> Source: [Subscribers](src/Postscript/Api/Subscribers.cs)

<details>
<summary><code>Task&lt;JsonElement&gt; GetSubscriber(GetSubscriberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an individual subscriber for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscribers.GetSubscriber(new GetSubscriberRequest { Id = "some example string" });
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<GetSubscriberError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscriberRequest](src/Postscript/Requests/Subscribers/GetSubscriberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetSubscriberError](src/Postscript/Errors/GetSubscriberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JsonElement&gt; GetSubscribers(GetSubscribersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of subscribers for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscribers.GetSubscribers(new GetSubscribersRequest());
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<GetSubscribersError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscribersRequest](src/Postscript/Requests/Subscribers/GetSubscribersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetSubscribersError](src/Postscript/Errors/GetSubscribersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JsonElement&gt; UpdateSubscriberById(UpdateSubscriberByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates data for a given subscriber.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscribers.UpdateSubscriberById(new UpdateSubscriberByIdRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<UpdateSubscriberByIdError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriberByIdRequest](src/Postscript/Requests/Subscribers/UpdateSubscriberByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriberByIdError](src/Postscript/Errors/UpdateSubscriberByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Postscript/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;JsonElement&gt; CreateWebhookSubscription(CreateWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhookSubscription(new CreateWebhookSubscriptionRequest());
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<CreateWebhookSubscriptionError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookSubscriptionRequest](src/Postscript/Requests/WebhooksApi/CreateWebhookSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookSubscriptionError](src/Postscript/Errors/CreateWebhookSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteWebhookSubscription(DeleteWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhookSubscription(new DeleteWebhookSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteWebhookSubscriptionError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookSubscriptionRequest](src/Postscript/Requests/WebhooksApi/DeleteWebhookSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookSubscriptionError](src/Postscript/Errors/DeleteWebhookSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2WebhooksExampleResponse&gt; ExampleEvent(ExampleEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ExampleEvent(new ExampleEventRequest { Event = Event1.ShopTest });
    // TODO: Handle 'response' of type ApiV2WebhooksExampleResponse
}
catch (ApiException<ExampleEventError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExampleEventRequest](src/Postscript/Requests/WebhooksApi/ExampleEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksExampleResponse](src/Postscript/Models/ApiV2WebhooksExampleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[ExampleEventError](src/Postscript/Errors/ExampleEventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2WebhooksTokenResponse&gt; GetWebhookSigningToken(GetWebhookSigningTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookSigningToken(new GetWebhookSigningTokenRequest());
    // TODO: Handle 'response' of type ApiV2WebhooksTokenResponse
}
catch (ApiException<GetWebhookSigningTokenError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookSigningTokenRequest](src/Postscript/Requests/WebhooksApi/GetWebhookSigningTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksTokenResponse](src/Postscript/Models/ApiV2WebhooksTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetWebhookSigningTokenError](src/Postscript/Errors/GetWebhookSigningTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JsonElement&gt; GetWebhookSubscription(GetWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookSubscription(new GetWebhookSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<GetWebhookSubscriptionError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookSubscriptionRequest](src/Postscript/Requests/WebhooksApi/GetWebhookSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[GetWebhookSubscriptionError](src/Postscript/Errors/GetWebhookSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JsonElement&gt; ListWebhookSubscriptions(ListWebhookSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhookSubscriptions(new ListWebhookSubscriptionsRequest());
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<ListWebhookSubscriptionsError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhookSubscriptionsRequest](src/Postscript/Requests/WebhooksApi/ListWebhookSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[ListWebhookSubscriptionsError](src/Postscript/Errors/ListWebhookSubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV2WebhooksTestResponse&gt; TestShopWebhook(TestShopWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.TestShopWebhook(new TestShopWebhookRequest());
    // TODO: Handle 'response' of type ApiV2WebhooksTestResponse
}
catch (ApiException<TestShopWebhookError> ex)
{
    if (ex.Error.TryGetApiV2WebhooksTest400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV2WebhooksTest400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestShopWebhookRequest](src/Postscript/Requests/WebhooksApi/TestShopWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksTestResponse](src/Postscript/Models/ApiV2WebhooksTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[TestShopWebhookError](src/Postscript/Errors/TestShopWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JsonElement&gt; UpdateWebhookSubscription(UpdateWebhookSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhookSubscription(new UpdateWebhookSubscriptionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type JsonElement
}
catch (ApiException<UpdateWebhookSubscriptionError> ex)
{
    if (ex.Error.TryGetAnonymousObject(out var error))
    {
        // TODO: Handle 'error' of type object
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookSubscriptionRequest](src/Postscript/Requests/WebhooksApi/UpdateWebhookSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>JsonElement</code>

**OnError**: <code>[ApiException](src/Postscript/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookSubscriptionError](src/Postscript/Errors/UpdateWebhookSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

