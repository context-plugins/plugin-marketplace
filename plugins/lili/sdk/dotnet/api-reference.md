# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [LiliClient](src/Lili/LiliClient.cs)

<details>
<summary><code>Task&lt;WebhookCreateResponse&gt; AddWebhook(AddWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Webhook API registers a new Webhook Listener in the Lili platform.

As part of the response object, a token is returned. This token will be returned on any future webhook call to ensure webhook legitimacy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AddWebhook(new AddWebhookRequest
    {
        Body = new WebhookRequestModel { ServerUrl = "https://example.com", Status = Status2.Active },
    });
    // TODO: Handle 'response' of type WebhookCreateResponse
}
catch (ApiException<AddWebhookError> ex)
{
    if (ex.Error.TryGetJsonErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type JsonErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddWebhookRequest](src/Lili/Requests/AddWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookCreateResponse](src/Lili/Models/WebhookCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[AddWebhookError](src/Lili/Errors/AddWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreatePaymentNotification(CreatePaymentNotificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a PDF containing a bank letter for a customer

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CreatePaymentNotification(new CreatePaymentNotificationRequest { CustomerId = "some example string" });
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePaymentNotificationRequest](src/Lili/Requests/CreatePaymentNotificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Lili/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Delete Webhook API is used to completely delete a registered webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DeleteWebhook(new DeleteWebhookRequest { WebhookId = "some example string" });
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetJsonErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type JsonErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/Lili/Requests/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Lili/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookListResponse&gt; GetAll(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get all webhooks returns a list of all the webhooks the platform registered in Lili

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GetAll();
    // TODO: Handle 'response' of type WebhookListResponse
}
catch (ApiException<GetAllError> ex)
{
    if (ex.Error.TryGetJsonErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type JsonErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookListResponse](src/Lili/Models/WebhookListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[GetAllError](src/Lili/Errors/GetAllError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get Webhook Details returns the details of an webhook that was registered in the Lili system.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GetWebhook(new GetWebhookRequest { WebhookId = "some example string" });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<GetWebhookError> ex)
{
    if (ex.Error.TryGetJsonErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type JsonErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookRequest](src/Lili/Requests/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Lili/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/Lili/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentListResponse&gt; PaymentList(PaymentListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentList(new PaymentListRequest());
    // TODO: Handle 'response' of type PaymentListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PaymentListRequest](src/Lili/Requests/PaymentListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentListResponse](src/Lili/Models/PaymentListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Lili/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentResponse&gt; PutLiliApiV1Payments(PutLiliApiV1PaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment notification in the Lili system

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PutLiliApiV1Payments(new PutLiliApiV1PaymentsRequest());
    // TODO: Handle 'response' of type PaymentResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutLiliApiV1PaymentsRequest](src/Lili/Requests/PutLiliApiV1PaymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponse](src/Lili/Models/PaymentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Lili/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LeadResponse&gt; RegisterAccount(RegisterAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Create Application API is used to create a new Application in the Lili platform.

The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that allows initializing the application process with the pre-filled information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RegisterAccount(new RegisterAccountRequest());
    // TODO: Handle 'response' of type LeadResponse
}
catch (ApiException<RegisterAccountError> ex)
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

<code>[RegisterAccountRequest](src/Lili/Requests/RegisterAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LeadResponse](src/Lili/Models/LeadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[RegisterAccountError](src/Lili/Errors/RegisterAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateLead(UpdateLeadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Lead API is used to update an existing lead in the Lili platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.UpdateLead(new UpdateLeadRequest { CustomerId = "some example string" });
}
catch (ApiException<UpdateLeadError> ex)
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

<code>[UpdateLeadRequest](src/Lili/Requests/UpdateLeadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[UpdateLeadError](src/Lili/Errors/UpdateLeadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable an active webhook, or reactivate it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UpdateWebhook(new UpdateWebhookRequest
    {
        WebhookId = "some example string",
        Body = new WebhookRequestModel { ServerUrl = "https://example.com", Status = Status2.Active },
    });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<UpdateWebhookError> ex)
{
    if (ex.Error.TryGetJsonErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type JsonErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookRequest](src/Lili/Requests/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Lili/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/Lili/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UploadAdditionalDoc(UploadAdditionalDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Upload Additional Document API is used to upload an additional document to the Lili platform for a given lead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.UploadAdditionalDoc(new UploadAdditionalDocRequest { CustomerId = "some example string" });
}
catch (ApiException<UploadAdditionalDocError> ex)
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

<code>[UploadAdditionalDocRequest](src/Lili/Requests/UploadAdditionalDocRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Lili/Core/Exceptions/ApiException.cs)&lt;[UploadAdditionalDocError](src/Lili/Errors/UploadAdditionalDocError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

