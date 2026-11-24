# Reference

> Source: [SaplingClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>saplingAccountStatus(request?: Account.SaplingAccountStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AccountStatusResponse, Account.SaplingAccountStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why (`blocked_reason`) and for how long (`retry_after`). Works even when the key is blocked. The same handler is exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingAccountStatus();
  // TODO: Handle 'response' of type ApiV1AccountStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingAccountStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingAccountStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AccountStatusResponse
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
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingAccountStatus(request)`

- **OnSuccess**: <code>[ApiV1AccountStatusResponse](src/models/api-v1-account-status-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingAccountStatusError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingAccountStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AccountStatusResponse, Account.SaplingAccountStatusError&gt;</code>, with `result.value` of type <code>[ApiV1AccountStatusResponse](src/models/api-v1-account-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAccountStatusPost(request?: Account.SaplingAccountStatusPostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AccountStatusResponse, Account.SaplingAccountStatusPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON `key` body. Identical behavior and response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingAccountStatusPost();
  // TODO: Handle 'response' of type ApiV1AccountStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingAccountStatusPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingAccountStatusPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AccountStatusResponse
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
| <code>body?</code> | <code>[ApiV1AccountStatusRequest](src/models/api-v1-account-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingAccountStatusPost(request)`

- **OnSuccess**: <code>[ApiV1AccountStatusResponse](src/models/api-v1-account-status-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingAccountStatusPostError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingAccountStatusPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AccountStatusResponse, Account.SaplingAccountStatusPostError&gt;</code>, with `result.value` of type <code>[ApiV1AccountStatusResponse](src/models/api-v1-account-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingApiEndpointUsage(request: Account.SaplingApiEndpointUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportingApiEndpointUsageResponse, Account.SaplingApiEndpointUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingApiEndpointUsage({ body: {} });
  // TODO: Handle 'response' of type ApiV1ReportingApiEndpointUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingApiEndpointUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingApiEndpointUsage({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportingApiEndpointUsageResponse
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
| <code>body</code> | <code>[ApiV1ReportingApiEndpointUsageRequest](src/models/api-v1-reporting-api-endpoint-usage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingApiEndpointUsage(request)`

- **OnSuccess**: <code>[ApiV1ReportingApiEndpointUsageResponse](src/models/api-v1-reporting-api-endpoint-usage-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingApiEndpointUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingApiEndpointUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportingApiEndpointUsageResponse, Account.SaplingApiEndpointUsageError&gt;</code>, with `result.value` of type <code>[ApiV1ReportingApiEndpointUsageResponse](src/models/api-v1-reporting-api-endpoint-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingApiQuotaUsage(request: Account.SaplingApiQuotaUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportingApiQuotaUsageResponse, Account.SaplingApiQuotaUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may be `{}`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingApiQuotaUsage({ body: {} });
  // TODO: Handle 'response' of type ApiV1ReportingApiQuotaUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingApiQuotaUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingApiQuotaUsage({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportingApiQuotaUsageResponse
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
| <code>body</code> | <code>[ApiV1ReportingApiQuotaUsageRequest](src/models/api-v1-reporting-api-quota-usage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingApiQuotaUsage(request)`

- **OnSuccess**: <code>[ApiV1ReportingApiQuotaUsageResponse](src/models/api-v1-reporting-api-quota-usage-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingApiQuotaUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingApiQuotaUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportingApiQuotaUsageResponse, Account.SaplingApiQuotaUsageError&gt;</code>, with `result.value` of type <code>[ApiV1ReportingApiQuotaUsageResponse](src/models/api-v1-reporting-api-quota-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingApiUsage(request?: Account.SaplingApiUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportingApiUsageResponse, Account.SaplingApiUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is optional.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingApiUsage();
  // TODO: Handle 'response' of type ApiV1ReportingApiUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingApiUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingApiUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportingApiUsageResponse
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
| <code>body?</code> | <code>[ApiV1ReportingApiUsageRequest](src/models/api-v1-reporting-api-usage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingApiUsage(request)`

- **OnSuccess**: <code>[ApiV1ReportingApiUsageResponse](src/models/api-v1-reporting-api-usage-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingApiUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingApiUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportingApiUsageResponse, Account.SaplingApiUsageError&gt;</code>, with `result.value` of type <code>[ApiV1ReportingApiUsageResponse](src/models/api-v1-reporting-api-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingApiUserActivity(request: Account.SaplingApiUserActivityRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ReportingApiUserActivityResponse, Account.SaplingApiUserActivityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days. Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty `{}` body with 400); the window defaults to the last 6 days when a field is omitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.saplingApiUserActivity({ body: {} });
  // TODO: Handle 'response' of type ApiV1ReportingApiUserActivityResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.SaplingApiUserActivityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.saplingApiUserActivity({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ReportingApiUserActivityResponse
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
| <code>body</code> | <code>[ApiV1ReportingApiUserActivityRequest](src/models/api-v1-reporting-api-user-activity-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.saplingApiUserActivity(request)`

- **OnSuccess**: <code>[ApiV1ReportingApiUserActivityResponse](src/models/api-v1-reporting-api-user-activity-response.ts)</code>
- **OnError**: throws <code>[Account.SaplingApiUserActivityError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.saplingApiUserActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ReportingApiUserActivityResponse, Account.SaplingApiUserActivityError&gt;</code>, with `result.value` of type <code>[ApiV1ReportingApiUserActivityResponse](src/models/api-v1-reporting-api-user-activity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Analysis

> Source: [Analysis](src/resources/analysis.ts)

<details>
<summary><code>saplingClassify(request: Analysis.SaplingClassifyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ClassifyResponse, Analysis.SaplingClassifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets, anything — without training data. Returns label (the best match, always one of your labels), labels (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1 applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name, description} objects — a short description per label sharpens borderline decisions. Use context to say what the texts are (e.g. "support tickets for a billing product"). 2-20 labels.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingClassify({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ClassifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingClassifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingClassify({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ClassifyResponse
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
| <code>body</code> | <code>[ApiV1ClassifyRequest2](src/models/unions/api-v1-classify-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingClassify(request)`

- **OnSuccess**: <code>[ApiV1ClassifyResponse](src/models/api-v1-classify-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingClassifyError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingClassify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ClassifyResponse, Analysis.SaplingClassifyError&gt;</code>, with `result.value` of type <code>[ApiV1ClassifyResponse](src/models/api-v1-classify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDeleteStyleRuleset(request?: Analysis.SaplingDeleteStyleRulesetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StyleguideRulesetsResponse, Analysis.SaplingDeleteStyleRulesetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a saved rule set by name. The name may be sent as a query parameter or as `name` in a JSON body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingDeleteStyleRuleset();
  // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingDeleteStyleRulesetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingDeleteStyleRuleset().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StyleguideRulesetsResponse
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
| <code>name?</code> | <code>string</code> | Rule set name (alternatively in the body). |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>body?</code> | <code>[ApiV1StyleguideRulesetsRequest](src/models/api-v1-styleguide-rulesets-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingDeleteStyleRuleset(request)`

- **OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse](src/models/api-v1-styleguide-rulesets-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingDeleteStyleRulesetError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingDeleteStyleRuleset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StyleguideRulesetsResponse, Analysis.SaplingDeleteStyleRulesetError&gt;</code>, with `result.value` of type <code>[ApiV1StyleguideRulesetsResponse](src/models/api-v1-styleguide-rulesets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingExtract(request: Analysis.SaplingExtractRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ExtractResponse, Analysis.SaplingExtractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value} map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use context to say what the document is. 1-20 fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingExtract({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ExtractResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingExtractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingExtract({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ExtractResponse
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
| <code>body</code> | <code>[ApiV1ExtractRequest2](src/models/unions/api-v1-extract-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingExtract(request)`

- **OnSuccess**: <code>[ApiV1ExtractResponse](src/models/api-v1-extract-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingExtractError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingExtract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ExtractResponse, Analysis.SaplingExtractError&gt;</code>, with `result.value` of type <code>[ApiV1ExtractResponse](src/models/api-v1-extract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingExtractFile(request: Analysis.SaplingExtractFileRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FileExtractResponse, Analysis.SaplingExtractFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000 characters is not read; the response `document` object reports `truncated`. Billed like /api/v1/extract on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingExtractFile({
    file: new Uint8Array(),
    jsonParams: new Uint8Array(),
  });
  // TODO: Handle 'response' of type ApiV1FileExtractResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingExtractFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingExtractFile({ file: new Uint8Array(), jsonParams: new Uint8Array() })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FileExtractResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams</code> | <code>FileInput</code> | JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key": "<API key>", "return_usage": true}. `fields` (required) and `context` take the same values as on /api/v1/extract. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingExtractFile(request)`

- **OnSuccess**: <code>[ApiV1FileExtractResponse](src/models/api-v1-file-extract-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingExtractFileError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingExtractFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FileExtractResponse, Analysis.SaplingExtractFileError&gt;</code>, with `result.value` of type <code>[ApiV1FileExtractResponse](src/models/api-v1-file-extract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingInclusive(request: Analysis.SaplingInclusiveRequest, options?: RequestOptions): ApiPromise&lt;ApiV1InclusiveResponse, Analysis.SaplingInclusiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low / medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it directly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingInclusive({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1InclusiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingInclusiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingInclusive({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1InclusiveResponse
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
| <code>body</code> | <code>[ApiV1InclusiveRequest2](src/models/unions/api-v1-inclusive-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingInclusive(request)`

- **OnSuccess**: <code>[ApiV1InclusiveResponse](src/models/api-v1-inclusive-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingInclusiveError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingInclusive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1InclusiveResponse, Analysis.SaplingInclusiveError&gt;</code>, with `result.value` of type <code>[ApiV1InclusiveResponse](src/models/api-v1-inclusive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingListStyleRulesets(request?: Analysis.SaplingListStyleRulesetsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StyleguideRulesetsResponse1, Analysis.SaplingListStyleRulesetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rule sets saved for this account (or the key's team), usable by name via the `ruleset` option of /api/v1/styleguide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingListStyleRulesets();
  // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingListStyleRulesetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingListStyleRulesets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StyleguideRulesetsResponse1
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
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingListStyleRulesets(request)`

- **OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse1](src/models/api-v1-styleguide-rulesets-response1.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingListStyleRulesetsError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingListStyleRulesets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StyleguideRulesetsResponse1, Analysis.SaplingListStyleRulesetsError&gt;</code>, with `result.value` of type <code>[ApiV1StyleguideRulesetsResponse1](src/models/api-v1-styleguide-rulesets-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingQuality(request: Analysis.SaplingQualityRequest, options?: RequestOptions): ApiPromise&lt;ApiV1QualityResponse, Analysis.SaplingQualityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric: overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate than the plain score.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingQuality({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1QualityResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingQualityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingQuality({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1QualityResponse
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
| <code>body</code> | <code>[ApiV1QualityRequest2](src/models/unions/api-v1-quality-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingQuality(request)`

- **OnSuccess**: <code>[ApiV1QualityResponse](src/models/api-v1-quality-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingQualityError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingQuality(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1QualityResponse, Analysis.SaplingQualityError&gt;</code>, with `result.value` of type <code>[ApiV1QualityResponse](src/models/api-v1-quality-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingReadabilityStatistics(request: Analysis.SaplingReadabilityStatisticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StatisticsResponse, Analysis.SaplingReadabilityStatisticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts of characters, words, and sentences.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingReadabilityStatistics({
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1StatisticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingReadabilityStatisticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingReadabilityStatistics({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StatisticsResponse
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
| <code>body</code> | <code>[ApiV1StatisticsRequest](src/models/api-v1-statistics-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingReadabilityStatistics(request)`

- **OnSuccess**: <code>[ApiV1StatisticsResponse](src/models/api-v1-statistics-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingReadabilityStatisticsError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingReadabilityStatistics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StatisticsResponse, Analysis.SaplingReadabilityStatisticsError&gt;</code>, with `result.value` of type <code>[ApiV1StatisticsResponse](src/models/api-v1-statistics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSaveStyleRuleset(request: Analysis.SaplingSaveStyleRulesetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StyleguideRulesetsResponse2, Analysis.SaplingSaveStyleRulesetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingSaveStyleRuleset({
    body: { name: "some example string", rules: ["some example string"] },
  });
  // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingSaveStyleRulesetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingSaveStyleRuleset({ body: { name: "some example string", rules: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StyleguideRulesetsResponse2
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
| <code>body</code> | <code>[ApiV1StyleguideRulesetsRequest1](src/models/api-v1-styleguide-rulesets-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingSaveStyleRuleset(request)`

- **OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse2](src/models/api-v1-styleguide-rulesets-response2.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingSaveStyleRulesetError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingSaveStyleRuleset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StyleguideRulesetsResponse2, Analysis.SaplingSaveStyleRulesetError&gt;</code>, with `result.value` of type <code>[ApiV1StyleguideRulesetsResponse2](src/models/api-v1-styleguide-rulesets-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSentiment(request: Analysis.SaplingSentimentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SentimentResponse1, Analysis.SaplingSentimentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment with confidence scores.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingSentiment({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SentimentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingSentimentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingSentiment({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SentimentResponse1
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
| <code>body</code> | <code>[ApiV1SentimentRequest](src/models/api-v1-sentiment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingSentiment(request)`

- **OnSuccess**: <code>[ApiV1SentimentResponse1](src/models/unions/api-v1-sentiment-response1.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingSentimentError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SentimentResponse1, Analysis.SaplingSentimentError&gt;</code>, with `result.value` of type <code>[ApiV1SentimentResponse1](src/models/unions/api-v1-sentiment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSeo(request: Analysis.SaplingSeoRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SeoResponse, Analysis.SaplingSeoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs, reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first 100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for 120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability formulas; unsupported languages get null readability.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingSeo({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SeoResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingSeoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingSeo({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SeoResponse
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
| <code>body</code> | <code>[ApiV1SeoRequest](src/models/api-v1-seo-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingSeo(request)`

- **OnSuccess**: <code>[ApiV1SeoResponse](src/models/api-v1-seo-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingSeoError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingSeo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SeoResponse, Analysis.SaplingSeoError&gt;</code>, with `result.value` of type <code>[ApiV1SeoResponse](src/models/api-v1-seo-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSimilarTerms(request: Analysis.SaplingSimilarTermsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ThesaurusResponse, Analysis.SaplingSimilarTermsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingSimilarTerms({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ThesaurusResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingSimilarTermsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingSimilarTerms({ body: { query: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ThesaurusResponse
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
| <code>body</code> | <code>[ApiV1ThesaurusRequest](src/models/api-v1-thesaurus-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingSimilarTerms(request)`

- **OnSuccess**: <code>[ApiV1ThesaurusResponse](src/models/api-v1-thesaurus-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingSimilarTermsError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingSimilarTerms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ThesaurusResponse, Analysis.SaplingSimilarTermsError&gt;</code>, with `result.value` of type <code>[ApiV1ThesaurusResponse](src/models/api-v1-thesaurus-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingStyleguide(request: Analysis.SaplingStyleguideRequest, options?: RequestOptions): ApiPromise&lt;ApiV1StyleguideResponse, Analysis.SaplingStyleguideError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations list means the text complies. The text is checked as submitted (markup included), so offsets always index it directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingStyleguide({
    body: { rules: ["some example string"], text: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1StyleguideResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingStyleguideError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis
  .saplingStyleguide({ body: { rules: ["some example string"], text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1StyleguideResponse
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
| <code>body</code> | <code>[ApiV1StyleguideRequest4](src/models/unions/api-v1-styleguide-request4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingStyleguide(request)`

- **OnSuccess**: <code>[ApiV1StyleguideResponse](src/models/api-v1-styleguide-response.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingStyleguideError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingStyleguide(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1StyleguideResponse, Analysis.SaplingStyleguideError&gt;</code>, with `result.value` of type <code>[ApiV1StyleguideResponse](src/models/api-v1-styleguide-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingTone(request: Analysis.SaplingToneRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ToneResponse1, Analysis.SaplingToneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and per-sentence tone labels with confidence scores.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.saplingTone({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ToneResponse1
} catch (err) {
  // TODO: Handle 'err' of type Analysis.SaplingToneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.saplingTone({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ToneResponse1
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
| <code>body</code> | <code>[ApiV1ToneRequest](src/models/api-v1-tone-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.saplingTone(request)`

- **OnSuccess**: <code>[ApiV1ToneResponse1](src/models/unions/api-v1-tone-response1.ts)</code>
- **OnError**: throws <code>[Analysis.SaplingToneError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.saplingTone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ToneResponse1, Analysis.SaplingToneError&gt;</code>, with `result.value` of type <code>[ApiV1ToneResponse1](src/models/unions/api-v1-tone-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Detection

> Source: [Detection](src/resources/detection.ts)

<details>
<summary><code>saplingAiDetect(request: Detection.SaplingAiDetectRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AidetectResponse, Detection.SaplingAiDetectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and 1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages), low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese, Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the non-English languages is scored by a multilingual model, and the response's version field names the model that scored the text. Other languages are scored by the English model and are less reliable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingAiDetect({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1AidetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingAiDetectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection
  .saplingAiDetect({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AidetectResponse
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
| <code>body</code> | <code>[ApiV1AidetectRequest2](src/models/unions/api-v1-aidetect-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingAiDetect(request)`

- **OnSuccess**: <code>[ApiV1AidetectResponse](src/models/api-v1-aidetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingAiDetectError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingAiDetect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AidetectResponse, Detection.SaplingAiDetectError&gt;</code>, with `result.value` of type <code>[ApiV1AidetectResponse](src/models/api-v1-aidetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAiDetectUrl(request: Detection.SaplingAiDetectUrlRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UrlAidetectResponse, Detection.SaplingAiDetectUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 = likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default, and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an error, not a score. For long pages set sent_scores=false to keep the result small.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingAiDetectUrl({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type ApiV1UrlAidetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingAiDetectUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection
  .saplingAiDetectUrl({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UrlAidetectResponse
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
| <code>body</code> | <code>[ApiV1UrlAidetectRequest](src/models/api-v1-url-aidetect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingAiDetectUrl(request)`

- **OnSuccess**: <code>[ApiV1UrlAidetectResponse](src/models/api-v1-url-aidetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingAiDetectUrlError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingAiDetectUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UrlAidetectResponse, Detection.SaplingAiDetectUrlError&gt;</code>, with `result.value` of type <code>[ApiV1UrlAidetectResponse](src/models/api-v1-url-aidetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAidetectDocx(request: Detection.SaplingAidetectDocxRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DocxAidetectResponse, Detection.SaplingAidetectDocxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingAidetectDocx({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1DocxAidetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingAidetectDocxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection.saplingAidetectDocx({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DocxAidetectResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingAidetectDocx(request)`

- **OnSuccess**: <code>[ApiV1DocxAidetectResponse](src/models/api-v1-docx-aidetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingAidetectDocxError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingAidetectDocx(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DocxAidetectResponse, Detection.SaplingAidetectDocxError&gt;</code>, with `result.value` of type <code>[ApiV1DocxAidetectResponse](src/models/api-v1-docx-aidetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAidetectFile(request: Detection.SaplingAidetectFileRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FileAidetectResponse, Detection.SaplingAidetectFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB); its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is flattened to its visible text. Billed like /api/v1/aidetect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingAidetectFile({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1FileAidetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingAidetectFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection.saplingAidetectFile({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FileAidetectResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no copy of the extracted text (no result cache or certificate hash, usage logged without text), as on /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report (and report_skip_reason when none was made), as on /api/v1/aidetect. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingAidetectFile(request)`

- **OnSuccess**: <code>[ApiV1FileAidetectResponse](src/models/api-v1-file-aidetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingAidetectFileError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingAidetectFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FileAidetectResponse, Detection.SaplingAidetectFileError&gt;</code>, with `result.value` of type <code>[ApiV1FileAidetectResponse](src/models/api-v1-file-aidetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAidetectPdf(request: Detection.SaplingAidetectPdfRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PdfAidetectResponse, Detection.SaplingAidetectPdfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingAidetectPdf({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1PdfAidetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingAidetectPdfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection.saplingAidetectPdf({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PdfAidetectResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingAidetectPdf(request)`

- **OnSuccess**: <code>[ApiV1PdfAidetectResponse](src/models/api-v1-pdf-aidetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingAidetectPdfError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingAidetectPdf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PdfAidetectResponse, Detection.SaplingAidetectPdfError&gt;</code>, with `result.value` of type <code>[ApiV1PdfAidetectResponse](src/models/api-v1-pdf-aidetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDetectLanguage(request: Detection.SaplingDetectLanguageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1LangdetectResponse, Detection.SaplingDetectLanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK" are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingDetectLanguage({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1LangdetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingDetectLanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection
  .saplingDetectLanguage({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1LangdetectResponse
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
| <code>body</code> | <code>[ApiV1LangdetectRequest2](src/models/unions/api-v1-langdetect-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingDetectLanguage(request)`

- **OnSuccess**: <code>[ApiV1LangdetectResponse](src/models/api-v1-langdetect-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingDetectLanguageError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingDetectLanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1LangdetectResponse, Detection.SaplingDetectLanguageError&gt;</code>, with `result.value` of type <code>[ApiV1LangdetectResponse](src/models/api-v1-langdetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDetectPii(request: Detection.SaplingDetectPiiRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PiiResponse, Detection.SaplingDetectPiiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex + checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is then capped at 10000 characters).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingDetectPii({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1PiiResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingDetectPiiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection
  .saplingDetectPii({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PiiResponse
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
| <code>body</code> | <code>[ApiV1PiiRequest](src/models/api-v1-pii-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingDetectPii(request)`

- **OnSuccess**: <code>[ApiV1PiiResponse](src/models/api-v1-pii-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingDetectPiiError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingDetectPii(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PiiResponse, Detection.SaplingDetectPiiError&gt;</code>, with `result.value` of type <code>[ApiV1PiiResponse](src/models/api-v1-pii-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingNer(request: Detection.SaplingNerRequest, options?: RequestOptions): ApiPromise&lt;ApiV1NerResponse, Detection.SaplingNerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages, quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails, cards, IBANs...), this one finds names and real-world references.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingNer({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1NerResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingNerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection.saplingNer({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1NerResponse
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
| <code>body</code> | <code>[ApiV1NerRequest2](src/models/unions/api-v1-ner-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingNer(request)`

- **OnSuccess**: <code>[ApiV1NerResponse](src/models/api-v1-ner-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingNerError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingNer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1NerResponse, Detection.SaplingNerError&gt;</code>, with `result.value` of type <code>[ApiV1NerResponse](src/models/api-v1-ner-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingProfanity(request: Detection.SaplingProfanityRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ProfanityResponse, Detection.SaplingProfanityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split text on whitespace and label each token 1 (profane) or 0. Not billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingProfanity({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ProfanityResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingProfanityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection
  .saplingProfanity({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ProfanityResponse
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
| <code>body</code> | <code>[ApiV1ProfanityRequest](src/models/api-v1-profanity-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingProfanity(request)`

- **OnSuccess**: <code>[ApiV1ProfanityResponse](src/models/api-v1-profanity-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingProfanityError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingProfanity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ProfanityResponse, Detection.SaplingProfanityError&gt;</code>, with `result.value` of type <code>[ApiV1ProfanityResponse](src/models/api-v1-profanity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSafety(request: Detection.SaplingSafetyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SafetyResponse, Detection.SaplingSafetyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech, self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting the whole text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.detection.saplingSafety({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SafetyResponse
} catch (err) {
  // TODO: Handle 'err' of type Detection.SaplingSafetyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.detection.saplingSafety({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SafetyResponse
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
| <code>body</code> | <code>[ApiV1SafetyRequest2](src/models/unions/api-v1-safety-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.detection.saplingSafety(request)`

- **OnSuccess**: <code>[ApiV1SafetyResponse](src/models/api-v1-safety-response.ts)</code>
- **OnError**: throws <code>[Detection.SaplingSafetyError](src/resources/detection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.detection.saplingSafety(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SafetyResponse, Detection.SaplingSafetyError&gt;</code>, with `result.value` of type <code>[ApiV1SafetyResponse](src/models/api-v1-safety-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](src/resources/files.ts)

<details>
<summary><code>saplingChunkHtml(request: Files.SaplingChunkHtmlRequest, options?: RequestOptions): ApiPromise&lt;ApiV1IngestChunkHtmlResponse, Files.SaplingChunkHtmlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Like chunk_text, for HTML input. Not billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.saplingChunkHtml({
    body: { html: "some example string", maxLength: 1 },
  });
  // TODO: Handle 'response' of type ApiV1IngestChunkHtmlResponse
} catch (err) {
  // TODO: Handle 'err' of type Files.SaplingChunkHtmlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files
  .saplingChunkHtml({ body: { html: "some example string", maxLength: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1IngestChunkHtmlResponse
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
| <code>body</code> | <code>[ApiV1IngestChunkHtmlRequest](src/models/api-v1-ingest-chunk-html-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.saplingChunkHtml(request)`

- **OnSuccess**: <code>[ApiV1IngestChunkHtmlResponse](src/models/api-v1-ingest-chunk-html-response.ts)</code>
- **OnError**: throws <code>[Files.SaplingChunkHtmlError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.saplingChunkHtml(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1IngestChunkHtmlResponse, Files.SaplingChunkHtmlError&gt;</code>, with `result.value` of type <code>[ApiV1IngestChunkHtmlResponse](src/models/api-v1-ingest-chunk-html-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingChunkText(request: Files.SaplingChunkTextRequest, options?: RequestOptions): ApiPromise&lt;ApiV1IngestChunkTextResponse, Files.SaplingChunkTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split long text into overlapping chunks no longer than `max_length`, preferring sentence and whitespace boundaries. Not billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.saplingChunkText({
    body: { maxLength: 1, text: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1IngestChunkTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Files.SaplingChunkTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files
  .saplingChunkText({ body: { maxLength: 1, text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1IngestChunkTextResponse
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
| <code>body</code> | <code>[ApiV1IngestChunkTextRequest](src/models/api-v1-ingest-chunk-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.saplingChunkText(request)`

- **OnSuccess**: <code>[ApiV1IngestChunkTextResponse](src/models/api-v1-ingest-chunk-text-response.ts)</code>
- **OnError**: throws <code>[Files.SaplingChunkTextError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.saplingChunkText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1IngestChunkTextResponse, Files.SaplingChunkTextError&gt;</code>, with `result.value` of type <code>[ApiV1IngestChunkTextResponse](src/models/api-v1-ingest-chunk-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDocxToText(request: Files.SaplingDocxToTextRequest, options?: RequestOptions): ApiPromise&lt;ApiV1IngestDocxToTextResponse, Files.SaplingDocxToTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a .docx and receive its text, tables included in document order. Not billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.saplingDocxToText({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1IngestDocxToTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Files.SaplingDocxToTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.saplingDocxToText({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1IngestDocxToTextResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.saplingDocxToText(request)`

- **OnSuccess**: <code>[ApiV1IngestDocxToTextResponse](src/models/api-v1-ingest-docx-to-text-response.ts)</code>
- **OnError**: throws <code>[Files.SaplingDocxToTextError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.saplingDocxToText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1IngestDocxToTextResponse, Files.SaplingDocxToTextError&gt;</code>, with `result.value` of type <code>[ApiV1IngestDocxToTextResponse](src/models/api-v1-ingest-docx-to-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingPdfToText(request: Files.SaplingPdfToTextRequest, options?: RequestOptions): ApiPromise&lt;ApiV1IngestPdfToTextResponse, Files.SaplingPdfToTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are decrypted transparently; image-only PDFs answer 400. Not billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.saplingPdfToText({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1IngestPdfToTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Files.SaplingPdfToTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.saplingPdfToText({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1IngestPdfToTextResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.saplingPdfToText(request)`

- **OnSuccess**: <code>[ApiV1IngestPdfToTextResponse](src/models/api-v1-ingest-pdf-to-text-response.ts)</code>
- **OnError**: throws <code>[Files.SaplingPdfToTextError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.saplingPdfToText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1IngestPdfToTextResponse, Files.SaplingPdfToTextError&gt;</code>, with `result.value` of type <code>[ApiV1IngestPdfToTextResponse](src/models/api-v1-ingest-pdf-to-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Generation

> Source: [Generation](src/resources/generation.ts)

<details>
<summary><code>saplingAcceptCompletion(request: Generation.SaplingAcceptCompletionRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CompleteAcceptResponse, Generation.SaplingAcceptCompletionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user accepted an autocomplete suggestion. `context` must be exactly the `{query, completion}` object the completion hash was computed from — extra keys fail the hash check.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingAcceptCompletion({
    completionHash: "00000000-0000-0000-0000-000000000000",
    body: { context: { completion: "some example string", query: "some example string" } },
  });
  // TODO: Handle 'response' of type ApiV1CompleteAcceptResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingAcceptCompletionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingAcceptCompletion({
    completionHash: "00000000-0000-0000-0000-000000000000",
    body: { context: { completion: "some example string", query: "some example string" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CompleteAcceptResponse
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
| <code>completionHash</code> | <code>string</code> | The `hash` returned by /api/v1/complete. |
| <code>body</code> | <code>[ApiV1CompleteAcceptRequest](src/models/api-v1-complete-accept-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingAcceptCompletion(request)`

- **OnSuccess**: <code>[ApiV1CompleteAcceptResponse](src/models/api-v1-complete-accept-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingAcceptCompletionError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingAcceptCompletion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CompleteAcceptResponse, Generation.SaplingAcceptCompletionError&gt;</code>, with `result.value` of type <code>[ApiV1CompleteAcceptResponse](src/models/api-v1-complete-accept-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAutocomplete(request: Generation.SaplingAutocompleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CompleteResponse1, Generation.SaplingAutocompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200 characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete enabled; other keys get an explicit error back.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingAutocomplete({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type ApiV1CompleteResponse1
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingAutocompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingAutocomplete({ body: { query: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CompleteResponse1
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
| <code>body</code> | <code>[ApiV1CompleteRequest](src/models/api-v1-complete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingAutocomplete(request)`

- **OnSuccess**: <code>[ApiV1CompleteResponse1](src/models/unions/api-v1-complete-response1.ts)</code>
- **OnError**: throws <code>[Generation.SaplingAutocompleteError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingAutocomplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CompleteResponse1, Generation.SaplingAutocompleteError&gt;</code>, with `result.value` of type <code>[ApiV1CompleteResponse1](src/models/unions/api-v1-complete-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingParaphrase(request: Generation.SaplingParaphraseRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ParaphraseResponse, Generation.SaplingParaphraseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation, exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingParaphrase({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1ParaphraseResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingParaphraseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingParaphrase({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ParaphraseResponse
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
| <code>body</code> | <code>[ApiV1ParaphraseRequest](src/models/api-v1-paraphrase-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingParaphrase(request)`

- **OnSuccess**: <code>[ApiV1ParaphraseResponse](src/models/api-v1-paraphrase-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingParaphraseError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingParaphrase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ParaphraseResponse, Generation.SaplingParaphraseError&gt;</code>, with `result.value` of type <code>[ApiV1ParaphraseResponse](src/models/api-v1-paraphrase-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingRephrase(request: Generation.SaplingRephraseRequest, options?: RequestOptions): ApiPromise&lt;ApiV1RephraseResponse, Generation.SaplingRephraseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase"); num_results controls how many alternatives are returned (default 5).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingRephrase({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1RephraseResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingRephraseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingRephrase({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1RephraseResponse
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
| <code>body</code> | <code>[ApiV1RephraseRequest](src/models/api-v1-rephrase-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingRephrase(request)`

- **OnSuccess**: <code>[ApiV1RephraseResponse](src/models/api-v1-rephrase-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingRephraseError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingRephrase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1RephraseResponse, Generation.SaplingRephraseError&gt;</code>, with `result.value` of type <code>[ApiV1RephraseResponse](src/models/api-v1-rephrase-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSentenceSplit(request: Generation.SaplingSentenceSplitRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SentenceSplitResponse, Generation.SaplingSentenceSplitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingSentenceSplit({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SentenceSplitResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingSentenceSplitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingSentenceSplit({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SentenceSplitResponse
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
| <code>body</code> | <code>[ApiV1SentenceSplitRequest](src/models/api-v1-sentence-split-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingSentenceSplit(request)`

- **OnSuccess**: <code>[ApiV1SentenceSplitResponse](src/models/api-v1-sentence-split-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingSentenceSplitError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingSentenceSplit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SentenceSplitResponse, Generation.SaplingSentenceSplitError&gt;</code>, with `result.value` of type <code>[ApiV1SentenceSplitResponse](src/models/api-v1-sentence-split-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSimplify(request: Generation.SaplingSimplifyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SimplifyResponse, Generation.SaplingSimplifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rewrite a text in plain language at a target reading level, keeping all of its content, structure and language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable. Use preserve_terms for names or defined terms that must survive verbatim. Pairs with sapling_readability_statistics for scoring text first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingSimplify({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SimplifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingSimplifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingSimplify({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SimplifyResponse
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
| <code>body</code> | <code>[ApiV1SimplifyRequest2](src/models/unions/api-v1-simplify-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingSimplify(request)`

- **OnSuccess**: <code>[ApiV1SimplifyResponse](src/models/api-v1-simplify-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingSimplifyError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingSimplify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SimplifyResponse, Generation.SaplingSimplifyError&gt;</code>, with `result.value` of type <code>[ApiV1SimplifyResponse](src/models/api-v1-simplify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSummarize(request: Generation.SaplingSummarizeRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SummarizeResponse, Generation.SaplingSummarizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose `summary` plus a `key_points` list, sized by the optional `length` option.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingSummarize({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SummarizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingSummarizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingSummarize({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SummarizeResponse
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
| <code>body</code> | <code>[ApiV1SummarizeRequest2](src/models/unions/api-v1-summarize-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingSummarize(request)`

- **OnSuccess**: <code>[ApiV1SummarizeResponse](src/models/api-v1-summarize-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingSummarizeError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingSummarize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SummarizeResponse, Generation.SaplingSummarizeError&gt;</code>, with `result.value` of type <code>[ApiV1SummarizeResponse](src/models/api-v1-summarize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSummarizeFile(request: Generation.SaplingSummarizeFileRequest, options?: RequestOptions): ApiPromise&lt;ApiV1FileSummarizeResponse, Generation.SaplingSummarizeFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters is not read; the response `document` object reports `truncated`. Billed like /api/v1/summarize on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingSummarizeFile({ file: new Uint8Array() });
  // TODO: Handle 'response' of type ApiV1FileSummarizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingSummarizeFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation.saplingSummarizeFile({ file: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1FileSummarizeResponse
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
| <code>returnUsageQuery?</code> | <code>boolean</code> | -<br>**Default**: false |
| <code>key?</code> | <code>string</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>jsonParams?</code> | <code>FileInput</code> | Optional JSON object (send it as a file part or form field): {"length": "short" \| "medium" \| "long", "key": "<API key>", "return_usage": true}. `length` defaults to "medium", as on /api/v1/summarize. |
| <code>returnUsage?</code> | <code>boolean</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingSummarizeFile(request)`

- **OnSuccess**: <code>[ApiV1FileSummarizeResponse](src/models/api-v1-file-summarize-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingSummarizeFileError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingSummarizeFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1FileSummarizeResponse, Generation.SaplingSummarizeFileError&gt;</code>, with `result.value` of type <code>[ApiV1FileSummarizeResponse](src/models/api-v1-file-summarize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingTranslate(request: Generation.SaplingTranslateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TranslateResponse, Generation.SaplingTranslateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate a text into a target language with an LLM. Returns translation, the detected source language (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks a formal or informal register where the target language distinguishes them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.generation.saplingTranslate({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1TranslateResponse
} catch (err) {
  // TODO: Handle 'err' of type Generation.SaplingTranslateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.generation
  .saplingTranslate({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TranslateResponse
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
| <code>body</code> | <code>[ApiV1TranslateRequest2](src/models/unions/api-v1-translate-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.generation.saplingTranslate(request)`

- **OnSuccess**: <code>[ApiV1TranslateResponse](src/models/api-v1-translate-response.ts)</code>
- **OnError**: throws <code>[Generation.SaplingTranslateError](src/resources/generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.generation.saplingTranslate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TranslateResponse, Generation.SaplingTranslateError&gt;</code>, with `result.value` of type <code>[ApiV1TranslateResponse](src/models/api-v1-translate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Proofreading

> Source: [Proofreading](src/resources/proofreading.ts)

<details>
<summary><code>saplingAcceptEdit(request: Proofreading.SaplingAcceptEditRequest, options?: RequestOptions): ApiPromise&lt;ApiV1EditsAcceptResponse, Proofreading.SaplingAcceptEditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves the suggestions shown to that user. The body must be a non-empty JSON object; include `user_id` or the feedback is not recorded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingAcceptEdit({
    editHash: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ApiV1EditsAcceptResponse
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingAcceptEditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingAcceptEdit({ editHash: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EditsAcceptResponse
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
| <code>editHash</code> | <code>string</code> | The edit's `id` from /edits. |
| <code>body</code> | <code>[ApiV1EditsAcceptRequest](src/models/api-v1-edits-accept-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingAcceptEdit(request)`

- **OnSuccess**: <code>[ApiV1EditsAcceptResponse](src/models/api-v1-edits-accept-response.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingAcceptEditError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingAcceptEdit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EditsAcceptResponse, Proofreading.SaplingAcceptEditError&gt;</code>, with `result.value` of type <code>[ApiV1EditsAcceptResponse](src/models/api-v1-edits-accept-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAddCustomFilter(request: Proofreading.SaplingAddCustomFilterRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CustomFilterResponse1, Proofreading.SaplingAddCustomFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suppress suggestions that change `inp` into `out`. Note the request keys are `inp`/`out` while responses use `input`/`output`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingAddCustomFilter({ body: {} });
  // TODO: Handle 'response' of type ApiV1CustomFilterResponse1
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingAddCustomFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading.saplingAddCustomFilter({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CustomFilterResponse1
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
| <code>body</code> | <code>[ApiV1CustomFilterRequest](src/models/api-v1-custom-filter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingAddCustomFilter(request)`

- **OnSuccess**: <code>[ApiV1CustomFilterResponse1](src/models/api-v1-custom-filter-response1.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingAddCustomFilterError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingAddCustomFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CustomFilterResponse1, Proofreading.SaplingAddCustomFilterError&gt;</code>, with `result.value` of type <code>[ApiV1CustomFilterResponse1](src/models/api-v1-custom-filter-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAddCustomMapping(request: Proofreading.SaplingAddCustomMappingRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CustomMappingResponse1, Proofreading.SaplingAddCustomMappingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suggest `mapping` whenever `entry` appears in checked text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingAddCustomMapping({
    body: { entry: "some example string", mapping: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1CustomMappingResponse1
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingAddCustomMappingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingAddCustomMapping({ body: { entry: "some example string", mapping: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CustomMappingResponse1
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
| <code>body</code> | <code>[ApiV1CustomMappingRequest](src/models/api-v1-custom-mapping-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingAddCustomMapping(request)`

- **OnSuccess**: <code>[ApiV1CustomMappingResponse1](src/models/api-v1-custom-mapping-response1.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingAddCustomMappingError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingAddCustomMapping(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CustomMappingResponse1, Proofreading.SaplingAddCustomMappingError&gt;</code>, with `result.value` of type <code>[ApiV1CustomMappingResponse1](src/models/api-v1-custom-mapping-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingAddDictionaryEntry(request: Proofreading.SaplingAddDictionaryEntryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DictionaryResponse1, Proofreading.SaplingAddDictionaryEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a word the grammar and spelling checkers should accept.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingAddDictionaryEntry({
    body: { entry: "some example string" },
  });
  // TODO: Handle 'response' of type ApiV1DictionaryResponse1
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingAddDictionaryEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingAddDictionaryEntry({ body: { entry: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DictionaryResponse1
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
| <code>body</code> | <code>[ApiV1DictionaryRequest](src/models/api-v1-dictionary-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingAddDictionaryEntry(request)`

- **OnSuccess**: <code>[ApiV1DictionaryResponse1](src/models/api-v1-dictionary-response1.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingAddDictionaryEntryError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingAddDictionaryEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DictionaryResponse1, Proofreading.SaplingAddDictionaryEntryError&gt;</code>, with `result.value` of type <code>[ApiV1DictionaryResponse1](src/models/api-v1-dictionary-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDeleteCustomFilter(request: Proofreading.SaplingDeleteCustomFilterRequest, options?: RequestOptions): ApiPromise&lt;undefined, Proofreading.SaplingDeleteCustomFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a filter by the `id` returned when listing or adding it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.proofreading.saplingDeleteCustomFilter({ filterId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingDeleteCustomFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingDeleteCustomFilter({ filterId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>filterId</code> | <code>string</code> | Custom filter id. |
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingDeleteCustomFilter(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Proofreading.SaplingDeleteCustomFilterError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingDeleteCustomFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Proofreading.SaplingDeleteCustomFilterError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDeleteCustomMapping(request: Proofreading.SaplingDeleteCustomMappingRequest, options?: RequestOptions): ApiPromise&lt;undefined, Proofreading.SaplingDeleteCustomMappingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a mapping by the `id` returned when listing or adding it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.proofreading.saplingDeleteCustomMapping({ mappingId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingDeleteCustomMappingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingDeleteCustomMapping({ mappingId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>mappingId</code> | <code>string</code> | Custom mapping id. |
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingDeleteCustomMapping(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Proofreading.SaplingDeleteCustomMappingError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingDeleteCustomMapping(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Proofreading.SaplingDeleteCustomMappingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingDeleteDictionaryEntry(request: Proofreading.SaplingDeleteDictionaryEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Proofreading.SaplingDeleteDictionaryEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an entry by the `id` returned when listing or adding it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.proofreading.saplingDeleteDictionaryEntry({ entryId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingDeleteDictionaryEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingDeleteDictionaryEntry({ entryId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>entryId</code> | <code>string</code> | Dictionary entry id. |
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingDeleteDictionaryEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Proofreading.SaplingDeleteDictionaryEntryError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingDeleteDictionaryEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Proofreading.SaplingDeleteDictionaryEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingGrammarCheck(request: Proofreading.SaplingGrammarCheckRequest, options?: RequestOptions): ApiPromise&lt;ApiV1EditsResponse1, Proofreading.SaplingGrammarCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive applied_text: the input with all suggested edits already applied (useful to return a corrected document in one call). Set include_error_categories=false to skip error classification and get only the corrections and offsets back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If the result carries a degraded object it is partial: some sentences may be missing some or all of their corrections (the edits returned are still valid); call again for a complete result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingGrammarCheck({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1EditsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingGrammarCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingGrammarCheck({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EditsResponse1
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
| <code>body</code> | <code>[ApiV1EditsRequest](src/models/api-v1-edits-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingGrammarCheck(request)`

- **OnSuccess**: <code>[ApiV1EditsResponse1](src/models/unions/api-v1-edits-response1.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingGrammarCheckError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingGrammarCheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EditsResponse1, Proofreading.SaplingGrammarCheckError&gt;</code>, with `result.value` of type <code>[ApiV1EditsResponse1](src/models/unions/api-v1-edits-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingListCustomFilters(request?: Proofreading.SaplingListCustomFiltersRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CustomFilterResponse, Proofreading.SaplingListCustomFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingListCustomFilters();
  // TODO: Handle 'response' of type ApiV1CustomFilterResponse
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingListCustomFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading.saplingListCustomFilters().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CustomFilterResponse
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
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingListCustomFilters(request)`

- **OnSuccess**: <code>[ApiV1CustomFilterResponse](src/models/api-v1-custom-filter-response.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingListCustomFiltersError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingListCustomFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CustomFilterResponse, Proofreading.SaplingListCustomFiltersError&gt;</code>, with `result.value` of type <code>[ApiV1CustomFilterResponse](src/models/api-v1-custom-filter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingListCustomMappings(request?: Proofreading.SaplingListCustomMappingsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CustomMappingResponse, Proofreading.SaplingListCustomMappingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingListCustomMappings();
  // TODO: Handle 'response' of type ApiV1CustomMappingResponse
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingListCustomMappingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading.saplingListCustomMappings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CustomMappingResponse
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
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingListCustomMappings(request)`

- **OnSuccess**: <code>[ApiV1CustomMappingResponse](src/models/api-v1-custom-mapping-response.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingListCustomMappingsError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingListCustomMappings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CustomMappingResponse, Proofreading.SaplingListCustomMappingsError&gt;</code>, with `result.value` of type <code>[ApiV1CustomMappingResponse](src/models/api-v1-custom-mapping-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingListDictionary(request?: Proofreading.SaplingListDictionaryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1DictionaryResponse[], Proofreading.SaplingListDictionaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted by entry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingListDictionary();
  // TODO: Handle 'response' of type ApiV1DictionaryResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingListDictionaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading.saplingListDictionary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1DictionaryResponse[]
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
| <code>returnUsage?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingListDictionary(request)`

- **OnSuccess**: <code>[ApiV1DictionaryResponse](src/models/api-v1-dictionary-response.ts)[]</code>
- **OnError**: throws <code>[Proofreading.SaplingListDictionaryError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingListDictionary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1DictionaryResponse[], Proofreading.SaplingListDictionaryError&gt;</code>, with `result.value` of type <code>[ApiV1DictionaryResponse](src/models/api-v1-dictionary-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingRejectEdit(request: Proofreading.SaplingRejectEditRequest, options?: RequestOptions): ApiPromise&lt;ApiV1EditsRejectResponse, Proofreading.SaplingRejectEditError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar suggestions are then suppressed for that user. The body must be a non-empty JSON object; include `user_id` or the feedback is not recorded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingRejectEdit({
    editHash: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type ApiV1EditsRejectResponse
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingRejectEditError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingRejectEdit({ editHash: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1EditsRejectResponse
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
| <code>editHash</code> | <code>string</code> | The edit's `id` from /edits. |
| <code>body</code> | <code>[ApiV1EditsRejectRequest](src/models/api-v1-edits-reject-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingRejectEdit(request)`

- **OnSuccess**: <code>[ApiV1EditsRejectResponse](src/models/api-v1-edits-reject-response.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingRejectEditError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingRejectEdit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1EditsRejectResponse, Proofreading.SaplingRejectEditError&gt;</code>, with `result.value` of type <code>[ApiV1EditsRejectResponse](src/models/api-v1-edits-reject-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingSpellcheck(request: Proofreading.SaplingSpellcheckRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SpellcheckResponse1, Proofreading.SaplingSpellcheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result carrying a degraded object is partial; call again for a complete result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.proofreading.saplingSpellcheck({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type ApiV1SpellcheckResponse1
} catch (err) {
  // TODO: Handle 'err' of type Proofreading.SaplingSpellcheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofreading
  .saplingSpellcheck({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SpellcheckResponse1
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
| <code>body</code> | <code>[ApiV1SpellcheckRequest](src/models/api-v1-spellcheck-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofreading.saplingSpellcheck(request)`

- **OnSuccess**: <code>[ApiV1SpellcheckResponse1](src/models/unions/api-v1-spellcheck-response1.ts)</code>
- **OnError**: throws <code>[Proofreading.SaplingSpellcheckError](src/resources/proofreading.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofreading.saplingSpellcheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SpellcheckResponse1, Proofreading.SaplingSpellcheckError&gt;</code>, with `result.value` of type <code>[ApiV1SpellcheckResponse1](src/models/unions/api-v1-spellcheck-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](src/resources/service.ts)

<details>
<summary><code>saplingLiveness(options?: RequestOptions): ApiPromise&lt;ApiV1LivenessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Answers 200 while the API process is up.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.saplingLiveness();
  // TODO: Handle 'response' of type ApiV1LivenessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.saplingLiveness().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1LivenessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.saplingLiveness()`

- **OnSuccess**: <code>[ApiV1LivenessResponse](src/models/api-v1-liveness-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.service.saplingLiveness().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1LivenessResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1LivenessResponse](src/models/api-v1-liveness-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saplingVersion(options?: RequestOptions): ApiPromise&lt;ApiV1VersionResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Release and build identifiers of the serving deployment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.saplingVersion();
  // TODO: Handle 'response' of type ApiV1VersionResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.saplingVersion().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1VersionResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.saplingVersion()`

- **OnSuccess**: <code>[ApiV1VersionResponse](src/models/api-v1-version-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.service.saplingVersion().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1VersionResponse, ApiError&gt;</code>, with `result.value` of type <code>[ApiV1VersionResponse](src/models/api-v1-version-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[SaplingError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

