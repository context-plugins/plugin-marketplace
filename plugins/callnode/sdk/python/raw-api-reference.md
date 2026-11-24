# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CallNodeClient](call_node/client.py)

## CallRecords

> Source: [CallRecords](call_node/apis/call_records.py)

<details>
<summary><code>def get_call_record(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CallsResponse1, GetCallRecordErrorBody]</code></summary>

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
result = client.call_records.with_raw_response.get_call_record("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallRecordErrorBody
```

**Async**

```python
result = await async_client.call_records.with_raw_response.get_call_record("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallRecordErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1CallsResponse1](call_node/models/api_v1_calls_response1.py), [GetCallRecordErrorBody](call_node/errors/get_call_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CallsResponse1](call_node/models/api_v1_calls_response1.py)</code> -- The call record.

**On `Failure`**: `error` is <code>[GetCallRecordErrorBody](call_node/errors/get_call_record_error.py)</code>

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
<summary><code>def list_call_records(*, number: str | None = None, direction: DirectionOrStr | None = None, status: StatusOrStr | None = None, since: RFC3339DateTime | None = None, until: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CallsResponse, ListCallRecordsErrorBody]</code></summary>

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
result = client.call_records.with_raw_response.list_call_records()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallRecordsErrorBody
```

**Async**

```python
result = await async_client.call_records.with_raw_response.list_call_records()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallRecordsErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1CallsResponse](call_node/models/api_v1_calls_response.py), [ListCallRecordsErrorBody](call_node/errors/list_call_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CallsResponse](call_node/models/api_v1_calls_response.py)</code> -- Call records, newest first.

**On `Failure`**: `error` is <code>[ListCallRecordsErrorBody](call_node/errors/list_call_records_error.py)</code>

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
<summary><code>def create_email_domain(body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EmailDomain, CreateEmailDomainErrorBody]</code></summary>

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
result = client.email.with_raw_response.create_email_domain(ApiV1EmailDomainsRequest(domain="mail.acme.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEmailDomainErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.create_email_domain(
    ApiV1EmailDomainsRequest(domain="mail.acme.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEmailDomainErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[EmailDomain](call_node/models/email_domain.py), [CreateEmailDomainErrorBody](call_node/errors/create_email_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EmailDomain](call_node/models/email_domain.py)</code> -- Created, `pending`, with the records to publish.

**On `Failure`**: `error` is <code>[CreateEmailDomainErrorBody](call_node/errors/create_email_domain_error.py)</code>

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
<summary><code>def delete_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEmailDomainErrorBody]</code></summary>

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
result = client.email.with_raw_response.delete_email_domain("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEmailDomainErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.delete_email_domain("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEmailDomainErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;None, [DeleteEmailDomainErrorBody](call_node/errors/delete_email_domain_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEmailDomainErrorBody](call_node/errors/delete_email_domain_error.py)</code>

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
<summary><code>def get_email_domain(id_: str, *, refresh: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EmailDomain, GetEmailDomainErrorBody]</code></summary>

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
result = client.email.with_raw_response.get_email_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEmailDomainErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.get_email_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEmailDomainErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[EmailDomain](call_node/models/email_domain.py), [GetEmailDomainErrorBody](call_node/errors/get_email_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EmailDomain](call_node/models/email_domain.py)</code> -- The domain.

**On `Failure`**: `error` is <code>[GetEmailDomainErrorBody](call_node/errors/get_email_domain_error.py)</code>

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
<summary><code>def get_email_message(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EmailMessage, GetEmailMessageErrorBody]</code></summary>

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
result = client.email.with_raw_response.get_email_message("cmh2x9d4k0003s8w2q1f7a2bc")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEmailMessageErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.get_email_message("cmh2x9d4k0003s8w2q1f7a2bc")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEmailMessageErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[EmailMessage](call_node/models/email_message.py), [GetEmailMessageErrorBody](call_node/errors/get_email_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EmailMessage](call_node/models/email_message.py)</code> -- The message; `events` lists `{ type, at, detail }` in the order they occurred.

**On `Failure`**: `error` is <code>[GetEmailMessageErrorBody](call_node/errors/get_email_message_error.py)</code>

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
<summary><code>def list_email_domains(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EmailDomainsResponse, ListEmailDomainsErrorBody]</code></summary>

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
result = client.email.with_raw_response.list_email_domains()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EmailDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmailDomainsErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.list_email_domains()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EmailDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmailDomainsErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1EmailDomainsResponse](call_node/models/api_v1_email_domains_response.py), [ListEmailDomainsErrorBody](call_node/errors/list_email_domains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EmailDomainsResponse](call_node/models/api_v1_email_domains_response.py)</code> -- Every sending domain on the account.

**On `Failure`**: `error` is <code>[ListEmailDomainsErrorBody](call_node/errors/list_email_domains_error.py)</code>

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
<summary><code>def list_email_messages(*, status: Status3OrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EmailMessagesResponse, ListEmailMessagesErrorBody]</code></summary>

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
result = client.email.with_raw_response.list_email_messages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EmailMessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmailMessagesErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.list_email_messages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EmailMessagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmailMessagesErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1EmailMessagesResponse](call_node/models/api_v1_email_messages_response.py), [ListEmailMessagesErrorBody](call_node/errors/list_email_messages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EmailMessagesResponse](call_node/models/api_v1_email_messages_response.py)</code> -- A page of messages.

**On `Failure`**: `error` is <code>[ListEmailMessagesErrorBody](call_node/errors/list_email_messages_error.py)</code>

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
<summary><code>def send_email(body: SendEmailRequest | SendEmailRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EmailMessage, SendEmailErrorBody]</code></summary>

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
result = client.email.with_raw_response.send_email(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendEmailErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.send_email(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendEmailErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[EmailMessage](call_node/models/email_message.py), [SendEmailErrorBody](call_node/errors/send_email_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EmailMessage](call_node/models/email_message.py)</code> -- Accepted by the sending infrastructure; `status` is `sent` and moves on as delivery events arrive. `billing` says how the message was priced.

**On `Failure`**: `error` is <code>[SendEmailErrorBody](call_node/errors/send_email_error.py)</code>

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
<summary><code>def verify_email_domain(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EmailDomain, VerifyEmailDomainErrorBody]</code></summary>

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
result = client.email.with_raw_response.verify_email_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyEmailDomainErrorBody
```

**Async**

```python
result = await async_client.email.with_raw_response.verify_email_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EmailDomain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VerifyEmailDomainErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[EmailDomain](call_node/models/email_domain.py), [VerifyEmailDomainErrorBody](call_node/errors/verify_email_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EmailDomain](call_node/models/email_domain.py)</code> -- The domain after the check (`active`, `verifying` or `failed`).

**On `Failure`**: `error` is <code>[VerifyEmailDomainErrorBody](call_node/errors/verify_email_domain_error.py)</code>

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
<summary><code>def delete_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteFaxErrorBody]</code></summary>

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
result = client.faxes.with_raw_response.delete_fax("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFaxErrorBody
```

**Async**

```python
result = await async_client.faxes.with_raw_response.delete_fax("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFaxErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;None, [DeleteFaxErrorBody](call_node/errors/delete_fax_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteFaxErrorBody](call_node/errors/delete_fax_error.py)</code>

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
<summary><code>def download_fax(id_: str, *, format_: FormatOrStr | None = Format.PDF, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, DownloadFaxErrorBody]</code></summary>

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
result = client.faxes.with_raw_response.download_fax("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadFaxErrorBody
```

**Async**

```python
result = await async_client.faxes.with_raw_response.download_fax("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadFaxErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;FileResponse, [DownloadFaxErrorBody](call_node/errors/download_fax_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- The document bytes.

**On `Failure`**: `error` is <code>[DownloadFaxErrorBody](call_node/errors/download_fax_error.py)</code>

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
<summary><code>def get_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Fax, GetFaxErrorBody]</code></summary>

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
result = client.faxes.with_raw_response.get_fax("cmfx7k2q10001s8w2b1d9e3fa")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Fax
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFaxErrorBody
```

**Async**

```python
result = await async_client.faxes.with_raw_response.get_fax("cmfx7k2q10001s8w2b1d9e3fa")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Fax
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFaxErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[Fax](call_node/models/fax.py), [GetFaxErrorBody](call_node/errors/get_fax_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Fax](call_node/models/fax.py)</code> -- The fax with its result fields.

**On `Failure`**: `error` is <code>[GetFaxErrorBody](call_node/errors/get_fax_error.py)</code>

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
<summary><code>def list_faxes(*, direction: DirectionOrStr | None = None, status: StatusCallnodeIoFaxesApiOrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1FaxesResponse, ListFaxesErrorBody]</code></summary>

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
result = client.faxes.with_raw_response.list_faxes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FaxesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFaxesErrorBody
```

**Async**

```python
result = await async_client.faxes.with_raw_response.list_faxes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FaxesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFaxesErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1FaxesResponse](call_node/models/api_v1_faxes_response.py), [ListFaxesErrorBody](call_node/errors/list_faxes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1FaxesResponse](call_node/models/api_v1_faxes_response.py)</code> -- A page of faxes.

**On `Failure`**: `error` is <code>[ListFaxesErrorBody](call_node/errors/list_faxes_error.py)</code>

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
<summary><code>def send_fax(body: SendFaxRequest | SendFaxRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Fax, SendFaxErrorBody]</code></summary>

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
result = client.faxes.with_raw_response.send_fax(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Fax
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendFaxErrorBody
```

**Async**

```python
result = await async_client.faxes.with_raw_response.send_fax(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Fax
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendFaxErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[Fax](call_node/models/fax.py), [SendFaxErrorBody](call_node/errors/send_fax_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Fax](call_node/models/fax.py)</code> -- Queued. `estimatedCost` is the ceiling (every page at the rate); `costUsd` is filled in when the fax finishes.

**On `Failure`**: `error` is <code>[SendFaxErrorBody](call_node/errors/send_fax_error.py)</code>

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
<summary><code>def get_message(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Message, GetMessageErrorBody]</code></summary>

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
result = client.messaging_api.with_raw_response.get_message("cmpt5ec0w00022hb2etd67258")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Message
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMessageErrorBody
```

**Async**

```python
result = await async_client.messaging_api.with_raw_response.get_message("cmpt5ec0w00022hb2etd67258")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Message
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMessageErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[Message](call_node/models/message.py), [GetMessageErrorBody](call_node/errors/get_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Message](call_node/models/message.py)</code> -- The message, including its latest delivery status.

**On `Failure`**: `error` is <code>[GetMessageErrorBody](call_node/errors/get_message_error.py)</code>

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
<summary><code>def send_message(body: SendMessageRequest | SendMessageRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SendMessageResponse, SendMessageErrorBody]</code></summary>

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
result = client.messaging_api.with_raw_response.send_message(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SendMessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageErrorBody
```

**Async**

```python
result = await async_client.messaging_api.with_raw_response.send_message(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SendMessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[SendMessageResponse](call_node/models/send_message_response.py), [SendMessageErrorBody](call_node/errors/send_message_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SendMessageResponse](call_node/models/send_message_response.py)</code> -- Message accepted by the carrier.

**On `Failure`**: `error` is <code>[SendMessageErrorBody](call_node/errors/send_message_error.py)</code>

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
<summary><code>def cancel_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1OutboundCallsResponse1, CancelCallErrorBody]</code></summary>

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
result = client.outbound_calls.with_raw_response.cancel_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1OutboundCallsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelCallErrorBody
```

**Async**

```python
result = await async_client.outbound_calls.with_raw_response.cancel_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1OutboundCallsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelCallErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1OutboundCallsResponse1](call_node/models/api_v1_outbound_calls_response1.py), [CancelCallErrorBody](call_node/errors/cancel_call_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1OutboundCallsResponse1](call_node/models/api_v1_outbound_calls_response1.py)</code> -- Cancellation accepted, or the call was already terminal.

**On `Failure`**: `error` is <code>[CancelCallErrorBody](call_node/errors/cancel_call_error.py)</code>

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
<summary><code>def get_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Call, GetCallErrorBody]</code></summary>

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
result = client.outbound_calls.with_raw_response.get_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Call
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallErrorBody
```

**Async**

```python
result = await async_client.outbound_calls.with_raw_response.get_call("cn-ob-7f3a18a2-9b40-4e1e-9c4e-1b8b9b8e6b3a")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Call
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[Call](call_node/models/call.py), [GetCallErrorBody](call_node/errors/get_call_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Call](call_node/models/call.py)</code> -- The call.

**On `Failure`**: `error` is <code>[GetCallErrorBody](call_node/errors/get_call_error.py)</code>

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
<summary><code>def list_calls(*, status: CallStatusOrStr | None = None, limit: int | None = 50, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1OutboundCallsResponse, ListCallsErrorBody]</code></summary>

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
result = client.outbound_calls.with_raw_response.list_calls()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1OutboundCallsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallsErrorBody
```

**Async**

```python
result = await async_client.outbound_calls.with_raw_response.list_calls()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1OutboundCallsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallsErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1OutboundCallsResponse](call_node/models/api_v1_outbound_calls_response.py), [ListCallsErrorBody](call_node/errors/list_calls_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1OutboundCallsResponse](call_node/models/api_v1_outbound_calls_response.py)</code> -- A page of calls.

**On `Failure`**: `error` is <code>[ListCallsErrorBody](call_node/errors/list_calls_error.py)</code>

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
<summary><code>def originate_call(body: OriginateRequest | OriginateRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OriginateResponse, OriginateCallErrorBody]</code></summary>

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
result = client.outbound_calls.with_raw_response.originate_call(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OriginateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OriginateCallErrorBody
```

**Async**

```python
result = await async_client.outbound_calls.with_raw_response.originate_call(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OriginateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OriginateCallErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[OriginateResponse](call_node/models/originate_response.py), [OriginateCallErrorBody](call_node/errors/originate_call_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OriginateResponse](call_node/models/originate_response.py)</code> -- Originate command accepted.

**On `Failure`**: `error` is <code>[OriginateCallErrorBody](call_node/errors/originate_call_error.py)</code>

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
<summary><code>def transfer_call(call_id: str, body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CallsTransferResponse, TransferCallErrorBody]</code></summary>

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
result = client.outbound_calls.with_raw_response.transfer_call(
    "some example string", ApiV1CallsTransferRequest(destination="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsTransferResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransferCallErrorBody
```

**Async**

```python
result = await async_client.outbound_calls.with_raw_response.transfer_call(
    "some example string", ApiV1CallsTransferRequest(destination="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CallsTransferResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TransferCallErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1CallsTransferResponse](call_node/models/api_v1_calls_transfer_response.py), [TransferCallErrorBody](call_node/errors/transfer_call_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CallsTransferResponse](call_node/models/api_v1_calls_transfer_response.py)</code> -- Transfer accepted; the caller is being bridged.

**On `Failure`**: `error` is <code>[TransferCallErrorBody](call_node/errors/transfer_call_error.py)</code>

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
<summary><code>def get_number(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NumbersResponse1, GetNumberErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.get_number("cmpxeh9o60002pp4h7oznictb")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNumberErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.get_number("cmpxeh9o60002pp4h7oznictb")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNumberErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py), [GetNumberErrorBody](call_node/errors/get_number_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py)</code> -- The number and its webhook configuration.

**On `Failure`**: `error` is <code>[GetNumberErrorBody](call_node/errors/get_number_error.py)</code>

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
<summary><code>def list_numbers(*, status: str | None = None, type_: Type3OrStr | None = None, purchase_source: PurchaseSource1OrStr | None = None, tag: str | None = None, q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NumbersResponse, ListNumbersErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.list_numbers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNumbersErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.list_numbers()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNumbersErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1NumbersResponse](call_node/models/api_v1_numbers_response.py), [ListNumbersErrorBody](call_node/errors/list_numbers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NumbersResponse](call_node/models/api_v1_numbers_response.py)</code> -- Your numbers, newest first.

**On `Failure`**: `error` is <code>[ListNumbersErrorBody](call_node/errors/list_numbers_error.py)</code>

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
<summary><code>def purchase_number(body: PurchaseNumberRequest | PurchaseNumberRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PurchaseNumberResponse, PurchaseNumberErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.purchase_number(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseNumberResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurchaseNumberErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.purchase_number(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseNumberResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurchaseNumberErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[PurchaseNumberResponse](call_node/models/purchase_number_response.py), [PurchaseNumberErrorBody](call_node/errors/purchase_number_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PurchaseNumberResponse](call_node/models/purchase_number_response.py)</code> -- Number purchased, billed, and configured.

**On `Failure`**: `error` is <code>[PurchaseNumberErrorBody](call_node/errors/purchase_number_error.py)</code>

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
<summary><code>def release_number(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NumbersResponse3, ReleaseNumberErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.release_number("cmpxeh9o60002pp4h7oznictb")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReleaseNumberErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.release_number("cmpxeh9o60002pp4h7oznictb")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReleaseNumberErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1NumbersResponse3](call_node/models/api_v1_numbers_response3.py), [ReleaseNumberErrorBody](call_node/errors/release_number_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NumbersResponse3](call_node/models/api_v1_numbers_response3.py)</code> -- Released. `restorable` tells you whether it can be re-purchased later.

**On `Failure`**: `error` is <code>[ReleaseNumberErrorBody](call_node/errors/release_number_error.py)</code>

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
<summary><code>def search_available_numbers(*, type_: Type3OrStr | None = Type3.LOCAL, area_code: str | None = None, prefix: PrefixOrStr | None = None, vanity: str | None = None, quantity: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NumbersAvailableResponse, SearchAvailableNumbersErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.search_available_numbers(area_code="828")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersAvailableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchAvailableNumbersErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.search_available_numbers(area_code="828")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersAvailableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchAvailableNumbersErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1NumbersAvailableResponse](call_node/models/api_v1_numbers_available_response.py), [SearchAvailableNumbersErrorBody](call_node/errors/search_available_numbers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NumbersAvailableResponse](call_node/models/api_v1_numbers_available_response.py)</code> -- Matching inventory plus your current pricing. An empty `numbers` array means no inventory in that area — try another area code or prefix.

**On `Failure`**: `error` is <code>[SearchAvailableNumbersErrorBody](call_node/errors/search_available_numbers_error.py)</code>

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
<summary><code>def update_number(id_: str, body: ApiV1NumbersRequest | ApiV1NumbersRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NumbersResponse1, UpdateNumberErrorBody]</code></summary>

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
result = client.phone_numbers.with_raw_response.update_number(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateNumberErrorBody
```

**Async**

```python
result = await async_client.phone_numbers.with_raw_response.update_number(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NumbersResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateNumberErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py), [UpdateNumberErrorBody](call_node/errors/update_number_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NumbersResponse1](call_node/models/api_v1_numbers_response1.py)</code> -- The updated number.

**On `Failure`**: `error` is <code>[UpdateNumberErrorBody](call_node/errors/update_number_error.py)</code>

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
<summary><code>def create_sip_trunk(body: CreateTrunkRequest | CreateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SipTrunk, CreateSipTrunkErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.create_sip_trunk(
    CreateTrunkRequest(
        name="HQ PBX",
        allowed_ips=["203.0.113.10", "203.0.113.11"],
        ingress_enabled=True,
        default_phone_number_id="cmpxeh9o60002pp4h7oznictb",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSipTrunkErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.create_sip_trunk(
    CreateTrunkRequest(
        name="HQ PBX",
        allowed_ips=["203.0.113.10", "203.0.113.11"],
        ingress_enabled=True,
        default_phone_number_id="cmpxeh9o60002pp4h7oznictb",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSipTrunkErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[SipTrunk](call_node/models/sip_trunk.py), [CreateSipTrunkErrorBody](call_node/errors/create_sip_trunk_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- Trunk created.

**On `Failure`**: `error` is <code>[CreateSipTrunkErrorBody](call_node/errors/create_sip_trunk_error.py)</code>

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
<summary><code>def delete_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1TrunksResponse1, DeleteSipTrunkErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.delete_sip_trunk("cmb1xk2p40001abcd1234wxyz")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TrunksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSipTrunkErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.delete_sip_trunk("cmb1xk2p40001abcd1234wxyz")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TrunksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSipTrunkErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1TrunksResponse1](call_node/models/api_v1_trunks_response1.py), [DeleteSipTrunkErrorBody](call_node/errors/delete_sip_trunk_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1TrunksResponse1](call_node/models/api_v1_trunks_response1.py)</code> -- Deleted.

**On `Failure`**: `error` is <code>[DeleteSipTrunkErrorBody](call_node/errors/delete_sip_trunk_error.py)</code>

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
<summary><code>def get_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SipTrunk, GetSipTrunkErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.get_sip_trunk("cmb1xk2p40001abcd1234wxyz")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSipTrunkErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.get_sip_trunk("cmb1xk2p40001abcd1234wxyz")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSipTrunkErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[SipTrunk](call_node/models/sip_trunk.py), [GetSipTrunkErrorBody](call_node/errors/get_sip_trunk_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- The trunk.

**On `Failure`**: `error` is <code>[GetSipTrunkErrorBody](call_node/errors/get_sip_trunk_error.py)</code>

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
<summary><code>def list_sip_trunks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1TrunksResponse, ListSipTrunksErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.list_sip_trunks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TrunksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSipTrunksErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.list_sip_trunks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TrunksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSipTrunksErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1TrunksResponse](call_node/models/api_v1_trunks_response.py), [ListSipTrunksErrorBody](call_node/errors/list_sip_trunks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1TrunksResponse](call_node/models/api_v1_trunks_response.py)</code> -- Your trunks and account trunk settings.

**On `Failure`**: `error` is <code>[ListSipTrunksErrorBody](call_node/errors/list_sip_trunks_error.py)</code>

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
<summary><code>def rotate_sip_trunk_credentials(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SipTrunk, RotateSipTrunkCredentialsErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.rotate_sip_trunk_credentials("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateSipTrunkCredentialsErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.rotate_sip_trunk_credentials("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RotateSipTrunkCredentialsErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[SipTrunk](call_node/models/sip_trunk.py), [RotateSipTrunkCredentialsErrorBody](call_node/errors/rotate_sip_trunk_credentials_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- New credentials. `sipPassword` appears only in this response.

**On `Failure`**: `error` is <code>[RotateSipTrunkCredentialsErrorBody](call_node/errors/rotate_sip_trunk_credentials_error.py)</code>

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
<summary><code>def update_sip_trunk(id_: str, body: UpdateTrunkRequest | UpdateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SipTrunk, UpdateSipTrunkErrorBody]</code></summary>

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
result = client.sip_trunks.with_raw_response.update_sip_trunk(
    "cmb1xk2p40001abcd1234wxyz",
    UpdateTrunkRequest(status=StatusCallnodeIoSipTrunksApi.DISABLED, allowed_ips=["203.0.113.10"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSipTrunkErrorBody
```

**Async**

```python
result = await async_client.sip_trunks.with_raw_response.update_sip_trunk(
    "cmb1xk2p40001abcd1234wxyz",
    UpdateTrunkRequest(status=StatusCallnodeIoSipTrunksApi.DISABLED, allowed_ips=["203.0.113.10"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SipTrunk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSipTrunkErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[SipTrunk](call_node/models/sip_trunk.py), [UpdateSipTrunkErrorBody](call_node/errors/update_sip_trunk_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SipTrunk](call_node/models/sip_trunk.py)</code> -- The updated trunk.

**On `Failure`**: `error` is <code>[UpdateSipTrunkErrorBody](call_node/errors/update_sip_trunk_error.py)</code>

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
<summary><code>def list_wholesale_areas(*, country_id: str | None = None, state_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WholesaleAreasResponse, ListWholesaleAreasErrorBody]</code></summary>

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
result = client.wholesale.with_raw_response.list_wholesale_areas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleAreasResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleAreasErrorBody
```

**Async**

```python
result = await async_client.wholesale.with_raw_response.list_wholesale_areas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleAreasResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleAreasErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1WholesaleAreasResponse](call_node/models/api_v1_wholesale_areas_response.py), [ListWholesaleAreasErrorBody](call_node/errors/list_wholesale_areas_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WholesaleAreasResponse](call_node/models/api_v1_wholesale_areas_response.py)</code> -- Areas offering wholesale numbers.

**On `Failure`**: `error` is <code>[ListWholesaleAreasErrorBody](call_node/errors/list_wholesale_areas_error.py)</code>

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
<summary><code>def list_wholesale_countries(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WholesaleCountriesResponse, ListWholesaleCountriesErrorBody]</code></summary>

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
result = client.wholesale.with_raw_response.list_wholesale_countries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleCountriesErrorBody
```

**Async**

```python
result = await async_client.wholesale.with_raw_response.list_wholesale_countries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleCountriesErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1WholesaleCountriesResponse](call_node/models/api_v1_wholesale_countries_response.py), [ListWholesaleCountriesErrorBody](call_node/errors/list_wholesale_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WholesaleCountriesResponse](call_node/models/api_v1_wholesale_countries_response.py)</code> -- Countries with wholesale inventory.

**On `Failure`**: `error` is <code>[ListWholesaleCountriesErrorBody](call_node/errors/list_wholesale_countries_error.py)</code>

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
<summary><code>def list_wholesale_states(*, country_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WholesaleStatesResponse, ListWholesaleStatesErrorBody]</code></summary>

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
result = client.wholesale.with_raw_response.list_wholesale_states()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleStatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleStatesErrorBody
```

**Async**

```python
result = await async_client.wholesale.with_raw_response.list_wholesale_states()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleStatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWholesaleStatesErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1WholesaleStatesResponse](call_node/models/api_v1_wholesale_states_response.py), [ListWholesaleStatesErrorBody](call_node/errors/list_wholesale_states_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WholesaleStatesResponse](call_node/models/api_v1_wholesale_states_response.py)</code> -- Regions (possibly empty).

**On `Failure`**: `error` is <code>[ListWholesaleStatesErrorBody](call_node/errors/list_wholesale_states_error.py)</code>

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
<summary><code>def order_wholesale_number(body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WholesaleNumbersResponse, OrderWholesaleNumberErrorBody]</code></summary>

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
result = client.wholesale.with_raw_response.order_wholesale_number(
    ApiV1WholesaleNumbersRequest(area_id="some example string", deliver_to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleNumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrderWholesaleNumberErrorBody
```

**Async**

```python
result = await async_client.wholesale.with_raw_response.order_wholesale_number(
    ApiV1WholesaleNumbersRequest(area_id="some example string", deliver_to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleNumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OrderWholesaleNumberErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1WholesaleNumbersResponse](call_node/models/api_v1_wholesale_numbers_response.py), [OrderWholesaleNumberErrorBody](call_node/errors/order_wholesale_number_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WholesaleNumbersResponse](call_node/models/api_v1_wholesale_numbers_response.py)</code> -- Number allocated, delivering, and charged.

**On `Failure`**: `error` is <code>[OrderWholesaleNumberErrorBody](call_node/errors/order_wholesale_number_error.py)</code>

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
<summary><code>def update_wholesale_delivery(id_: str, body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WholesaleNumbersDeliveryResponse, UpdateWholesaleDeliveryErrorBody]</code></summary>

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
result = client.wholesale.with_raw_response.update_wholesale_delivery(
    "some example string", ApiV1WholesaleNumbersDeliveryRequest(deliver_to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleNumbersDeliveryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWholesaleDeliveryErrorBody
```

**Async**

```python
result = await async_client.wholesale.with_raw_response.update_wholesale_delivery(
    "some example string", ApiV1WholesaleNumbersDeliveryRequest(deliver_to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WholesaleNumbersDeliveryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWholesaleDeliveryErrorBody
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

**Returns**: <code>[ApiResult](call_node/core/results.py)&#91;[ApiV1WholesaleNumbersDeliveryResponse](call_node/models/api_v1_wholesale_numbers_delivery_response.py), [UpdateWholesaleDeliveryErrorBody](call_node/errors/update_wholesale_delivery_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WholesaleNumbersDeliveryResponse](call_node/models/api_v1_wholesale_numbers_delivery_response.py)</code> -- Delivery updated.

**On `Failure`**: `error` is <code>[UpdateWholesaleDeliveryErrorBody](call_node/errors/update_wholesale_delivery_error.py)</code>

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

