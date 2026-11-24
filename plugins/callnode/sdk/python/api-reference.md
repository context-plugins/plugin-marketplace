# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CallNodeClient](call_node/client.py)

## CallRecords

> Source: [CallRecords](call_node/apis/call_records.py)

<details>
<summary><code>def get_call_record(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CallsResponse1</code></summary>

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

**Sync**

```python
try:
    response = client.call_records.get_call_record("some example string")
    # TODO: Handle 'response' of type ApiV1CallsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCallRecordErrorBody
```

**Async**

```python
try:
    response = await async_client.call_records.get_call_record("some example string")
    # TODO: Handle 'response' of type ApiV1CallsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCallRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>call_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsResponse1](call_node/models/api_v1_calls_response1.py)</code> -- The call record.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetCallRecordErrorBody](call_node/errors/get_call_record_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_call_records(*, number: str | None = None, direction: DirectionOrStr | None = None, status: StatusOrStr | None = None, since: RFC3339DateTime | None = None, until: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiV1CallsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.call_records.list_call_records()
    # TODO: Handle 'response' of type ApiV1CallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCallRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.call_records.list_call_records()
    # TODO: Handle 'response' of type ApiV1CallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCallRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>str \| None</code> | Limit to one of your numbers — E.164 or the number's id.<br>**Default**: <code>None</code> |
| <code>direction</code> | <code>[DirectionOrStr](call_node/models/enums/direction.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusOrStr](call_node/models/enums/status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>RFC3339DateTime \| None</code> | Only calls starting at or after this instant.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>RFC3339DateTime \| None</code> | Only calls starting at or before this instant.<br>**Default**: <code>None</code> |
| <code>before</code> | <code>RFC3339DateTime \| None</code> | Keyset cursor — pass the previous page's `nextBefore`.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsResponse](call_node/models/api_v1_calls_response.py)</code> -- Call records, newest first.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListCallRecordsErrorBody](call_node/errors/list_call_records_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Email

> Source: [Email](call_node/apis/email.py)

<details>
<summary><code>def create_email_domain(body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EmailDomain</code></summary>

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

**Sync**

```python
try:
    response = client.email.create_email_domain(ApiV1EmailDomainsRequest(domain="mail.acme.com"))
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEmailDomainErrorBody
```

**Async**

```python
try:
    response = await async_client.email.create_email_domain(ApiV1EmailDomainsRequest(domain="mail.acme.com"))
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEmailDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1EmailDomainsRequest](call_node/models/api_v1_email_domains_request.py) \| [ApiV1EmailDomainsRequestDict](call_node/models/api_v1_email_domains_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](call_node/models/email_domain.py)</code> -- Created, `pending`, with the records to publish.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[CreateEmailDomainErrorBody](call_node/errors/create_email_domain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.email.delete_email_domain("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEmailDomainErrorBody
```

**Async**

```python
try:
    await async_client.email.delete_email_domain("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEmailDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[DeleteEmailDomainErrorBody](call_node/errors/delete_email_domain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_email_domain(id_: str, *, refresh: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EmailDomain</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.email.get_email_domain("some example string")
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEmailDomainErrorBody
```

**Async**

```python
try:
    response = await async_client.email.get_email_domain("some example string")
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEmailDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>refresh</code> | <code>str \| None</code> | When set, the status and the records' statuses are re-read from the sending infrastructure first, and the answer carries `newDomainLimit`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](call_node/models/email_domain.py)</code> -- The domain.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetEmailDomainErrorBody](call_node/errors/get_email_domain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_email_message(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EmailMessage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.email.get_email_message("cmh2x9d4k0003s8w2q1f7a2bc")
    # TODO: Handle 'response' of type EmailMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEmailMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.email.get_email_message("cmh2x9d4k0003s8w2q1f7a2bc")
    # TODO: Handle 'response' of type EmailMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEmailMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailMessage](call_node/models/email_message.py)</code> -- The message; `events` lists `{ type, at, detail }` in the order they occurred.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetEmailMessageErrorBody](call_node/errors/get_email_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_email_domains(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1EmailDomainsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.email.list_email_domains()
    # TODO: Handle 'response' of type ApiV1EmailDomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailDomainsErrorBody
```

**Async**

```python
try:
    response = await async_client.email.list_email_domains()
    # TODO: Handle 'response' of type ApiV1EmailDomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EmailDomainsResponse](call_node/models/api_v1_email_domains_response.py)</code> -- Every sending domain on the account.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListEmailDomainsErrorBody](call_node/errors/list_email_domains_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_email_messages(*, status: Status3OrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1EmailMessagesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.email.list_email_messages()
    # TODO: Handle 'response' of type ApiV1EmailMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailMessagesErrorBody
```

**Async**

```python
try:
    response = await async_client.email.list_email_messages()
    # TODO: Handle 'response' of type ApiV1EmailMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmailMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[Status3OrStr](call_node/models/enums/status3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | The `nextCursor` of the previous page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EmailMessagesResponse](call_node/models/api_v1_email_messages_response.py)</code> -- A page of messages.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListEmailMessagesErrorBody](call_node/errors/list_email_messages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_email(body: SendEmailRequest | SendEmailRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> EmailMessage</code></summary>

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

**Sync**

```python
try:
    response = client.email.send_email(
        SendEmailRequest(
            from_="Acme Billing <billing@mail.acme.com>",
            to=["dana@example.com"],
            subject="Your October invoice",
            html="<p>Hi Dana, your invoice for October is attached.</p>",
            text="Hi Dana, your invoice for October is attached.",
            reply_to="accounts@mail.acme.com",
            headers={"X-Acme-Invoice": "inv_2041"},
            attachments=[
                Attachment(filename="invoice-2041.pdf", content="JVBERi0xLjQK...", content_type="application/pdf")
            ],
            tags=[Tag1(name="campaign", value="invoices")],
            status_webhook_url="https://yourapp.example.com/email/events",
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type EmailMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendEmailErrorBody
```

**Async**

```python
try:
    response = await async_client.email.send_email(
        SendEmailRequest(
            from_="Acme Billing <billing@mail.acme.com>",
            to=["dana@example.com"],
            subject="Your October invoice",
            html="<p>Hi Dana, your invoice for October is attached.</p>",
            text="Hi Dana, your invoice for October is attached.",
            reply_to="accounts@mail.acme.com",
            headers={"X-Acme-Invoice": "inv_2041"},
            attachments=[
                Attachment(filename="invoice-2041.pdf", content="JVBERi0xLjQK...", content_type="application/pdf")
            ],
            tags=[Tag1(name="campaign", value="invoices")],
            status_webhook_url="https://yourapp.example.com/email/events",
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type EmailMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SendEmailRequest](call_node/models/send_email_request.py) \| [SendEmailRequestDict](call_node/models/send_email_request.py)</code> | The request body. |
| <code>x_idempotency_key</code> | <code>UUID \| None</code> | A UUID. Replaying the same key returns the original result rather than acting twice.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailMessage](call_node/models/email_message.py)</code> -- Accepted by the sending infrastructure; `status` is `sent` and moves on as delivery events arrive. `billing` says how the message was priced.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[SendEmailErrorBody](call_node/errors/send_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 502, 503 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EmailDomain</code></summary>

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

**Sync**

```python
try:
    response = client.email.verify_email_domain("some example string")
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyEmailDomainErrorBody
```

**Async**

```python
try:
    response = await async_client.email.verify_email_domain("some example string")
    # TODO: Handle 'response' of type EmailDomain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyEmailDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EmailDomain](call_node/models/email_domain.py)</code> -- The domain after the check (`active`, `verifying` or `failed`).

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[VerifyEmailDomainErrorBody](call_node/errors/verify_email_domain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Faxes

> Source: [Faxes](call_node/apis/faxes.py)

<details>
<summary><code>def delete_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.faxes.delete_fax("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFaxErrorBody
```

**Async**

```python
try:
    await async_client.faxes.delete_fax("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[DeleteFaxErrorBody](call_node/errors/delete_fax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 409 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_fax(id_: str, *, format_: FormatOrStr | None = Format.PDF, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

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

**Sync**

```python
try:
    response = client.faxes.download_fax("some example string")
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadFaxErrorBody
```

**Async**

```python
try:
    response = await async_client.faxes.download_fax("some example string")
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadFaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](call_node/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.PDF</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- The document bytes.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[DownloadFaxErrorBody](call_node/errors/download_fax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Fax</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.faxes.get_fax("cmfx7k2q10001s8w2b1d9e3fa")
    # TODO: Handle 'response' of type Fax
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaxErrorBody
```

**Async**

```python
try:
    response = await async_client.faxes.get_fax("cmfx7k2q10001s8w2b1d9e3fa")
    # TODO: Handle 'response' of type Fax
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fax](call_node/models/fax.py)</code> -- The fax with its result fields.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetFaxErrorBody](call_node/errors/get_fax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_faxes(*, direction: DirectionOrStr | None = None, status: StatusCallnodeIoFaxesApiOrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1FaxesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.faxes.list_faxes()
    # TODO: Handle 'response' of type ApiV1FaxesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFaxesErrorBody
```

**Async**

```python
try:
    response = await async_client.faxes.list_faxes()
    # TODO: Handle 'response' of type ApiV1FaxesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFaxesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>direction</code> | <code>[DirectionOrStr](call_node/models/enums/direction.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusCallnodeIoFaxesApiOrStr](call_node/models/enums/status_callnode_io_faxes_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>cursor</code> | <code>str \| None</code> | The `nextCursor` of the previous page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FaxesResponse](call_node/models/api_v1_faxes_response.py)</code> -- A page of faxes.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListFaxesErrorBody](call_node/errors/list_faxes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_fax(body: SendFaxRequest | SendFaxRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> Fax</code></summary>

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

**Sync**

```python
try:
    response = client.faxes.send_fax(
        SendFaxRequest(
            to="+14155550142",
            from_="+15145550199",
            document="data:application/pdf;base64,JVBERi0xLjQKJcfs...",
            filename="signed-agreement.pdf",
            resolution=Resolution.FINE,
            header="Acme Legal",
            status_webhook_url="https://yourcrm.example.com/fax/events",
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type Fax
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendFaxErrorBody
```

**Async**

```python
try:
    response = await async_client.faxes.send_fax(
        SendFaxRequest(
            to="+14155550142",
            from_="+15145550199",
            document="data:application/pdf;base64,JVBERi0xLjQKJcfs...",
            filename="signed-agreement.pdf",
            resolution=Resolution.FINE,
            header="Acme Legal",
            status_webhook_url="https://yourcrm.example.com/fax/events",
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type Fax
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendFaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SendFaxRequest](call_node/models/send_fax_request.py) \| [SendFaxRequestDict](call_node/models/send_fax_request.py)</code> | The request body. |
| <code>x_idempotency_key</code> | <code>UUID \| None</code> | A UUID. Replaying the same key returns the original result rather than acting twice.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Fax](call_node/models/fax.py)</code> -- Queued. `estimatedCost` is the ceiling (every page at the rate); `costUsd` is filled in when the fax finishes.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[SendFaxErrorBody](call_node/errors/send_fax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 413, 415, 422, 429, 502 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MessagingApi

> Source: [MessagingApi](call_node/apis/messaging_api.py)

<details>
<summary><code>def get_message(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Message</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messaging_api.get_message("cmpt5ec0w00022hb2etd67258")
    # TODO: Handle 'response' of type Message
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.messaging_api.get_message("cmpt5ec0w00022hb2etd67258")
    # TODO: Handle 'response' of type Message
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Message](call_node/models/message.py)</code> -- The message, including its latest delivery status.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetMessageErrorBody](call_node/errors/get_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_message(body: SendMessageRequest | SendMessageRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> SendMessageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.messaging_api.send_message(
        SendMessageRequest(
            to="+16135551234",
            from_="+15145550199",
            body="Your demo is confirmed for Wednesday at 10am.",
            media=[],
            status_webhook_url="https://yourcrm.example.com/sms/events",
            tcpa_override=False,
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type SendMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.messaging_api.send_message(
        SendMessageRequest(
            to="+16135551234",
            from_="+15145550199",
            body="Your demo is confirmed for Wednesday at 10am.",
            media=[],
            status_webhook_url="https://yourcrm.example.com/sms/events",
            tcpa_override=False,
            metadata={},
        ),
    )
    # TODO: Handle 'response' of type SendMessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SendMessageRequest](call_node/models/send_message_request.py) \| [SendMessageRequestDict](call_node/models/send_message_request.py)</code> | The request body. |
| <code>x_idempotency_key</code> | <code>UUID \| None</code> | A UUID. Replaying the same key returns the original result rather than acting twice.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SendMessageResponse](call_node/models/send_message_response.py)</code> -- Message accepted by the carrier.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[SendMessageErrorBody](call_node/errors/send_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OutboundCalls

> Source: [OutboundCalls](call_node/apis/outbound_calls.py)

<details>
<summary><code>def cancel_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1OutboundCallsResponse1</code></summary>

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

**Sync**

```python
try:
    response = client.outbound_calls.cancel_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
    # TODO: Handle 'response' of type ApiV1OutboundCallsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelCallErrorBody
```

**Async**

```python
try:
    response = await async_client.outbound_calls.cancel_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
    # TODO: Handle 'response' of type ApiV1OutboundCallsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelCallErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>call_id</code> | <code>str</code> | The `callId` returned by originate. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OutboundCallsResponse1](call_node/models/api_v1_outbound_calls_response1.py)</code> -- Cancellation accepted, or the call was already terminal.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[CancelCallErrorBody](call_node/errors/cancel_call_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Call</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.outbound_calls.get_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
    # TODO: Handle 'response' of type Call
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCallErrorBody
```

**Async**

```python
try:
    response = await async_client.outbound_calls.get_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
    # TODO: Handle 'response' of type Call
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCallErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>call_id</code> | <code>str</code> | The `callId` returned by originate. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Call](call_node/models/call.py)</code> -- The call.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetCallErrorBody](call_node/errors/get_call_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_calls(*, status: CallStatusOrStr | None = None, limit: int | None = 50, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1OutboundCallsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.outbound_calls.list_calls()
    # TODO: Handle 'response' of type ApiV1OutboundCallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCallsErrorBody
```

**Async**

```python
try:
    response = await async_client.outbound_calls.list_calls()
    # TODO: Handle 'response' of type ApiV1OutboundCallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCallsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[CallStatusOrStr](call_node/models/enums/call_status.py) \| None</code> | Filter by status. Repeat the parameter to filter on several.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size. Defaults to 50, capped at 200.<br>**Default**: <code>50</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a previous response's `nextCursor`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OutboundCallsResponse](call_node/models/api_v1_outbound_calls_response.py)</code> -- A page of calls.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListCallsErrorBody](call_node/errors/list_calls_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def originate_call(body: OriginateRequest | OriginateRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> OriginateResponse</code></summary>

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

**Sync**

```python
try:
    response = client.outbound_calls.originate_call(
        OriginateRequest(
            to="+16135551234",
            from_="+15145550199",
            webhook_url="https://yourcrm.example.com/voice/n8n",
            webhook_auth=WebhookAuth(
                type_=TypeCallnodeIoOutboundCallsApi.HEADER, header_name="X-API-Key", value="your-n8n-secret"
            ),
            metadata={},
            status_webhook_url="https://yourcrm.example.com/voice/events",
            max_duration_secs=600,
            tcpa_override=False,
        ),
    )
    # TODO: Handle 'response' of type OriginateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OriginateCallErrorBody
```

**Async**

```python
try:
    response = await async_client.outbound_calls.originate_call(
        OriginateRequest(
            to="+16135551234",
            from_="+15145550199",
            webhook_url="https://yourcrm.example.com/voice/n8n",
            webhook_auth=WebhookAuth(
                type_=TypeCallnodeIoOutboundCallsApi.HEADER, header_name="X-API-Key", value="your-n8n-secret"
            ),
            metadata={},
            status_webhook_url="https://yourcrm.example.com/voice/events",
            max_duration_secs=600,
            tcpa_override=False,
        ),
    )
    # TODO: Handle 'response' of type OriginateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OriginateCallErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OriginateRequest](call_node/models/originate_request.py) \| [OriginateRequestDict](call_node/models/originate_request.py)</code> | The request body. |
| <code>x_idempotency_key</code> | <code>UUID \| None</code> | A UUID. Replaying the same key returns the original result rather than acting twice.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OriginateResponse](call_node/models/originate_response.py)</code> -- Originate command accepted.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[OriginateCallErrorBody](call_node/errors/originate_call_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def transfer_call(call_id: str, body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1CallsTransferResponse</code></summary>

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

**Sync**

```python
try:
    response = client.outbound_calls.transfer_call(
        "some example string", ApiV1CallsTransferRequest(destination="some example string")
    )
    # TODO: Handle 'response' of type ApiV1CallsTransferResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransferCallErrorBody
```

**Async**

```python
try:
    response = await async_client.outbound_calls.transfer_call(
        "some example string", ApiV1CallsTransferRequest(destination="some example string")
    )
    # TODO: Handle 'response' of type ApiV1CallsTransferResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TransferCallErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>call_id</code> | <code>str</code> | The **caller's** channel id — the `callId` CallNode sends you in the<br>webhook/stream query string for that call. On a bridged call this is<br>the A-leg, not the leg your own endpoint sees. |
| <code>body</code> | <code>[ApiV1CallsTransferRequest](call_node/models/api_v1_calls_transfer_request.py) \| [ApiV1CallsTransferRequestDict](call_node/models/api_v1_calls_transfer_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CallsTransferResponse](call_node/models/api_v1_calls_transfer_response.py)</code> -- Transfer accepted; the caller is being bridged.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[TransferCallErrorBody](call_node/errors/transfer_call_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 422, 502 | <code>[RawError](call_node/core/results.py)</code> |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PhoneNumbers

> Source: [PhoneNumbers](call_node/apis/phone_numbers.py)

<details>
<summary><code>def get_number(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.phone_numbers.get_number("cmpxeh9o60002pp4h7oznictb")
    # TODO: Handle 'response' of type ApiV1NumbersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.get_number("cmpxeh9o60002pp4h7oznictb")
    # TODO: Handle 'response' of type ApiV1NumbersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py)</code> -- The number and its webhook configuration.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetNumberErrorBody](call_node/errors/get_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_numbers(*, status: str | None = None, type_: Type3OrStr | None = None, purchase_source: PurchaseSource1OrStr | None = None, tag: str | None = None, q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.phone_numbers.list_numbers()
    # TODO: Handle 'response' of type ApiV1NumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNumbersErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.list_numbers()
    # TODO: Handle 'response' of type ApiV1NumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNumbersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>str \| None</code> | Filter by status, e.g. `active`.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type3OrStr](call_node/models/enums/type3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>purchase_source</code> | <code>[PurchaseSource1OrStr](call_node/models/enums/purchase_source1.py) \| None</code> | Numbers bought via the dashboard (`web`) or this API (`api`).<br>**Default**: <code>None</code> |
| <code>tag</code> | <code>str \| None</code> | Numbers carrying this exact tag (as stored; up to 24 characters).<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Substring match on the number's digits, the friendly name (case-insensitive), or a tag.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse](call_node/models/api_v1_numbers_response.py)</code> -- Your numbers, newest first.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListNumbersErrorBody](call_node/errors/list_numbers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchase_number(body: PurchaseNumberRequest | PurchaseNumberRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PurchaseNumberResponse</code></summary>

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

**Sync**

```python
try:
    response = client.phone_numbers.purchase_number(
        PurchaseNumberRequest(
            phone_number="+18282129522",
            friendly_name="Support line",
            voice=VoiceConfig(
                webhook_url="https://yourcrm.example.com/voice/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(
                    type_=Type2.HEADER, header_name="X-API-Key", value="your-n8n-secret"
                ),
            ),
            messaging=MessagingConfig(
                webhook_url="https://yourcrm.example.com/sms/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(type_=Type2.BEARER, value="your-token"),
                enabled=True,
            ),
        ),
    )
    # TODO: Handle 'response' of type PurchaseNumberResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchaseNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.purchase_number(
        PurchaseNumberRequest(
            phone_number="+18282129522",
            friendly_name="Support line",
            voice=VoiceConfig(
                webhook_url="https://yourcrm.example.com/voice/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(
                    type_=Type2.HEADER, header_name="X-API-Key", value="your-n8n-secret"
                ),
            ),
            messaging=MessagingConfig(
                webhook_url="https://yourcrm.example.com/sms/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(type_=Type2.BEARER, value="your-token"),
                enabled=True,
            ),
        ),
    )
    # TODO: Handle 'response' of type PurchaseNumberResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchaseNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PurchaseNumberRequest](call_node/models/purchase_number_request.py) \| [PurchaseNumberRequestDict](call_node/models/purchase_number_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseNumberResponse](call_node/models/purchase_number_response.py)</code> -- Number purchased, billed, and configured.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[PurchaseNumberErrorBody](call_node/errors/purchase_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 409, 502 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def release_number(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse3</code></summary>

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

**Sync**

```python
try:
    response = client.phone_numbers.release_number("cmpxeh9o60002pp4h7oznictb")
    # TODO: Handle 'response' of type ApiV1NumbersResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReleaseNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.release_number("cmpxeh9o60002pp4h7oznictb")
    # TODO: Handle 'response' of type ApiV1NumbersResponse3
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReleaseNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse3](call_node/models/api_v1_numbers_response3.py)</code> -- Released. `restorable` tells you whether it can be re-purchased later.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ReleaseNumberErrorBody](call_node/errors/release_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_available_numbers(*, type_: Type3OrStr | None = Type3.LOCAL, area_code: str | None = None, prefix: PrefixOrStr | None = None, vanity: str | None = None, quantity: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersAvailableResponse</code></summary>

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

**Sync**

```python
try:
    response = client.phone_numbers.search_available_numbers(area_code="828")
    # TODO: Handle 'response' of type ApiV1NumbersAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAvailableNumbersErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.search_available_numbers(area_code="828")
    # TODO: Handle 'response' of type ApiV1NumbersAvailableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAvailableNumbersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[Type3OrStr](call_node/models/enums/type3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Type3.LOCAL</code> |
| <code>area_code</code> | <code>str \| None</code> | 3-digit area code. Required when `type` is `local`.<br>**Default**: <code>None</code> |
| <code>prefix</code> | <code>[PrefixOrStr](call_node/models/enums/prefix.py) \| None</code> | Toll-free prefix filter. 800 and 822 are usually exhausted.<br>**Default**: <code>None</code> |
| <code>vanity</code> | <code>str \| None</code> | Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over `prefix`.<br>**Default**: <code>None</code> |
| <code>quantity</code> | <code>int \| None</code> | How many candidates to return.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersAvailableResponse](call_node/models/api_v1_numbers_available_response.py)</code> -- Matching inventory plus your current pricing. An empty `numbers` array means no inventory in that area — try another area code or prefix.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[SearchAvailableNumbersErrorBody](call_node/errors/search_available_numbers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 502 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_number(id_: str, body: ApiV1NumbersRequest | ApiV1NumbersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse1</code></summary>

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

**Sync**

```python
try:
    response = client.phone_numbers.update_number(
        "cmpxeh9o60002pp4h7oznictb",
        ApiV1NumbersRequest(
            voice=VoiceConfig(
                webhook_url="https://yourcrm.example.com/voice/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(
                    type_=Type2.HEADER, header_name="X-API-Key", value="your-n8n-secret"
                ),
            ),
        ),
    )
    # TODO: Handle 'response' of type ApiV1NumbersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.phone_numbers.update_number(
        "cmpxeh9o60002pp4h7oznictb",
        ApiV1NumbersRequest(
            voice=VoiceConfig(
                webhook_url="https://yourcrm.example.com/voice/n8n",
                webhook_auth=WebhookAuthCallnodeIoPhoneNumbersApi(
                    type_=Type2.HEADER, header_name="X-API-Key", value="your-n8n-secret"
                ),
            ),
        ),
    )
    # TODO: Handle 'response' of type ApiV1NumbersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`). |
| <code>body</code> | <code>[ApiV1NumbersRequest](call_node/models/api_v1_numbers_request.py) \| [ApiV1NumbersRequestDict](call_node/models/api_v1_numbers_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py)</code> -- The updated number.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[UpdateNumberErrorBody](call_node/errors/update_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SipTrunks

> Source: [SipTrunks](call_node/apis/sip_trunks.py)

<details>
<summary><code>def create_sip_trunk(body: CreateTrunkRequest | CreateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SipTrunk</code></summary>

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

**Sync**

```python
try:
    response = client.sip_trunks.create_sip_trunk(
        CreateTrunkRequest(
            name="HQ PBX",
            allowed_ips=["203.0.113.10", "203.0.113.11"],
            ingress_enabled=True,
            default_phone_number_id="cmpxeh9o60002pp4h7oznictb",
        ),
    )
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSipTrunkErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.create_sip_trunk(
        CreateTrunkRequest(
            name="HQ PBX",
            allowed_ips=["203.0.113.10", "203.0.113.11"],
            ingress_enabled=True,
            default_phone_number_id="cmpxeh9o60002pp4h7oznictb",
        ),
    )
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSipTrunkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTrunkRequest](call_node/models/create_trunk_request.py) \| [CreateTrunkRequestDict](call_node/models/create_trunk_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- Trunk created.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[CreateSipTrunkErrorBody](call_node/errors/create_sip_trunk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 409 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TrunksResponse1</code></summary>

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

**Sync**

```python
try:
    response = client.sip_trunks.delete_sip_trunk("cmb1xk2p40001abcd1234wxyz")
    # TODO: Handle 'response' of type ApiV1TrunksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSipTrunkErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.delete_sip_trunk("cmb1xk2p40001abcd1234wxyz")
    # TODO: Handle 'response' of type ApiV1TrunksResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSipTrunkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The trunk's `id`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TrunksResponse1](call_node/models/api_v1_trunks_response1.py)</code> -- Deleted.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[DeleteSipTrunkErrorBody](call_node/errors/delete_sip_trunk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 409 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> SipTrunk</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sip_trunks.get_sip_trunk("cmb1xk2p40001abcd1234wxyz")
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSipTrunkErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.get_sip_trunk("cmb1xk2p40001abcd1234wxyz")
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSipTrunkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The trunk's `id`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- The trunk.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[GetSipTrunkErrorBody](call_node/errors/get_sip_trunk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sip_trunks(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1TrunksResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sip_trunks.list_sip_trunks()
    # TODO: Handle 'response' of type ApiV1TrunksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSipTrunksErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.list_sip_trunks()
    # TODO: Handle 'response' of type ApiV1TrunksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSipTrunksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TrunksResponse](call_node/models/api_v1_trunks_response.py)</code> -- Your trunks and account trunk settings.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListSipTrunksErrorBody](call_node/errors/list_sip_trunks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_sip_trunk_credentials(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> SipTrunk</code></summary>

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

**Sync**

```python
try:
    response = client.sip_trunks.rotate_sip_trunk_credentials("some example string")
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateSipTrunkCredentialsErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.rotate_sip_trunk_credentials("some example string")
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateSipTrunkCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Trunk id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- New credentials. `sipPassword` appears only in this response.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[RotateSipTrunkCredentialsErrorBody](call_node/errors/rotate_sip_trunk_credentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](call_node/core/results.py)</code> |
| 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_sip_trunk(id_: str, body: UpdateTrunkRequest | UpdateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SipTrunk</code></summary>

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

**Sync**

```python
try:
    response = client.sip_trunks.update_sip_trunk(
        "cmb1xk2p40001abcd1234wxyz",
        UpdateTrunkRequest(status=StatusCallnodeIoSipTrunksApi.DISABLED, allowed_ips=["203.0.113.10"]),
    )
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSipTrunkErrorBody
```

**Async**

```python
try:
    response = await async_client.sip_trunks.update_sip_trunk(
        "cmb1xk2p40001abcd1234wxyz",
        UpdateTrunkRequest(status=StatusCallnodeIoSipTrunksApi.DISABLED, allowed_ips=["203.0.113.10"]),
    )
    # TODO: Handle 'response' of type SipTrunk
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSipTrunkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The trunk's `id`. |
| <code>body</code> | <code>[UpdateTrunkRequest](call_node/models/update_trunk_request.py) \| [UpdateTrunkRequestDict](call_node/models/update_trunk_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- The updated trunk.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[UpdateSipTrunkErrorBody](call_node/errors/update_sip_trunk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](call_node/models/error.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Wholesale

> Source: [Wholesale](call_node/apis/wholesale.py)

<details>
<summary><code>def list_wholesale_areas(*, country_id: str | None = None, state_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WholesaleAreasResponse</code></summary>

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

**Sync**

```python
try:
    response = client.wholesale.list_wholesale_areas()
    # TODO: Handle 'response' of type ApiV1WholesaleAreasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleAreasErrorBody
```

**Async**

```python
try:
    response = await async_client.wholesale.list_wholesale_areas()
    # TODO: Handle 'response' of type ApiV1WholesaleAreasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleAreasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>state_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleAreasResponse](call_node/models/api_v1_wholesale_areas_response.py)</code> -- Areas offering wholesale numbers.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListWholesaleAreasErrorBody](call_node/errors/list_wholesale_areas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| 403 | <code>[RawError](call_node/core/results.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_wholesale_countries(*, request_options: RequestOptionsOrDict | None = None) -> ApiV1WholesaleCountriesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.wholesale.list_wholesale_countries()
    # TODO: Handle 'response' of type ApiV1WholesaleCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.wholesale.list_wholesale_countries()
    # TODO: Handle 'response' of type ApiV1WholesaleCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleCountriesResponse](call_node/models/api_v1_wholesale_countries_response.py)</code> -- Countries with wholesale inventory.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListWholesaleCountriesErrorBody](call_node/errors/list_wholesale_countries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| 403 | <code>[RawError](call_node/core/results.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_wholesale_states(*, country_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WholesaleStatesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.wholesale.list_wholesale_states()
    # TODO: Handle 'response' of type ApiV1WholesaleStatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleStatesErrorBody
```

**Async**

```python
try:
    response = await async_client.wholesale.list_wholesale_states()
    # TODO: Handle 'response' of type ApiV1WholesaleStatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWholesaleStatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country_id</code> | <code>str \| None</code> | From `/wholesale/countries`. Defaults to the US when omitted.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleStatesResponse](call_node/models/api_v1_wholesale_states_response.py)</code> -- Regions (possibly empty).

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[ListWholesaleStatesErrorBody](call_node/errors/list_wholesale_states_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](call_node/models/error.py)</code> |
| 403 | <code>[RawError](call_node/core/results.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def order_wholesale_number(body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV1WholesaleNumbersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.wholesale.order_wholesale_number(
        ApiV1WholesaleNumbersRequest(area_id="some example string", deliver_to="some example string")
    )
    # TODO: Handle 'response' of type ApiV1WholesaleNumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrderWholesaleNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.wholesale.order_wholesale_number(
        ApiV1WholesaleNumbersRequest(area_id="some example string", deliver_to="some example string")
    )
    # TODO: Handle 'response' of type ApiV1WholesaleNumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OrderWholesaleNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1WholesaleNumbersRequest](call_node/models/api_v1_wholesale_numbers_request.py) \| [ApiV1WholesaleNumbersRequestDict](call_node/models/api_v1_wholesale_numbers_request.py)</code> | The request body. |
| <code>x_idempotency_key</code> | <code>UUID \| None</code> | A UUID. Replaying the same key returns the original result rather than acting twice.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleNumbersResponse](call_node/models/api_v1_wholesale_numbers_response.py)</code> -- Number allocated, delivering, and charged.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[OrderWholesaleNumberErrorBody](call_node/errors/order_wholesale_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 403, 502 | <code>[RawError](call_node/core/results.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_wholesale_delivery(id_: str, body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1WholesaleNumbersDeliveryResponse</code></summary>

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

**Sync**

```python
try:
    response = client.wholesale.update_wholesale_delivery(
        "some example string", ApiV1WholesaleNumbersDeliveryRequest(deliver_to="some example string")
    )
    # TODO: Handle 'response' of type ApiV1WholesaleNumbersDeliveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWholesaleDeliveryErrorBody
```

**Async**

```python
try:
    response = await async_client.wholesale.update_wholesale_delivery(
        "some example string", ApiV1WholesaleNumbersDeliveryRequest(deliver_to="some example string")
    )
    # TODO: Handle 'response' of type ApiV1WholesaleNumbersDeliveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWholesaleDeliveryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The number's id (from the order response or your numbers list). |
| <code>body</code> | <code>[ApiV1WholesaleNumbersDeliveryRequest](call_node/models/api_v1_wholesale_numbers_delivery_request.py) \| [ApiV1WholesaleNumbersDeliveryRequestDict](call_node/models/api_v1_wholesale_numbers_delivery_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](call_node/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WholesaleNumbersDeliveryResponse](call_node/models/api_v1_wholesale_numbers_delivery_response.py)</code> -- Delivery updated.

**OnError**: <code>[ApiError](call_node/core/exceptions.py)&#91;[UpdateWholesaleDeliveryErrorBody](call_node/errors/update_wholesale_delivery_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](call_node/core/results.py)</code> |
| anything unmapped | <code>[RawError](call_node/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

