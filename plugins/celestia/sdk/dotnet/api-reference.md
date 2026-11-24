# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CelestiaClient](src/Celestia/CelestiaClient.cs)

## Blob

> Source: [Blob](src/Celestia/Api/Blob.cs)

<details>
<summary><code>Task&lt;JsonRpcResponse&gt; PostRoot(PostRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Single JSON-RPC entrypoint exposing the `blob.*` namespace including
`blob.Submit`, `blob.Get`, `blob.GetAll`, `blob.GetProof`, `blob.Included`,
and `blob.Subscribe`. Authenticate with a bearer token generated via
`celestia auth `.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Blob.PostRoot(new PostRootRequest
    {
        Body = new JsonRpcRequest { Id = 1, Method = Method.BlobSubmit, Params = [] },
    });
    // TODO: Handle 'response' of type JsonRpcResponse
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

<code>[PostRootRequest](src/Celestia/Requests/Blob/PostRootRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JsonRpcResponse](src/Celestia/Models/JsonRpcResponse.cs)</code>

**OnError**: <code>[ApiException](src/Celestia/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Celestia/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contact

> Source: [Contact](src/Celestia/Api/Contact.cs)

<details>
<summary><code>Task&lt;Success&gt; SubmitWebsiteContact(SubmitWebsiteContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an inquiry to the configured Google Apps Script integration. No API key is required. If the integration is not configured, the existing development fallback logs the inquiry and returns success with an explicit message; that response does not confirm delivery. Submit only with user consent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contact.SubmitWebsiteContact(new SubmitWebsiteContactRequest
    {
        Body = new ContactInput
        {
            FullName = "some example string",
            CompanyName = "some example string",
            Email = "user@example.com",
            InterestedIn = "some example string",
        },
    });
    // TODO: Handle 'response' of type Success
}
catch (ApiException<SubmitWebsiteContactError> ex)
{
    if (ex.Error.TryGetErrorCelestiaWebsiteContactApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorCelestiaWebsiteContactApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubmitWebsiteContactRequest](src/Celestia/Requests/Contact/SubmitWebsiteContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Success](src/Celestia/Models/Success.cs)</code>

**OnError**: <code>[ApiException](src/Celestia/Core/Exceptions/ApiException.cs)&lt;[SubmitWebsiteContactError](src/Celestia/Errors/SubmitWebsiteContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](src/Celestia/Api/HealthApi.cs)

<details>
<summary><code>Task&lt;Health&gt; GetWebsiteHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms that the Next.js runtime can answer requests. Does not check external services. No authentication required.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HealthApi.GetWebsiteHealth();
    // TODO: Handle 'response' of type Health
}
catch (ApiException<GetWebsiteHealthError> ex)
{
    if (ex.Error.TryGetErrorCelestiaWebsiteContactApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorCelestiaWebsiteContactApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/Celestia/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/Celestia/Core/Exceptions/ApiException.cs)&lt;[GetWebsiteHealthError](src/Celestia/Errors/GetWebsiteHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task HeadWebsiteHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same runtime liveness signal as GET, with an empty response body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.HealthApi.HeadWebsiteHealth();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Celestia/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Celestia/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribe

> Source: [Subscribe](src/Celestia/Api/Subscribe.cs)

<details>
<summary><code>Task&lt;Success&gt; SubscribeToWebsiteNewsletter(SubscribeToWebsiteNewsletterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is required from clients. Service credentials remain server-side.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscribe.SubscribeToWebsiteNewsletter(new SubscribeToWebsiteNewsletterRequest
    {
        Body = new SubscriptionInput { Email = "user@example.com", Token = "some example string" },
    });
    // TODO: Handle 'response' of type Success
}
catch (ApiException<SubscribeToWebsiteNewsletterError> ex)
{
    if (ex.Error.TryGetErrorCelestiaWebsiteContactApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorCelestiaWebsiteContactApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubscribeToWebsiteNewsletterRequest](src/Celestia/Requests/Subscribe/SubscribeToWebsiteNewsletterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Success](src/Celestia/Models/Success.cs)</code>

**OnError**: <code>[ApiException](src/Celestia/Core/Exceptions/ApiException.cs)&lt;[SubscribeToWebsiteNewsletterError](src/Celestia/Errors/SubscribeToWebsiteNewsletterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

