# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [MailboxlayerClient](src/Mailboxlayer/MailboxlayerClient.cs)

## BulkCheck

> Source: [BulkCheck](src/Mailboxlayer/Api/BulkCheck.cs)

<details>
<summary><code>Task&lt;BulkCheckResponse&gt; BulkCheckEmails(BulkCheckEmailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk validation accepts a comma-separated list of email addresses in the `emails` query parameter (e.g. `emails=a@x.com,b@y.com,…`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkCheck.BulkCheckEmails(new BulkCheckEmailsRequest
    {
        AccessKey = "YOUR_ACCESS_KEY",
        Emails = "user1@example.com,user2@example.com",
        Smtp = Smtp.Value1,
        CatchAll = CatchAll.Value0,
        Format = Format.Value0,
        Callback = "myCallback",
    });
    // TODO: Handle 'response' of type BulkCheckResponse
}
catch (ApiException<BulkCheckEmailsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCheckEmailsRequest](src/Mailboxlayer/Requests/BulkCheck/BulkCheckEmailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCheckResponse](src/Mailboxlayer/Models/AnyOf/BulkCheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/Mailboxlayer/Core/Exceptions/ApiException.cs)&lt;[BulkCheckEmailsError](src/Mailboxlayer/Errors/BulkCheckEmailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Check

> Source: [Check](src/Mailboxlayer/Api/Check.cs)

<details>
<summary><code>Task&lt;CheckResponse&gt; CheckEmail(CheckEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform an email validation for a single email address.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Check.CheckEmail(new CheckEmailRequest
    {
        AccessKey = "YOUR_ACCESS_KEY",
        Email = "support@mailboxlayer.com",
        Smtp = Smtp.Value1,
        CatchAll = CatchAll.Value0,
        Format = Format.Value0,
        Callback = "myCallback",
    });
    // TODO: Handle 'response' of type CheckResponse
}
catch (ApiException<CheckEmailError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckEmailRequest](src/Mailboxlayer/Requests/Check/CheckEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckResponse](src/Mailboxlayer/Models/AnyOf/CheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/Mailboxlayer/Core/Exceptions/ApiException.cs)&lt;[CheckEmailError](src/Mailboxlayer/Errors/CheckEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

