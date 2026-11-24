# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonTranscribeClient](amazon_transcribe/client.py)

## CallAnalyticsCategory

> Source: [CallAnalyticsCategory](amazon_transcribe/apis/call_analytics_category.py)

<details>
<summary><code>def create_call_analytics_category(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateCallAnalyticsCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_category.with_raw_response.create_call_analytics_category(
    XAmzTarget.TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCallAnalyticsCategoryErrorBody
```

**Async**

```python
result = await async_client.call_analytics_category.with_raw_response.create_call_analytics_category(
    XAmzTarget.TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCallAnalyticsCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_transcribe/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [CreateCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/create_call_analytics_category_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/create_call_analytics_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_call_analytics_category(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCallAnalyticsCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_category.with_raw_response.delete_call_analytics_category(
    XAmzTarget1.TRANSCRIBE_DELETE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCallAnalyticsCategoryErrorBody
```

**Async**

```python
result = await async_client.call_analytics_category.with_raw_response.delete_call_analytics_category(
    XAmzTarget1.TRANSCRIBE_DELETE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCallAnalyticsCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_transcribe/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/delete_call_analytics_category_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/delete_call_analytics_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_call_analytics_category(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetCallAnalyticsCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_category.with_raw_response.get_call_analytics_category(
    XAmzTarget2.TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallAnalyticsCategoryErrorBody
```

**Async**

```python
result = await async_client.call_analytics_category.with_raw_response.get_call_analytics_category(
    XAmzTarget2.TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallAnalyticsCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_transcribe/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/get_call_analytics_category_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/get_call_analytics_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_call_analytics_categories(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListCallAnalyticsCategoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_category.with_raw_response.list_call_analytics_categories(
    XAmzTarget3.TRANSCRIBE_LIST_CALL_ANALYTICS_CATEGORIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallAnalyticsCategoriesErrorBody
```

**Async**

```python
result = await async_client.call_analytics_category.with_raw_response.list_call_analytics_categories(
    XAmzTarget3.TRANSCRIBE_LIST_CALL_ANALYTICS_CATEGORIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallAnalyticsCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_transcribe/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListCallAnalyticsCategoriesErrorBody](amazon_transcribe/errors/list_call_analytics_categories_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListCallAnalyticsCategoriesErrorBody](amazon_transcribe/errors/list_call_analytics_categories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_call_analytics_category(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateCallAnalyticsCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_category.with_raw_response.update_call_analytics_category(
    XAmzTarget4.TRANSCRIBE_UPDATE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCallAnalyticsCategoryErrorBody
```

**Async**

```python
result = await async_client.call_analytics_category.with_raw_response.update_call_analytics_category(
    XAmzTarget4.TRANSCRIBE_UPDATE_CALL_ANALYTICS_CATEGORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCallAnalyticsCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_transcribe/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UpdateCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/update_call_analytics_category_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateCallAnalyticsCategoryErrorBody](amazon_transcribe/errors/update_call_analytics_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CallAnalyticsJobApi

> Source: [CallAnalyticsJobApi](amazon_transcribe/apis/call_analytics_job_api.py)

<details>
<summary><code>def delete_call_analytics_job(x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCallAnalyticsJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_job_api.with_raw_response.delete_call_analytics_job(
    XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_DELETE_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCallAnalyticsJobErrorBody
```

**Async**

```python
result = await async_client.call_analytics_job_api.with_raw_response.delete_call_analytics_job(
    XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_DELETE_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCallAnalyticsJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_call_analytics_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteCallAnalyticsJobErrorBody](amazon_transcribe/errors/delete_call_analytics_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCallAnalyticsJobErrorBody](amazon_transcribe/errors/delete_call_analytics_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_call_analytics_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetCallAnalyticsJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_job_api.with_raw_response.get_call_analytics_job(
    XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_GET_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallAnalyticsJobErrorBody
```

**Async**

```python
result = await async_client.call_analytics_job_api.with_raw_response.get_call_analytics_job(
    XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_GET_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCallAnalyticsJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_call_analytics_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetCallAnalyticsJobErrorBody](amazon_transcribe/errors/get_call_analytics_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetCallAnalyticsJobErrorBody](amazon_transcribe/errors/get_call_analytics_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_call_analytics_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListCallAnalyticsJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_job_api.with_raw_response.list_call_analytics_jobs(
    XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_LIST_CALL_ANALYTICS_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallAnalyticsJobsErrorBody
```

**Async**

```python
result = await async_client.call_analytics_job_api.with_raw_response.list_call_analytics_jobs(
    XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_LIST_CALL_ANALYTICS_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCallAnalyticsJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_call_analytics_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListCallAnalyticsJobsErrorBody](amazon_transcribe/errors/list_call_analytics_jobs_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListCallAnalyticsJobsErrorBody](amazon_transcribe/errors/list_call_analytics_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_call_analytics_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartCallAnalyticsJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.call_analytics_job_api.with_raw_response.start_call_analytics_job(
    XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_START_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCallAnalyticsJobErrorBody
```

**Async**

```python
result = await async_client.call_analytics_job_api.with_raw_response.start_call_analytics_job(
    XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.TRANSCRIBE_START_CALL_ANALYTICS_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCallAnalyticsJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_call_analytics_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [StartCallAnalyticsJobErrorBody](amazon_transcribe/errors/start_call_analytics_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartCallAnalyticsJobErrorBody](amazon_transcribe/errors/start_call_analytics_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LanguageModelApi

> Source: [LanguageModelApi](amazon_transcribe/apis/language_model_api.py)

<details>
<summary><code>def create_language_model(x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateLanguageModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.language_model_api.with_raw_response.create_language_model(
    XAmzTargetAmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_CREATE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLanguageModelErrorBody
```

**Async**

```python
result = await async_client.language_model_api.with_raw_response.create_language_model(
    XAmzTargetAmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_CREATE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLanguageModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_language_model_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [CreateLanguageModelErrorBody](amazon_transcribe/errors/create_language_model_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateLanguageModelErrorBody](amazon_transcribe/errors/create_language_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_language_model(x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteLanguageModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.language_model_api.with_raw_response.delete_language_model(
    XAmzTarget1AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_DELETE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLanguageModelErrorBody
```

**Async**

```python
result = await async_client.language_model_api.with_raw_response.delete_language_model(
    XAmzTarget1AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_DELETE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLanguageModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_language_model_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteLanguageModelErrorBody](amazon_transcribe/errors/delete_language_model_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteLanguageModelErrorBody](amazon_transcribe/errors/delete_language_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_language_model(x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeLanguageModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.language_model_api.with_raw_response.describe_language_model(
    XAmzTarget2AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_DESCRIBE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeLanguageModelErrorBody
```

**Async**

```python
result = await async_client.language_model_api.with_raw_response.describe_language_model(
    XAmzTarget2AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_DESCRIBE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeLanguageModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_language_model_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DescribeLanguageModelErrorBody](amazon_transcribe/errors/describe_language_model_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeLanguageModelErrorBody](amazon_transcribe/errors/describe_language_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_language_models(x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListLanguageModelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.language_model_api.with_raw_response.list_language_models(
    XAmzTarget3AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_LIST_LANGUAGE_MODELS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLanguageModelsErrorBody
```

**Async**

```python
result = await async_client.language_model_api.with_raw_response.list_language_models(
    XAmzTarget3AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_LIST_LANGUAGE_MODELS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLanguageModelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_language_model_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListLanguageModelsErrorBody](amazon_transcribe/errors/list_language_models_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListLanguageModelsErrorBody](amazon_transcribe/errors/list_language_models_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_language_model(x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateLanguageModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for an existing custom language model. You can use this operation to change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model training is required. Your custom language model must not be in the IN_PROGRESS state when you call this operation. You cannot submit another update while a previous update is in progress. Use to check the current state of your model. Your custom language model remains available for transcription jobs while the update is being processed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.language_model_api.with_raw_response.update_language_model(
    XAmzTarget4AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_UPDATE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLanguageModelErrorBody
```

**Async**

```python
result = await async_client.language_model_api.with_raw_response.update_language_model(
    XAmzTarget4AmazonTranscribeServiceLanguageModelApi.TRANSCRIBE_UPDATE_LANGUAGE_MODEL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLanguageModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr](amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_language_model_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UpdateLanguageModelErrorBody](amazon_transcribe/errors/update_language_model_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateLanguageModelErrorBody](amazon_transcribe/errors/update_language_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalScribeJobApi

> Source: [MedicalScribeJobApi](amazon_transcribe/apis/medical_scribe_job_api.py)

<details>
<summary><code>def delete_medical_scribe_job(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMedicalScribeJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_scribe_job_api.with_raw_response.delete_medical_scribe_job(
    XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_DELETE_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalScribeJobErrorBody
```

**Async**

```python
result = await async_client.medical_scribe_job_api.with_raw_response.delete_medical_scribe_job(
    XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_DELETE_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalScribeJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_scribe_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteMedicalScribeJobErrorBody](amazon_transcribe/errors/delete_medical_scribe_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMedicalScribeJobErrorBody](amazon_transcribe/errors/delete_medical_scribe_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_medical_scribe_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetMedicalScribeJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_scribe_job_api.with_raw_response.get_medical_scribe_job(
    XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_GET_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalScribeJobErrorBody
```

**Async**

```python
result = await async_client.medical_scribe_job_api.with_raw_response.get_medical_scribe_job(
    XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_GET_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalScribeJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_scribe_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetMedicalScribeJobErrorBody](amazon_transcribe/errors/get_medical_scribe_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetMedicalScribeJobErrorBody](amazon_transcribe/errors/get_medical_scribe_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_medical_scribe_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListMedicalScribeJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_scribe_job_api.with_raw_response.list_medical_scribe_jobs(
    XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_LIST_MEDICAL_SCRIBE_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalScribeJobsErrorBody
```

**Async**

```python
result = await async_client.medical_scribe_job_api.with_raw_response.list_medical_scribe_jobs(
    XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_LIST_MEDICAL_SCRIBE_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalScribeJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_scribe_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListMedicalScribeJobsErrorBody](amazon_transcribe/errors/list_medical_scribe_jobs_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListMedicalScribeJobsErrorBody](amazon_transcribe/errors/list_medical_scribe_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_medical_scribe_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartMedicalScribeJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_scribe_job_api.with_raw_response.start_medical_scribe_job(
    XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_START_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalScribeJobErrorBody
```

**Async**

```python
result = await async_client.medical_scribe_job_api.with_raw_response.start_medical_scribe_job(
    XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.TRANSCRIBE_START_MEDICAL_SCRIBE_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalScribeJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_scribe_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [StartMedicalScribeJobErrorBody](amazon_transcribe/errors/start_medical_scribe_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartMedicalScribeJobErrorBody](amazon_transcribe/errors/start_medical_scribe_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalTranscriptionJobApi

> Source: [MedicalTranscriptionJobApi](amazon_transcribe/apis/medical_transcription_job_api.py)

<details>
<summary><code>def delete_medical_transcription_job(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMedicalTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_transcription_job_api.with_raw_response.delete_medical_transcription_job(
    XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_DELETE_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.medical_transcription_job_api.with_raw_response.delete_medical_transcription_job(
    XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_DELETE_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_transcription_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/delete_medical_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/delete_medical_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_medical_transcription_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetMedicalTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_transcription_job_api.with_raw_response.get_medical_transcription_job(
    XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_GET_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.medical_transcription_job_api.with_raw_response.get_medical_transcription_job(
    XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_GET_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_transcription_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/get_medical_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/get_medical_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_medical_transcription_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListMedicalTranscriptionJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_transcription_job_api.with_raw_response.list_medical_transcription_jobs(
    XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalTranscriptionJobsErrorBody
```

**Async**

```python
result = await async_client.medical_transcription_job_api.with_raw_response.list_medical_transcription_jobs(
    XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalTranscriptionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_transcription_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListMedicalTranscriptionJobsErrorBody](amazon_transcribe/errors/list_medical_transcription_jobs_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListMedicalTranscriptionJobsErrorBody](amazon_transcribe/errors/list_medical_transcription_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_medical_transcription_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartMedicalTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_transcription_job_api.with_raw_response.start_medical_transcription_job(
    XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_START_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.medical_transcription_job_api.with_raw_response.start_medical_transcription_job(
    XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.TRANSCRIBE_START_MEDICAL_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_transcription_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [StartMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/start_medical_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartMedicalTranscriptionJobErrorBody](amazon_transcribe/errors/start_medical_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalVocabulary

> Source: [MedicalVocabulary](amazon_transcribe/apis/medical_vocabulary.py)

<details>
<summary><code>def create_medical_vocabulary(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateMedicalVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_vocabulary.with_raw_response.create_medical_vocabulary(
    XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_CREATE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMedicalVocabularyErrorBody
```

**Async**

```python
result = await async_client.medical_vocabulary.with_raw_response.create_medical_vocabulary(
    XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_CREATE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMedicalVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_vocabulary_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [CreateMedicalVocabularyErrorBody](amazon_transcribe/errors/create_medical_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateMedicalVocabularyErrorBody](amazon_transcribe/errors/create_medical_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_medical_vocabulary(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMedicalVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_vocabulary.with_raw_response.delete_medical_vocabulary(
    XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_DELETE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalVocabularyErrorBody
```

**Async**

```python
result = await async_client.medical_vocabulary.with_raw_response.delete_medical_vocabulary(
    XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_DELETE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMedicalVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_vocabulary_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteMedicalVocabularyErrorBody](amazon_transcribe/errors/delete_medical_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMedicalVocabularyErrorBody](amazon_transcribe/errors/delete_medical_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_medical_vocabulary(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetMedicalVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_vocabulary.with_raw_response.get_medical_vocabulary(
    XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_GET_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalVocabularyErrorBody
```

**Async**

```python
result = await async_client.medical_vocabulary.with_raw_response.get_medical_vocabulary(
    XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_GET_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_vocabulary_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetMedicalVocabularyErrorBody](amazon_transcribe/errors/get_medical_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetMedicalVocabularyErrorBody](amazon_transcribe/errors/get_medical_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_medical_vocabularies(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListMedicalVocabulariesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_vocabulary.with_raw_response.list_medical_vocabularies(
    XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_LIST_MEDICAL_VOCABULARIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalVocabulariesErrorBody
```

**Async**

```python
result = await async_client.medical_vocabulary.with_raw_response.list_medical_vocabularies(
    XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_LIST_MEDICAL_VOCABULARIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMedicalVocabulariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_vocabulary_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListMedicalVocabulariesErrorBody](amazon_transcribe/errors/list_medical_vocabularies_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListMedicalVocabulariesErrorBody](amazon_transcribe/errors/list_medical_vocabularies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_medical_vocabulary(x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateMedicalVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.medical_vocabulary.with_raw_response.update_medical_vocabulary(
    XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_UPDATE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMedicalVocabularyErrorBody
```

**Async**

```python
result = await async_client.medical_vocabulary.with_raw_response.update_medical_vocabulary(
    XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.TRANSCRIBE_UPDATE_MEDICAL_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMedicalVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr](amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_medical_vocabulary_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UpdateMedicalVocabularyErrorBody](amazon_transcribe/errors/update_medical_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateMedicalVocabularyErrorBody](amazon_transcribe/errors/update_medical_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_transcribe/apis/operations.py)

<details>
<summary><code>def get_medical_scribe_stream(session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetMedicalScribeStreamResponse, GetMedicalScribeStreamErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status of the streaming session, check the StreamStatus field in the response. To get the details of post-stream analytics, including its status, check the PostStreamAnalyticsResult field in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.get_medical_scribe_stream("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetMedicalScribeStreamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalScribeStreamErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_medical_scribe_stream("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetMedicalScribeStreamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMedicalScribeStreamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str</code> | The identifier of the HealthScribe streaming session you want information about. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;[GetMedicalScribeStreamResponse](amazon_transcribe/models/get_medical_scribe_stream_response.py), [GetMedicalScribeStreamErrorBody](amazon_transcribe/errors/get_medical_scribe_stream_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetMedicalScribeStreamResponse](amazon_transcribe/models/get_medical_scribe_stream_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetMedicalScribeStreamErrorBody](amazon_transcribe/errors/get_medical_scribe_stream_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_transcribe/models/bad_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_transcribe/models/resource_not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_transcribe/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_transcribe/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListTagsForResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.list_tags_for_resource(
    XAmzTargetAmazonTranscribeServiceOperationsApi.TRANSCRIBE_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.list_tags_for_resource(
    XAmzTargetAmazonTranscribeServiceOperationsApi.TRANSCRIBE_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceOperationsApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListTagsForResourceErrorBody](amazon_transcribe/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](amazon_transcribe/errors/list_tags_for_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_call_analytics_stream_transcription(x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, *, x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_vocabulary_filter_name: str | None = None, x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None, x_amzn_transcribe_language_model_name: str | None = None, x_amzn_transcribe_identify_language: bool | None = None, x_amzn_transcribe_language_options: str | None = None, x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None, x_amzn_transcribe_vocabulary_names: str | None = None, x_amzn_transcribe_vocabulary_filter_names: str | None = None, x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None, x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None, x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None, x_amzn_transcribe_pii_entity_types: str | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartCallAnalyticsStreamTranscriptionResponse, StartCallAnalyticsStreamTranscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. Use this operation for Call Analytics transcriptions. The following parameters are required: language-code or identify-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_call_analytics_stream_transcription(
    1, XAmznTranscribeMediaEncoding1.PCM
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartCallAnalyticsStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCallAnalyticsStreamTranscriptionErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_call_analytics_stream_transcription(
    1, XAmznTranscribeMediaEncoding1.PCM
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartCallAnalyticsStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCallAnalyticsStreamTranscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amzn_transcribe_sample_rate</code> | <code>int</code> | The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>x_amzn_transcribe_media_encoding</code> | <code>[XAmznTranscribeMediaEncoding1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py)</code> | Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>x_amzn_transcribe_language_code</code> | <code>[XAmznTranscribeLanguageCode1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_language_code1.py) \| None</code> | Specify the language code that represents the language spoken in your audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages table.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_name</code> | <code>str \| None</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. For more information, see Custom vocabularies.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_session_id</code> | <code>str \| None</code> | Specify a name for your Call Analytics transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_name</code> | <code>str \| None</code> | Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary filtering with unwanted words.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_method</code> | <code>[XAmznTranscribeVocabularyFilterMethodOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_vocabulary_filter_method.py) \| None</code> | Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_language_model_name</code> | <code>str \| None</code> | Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_identify_language</code> | <code>bool \| None</code> | Enables automatic language identification for your Call Analytics transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two language selections. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you include both parameters, your transcri<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_language_options</code> | <code>str \| None</code> | Specify two or more language codes that represent the languages you think may be present in your media. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage. For a list of languages supported with Call Analytics streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_preferred_language</code> | <code>[XAmznTranscribePreferredLanguageOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_preferred_language.py) \| None</code> | Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_names</code> | <code>str \| None</code> | Specify the names of the custom vocabularies that you want to use when processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the custom vocabulary's language doesn't match the identified media language, it won't be applied to the transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_names</code> | <code>str \| None</code> | Specify the names of the custom vocabulary filters that you want to use when processing your Call Analytics transcription. Note that vocabulary filter names are case sensitive. These filters serve to customize the transcript output. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with unwanted words.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_enable_partial_results_stabilization</code> | <code>bool \| None</code> | Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see Partial-result stabilization.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_partial_results_stability</code> | <code>[XAmznTranscribePartialResultsStabilityOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_partial_results_stability.py) \| None</code> | Specify the level of stability to use when you enable partial results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy. For more information, see Partial-result stabilization.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_content_identification_type</code> | <code>[XAmznTranscribeContentIdentificationTypeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type.py) \| None</code> | Labels all personally identifiable information (PII) identified in your transcript. Content identification is performed at the segment level; PII specified in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and ContentRedactionType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_content_redaction_type</code> | <code>[XAmznTranscribeContentRedactionTypeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_content_redaction_type.py) \| None</code> | Redacts all personally identifiable information (PII) identified in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_pii_entity_types</code> | <code>str \| None</code> | Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request, but do not include PiiEnti<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[AudioStream](amazon_transcribe/models/audio_stream.py) \| [AudioStreamDict](amazon_transcribe/models/audio_stream.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;[StartCallAnalyticsStreamTranscriptionResponse](amazon_transcribe/models/start_call_analytics_stream_transcription_response.py), [StartCallAnalyticsStreamTranscriptionErrorBody](amazon_transcribe/errors/start_call_analytics_stream_transcription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartCallAnalyticsStreamTranscriptionResponse](amazon_transcribe/models/start_call_analytics_stream_transcription_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartCallAnalyticsStreamTranscriptionErrorBody](amazon_transcribe/errors/start_call_analytics_stream_transcription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_transcribe/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_transcribe/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_transcribe/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_transcribe/models/internal_failure_exception.py)</code> |
| 503 | <code>[ServiceUnavailableException](amazon_transcribe/models/service_unavailable_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_medical_scribe_stream(x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr, x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr, *, x_amzn_transcribe_session_id: str | None = None, body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartMedicalScribeStreamResponse, StartMedicalScribeStreamErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the transcription results are streamed to your application. When you start a stream, you first specify the stream configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input stream without sending the M

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_medical_scribe_stream(
    XAmznTranscribeLanguageCode.EN_US, 1, XAmznTranscribeMediaEncoding.PCM
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartMedicalScribeStreamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalScribeStreamErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_medical_scribe_stream(
    XAmznTranscribeLanguageCode.EN_US, 1, XAmznTranscribeMediaEncoding.PCM
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartMedicalScribeStreamResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalScribeStreamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amzn_transcribe_language_code</code> | <code>[XAmznTranscribeLanguageCodeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_language_code.py)</code> | Specify the language code for your HealthScribe streaming session. |
| <code>x_amzn_transcribe_sample_rate</code> | <code>int</code> | Specify the sample rate of the input audio (in hertz). Amazon Web Services HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that of your audio. |
| <code>x_amzn_transcribe_media_encoding</code> | <code>[XAmznTranscribeMediaEncodingOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding.py)</code> | Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>x_amzn_transcribe_session_id</code> | <code>str \| None</code> | Specify an identifier for your streaming session (in UUID format). If you don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns it in the response.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[MedicalScribeInputStream](amazon_transcribe/models/medical_scribe_input_stream.py) \| [MedicalScribeInputStreamDict](amazon_transcribe/models/medical_scribe_input_stream.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;[StartMedicalScribeStreamResponse](amazon_transcribe/models/start_medical_scribe_stream_response.py), [StartMedicalScribeStreamErrorBody](amazon_transcribe/errors/start_medical_scribe_stream_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartMedicalScribeStreamResponse](amazon_transcribe/models/start_medical_scribe_stream_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartMedicalScribeStreamErrorBody](amazon_transcribe/errors/start_medical_scribe_stream_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_transcribe/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_transcribe/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_transcribe/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_transcribe/models/internal_failure_exception.py)</code> |
| 503 | <code>[ServiceUnavailableException](amazon_transcribe/models/service_unavailable_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_medical_stream_transcription(x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr, x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr, x_amzn_transcribe_type: XAmznTranscribeTypeOrStr, *, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_show_speaker_label: bool | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_enable_channel_identification: bool | None = None, x_amzn_transcribe_number_of_channels: int | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartMedicalStreamTranscriptionResponse, StartMedicalStreamTranscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and the transcription results are streamed to your application. The following parameters are required: language-code media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_medical_stream_transcription(
    XAmznTranscribeLanguageCode2.EN_US,
    1,
    XAmznTranscribeMediaEncoding1.PCM,
    XAmznTranscribeSpecialty.PRIMARYCARE,
    XAmznTranscribeType.CONVERSATION,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartMedicalStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalStreamTranscriptionErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_medical_stream_transcription(
    XAmznTranscribeLanguageCode2.EN_US,
    1,
    XAmznTranscribeMediaEncoding1.PCM,
    XAmznTranscribeSpecialty.PRIMARYCARE,
    XAmznTranscribeType.CONVERSATION,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartMedicalStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMedicalStreamTranscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amzn_transcribe_language_code</code> | <code>[XAmznTranscribeLanguageCode2OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_language_code2.py)</code> | Specify the language code that represents the language spoken in your audio. Amazon Transcribe Medical only supports US English (en-US). |
| <code>x_amzn_transcribe_sample_rate</code> | <code>int</code> | The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>x_amzn_transcribe_media_encoding</code> | <code>[XAmznTranscribeMediaEncoding1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py)</code> | Specify the encoding used for the input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>x_amzn_transcribe_specialty</code> | <code>[XAmznTranscribeSpecialtyOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_specialty.py)</code> | Specify the medical specialty contained in your audio. |
| <code>x_amzn_transcribe_type</code> | <code>[XAmznTranscribeTypeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_type.py)</code> | Specify the type of input audio. For example, choose DICTATION for a provider dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional. |
| <code>x_amzn_transcribe_vocabulary_name</code> | <code>str \| None</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_show_speaker_label</code> | <code>bool \| None</code> | Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization).<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_session_id</code> | <code>str \| None</code> | Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_enable_channel_identification</code> | <code>bool \| None</code> | Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_number_of_channels</code> | <code>int \| None</code> | Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_content_identification_type</code> | <code>[XAmznTranscribeContentIdentificationType1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type1.py) \| None</code> | Labels all personal health information (PHI) identified in your transcript. Content identification is performed at the segment level; PHI is flagged upon complete transcription of an audio segment. For more information, see Identifying personal health information (PHI) in a transcription.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[AudioStream](amazon_transcribe/models/audio_stream.py) \| [AudioStreamDict](amazon_transcribe/models/audio_stream.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;[StartMedicalStreamTranscriptionResponse](amazon_transcribe/models/start_medical_stream_transcription_response.py), [StartMedicalStreamTranscriptionErrorBody](amazon_transcribe/errors/start_medical_stream_transcription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartMedicalStreamTranscriptionResponse](amazon_transcribe/models/start_medical_stream_transcription_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartMedicalStreamTranscriptionErrorBody](amazon_transcribe/errors/start_medical_stream_transcription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_transcribe/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_transcribe/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_transcribe/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_transcribe/models/internal_failure_exception.py)</code> |
| 503 | <code>[ServiceUnavailableException](amazon_transcribe/models/service_unavailable_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_stream_transcription(x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, *, x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_vocabulary_filter_name: str | None = None, x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None, x_amzn_transcribe_show_speaker_label: bool | None = None, x_amzn_transcribe_enable_channel_identification: bool | None = None, x_amzn_transcribe_number_of_channels: int | None = None, x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None, x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None, x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None, x_amzn_transcribe_pii_entity_types: str | None = None, x_amzn_transcribe_language_model_name: str | None = None, x_amzn_transcribe_identify_language: bool | None = None, x_amzn_transcribe_language_options: str | None = None, x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None, x_amzn_transcribe_identify_multiple_languages: bool | None = None, x_amzn_transcribe_vocabulary_names: str | None = None, x_amzn_transcribe_vocabulary_filter_names: str | None = None, x_amzn_transcribe_session_resume_window: int | None = None, x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartStreamTranscriptionResponse, StartStreamTranscriptionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. The following parameters are required: language-code or identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_stream_transcription(1, XAmznTranscribeMediaEncoding1.PCM)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartStreamTranscriptionErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_stream_transcription(
    1, XAmznTranscribeMediaEncoding1.PCM
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartStreamTranscriptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartStreamTranscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amzn_transcribe_sample_rate</code> | <code>int</code> | The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio. |
| <code>x_amzn_transcribe_media_encoding</code> | <code>[XAmznTranscribeMediaEncoding1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py)</code> | Specify the encoding of your input audio. Supported formats are: FLAC OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does not include WAV) For more information, see Media formats. |
| <code>x_amzn_transcribe_language_code</code> | <code>[XAmznTranscribeLanguageCode2OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_language_code2.py) \| None</code> | Specify the language code that represents the language spoken in your audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable automatic language identification. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_name</code> | <code>str \| None</code> | Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more custom vocabularies with your transcription, use the VocabularyNames parameter instead. For more information, see Custom vocabularies<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_session_id</code> | <code>str \| None</code> | Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_name</code> | <code>str \| None</code> | Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For more informatio<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_method</code> | <code>[XAmznTranscribeVocabularyFilterMethodOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_vocabulary_filter_method.py) \| None</code> | Specify how you want your vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_show_speaker_label</code> | <code>bool \| None</code> | Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file. For more information, see Partitioning speakers (diarization).<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_enable_channel_identification</code> | <code>bool \| None</code> | Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel. If you include EnableChannelIdentification in your request, you must also include NumberOfChannels. For more information, see Transcribing multi-channel audio.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_number_of_channels</code> | <code>int \| None</code> | Specify the number of channels in your audio stream. This value must be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request. If you include NumberOfChannels in your request, you must also include EnableChannelIdentification.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_enable_partial_results_stabilization</code> | <code>bool \| None</code> | Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see Partial-result stabilization.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_partial_results_stability</code> | <code>[XAmznTranscribePartialResultsStabilityOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_partial_results_stability.py) \| None</code> | Specify the level of stability to use when you enable partial results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy. For more information, see Partial-result stabilization.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_content_identification_type</code> | <code>[XAmznTranscribeContentIdentificationTypeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type.py) \| None</code> | Labels all personally identifiable information (PII) identified in your transcript. Content identification is performed at the segment level; PII specified in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and ContentRedactionType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_content_redaction_type</code> | <code>[XAmznTranscribeContentRedactionTypeOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_content_redaction_type.py) \| None</code> | Redacts all personally identifiable information (PII) identified in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a BadRequestException. For more information, see Redacting or identifying personally identifiable information.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_pii_entity_types</code> | <code>str \| None</code> | Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE, DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL. Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or ContentRedactionType. If you in<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_language_model_name</code> | <code>str \| None</code> | Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive. The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch. For more information, see Custom language models.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_identify_language</code> | <code>bool \| None</code> | Enables automatic language identification for your transcription. If you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you think may be present in your audio stream. You can also include a preferred language using PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter. If you have multi-channel audio that contains different languages on each channel, and you've enabled channel identification, automatic language identification identifies the dominant language on eac<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_language_options</code> | <code>str \| None</code> | Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. Including language options can improve the accuracy of language identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include one language dialect per language per stream. For example, you cannot include en-US and en-AU in the same request.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_preferred_language</code> | <code>[XAmznTranscribePreferredLanguage1OrStr](amazon_transcribe/models/enums/x_amzn_transcribe_preferred_language1.py) \| None</code> | Specify a preferred language from the subset of languages codes you specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and LanguageOptions in your request.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_identify_multiple_languages</code> | <code>bool \| None</code> | Enables automatic multi-language identification in your transcription job request. Use this parameter if your stream contains more than one language. If your stream contains only one language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic multiple language identification request, include VocabularyNames or VocabularyFilterNames. Note that you must include one of Language<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_names</code> | <code>str \| None</code> | Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive. If none of the languages of the specified custom vocabularies match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_vocabulary_filter_names</code> | <code>str \| None</code> | Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none of the languages of the specified custom vocabulary filters match the language identified in your media, your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter instead. For more information, see Using vocabulary filtering with u<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_session_resume_window</code> | <code>int \| None</code> | Specify the time window, in minutes, during which your transcription session can be resumed, measured from the stream start time. This optional parameter accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want until 1:30 PM.<br>**Default**: <code>None</code> |
| <code>x_amzn_transcribe_transcript_format</code> | <code>[XAmznTranscribeTranscriptFormatOrStr](amazon_transcribe/models/enums/x_amzn_transcribe_transcript_format.py) \| None</code> | Specify how numbers, dates, and other alphanumeric entities are rendered in your transcription results. WRITTEN renders these entities in their standard written form (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value, Amazon Transcribe uses WRITTEN by default.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[AudioStream](amazon_transcribe/models/audio_stream.py) \| [AudioStreamDict](amazon_transcribe/models/audio_stream.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;[StartStreamTranscriptionResponse](amazon_transcribe/models/start_stream_transcription_response.py), [StartStreamTranscriptionErrorBody](amazon_transcribe/errors/start_stream_transcription_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartStreamTranscriptionResponse](amazon_transcribe/models/start_stream_transcription_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartStreamTranscriptionErrorBody](amazon_transcribe/errors/start_stream_transcription_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_transcribe/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_transcribe/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_transcribe/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_transcribe/models/internal_failure_exception.py)</code> |
| 503 | <code>[ServiceUnavailableException](amazon_transcribe/models/service_unavailable_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.tag_resource(
    XAmzTarget1AmazonTranscribeServiceOperationsApi.TRANSCRIBE_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.tag_resource(
    XAmzTarget1AmazonTranscribeServiceOperationsApi.TRANSCRIBE_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [TagResourceErrorBody](amazon_transcribe/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagResourceErrorBody](amazon_transcribe/errors/tag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UntagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in your request, you must also include ResourceArn and TagKeys.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.untag_resource(
    XAmzTarget2AmazonTranscribeServiceOperationsApi.TRANSCRIBE_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.untag_resource(
    XAmzTarget2AmazonTranscribeServiceOperationsApi.TRANSCRIBE_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UntagResourceErrorBody](amazon_transcribe/errors/untag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UntagResourceErrorBody](amazon_transcribe/errors/untag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TranscriptionJobs

> Source: [TranscriptionJobs](amazon_transcribe/apis/transcription_jobs.py)

<details>
<summary><code>def delete_transcription_job(x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcription_jobs.with_raw_response.delete_transcription_job(
    XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_DELETE_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.transcription_jobs.with_raw_response.delete_transcription_job(
    XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_DELETE_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_transcription_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteTranscriptionJobErrorBody](amazon_transcribe/errors/delete_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteTranscriptionJobErrorBody](amazon_transcribe/errors/delete_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_transcription_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcription_jobs.with_raw_response.get_transcription_job(
    XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_GET_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.transcription_jobs.with_raw_response.get_transcription_job(
    XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_GET_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_transcription_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetTranscriptionJobErrorBody](amazon_transcribe/errors/get_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetTranscriptionJobErrorBody](amazon_transcribe/errors/get_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transcription_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListTranscriptionJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcription_jobs.with_raw_response.list_transcription_jobs(
    XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_LIST_TRANSCRIPTION_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTranscriptionJobsErrorBody
```

**Async**

```python
result = await async_client.transcription_jobs.with_raw_response.list_transcription_jobs(
    XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_LIST_TRANSCRIPTION_JOBS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTranscriptionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_transcription_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListTranscriptionJobsErrorBody](amazon_transcribe/errors/list_transcription_jobs_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListTranscriptionJobsErrorBody](amazon_transcribe/errors/list_transcription_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_transcription_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartTranscriptionJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.transcription_jobs.with_raw_response.start_transcription_job(
    XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_START_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartTranscriptionJobErrorBody
```

**Async**

```python
result = await async_client.transcription_jobs.with_raw_response.start_transcription_job(
    XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.TRANSCRIBE_START_TRANSCRIPTION_JOB
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartTranscriptionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_transcription_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [StartTranscriptionJobErrorBody](amazon_transcribe/errors/start_transcription_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartTranscriptionJobErrorBody](amazon_transcribe/errors/start_transcription_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vocabularies

> Source: [Vocabularies](amazon_transcribe/apis/vocabularies.py)

<details>
<summary><code>def create_vocabulary(x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the Phrases flag. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabularies.with_raw_response.create_vocabulary(
    XAmzTargetAmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_CREATE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVocabularyErrorBody
```

**Async**

```python
result = await async_client.vocabularies.with_raw_response.create_vocabulary(
    XAmzTargetAmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_CREATE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_vocabularies_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [CreateVocabularyErrorBody](amazon_transcribe/errors/create_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateVocabularyErrorBody](amazon_transcribe/errors/create_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vocabulary(x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabularies.with_raw_response.delete_vocabulary(
    XAmzTarget1AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_DELETE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVocabularyErrorBody
```

**Async**

```python
result = await async_client.vocabularies.with_raw_response.delete_vocabulary(
    XAmzTarget1AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_DELETE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_vocabularies_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteVocabularyErrorBody](amazon_transcribe/errors/delete_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteVocabularyErrorBody](amazon_transcribe/errors/delete_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vocabulary(x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary. To view the status of the specified custom vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of your custom vocabularies, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabularies.with_raw_response.get_vocabulary(
    XAmzTarget2AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_GET_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVocabularyErrorBody
```

**Async**

```python
result = await async_client.vocabularies.with_raw_response.get_vocabulary(
    XAmzTarget2AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_GET_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_vocabularies_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetVocabularyErrorBody](amazon_transcribe/errors/get_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetVocabularyErrorBody](amazon_transcribe/errors/get_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vocabularies(x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListVocabulariesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabularies.with_raw_response.list_vocabularies(
    XAmzTarget3AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_LIST_VOCABULARIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVocabulariesErrorBody
```

**Async**

```python
result = await async_client.vocabularies.with_raw_response.list_vocabularies(
    XAmzTarget3AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_LIST_VOCABULARIES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVocabulariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_vocabularies_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListVocabulariesErrorBody](amazon_transcribe/errors/list_vocabularies_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListVocabulariesErrorBody](amazon_transcribe/errors/list_vocabularies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vocabulary(x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateVocabularyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or VocabularyFileUri in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabularies.with_raw_response.update_vocabulary(
    XAmzTarget4AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_UPDATE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVocabularyErrorBody
```

**Async**

```python
result = await async_client.vocabularies.with_raw_response.update_vocabulary(
    XAmzTarget4AmazonTranscribeServiceVocabulariesApi.TRANSCRIBE_UPDATE_VOCABULARY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr](amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_vocabularies_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UpdateVocabularyErrorBody](amazon_transcribe/errors/update_vocabulary_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateVocabularyErrorBody](amazon_transcribe/errors/update_vocabulary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VocabularyFilter

> Source: [VocabularyFilter](amazon_transcribe/apis/vocabulary_filter.py)

<details>
<summary><code>def create_vocabulary_filter(x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateVocabularyFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabulary_filter.with_raw_response.create_vocabulary_filter(
    XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_CREATE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVocabularyFilterErrorBody
```

**Async**

```python
result = await async_client.vocabulary_filter.with_raw_response.create_vocabulary_filter(
    XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_CREATE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVocabularyFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr](amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_vocabulary_filter_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [CreateVocabularyFilterErrorBody](amazon_transcribe/errors/create_vocabulary_filter_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateVocabularyFilterErrorBody](amazon_transcribe/errors/create_vocabulary_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vocabulary_filter(x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteVocabularyFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabulary_filter.with_raw_response.delete_vocabulary_filter(
    XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_DELETE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVocabularyFilterErrorBody
```

**Async**

```python
result = await async_client.vocabulary_filter.with_raw_response.delete_vocabulary_filter(
    XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_DELETE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVocabularyFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr](amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_vocabulary_filter_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [DeleteVocabularyFilterErrorBody](amazon_transcribe/errors/delete_vocabulary_filter_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteVocabularyFilterErrorBody](amazon_transcribe/errors/delete_vocabulary_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vocabulary_filter(x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetVocabularyFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabulary_filter.with_raw_response.get_vocabulary_filter(
    XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_GET_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVocabularyFilterErrorBody
```

**Async**

```python
result = await async_client.vocabulary_filter.with_raw_response.get_vocabulary_filter(
    XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_GET_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVocabularyFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr](amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_vocabulary_filter_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [GetVocabularyFilterErrorBody](amazon_transcribe/errors/get_vocabulary_filter_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetVocabularyFilterErrorBody](amazon_transcribe/errors/get_vocabulary_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vocabulary_filters(x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListVocabularyFiltersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabulary_filter.with_raw_response.list_vocabulary_filters(
    XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_LIST_VOCABULARY_FILTERS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVocabularyFiltersErrorBody
```

**Async**

```python
result = await async_client.vocabulary_filter.with_raw_response.list_vocabulary_filters(
    XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_LIST_VOCABULARY_FILTERS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVocabularyFiltersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr](amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_vocabulary_filter_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [ListVocabularyFiltersErrorBody](amazon_transcribe/errors/list_vocabulary_filters_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListVocabularyFiltersErrorBody](amazon_transcribe/errors/list_vocabulary_filters_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vocabulary_filter(x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateVocabularyFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include either Words or VocabularyFilterFileUri in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vocabulary_filter.with_raw_response.update_vocabulary_filter(
    XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_UPDATE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVocabularyFilterErrorBody
```

**Async**

```python
result = await async_client.vocabulary_filter.with_raw_response.update_vocabulary_filter(
    XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.TRANSCRIBE_UPDATE_VOCABULARY_FILTER
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVocabularyFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr](amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_vocabulary_filter_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_transcribe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_transcribe/core/results.py)&#91;None, [UpdateVocabularyFilterErrorBody](amazon_transcribe/errors/update_vocabulary_filter_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateVocabularyFilterErrorBody](amazon_transcribe/errors/update_vocabulary_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409, 429, 500 | <code>[RawError](amazon_transcribe/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_transcribe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

