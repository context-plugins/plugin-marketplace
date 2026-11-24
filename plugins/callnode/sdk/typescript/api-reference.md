# Reference

> Source: [CallNodeClient](src/client.ts)

## CallRecords

> Source: [CallRecords](src/resources/call-records.ts)

<details>
<summary><code>getCallRecord(request: CallRecords.GetCallRecordRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CallsResponse1, CallRecords.GetCallRecordError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.callRecords.getCallRecord({ callId: "some example string" });
  // TODO: Handle 'response' of type ApiV1CallsResponse1
} catch (err) {
  // TODO: Handle 'err' of type CallRecords.GetCallRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callRecords.getCallRecord({ callId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CallsResponse1
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
| <code>callId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callRecords.getCallRecord(request)`

- **OnSuccess**: <code>[ApiV1CallsResponse1](src/models/api-v1-calls-response1.ts)</code>
- **OnError**: throws <code>[CallRecords.GetCallRecordError](src/resources/call-records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callRecords.getCallRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CallsResponse1, CallRecords.GetCallRecordError&gt;</code>, with `result.value` of type <code>[ApiV1CallsResponse1](src/models/api-v1-calls-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCallRecords(request?: CallRecords.ListCallRecordsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CallsResponse, CallRecords.ListCallRecordsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.callRecords.listCallRecords();
  // TODO: Handle 'response' of type ApiV1CallsResponse
} catch (err) {
  // TODO: Handle 'err' of type CallRecords.ListCallRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callRecords.listCallRecords().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CallsResponse
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
| <code>number?</code> | <code>string</code> | Limit to one of your numbers — E.164 or the number's id. |
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | - |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | - |
| <code>since?</code> | <code>Date</code> (date-time) | Only calls starting at or after this instant. |
| <code>until?</code> | <code>Date</code> (date-time) | Only calls starting at or before this instant. |
| <code>before?</code> | <code>Date</code> (date-time) | Keyset cursor — pass the previous page's `nextBefore`. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callRecords.listCallRecords(request)`

- **OnSuccess**: <code>[ApiV1CallsResponse](src/models/api-v1-calls-response.ts)</code>
- **OnError**: throws <code>[CallRecords.ListCallRecordsError](src/resources/call-records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callRecords.listCallRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CallsResponse, CallRecords.ListCallRecordsError&gt;</code>, with `result.value` of type <code>[ApiV1CallsResponse](src/models/api-v1-calls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Email

> Source: [Email](src/resources/email.ts)

<details>
<summary><code>createEmailDomain(request: Email.CreateEmailDomainRequest, options?: RequestOptions): ApiPromise&lt;EmailDomain, Email.CreateEmailDomainError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.createEmailDomain({ body: { domain: "mail.acme.com" } });
  // TODO: Handle 'response' of type EmailDomain
} catch (err) {
  // TODO: Handle 'err' of type Email.CreateEmailDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.createEmailDomain({ body: { domain: "mail.acme.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailDomain
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
| <code>body</code> | <code>[ApiV1EmailDomainsRequest](src/models/api-v1-email-domains-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.createEmailDomain(request)`

- **OnSuccess**: <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: throws <code>[Email.CreateEmailDomainError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.createEmailDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailDomain, Email.CreateEmailDomainError&gt;</code>, with `result.value` of type <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEmailDomain(request: Email.DeleteEmailDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, Email.DeleteEmailDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Messages already sent keep their history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.email.deleteEmailDomain({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Email.DeleteEmailDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.deleteEmailDomain({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.deleteEmailDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Email.DeleteEmailDomainError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.deleteEmailDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Email.DeleteEmailDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmailDomain(request: Email.GetEmailDomainRequest, options?: RequestOptions): ApiPromise&lt;EmailDomain, Email.GetEmailDomainError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.getEmailDomain({ id: "some example string" });
  // TODO: Handle 'response' of type EmailDomain
} catch (err) {
  // TODO: Handle 'err' of type Email.GetEmailDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.getEmailDomain({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailDomain
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
| <code>id</code> | <code>string</code> | - |
| <code>refresh?</code> | <code>string</code> | When set, the status and the records' statuses are re-read from the sending infrastructure first, and the answer carries `newDomainLimit`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.getEmailDomain(request)`

- **OnSuccess**: <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: throws <code>[Email.GetEmailDomainError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.getEmailDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailDomain, Email.GetEmailDomainError&gt;</code>, with `result.value` of type <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmailMessage(request: Email.GetEmailMessageRequest, options?: RequestOptions): ApiPromise&lt;EmailMessage, Email.GetEmailMessageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.getEmailMessage({ id: "cmh2x9d4k0003s8w2q1f7a2bc" });
  // TODO: Handle 'response' of type EmailMessage
} catch (err) {
  // TODO: Handle 'err' of type Email.GetEmailMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.getEmailMessage({ id: "cmh2x9d4k0003s8w2q1f7a2bc" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailMessage
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.getEmailMessage(request)`

- **OnSuccess**: <code>[EmailMessage](src/models/email-message.ts)</code>
- **OnError**: throws <code>[Email.GetEmailMessageError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.getEmailMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailMessage, Email.GetEmailMessageError&gt;</code>, with `result.value` of type <code>[EmailMessage](src/models/email-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEmailDomains(options?: RequestOptions): ApiPromise&lt;ApiV1EmailDomainsResponse, Email.ListEmailDomainsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.listEmailDomains();
  // TODO: Handle 'response' of type ApiV1EmailDomainsResponse
} catch (err) {
  // TODO: Handle 'err' of type Email.ListEmailDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.listEmailDomains().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EmailDomainsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.listEmailDomains()`

- **OnSuccess**: <code>[ApiV1EmailDomainsResponse](src/models/api-v1-email-domains-response.ts)</code>
- **OnError**: throws <code>[Email.ListEmailDomainsError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.listEmailDomains().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EmailDomainsResponse, Email.ListEmailDomainsError&gt;</code>, with `result.value` of type <code>[ApiV1EmailDomainsResponse](src/models/api-v1-email-domains-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEmailMessages(request?: Email.ListEmailMessagesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1EmailMessagesResponse, Email.ListEmailMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first, keyset-paginated. Test keys list test messages only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.listEmailMessages();
  // TODO: Handle 'response' of type ApiV1EmailMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Email.ListEmailMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.listEmailMessages().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EmailMessagesResponse
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
| <code>status?</code> | <code>[Status3](src/models/status3.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>cursor?</code> | <code>string</code> | The `nextCursor` of the previous page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.listEmailMessages(request)`

- **OnSuccess**: <code>[ApiV1EmailMessagesResponse](src/models/api-v1-email-messages-response.ts)</code>
- **OnError**: throws <code>[Email.ListEmailMessagesError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.listEmailMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EmailMessagesResponse, Email.ListEmailMessagesError&gt;</code>, with `result.value` of type <code>[ApiV1EmailMessagesResponse](src/models/api-v1-email-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendEmail(request: Email.SendEmailRequestParams, options?: RequestOptions): ApiPromise&lt;EmailMessage, Email.SendEmailError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.sendEmail({
    body: {
      from: "Acme Billing <billing@mail.acme.com>",
      to: ["dana@example.com"],
      subject: "Your October invoice",
      html: "<p>Hi Dana, your invoice for October is attached.</p>",
      text: "Hi Dana, your invoice for October is attached.",
      replyTo: "accounts@mail.acme.com",
      headers: { "X-Acme-Invoice": "inv_2041" },
      attachments: [
        { filename: "invoice-2041.pdf", content: "JVBERi0xLjQK...", contentType: "application/pdf" },
      ],
      tags: [{ name: "campaign", value: "invoices" }],
      statusWebhookUrl: "https://yourapp.example.com/email/events",
      metadata: {},
    },
  });
  // TODO: Handle 'response' of type EmailMessage
} catch (err) {
  // TODO: Handle 'err' of type Email.SendEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email
  .sendEmail({
    body: {
      from: "Acme Billing <billing@mail.acme.com>",
      to: ["dana@example.com"],
      subject: "Your October invoice",
      html: "<p>Hi Dana, your invoice for October is attached.</p>",
      text: "Hi Dana, your invoice for October is attached.",
      replyTo: "accounts@mail.acme.com",
      headers: { "X-Acme-Invoice": "inv_2041" },
      attachments: [
        { filename: "invoice-2041.pdf", content: "JVBERi0xLjQK...", contentType: "application/pdf" },
      ],
      tags: [{ name: "campaign", value: "invoices" }],
      statusWebhookUrl: "https://yourapp.example.com/email/events",
      metadata: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailMessage
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
| <code>xIdempotencyKey?</code> | <code>string</code> | A UUID. Replaying the same key returns the original result rather than acting twice. |
| <code>body</code> | <code>[SendEmailRequest](src/models/send-email-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.sendEmail(request)`

- **OnSuccess**: <code>[EmailMessage](src/models/email-message.ts)</code>
- **OnError**: throws <code>[Email.SendEmailError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.sendEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailMessage, Email.SendEmailError&gt;</code>, with `result.value` of type <code>[EmailMessage](src/models/email-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyEmailDomain(request: Email.VerifyEmailDomainRequest, options?: RequestOptions): ApiPromise&lt;EmailDomain, Email.VerifyEmailDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A real lookup against public DNS. Answers the domain with its new status; a failed check carries `verificationError`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.email.verifyEmailDomain({ id: "some example string" });
  // TODO: Handle 'response' of type EmailDomain
} catch (err) {
  // TODO: Handle 'err' of type Email.VerifyEmailDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.email.verifyEmailDomain({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmailDomain
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.email.verifyEmailDomain(request)`

- **OnSuccess**: <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: throws <code>[Email.VerifyEmailDomainError](src/resources/email.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.email.verifyEmailDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmailDomain, Email.VerifyEmailDomainError&gt;</code>, with `result.value` of type <code>[EmailDomain](src/models/email-domain.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Faxes

> Source: [Faxes](src/resources/faxes.ts)

<details>
<summary><code>deleteFax(request: Faxes.DeleteFaxRequest, options?: RequestOptions): ApiPromise&lt;undefined, Faxes.DeleteFaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409 `job_in_progress`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faxes.deleteFax({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Faxes.DeleteFaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxes.deleteFax({ id: "some example string" }).asApiResult();
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxes.deleteFax(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Faxes.DeleteFaxError](src/resources/faxes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxes.deleteFax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Faxes.DeleteFaxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadFax(request: Faxes.DownloadFaxRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Faxes.DownloadFaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxes.downloadFax({ id: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Faxes.DownloadFaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxes.downloadFax({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>id</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "pdf" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxes.downloadFax(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Faxes.DownloadFaxError](src/resources/faxes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxes.downloadFax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Faxes.DownloadFaxError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFax(request: Faxes.GetFaxRequest, options?: RequestOptions): ApiPromise&lt;Fax, Faxes.GetFaxError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxes.getFax({ id: "cmfx7k2q10001s8w2b1d9e3fa" });
  // TODO: Handle 'response' of type Fax
} catch (err) {
  // TODO: Handle 'err' of type Faxes.GetFaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxes.getFax({ id: "cmfx7k2q10001s8w2b1d9e3fa" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Fax
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxes.getFax(request)`

- **OnSuccess**: <code>[Fax](src/models/fax.ts)</code>
- **OnError**: throws <code>[Faxes.GetFaxError](src/resources/faxes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxes.getFax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Fax, Faxes.GetFaxError&gt;</code>, with `result.value` of type <code>[Fax](src/models/fax.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFaxes(request?: Faxes.ListFaxesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FaxesResponse, Faxes.ListFaxesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first, keyset-paginated. Test keys list test faxes only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxes.listFaxes();
  // TODO: Handle 'response' of type ApiV1FaxesResponse
} catch (err) {
  // TODO: Handle 'err' of type Faxes.ListFaxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxes.listFaxes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FaxesResponse
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
| <code>direction?</code> | <code>[Direction](src/models/direction.ts)</code> | - |
| <code>status?</code> | <code>[StatusCallnodeIoFaxesApi](src/models/status-callnode-io-faxes-api.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>cursor?</code> | <code>string</code> | The `nextCursor` of the previous page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxes.listFaxes(request)`

- **OnSuccess**: <code>[ApiV1FaxesResponse](src/models/api-v1-faxes-response.ts)</code>
- **OnError**: throws <code>[Faxes.ListFaxesError](src/resources/faxes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxes.listFaxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FaxesResponse, Faxes.ListFaxesError&gt;</code>, with `result.value` of type <code>[ApiV1FaxesResponse](src/models/api-v1-faxes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendFax(request: Faxes.SendFaxRequestParams, options?: RequestOptions): ApiPromise&lt;Fax, Faxes.SendFaxError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.faxes.sendFax({
    body: {
      to: "+14155550142",
      from: "+15145550199",
      document: "data:application/pdf;base64,JVBERi0xLjQKJcfs...",
      filename: "signed-agreement.pdf",
      resolution: Resolution.Fine,
      header: "Acme Legal",
      statusWebhookUrl: "https://yourcrm.example.com/fax/events",
      metadata: {},
    },
  });
  // TODO: Handle 'response' of type Fax
} catch (err) {
  // TODO: Handle 'err' of type Faxes.SendFaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faxes
  .sendFax({
    body: {
      to: "+14155550142",
      from: "+15145550199",
      document: "data:application/pdf;base64,JVBERi0xLjQKJcfs...",
      filename: "signed-agreement.pdf",
      resolution: Resolution.Fine,
      header: "Acme Legal",
      statusWebhookUrl: "https://yourcrm.example.com/fax/events",
      metadata: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Fax
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
| <code>xIdempotencyKey?</code> | <code>string</code> | A UUID. Replaying the same key returns the original result rather than acting twice. |
| <code>body</code> | <code>[SendFaxRequest](src/models/send-fax-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faxes.sendFax(request)`

- **OnSuccess**: <code>[Fax](src/models/fax.ts)</code>
- **OnError**: throws <code>[Faxes.SendFaxError](src/resources/faxes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faxes.sendFax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Fax, Faxes.SendFaxError&gt;</code>, with `result.value` of type <code>[Fax](src/models/fax.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MessagingApi

> Source: [MessagingApi](src/resources/messaging-api.ts)

<details>
<summary><code>getMessage(request: MessagingApi.GetMessageRequest, options?: RequestOptions): ApiPromise&lt;Message, MessagingApi.GetMessageError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messagingApi.getMessage({ id: "cmpt5ec0w00022hb2etd67258" });
  // TODO: Handle 'response' of type Message
} catch (err) {
  // TODO: Handle 'err' of type MessagingApi.GetMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messagingApi.getMessage({ id: "cmpt5ec0w00022hb2etd67258" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Message
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messagingApi.getMessage(request)`

- **OnSuccess**: <code>[Message](src/models/message.ts)</code>
- **OnError**: throws <code>[MessagingApi.GetMessageError](src/resources/messaging-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messagingApi.getMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Message, MessagingApi.GetMessageError&gt;</code>, with `result.value` of type <code>[Message](src/models/message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendMessage(request: MessagingApi.SendMessageRequestParams, options?: RequestOptions): ApiPromise&lt;SendMessageResponse, MessagingApi.SendMessageError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messagingApi.sendMessage({
    body: {
      to: "+16135551234",
      from: "+15145550199",
      body: "Your demo is confirmed for Wednesday at 10am.",
      media: [],
      statusWebhookUrl: "https://yourcrm.example.com/sms/events",
      tcpaOverride: false,
      metadata: {},
    },
  });
  // TODO: Handle 'response' of type SendMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type MessagingApi.SendMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messagingApi
  .sendMessage({
    body: {
      to: "+16135551234",
      from: "+15145550199",
      body: "Your demo is confirmed for Wednesday at 10am.",
      media: [],
      statusWebhookUrl: "https://yourcrm.example.com/sms/events",
      tcpaOverride: false,
      metadata: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SendMessageResponse
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
| <code>xIdempotencyKey?</code> | <code>string</code> | A UUID. Replaying the same key returns the original result rather than acting twice. |
| <code>body</code> | <code>[SendMessageRequest](src/models/send-message-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messagingApi.sendMessage(request)`

- **OnSuccess**: <code>[SendMessageResponse](src/models/send-message-response.ts)</code>
- **OnError**: throws <code>[MessagingApi.SendMessageError](src/resources/messaging-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messagingApi.sendMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SendMessageResponse, MessagingApi.SendMessageError&gt;</code>, with `result.value` of type <code>[SendMessageResponse](src/models/send-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OutboundCalls

> Source: [OutboundCalls](src/resources/outbound-calls.ts)

<details>
<summary><code>cancelCall(request: OutboundCalls.CancelCallRequest, options?: RequestOptions): ApiPromise&lt;ApiV1OutboundCallsResponse1, OutboundCalls.CancelCallError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCalls.cancelCall({
    callId: "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a",
  });
  // TODO: Handle 'response' of type ApiV1OutboundCallsResponse1
} catch (err) {
  // TODO: Handle 'err' of type OutboundCalls.CancelCallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCalls
  .cancelCall({ callId: "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OutboundCallsResponse1
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
| <code>callId</code> | <code>string</code> | The `callId` returned by originate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCalls.cancelCall(request)`

- **OnSuccess**: <code>[ApiV1OutboundCallsResponse1](src/models/api-v1-outbound-calls-response1.ts)</code>
- **OnError**: throws <code>[OutboundCalls.CancelCallError](src/resources/outbound-calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCalls.cancelCall(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OutboundCallsResponse1, OutboundCalls.CancelCallError&gt;</code>, with `result.value` of type <code>[ApiV1OutboundCallsResponse1](src/models/api-v1-outbound-calls-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCall(request: OutboundCalls.GetCallRequest, options?: RequestOptions): ApiPromise&lt;Call, OutboundCalls.GetCallError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCalls.getCall({
    callId: "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a",
  });
  // TODO: Handle 'response' of type Call
} catch (err) {
  // TODO: Handle 'err' of type OutboundCalls.GetCallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCalls
  .getCall({ callId: "cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Call
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
| <code>callId</code> | <code>string</code> | The `callId` returned by originate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCalls.getCall(request)`

- **OnSuccess**: <code>[Call](src/models/call.ts)</code>
- **OnError**: throws <code>[OutboundCalls.GetCallError](src/resources/outbound-calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCalls.getCall(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Call, OutboundCalls.GetCallError&gt;</code>, with `result.value` of type <code>[Call](src/models/call.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCalls(request?: OutboundCalls.ListCallsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1OutboundCallsResponse, OutboundCalls.ListCallsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your outbound calls, newest first, with cursor pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCalls.listCalls();
  // TODO: Handle 'response' of type ApiV1OutboundCallsResponse
} catch (err) {
  // TODO: Handle 'err' of type OutboundCalls.ListCallsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCalls.listCalls().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OutboundCallsResponse
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
| <code>status?</code> | <code>[CallStatus](src/models/call-status.ts)</code> | Filter by status. Repeat the parameter to filter on several. |
| <code>limit?</code> | <code>number</code> | Page size. Defaults to 50, capped at 200.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | Opaque cursor from a previous response's `nextCursor`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCalls.listCalls(request)`

- **OnSuccess**: <code>[ApiV1OutboundCallsResponse](src/models/api-v1-outbound-calls-response.ts)</code>
- **OnError**: throws <code>[OutboundCalls.ListCallsError](src/resources/outbound-calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCalls.listCalls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OutboundCallsResponse, OutboundCalls.ListCallsError&gt;</code>, with `result.value` of type <code>[ApiV1OutboundCallsResponse](src/models/api-v1-outbound-calls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>originateCall(request: OutboundCalls.OriginateCallRequest, options?: RequestOptions): ApiPromise&lt;OriginateResponse, OutboundCalls.OriginateCallError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCalls.originateCall({
    body: {
      to: "+16135551234",
      from: "+15145550199",
      webhookUrl: "https://yourcrm.example.com/voice/n8n",
      webhookAuth: {
        type: TypeCallnodeIoOutboundCallsApi.Header,
        headerName: "X-API-Key",
        value: "your-n8n-secret",
      },
      metadata: {},
      statusWebhookUrl: "https://yourcrm.example.com/voice/events",
      maxDurationSecs: 600,
      tcpaOverride: false,
    },
  });
  // TODO: Handle 'response' of type OriginateResponse
} catch (err) {
  // TODO: Handle 'err' of type OutboundCalls.OriginateCallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCalls
  .originateCall({
    body: {
      to: "+16135551234",
      from: "+15145550199",
      webhookUrl: "https://yourcrm.example.com/voice/n8n",
      webhookAuth: {
        type: TypeCallnodeIoOutboundCallsApi.Header,
        headerName: "X-API-Key",
        value: "your-n8n-secret",
      },
      metadata: {},
      statusWebhookUrl: "https://yourcrm.example.com/voice/events",
      maxDurationSecs: 600,
      tcpaOverride: false,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OriginateResponse
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
| <code>xIdempotencyKey?</code> | <code>string</code> | A UUID. Replaying the same key returns the original result rather than acting twice. |
| <code>body</code> | <code>[OriginateRequest](src/models/originate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCalls.originateCall(request)`

- **OnSuccess**: <code>[OriginateResponse](src/models/originate-response.ts)</code>
- **OnError**: throws <code>[OutboundCalls.OriginateCallError](src/resources/outbound-calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCalls.originateCall(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OriginateResponse, OutboundCalls.OriginateCallError&gt;</code>, with `result.value` of type <code>[OriginateResponse](src/models/originate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferCall(request: OutboundCalls.TransferCallRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CallsTransferResponse, OutboundCalls.TransferCallError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.outboundCalls.transferCall({
    callId: "some example string",
    body: { destination: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1CallsTransferResponse
} catch (err) {
  // TODO: Handle 'err' of type OutboundCalls.TransferCallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.outboundCalls
  .transferCall({ callId: "some example string", body: { destination: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CallsTransferResponse
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
| <code>callId</code> | <code>string</code> | The **caller's** channel id — the `callId` CallNode sends you in the<br>webhook/stream query string for that call. On a bridged call this is<br>the A-leg, not the leg your own endpoint sees. |
| <code>body</code> | <code>[ApiV1CallsTransferRequest](src/models/api-v1-calls-transfer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.outboundCalls.transferCall(request)`

- **OnSuccess**: <code>[ApiV1CallsTransferResponse](src/models/api-v1-calls-transfer-response.ts)</code>
- **OnError**: throws <code>[OutboundCalls.TransferCallError](src/resources/outbound-calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.outboundCalls.transferCall(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CallsTransferResponse, OutboundCalls.TransferCallError&gt;</code>, with `result.value` of type <code>[ApiV1CallsTransferResponse](src/models/api-v1-calls-transfer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PhoneNumbers

> Source: [PhoneNumbers](src/resources/phone-numbers.ts)

<details>
<summary><code>getNumber(request: PhoneNumbers.GetNumberRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NumbersResponse1, PhoneNumbers.GetNumberError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.getNumber({ id: "cmpxeh9o60002pp4h7oznictb" });
  // TODO: Handle 'response' of type ApiV1NumbersResponse1
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.GetNumberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers.getNumber({ id: "cmpxeh9o60002pp4h7oznictb" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NumbersResponse1
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
| <code>id</code> | <code>string</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.getNumber(request)`

- **OnSuccess**: <code>[ApiV1NumbersResponse1](src/models/api-v1-numbers-response1.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.GetNumberError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.getNumber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NumbersResponse1, PhoneNumbers.GetNumberError&gt;</code>, with `result.value` of type <code>[ApiV1NumbersResponse1](src/models/api-v1-numbers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listNumbers(request?: PhoneNumbers.ListNumbersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NumbersResponse, PhoneNumbers.ListNumbersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Your numbers, newest first. Every filter is applied server-side and they combine (AND).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.listNumbers();
  // TODO: Handle 'response' of type ApiV1NumbersResponse
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.ListNumbersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers.listNumbers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NumbersResponse
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
| <code>status?</code> | <code>string</code> | Filter by status, e.g. `active`. |
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | - |
| <code>purchaseSource?</code> | <code>[PurchaseSource1](src/models/purchase-source1.ts)</code> | Numbers bought via the dashboard (`web`) or this API (`api`). |
| <code>tag?</code> | <code>string</code> | Numbers carrying this exact tag (as stored; up to 24 characters). |
| <code>q?</code> | <code>string</code> | Substring match on the number's digits, the friendly name (case-insensitive), or a tag. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.listNumbers(request)`

- **OnSuccess**: <code>[ApiV1NumbersResponse](src/models/api-v1-numbers-response.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.ListNumbersError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.listNumbers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NumbersResponse, PhoneNumbers.ListNumbersError&gt;</code>, with `result.value` of type <code>[ApiV1NumbersResponse](src/models/api-v1-numbers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchaseNumber(request: PhoneNumbers.PurchaseNumberRequestParams, options?: RequestOptions): ApiPromise&lt;PurchaseNumberResponse, PhoneNumbers.PurchaseNumberError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.purchaseNumber({
    body: {
      phoneNumber: "+18282129522",
      friendlyName: "Support line",
      voice: {
        webhookUrl: "https://yourcrm.example.com/voice/n8n",
        webhookAuth: { type: Type2.Header, headerName: "X-API-Key", value: "your-n8n-secret" },
      },
      messaging: {
        webhookUrl: "https://yourcrm.example.com/sms/n8n",
        webhookAuth: { type: Type2.Bearer, value: "your-token" },
        enabled: true,
      },
    },
  });
  // TODO: Handle 'response' of type PurchaseNumberResponse
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.PurchaseNumberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers
  .purchaseNumber({
    body: {
      phoneNumber: "+18282129522",
      friendlyName: "Support line",
      voice: {
        webhookUrl: "https://yourcrm.example.com/voice/n8n",
        webhookAuth: { type: Type2.Header, headerName: "X-API-Key", value: "your-n8n-secret" },
      },
      messaging: {
        webhookUrl: "https://yourcrm.example.com/sms/n8n",
        webhookAuth: { type: Type2.Bearer, value: "your-token" },
        enabled: true,
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PurchaseNumberResponse
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
| <code>body</code> | <code>[PurchaseNumberRequest](src/models/purchase-number-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.purchaseNumber(request)`

- **OnSuccess**: <code>[PurchaseNumberResponse](src/models/purchase-number-response.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.PurchaseNumberError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.purchaseNumber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PurchaseNumberResponse, PhoneNumbers.PurchaseNumberError&gt;</code>, with `result.value` of type <code>[PurchaseNumberResponse](src/models/purchase-number-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>releaseNumber(request: PhoneNumbers.ReleaseNumberRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NumbersResponse3, PhoneNumbers.ReleaseNumberError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.releaseNumber({ id: "cmpxeh9o60002pp4h7oznictb" });
  // TODO: Handle 'response' of type ApiV1NumbersResponse3
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.ReleaseNumberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers.releaseNumber({ id: "cmpxeh9o60002pp4h7oznictb" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NumbersResponse3
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
| <code>id</code> | <code>string</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.releaseNumber(request)`

- **OnSuccess**: <code>[ApiV1NumbersResponse3](src/models/api-v1-numbers-response3.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.ReleaseNumberError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.releaseNumber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NumbersResponse3, PhoneNumbers.ReleaseNumberError&gt;</code>, with `result.value` of type <code>[ApiV1NumbersResponse3](src/models/api-v1-numbers-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAvailableNumbers(request?: PhoneNumbers.SearchAvailableNumbersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NumbersAvailableResponse, PhoneNumbers.SearchAvailableNumbersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.searchAvailableNumbers({ areaCode: "828" });
  // TODO: Handle 'response' of type ApiV1NumbersAvailableResponse
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.SearchAvailableNumbersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers.searchAvailableNumbers({ areaCode: "828" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NumbersAvailableResponse
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
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | -<br>**Default**: "local" |
| <code>areaCode?</code> | <code>string</code> | 3-digit area code. Required when `type` is `local`. |
| <code>prefix?</code> | <code>[Prefix](src/models/prefix.ts)</code> | Toll-free prefix filter. 800 and 822 are usually exhausted. |
| <code>vanity?</code> | <code>string</code> | Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over `prefix`. |
| <code>quantity?</code> | <code>number</code> | How many candidates to return.<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.searchAvailableNumbers(request)`

- **OnSuccess**: <code>[ApiV1NumbersAvailableResponse](src/models/api-v1-numbers-available-response.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.SearchAvailableNumbersError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.searchAvailableNumbers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NumbersAvailableResponse, PhoneNumbers.SearchAvailableNumbersError&gt;</code>, with `result.value` of type <code>[ApiV1NumbersAvailableResponse](src/models/api-v1-numbers-available-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateNumber(request: PhoneNumbers.UpdateNumberRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NumbersResponse1, PhoneNumbers.UpdateNumberError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.phoneNumbers.updateNumber({
    id: "cmpxeh9o60002pp4h7oznictb",
    body: {
      voice: {
        webhookUrl: "https://yourcrm.example.com/voice/n8n",
        webhookAuth: { type: Type2.Header, headerName: "X-API-Key", value: "your-n8n-secret" },
      },
    },
  });
  // TODO: Handle 'response' of type ApiV1NumbersResponse1
} catch (err) {
  // TODO: Handle 'err' of type PhoneNumbers.UpdateNumberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.phoneNumbers
  .updateNumber({
    id: "cmpxeh9o60002pp4h7oznictb",
    body: {
      voice: {
        webhookUrl: "https://yourcrm.example.com/voice/n8n",
        webhookAuth: { type: Type2.Header, headerName: "X-API-Key", value: "your-n8n-secret" },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NumbersResponse1
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
| <code>id</code> | <code>string</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |
| <code>body</code> | <code>[ApiV1NumbersRequest](src/models/api-v1-numbers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.phoneNumbers.updateNumber(request)`

- **OnSuccess**: <code>[ApiV1NumbersResponse1](src/models/api-v1-numbers-response1.ts)</code>
- **OnError**: throws <code>[PhoneNumbers.UpdateNumberError](src/resources/phone-numbers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.phoneNumbers.updateNumber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NumbersResponse1, PhoneNumbers.UpdateNumberError&gt;</code>, with `result.value` of type <code>[ApiV1NumbersResponse1](src/models/api-v1-numbers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SipTrunks

> Source: [SipTrunks](src/resources/sip-trunks.ts)

<details>
<summary><code>createSipTrunk(request: SipTrunks.CreateSipTrunkRequest, options?: RequestOptions): ApiPromise&lt;SipTrunk, SipTrunks.CreateSipTrunkError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.createSipTrunk({
    body: {
      name: "HQ PBX",
      allowedIps: ["203.0.113.10", "203.0.113.11"],
      ingressEnabled: true,
      defaultPhoneNumberId: "cmpxeh9o60002pp4h7oznictb",
    },
  });
  // TODO: Handle 'response' of type SipTrunk
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.CreateSipTrunkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks
  .createSipTrunk({
    body: {
      name: "HQ PBX",
      allowedIps: ["203.0.113.10", "203.0.113.11"],
      ingressEnabled: true,
      defaultPhoneNumberId: "cmpxeh9o60002pp4h7oznictb",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SipTrunk
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
| <code>body</code> | <code>[CreateTrunkRequest](src/models/create-trunk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.createSipTrunk(request)`

- **OnSuccess**: <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: throws <code>[SipTrunks.CreateSipTrunkError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.createSipTrunk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SipTrunk, SipTrunks.CreateSipTrunkError&gt;</code>, with `result.value` of type <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSipTrunk(request: SipTrunks.DeleteSipTrunkRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TrunksResponse1, SipTrunks.DeleteSipTrunkError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.deleteSipTrunk({ id: "cmb1xk2p40001abcd1234wxyz" });
  // TODO: Handle 'response' of type ApiV1TrunksResponse1
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.DeleteSipTrunkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks.deleteSipTrunk({ id: "cmb1xk2p40001abcd1234wxyz" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TrunksResponse1
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
| <code>id</code> | <code>string</code> | The trunk's `id`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.deleteSipTrunk(request)`

- **OnSuccess**: <code>[ApiV1TrunksResponse1](src/models/api-v1-trunks-response1.ts)</code>
- **OnError**: throws <code>[SipTrunks.DeleteSipTrunkError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.deleteSipTrunk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TrunksResponse1, SipTrunks.DeleteSipTrunkError&gt;</code>, with `result.value` of type <code>[ApiV1TrunksResponse1](src/models/api-v1-trunks-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSipTrunk(request: SipTrunks.GetSipTrunkRequest, options?: RequestOptions): ApiPromise&lt;SipTrunk, SipTrunks.GetSipTrunkError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.getSipTrunk({ id: "cmb1xk2p40001abcd1234wxyz" });
  // TODO: Handle 'response' of type SipTrunk
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.GetSipTrunkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks.getSipTrunk({ id: "cmb1xk2p40001abcd1234wxyz" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SipTrunk
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
| <code>id</code> | <code>string</code> | The trunk's `id`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.getSipTrunk(request)`

- **OnSuccess**: <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: throws <code>[SipTrunks.GetSipTrunkError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.getSipTrunk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SipTrunk, SipTrunks.GetSipTrunkError&gt;</code>, with `result.value` of type <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSipTrunks(options?: RequestOptions): ApiPromise&lt;ApiV1TrunksResponse, SipTrunks.ListSipTrunksError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.listSipTrunks();
  // TODO: Handle 'response' of type ApiV1TrunksResponse
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.ListSipTrunksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks.listSipTrunks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TrunksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.listSipTrunks()`

- **OnSuccess**: <code>[ApiV1TrunksResponse](src/models/api-v1-trunks-response.ts)</code>
- **OnError**: throws <code>[SipTrunks.ListSipTrunksError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.listSipTrunks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TrunksResponse, SipTrunks.ListSipTrunksError&gt;</code>, with `result.value` of type <code>[ApiV1TrunksResponse](src/models/api-v1-trunks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rotateSipTrunkCredentials(request: SipTrunks.RotateSipTrunkCredentialsRequest, options?: RequestOptions): ApiPromise&lt;SipTrunk, SipTrunks.RotateSipTrunkCredentialsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.rotateSipTrunkCredentials({ id: "some example string" });
  // TODO: Handle 'response' of type SipTrunk
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.RotateSipTrunkCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks.rotateSipTrunkCredentials({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SipTrunk
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
| <code>id</code> | <code>string</code> | Trunk id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.rotateSipTrunkCredentials(request)`

- **OnSuccess**: <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: throws <code>[SipTrunks.RotateSipTrunkCredentialsError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.rotateSipTrunkCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SipTrunk, SipTrunks.RotateSipTrunkCredentialsError&gt;</code>, with `result.value` of type <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSipTrunk(request: SipTrunks.UpdateSipTrunkRequest, options?: RequestOptions): ApiPromise&lt;SipTrunk, SipTrunks.UpdateSipTrunkError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sipTrunks.updateSipTrunk({
    id: "cmb1xk2p40001abcd1234wxyz",
    body: { status: StatusCallnodeIoSipTrunksApi.Disabled, allowedIps: ["203.0.113.10"] },
  });
  // TODO: Handle 'response' of type SipTrunk
} catch (err) {
  // TODO: Handle 'err' of type SipTrunks.UpdateSipTrunkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sipTrunks
  .updateSipTrunk({
    id: "cmb1xk2p40001abcd1234wxyz",
    body: { status: StatusCallnodeIoSipTrunksApi.Disabled, allowedIps: ["203.0.113.10"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SipTrunk
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
| <code>id</code> | <code>string</code> | The trunk's `id`. |
| <code>body</code> | <code>[UpdateTrunkRequest](src/models/update-trunk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sipTrunks.updateSipTrunk(request)`

- **OnSuccess**: <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: throws <code>[SipTrunks.UpdateSipTrunkError](src/resources/sip-trunks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sipTrunks.updateSipTrunk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SipTrunk, SipTrunks.UpdateSipTrunkError&gt;</code>, with `result.value` of type <code>[SipTrunk](src/models/sip-trunk.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Wholesale

> Source: [Wholesale](src/resources/wholesale.ts)

<details>
<summary><code>listWholesaleAreas(request?: Wholesale.ListWholesaleAreasRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WholesaleAreasResponse, Wholesale.ListWholesaleAreasError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wholesale.listWholesaleAreas();
  // TODO: Handle 'response' of type ApiV1WholesaleAreasResponse
} catch (err) {
  // TODO: Handle 'err' of type Wholesale.ListWholesaleAreasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wholesale.listWholesaleAreas().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WholesaleAreasResponse
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
| <code>countryId?</code> | <code>string</code> | - |
| <code>stateId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wholesale.listWholesaleAreas(request)`

- **OnSuccess**: <code>[ApiV1WholesaleAreasResponse](src/models/api-v1-wholesale-areas-response.ts)</code>
- **OnError**: throws <code>[Wholesale.ListWholesaleAreasError](src/resources/wholesale.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wholesale.listWholesaleAreas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WholesaleAreasResponse, Wholesale.ListWholesaleAreasError&gt;</code>, with `result.value` of type <code>[ApiV1WholesaleAreasResponse](src/models/api-v1-wholesale-areas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWholesaleCountries(options?: RequestOptions): ApiPromise&lt;ApiV1WholesaleCountriesResponse, Wholesale.ListWholesaleCountriesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wholesale.listWholesaleCountries();
  // TODO: Handle 'response' of type ApiV1WholesaleCountriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Wholesale.ListWholesaleCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wholesale.listWholesaleCountries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WholesaleCountriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wholesale.listWholesaleCountries()`

- **OnSuccess**: <code>[ApiV1WholesaleCountriesResponse](src/models/api-v1-wholesale-countries-response.ts)</code>
- **OnError**: throws <code>[Wholesale.ListWholesaleCountriesError](src/resources/wholesale.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wholesale.listWholesaleCountries().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WholesaleCountriesResponse, Wholesale.ListWholesaleCountriesError&gt;</code>, with `result.value` of type <code>[ApiV1WholesaleCountriesResponse](src/models/api-v1-wholesale-countries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWholesaleStates(request?: Wholesale.ListWholesaleStatesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WholesaleStatesResponse, Wholesale.ListWholesaleStatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Regions for a country. Many countries have none — an empty list means
go straight to areas with just the `countryId`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wholesale.listWholesaleStates();
  // TODO: Handle 'response' of type ApiV1WholesaleStatesResponse
} catch (err) {
  // TODO: Handle 'err' of type Wholesale.ListWholesaleStatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wholesale.listWholesaleStates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WholesaleStatesResponse
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
| <code>countryId?</code> | <code>string</code> | From `/wholesale/countries`. Defaults to the US when omitted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wholesale.listWholesaleStates(request)`

- **OnSuccess**: <code>[ApiV1WholesaleStatesResponse](src/models/api-v1-wholesale-states-response.ts)</code>
- **OnError**: throws <code>[Wholesale.ListWholesaleStatesError](src/resources/wholesale.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wholesale.listWholesaleStates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WholesaleStatesResponse, Wholesale.ListWholesaleStatesError&gt;</code>, with `result.value` of type <code>[ApiV1WholesaleStatesResponse](src/models/api-v1-wholesale-states-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>orderWholesaleNumber(request: Wholesale.OrderWholesaleNumberRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WholesaleNumbersResponse, Wholesale.OrderWholesaleNumberError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wholesale.orderWholesaleNumber({
    body: { areaId: "some example string", deliverTo: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1WholesaleNumbersResponse
} catch (err) {
  // TODO: Handle 'err' of type Wholesale.OrderWholesaleNumberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wholesale
  .orderWholesaleNumber({ body: { areaId: "some example string", deliverTo: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WholesaleNumbersResponse
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
| <code>xIdempotencyKey?</code> | <code>string</code> | A UUID. Replaying the same key returns the original result rather than acting twice. |
| <code>body</code> | <code>[ApiV1WholesaleNumbersRequest](src/models/api-v1-wholesale-numbers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wholesale.orderWholesaleNumber(request)`

- **OnSuccess**: <code>[ApiV1WholesaleNumbersResponse](src/models/api-v1-wholesale-numbers-response.ts)</code>
- **OnError**: throws <code>[Wholesale.OrderWholesaleNumberError](src/resources/wholesale.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wholesale.orderWholesaleNumber(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WholesaleNumbersResponse, Wholesale.OrderWholesaleNumberError&gt;</code>, with `result.value` of type <code>[ApiV1WholesaleNumbersResponse](src/models/api-v1-wholesale-numbers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWholesaleDelivery(request: Wholesale.UpdateWholesaleDeliveryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1WholesaleNumbersDeliveryResponse, Wholesale.UpdateWholesaleDeliveryError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wholesale.updateWholesaleDelivery({
    id: "some example string",
    body: { deliverTo: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1WholesaleNumbersDeliveryResponse
} catch (err) {
  // TODO: Handle 'err' of type Wholesale.UpdateWholesaleDeliveryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wholesale
  .updateWholesaleDelivery({ id: "some example string", body: { deliverTo: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1WholesaleNumbersDeliveryResponse
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
| <code>id</code> | <code>string</code> | The number's id (from the order response or your numbers list). |
| <code>body</code> | <code>[ApiV1WholesaleNumbersDeliveryRequest](src/models/api-v1-wholesale-numbers-delivery-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wholesale.updateWholesaleDelivery(request)`

- **OnSuccess**: <code>[ApiV1WholesaleNumbersDeliveryResponse](src/models/api-v1-wholesale-numbers-delivery-response.ts)</code>
- **OnError**: throws <code>[Wholesale.UpdateWholesaleDeliveryError](src/resources/wholesale.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wholesale.updateWholesaleDelivery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1WholesaleNumbersDeliveryResponse, Wholesale.UpdateWholesaleDeliveryError&gt;</code>, with `result.value` of type <code>[ApiV1WholesaleNumbersDeliveryResponse](src/models/api-v1-wholesale-numbers-delivery-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CallNodeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

