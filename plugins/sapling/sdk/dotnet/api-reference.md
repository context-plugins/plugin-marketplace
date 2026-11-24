# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SaplingClient](src/Sapling/SaplingClient.cs)

## Account

> Source: [Account](src/Sapling/Api/Account.cs)

<details>
<summary><code>Task&lt;ApiV1AccountStatusResponse&gt; SaplingAccountStatus(SaplingAccountStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why (`blocked_reason`) and for how long (`retry_after`). Works even when the key is blocked. The same handler is exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingAccountStatus(new SaplingAccountStatusRequest());
    // TODO: Handle 'response' of type ApiV1AccountStatusResponse
}
catch (ApiException<SaplingAccountStatusError> ex)
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

<code>[SaplingAccountStatusRequest](src/Sapling/Requests/Account/SaplingAccountStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AccountStatusResponse](src/Sapling/Models/ApiV1AccountStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAccountStatusError](src/Sapling/Errors/SaplingAccountStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AccountStatusResponse&gt; SaplingAccountStatusPost(SaplingAccountStatusPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON `key` body. Identical behavior and response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingAccountStatusPost(new SaplingAccountStatusPostRequest());
    // TODO: Handle 'response' of type ApiV1AccountStatusResponse
}
catch (ApiException<SaplingAccountStatusPostError> ex)
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

<code>[SaplingAccountStatusPostRequest](src/Sapling/Requests/Account/SaplingAccountStatusPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AccountStatusResponse](src/Sapling/Models/ApiV1AccountStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAccountStatusPostError](src/Sapling/Errors/SaplingAccountStatusPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportingApiEndpointUsageResponse&gt; SaplingApiEndpointUsage(SaplingApiEndpointUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingApiEndpointUsage(new SaplingApiEndpointUsageRequest
    {
        Body = new ApiV1ReportingApiEndpointUsageRequest(),
    });
    // TODO: Handle 'response' of type ApiV1ReportingApiEndpointUsageResponse
}
catch (ApiException<SaplingApiEndpointUsageError> ex)
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

<code>[SaplingApiEndpointUsageRequest](src/Sapling/Requests/Account/SaplingApiEndpointUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportingApiEndpointUsageResponse](src/Sapling/Models/ApiV1ReportingApiEndpointUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingApiEndpointUsageError](src/Sapling/Errors/SaplingApiEndpointUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportingApiQuotaUsageResponse&gt; SaplingApiQuotaUsage(SaplingApiQuotaUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may be `{}`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingApiQuotaUsage(new SaplingApiQuotaUsageRequest
    {
        Body = new ApiV1ReportingApiQuotaUsageRequest(),
    });
    // TODO: Handle 'response' of type ApiV1ReportingApiQuotaUsageResponse
}
catch (ApiException<SaplingApiQuotaUsageError> ex)
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

<code>[SaplingApiQuotaUsageRequest](src/Sapling/Requests/Account/SaplingApiQuotaUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportingApiQuotaUsageResponse](src/Sapling/Models/ApiV1ReportingApiQuotaUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingApiQuotaUsageError](src/Sapling/Errors/SaplingApiQuotaUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportingApiUsageResponse&gt; SaplingApiUsage(SaplingApiUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is optional.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingApiUsage(new SaplingApiUsageRequest());
    // TODO: Handle 'response' of type ApiV1ReportingApiUsageResponse
}
catch (ApiException<SaplingApiUsageError> ex)
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

<code>[SaplingApiUsageRequest](src/Sapling/Requests/Account/SaplingApiUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportingApiUsageResponse](src/Sapling/Models/ApiV1ReportingApiUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingApiUsageError](src/Sapling/Errors/SaplingApiUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportingApiUserActivityResponse&gt; SaplingApiUserActivity(SaplingApiUserActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days. Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty `{}` body with 400); the window defaults to the last 6 days when a field is omitted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.SaplingApiUserActivity(new SaplingApiUserActivityRequest
    {
        Body = new ApiV1ReportingApiUserActivityRequest(),
    });
    // TODO: Handle 'response' of type ApiV1ReportingApiUserActivityResponse
}
catch (ApiException<SaplingApiUserActivityError> ex)
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

<code>[SaplingApiUserActivityRequest](src/Sapling/Requests/Account/SaplingApiUserActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportingApiUserActivityResponse](src/Sapling/Models/ApiV1ReportingApiUserActivityResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingApiUserActivityError](src/Sapling/Errors/SaplingApiUserActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Analysis

> Source: [Analysis](src/Sapling/Api/Analysis.cs)

<details>
<summary><code>Task&lt;ApiV1ClassifyResponse&gt; SaplingClassify(SaplingClassifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify a text into a set of labels you supply — intent, topic, category, routing queue, sentiment buckets, anything — without training data. Returns label (the best match, always one of your labels), labels (single-label: just the best match; multi-label: every label whose score >= threshold, possibly empty), scores (one {label, score} per input label, descending; a distribution in single-label mode, independent 0-1 applicability in multi-label mode) and a one-sentence rationale. Labels can be plain names or {name, description} objects — a short description per label sharpens borderline decisions. Use context to say what the texts are (e.g. "support tickets for a billing product"). 2-20 labels.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingClassify(new SaplingClassifyRequest
    {
        Body = new ApiV1ClassifyRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ClassifyResponse
}
catch (ApiException<SaplingClassifyError> ex)
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

<code>[SaplingClassifyRequest](src/Sapling/Requests/Analysis/SaplingClassifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ClassifyResponse](src/Sapling/Models/ApiV1ClassifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingClassifyError](src/Sapling/Errors/SaplingClassifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StyleguideRulesetsResponse&gt; SaplingDeleteStyleRuleset(SaplingDeleteStyleRulesetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a saved rule set by name. The name may be sent as a query parameter or as `name` in a JSON body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingDeleteStyleRuleset(new SaplingDeleteStyleRulesetRequest());
    // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse
}
catch (ApiException<SaplingDeleteStyleRulesetError> ex)
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

<code>[SaplingDeleteStyleRulesetRequest](src/Sapling/Requests/Analysis/SaplingDeleteStyleRulesetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse](src/Sapling/Models/ApiV1StyleguideRulesetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDeleteStyleRulesetError](src/Sapling/Errors/SaplingDeleteStyleRulesetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ExtractResponse&gt; SaplingExtract(SaplingExtractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names, addresses, order ids, anything the document actually states — by describing the fields you want. Returns data (a {field: value} map, null where the text does not state the field), fields (per-field value, the verbatim evidence span it came from, and whether it was found) and missing (the fields the text did not yield). Values are returned in the type you declare (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that will not convert is reported missing rather than returned in the wrong type. This is EXTRACTION, not summarization or inference: except for boolean fields, a value must be traceable to a span of the text or it is dropped. Use context to say what the document is. 1-20 fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingExtract(new SaplingExtractRequest
    {
        Body = new ApiV1ExtractRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ExtractResponse
}
catch (ApiException<SaplingExtractError> ex)
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

<code>[SaplingExtractRequest](src/Sapling/Requests/Analysis/SaplingExtractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExtractResponse](src/Sapling/Models/ApiV1ExtractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingExtractError](src/Sapling/Errors/SaplingExtractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FileExtractResponse&gt; SaplingExtractFile(SaplingExtractFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract caller-named fields from its text exactly like /api/v1/extract. Options ride the jsonParams part. Text past the first 10,000 characters is not read; the response `document` object reports `truncated`. Billed like /api/v1/extract on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingExtractFile(new SaplingExtractFileRequest
    {
        File = Array.Empty<byte>(),
        JsonParams = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ApiV1FileExtractResponse
}
catch (ApiException<SaplingExtractFileError> ex)
{
    if (ex.Error.TryGetApiV1FileExtract400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1FileExtract400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingExtractFileRequest](src/Sapling/Requests/Analysis/SaplingExtractFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FileExtractResponse](src/Sapling/Models/ApiV1FileExtractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingExtractFileError](src/Sapling/Errors/SaplingExtractFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1InclusiveResponse&gt; SaplingInclusive(SaplingInclusiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist framing, outdated terms for groups, classist or appearance-based language. Returns issues, each with the verbatim passage, its start/end offsets in the submitted text (null when the passage cannot be located), a category, a severity (low / medium / high), a brief note and a neutral replacement suggestion, plus a top-level inclusive boolean. Wording is flagged, not topics: text that discusses or quotes a term to critique it is not an issue. Use categories to restrict the check to a subset. The text is checked as submitted (markup included), so offsets always index it directly.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingInclusive(new SaplingInclusiveRequest
    {
        Body = new ApiV1InclusiveRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1InclusiveResponse
}
catch (ApiException<SaplingInclusiveError> ex)
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

<code>[SaplingInclusiveRequest](src/Sapling/Requests/Analysis/SaplingInclusiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1InclusiveResponse](src/Sapling/Models/ApiV1InclusiveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingInclusiveError](src/Sapling/Errors/SaplingInclusiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StyleguideRulesetsResponse1&gt; SaplingListStyleRulesets(SaplingListStyleRulesetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rule sets saved for this account (or the key's team), usable by name via the `ruleset` option of /api/v1/styleguide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingListStyleRulesets(new SaplingListStyleRulesetsRequest());
    // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse1
}
catch (ApiException<SaplingListStyleRulesetsError> ex)
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

<code>[SaplingListStyleRulesetsRequest](src/Sapling/Requests/Analysis/SaplingListStyleRulesetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse1](src/Sapling/Models/ApiV1StyleguideRulesetsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingListStyleRulesetsError](src/Sapling/Errors/SaplingListStyleRulesetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1QualityResponse&gt; SaplingQuality(SaplingQualityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a fluency/grammaticality score from a language model. Set sentence_scores=true to also get a per-sentence breakdown (sentences with start/end offsets and their own score) to find the weakest sentences. Set rubric=true for an LLM-judged rubric: overall score, per-dimension scores (clarity, coherence, correctness, concision), a summary, and concrete issues each with the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher rate than the plain score.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingQuality(new SaplingQualityRequest
    {
        Body = new ApiV1QualityRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1QualityResponse
}
catch (ApiException<SaplingQualityError> ex)
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

<code>[SaplingQualityRequest](src/Sapling/Requests/Analysis/SaplingQualityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1QualityResponse](src/Sapling/Models/ApiV1QualityResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingQualityError](src/Sapling/Errors/SaplingQualityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StatisticsResponse&gt; SaplingReadabilityStatistics(SaplingReadabilityStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute readability statistics for a text: grade-level readability scores, estimated reading time, and counts of characters, words, and sentences.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingReadabilityStatistics(new SaplingReadabilityStatisticsRequest
    {
        Body = new ApiV1StatisticsRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1StatisticsResponse
}
catch (ApiException<SaplingReadabilityStatisticsError> ex)
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

<code>[SaplingReadabilityStatisticsRequest](src/Sapling/Requests/Analysis/SaplingReadabilityStatisticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StatisticsResponse](src/Sapling/Models/ApiV1StatisticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingReadabilityStatisticsError](src/Sapling/Errors/SaplingReadabilityStatisticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StyleguideRulesetsResponse2&gt; SaplingSaveStyleRuleset(SaplingSaveStyleRulesetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule sets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingSaveStyleRuleset(new SaplingSaveStyleRulesetRequest
    {
        Body = new ApiV1StyleguideRulesetsRequest1 { Name = "some example string", Rules = ["some example string"] },
    });
    // TODO: Handle 'response' of type ApiV1StyleguideRulesetsResponse2
}
catch (ApiException<SaplingSaveStyleRulesetError> ex)
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

<code>[SaplingSaveStyleRulesetRequest](src/Sapling/Requests/Analysis/SaplingSaveStyleRulesetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StyleguideRulesetsResponse2](src/Sapling/Models/ApiV1StyleguideRulesetsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSaveStyleRulesetError](src/Sapling/Errors/SaplingSaveStyleRulesetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SentimentResponse1&gt; SaplingSentiment(SaplingSentimentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify the sentiment of a text (positive / neutral / negative). Returns overall and per-sentence sentiment with confidence scores.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingSentiment(new SaplingSentimentRequest
    {
        Body = new ApiV1SentimentRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SentimentResponse1
}
catch (ApiException<SaplingSentimentError> ex)
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

<code>[SaplingSentimentRequest](src/Sapling/Requests/Analysis/SaplingSentimentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SentimentResponse1](src/Sapling/Models/AnyOf/ApiV1SentimentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSentimentError](src/Sapling/Errors/SaplingSentimentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SeoResponse&gt; SaplingSeo(SaplingSeoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze a page or article for on-page SEO and generate metadata. Returns stats (words, sentences, paragraphs, reading time, Flesch reading ease and grade), per-target-keyword count/density/whether it appears in the first 100 words, top_terms (the most frequent content words and phrases), and suggestions: title-tag candidates (the model aims for <=60 chars; any over a 90-char hard cap are dropped), meta-description candidates (aims for 120-155 chars; hard cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the language of the text. Pass keywords to have them worked into the suggestions. Set suggestions=false for the free stats-only analysis (suggestions are the billed part). lang (ISO 639-1, default "en") selects the readability formulas; unsupported languages get null readability.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingSeo(new SaplingSeoRequest
    {
        Body = new ApiV1SeoRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SeoResponse
}
catch (ApiException<SaplingSeoError> ex)
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

<code>[SaplingSeoRequest](src/Sapling/Requests/Analysis/SaplingSeoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SeoResponse](src/Sapling/Models/ApiV1SeoResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSeoError](src/Sapling/Errors/SaplingSeoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ThesaurusResponse&gt; SaplingSimilarTerms(SaplingSimilarTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100 characters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingSimilarTerms(new SaplingSimilarTermsRequest
    {
        Body = new ApiV1ThesaurusRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ThesaurusResponse
}
catch (ApiException<SaplingSimilarTermsError> ex)
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

<code>[SaplingSimilarTermsRequest](src/Sapling/Requests/Analysis/SaplingSimilarTermsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ThesaurusResponse](src/Sapling/Models/ApiV1ThesaurusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSimilarTermsError](src/Sapling/Errors/SaplingSimilarTermsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StyleguideResponse&gt; SaplingStyleguide(SaplingStyleguideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a text for compliance with caller-supplied style rules (house style, brand voice, editorial guidelines). Returns violations — each with the verbatim offending passage, its start/end offsets in the submitted text (null when the passage cannot be located), the violated rule name, a brief note and a compliant rewrite suggestion — plus a top-level compliant boolean. Only the listed rules are enforced; an empty violations list means the text complies. The text is checked as submitted (markup included), so offsets always index it directly. Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingStyleguide(new SaplingStyleguideRequest
    {
        Body = new ApiV1StyleguideRequest { Rules = ["some example string"], Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1StyleguideResponse
}
catch (ApiException<SaplingStyleguideError> ex)
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

<code>[SaplingStyleguideRequest](src/Sapling/Requests/Analysis/SaplingStyleguideRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StyleguideResponse](src/Sapling/Models/ApiV1StyleguideResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingStyleguideError](src/Sapling/Errors/SaplingStyleguideError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ToneResponse1&gt; SaplingTone(SaplingToneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall and per-sentence tone labels with confidence scores.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analysis.SaplingTone(new SaplingToneRequest
    {
        Body = new ApiV1ToneRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ToneResponse1
}
catch (ApiException<SaplingToneError> ex)
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

<code>[SaplingToneRequest](src/Sapling/Requests/Analysis/SaplingToneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ToneResponse1](src/Sapling/Models/AnyOf/ApiV1ToneResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingToneError](src/Sapling/Errors/SaplingToneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Detection

> Source: [Detection](src/Sapling/Api/Detection.cs)

<details>
<summary><code>Task&lt;ApiV1AidetectResponse&gt; SaplingAiDetect(SaplingAiDetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely human-written) and 1 (likely AI-generated), ai_fraction (the share of the text in sentences scoring >= 0.5, which flags partially AI-written documents), a verdict (human, mixed or ai), segments (character offsets of the AI-scored passages), low_confidence with low_confidence_reasons (short_text, list_format: inputs where false positives are more likely, so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of text for a meaningful score; 500+ characters of prose is most reliable. English, Dutch, French, German, Italian, Japanese, Portuguese and Spanish are supported: the language is detected automatically (or set it with lang), text in the non-English languages is scored by a multilingual model, and the response's version field names the model that scored the text. Other languages are scored by the English model and are less reliable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingAiDetect(new SaplingAiDetectRequest
    {
        Body = new ApiV1AidetectRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1AidetectResponse
}
catch (ApiException<SaplingAiDetectError> ex)
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

<code>[SaplingAiDetectRequest](src/Sapling/Requests/Detection/SaplingAiDetectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AidetectResponse](src/Sapling/Models/ApiV1AidetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAiDetectError](src/Sapling/Errors/SaplingAiDetectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UrlAidetectResponse&gt; SaplingAiDetectUrl(SaplingAiDetectUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score how likely its main text is to be AI-generated. Use this instead of sapling_ai_detect when you have a link rather than the text: Sapling fetches the page itself, drops navigation, headers, footers, forms and hidden elements, and scores only the main readable text (the largest , else ). Returns the same fields as sapling_ai_detect (score from 0 = likely human to 1 = likely AI, ai_fraction, verdict, segments, low_confidence, per-sentence scores by default, and the scored text) plus source: the final URL after redirects, the page title, its content type, the number of characters scored (and billed) and whether the page was truncated. Only http(s) URLs that resolve to public addresses are fetched. A page that is down, blocks automated requests, or has no readable text is reported as an error, not a score. For long pages set sent_scores=false to keep the result small.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingAiDetectUrl(new SaplingAiDetectUrlRequest
    {
        Body = new ApiV1UrlAidetectRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1UrlAidetectResponse
}
catch (ApiException<SaplingAiDetectUrlError> ex)
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

<code>[SaplingAiDetectUrlRequest](src/Sapling/Requests/Detection/SaplingAiDetectUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UrlAidetectResponse](src/Sapling/Models/ApiV1UrlAidetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAiDetectUrlError](src/Sapling/Errors/SaplingAiDetectUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DocxAidetectResponse&gt; SaplingAidetectDocx(SaplingAidetectDocxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingAidetectDocx(new SaplingAidetectDocxRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ApiV1DocxAidetectResponse
}
catch (ApiException<SaplingAidetectDocxError> ex)
{
    if (ex.Error.TryGetApiV1DocxAidetect400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1DocxAidetect400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingAidetectDocxRequest](src/Sapling/Requests/Detection/SaplingAidetectDocxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DocxAidetectResponse](src/Sapling/Models/ApiV1DocxAidetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAidetectDocxError](src/Sapling/Errors/SaplingAidetectDocxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FileAidetectResponse&gt; SaplingAidetectFile(SaplingAidetectFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file extension, up to 30MB); its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. PPTX text is read in slide order without speaker notes; ODT drops footnotes, comments and tracked deletions; HTML is flattened to its visible text. Billed like /api/v1/aidetect.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingAidetectFile(new SaplingAidetectFileRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ApiV1FileAidetectResponse
}
catch (ApiException<SaplingAidetectFileError> ex)
{
    if (ex.Error.TryGetApiV1FileAidetect400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1FileAidetect400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingAidetectFileRequest](src/Sapling/Requests/Detection/SaplingAidetectFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FileAidetectResponse](src/Sapling/Models/ApiV1FileAidetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAidetectFileError](src/Sapling/Errors/SaplingAidetectFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PdfAidetectResponse&gt; SaplingAidetectPdf(SaplingAidetectPdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect with sentence scores. Billed like /api/v1/aidetect.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingAidetectPdf(new SaplingAidetectPdfRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ApiV1PdfAidetectResponse
}
catch (ApiException<SaplingAidetectPdfError> ex)
{
    if (ex.Error.TryGetApiV1PdfAidetect400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PdfAidetect400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingAidetectPdfRequest](src/Sapling/Requests/Detection/SaplingAidetectPdfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PdfAidetectResponse](src/Sapling/Models/ApiV1PdfAidetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAidetectPdfError](src/Sapling/Errors/SaplingAidetectPdfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1LangdetectResponse&gt; SaplingDetectLanguage(SaplingDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value, reliable (the recommended threshold: true when the confidence is high and the text has enough letters; short inputs like "OK" are never reliable) and script, the dominant writing system as an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingDetectLanguage(new SaplingDetectLanguageRequest
    {
        Body = new ApiV1LangdetectRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1LangdetectResponse
}
catch (ApiException<SaplingDetectLanguageError> ex)
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

<code>[SaplingDetectLanguageRequest](src/Sapling/Requests/Detection/SaplingDetectLanguageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1LangdetectResponse](src/Sapling/Models/ApiV1LangdetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDetectLanguageError](src/Sapling/Errors/SaplingDetectLanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PiiResponse&gt; SaplingDetectPii(SaplingDetectPiiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect personally identifiable information (emails, phone numbers, US SSNs, credit card numbers, IP addresses, IBANs, US bank routing numbers) in a text. Detection of those types is deterministic (regex + checksum validation, no ML), and every entity comes with exact character offsets (start/end) into the submitted text. Set redact=true to also receive redacted_text: the input with each entity replaced by a placeholder like [EMAIL]. Person names, organizations, and locations/street addresses are NOT detected by default: list person/organization/location in types explicitly to add LLM-backed detection of them (slower, and the text is then capped at 10000 characters).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingDetectPii(new SaplingDetectPiiRequest
    {
        Body = new ApiV1PiiRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1PiiResponse
}
catch (ApiException<SaplingDetectPiiError> ex)
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

<code>[SaplingDetectPiiRequest](src/Sapling/Requests/Detection/SaplingDetectPiiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PiiResponse](src/Sapling/Models/ApiV1PiiResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDetectPiiError](src/Sapling/Errors/SaplingDetectPiiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1NerResponse&gt; SaplingNer(SaplingNerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find named entities in a text — people, organizations, locations, dates, times, money amounts, percentages, quantities, products, events — with character spans. Returns entities (each with its verbatim text, type, and start/end offsets into the exact submitted text) and types (the distinct types found). Every entity is a span the text actually contains — invented mentions are dropped. Offsets index the submitted text as-is (nothing is stripped or normalized), so they can be applied directly to your copy of the document. Use types to restrict recognition to a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers (emails, cards, IBANs...), this one finds names and real-world references.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingNer(new SaplingNerRequest
    {
        Body = new ApiV1NerRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1NerResponse
}
catch (ApiException<SaplingNerError> ex)
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

<code>[SaplingNerRequest](src/Sapling/Requests/Detection/SaplingNerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1NerResponse](src/Sapling/Models/ApiV1NerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingNerError](src/Sapling/Errors/SaplingNerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ProfanityResponse&gt; SaplingProfanity(SaplingProfanityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split text on whitespace and label each token 1 (profane) or 0. Not billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingProfanity(new SaplingProfanityRequest
    {
        Body = new ApiV1ProfanityRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ProfanityResponse
}
catch (ApiException<SaplingProfanityError> ex)
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

<code>[SaplingProfanityRequest](src/Sapling/Requests/Detection/SaplingProfanityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ProfanityResponse](src/Sapling/Models/ApiV1ProfanityResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingProfanityError](src/Sapling/Errors/SaplingProfanityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SafetyResponse&gt; SaplingSafety(SaplingSafetyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score a text for unsafe content across seven categories — toxicity, profanity, harassment, hate_speech, self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all seven), flagged (whether any category reached the threshold, default 0.5) and flagged_categories. With spans=true, also returns spans: the specific offending passages, each with its text, start/end offsets into the submitted text, per-category scores and flagged_categories — use it to highlight, quote, or redact just the violating passage instead of rejecting the whole text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Detection.SaplingSafety(new SaplingSafetyRequest
    {
        Body = new ApiV1SafetyRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SafetyResponse
}
catch (ApiException<SaplingSafetyError> ex)
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

<code>[SaplingSafetyRequest](src/Sapling/Requests/Detection/SaplingSafetyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SafetyResponse](src/Sapling/Models/ApiV1SafetyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSafetyError](src/Sapling/Errors/SaplingSafetyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](src/Sapling/Api/Files.cs)

<details>
<summary><code>Task&lt;ApiV1IngestChunkHtmlResponse&gt; SaplingChunkHtml(SaplingChunkHtmlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Like chunk_text, for HTML input. Not billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.SaplingChunkHtml(new SaplingChunkHtmlRequest
    {
        Body = new ApiV1IngestChunkHtmlRequest { Html = "some example string", MaxLength = 1 },
    });
    // TODO: Handle 'response' of type ApiV1IngestChunkHtmlResponse
}
catch (ApiException<SaplingChunkHtmlError> ex)
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

<code>[SaplingChunkHtmlRequest](src/Sapling/Requests/Files/SaplingChunkHtmlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IngestChunkHtmlResponse](src/Sapling/Models/ApiV1IngestChunkHtmlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingChunkHtmlError](src/Sapling/Errors/SaplingChunkHtmlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1IngestChunkTextResponse&gt; SaplingChunkText(SaplingChunkTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Split long text into overlapping chunks no longer than `max_length`, preferring sentence and whitespace boundaries. Not billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.SaplingChunkText(new SaplingChunkTextRequest
    {
        Body = new ApiV1IngestChunkTextRequest { MaxLength = 1, Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1IngestChunkTextResponse
}
catch (ApiException<SaplingChunkTextError> ex)
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

<code>[SaplingChunkTextRequest](src/Sapling/Requests/Files/SaplingChunkTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IngestChunkTextResponse](src/Sapling/Models/ApiV1IngestChunkTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingChunkTextError](src/Sapling/Errors/SaplingChunkTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1IngestDocxToTextResponse&gt; SaplingDocxToText(SaplingDocxToTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a .docx and receive its text, tables included in document order. Not billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.SaplingDocxToText(new SaplingDocxToTextRequest { File = Array.Empty<byte>() });
    // TODO: Handle 'response' of type ApiV1IngestDocxToTextResponse
}
catch (ApiException<SaplingDocxToTextError> ex)
{
    if (ex.Error.TryGetApiV1IngestDocxToText400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1IngestDocxToText400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingDocxToTextRequest](src/Sapling/Requests/Files/SaplingDocxToTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IngestDocxToTextResponse](src/Sapling/Models/ApiV1IngestDocxToTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDocxToTextError](src/Sapling/Errors/SaplingDocxToTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1IngestPdfToTextResponse&gt; SaplingPdfToText(SaplingPdfToTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are decrypted transparently; image-only PDFs answer 400. Not billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Files.SaplingPdfToText(new SaplingPdfToTextRequest { File = Array.Empty<byte>() });
    // TODO: Handle 'response' of type ApiV1IngestPdfToTextResponse
}
catch (ApiException<SaplingPdfToTextError> ex)
{
    if (ex.Error.TryGetApiV1IngestPdfToText400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1IngestPdfToText400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingPdfToTextRequest](src/Sapling/Requests/Files/SaplingPdfToTextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IngestPdfToTextResponse](src/Sapling/Models/ApiV1IngestPdfToTextResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingPdfToTextError](src/Sapling/Errors/SaplingPdfToTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](src/Sapling/Api/Service.cs)

<details>
<summary><code>Task&lt;ApiV1LivenessResponse&gt; SaplingLiveness(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Answers 200 while the API process is up.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.SaplingLiveness();
    // TODO: Handle 'response' of type ApiV1LivenessResponse
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

**OnSuccess**: <code>[ApiV1LivenessResponse](src/Sapling/Models/ApiV1LivenessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Sapling/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1VersionResponse&gt; SaplingVersion(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Release and build identifiers of the serving deployment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.SaplingVersion();
    // TODO: Handle 'response' of type ApiV1VersionResponse
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

**OnSuccess**: <code>[ApiV1VersionResponse](src/Sapling/Models/ApiV1VersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Sapling/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Generation

> Source: [Generation](src/Sapling/Api/Generation.cs)

<details>
<summary><code>Task&lt;ApiV1CompleteAcceptResponse&gt; SaplingAcceptCompletion(SaplingAcceptCompletionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user accepted an autocomplete suggestion. `context` must be exactly the `{query, completion}` object the completion hash was computed from — extra keys fail the hash check.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingAcceptCompletion(new SaplingAcceptCompletionRequest
    {
        CompletionHash = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApiV1CompleteAcceptRequest
        {
            Context = new Context { Completion = "some example string", Query = "some example string" },
        },
    });
    // TODO: Handle 'response' of type ApiV1CompleteAcceptResponse
}
catch (ApiException<SaplingAcceptCompletionError> ex)
{
    if (ex.Error.TryGetApiV1CompleteAcceptResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CompleteAcceptResponse11
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingAcceptCompletionRequest](src/Sapling/Requests/Generation/SaplingAcceptCompletionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompleteAcceptResponse](src/Sapling/Models/ApiV1CompleteAcceptResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAcceptCompletionError](src/Sapling/Errors/SaplingAcceptCompletionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompleteResponse1&gt; SaplingAutocomplete(SaplingAutocompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Predict how a partially written sentence continues. Send the trailing text the user has typed as query (200 characters maximum) and the tool returns the predicted continuation. Requires an API key with autocomplete enabled; other keys get an explicit error back.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingAutocomplete(new SaplingAutocompleteRequest
    {
        Body = new ApiV1CompleteRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1CompleteResponse1
}
catch (ApiException<SaplingAutocompleteError> ex)
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

<code>[SaplingAutocompleteRequest](src/Sapling/Requests/Generation/SaplingAutocompleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompleteResponse1](src/Sapling/Models/AnyOf/ApiV1CompleteResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAutocompleteError](src/Sapling/Errors/SaplingAutocompleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ParaphraseResponse&gt; SaplingParaphrase(SaplingParaphraseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen transformation, exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is limited to 4000 characters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingParaphrase(new SaplingParaphraseRequest
    {
        Body = new ApiV1ParaphraseRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1ParaphraseResponse
}
catch (ApiException<SaplingParaphraseError> ex)
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

<code>[SaplingParaphraseRequest](src/Sapling/Requests/Generation/SaplingParaphraseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ParaphraseResponse](src/Sapling/Models/ApiV1ParaphraseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingParaphraseError](src/Sapling/Errors/SaplingParaphraseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1RephraseResponse&gt; SaplingRephrase(SaplingRephraseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate alternative phrasings of a text. mapping selects the transformation (default "paraphrase"); num_results controls how many alternatives are returned (default 5).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingRephrase(new SaplingRephraseRequest
    {
        Body = new ApiV1RephraseRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1RephraseResponse
}
catch (ApiException<SaplingRephraseError> ex)
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

<code>[SaplingRephraseRequest](src/Sapling/Requests/Generation/SaplingRephraseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1RephraseResponse](src/Sapling/Models/ApiV1RephraseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingRephraseError](src/Sapling/Errors/SaplingRephraseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SentenceSplitResponse&gt; SaplingSentenceSplit(SaplingSentenceSplitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingSentenceSplit(new SaplingSentenceSplitRequest
    {
        Body = new ApiV1SentenceSplitRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SentenceSplitResponse
}
catch (ApiException<SaplingSentenceSplitError> ex)
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

<code>[SaplingSentenceSplitRequest](src/Sapling/Requests/Generation/SaplingSentenceSplitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SentenceSplitResponse](src/Sapling/Models/ApiV1SentenceSplitResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSentenceSplitError](src/Sapling/Errors/SaplingSentenceSplitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SimplifyResponse&gt; SaplingSimplify(SaplingSimplifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rewrite a text in plain language at a target reading level, keeping all of its content, structure and language (nothing is summarized or dropped). Returns simplified (the rewrite) plus a before/after readability block (Flesch-Kincaid grade and reading ease) when the language supports it, so the improvement is verifiable. Use preserve_terms for names or defined terms that must survive verbatim. Pairs with sapling_readability_statistics for scoring text first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingSimplify(new SaplingSimplifyRequest
    {
        Body = new ApiV1SimplifyRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SimplifyResponse
}
catch (ApiException<SaplingSimplifyError> ex)
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

<code>[SaplingSimplifyRequest](src/Sapling/Requests/Generation/SaplingSimplifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SimplifyResponse](src/Sapling/Models/ApiV1SimplifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSimplifyError](src/Sapling/Errors/SaplingSimplifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SummarizeResponse&gt; SaplingSummarize(SaplingSummarizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarize a longer text, webpage or email thread (HTML input is accepted and flattened). Returns a prose `summary` plus a `key_points` list, sized by the optional `length` option.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingSummarize(new SaplingSummarizeRequest
    {
        Body = new ApiV1SummarizeRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SummarizeResponse
}
catch (ApiException<SaplingSummarizeError> ex)
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

<code>[SaplingSummarizeRequest](src/Sapling/Requests/Generation/SaplingSummarizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SummarizeResponse](src/Sapling/Models/ApiV1SummarizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSummarizeError](src/Sapling/Errors/SaplingSummarizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FileSummarizeResponse&gt; SaplingSummarizeFile(SaplingSummarizeFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and summarize its text exactly like /api/v1/summarize. Options ride the optional jsonParams part. Text past the first 20,000 characters is not read; the response `document` object reports `truncated`. Billed like /api/v1/summarize on the characters used. Unbilled (trial and public) keys also answer 429 with Retry-After when their per-minute generation budget is spent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingSummarizeFile(new SaplingSummarizeFileRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ApiV1FileSummarizeResponse
}
catch (ApiException<SaplingSummarizeFileError> ex)
{
    if (ex.Error.TryGetApiV1FileSummarize400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1FileSummarize400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingSummarizeFileRequest](src/Sapling/Requests/Generation/SaplingSummarizeFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FileSummarizeResponse](src/Sapling/Models/ApiV1FileSummarizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSummarizeFileError](src/Sapling/Errors/SaplingSummarizeFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TranslateResponse&gt; SaplingTranslate(SaplingTranslateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate a text into a target language with an LLM. Returns translation, the detected source language (source_lang code + source_lang_name; the detection is reported, never guessed from the hint) and the normalized target (target_lang, target_lang_name). Line breaks, markup and placeholders are preserved in place. target_lang and source_lang accept an ISO 639 code ("fr", "zh-TW") or an English language name ("French"); region variants zh-CN/zh-TW/zh-HK, pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks a formal or informal register where the target language distinguishes them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Generation.SaplingTranslate(new SaplingTranslateRequest
    {
        Body = new ApiV1TranslateRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1TranslateResponse
}
catch (ApiException<SaplingTranslateError> ex)
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

<code>[SaplingTranslateRequest](src/Sapling/Requests/Generation/SaplingTranslateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TranslateResponse](src/Sapling/Models/ApiV1TranslateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingTranslateError](src/Sapling/Errors/SaplingTranslateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Proofreading

> Source: [Proofreading](src/Sapling/Api/Proofreading.cs)

<details>
<summary><code>Task&lt;ApiV1EditsAcceptResponse&gt; SaplingAcceptEdit(SaplingAcceptEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck. Feedback improves the suggestions shown to that user. The body must be a non-empty JSON object; include `user_id` or the feedback is not recorded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingAcceptEdit(new SaplingAcceptEditRequest
    {
        EditHash = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApiV1EditsAcceptRequest(),
    });
    // TODO: Handle 'response' of type ApiV1EditsAcceptResponse
}
catch (ApiException<SaplingAcceptEditError> ex)
{
    if (ex.Error.TryGetApiV1EditsAcceptResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1EditsAcceptResponse11
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingAcceptEditRequest](src/Sapling/Requests/Proofreading/SaplingAcceptEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EditsAcceptResponse](src/Sapling/Models/ApiV1EditsAcceptResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAcceptEditError](src/Sapling/Errors/SaplingAcceptEditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CustomFilterResponse1&gt; SaplingAddCustomFilter(SaplingAddCustomFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suppress suggestions that change `inp` into `out`. Note the request keys are `inp`/`out` while responses use `input`/`output`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingAddCustomFilter(new SaplingAddCustomFilterRequest
    {
        Body = new ApiV1CustomFilterRequest(),
    });
    // TODO: Handle 'response' of type ApiV1CustomFilterResponse1
}
catch (ApiException<SaplingAddCustomFilterError> ex)
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

<code>[SaplingAddCustomFilterRequest](src/Sapling/Requests/Proofreading/SaplingAddCustomFilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CustomFilterResponse1](src/Sapling/Models/ApiV1CustomFilterResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAddCustomFilterError](src/Sapling/Errors/SaplingAddCustomFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CustomMappingResponse1&gt; SaplingAddCustomMapping(SaplingAddCustomMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suggest `mapping` whenever `entry` appears in checked text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingAddCustomMapping(new SaplingAddCustomMappingRequest
    {
        Body = new ApiV1CustomMappingRequest { Entry = "some example string", Mapping = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1CustomMappingResponse1
}
catch (ApiException<SaplingAddCustomMappingError> ex)
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

<code>[SaplingAddCustomMappingRequest](src/Sapling/Requests/Proofreading/SaplingAddCustomMappingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CustomMappingResponse1](src/Sapling/Models/ApiV1CustomMappingResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAddCustomMappingError](src/Sapling/Errors/SaplingAddCustomMappingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DictionaryResponse1&gt; SaplingAddDictionaryEntry(SaplingAddDictionaryEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a word the grammar and spelling checkers should accept.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingAddDictionaryEntry(new SaplingAddDictionaryEntryRequest
    {
        Body = new ApiV1DictionaryRequest { Entry = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1DictionaryResponse1
}
catch (ApiException<SaplingAddDictionaryEntryError> ex)
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

<code>[SaplingAddDictionaryEntryRequest](src/Sapling/Requests/Proofreading/SaplingAddDictionaryEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DictionaryResponse1](src/Sapling/Models/ApiV1DictionaryResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingAddDictionaryEntryError](src/Sapling/Errors/SaplingAddDictionaryEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaplingDeleteCustomFilter(SaplingDeleteCustomFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a filter by the `id` returned when listing or adding it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Proofreading.SaplingDeleteCustomFilter(new SaplingDeleteCustomFilterRequest
    {
        FilterId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<SaplingDeleteCustomFilterError> ex)
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

<code>[SaplingDeleteCustomFilterRequest](src/Sapling/Requests/Proofreading/SaplingDeleteCustomFilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDeleteCustomFilterError](src/Sapling/Errors/SaplingDeleteCustomFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaplingDeleteCustomMapping(SaplingDeleteCustomMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a mapping by the `id` returned when listing or adding it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Proofreading.SaplingDeleteCustomMapping(new SaplingDeleteCustomMappingRequest
    {
        MappingId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<SaplingDeleteCustomMappingError> ex)
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

<code>[SaplingDeleteCustomMappingRequest](src/Sapling/Requests/Proofreading/SaplingDeleteCustomMappingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDeleteCustomMappingError](src/Sapling/Errors/SaplingDeleteCustomMappingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaplingDeleteDictionaryEntry(SaplingDeleteDictionaryEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an entry by the `id` returned when listing or adding it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Proofreading.SaplingDeleteDictionaryEntry(new SaplingDeleteDictionaryEntryRequest
    {
        EntryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<SaplingDeleteDictionaryEntryError> ex)
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

<code>[SaplingDeleteDictionaryEntryRequest](src/Sapling/Requests/Proofreading/SaplingDeleteDictionaryEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingDeleteDictionaryEntryError](src/Sapling/Errors/SaplingDeleteDictionaryEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1EditsResponse1&gt; SaplingGrammarCheck(SaplingGrammarCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each with the sentence, character span (start/end), replacement text, and an error type. Set auto_apply=true to also receive applied_text: the input with all suggested edits already applied (useful to return a corrected document in one call). Set include_error_categories=false to skip error classification and get only the corrections and offsets back (faster and lighter when you only need to apply fixes). Supports many languages via the lang parameter. If the result carries a degraded object it is partial: some sentences may be missing some or all of their corrections (the edits returned are still valid); call again for a complete result.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingGrammarCheck(new SaplingGrammarCheckRequest
    {
        Body = new ApiV1EditsRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1EditsResponse1
}
catch (ApiException<SaplingGrammarCheckError> ex)
{
    if (ex.Error.TryGetApiV1EditsResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1EditsResponse11
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingGrammarCheckRequest](src/Sapling/Requests/Proofreading/SaplingGrammarCheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EditsResponse1](src/Sapling/Models/AnyOf/ApiV1EditsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingGrammarCheckError](src/Sapling/Errors/SaplingGrammarCheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CustomFilterResponse&gt; SaplingListCustomFilters(SaplingListCustomFiltersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingListCustomFilters(new SaplingListCustomFiltersRequest());
    // TODO: Handle 'response' of type ApiV1CustomFilterResponse
}
catch (ApiException<SaplingListCustomFiltersError> ex)
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

<code>[SaplingListCustomFiltersRequest](src/Sapling/Requests/Proofreading/SaplingListCustomFiltersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CustomFilterResponse](src/Sapling/Models/ApiV1CustomFilterResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingListCustomFiltersError](src/Sapling/Errors/SaplingListCustomFiltersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CustomMappingResponse&gt; SaplingListCustomMappings(SaplingListCustomMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingListCustomMappings(new SaplingListCustomMappingsRequest());
    // TODO: Handle 'response' of type ApiV1CustomMappingResponse
}
catch (ApiException<SaplingListCustomMappingsError> ex)
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

<code>[SaplingListCustomMappingsRequest](src/Sapling/Requests/Proofreading/SaplingListCustomMappingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CustomMappingResponse](src/Sapling/Models/ApiV1CustomMappingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingListCustomMappingsError](src/Sapling/Errors/SaplingListCustomMappingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1DictionaryResponse&gt;&gt; SaplingListDictionary(SaplingListDictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON array sorted by entry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingListDictionary(new SaplingListDictionaryRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1DictionaryResponse>
}
catch (ApiException<SaplingListDictionaryError> ex)
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

<code>[SaplingListDictionaryRequest](src/Sapling/Requests/Proofreading/SaplingListDictionaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1DictionaryResponse](src/Sapling/Models/ApiV1DictionaryResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingListDictionaryError](src/Sapling/Errors/SaplingListDictionaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1EditsRejectResponse&gt; SaplingRejectEdit(SaplingRejectEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck; similar suggestions are then suppressed for that user. The body must be a non-empty JSON object; include `user_id` or the feedback is not recorded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingRejectEdit(new SaplingRejectEditRequest
    {
        EditHash = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApiV1EditsRejectRequest(),
    });
    // TODO: Handle 'response' of type ApiV1EditsRejectResponse
}
catch (ApiException<SaplingRejectEditError> ex)
{
    if (ex.Error.TryGetApiV1EditsRejectResponse11(out var error))
    {
        // TODO: Handle 'error' of type ApiV1EditsRejectResponse11
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaplingRejectEditRequest](src/Sapling/Requests/Proofreading/SaplingRejectEditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EditsRejectResponse](src/Sapling/Models/ApiV1EditsRejectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingRejectEditError](src/Sapling/Errors/SaplingRejectEditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SpellcheckResponse1&gt; SaplingSpellcheck(SaplingSpellcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check text for spelling errors only (no grammar or style suggestions). Returns edits in the same format as sapling_grammar_check. Faster and cheaper than a full grammar check when only misspellings matter. A result carrying a degraded object is partial; call again for a complete result.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proofreading.SaplingSpellcheck(new SaplingSpellcheckRequest
    {
        Body = new ApiV1SpellcheckRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type ApiV1SpellcheckResponse1
}
catch (ApiException<SaplingSpellcheckError> ex)
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

<code>[SaplingSpellcheckRequest](src/Sapling/Requests/Proofreading/SaplingSpellcheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SpellcheckResponse1](src/Sapling/Models/AnyOf/ApiV1SpellcheckResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Sapling/Core/Exceptions/ApiException.cs)&lt;[SaplingSpellcheckError](src/Sapling/Errors/SaplingSpellcheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

