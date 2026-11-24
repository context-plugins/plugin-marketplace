# Reference

> Source: [AmazonTranscribeClient](src/client.ts)

## CallAnalyticsCategory

> Source: [CallAnalyticsCategory](src/resources/call-analytics-category.ts)

<details>
<summary><code>createCallAnalyticsCategory(request: CallAnalyticsCategory.CreateCallAnalyticsCategoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsCategory.CreateCallAnalyticsCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsCategory.createCallAnalyticsCategory({
    xAmzTarget: XAmzTarget.TranscribeCreateCallAnalyticsCategory,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsCategory.CreateCallAnalyticsCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsCategory
  .createCallAnalyticsCategory({ xAmzTarget: XAmzTarget.TranscribeCreateCallAnalyticsCategory })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsCategory.createCallAnalyticsCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsCategory.CreateCallAnalyticsCategoryError](src/resources/call-analytics-category.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsCategory.createCallAnalyticsCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsCategory.CreateCallAnalyticsCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCallAnalyticsCategory(request: CallAnalyticsCategory.DeleteCallAnalyticsCategoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsCategory.DeleteCallAnalyticsCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsCategory.deleteCallAnalyticsCategory({
    xAmzTarget: XAmzTarget1.TranscribeDeleteCallAnalyticsCategory,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsCategory.DeleteCallAnalyticsCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsCategory
  .deleteCallAnalyticsCategory({ xAmzTarget: XAmzTarget1.TranscribeDeleteCallAnalyticsCategory })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsCategory.deleteCallAnalyticsCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsCategory.DeleteCallAnalyticsCategoryError](src/resources/call-analytics-category.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsCategory.deleteCallAnalyticsCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsCategory.DeleteCallAnalyticsCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCallAnalyticsCategory(request: CallAnalyticsCategory.GetCallAnalyticsCategoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsCategory.GetCallAnalyticsCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsCategory.getCallAnalyticsCategory({
    xAmzTarget: XAmzTarget2.TranscribeGetCallAnalyticsCategory,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsCategory.GetCallAnalyticsCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsCategory
  .getCallAnalyticsCategory({ xAmzTarget: XAmzTarget2.TranscribeGetCallAnalyticsCategory })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsCategory.getCallAnalyticsCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsCategory.GetCallAnalyticsCategoryError](src/resources/call-analytics-category.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsCategory.getCallAnalyticsCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsCategory.GetCallAnalyticsCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCallAnalyticsCategories(request: CallAnalyticsCategory.ListCallAnalyticsCategoriesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsCategory.ListCallAnalyticsCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsCategory.listCallAnalyticsCategories({
    xAmzTarget: XAmzTarget3.TranscribeListCallAnalyticsCategories,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsCategory.ListCallAnalyticsCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsCategory
  .listCallAnalyticsCategories({ xAmzTarget: XAmzTarget3.TranscribeListCallAnalyticsCategories })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsCategory.listCallAnalyticsCategories(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsCategory.ListCallAnalyticsCategoriesError](src/resources/call-analytics-category.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsCategory.listCallAnalyticsCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsCategory.ListCallAnalyticsCategoriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCallAnalyticsCategory(request: CallAnalyticsCategory.UpdateCallAnalyticsCategoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsCategory.UpdateCallAnalyticsCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsCategory.updateCallAnalyticsCategory({
    xAmzTarget: XAmzTarget4.TranscribeUpdateCallAnalyticsCategory,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsCategory.UpdateCallAnalyticsCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsCategory
  .updateCallAnalyticsCategory({ xAmzTarget: XAmzTarget4.TranscribeUpdateCallAnalyticsCategory })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsCategory.updateCallAnalyticsCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsCategory.UpdateCallAnalyticsCategoryError](src/resources/call-analytics-category.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsCategory.updateCallAnalyticsCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsCategory.UpdateCallAnalyticsCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CallAnalyticsJobApi

> Source: [CallAnalyticsJobApi](src/resources/call-analytics-job-api.ts)

<details>
<summary><code>deleteCallAnalyticsJob(request: CallAnalyticsJobApi.DeleteCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsJobApi.DeleteCallAnalyticsJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsJobApi.deleteCallAnalyticsJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.TranscribeDeleteCallAnalyticsJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsJobApi.DeleteCallAnalyticsJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsJobApi
  .deleteCallAnalyticsJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.TranscribeDeleteCallAnalyticsJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi](src/models/xamz-target-amazon-transcribe-service-call-analytics-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsJobApi.deleteCallAnalyticsJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsJobApi.DeleteCallAnalyticsJobError](src/resources/call-analytics-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsJobApi.deleteCallAnalyticsJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsJobApi.DeleteCallAnalyticsJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCallAnalyticsJob(request: CallAnalyticsJobApi.GetCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsJobApi.GetCallAnalyticsJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsJobApi.getCallAnalyticsJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeGetCallAnalyticsJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsJobApi.GetCallAnalyticsJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsJobApi
  .getCallAnalyticsJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeGetCallAnalyticsJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi](src/models/xamz-target1-amazon-transcribe-service-call-analytics-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsJobApi.getCallAnalyticsJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsJobApi.GetCallAnalyticsJobError](src/resources/call-analytics-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsJobApi.getCallAnalyticsJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsJobApi.GetCallAnalyticsJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCallAnalyticsJobs(request: CallAnalyticsJobApi.ListCallAnalyticsJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsJobApi.ListCallAnalyticsJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsJobApi.listCallAnalyticsJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeListCallAnalyticsJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsJobApi.ListCallAnalyticsJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsJobApi
  .listCallAnalyticsJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeListCallAnalyticsJobs,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi](src/models/xamz-target2-amazon-transcribe-service-call-analytics-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsJobApi.listCallAnalyticsJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsJobApi.ListCallAnalyticsJobsError](src/resources/call-analytics-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsJobApi.listCallAnalyticsJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsJobApi.ListCallAnalyticsJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCallAnalyticsJob(request: CallAnalyticsJobApi.StartCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CallAnalyticsJobApi.StartCallAnalyticsJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.callAnalyticsJobApi.startCallAnalyticsJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeStartCallAnalyticsJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type CallAnalyticsJobApi.StartCallAnalyticsJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callAnalyticsJobApi
  .startCallAnalyticsJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeStartCallAnalyticsJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi](src/models/xamz-target3-amazon-transcribe-service-call-analytics-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callAnalyticsJobApi.startCallAnalyticsJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CallAnalyticsJobApi.StartCallAnalyticsJobError](src/resources/call-analytics-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callAnalyticsJobApi.startCallAnalyticsJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CallAnalyticsJobApi.StartCallAnalyticsJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LanguageModelApi

> Source: [LanguageModelApi](src/resources/language-model-api.ts)

<details>
<summary><code>createLanguageModel(request: LanguageModelApi.CreateLanguageModelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, LanguageModelApi.CreateLanguageModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.languageModelApi.createLanguageModel({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceLanguageModelApi.TranscribeCreateLanguageModel,
  });
} catch (err) {
  // TODO: Handle 'err' of type LanguageModelApi.CreateLanguageModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageModelApi
  .createLanguageModel({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceLanguageModelApi.TranscribeCreateLanguageModel,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceLanguageModelApi](src/models/xamz-target-amazon-transcribe-service-language-model-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageModelApi.createLanguageModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LanguageModelApi.CreateLanguageModelError](src/resources/language-model-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageModelApi.createLanguageModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LanguageModelApi.CreateLanguageModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLanguageModel(request: LanguageModelApi.DeleteLanguageModelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, LanguageModelApi.DeleteLanguageModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.languageModelApi.deleteLanguageModel({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceLanguageModelApi.TranscribeDeleteLanguageModel,
  });
} catch (err) {
  // TODO: Handle 'err' of type LanguageModelApi.DeleteLanguageModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageModelApi
  .deleteLanguageModel({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceLanguageModelApi.TranscribeDeleteLanguageModel,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceLanguageModelApi](src/models/xamz-target1-amazon-transcribe-service-language-model-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageModelApi.deleteLanguageModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LanguageModelApi.DeleteLanguageModelError](src/resources/language-model-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageModelApi.deleteLanguageModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LanguageModelApi.DeleteLanguageModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeLanguageModel(request: LanguageModelApi.DescribeLanguageModelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, LanguageModelApi.DescribeLanguageModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.languageModelApi.describeLanguageModel({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceLanguageModelApi.TranscribeDescribeLanguageModel,
  });
} catch (err) {
  // TODO: Handle 'err' of type LanguageModelApi.DescribeLanguageModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageModelApi
  .describeLanguageModel({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceLanguageModelApi.TranscribeDescribeLanguageModel,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceLanguageModelApi](src/models/xamz-target2-amazon-transcribe-service-language-model-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageModelApi.describeLanguageModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LanguageModelApi.DescribeLanguageModelError](src/resources/language-model-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageModelApi.describeLanguageModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LanguageModelApi.DescribeLanguageModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLanguageModels(request: LanguageModelApi.ListLanguageModelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, LanguageModelApi.ListLanguageModelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.languageModelApi.listLanguageModels({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceLanguageModelApi.TranscribeListLanguageModels,
  });
} catch (err) {
  // TODO: Handle 'err' of type LanguageModelApi.ListLanguageModelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageModelApi
  .listLanguageModels({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceLanguageModelApi.TranscribeListLanguageModels,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceLanguageModelApi](src/models/xamz-target3-amazon-transcribe-service-language-model-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageModelApi.listLanguageModels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LanguageModelApi.ListLanguageModelsError](src/resources/language-model-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageModelApi.listLanguageModels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LanguageModelApi.ListLanguageModelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLanguageModel(request: LanguageModelApi.UpdateLanguageModelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, LanguageModelApi.UpdateLanguageModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for an existing custom language model. You can use this operation to change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model training is required. Your custom language model must not be in the IN_PROGRESS state when you call this operation. You cannot submit another update while a previous update is in progress. Use to check the current state of your model. Your custom language model remains available for transcription jobs while the update is being processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.languageModelApi.updateLanguageModel({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceLanguageModelApi.TranscribeUpdateLanguageModel,
  });
} catch (err) {
  // TODO: Handle 'err' of type LanguageModelApi.UpdateLanguageModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.languageModelApi
  .updateLanguageModel({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceLanguageModelApi.TranscribeUpdateLanguageModel,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonTranscribeServiceLanguageModelApi](src/models/xamz-target4-amazon-transcribe-service-language-model-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.languageModelApi.updateLanguageModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LanguageModelApi.UpdateLanguageModelError](src/resources/language-model-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.languageModelApi.updateLanguageModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LanguageModelApi.UpdateLanguageModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalScribeJobApi

> Source: [MedicalScribeJobApi](src/resources/medical-scribe-job-api.ts)

<details>
<summary><code>deleteMedicalScribeJob(request: MedicalScribeJobApi.DeleteMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalScribeJobApi.DeleteMedicalScribeJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalScribeJobApi.deleteMedicalScribeJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.TranscribeDeleteMedicalScribeJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalScribeJobApi.DeleteMedicalScribeJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalScribeJobApi
  .deleteMedicalScribeJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.TranscribeDeleteMedicalScribeJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi](src/models/xamz-target-amazon-transcribe-service-medical-scribe-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalScribeJobApi.deleteMedicalScribeJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalScribeJobApi.DeleteMedicalScribeJobError](src/resources/medical-scribe-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalScribeJobApi.deleteMedicalScribeJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalScribeJobApi.DeleteMedicalScribeJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMedicalScribeJob(request: MedicalScribeJobApi.GetMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalScribeJobApi.GetMedicalScribeJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalScribeJobApi.getMedicalScribeJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.TranscribeGetMedicalScribeJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalScribeJobApi.GetMedicalScribeJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalScribeJobApi
  .getMedicalScribeJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.TranscribeGetMedicalScribeJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi](src/models/xamz-target1-amazon-transcribe-service-medical-scribe-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalScribeJobApi.getMedicalScribeJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalScribeJobApi.GetMedicalScribeJobError](src/resources/medical-scribe-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalScribeJobApi.getMedicalScribeJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalScribeJobApi.GetMedicalScribeJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMedicalScribeJobs(request: MedicalScribeJobApi.ListMedicalScribeJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalScribeJobApi.ListMedicalScribeJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalScribeJobApi.listMedicalScribeJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.TranscribeListMedicalScribeJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalScribeJobApi.ListMedicalScribeJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalScribeJobApi
  .listMedicalScribeJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.TranscribeListMedicalScribeJobs,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi](src/models/xamz-target2-amazon-transcribe-service-medical-scribe-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalScribeJobApi.listMedicalScribeJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalScribeJobApi.ListMedicalScribeJobsError](src/resources/medical-scribe-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalScribeJobApi.listMedicalScribeJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalScribeJobApi.ListMedicalScribeJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMedicalScribeJob(request: MedicalScribeJobApi.StartMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalScribeJobApi.StartMedicalScribeJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalScribeJobApi.startMedicalScribeJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.TranscribeStartMedicalScribeJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalScribeJobApi.StartMedicalScribeJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalScribeJobApi
  .startMedicalScribeJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.TranscribeStartMedicalScribeJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi](src/models/xamz-target3-amazon-transcribe-service-medical-scribe-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalScribeJobApi.startMedicalScribeJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalScribeJobApi.StartMedicalScribeJobError](src/resources/medical-scribe-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalScribeJobApi.startMedicalScribeJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalScribeJobApi.StartMedicalScribeJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalTranscriptionJobApi

> Source: [MedicalTranscriptionJobApi](src/resources/medical-transcription-job-api.ts)

<details>
<summary><code>deleteMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalTranscriptionJobApi.deleteMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeDeleteMedicalTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalTranscriptionJobApi
  .deleteMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeDeleteMedicalTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi](src/models/xamz-target-amazon-transcribe-service-medical-transcription-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalTranscriptionJobApi.deleteMedicalTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError](src/resources/medical-transcription-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalTranscriptionJobApi.deleteMedicalTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.GetMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalTranscriptionJobApi.getMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeGetMedicalTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalTranscriptionJobApi
  .getMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeGetMedicalTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi](src/models/xamz-target1-amazon-transcribe-service-medical-transcription-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalTranscriptionJobApi.getMedicalTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError](src/resources/medical-transcription-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalTranscriptionJobApi.getMedicalTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMedicalTranscriptionJobs(request: MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalTranscriptionJobApi.listMedicalTranscriptionJobs({
    xAmzTarget:
      XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeListMedicalTranscriptionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalTranscriptionJobApi
  .listMedicalTranscriptionJobs({
    xAmzTarget:
      XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeListMedicalTranscriptionJobs,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi](src/models/xamz-target2-amazon-transcribe-service-medical-transcription-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalTranscriptionJobApi.listMedicalTranscriptionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError](src/resources/medical-transcription-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalTranscriptionJobApi.listMedicalTranscriptionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.StartMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalTranscriptionJobApi.startMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeStartMedicalTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalTranscriptionJobApi
  .startMedicalTranscriptionJob({
    xAmzTarget:
      XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeStartMedicalTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi](src/models/xamz-target3-amazon-transcribe-service-medical-transcription-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalTranscriptionJobApi.startMedicalTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError](src/resources/medical-transcription-job-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalTranscriptionJobApi.startMedicalTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalVocabulary

> Source: [MedicalVocabulary](src/resources/medical-vocabulary.ts)

<details>
<summary><code>createMedicalVocabulary(request: MedicalVocabulary.CreateMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalVocabulary.CreateMedicalVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalVocabulary.createMedicalVocabulary({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.TranscribeCreateMedicalVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalVocabulary.CreateMedicalVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalVocabulary
  .createMedicalVocabulary({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.TranscribeCreateMedicalVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi](src/models/xamz-target-amazon-transcribe-service-medical-vocabulary-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalVocabulary.createMedicalVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalVocabulary.CreateMedicalVocabularyError](src/resources/medical-vocabulary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalVocabulary.createMedicalVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalVocabulary.CreateMedicalVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMedicalVocabulary(request: MedicalVocabulary.DeleteMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalVocabulary.DeleteMedicalVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalVocabulary.deleteMedicalVocabulary({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.TranscribeDeleteMedicalVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalVocabulary.DeleteMedicalVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalVocabulary
  .deleteMedicalVocabulary({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.TranscribeDeleteMedicalVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi](src/models/xamz-target1-amazon-transcribe-service-medical-vocabulary-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalVocabulary.deleteMedicalVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalVocabulary.DeleteMedicalVocabularyError](src/resources/medical-vocabulary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalVocabulary.deleteMedicalVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalVocabulary.DeleteMedicalVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMedicalVocabulary(request: MedicalVocabulary.GetMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalVocabulary.GetMedicalVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalVocabulary.getMedicalVocabulary({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.TranscribeGetMedicalVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalVocabulary.GetMedicalVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalVocabulary
  .getMedicalVocabulary({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.TranscribeGetMedicalVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi](src/models/xamz-target2-amazon-transcribe-service-medical-vocabulary-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalVocabulary.getMedicalVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalVocabulary.GetMedicalVocabularyError](src/resources/medical-vocabulary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalVocabulary.getMedicalVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalVocabulary.GetMedicalVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMedicalVocabularies(request: MedicalVocabulary.ListMedicalVocabulariesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalVocabulary.ListMedicalVocabulariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalVocabulary.listMedicalVocabularies({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.TranscribeListMedicalVocabularies,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalVocabulary.ListMedicalVocabulariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalVocabulary
  .listMedicalVocabularies({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.TranscribeListMedicalVocabularies,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi](src/models/xamz-target3-amazon-transcribe-service-medical-vocabulary-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalVocabulary.listMedicalVocabularies(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalVocabulary.ListMedicalVocabulariesError](src/resources/medical-vocabulary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalVocabulary.listMedicalVocabularies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalVocabulary.ListMedicalVocabulariesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMedicalVocabulary(request: MedicalVocabulary.UpdateMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MedicalVocabulary.UpdateMedicalVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.medicalVocabulary.updateMedicalVocabulary({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.TranscribeUpdateMedicalVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type MedicalVocabulary.UpdateMedicalVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.medicalVocabulary
  .updateMedicalVocabulary({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.TranscribeUpdateMedicalVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi](src/models/xamz-target4-amazon-transcribe-service-medical-vocabulary-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.medicalVocabulary.updateMedicalVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MedicalVocabulary.UpdateMedicalVocabularyError](src/resources/medical-vocabulary.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.medicalVocabulary.updateMedicalVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MedicalVocabulary.UpdateMedicalVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>getMedicalScribeStream(request: Operations.GetMedicalScribeStreamRequest, options?: RequestOptions): ApiPromise&lt;GetMedicalScribeStreamResponse, Operations.GetMedicalScribeStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status of the streaming session, check the StreamStatus field in the response. To get the details of post-stream analytics, including its status, check the PostStreamAnalyticsResult field in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.getMedicalScribeStream({ sessionId: "some example string" });
  // TODO: Handle 'response' of type GetMedicalScribeStreamResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetMedicalScribeStreamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getMedicalScribeStream({ sessionId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMedicalScribeStreamResponse
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
| <code>sessionId</code> | <code>string</code> | The identifier of the HealthScribe streaming session you want information about. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getMedicalScribeStream(request)`

- **OnSuccess**: <code>[GetMedicalScribeStreamResponse](src/models/get-medical-scribe-stream-response.ts)</code>
- **OnError**: throws <code>[Operations.GetMedicalScribeStreamError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getMedicalScribeStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMedicalScribeStreamResponse, Operations.GetMedicalScribeStreamError&gt;</code>, with `result.value` of type <code>[GetMedicalScribeStreamResponse](src/models/get-medical-scribe-stream-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: Operations.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listTagsForResource({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceOperationsApi.TranscribeListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listTagsForResource({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceOperationsApi.TranscribeListTagsForResource,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceOperationsApi](src/models/xamz-target-amazon-transcribe-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListTagsForResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCallAnalyticsStreamTranscription(request: Operations.StartCallAnalyticsStreamTranscriptionRequest, options?: RequestOptions): ApiPromise&lt;StartCallAnalyticsStreamTranscriptionResponse, Operations.StartCallAnalyticsStreamTranscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. Use this operation for Call Analytics transcriptions. The following parameters are required: language-code or identify-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startCallAnalyticsStreamTranscription({
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
  });
  // TODO: Handle 'response' of type StartCallAnalyticsStreamTranscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartCallAnalyticsStreamTranscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startCallAnalyticsStreamTranscription({
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartCallAnalyticsStreamTranscriptionResponse
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
| <code>xAmznTranscribeSampleRate</code> | <code>number</code> | The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>xAmznTranscribeMediaEncoding</code> | <code>[XAmznTranscribeMediaEncoding1](src/models/xamzn-transcribe-media-encoding1.ts)</code> | Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>xAmznTranscribeLanguageCode?</code> | <code>[XAmznTranscribeLanguageCode1](src/models/xamzn-transcribe-language-code1.ts)</code> | Specify the language code that represents the language spoken in your audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages table. |
| <code>xAmznTranscribeVocabularyName?</code> | <code>string</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. For more information, see Custom vocabularies. |
| <code>xAmznTranscribeSessionId?</code> | <code>string</code> | Specify a name for your Call Analytics transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response. |
| <code>xAmznTranscribeVocabularyFilterName?</code> | <code>string</code> | Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary filtering with unwanted words. |
| <code>xAmznTranscribeVocabularyFilterMethod?</code> | <code>[XAmznTranscribeVocabularyFilterMethod](src/models/xamzn-transcribe-vocabulary-filter-method.ts)</code> | Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag. |
| <code>xAmznTranscribeLanguageModelName?</code> | <code>string</code> | Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models. |
| <code>xAmznTranscribeIdentifyLanguage?</code> | <code>boolean</code> | Enables automatic language identification for your Call Analytics transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two language selections. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you include both parameters, your transcri |
| <code>xAmznTranscribeLanguageOptions?</code> | <code>string</code> | Specify two or more language codes that represent the languages you think may be present in your media. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage. For a list of languages supported with Call Analytics streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request. |
| <code>xAmznTranscribePreferredLanguage?</code> | <code>[XAmznTranscribePreferredLanguage](src/models/xamzn-transcribe-preferred-language.ts)</code> | Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request. |
| <code>xAmznTranscribeVocabularyNames?</code> | <code>string</code> | Specify the names of the custom vocabularies that you want to use when processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the custom vocabulary's language doesn't match the identified media language, it won't be applied to the transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies. |
| <code>xAmznTranscribeVocabularyFilterNames?</code> | <code>string</code> | Specify the names of the custom vocabulary filters that you want to use when processing your Call Analytics transcription. Note that vocabulary filter names are case sensitive. These filters serve to customize the transcript output. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with unwanted words. |
| <code>xAmznTranscribeEnablePartialResultsStabilization?</code> | <code>boolean</code> | Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see Partial-result stabilization. |
| <code>xAmznTranscribePartialResultsStability?</code> | <code>[XAmznTranscribePartialResultsStability](src/models/xamzn-transcribe-partial-results-stability.ts)</code> | Specify the level of stability to use when you enable partial results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy. For more information, see Partial-result stabilization. |
| <code>xAmznTranscribeContentIdentificationType?</code> | <code>[XAmznTranscribeContentIdentificationType](src/models/xamzn-transcribe-content-identification-type.ts)</code> | Labels all personally identifiable information (PII) identified in your transcript. Content identification is performed at the segment level; PII specified in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and ContentRedactionType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information. |
| <code>xAmznTranscribeContentRedactionType?</code> | <code>[XAmznTranscribeContentRedactionType](src/models/xamzn-transcribe-content-redaction-type.ts)</code> | Redacts all personally identifiable information (PII) identified in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information. |
| <code>xAmznTranscribePiiEntityTypes?</code> | <code>string</code> | Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request, but do not include PiiEnti |
| <code>body?</code> | <code>[AudioStream](src/models/audio-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startCallAnalyticsStreamTranscription(request)`

- **OnSuccess**: <code>[StartCallAnalyticsStreamTranscriptionResponse](src/models/start-call-analytics-stream-transcription-response.ts)</code>
- **OnError**: throws <code>[Operations.StartCallAnalyticsStreamTranscriptionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startCallAnalyticsStreamTranscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartCallAnalyticsStreamTranscriptionResponse, Operations.StartCallAnalyticsStreamTranscriptionError&gt;</code>, with `result.value` of type <code>[StartCallAnalyticsStreamTranscriptionResponse](src/models/start-call-analytics-stream-transcription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMedicalScribeStream(request: Operations.StartMedicalScribeStreamRequest, options?: RequestOptions): ApiPromise&lt;StartMedicalScribeStreamResponse, Operations.StartMedicalScribeStreamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the transcription results are streamed to your application. When you start a stream, you first specify the stream configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input stream without sending the M

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startMedicalScribeStream({
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode.EnUs,
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding.Pcm,
  });
  // TODO: Handle 'response' of type StartMedicalScribeStreamResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartMedicalScribeStreamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startMedicalScribeStream({
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode.EnUs,
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding.Pcm,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartMedicalScribeStreamResponse
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
| <code>xAmznTranscribeLanguageCode</code> | <code>[XAmznTranscribeLanguageCode](src/models/xamzn-transcribe-language-code.ts)</code> | Specify the language code for your HealthScribe streaming session. |
| <code>xAmznTranscribeSampleRate</code> | <code>number</code> | Specify the sample rate of the input audio (in hertz). Amazon Web Services HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that of your audio. |
| <code>xAmznTranscribeMediaEncoding</code> | <code>[XAmznTranscribeMediaEncoding](src/models/xamzn-transcribe-media-encoding.ts)</code> | Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>xAmznTranscribeSessionId?</code> | <code>string</code> | Specify an identifier for your streaming session (in UUID format). If you don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns it in the response. |
| <code>body?</code> | <code>[MedicalScribeInputStream](src/models/medical-scribe-input-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startMedicalScribeStream(request)`

- **OnSuccess**: <code>[StartMedicalScribeStreamResponse](src/models/start-medical-scribe-stream-response.ts)</code>
- **OnError**: throws <code>[Operations.StartMedicalScribeStreamError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startMedicalScribeStream(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartMedicalScribeStreamResponse, Operations.StartMedicalScribeStreamError&gt;</code>, with `result.value` of type <code>[StartMedicalScribeStreamResponse](src/models/start-medical-scribe-stream-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMedicalStreamTranscription(request: Operations.StartMedicalStreamTranscriptionRequest, options?: RequestOptions): ApiPromise&lt;StartMedicalStreamTranscriptionResponse, Operations.StartMedicalStreamTranscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and the transcription results are streamed to your application. The following parameters are required: language-code media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing streaming audio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startMedicalStreamTranscription({
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode2.EnUs,
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
    xAmznTranscribeSpecialty: XAmznTranscribeSpecialty.Primarycare,
    xAmznTranscribeType: XAmznTranscribeType.Conversation,
  });
  // TODO: Handle 'response' of type StartMedicalStreamTranscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartMedicalStreamTranscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startMedicalStreamTranscription({
    xAmznTranscribeLanguageCode: XAmznTranscribeLanguageCode2.EnUs,
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
    xAmznTranscribeSpecialty: XAmznTranscribeSpecialty.Primarycare,
    xAmznTranscribeType: XAmznTranscribeType.Conversation,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartMedicalStreamTranscriptionResponse
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
| <code>xAmznTranscribeLanguageCode</code> | <code>[XAmznTranscribeLanguageCode2](src/models/xamzn-transcribe-language-code2.ts)</code> | Specify the language code that represents the language spoken in your audio. Amazon Transcribe Medical only supports US English (en-US). |
| <code>xAmznTranscribeSampleRate</code> | <code>number</code> | The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>xAmznTranscribeMediaEncoding</code> | <code>[XAmznTranscribeMediaEncoding1](src/models/xamzn-transcribe-media-encoding1.ts)</code> | Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>xAmznTranscribeSpecialty</code> | <code>[XAmznTranscribeSpecialty](src/models/xamzn-transcribe-specialty.ts)</code> | Specify the medical specialty contained in your audio. |
| <code>xAmznTranscribeType</code> | <code>[XAmznTranscribeType](src/models/xamzn-transcribe-type.ts)</code> | Specify the type of input audio. For example, choose DICTATION for a provider dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional. |
| <code>xAmznTranscribeVocabularyName?</code> | <code>string</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. |
| <code>xAmznTranscribeShowSpeakerLabel?</code> | <code>boolean</code> | Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization). |
| <code>xAmznTranscribeSessionId?</code> | <code>string</code> | Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response. |
| <code>xAmznTranscribeEnableChannelIdentification?</code> | <code>boolean</code> | Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio. |
| <code>xAmznTranscribeNumberOfChannels?</code> | <code>number</code> | Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification. |
| <code>xAmznTranscribeContentIdentificationType?</code> | <code>[XAmznTranscribeContentIdentificationType1](src/models/xamzn-transcribe-content-identification-type1.ts)</code> | Labels all personal health information (PHI) identified in your transcript. Content identification is performed at the segment level; PHI is flagged upon complete transcription of an audio segment. For more information, see Identifying personal health information (PHI) in a transcription. |
| <code>body?</code> | <code>[AudioStream](src/models/audio-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startMedicalStreamTranscription(request)`

- **OnSuccess**: <code>[StartMedicalStreamTranscriptionResponse](src/models/start-medical-stream-transcription-response.ts)</code>
- **OnError**: throws <code>[Operations.StartMedicalStreamTranscriptionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startMedicalStreamTranscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartMedicalStreamTranscriptionResponse, Operations.StartMedicalStreamTranscriptionError&gt;</code>, with `result.value` of type <code>[StartMedicalStreamTranscriptionResponse](src/models/start-medical-stream-transcription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startStreamTranscription(request: Operations.StartStreamTranscriptionRequest, options?: RequestOptions): ApiPromise&lt;StartStreamTranscriptionResponse, Operations.StartStreamTranscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. The following parameters are required: language-code or identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.operations.startStreamTranscription({
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
  });
  // TODO: Handle 'response' of type StartStreamTranscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartStreamTranscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startStreamTranscription({
    xAmznTranscribeSampleRate: 1,
    xAmznTranscribeMediaEncoding: XAmznTranscribeMediaEncoding1.Pcm,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartStreamTranscriptionResponse
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
| <code>xAmznTranscribeSampleRate</code> | <code>number</code> | The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>xAmznTranscribeMediaEncoding</code> | <code>[XAmznTranscribeMediaEncoding1](src/models/xamzn-transcribe-media-encoding1.ts)</code> | Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>xAmznTranscribeLanguageCode?</code> | <code>[XAmznTranscribeLanguageCode2](src/models/xamzn-transcribe-language-code2.ts)</code> | Specify the language code that represents the language spoken in your audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable automatic language identification. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table. |
| <code>xAmznTranscribeVocabularyName?</code> | <code>string</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more custom vocabularies with your transcription, use the VocabularyNames parameter instead. For more information, see Custom vocabularies |
| <code>xAmznTranscribeSessionId?</code> | <code>string</code> | Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response. |
| <code>xAmznTranscribeVocabularyFilterName?</code> | <code>string</code> | Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For more informatio |
| <code>xAmznTranscribeVocabularyFilterMethod?</code> | <code>[XAmznTranscribeVocabularyFilterMethod](src/models/xamzn-transcribe-vocabulary-filter-method.ts)</code> | Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag. |
| <code>xAmznTranscribeShowSpeakerLabel?</code> | <code>boolean</code> | Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization). |
| <code>xAmznTranscribeEnableChannelIdentification?</code> | <code>boolean</code> | Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio. |
| <code>xAmznTranscribeNumberOfChannels?</code> | <code>number</code> | Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification. |
| <code>xAmznTranscribeEnablePartialResultsStabilization?</code> | <code>boolean</code> | Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see Partial-result stabilization. |
| <code>xAmznTranscribePartialResultsStability?</code> | <code>[XAmznTranscribePartialResultsStability](src/models/xamzn-transcribe-partial-results-stability.ts)</code> | Specify the level of stability to use when you enable partial results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy. For more information, see Partial-result stabilization. |
| <code>xAmznTranscribeContentIdentificationType?</code> | <code>[XAmznTranscribeContentIdentificationType](src/models/xamzn-transcribe-content-identification-type.ts)</code> | Labels all personally identifiable information (PII) identified in your transcript. Content identification is performed at the segment level; PII specified in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and ContentRedactionType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information. |
| <code>xAmznTranscribeContentRedactionType?</code> | <code>[XAmznTranscribeContentRedactionType](src/models/xamzn-transcribe-content-redaction-type.ts)</code> | Redacts all personally identifiable information (PII) identified in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information. |
| <code>xAmznTranscribePiiEntityTypes?</code> | <code>string</code> | Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE, DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you in |
| <code>xAmznTranscribeLanguageModelName?</code> | <code>string</code> | Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models. |
| <code>xAmznTranscribeIdentifyLanguage?</code> | <code>boolean</code> | Enables automatic language identification for your transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. If you have multi-channel audio that contains different languages on each channel, and you've enabled channel identification, automatic language identification identifies the dominant language on eac |
| <code>xAmznTranscribeLanguageOptions?</code> | <code>string</code> | Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request. |
| <code>xAmznTranscribePreferredLanguage?</code> | <code>[XAmznTranscribePreferredLanguage1](src/models/xamzn-transcribe-preferred-language1.ts)</code> | Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request. |
| <code>xAmznTranscribeIdentifyMultipleLanguages?</code> | <code>boolean</code> | Enables automatic multi-language identification in your transcription job request. Use this parameter if your stream contains more than one language. If your stream contains only one language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic multiple language identification request, include VocabularyNames or VocabularyFilterNames. Note that you must include one of Language |
| <code>xAmznTranscribeVocabularyNames?</code> | <code>string</code> | Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If none of the languages of the specified custom vocabularies match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies. |
| <code>xAmznTranscribeVocabularyFilterNames?</code> | <code>string</code> | Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none of the languages of the specified custom vocabulary filters match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with u |
| <code>xAmznTranscribeSessionResumeWindow?</code> | <code>number</code> | Specify the time window, in minutes, during which your transcription session can be resumed, measured from the stream start time. This optional parameter accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want until 1:30 PM. |
| <code>xAmznTranscribeTranscriptFormat?</code> | <code>[XAmznTranscribeTranscriptFormat](src/models/xamzn-transcribe-transcript-format.ts)</code> | Specify how numbers, dates, and other alphanumeric entities are rendered in your transcription results. WRITTEN renders these entities in their standard written form (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value, Amazon Transcribe uses WRITTEN by default. |
| <code>body?</code> | <code>[AudioStream](src/models/audio-stream.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.startStreamTranscription(request)`

- **OnSuccess**: <code>[StartStreamTranscriptionResponse](src/models/start-stream-transcription-response.ts)</code>
- **OnError**: throws <code>[Operations.StartStreamTranscriptionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startStreamTranscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartStreamTranscriptionResponse, Operations.StartStreamTranscriptionError&gt;</code>, with `result.value` of type <code>[StartStreamTranscriptionResponse](src/models/start-stream-transcription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Operations.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.tagResource({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceOperationsApi.TranscribeTagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .tagResource({ xAmzTarget: XAmzTarget1AmazonTranscribeServiceOperationsApi.TranscribeTagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceOperationsApi](src/models/xamz-target1-amazon-transcribe-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.TagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Operations.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in your request, you must also include ResourceArn and TagKeys.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.untagResource({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceOperationsApi.TranscribeUntagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .untagResource({ xAmzTarget: XAmzTarget2AmazonTranscribeServiceOperationsApi.TranscribeUntagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceOperationsApi](src/models/xamz-target2-amazon-transcribe-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UntagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TranscriptionJobs

> Source: [TranscriptionJobs](src/resources/transcription-jobs.ts)

<details>
<summary><code>deleteTranscriptionJob(request: TranscriptionJobs.DeleteTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TranscriptionJobs.DeleteTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transcriptionJobs.deleteTranscriptionJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.TranscribeDeleteTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type TranscriptionJobs.DeleteTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcriptionJobs
  .deleteTranscriptionJob({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.TranscribeDeleteTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi](src/models/xamz-target-amazon-transcribe-service-transcription-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcriptionJobs.deleteTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TranscriptionJobs.DeleteTranscriptionJobError](src/resources/transcription-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcriptionJobs.deleteTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TranscriptionJobs.DeleteTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTranscriptionJob(request: TranscriptionJobs.GetTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TranscriptionJobs.GetTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transcriptionJobs.getTranscriptionJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.TranscribeGetTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type TranscriptionJobs.GetTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcriptionJobs
  .getTranscriptionJob({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.TranscribeGetTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi](src/models/xamz-target1-amazon-transcribe-service-transcription-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcriptionJobs.getTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TranscriptionJobs.GetTranscriptionJobError](src/resources/transcription-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcriptionJobs.getTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TranscriptionJobs.GetTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTranscriptionJobs(request: TranscriptionJobs.ListTranscriptionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TranscriptionJobs.ListTranscriptionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transcriptionJobs.listTranscriptionJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.TranscribeListTranscriptionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type TranscriptionJobs.ListTranscriptionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcriptionJobs
  .listTranscriptionJobs({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.TranscribeListTranscriptionJobs,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi](src/models/xamz-target2-amazon-transcribe-service-transcription-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcriptionJobs.listTranscriptionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TranscriptionJobs.ListTranscriptionJobsError](src/resources/transcription-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcriptionJobs.listTranscriptionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TranscriptionJobs.ListTranscriptionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTranscriptionJob(request: TranscriptionJobs.StartTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TranscriptionJobs.StartTranscriptionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.transcriptionJobs.startTranscriptionJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.TranscribeStartTranscriptionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type TranscriptionJobs.StartTranscriptionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transcriptionJobs
  .startTranscriptionJob({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.TranscribeStartTranscriptionJob,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi](src/models/xamz-target3-amazon-transcribe-service-transcription-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transcriptionJobs.startTranscriptionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TranscriptionJobs.StartTranscriptionJobError](src/resources/transcription-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transcriptionJobs.startTranscriptionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TranscriptionJobs.StartTranscriptionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Vocabularies

> Source: [Vocabularies](src/resources/vocabularies.ts)

<details>
<summary><code>createVocabulary(request: Vocabularies.CreateVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Vocabularies.CreateVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the Phrases flag. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularies.createVocabulary({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabulariesApi.TranscribeCreateVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type Vocabularies.CreateVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularies
  .createVocabulary({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabulariesApi.TranscribeCreateVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceVocabulariesApi](src/models/xamz-target-amazon-transcribe-service-vocabularies-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularies.createVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vocabularies.CreateVocabularyError](src/resources/vocabularies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularies.createVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vocabularies.CreateVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVocabulary(request: Vocabularies.DeleteVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Vocabularies.DeleteVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularies.deleteVocabulary({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabulariesApi.TranscribeDeleteVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type Vocabularies.DeleteVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularies
  .deleteVocabulary({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabulariesApi.TranscribeDeleteVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceVocabulariesApi](src/models/xamz-target1-amazon-transcribe-service-vocabularies-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularies.deleteVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vocabularies.DeleteVocabularyError](src/resources/vocabularies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularies.deleteVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vocabularies.DeleteVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVocabulary(request: Vocabularies.GetVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Vocabularies.GetVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary. To view the status of the specified custom vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of your custom vocabularies, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularies.getVocabulary({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabulariesApi.TranscribeGetVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type Vocabularies.GetVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularies
  .getVocabulary({ xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabulariesApi.TranscribeGetVocabulary })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceVocabulariesApi](src/models/xamz-target2-amazon-transcribe-service-vocabularies-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularies.getVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vocabularies.GetVocabularyError](src/resources/vocabularies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularies.getVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vocabularies.GetVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVocabularies(request: Vocabularies.ListVocabulariesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Vocabularies.ListVocabulariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularies.listVocabularies({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabulariesApi.TranscribeListVocabularies,
  });
} catch (err) {
  // TODO: Handle 'err' of type Vocabularies.ListVocabulariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularies
  .listVocabularies({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabulariesApi.TranscribeListVocabularies,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceVocabulariesApi](src/models/xamz-target3-amazon-transcribe-service-vocabularies-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularies.listVocabularies(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vocabularies.ListVocabulariesError](src/resources/vocabularies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularies.listVocabularies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vocabularies.ListVocabulariesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVocabulary(request: Vocabularies.UpdateVocabularyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Vocabularies.UpdateVocabularyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or VocabularyFileUri in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularies.updateVocabulary({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabulariesApi.TranscribeUpdateVocabulary,
  });
} catch (err) {
  // TODO: Handle 'err' of type Vocabularies.UpdateVocabularyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularies
  .updateVocabulary({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabulariesApi.TranscribeUpdateVocabulary,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonTranscribeServiceVocabulariesApi](src/models/xamz-target4-amazon-transcribe-service-vocabularies-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularies.updateVocabulary(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vocabularies.UpdateVocabularyError](src/resources/vocabularies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularies.updateVocabulary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vocabularies.UpdateVocabularyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VocabularyFilter

> Source: [VocabularyFilter](src/resources/vocabulary-filter.ts)

<details>
<summary><code>createVocabularyFilter(request: VocabularyFilter.CreateVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, VocabularyFilter.CreateVocabularyFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularyFilter.createVocabularyFilter({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.TranscribeCreateVocabularyFilter,
  });
} catch (err) {
  // TODO: Handle 'err' of type VocabularyFilter.CreateVocabularyFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularyFilter
  .createVocabularyFilter({
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.TranscribeCreateVocabularyFilter,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonTranscribeServiceVocabularyFilterApi](src/models/xamz-target-amazon-transcribe-service-vocabulary-filter-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularyFilter.createVocabularyFilter(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VocabularyFilter.CreateVocabularyFilterError](src/resources/vocabulary-filter.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularyFilter.createVocabularyFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VocabularyFilter.CreateVocabularyFilterError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVocabularyFilter(request: VocabularyFilter.DeleteVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, VocabularyFilter.DeleteVocabularyFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularyFilter.deleteVocabularyFilter({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.TranscribeDeleteVocabularyFilter,
  });
} catch (err) {
  // TODO: Handle 'err' of type VocabularyFilter.DeleteVocabularyFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularyFilter
  .deleteVocabularyFilter({
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.TranscribeDeleteVocabularyFilter,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi](src/models/xamz-target1-amazon-transcribe-service-vocabulary-filter-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularyFilter.deleteVocabularyFilter(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VocabularyFilter.DeleteVocabularyFilterError](src/resources/vocabulary-filter.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularyFilter.deleteVocabularyFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VocabularyFilter.DeleteVocabularyFilterError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVocabularyFilter(request: VocabularyFilter.GetVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, VocabularyFilter.GetVocabularyFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularyFilter.getVocabularyFilter({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.TranscribeGetVocabularyFilter,
  });
} catch (err) {
  // TODO: Handle 'err' of type VocabularyFilter.GetVocabularyFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularyFilter
  .getVocabularyFilter({
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.TranscribeGetVocabularyFilter,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi](src/models/xamz-target2-amazon-transcribe-service-vocabulary-filter-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularyFilter.getVocabularyFilter(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VocabularyFilter.GetVocabularyFilterError](src/resources/vocabulary-filter.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularyFilter.getVocabularyFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VocabularyFilter.GetVocabularyFilterError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVocabularyFilters(request: VocabularyFilter.ListVocabularyFiltersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, VocabularyFilter.ListVocabularyFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularyFilter.listVocabularyFilters({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.TranscribeListVocabularyFilters,
  });
} catch (err) {
  // TODO: Handle 'err' of type VocabularyFilter.ListVocabularyFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularyFilter
  .listVocabularyFilters({
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.TranscribeListVocabularyFilters,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi](src/models/xamz-target3-amazon-transcribe-service-vocabulary-filter-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularyFilter.listVocabularyFilters(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VocabularyFilter.ListVocabularyFiltersError](src/resources/vocabulary-filter.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularyFilter.listVocabularyFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VocabularyFilter.ListVocabularyFiltersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVocabularyFilter(request: VocabularyFilter.UpdateVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, VocabularyFilter.UpdateVocabularyFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include either Words or VocabularyFilterFileUri in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vocabularyFilter.updateVocabularyFilter({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.TranscribeUpdateVocabularyFilter,
  });
} catch (err) {
  // TODO: Handle 'err' of type VocabularyFilter.UpdateVocabularyFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vocabularyFilter
  .updateVocabularyFilter({
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.TranscribeUpdateVocabularyFilter,
  })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi](src/models/xamz-target4-amazon-transcribe-service-vocabulary-filter-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vocabularyFilter.updateVocabularyFilter(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VocabularyFilter.UpdateVocabularyFilterError](src/resources/vocabulary-filter.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vocabularyFilter.updateVocabularyFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VocabularyFilter.UpdateVocabularyFilterError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonTranscribeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

