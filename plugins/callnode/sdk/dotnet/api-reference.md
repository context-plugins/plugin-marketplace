# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CallNodeClient](src/CallNode/CallNodeClient.cs)

## CallRecords

> Source: [CallRecords](src/CallNode/Api/CallRecords.cs)

<details>
<summary><code>Task&lt;ApiV1CallsResponse1&gt; GetCallRecord(GetCallRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One record by call id — the same uuid CallNode hands you everywhere
else for that call: the `X-CallNode-Call-Id` header on a BYOC delivery
INVITE, and the `callId` in webhook and audio-stream query strings.
Returns 404 for a call that does not exist **or is not yours**.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CallRecords.GetCallRecord(new GetCallRecordRequest { CallId = "some example string" });
    // TODO: Handle 'response' of type ApiV1CallsResponse1
}
catch (ApiException<GetCallRecordError> ex)
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

<code>[GetCallRecordRequest](src/CallNode/Requests/CallRecords/GetCallRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsResponse1](src/CallNode/Models/ApiV1CallsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetCallRecordError](src/CallNode/Errors/GetCallRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CallsResponse&gt; ListCallRecords(ListCallRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records of calls on your numbers, newest first — the same rows the
dashboard's call history shows. Covers inbound calls (webhook-answered,
BYOC `voice.sipUri` deliveries, SIP-trunk ingress) and outbound calls
logged against your numbers.

`endReason` and `sipCause` say **why a call ended**: `endReason` is
CallNode's own vocabulary (for example `idle_timeout` or
`insufficient_balance`; null means an ordinary hangup), and `sipCause`
is the SIP-level hangup cause of the caller leg (for example
`NORMAL_CLEARING` or `RECOVERY_ON_TIMER_EXPIRE`). Records from before
2026-09-22 predate these fields and return null for both.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CallRecords.ListCallRecords(new ListCallRecordsRequest());
    // TODO: Handle 'response' of type ApiV1CallsResponse
}
catch (ApiException<ListCallRecordsError> ex)
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

<code>[ListCallRecordsRequest](src/CallNode/Requests/CallRecords/ListCallRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsResponse](src/CallNode/Models/ApiV1CallsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListCallRecordsError](src/CallNode/Errors/ListCallRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Email

> Source: [Email](src/CallNode/Api/Email.cs)

<details>
<summary><code>Task&lt;EmailDomain&gt; CreateEmailDomain(CreateEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a domain you control and answers 201 with the DNS records to publish
(DKIM TXT, SPF TXT, return-path CNAME). Adding a domain the account already holds
replays it (200). Requires business verification and the Email API priced on your plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.CreateEmailDomain(new CreateEmailDomainRequest
    {
        Body = new ApiV1EmailDomainsRequest { Domain = "mail.acme.com" },
    });
    // TODO: Handle 'response' of type EmailDomain
}
catch (ApiException<CreateEmailDomainError> ex)
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

<code>[CreateEmailDomainRequest](src/CallNode/Requests/Email/CreateEmailDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](src/CallNode/Models/EmailDomain.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[CreateEmailDomainError](src/CallNode/Errors/CreateEmailDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEmailDomain(DeleteEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Messages already sent keep their history.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Email.DeleteEmailDomain(new DeleteEmailDomainRequest { Id = "some example string" });
}
catch (ApiException<DeleteEmailDomainError> ex)
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

<code>[DeleteEmailDomainRequest](src/CallNode/Requests/Email/DeleteEmailDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[DeleteEmailDomainError](src/CallNode/Errors/DeleteEmailDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EmailDomain&gt; GetEmailDomain(GetEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.GetEmailDomain(new GetEmailDomainRequest { Id = "some example string" });
    // TODO: Handle 'response' of type EmailDomain
}
catch (ApiException<GetEmailDomainError> ex)
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

<code>[GetEmailDomainRequest](src/CallNode/Requests/Email/GetEmailDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](src/CallNode/Models/EmailDomain.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetEmailDomainError](src/CallNode/Errors/GetEmailDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EmailMessage&gt; GetEmailMessage(GetEmailMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.GetEmailMessage(new GetEmailMessageRequest { Id = "cmh2x9d4k0003s8w2q1f7a2bc" });
    // TODO: Handle 'response' of type EmailMessage
}
catch (ApiException<GetEmailMessageError> ex)
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

<code>[GetEmailMessageRequest](src/CallNode/Requests/Email/GetEmailMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailMessage](src/CallNode/Models/EmailMessage.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetEmailMessageError](src/CallNode/Errors/GetEmailMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1EmailDomainsResponse&gt; ListEmailDomains(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.ListEmailDomains();
    // TODO: Handle 'response' of type ApiV1EmailDomainsResponse
}
catch (ApiException<ListEmailDomainsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EmailDomainsResponse](src/CallNode/Models/ApiV1EmailDomainsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListEmailDomainsError](src/CallNode/Errors/ListEmailDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1EmailMessagesResponse&gt; ListEmailMessages(ListEmailMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first, keyset-paginated. Test keys list test messages only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.ListEmailMessages(new ListEmailMessagesRequest());
    // TODO: Handle 'response' of type ApiV1EmailMessagesResponse
}
catch (ApiException<ListEmailMessagesError> ex)
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

<code>[ListEmailMessagesRequest](src/CallNode/Requests/Email/ListEmailMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EmailMessagesResponse](src/CallNode/Models/ApiV1EmailMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListEmailMessagesError](src/CallNode/Errors/ListEmailMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EmailMessage&gt; SendEmail(SendEmailOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send one message to up to 50 recipients (to + cc + bcc) from an address on one
of your active sending domains. Gates run in order: field validation, business
verification, the From domain's status, idempotency, a per-recipient rate on
your plan, and a balance of at least `recipients × rate`. The message is handed
to the sending infrastructure and answered 202 as `sent`; the charge happens on
acceptance. A `cn_test_` key runs every gate and then simulates. Bodies are not
stored after the handoff.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.SendEmail(new SendEmailOperationRequest
    {
        Body = new SendEmailRequest
        {
            From = "Acme Billing <billing@mail.acme.com>",
            To = to,
            Subject = "Your October invoice",
            Html = "<p>Hi Dana, your invoice for October is attached.</p>",
            Text = "Hi Dana, your invoice for October is attached.",
            ReplyTo = "accounts@mail.acme.com",
            Headers = new Dictionary<string, string> { ["X-Acme-Invoice"] = "inv_2041" },
            Attachments = [
                new Attachment
                {
                    Filename = "invoice-2041.pdf",
                    Content = "JVBERi0xLjQK...",
                    ContentType = "application/pdf",
                },
            ],
            Tags = [new Tag1 { Name = "campaign", Value = "invoices" }],
            StatusWebhookUrl = "https://yourapp.example.com/email/events",
        },
    });
    // TODO: Handle 'response' of type EmailMessage
}
catch (ApiException<SendEmailError> ex)
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

<code>[SendEmailOperationRequest](src/CallNode/Requests/Email/SendEmailOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailMessage](src/CallNode/Models/EmailMessage.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[SendEmailError](src/CallNode/Errors/SendEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EmailDomain&gt; VerifyEmailDomain(VerifyEmailDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A real lookup against public DNS. Answers the domain with its new status; a failed check carries `verificationError`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Email.VerifyEmailDomain(new VerifyEmailDomainRequest { Id = "some example string" });
    // TODO: Handle 'response' of type EmailDomain
}
catch (ApiException<VerifyEmailDomainError> ex)
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

<code>[VerifyEmailDomainRequest](src/CallNode/Requests/Email/VerifyEmailDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](src/CallNode/Models/EmailDomain.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[VerifyEmailDomainError](src/CallNode/Errors/VerifyEmailDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Faxes

> Source: [Faxes](src/CallNode/Api/Faxes.cs)

<details>
<summary><code>Task DeleteFax(DeleteFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409 `job_in_progress`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Faxes.DeleteFax(new DeleteFaxRequest { Id = "some example string" });
}
catch (ApiException<DeleteFaxError> ex)
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

<code>[DeleteFaxRequest](src/CallNode/Requests/Faxes/DeleteFaxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[DeleteFaxError](src/CallNode/Errors/DeleteFaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadFax(DownloadFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Faxes.DownloadFax(new DownloadFaxRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadFaxError> ex)
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

<code>[DownloadFaxRequest](src/CallNode/Requests/Faxes/DownloadFaxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[DownloadFaxError](src/CallNode/Errors/DownloadFaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Fax&gt; GetFax(GetFaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Faxes.GetFax(new GetFaxRequest { Id = "cmfx7k2q10001s8w2b1d9e3fa" });
    // TODO: Handle 'response' of type Fax
}
catch (ApiException<GetFaxError> ex)
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

<code>[GetFaxRequest](src/CallNode/Requests/Faxes/GetFaxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fax](src/CallNode/Models/Fax.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetFaxError](src/CallNode/Errors/GetFaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FaxesResponse&gt; ListFaxes(ListFaxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first, keyset-paginated. Test keys list test faxes only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Faxes.ListFaxes(new ListFaxesRequest());
    // TODO: Handle 'response' of type ApiV1FaxesResponse
}
catch (ApiException<ListFaxesError> ex)
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

<code>[ListFaxesRequest](src/CallNode/Requests/Faxes/ListFaxesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FaxesResponse](src/CallNode/Models/ApiV1FaxesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListFaxesError](src/CallNode/Errors/ListFaxesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Fax&gt; SendFax(SendFaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts the document to a fax TIFF and queues it from one of your numbers.
Gates run in order: number ownership, business verification, destination
class, suppression (do-not-contact), wholesale contract posture, document
limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at
least `pages × rate`. Only the pages actually transmitted are charged, when
the fax finishes. A `cn_test_` key runs every gate and then simulates the
transmission. The 8am–9pm called-party window is not applied to faxes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Faxes.SendFax(new SendFaxOperationRequest
    {
        Body = new SendFaxRequest
        {
            To = "+14155550142",
            From = "+15145550199",
            Document = "data:application/pdf;base64,JVBERi0xLjQKJcfs...",
            Filename = "signed-agreement.pdf",
            Resolution = Resolution.Fine,
            Header = "Acme Legal",
            StatusWebhookUrl = "https://yourcrm.example.com/fax/events",
        },
    });
    // TODO: Handle 'response' of type Fax
}
catch (ApiException<SendFaxError> ex)
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

<code>[SendFaxOperationRequest](src/CallNode/Requests/Faxes/SendFaxOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fax](src/CallNode/Models/Fax.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[SendFaxError](src/CallNode/Errors/SendFaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MessagingApi

> Source: [MessagingApi](src/CallNode/Api/MessagingApi.cs)

<details>
<summary><code>Task&lt;Message&gt; GetMessage(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MessagingApi.GetMessage(new GetMessageRequest { Id = "cmpt5ec0w00022hb2etd67258" });
    // TODO: Handle 'response' of type Message
}
catch (ApiException<GetMessageError> ex)
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

<code>[GetMessageRequest](src/CallNode/Requests/MessagingApi/GetMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Message](src/CallNode/Models/Message.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetMessageError](src/CallNode/Errors/GetMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SendMessageResponse&gt; SendMessage(SendMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a message from one of your numbers. Supplying `media` makes it an MMS.
Four gates run in order: number ownership, recipient opt-out status, the TCPA
window, and carrier registration (10DLC for local numbers, Toll-Free
Verification for toll-free).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MessagingApi.SendMessage(new SendMessageOperationRequest
    {
        Body = new SendMessageRequest
        {
            To = "+16135551234",
            From = "+15145550199",
            Body = "Your demo is confirmed for Wednesday at 10am.",
            Media = [],
            StatusWebhookUrl = "https://yourcrm.example.com/sms/events",
            TcpaOverride = false,
        },
    });
    // TODO: Handle 'response' of type SendMessageResponse
}
catch (ApiException<SendMessageError> ex)
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

<code>[SendMessageOperationRequest](src/CallNode/Requests/MessagingApi/SendMessageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SendMessageResponse](src/CallNode/Models/SendMessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[SendMessageError](src/CallNode/Errors/SendMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OutboundCalls

> Source: [OutboundCalls](src/CallNode/Api/OutboundCalls.cs)

<details>
<summary><code>Task&lt;ApiV1OutboundCallsResponse1&gt; CancelCall(CancelCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hangs up an in-progress call, or cancels one that has not yet connected.
Calls already in a terminal state are returned unchanged (also 202) — the
operation is safe to retry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OutboundCalls.CancelCall(new CancelCallRequest
    {
        CallId = "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a",
    });
    // TODO: Handle 'response' of type ApiV1OutboundCallsResponse1
}
catch (ApiException<CancelCallError> ex)
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

<code>[CancelCallRequest](src/CallNode/Requests/OutboundCalls/CancelCallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OutboundCallsResponse1](src/CallNode/Models/ApiV1OutboundCallsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[CancelCallError](src/CallNode/Errors/CancelCallError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Call&gt; GetCall(GetCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OutboundCalls.GetCall(new GetCallRequest
    {
        CallId = "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a",
    });
    // TODO: Handle 'response' of type Call
}
catch (ApiException<GetCallError> ex)
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

<code>[GetCallRequest](src/CallNode/Requests/OutboundCalls/GetCallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Call](src/CallNode/Models/Call.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetCallError](src/CallNode/Errors/GetCallError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OutboundCallsResponse&gt; ListCalls(ListCallsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your outbound calls, newest first, with cursor pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OutboundCalls.ListCalls(new ListCallsRequest());
    // TODO: Handle 'response' of type ApiV1OutboundCallsResponse
}
catch (ApiException<ListCallsError> ex)
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

<code>[ListCallsRequest](src/CallNode/Requests/OutboundCalls/ListCallsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OutboundCallsResponse](src/CallNode/Models/ApiV1OutboundCallsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListCallsError](src/CallNode/Errors/ListCallsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OriginateResponse&gt; OriginateCall(OriginateCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places an outbound call. Returns 202 once CallNode accepts the originate command.
The call lifecycle is then visible via GET on the same `callId`, or via the
optional status webhook.

The destination takes one of three mutually exclusive forms:

1. **PSTN** — `to` is E.164; the call is completed over the phone network.
2. **Direct SIP URI** — `to` is `sip:user@host[:port][;transport=udp|tcp]`;
the call is delivered straight to your SIP endpoint.
3. **Saved trunk (BYOC)** — `sipTrunkId` selects a trunk created in the
dashboard, and `to` is an E.164 number (terminated by your carrier) or an
extension your host understands.

In every form `from` must be a CallNode number you own — it becomes the
caller ID presented to the called party or your SIP endpoint. SIP
destinations bill at your plan's SIP egress rate and must accept traffic
from 198.27.122.194 or 192.95.44.47 (audio G.711 PCMU/PCMA at 8 kHz, DTMF RFC 2833).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OutboundCalls.OriginateCall(new OriginateCallRequest
    {
        Body = new OriginateRequest
        {
            To = "+16135551234",
            From = "+15145550199",
            WebhookUrl = "https://yourcrm.example.com/voice/n8n",
            WebhookAuth = new WebhookAuth
            {
                Type = TypeCallnodeIoOutboundCallsApi.Header,
                HeaderName = "X-API-Key",
                Value = "your-n8n-secret",
            },
            StatusWebhookUrl = "https://yourcrm.example.com/voice/events",
            MaxDurationSecs = 600,
            TcpaOverride = false,
        },
    });
    // TODO: Handle 'response' of type OriginateResponse
}
catch (ApiException<OriginateCallError> ex)
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

<code>[OriginateCallRequest](src/CallNode/Requests/OutboundCalls/OriginateCallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OriginateResponse](src/CallNode/Models/OriginateResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[OriginateCallError](src/CallNode/Errors/OriginateCallError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CallsTransferResponse&gt; TransferCall(TransferCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves the caller on an in-progress call to another destination, and
hangs up whatever they were connected to.

Built for calls delivered to your own SIP endpoint via a number's
`voice.sipUri`: those bridge straight to you without running the
conversational webhook, so returning `transfer: true` from a webhook is
not available on them. It also works on calls answered by a CallNode AI
agent.

Every transfer originates a new leg on your behalf, so it clears the
same gates as placing an outbound call: KYC, DNC/suppression, and the
destination-class guard. A CallLog and UsageRecord are written for the
transferred leg, so it is attributed and billable.

A transfer blocked by a gate returns the caller to the agent rather
than hanging up, so the agent can take a message.

`202` means accepted, not yet connected; the bridge follows
immediately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OutboundCalls.TransferCall(new TransferCallRequest
    {
        CallId = "some example string",
        Body = new ApiV1CallsTransferRequest { Destination = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1CallsTransferResponse
}
catch (ApiException<TransferCallError> ex)
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

<code>[TransferCallRequest](src/CallNode/Requests/OutboundCalls/TransferCallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsTransferResponse](src/CallNode/Models/ApiV1CallsTransferResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[TransferCallError](src/CallNode/Errors/TransferCallError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PhoneNumbers

> Source: [PhoneNumbers](src/CallNode/Api/PhoneNumbers.cs)

<details>
<summary><code>Task&lt;ApiV1NumbersResponse1&gt; GetNumber(GetNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.GetNumber(new GetNumberRequest { Id = "cmpxeh9o60002pp4h7oznictb" });
    // TODO: Handle 'response' of type ApiV1NumbersResponse1
}
catch (ApiException<GetNumberError> ex)
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

<code>[GetNumberRequest](src/CallNode/Requests/PhoneNumbers/GetNumberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse1](src/CallNode/Models/ApiV1NumbersResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetNumberError](src/CallNode/Errors/GetNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1NumbersResponse&gt; ListNumbers(ListNumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your numbers, newest first. Every filter is applied server-side and they combine (AND).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.ListNumbers(new ListNumbersRequest());
    // TODO: Handle 'response' of type ApiV1NumbersResponse
}
catch (ApiException<ListNumbersError> ex)
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

<code>[ListNumbersRequest](src/CallNode/Requests/PhoneNumbers/ListNumbersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse](src/CallNode/Models/ApiV1NumbersResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListNumbersError](src/CallNode/Errors/ListNumbersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PurchaseNumberResponse&gt; PurchaseNumber(PurchaseNumberOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purchases a number found via search and bills your wallet for the first
month at your plan's rate (no setup fee; an included Pro Bundle number
costs nothing). Voice and messaging webhooks can be
provisioned in the same call, so the number is fully wired the moment it
activates — no dashboard visit needed.

`type` is optional and derived from the number itself (8NN prefixes are
toll-free). Purchasing is idempotent on the number: re-purchasing a number
you already own returns `200` with the existing record instead of billing
twice. A number you previously released is automatically restored from the
recycle bin rather than re-ordered.

A2P messaging registration provisions asynchronously after purchase — the
number's `messaging.ready` flag flips to `true` when it can send SMS/MMS.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.PurchaseNumber(new PurchaseNumberOperationRequest
    {
        Body = new PurchaseNumberRequest
        {
            PhoneNumber = "+18282129522",
            FriendlyName = "Support line",
            Voice = new VoiceConfig
            {
                WebhookUrl = "https://yourcrm.example.com/voice/n8n",
                WebhookAuth = new WebhookAuthCallnodeIoPhoneNumbersApi
                {
                    Type = Type2.Header,
                    HeaderName = "X-API-Key",
                    Value = "your-n8n-secret",
                },
            },
            Messaging = new MessagingConfig
            {
                WebhookUrl = "https://yourcrm.example.com/sms/n8n",
                WebhookAuth = new WebhookAuthCallnodeIoPhoneNumbersApi { Type = Type2.Bearer, Value = "your-token" },
                Enabled = true,
            },
        },
    });
    // TODO: Handle 'response' of type PurchaseNumberResponse
}
catch (ApiException<PurchaseNumberError> ex)
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

<code>[PurchaseNumberOperationRequest](src/CallNode/Requests/PhoneNumbers/PurchaseNumberOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseNumberResponse](src/CallNode/Models/PurchaseNumberResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[PurchaseNumberError](src/CallNode/Errors/PurchaseNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1NumbersResponse3&gt; ReleaseNumber(ReleaseNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Releases the number and stops its billing. Released numbers are parked in
a recycle bin tied to your account — re-purchasing the same number later
restores it (with fresh billing) instead of losing it forever.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.ReleaseNumber(new ReleaseNumberRequest
    {
        Id = "cmpxeh9o60002pp4h7oznictb",
    });
    // TODO: Handle 'response' of type ApiV1NumbersResponse3
}
catch (ApiException<ReleaseNumberError> ex)
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

<code>[ReleaseNumberRequest](src/CallNode/Requests/PhoneNumbers/ReleaseNumberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse3](src/CallNode/Models/ApiV1NumbersResponse3.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ReleaseNumberError](src/CallNode/Errors/ReleaseNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1NumbersAvailableResponse&gt; SearchAvailableNumbers(SearchAvailableNumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches live carrier inventory for numbers you can purchase right now.
Local searches require `areaCode`; toll-free searches accept an optional
`prefix` (800–888) or a `vanity` word. The `pricing` block reflects what
**your** account would pay today — Pro Bundle discounts and included-number
slots are applied automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.SearchAvailableNumbers(new SearchAvailableNumbersRequest
    {
        AreaCode = "828",
    });
    // TODO: Handle 'response' of type ApiV1NumbersAvailableResponse
}
catch (ApiException<SearchAvailableNumbersError> ex)
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

<code>[SearchAvailableNumbersRequest](src/CallNode/Requests/PhoneNumbers/SearchAvailableNumbersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersAvailableResponse](src/CallNode/Models/ApiV1NumbersAvailableResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[SearchAvailableNumbersError](src/CallNode/Errors/SearchAvailableNumbersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1NumbersResponse1&gt; UpdateNumber(UpdateNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions or updates the voice webhook (your AI agent endpoint), the
messaging webhook, their authentication, and the friendly name. Only the
fields you send change; webhook secrets are write-only and never echoed
back (responses report `valueSet: true` instead).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PhoneNumbers.UpdateNumber(new UpdateNumberRequest
    {
        Id = "cmpxeh9o60002pp4h7oznictb",
        Body = new ApiV1NumbersRequest
        {
            Voice = new VoiceConfig
            {
                WebhookUrl = "https://yourcrm.example.com/voice/n8n",
                WebhookAuth = new WebhookAuthCallnodeIoPhoneNumbersApi
                {
                    Type = Type2.Header,
                    HeaderName = "X-API-Key",
                    Value = "your-n8n-secret",
                },
            },
        },
    });
    // TODO: Handle 'response' of type ApiV1NumbersResponse1
}
catch (ApiException<UpdateNumberError> ex)
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

<code>[UpdateNumberRequest](src/CallNode/Requests/PhoneNumbers/UpdateNumberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse1](src/CallNode/Models/ApiV1NumbersResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[UpdateNumberError](src/CallNode/Errors/UpdateNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SipTrunks

> Source: [SipTrunks](src/CallNode/Api/SipTrunks.cs)

<details>
<summary><code>Task&lt;SipTrunk&gt; CreateSipTrunk(CreateSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to
your SIP host), ingress (accept inbound calls from your PBX/SBC), or
both — you must supply an `egressHost` and/or one or more `allowedIps`.

Requires a verified (KYC) account. Trunks beyond your plan's included
count incur your plan's additional-trunk monthly fee: the first attempt
returns `402 monthly_fee_confirmation_required`; re-submit with
`confirmMonthlyFee: true` to acknowledge the fee and create the trunk.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.CreateSipTrunk(new CreateSipTrunkRequest
    {
        Body = new CreateTrunkRequest
        {
            Name = "HQ PBX",
            AllowedIps = ["203.0.113.10", "203.0.113.11"],
            IngressEnabled = true,
            DefaultPhoneNumberId = "cmpxeh9o60002pp4h7oznictb",
        },
    });
    // TODO: Handle 'response' of type SipTrunk
}
catch (ApiException<CreateSipTrunkError> ex)
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

<code>[CreateSipTrunkRequest](src/CallNode/Requests/SipTrunks/CreateSipTrunkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](src/CallNode/Models/SipTrunk.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[CreateSipTrunkError](src/CallNode/Errors/CreateSipTrunkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TrunksResponse1&gt; DeleteSipTrunk(DeleteSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes the trunk. The row is retained (renamed to free the name
slot) for call-detail history and traceback. A trunk included in your
plan (`monthlyFeeApplies: false`) can't be deleted; disable it instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.DeleteSipTrunk(new DeleteSipTrunkRequest
    {
        Id = "cmb1xk2p40001abcd1234wxyz",
    });
    // TODO: Handle 'response' of type ApiV1TrunksResponse1
}
catch (ApiException<DeleteSipTrunkError> ex)
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

<code>[DeleteSipTrunkRequest](src/CallNode/Requests/SipTrunks/DeleteSipTrunkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TrunksResponse1](src/CallNode/Models/ApiV1TrunksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[DeleteSipTrunkError](src/CallNode/Errors/DeleteSipTrunkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SipTrunk&gt; GetSipTrunk(GetSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.GetSipTrunk(new GetSipTrunkRequest { Id = "cmb1xk2p40001abcd1234wxyz" });
    // TODO: Handle 'response' of type SipTrunk
}
catch (ApiException<GetSipTrunkError> ex)
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

<code>[GetSipTrunkRequest](src/CallNode/Requests/SipTrunks/GetSipTrunkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](src/CallNode/Models/SipTrunk.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[GetSipTrunkError](src/CallNode/Errors/GetSipTrunkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TrunksResponse&gt; ListSipTrunks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your saved SIP trunks alongside account-level trunk settings —
your plan's included trunk count and additional-trunk fee, how many
trunks are active, the egress source IP your endpoints must allow, and
the ingress endpoint your PBX/SBC points at.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.ListSipTrunks();
    // TODO: Handle 'response' of type ApiV1TrunksResponse
}
catch (ApiException<ListSipTrunksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TrunksResponse](src/CallNode/Models/ApiV1TrunksResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListSipTrunksError](src/CallNode/Errors/ListSipTrunksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SipTrunk&gt; RotateSipTrunkCredentials(RotateSipTrunkCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new SIP password for a registration trunk, keeping the same
username. This is the only recovery path for a lost password: CallNode
stores a non-reversible digest, never the plaintext.

The new password is returned **once**, in `sipPassword`. The previous
password stops working within about a minute, so update your PBX
promptly — it will need to re-register.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.RotateSipTrunkCredentials(new RotateSipTrunkCredentialsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type SipTrunk
}
catch (ApiException<RotateSipTrunkCredentialsError> ex)
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

<code>[RotateSipTrunkCredentialsRequest](src/CallNode/Requests/SipTrunks/RotateSipTrunkCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](src/CallNode/Models/SipTrunk.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[RotateSipTrunkCredentialsError](src/CallNode/Errors/RotateSipTrunkCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SipTrunk&gt; UpdateSipTrunk(UpdateSipTrunkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates any subset of a trunk's fields. Send `egressHost` as `null` or
`""` to clear it and make the trunk ingress-only. The same validation
codes as create apply; a request with no recognized fields returns
`400 no_fields`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SipTrunks.UpdateSipTrunk(new UpdateSipTrunkRequest
    {
        Id = "cmb1xk2p40001abcd1234wxyz",
        Body = new UpdateTrunkRequest { Status = StatusCallnodeIoSipTrunksApi.Disabled, AllowedIps = ["203.0.113.10"] },
    });
    // TODO: Handle 'response' of type SipTrunk
}
catch (ApiException<UpdateSipTrunkError> ex)
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

<code>[UpdateSipTrunkRequest](src/CallNode/Requests/SipTrunks/UpdateSipTrunkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](src/CallNode/Models/SipTrunk.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[UpdateSipTrunkError](src/CallNode/Errors/UpdateSipTrunkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Wholesale

> Source: [Wholesale](src/CallNode/Api/Wholesale.cs)

<details>
<summary><code>Task&lt;ApiV1WholesaleAreasResponse&gt; ListWholesaleAreas(ListWholesaleAreasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Areas with available stock and `estMonthlyUsd` — YOUR contract price
per number in that area, resolved server-side. There is no per-number
search on wholesale inventory: you order from an area and a number is
allocated.

The first fetch for a large country (the UK has 600+ rate centres) can
take up to a minute; results are cached server-side for ~10 minutes.
Stock above zero does not guarantee an order succeeds — on an order
failure, pick a different area rather than retrying the same one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wholesale.ListWholesaleAreas(new ListWholesaleAreasRequest());
    // TODO: Handle 'response' of type ApiV1WholesaleAreasResponse
}
catch (ApiException<ListWholesaleAreasError> ex)
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

<code>[ListWholesaleAreasRequest](src/CallNode/Requests/Wholesale/ListWholesaleAreasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleAreasResponse](src/CallNode/Models/ApiV1WholesaleAreasResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListWholesaleAreasError](src/CallNode/Errors/ListWholesaleAreasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WholesaleCountriesResponse&gt; ListWholesaleCountries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Countries where wholesale inventory exists — US and international.

All `/api/v1/wholesale` endpoints are gated per request: wholesale must
be ACTIVE on your account (arranged with our team — raise a Wholesale
Activation request from the dashboard) and your business verification
must be complete. Otherwise requests return
`403 wholesale_not_activated` or `403 account_not_verified`.

`countryId` values are opaque signed tokens with a short lifetime —
fetch them per ordering session and never persist them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wholesale.ListWholesaleCountries();
    // TODO: Handle 'response' of type ApiV1WholesaleCountriesResponse
}
catch (ApiException<ListWholesaleCountriesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleCountriesResponse](src/CallNode/Models/ApiV1WholesaleCountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListWholesaleCountriesError](src/CallNode/Errors/ListWholesaleCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WholesaleStatesResponse&gt; ListWholesaleStates(ListWholesaleStatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Regions for a country. Many countries have none — an empty list means
go straight to areas with just the `countryId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wholesale.ListWholesaleStates(new ListWholesaleStatesRequest());
    // TODO: Handle 'response' of type ApiV1WholesaleStatesResponse
}
catch (ApiException<ListWholesaleStatesError> ex)
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

<code>[ListWholesaleStatesRequest](src/CallNode/Requests/Wholesale/ListWholesaleStatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleStatesResponse](src/CallNode/Models/ApiV1WholesaleStatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[ListWholesaleStatesError](src/CallNode/Errors/ListWholesaleStatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WholesaleNumbersResponse&gt; OrderWholesaleNumber(OrderWholesaleNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allocates a number from an area and starts delivering its inbound
calls to your SIP endpoint. Prepaid: the first month at your contract
rate is charged from your wallet at allocation, then monthly; inbound
minutes are charged per call as they complete.

`deliverTo` accepts three forms:
- a bare host (`pbx.example.com` or a public IP) — we deliver as
`sip:@host`
- a sip: URI containing `{number}` — replaced with the allocated number
- a full `sip:` URI, used verbatim

Allocation can take up to ~40 seconds. On `order_failed` for a specific
area, order from a DIFFERENT area — retrying the same one will not help.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wholesale.OrderWholesaleNumber(new OrderWholesaleNumberRequest
    {
        Body = new ApiV1WholesaleNumbersRequest { AreaId = "some example string", DeliverTo = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1WholesaleNumbersResponse
}
catch (ApiException<OrderWholesaleNumberError> ex)
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

<code>[OrderWholesaleNumberRequest](src/CallNode/Requests/Wholesale/OrderWholesaleNumberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleNumbersResponse](src/CallNode/Models/ApiV1WholesaleNumbersResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[OrderWholesaleNumberError](src/CallNode/Errors/OrderWholesaleNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WholesaleNumbersDeliveryResponse&gt; UpdateWholesaleDelivery(UpdateWholesaleDeliveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the delivery destination of an existing wholesale number —
same `deliverTo` forms as ordering, resolved against the known number.
Clearing delivery is not allowed: a wholesale number with no
destination silently drops every call.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wholesale.UpdateWholesaleDelivery(new UpdateWholesaleDeliveryRequest
    {
        Id = "some example string",
        Body = new ApiV1WholesaleNumbersDeliveryRequest { DeliverTo = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1WholesaleNumbersDeliveryResponse
}
catch (ApiException<UpdateWholesaleDeliveryError> ex)
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

<code>[UpdateWholesaleDeliveryRequest](src/CallNode/Requests/Wholesale/UpdateWholesaleDeliveryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleNumbersDeliveryResponse](src/CallNode/Models/ApiV1WholesaleNumbersDeliveryResponse.cs)</code>

**OnError**: <code>[ApiException](src/CallNode/Core/Exceptions/ApiException.cs)&lt;[UpdateWholesaleDeliveryError](src/CallNode/Errors/UpdateWholesaleDeliveryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

