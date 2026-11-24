# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [TabbyClient](src/Tabby/TabbyClient.cs)

## Checkout

> Source: [Checkout](src/Tabby/Api/Checkout.cs)

<details>
<summary><code>Task&lt;CheckoutSession&gt; GetCheckoutSession(GetCheckoutSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the token (only if tokens used in your integration )

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkout.GetCheckoutSession(new GetCheckoutSessionRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CheckoutSession
}
catch (ApiException<GetCheckoutSessionError> ex)
{
    if (ex.Error.TryGetError400(out var error))
    {
        // TODO: Handle 'error' of type Error400
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCheckoutSessionRequest](src/Tabby/Requests/Checkout/GetCheckoutSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutSession](src/Tabby/Models/CheckoutSession.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetCheckoutSessionError](src/Tabby/Errors/GetCheckoutSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutSession&gt; PostCheckoutSession(PostCheckoutSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment and Session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checkout.PostCheckoutSession(new PostCheckoutSessionRequest
    {
        Body = new ApiV2CheckoutRequest
        {
            Payment = new CheckoutCreation
            {
                Amount = "some example string",
                Currency = Currency.Aed,
                Buyer = new Buyer
                {
                    Name = "some example string",
                    Email = "user@example.com",
                    Phone = "some example string",
                },
                ShippingAddress = new ShippingAddress
                {
                    City = "some example string",
                    Address = "some example string",
                    Zip = "some example string",
                },
                Order = new Order
                {
                    ReferenceId = "some example string",
                    Items = [new OrderItem { Title = title, Category = category }],
                },
                BuyerHistory = new BuyerHistory
                {
                    RegisteredSince = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
                    LoyaltyLevel = 1.5d,
                },
                OrderHistory = [
                    new CheckoutCreationOrderHistory
                    {
                        PurchasedAt = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
                        Amount = "some example string",
                        Status = Status1.New,
                        Buyer = new Buyer { Name = name, Email = email, Phone = phone },
                        ShippingAddress = new ShippingAddress { City = city, Address = address, Zip = zip },
                    },
                ],
            },
            Lang = LanguageCode.Ar,
            MerchantCode = "some example string",
        },
    });
    // TODO: Handle 'response' of type CheckoutSession
}
catch (ApiException<PostCheckoutSessionError> ex)
{
    if (ex.Error.TryGetError400CheckoutPost(out var error))
    {
        // TODO: Handle 'error' of type Error400CheckoutPost
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCheckoutSessionRequest](src/Tabby/Requests/Checkout/PostCheckoutSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutSession](src/Tabby/Models/CheckoutSession.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostCheckoutSessionError](src/Tabby/Errors/PostCheckoutSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DisputesApi

> Source: [DisputesApi](src/Tabby/Api/DisputesApi.cs)

<details>
<summary><code>Task&lt;Dispute1&gt; GetDispute(GetDisputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.GetDispute(new GetDisputeRequest
    {
        DisputeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        DisputeIdTemplate = "some example string",
    });
    // TODO: Handle 'response' of type Dispute1
}
catch (ApiException<GetDisputeError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDisputeRequest](src/Tabby/Requests/DisputesApi/GetDisputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Dispute1](src/Tabby/Models/Dispute1.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetDisputeError](src/Tabby/Errors/GetDisputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Disputes&gt; GetDisputes(GetDisputesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of 100 recently created disputes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.GetDisputes(new GetDisputesRequest
    {
        CreatedAtGte = "created_at_gte=2022-12-01T00:00:00Z",
        CreatedAtLte = "created_at_lte=2022-12-01T00:00:00Z",
    });
    // TODO: Handle 'response' of type Disputes
}
catch (ApiException<GetDisputesError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDisputesRequest](src/Tabby/Requests/DisputesApi/GetDisputesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Disputes](src/Tabby/Models/Disputes.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetDisputesError](src/Tabby/Errors/GetDisputesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Evidence&gt; PostDisputeProvideEvidence(PostDisputeProvideEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to an evidence request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.PostDisputeProvideEvidence(new PostDisputeProvideEvidenceRequest
    {
        DisputeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        DisputeIdTemplate = "some example string",
        Body = new ApiV1DisputesProvideEvidenceRequest { Content = "some example string" },
    });
    // TODO: Handle 'response' of type Evidence
}
catch (ApiException<PostDisputeProvideEvidenceError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostDisputeProvideEvidenceRequest](src/Tabby/Requests/DisputesApi/PostDisputeProvideEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Evidence](src/Tabby/Models/Evidence.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostDisputeProvideEvidenceError](src/Tabby/Errors/PostDisputeProvideEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputesApprove&gt; PostDisputesApprove(PostDisputesApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.PostDisputesApprove(new PostDisputesApproveRequest
    {
        Body = new ApiV1DisputesApproveRequest { DisputeIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")] },
    });
    // TODO: Handle 'response' of type DisputesApprove
}
catch (ApiException<PostDisputesApproveError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostDisputesApproveRequest](src/Tabby/Requests/DisputesApi/PostDisputesApproveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputesApprove](src/Tabby/Models/DisputesApprove.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostDisputesApproveError](src/Tabby/Errors/PostDisputesApproveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputesChallenge&gt; PostDisputesChallenge(PostDisputesChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged within a single request. Only disputes with status 'new' might be challenged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.PostDisputesChallenge(new PostDisputesChallengeRequest
    {
        Body = new ApiV1DisputesChallengeRequest
        {
            DisputeId = "some example string",
            Description = "some example string",
            Reason = Reason.MerchantReasonOther,
        },
    });
    // TODO: Handle 'response' of type DisputesChallenge
}
catch (ApiException<PostDisputesChallengeError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostDisputesChallengeRequest](src/Tabby/Requests/DisputesApi/PostDisputesChallengeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputesChallenge](src/Tabby/Models/DisputesChallenge.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostDisputesChallengeError](src/Tabby/Errors/PostDisputesChallengeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisputeAttachmentUpload&gt; PostUploadAttachment(PostUploadAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DisputesApi.PostUploadAttachment(new PostUploadAttachmentRequest
    {
        Attachment = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type DisputeAttachmentUpload
}
catch (ApiException<PostUploadAttachmentError> ex)
{
    if (ex.Error.TryGetError404DisputeNotFound(out var error))
    {
        // TODO: Handle 'error' of type Error404DisputeNotFound
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostUploadAttachmentRequest](src/Tabby/Requests/DisputesApi/PostUploadAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisputeAttachmentUpload](src/Tabby/Models/DisputeAttachmentUpload.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostUploadAttachmentError](src/Tabby/Errors/PostUploadAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsApi

> Source: [PaymentsApi](src/Tabby/Api/PaymentsApi.cs)

<details>
<summary><code>Task&lt;PaymentClose&gt; ClosePayment(ClosePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closed is the final status of the payment. Your payment is going to be closed automatically if you capture the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it - the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this part and close the payment – it will mean that another part of the order is not going to be delivered to the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.ClosePayment(new ClosePaymentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PaymentClose
}
catch (ApiException<ClosePaymentError> ex)
{
    if (ex.Error.TryGetError400PaymentsClose(out var error))
    {
        // TODO: Handle 'error' of type Error400PaymentsClose
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClosePaymentRequest](src/Tabby/Requests/PaymentsApi/ClosePaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentClose](src/Tabby/Models/PaymentClose.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[ClosePaymentError](src/Tabby/Errors/ClosePaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentResponse&gt; GetPayment(GetPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures and Refunds objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.GetPayment(new GetPaymentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PaymentResponse
}
catch (ApiException<GetPaymentError> ex)
{
    if (ex.Error.TryGetError400PaymentsGet(out var error))
    {
        // TODO: Handle 'error' of type Error400PaymentsGet
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentRequest](src/Tabby/Requests/PaymentsApi/GetPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponse](src/Tabby/Models/PaymentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetPaymentError](src/Tabby/Errors/GetPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Payments&gt; GetPayments(GetPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of success payments (`AUTHORIZED` or `CLOSED`) you’ve previously created. The payments are returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate payments object, including the status, any captures and any refunds. If no more payments are available, the resulting array will be empty. Payments might be filtered by creation date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.GetPayments(new GetPaymentsRequest
    {
        Status = Status1TabbyApiReferencePaymentsApi.Authorized,
    });
    // TODO: Handle 'response' of type Payments
}
catch (ApiException<GetPaymentsError> ex)
{
    if (ex.Error.TryGetError400Failed(out var error))
    {
        // TODO: Handle 'error' of type Error400Failed
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPaymentsRequest](src/Tabby/Requests/PaymentsApi/GetPaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Payments](src/Tabby/Models/Payments.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetPaymentsError](src/Tabby/Errors/GetPaymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentCaptureResponse&gt; PostPaymentCapture(PostPaymentCaptureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment will be automatically closed with full capture. If you capture partial amount, the payment will remain Authorized until the rest of the amount is captured or Close request sent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.PostPaymentCapture(new PostPaymentCaptureRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new CaptureRequest { Amount = "some example string", ReferenceId = "some example string" },
    });
    // TODO: Handle 'response' of type PaymentCaptureResponse
}
catch (ApiException<PostPaymentCaptureError> ex)
{
    if (ex.Error.TryGetError400PaymentsCapture(out var error))
    {
        // TODO: Handle 'error' of type Error400PaymentsCapture
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostPaymentCaptureRequest](src/Tabby/Requests/PaymentsApi/PostPaymentCaptureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentCaptureResponse](src/Tabby/Models/PaymentCaptureResponse.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostPaymentCaptureError](src/Tabby/Errors/PostPaymentCaptureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentRefundResponse&gt; PostPaymentRefund(PostPaymentRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a full or partial refund amount request. You can only refund the payment that has Closed status. By default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.PostPaymentRefund(new PostPaymentRefundRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new RefundRequest { Amount = "some example string", ReferenceId = "some example string" },
    });
    // TODO: Handle 'response' of type PaymentRefundResponse
}
catch (ApiException<PostPaymentRefundError> ex)
{
    if (ex.Error.TryGetError400PaymentsRefund(out var error))
    {
        // TODO: Handle 'error' of type Error400PaymentsRefund
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostPaymentRefundRequest](src/Tabby/Requests/PaymentsApi/PostPaymentRefundRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentRefundResponse](src/Tabby/Models/PaymentRefundResponse.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostPaymentRefundError](src/Tabby/Errors/PostPaymentRefundError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentUpdate&gt; PutPayment(PutPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or CLOSED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentsApi.PutPayment(new PutPaymentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApiV2PaymentsRequest(),
    });
    // TODO: Handle 'response' of type PaymentUpdate
}
catch (ApiException<PutPaymentError> ex)
{
    if (ex.Error.TryGetError400PaymentsGet(out var error))
    {
        // TODO: Handle 'error' of type Error400PaymentsGet
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutPaymentRequest](src/Tabby/Requests/PaymentsApi/PutPaymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentUpdate](src/Tabby/Models/PaymentUpdate.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PutPaymentError](src/Tabby/Errors/PutPaymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Tabby/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookDelete&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        XMerchantCode = "code provided to you from Tabby side",
    });
    // TODO: Handle 'response' of type WebhookDelete
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetError401InvalidSecretKey(out var error))
    {
        // TODO: Handle 'error' of type Error401InvalidSecretKey
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/Tabby/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookDelete](src/Tabby/Models/WebhookDelete.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Tabby/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        XMerchantCode = "code provided to you from Tabby side",
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<GetWebhookError> ex)
{
    if (ex.Error.TryGetError401InvalidSecretKey(out var error))
    {
        // TODO: Handle 'error' of type Error401InvalidSecretKey
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookRequest](src/Tabby/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/Tabby/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/Tabby/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponseAll&gt; GetWebhooks(GetWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all registred webhooks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhooks(new GetWebhooksRequest
    {
        XMerchantCode = "code provided to you from Tabby side",
    });
    // TODO: Handle 'response' of type WebhookResponseAll
}
catch (ApiException<GetWebhooksError> ex)
{
    if (ex.Error.TryGetError401Authorization(out var error))
    {
        // TODO: Handle 'error' of type Error401Authorization
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhooksRequest](src/Tabby/Requests/WebhooksApi/GetWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponseAll](src/Tabby/Models/AnyOf/WebhookResponseAll.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[GetWebhooksError](src/Tabby/Errors/GetWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookRegistrationResponse&gt; PostWebhook(PostWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PostWebhook(new PostWebhookRequest
    {
        XMerchantCode = "code provided to you from Tabby side",
        Body = new WebhookRegistration { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type WebhookRegistrationResponse
}
catch (ApiException<PostWebhookError> ex)
{
    if (ex.Error.TryGetError401InvalidSecretKey(out var error))
    {
        // TODO: Handle 'error' of type Error401InvalidSecretKey
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostWebhookRequest](src/Tabby/Requests/WebhooksApi/PostWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookRegistrationResponse](src/Tabby/Models/WebhookRegistrationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PostWebhookError](src/Tabby/Errors/PostWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookUpdate&gt; PutWebhook(PutWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PutWebhook(new PutWebhookRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        XMerchantCode = "code provided to you from Tabby side",
        Body = new WebhookUpdate { Id = "some example string", Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type WebhookUpdate
}
catch (ApiException<PutWebhookError> ex)
{
    if (ex.Error.TryGetError401InvalidSecretKey(out var error))
    {
        // TODO: Handle 'error' of type Error401InvalidSecretKey
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutWebhookRequest](src/Tabby/Requests/WebhooksApi/PutWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookUpdate](src/Tabby/Models/WebhookUpdate.cs)</code>

**OnError**: <code>[ApiException](src/Tabby/Core/Exceptions/ApiException.cs)&lt;[PutWebhookError](src/Tabby/Errors/PutWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

