# Reference

> Source: [MailboxlayerClient](src/client.ts)

## BulkCheck

> Source: [BulkCheck](src/resources/bulk-check.ts)

<details>
<summary><code>bulkCheckEmails(request: BulkCheck.BulkCheckEmailsRequest, options?: RequestOptions): ApiPromise&lt;BulkCheckResponse, BulkCheck.BulkCheckEmailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk validation accepts a comma-separated list of email addresses in the `emails` query parameter (e.g. `emails=a@x.com,b@y.com,…`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkCheck.bulkCheckEmails({
    accessKey: "YOUR_ACCESS_KEY",
    emails: "user1@example.com,user2@example.com",
    smtp: Smtp._1,
    catchAll: CatchAll._0,
    format: Format._0,
    callback: "myCallback",
  });
  // TODO: Handle 'response' of type BulkCheckResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkCheck.BulkCheckEmailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkCheck
  .bulkCheckEmails({
    accessKey: "YOUR_ACCESS_KEY",
    emails: "user1@example.com,user2@example.com",
    smtp: Smtp._1,
    catchAll: CatchAll._0,
    format: Format._0,
    callback: "myCallback",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCheckResponse
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
| <code>accessKey</code> | <code>string</code> | Mailboxlayer API Access Key (required for all requests). |
| <code>emails</code> | <code>string</code> | Comma-separated list of email addresses for bulk validation (e.g. `a@example.com,b@x.com`). Bulk limits depend on plan (Pro+ up to 25, Enterprise+ up to 100). |
| <code>smtp?</code> | <code>[Smtp](src/models/smtp.ts)</code> | Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may speed up responses but disables the `smtp_check` verdict. |
| <code>catchAll?</code> | <code>[CatchAll](src/models/catch-all.ts)</code> | Enable catch-all mailbox detection by setting `catch_all=1`. Disabled by default because check is heavier and may increase response time. If not requested, the `catch_all` response value will typically be `null`. Some plans restrict catch-all detection. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Set to 1 for human-prettified JSON output (useful for debugging; increases payload size). |
| <code>callback?</code> | <code>string</code> | JSONP callback function name; wrapper will be returned if specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkCheck.bulkCheckEmails(request)`

- **OnSuccess**: <code>[BulkCheckResponse](src/models/unions/bulk-check-response.ts)</code>
- **OnError**: throws <code>[BulkCheck.BulkCheckEmailsError](src/resources/bulk-check.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkCheck.bulkCheckEmails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCheckResponse, BulkCheck.BulkCheckEmailsError&gt;</code>, with `result.value` of type <code>[BulkCheckResponse](src/models/unions/bulk-check-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailboxlayerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Check

> Source: [Check](src/resources/check.ts)

<details>
<summary><code>checkEmail(request: Check.CheckEmailRequest, options?: RequestOptions): ApiPromise&lt;CheckResponse, Check.CheckEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform an email validation for a single email address.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.check.checkEmail({
    accessKey: "YOUR_ACCESS_KEY",
    email: "support@mailboxlayer.com",
    smtp: Smtp._1,
    catchAll: CatchAll._0,
    format: Format._0,
    callback: "myCallback",
  });
  // TODO: Handle 'response' of type CheckResponse
} catch (err) {
  // TODO: Handle 'err' of type Check.CheckEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.check
  .checkEmail({
    accessKey: "YOUR_ACCESS_KEY",
    email: "support@mailboxlayer.com",
    smtp: Smtp._1,
    catchAll: CatchAll._0,
    format: Format._0,
    callback: "myCallback",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckResponse
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
| <code>accessKey</code> | <code>string</code> | Mailboxlayer API Access Key (required for all requests). |
| <code>email</code> | <code>string</code> | Email address to validate (single validation). |
| <code>smtp?</code> | <code>[Smtp](src/models/smtp.ts)</code> | Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may speed up responses but disables the `smtp_check` verdict. |
| <code>catchAll?</code> | <code>[CatchAll](src/models/catch-all.ts)</code> | Enable catch-all mailbox detection by setting `catch_all=1`. Disabled by default because check is heavier and may increase response time. If not requested, the `catch_all` response value will typically be `null`. Some plans restrict catch-all detection. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Set to 1 for human-prettified JSON output (useful for debugging; increases payload size). |
| <code>callback?</code> | <code>string</code> | JSONP callback function name; wrapper will be returned if specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.check.checkEmail(request)`

- **OnSuccess**: <code>[CheckResponse](src/models/unions/check-response.ts)</code>
- **OnError**: throws <code>[Check.CheckEmailError](src/resources/check.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.check.checkEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckResponse, Check.CheckEmailError&gt;</code>, with `result.value` of type <code>[CheckResponse](src/models/unions/check-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MailboxlayerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

