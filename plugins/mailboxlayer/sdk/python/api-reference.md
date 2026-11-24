# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [MailboxlayerClient](mailboxlayer/client.py)

## BulkCheck

> Source: [BulkCheck](mailboxlayer/apis/bulk_check.py)

<details>
<summary><code>def bulk_check_emails(access_key: str, emails: str, *, smtp: SmtpOrInt | None = None, catch_all: CatchAllOrInt | None = None, format_: FormatOrInt | None = None, callback: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkCheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.bulk_check.bulk_check_emails(
        "YOUR_ACCESS_KEY",
        "user1@example.com,user2@example.com",
        smtp=Smtp.VALUE_1,
        catch_all=CatchAll.VALUE_0,
        format_=Format.VALUE_0,
        callback="myCallback",
    )
    # TODO: Handle 'response' of type BulkCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCheckEmailsErrorBody
```

**Async**

```python
try:
    response = await async_client.bulk_check.bulk_check_emails(
        "YOUR_ACCESS_KEY",
        "user1@example.com,user2@example.com",
        smtp=Smtp.VALUE_1,
        catch_all=CatchAll.VALUE_0,
        format_=Format.VALUE_0,
        callback="myCallback",
    )
    # TODO: Handle 'response' of type BulkCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCheckEmailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>access_key</code> | <code>str</code> | Mailboxlayer API Access Key (required for all requests). |
| <code>emails</code> | <code>str</code> | Comma-separated list of email addresses for bulk validation (e.g. `a@example.com,b@x.com`). Bulk limits depend on plan (Pro+ up to 25, Enterprise+ up to 100). |
| <code>smtp</code> | <code>[SmtpOrInt](mailboxlayer/models/enums/smtp.py) \| None</code> | Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may speed up responses but disables the `smtp_check` verdict.<br>**Default**: <code>None</code> |
| <code>catch_all</code> | <code>[CatchAllOrInt](mailboxlayer/models/enums/catch_all.py) \| None</code> | Enable catch-all mailbox detection by setting `catch_all=1`. Disabled by default because check is heavier and may increase response time. If not requested, the `catch_all` response value will typically be `null`. Some plans restrict catch-all detection.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrInt](mailboxlayer/models/enums/format.py) \| None</code> | Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).<br>**Default**: <code>None</code> |
| <code>callback</code> | <code>str \| None</code> | JSONP callback function name; wrapper will be returned if specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailboxlayer/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCheckResponse](mailboxlayer/models/unions/bulk_check_response.py)</code> -- Array of validation results (one per requested email). Service-level errors (empty `emails`, plan/bulk restrictions, bulk size over the plan limit) are also returned here with HTTP 200 and a `success:false` ApiError body.

**OnError**: <code>[ApiError](mailboxlayer/core/exceptions.py)&#91;[BulkCheckEmailsErrorBody](mailboxlayer/errors/bulk_check_emails_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[ApiErrorModel](mailboxlayer/models/api_error_model.py)</code> |
| 422 | <code>[RequestValidationError](mailboxlayer/models/request_validation_error.py)</code> |
| anything unmapped | <code>[RawError](mailboxlayer/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Check

> Source: [Check](mailboxlayer/apis/check.py)

<details>
<summary><code>def check_email(access_key: str, email: EmailStr, *, smtp: SmtpOrInt | None = None, catch_all: CatchAllOrInt | None = None, format_: FormatOrInt | None = None, callback: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.check.check_email(
        "YOUR_ACCESS_KEY",
        "support@mailboxlayer.com",
        smtp=Smtp.VALUE_1,
        catch_all=CatchAll.VALUE_0,
        format_=Format.VALUE_0,
        callback="myCallback",
    )
    # TODO: Handle 'response' of type CheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEmailErrorBody
```

**Async**

```python
try:
    response = await async_client.check.check_email(
        "YOUR_ACCESS_KEY",
        "support@mailboxlayer.com",
        smtp=Smtp.VALUE_1,
        catch_all=CatchAll.VALUE_0,
        format_=Format.VALUE_0,
        callback="myCallback",
    )
    # TODO: Handle 'response' of type CheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>access_key</code> | <code>str</code> | Mailboxlayer API Access Key (required for all requests). |
| <code>email</code> | <code>EmailStr</code> | Email address to validate (single validation). |
| <code>smtp</code> | <code>[SmtpOrInt](mailboxlayer/models/enums/smtp.py) \| None</code> | Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may speed up responses but disables the `smtp_check` verdict.<br>**Default**: <code>None</code> |
| <code>catch_all</code> | <code>[CatchAllOrInt](mailboxlayer/models/enums/catch_all.py) \| None</code> | Enable catch-all mailbox detection by setting `catch_all=1`. Disabled by default because check is heavier and may increase response time. If not requested, the `catch_all` response value will typically be `null`. Some plans restrict catch-all detection.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrInt](mailboxlayer/models/enums/format.py) \| None</code> | Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).<br>**Default**: <code>None</code> |
| <code>callback</code> | <code>str \| None</code> | JSONP callback function name; wrapper will be returned if specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mailboxlayer/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckResponse](mailboxlayer/models/unions/check_response.py)</code> -- Successful validation result (single object). Service-level errors (empty/invalid `email`, plan restrictions) are also returned here with HTTP 200 and a `success:false` ApiError body.

**OnError**: <code>[ApiError](mailboxlayer/core/exceptions.py)&#91;[CheckEmailErrorBody](mailboxlayer/errors/check_email_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500, 503 | <code>[ApiErrorModel](mailboxlayer/models/api_error_model.py)</code> |
| 422 | <code>[RequestValidationError](mailboxlayer/models/request_validation_error.py)</code> |
| anything unmapped | <code>[RawError](mailboxlayer/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

