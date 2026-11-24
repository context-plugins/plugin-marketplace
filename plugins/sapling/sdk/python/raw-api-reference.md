# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SaplingClient](sapling/client.py)

## Account

> Source: [Account](sapling/apis/account.py)

<details>
<summary><code>def sapling_account_status(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_account_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AccountStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAccountStatusErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_account_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AccountStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAccountStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1AccountStatusResponse](sapling/models/api_v1_account_status_response.py), [SaplingAccountStatusErrorBody](sapling/errors/sapling_account_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1AccountStatusResponse](sapling/models/api_v1_account_status_response.py)</code> -- Access verdict plus credit, subscription, usage and trial details.

**On `Failure`**: `error` is <code>[SaplingAccountStatusErrorBody](sapling/errors/sapling_account_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_account_status_post(*, body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusPostErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_account_status_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AccountStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAccountStatusPostErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_account_status_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AccountStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAccountStatusPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AccountStatusRequest](sapling/models/api_v1_account_status_request.py) \| [ApiV1AccountStatusRequestDict](sapling/models/api_v1_account_status_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1AccountStatusResponse](sapling/models/api_v1_account_status_response.py), [SaplingAccountStatusPostErrorBody](sapling/errors/sapling_account_status_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1AccountStatusResponse](sapling/models/api_v1_account_status_response.py)</code> -- Access verdict plus credit, subscription, usage and trial details.

**On `Failure`**: `error` is <code>[SaplingAccountStatusPostErrorBody](sapling/errors/sapling_account_status_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_api_endpoint_usage(body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ReportingApiEndpointUsageResponse, SaplingApiEndpointUsageErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_api_endpoint_usage(ApiV1ReportingApiEndpointUsageRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiEndpointUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiEndpointUsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_api_endpoint_usage(
    ApiV1ReportingApiEndpointUsageRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiEndpointUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiEndpointUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ReportingApiEndpointUsageRequest](sapling/models/api_v1_reporting_api_endpoint_usage_request.py) \| [ApiV1ReportingApiEndpointUsageRequestDict](sapling/models/api_v1_reporting_api_endpoint_usage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ReportingApiEndpointUsageResponse](sapling/models/api_v1_reporting_api_endpoint_usage_response.py), [SaplingApiEndpointUsageErrorBody](sapling/errors/sapling_api_endpoint_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ReportingApiEndpointUsageResponse](sapling/models/api_v1_reporting_api_endpoint_usage_response.py)</code> -- {"data": {endpoint: {bucket: characters}}, "last_updated"}.

**On `Failure`**: `error` is <code>[SaplingApiEndpointUsageErrorBody](sapling/errors/sapling_api_endpoint_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_api_quota_usage(body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ReportingApiQuotaUsageResponse, SaplingApiQuotaUsageErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_api_quota_usage(ApiV1ReportingApiQuotaUsageRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiQuotaUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiQuotaUsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_api_quota_usage(ApiV1ReportingApiQuotaUsageRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiQuotaUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiQuotaUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ReportingApiQuotaUsageRequest](sapling/models/api_v1_reporting_api_quota_usage_request.py) \| [ApiV1ReportingApiQuotaUsageRequestDict](sapling/models/api_v1_reporting_api_quota_usage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ReportingApiQuotaUsageResponse](sapling/models/api_v1_reporting_api_quota_usage_response.py), [SaplingApiQuotaUsageErrorBody](sapling/errors/sapling_api_quota_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ReportingApiQuotaUsageResponse](sapling/models/api_v1_reporting_api_quota_usage_response.py)</code> -- Quota summary.

**On `Failure`**: `error` is <code>[SaplingApiQuotaUsageErrorBody](sapling/errors/sapling_api_quota_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_api_usage(*, body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ReportingApiUsageResponse, SaplingApiUsageErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_api_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiUsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_api_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ReportingApiUsageRequest](sapling/models/api_v1_reporting_api_usage_request.py) \| [ApiV1ReportingApiUsageRequestDict](sapling/models/api_v1_reporting_api_usage_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ReportingApiUsageResponse](sapling/models/api_v1_reporting_api_usage_response.py), [SaplingApiUsageErrorBody](sapling/errors/sapling_api_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ReportingApiUsageResponse](sapling/models/api_v1_reporting_api_usage_response.py)</code> -- Usage report.

**On `Failure`**: `error` is <code>[SaplingApiUsageErrorBody](sapling/errors/sapling_api_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_api_user_activity(body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ReportingApiUserActivityResponse, SaplingApiUserActivityErrorBody]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.sapling_api_user_activity(ApiV1ReportingApiUserActivityRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiUserActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiUserActivityErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.sapling_api_user_activity(ApiV1ReportingApiUserActivityRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ReportingApiUserActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingApiUserActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ReportingApiUserActivityRequest](sapling/models/api_v1_reporting_api_user_activity_request.py) \| [ApiV1ReportingApiUserActivityRequestDict](sapling/models/api_v1_reporting_api_user_activity_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ReportingApiUserActivityResponse](sapling/models/api_v1_reporting_api_user_activity_response.py), [SaplingApiUserActivityErrorBody](sapling/errors/sapling_api_user_activity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ReportingApiUserActivityResponse](sapling/models/api_v1_reporting_api_user_activity_response.py)</code> -- Activity summary.

**On `Failure`**: `error` is <code>[SaplingApiUserActivityErrorBody](sapling/errors/sapling_api_user_activity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Analysis

> Source: [Analysis](sapling/apis/analysis.py)

<details>
<summary><code>def sapling_classify(body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ClassifyResponse, SaplingClassifyErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_classify(ApiV1ClassifyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ClassifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingClassifyErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_classify(
    ApiV1ClassifyRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ClassifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingClassifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ClassifyRequest2](sapling/models/unions/api_v1_classify_request2.py) \| [ApiV1ClassifyRequest2Dict](sapling/models/unions/api_v1_classify_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ClassifyResponse](sapling/models/api_v1_classify_response.py), [SaplingClassifyErrorBody](sapling/errors/sapling_classify_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ClassifyResponse](sapling/models/api_v1_classify_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/classify/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingClassifyErrorBody](sapling/errors/sapling_classify_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_delete_style_ruleset(*, name: str | None = None, key: str | None = None, body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StyleguideRulesetsResponse, SaplingDeleteStyleRulesetErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_delete_style_ruleset()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteStyleRulesetErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_delete_style_ruleset()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteStyleRulesetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str \| None</code> | Rule set name (alternatively in the body).<br>**Default**: <code>None</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV1StyleguideRulesetsRequest](sapling/models/api_v1_styleguide_rulesets_request.py) \| [ApiV1StyleguideRulesetsRequestDict](sapling/models/api_v1_styleguide_rulesets_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1StyleguideRulesetsResponse](sapling/models/api_v1_styleguide_rulesets_response.py), [SaplingDeleteStyleRulesetErrorBody](sapling/errors/sapling_delete_style_ruleset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StyleguideRulesetsResponse](sapling/models/api_v1_styleguide_rulesets_response.py)</code> -- Deleted.

**On `Failure`**: `error` is <code>[SaplingDeleteStyleRulesetErrorBody](sapling/errors/sapling_delete_style_ruleset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](sapling/models/error.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_extract(body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ExtractResponse, SaplingExtractErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_extract(ApiV1ExtractRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingExtractErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_extract(ApiV1ExtractRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingExtractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ExtractRequest2](sapling/models/unions/api_v1_extract_request2.py) \| [ApiV1ExtractRequest2Dict](sapling/models/unions/api_v1_extract_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ExtractResponse](sapling/models/api_v1_extract_response.py), [SaplingExtractErrorBody](sapling/errors/sapling_extract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ExtractResponse](sapling/models/api_v1_extract_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/extract/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingExtractErrorBody](sapling/errors/sapling_extract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_extract_file(file: FileInput, json_params: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1FileExtractResponse, SaplingExtractFileErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_extract_file(Path("path/to/file.bin"), Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingExtractFileErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_extract_file(
    Path("path/to/file.bin"), Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingExtractFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>json_params</code> | <code>FileInput</code> | JSON object (send it as a file part or form field): {"fields": [...], "context": "...", "key": "<API key>", "return_usage": true}. `fields` (required) and `context` take the same values as on /api/v1/extract. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1FileExtractResponse](sapling/models/api_v1_file_extract_response.py), [SaplingExtractFileErrorBody](sapling/errors/sapling_extract_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1FileExtractResponse](sapling/models/api_v1_file_extract_response.py)</code> -- Same shape as a single /api/v1/extract response, plus `document`.

**On `Failure`**: `error` is <code>[SaplingExtractFileErrorBody](sapling/errors/sapling_extract_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1FileExtract400Error1](sapling/models/api_v1_file_extract400_error1.py)</code> |
| 401, 403, 500, 502 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1FileExtract413Error1](sapling/models/api_v1_file_extract413_error1.py)</code> |
| 429 | <code>[ApiV1FileExtract429Error1](sapling/models/api_v1_file_extract429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_inclusive(body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1InclusiveResponse, SaplingInclusiveErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_inclusive(ApiV1InclusiveRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1InclusiveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingInclusiveErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_inclusive(
    ApiV1InclusiveRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1InclusiveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingInclusiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1InclusiveRequest2](sapling/models/unions/api_v1_inclusive_request2.py) \| [ApiV1InclusiveRequest2Dict](sapling/models/unions/api_v1_inclusive_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1InclusiveResponse](sapling/models/api_v1_inclusive_response.py), [SaplingInclusiveErrorBody](sapling/errors/sapling_inclusive_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1InclusiveResponse](sapling/models/api_v1_inclusive_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/inclusive/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingInclusiveErrorBody](sapling/errors/sapling_inclusive_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_list_style_rulesets(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StyleguideRulesetsResponse1, SaplingListStyleRulesetsErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_list_style_rulesets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListStyleRulesetsErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_list_style_rulesets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListStyleRulesetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1StyleguideRulesetsResponse1](sapling/models/api_v1_styleguide_rulesets_response1.py), [SaplingListStyleRulesetsErrorBody](sapling/errors/sapling_list_style_rulesets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StyleguideRulesetsResponse1](sapling/models/api_v1_styleguide_rulesets_response1.py)</code> -- Saved rule sets, ordered by name.

**On `Failure`**: `error` is <code>[SaplingListStyleRulesetsErrorBody](sapling/errors/sapling_list_style_rulesets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_quality(body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1QualityResponse, SaplingQualityErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_quality(ApiV1QualityRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1QualityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingQualityErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_quality(ApiV1QualityRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1QualityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingQualityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1QualityRequest2](sapling/models/unions/api_v1_quality_request2.py) \| [ApiV1QualityRequest2Dict](sapling/models/unions/api_v1_quality_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1QualityResponse](sapling/models/api_v1_quality_response.py), [SaplingQualityErrorBody](sapling/errors/sapling_quality_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1QualityResponse](sapling/models/api_v1_quality_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/quality/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingQualityErrorBody](sapling/errors/sapling_quality_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_readability_statistics(body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StatisticsResponse, SaplingReadabilityStatisticsErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_readability_statistics(
    ApiV1StatisticsRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StatisticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingReadabilityStatisticsErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_readability_statistics(
    ApiV1StatisticsRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StatisticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingReadabilityStatisticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1StatisticsRequest](sapling/models/api_v1_statistics_request.py) \| [ApiV1StatisticsRequestDict](sapling/models/api_v1_statistics_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1StatisticsResponse](sapling/models/api_v1_statistics_response.py), [SaplingReadabilityStatisticsErrorBody](sapling/errors/sapling_readability_statistics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StatisticsResponse](sapling/models/api_v1_statistics_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/statistics/

**On `Failure`**: `error` is <code>[SaplingReadabilityStatisticsErrorBody](sapling/errors/sapling_readability_statistics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_save_style_ruleset(body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StyleguideRulesetsResponse2, SaplingSaveStyleRulesetErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_save_style_ruleset(
    ApiV1StyleguideRulesetsRequest1(name="some example string", rules=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSaveStyleRulesetErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_save_style_ruleset(
    ApiV1StyleguideRulesetsRequest1(name="some example string", rules=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideRulesetsResponse2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSaveStyleRulesetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1StyleguideRulesetsRequest1](sapling/models/api_v1_styleguide_rulesets_request1.py) \| [ApiV1StyleguideRulesetsRequest1Dict](sapling/models/api_v1_styleguide_rulesets_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1StyleguideRulesetsResponse2](sapling/models/api_v1_styleguide_rulesets_response2.py), [SaplingSaveStyleRulesetErrorBody](sapling/errors/sapling_save_style_ruleset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StyleguideRulesetsResponse2](sapling/models/api_v1_styleguide_rulesets_response2.py)</code> -- The saved rule set, and whether it was newly created.

**On `Failure`**: `error` is <code>[SaplingSaveStyleRulesetErrorBody](sapling/errors/sapling_save_style_ruleset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_sentiment(body: ApiV1SentimentRequest | ApiV1SentimentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SentimentResponse, SaplingSentimentErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_sentiment(ApiV1SentimentRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SentimentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSentimentErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_sentiment(
    ApiV1SentimentRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SentimentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSentimentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SentimentRequest](sapling/models/api_v1_sentiment_request.py) \| [ApiV1SentimentRequestDict](sapling/models/api_v1_sentiment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SentimentResponse](sapling/models/api_v1_sentiment_response.py), [SaplingSentimentErrorBody](sapling/errors/sapling_sentiment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SentimentResponse](sapling/models/api_v1_sentiment_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/sentiment/ A bare JSON array (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

**On `Failure`**: `error` is <code>[SaplingSentimentErrorBody](sapling/errors/sapling_sentiment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_seo(body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SeoResponse, SaplingSeoErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_seo(ApiV1SeoRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SeoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSeoErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_seo(ApiV1SeoRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SeoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSeoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SeoRequest](sapling/models/api_v1_seo_request.py) \| [ApiV1SeoRequestDict](sapling/models/api_v1_seo_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SeoResponse](sapling/models/api_v1_seo_response.py), [SaplingSeoErrorBody](sapling/errors/sapling_seo_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SeoResponse](sapling/models/api_v1_seo_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/seo/

**On `Failure`**: `error` is <code>[SaplingSeoErrorBody](sapling/errors/sapling_seo_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_similar_terms(body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ThesaurusResponse, SaplingSimilarTermsErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_similar_terms(ApiV1ThesaurusRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ThesaurusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSimilarTermsErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_similar_terms(
    ApiV1ThesaurusRequest(query="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ThesaurusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSimilarTermsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ThesaurusRequest](sapling/models/api_v1_thesaurus_request.py) \| [ApiV1ThesaurusRequestDict](sapling/models/api_v1_thesaurus_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ThesaurusResponse](sapling/models/api_v1_thesaurus_response.py), [SaplingSimilarTermsErrorBody](sapling/errors/sapling_similar_terms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ThesaurusResponse](sapling/models/api_v1_thesaurus_response.py)</code> -- Neighbors as [similarity, term] pairs, plus synonyms.

**On `Failure`**: `error` is <code>[SaplingSimilarTermsErrorBody](sapling/errors/sapling_similar_terms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 502 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_styleguide(body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StyleguideResponse, SaplingStyleguideErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_styleguide(
    ApiV1StyleguideRequest(rules=["some example string"], text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingStyleguideErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_styleguide(
    ApiV1StyleguideRequest(rules=["some example string"], text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StyleguideResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingStyleguideErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1StyleguideRequest4](sapling/models/unions/api_v1_styleguide_request4.py) \| [ApiV1StyleguideRequest4Dict](sapling/models/unions/api_v1_styleguide_request4.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1StyleguideResponse](sapling/models/api_v1_styleguide_response.py), [SaplingStyleguideErrorBody](sapling/errors/sapling_styleguide_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StyleguideResponse](sapling/models/api_v1_styleguide_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/styleguide/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingStyleguideErrorBody](sapling/errors/sapling_styleguide_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_tone(body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ToneResponse, SaplingToneErrorBody]</code></summary>

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

**Sync**

```python
result = client.analysis.with_raw_response.sapling_tone(ApiV1ToneRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ToneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingToneErrorBody
```

**Async**

```python
result = await async_client.analysis.with_raw_response.sapling_tone(ApiV1ToneRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ToneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingToneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ToneRequest](sapling/models/api_v1_tone_request.py) \| [ApiV1ToneRequestDict](sapling/models/api_v1_tone_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ToneResponse](sapling/models/api_v1_tone_response.py), [SaplingToneErrorBody](sapling/errors/sapling_tone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ToneResponse](sapling/models/api_v1_tone_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/tone/ A bare JSON array (no per-sentence results) is the degraded shape served when sentence tokenization fails upstream.

**On `Failure`**: `error` is <code>[SaplingToneErrorBody](sapling/errors/sapling_tone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Detection

> Source: [Detection](sapling/apis/detection.py)

<details>
<summary><code>def sapling_ai_detect(body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1AidetectResponse, SaplingAiDetectErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_ai_detect(ApiV1AidetectRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAiDetectErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_ai_detect(
    ApiV1AidetectRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1AidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAiDetectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1AidetectRequest2](sapling/models/unions/api_v1_aidetect_request2.py) \| [ApiV1AidetectRequest2Dict](sapling/models/unions/api_v1_aidetect_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1AidetectResponse](sapling/models/api_v1_aidetect_response.py), [SaplingAiDetectErrorBody](sapling/errors/sapling_ai_detect_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1AidetectResponse](sapling/models/api_v1_aidetect_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingAiDetectErrorBody](sapling/errors/sapling_ai_detect_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_ai_detect_url(body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1UrlAidetectResponse, SaplingAiDetectUrlErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_ai_detect_url(ApiV1UrlAidetectRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1UrlAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAiDetectUrlErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_ai_detect_url(
    ApiV1UrlAidetectRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1UrlAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAiDetectUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1UrlAidetectRequest](sapling/models/api_v1_url_aidetect_request.py) \| [ApiV1UrlAidetectRequestDict](sapling/models/api_v1_url_aidetect_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1UrlAidetectResponse](sapling/models/api_v1_url_aidetect_response.py), [SaplingAiDetectUrlErrorBody](sapling/errors/sapling_ai_detect_url_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1UrlAidetectResponse](sapling/models/api_v1_url_aidetect_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/detector/

**On `Failure`**: `error` is <code>[SaplingAiDetectUrlErrorBody](sapling/errors/sapling_ai_detect_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 422, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_aidetect_docx(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1DocxAidetectResponse, SaplingAidetectDocxErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_aidetect_docx(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1DocxAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectDocxErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_aidetect_docx(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1DocxAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectDocxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1DocxAidetectResponse](sapling/models/api_v1_docx_aidetect_response.py), [SaplingAidetectDocxErrorBody](sapling/errors/sapling_aidetect_docx_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1DocxAidetectResponse](sapling/models/api_v1_docx_aidetect_response.py)</code> -- Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

**On `Failure`**: `error` is <code>[SaplingAidetectDocxErrorBody](sapling/errors/sapling_aidetect_docx_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1DocxAidetect400Error1](sapling/models/api_v1_docx_aidetect400_error1.py)</code> |
| 401, 403, 429, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1DocxAidetect413Error1](sapling/models/api_v1_docx_aidetect413_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_aidetect_file(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1FileAidetectResponse, SaplingAidetectFileErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_aidetect_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectFileErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_aidetect_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps no copy of the extracted text (no result cache or certificate hash, usage logged without text), as on /api/v1/aidetect; {"create_report": true} also saves the result as a shareable report and adds report (and report_skip_reason when none was made), as on /api/v1/aidetect.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1FileAidetectResponse](sapling/models/api_v1_file_aidetect_response.py), [SaplingAidetectFileErrorBody](sapling/errors/sapling_aidetect_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1FileAidetectResponse](sapling/models/api_v1_file_aidetect_response.py)</code> -- Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

**On `Failure`**: `error` is <code>[SaplingAidetectFileErrorBody](sapling/errors/sapling_aidetect_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1FileAidetect400Error1](sapling/models/api_v1_file_aidetect400_error1.py)</code> |
| 401, 403, 429, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1FileAidetect413Error1](sapling/models/api_v1_file_aidetect413_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_aidetect_pdf(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1PdfAidetectResponse, SaplingAidetectPdfErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_aidetect_pdf(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1PdfAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectPdfErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_aidetect_pdf(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1PdfAidetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAidetectPdfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1PdfAidetectResponse](sapling/models/api_v1_pdf_aidetect_response.py), [SaplingAidetectPdfErrorBody](sapling/errors/sapling_aidetect_pdf_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1PdfAidetectResponse](sapling/models/api_v1_pdf_aidetect_response.py)</code> -- Same shape as /api/v1/aidetect with sent_scores and score_string enabled.

**On `Failure`**: `error` is <code>[SaplingAidetectPdfErrorBody](sapling/errors/sapling_aidetect_pdf_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1PdfAidetect400Error1](sapling/models/api_v1_pdf_aidetect400_error1.py)</code> |
| 401, 403, 429, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1PdfAidetect413Error1](sapling/models/api_v1_pdf_aidetect413_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_detect_language(body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1LangdetectResponse, SaplingDetectLanguageErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_detect_language(ApiV1LangdetectRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1LangdetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDetectLanguageErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_detect_language(
    ApiV1LangdetectRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1LangdetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDetectLanguageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1LangdetectRequest2](sapling/models/unions/api_v1_langdetect_request2.py) \| [ApiV1LangdetectRequest2Dict](sapling/models/unions/api_v1_langdetect_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1LangdetectResponse](sapling/models/api_v1_langdetect_response.py), [SaplingDetectLanguageErrorBody](sapling/errors/sapling_detect_language_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1LangdetectResponse](sapling/models/api_v1_langdetect_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/langdetect/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingDetectLanguageErrorBody](sapling/errors/sapling_detect_language_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_detect_pii(body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1PiiResponse, SaplingDetectPiiErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_detect_pii(ApiV1PiiRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1PiiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDetectPiiErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_detect_pii(ApiV1PiiRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1PiiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDetectPiiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1PiiRequest](sapling/models/api_v1_pii_request.py) \| [ApiV1PiiRequestDict](sapling/models/api_v1_pii_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1PiiResponse](sapling/models/api_v1_pii_response.py), [SaplingDetectPiiErrorBody](sapling/errors/sapling_detect_pii_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1PiiResponse](sapling/models/api_v1_pii_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/pii/

**On `Failure`**: `error` is <code>[SaplingDetectPiiErrorBody](sapling/errors/sapling_detect_pii_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_ner(body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1NerResponse, SaplingNerErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_ner(ApiV1NerRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingNerErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_ner(ApiV1NerRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1NerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingNerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1NerRequest2](sapling/models/unions/api_v1_ner_request2.py) \| [ApiV1NerRequest2Dict](sapling/models/unions/api_v1_ner_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1NerResponse](sapling/models/api_v1_ner_response.py), [SaplingNerErrorBody](sapling/errors/sapling_ner_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1NerResponse](sapling/models/api_v1_ner_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/ner/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingNerErrorBody](sapling/errors/sapling_ner_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_profanity(body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ProfanityResponse, SaplingProfanityErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_profanity(ApiV1ProfanityRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ProfanityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingProfanityErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_profanity(
    ApiV1ProfanityRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ProfanityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingProfanityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ProfanityRequest](sapling/models/api_v1_profanity_request.py) \| [ApiV1ProfanityRequestDict](sapling/models/api_v1_profanity_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ProfanityResponse](sapling/models/api_v1_profanity_response.py), [SaplingProfanityErrorBody](sapling/errors/sapling_profanity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ProfanityResponse](sapling/models/api_v1_profanity_response.py)</code> -- Tokens and aligned labels.

**On `Failure`**: `error` is <code>[SaplingProfanityErrorBody](sapling/errors/sapling_profanity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_safety(body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SafetyResponse, SaplingSafetyErrorBody]</code></summary>

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

**Sync**

```python
result = client.detection.with_raw_response.sapling_safety(ApiV1SafetyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SafetyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSafetyErrorBody
```

**Async**

```python
result = await async_client.detection.with_raw_response.sapling_safety(ApiV1SafetyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SafetyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSafetyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SafetyRequest2](sapling/models/unions/api_v1_safety_request2.py) \| [ApiV1SafetyRequest2Dict](sapling/models/unions/api_v1_safety_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SafetyResponse](sapling/models/api_v1_safety_response.py), [SaplingSafetyErrorBody](sapling/errors/sapling_safety_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SafetyResponse](sapling/models/api_v1_safety_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/safety/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingSafetyErrorBody](sapling/errors/sapling_safety_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](sapling/apis/files.py)

<details>
<summary><code>def sapling_chunk_html(body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IngestChunkHtmlResponse, SaplingChunkHtmlErrorBody]</code></summary>

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

**Sync**

```python
result = client.files.with_raw_response.sapling_chunk_html(
    ApiV1IngestChunkHtmlRequest(html="some example string", max_length=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestChunkHtmlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingChunkHtmlErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.sapling_chunk_html(
    ApiV1IngestChunkHtmlRequest(html="some example string", max_length=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestChunkHtmlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingChunkHtmlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1IngestChunkHtmlRequest](sapling/models/api_v1_ingest_chunk_html_request.py) \| [ApiV1IngestChunkHtmlRequestDict](sapling/models/api_v1_ingest_chunk_html_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1IngestChunkHtmlResponse](sapling/models/api_v1_ingest_chunk_html_response.py), [SaplingChunkHtmlErrorBody](sapling/errors/sapling_chunk_html_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IngestChunkHtmlResponse](sapling/models/api_v1_ingest_chunk_html_response.py)</code> -- Chunks in document order.

**On `Failure`**: `error` is <code>[SaplingChunkHtmlErrorBody](sapling/errors/sapling_chunk_html_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_chunk_text(body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IngestChunkTextResponse, SaplingChunkTextErrorBody]</code></summary>

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

**Sync**

```python
result = client.files.with_raw_response.sapling_chunk_text(
    ApiV1IngestChunkTextRequest(max_length=1, text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestChunkTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingChunkTextErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.sapling_chunk_text(
    ApiV1IngestChunkTextRequest(max_length=1, text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestChunkTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingChunkTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1IngestChunkTextRequest](sapling/models/api_v1_ingest_chunk_text_request.py) \| [ApiV1IngestChunkTextRequestDict](sapling/models/api_v1_ingest_chunk_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1IngestChunkTextResponse](sapling/models/api_v1_ingest_chunk_text_response.py), [SaplingChunkTextErrorBody](sapling/errors/sapling_chunk_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IngestChunkTextResponse](sapling/models/api_v1_ingest_chunk_text_response.py)</code> -- Chunks in document order.

**On `Failure`**: `error` is <code>[SaplingChunkTextErrorBody](sapling/errors/sapling_chunk_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_docx_to_text(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IngestDocxToTextResponse, SaplingDocxToTextErrorBody]</code></summary>

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

**Sync**

```python
result = client.files.with_raw_response.sapling_docx_to_text(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestDocxToTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDocxToTextErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.sapling_docx_to_text(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestDocxToTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDocxToTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1IngestDocxToTextResponse](sapling/models/api_v1_ingest_docx_to_text_response.py), [SaplingDocxToTextErrorBody](sapling/errors/sapling_docx_to_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IngestDocxToTextResponse](sapling/models/api_v1_ingest_docx_to_text_response.py)</code> -- Extracted text.

**On `Failure`**: `error` is <code>[SaplingDocxToTextErrorBody](sapling/errors/sapling_docx_to_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1IngestDocxToText400Error1](sapling/models/api_v1_ingest_docx_to_text400_error1.py)</code> |
| 401, 403, 429, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1IngestDocxToText413Error1](sapling/models/api_v1_ingest_docx_to_text413_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_pdf_to_text(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IngestPdfToTextResponse, SaplingPdfToTextErrorBody]</code></summary>

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

**Sync**

```python
result = client.files.with_raw_response.sapling_pdf_to_text(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestPdfToTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingPdfToTextErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.sapling_pdf_to_text(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IngestPdfToTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingPdfToTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1IngestPdfToTextResponse](sapling/models/api_v1_ingest_pdf_to_text_response.py), [SaplingPdfToTextErrorBody](sapling/errors/sapling_pdf_to_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IngestPdfToTextResponse](sapling/models/api_v1_ingest_pdf_to_text_response.py)</code> -- Extracted text.

**On `Failure`**: `error` is <code>[SaplingPdfToTextErrorBody](sapling/errors/sapling_pdf_to_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1IngestPdfToText400Error1](sapling/models/api_v1_ingest_pdf_to_text400_error1.py)</code> |
| 401, 403, 429, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1IngestPdfToText413Error1](sapling/models/api_v1_ingest_pdf_to_text413_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](sapling/apis/service.py)

<details>
<summary><code>def sapling_liveness(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1LivenessResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.service.with_raw_response.sapling_liveness()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1LivenessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.service.with_raw_response.sapling_liveness()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1LivenessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1LivenessResponse](sapling/models/api_v1_liveness_response.py), [RawError](sapling/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1LivenessResponse](sapling/models/api_v1_liveness_response.py)</code> -- Alive.

**On `Failure`**: `error` is <code>[RawError](sapling/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_version(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1VersionResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.service.with_raw_response.sapling_version()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1VersionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.service.with_raw_response.sapling_version()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1VersionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1VersionResponse](sapling/models/api_v1_version_response.py), [RawError](sapling/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1VersionResponse](sapling/models/api_v1_version_response.py)</code> -- Version.

**On `Failure`**: `error` is <code>[RawError](sapling/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Generation

> Source: [Generation](sapling/apis/generation.py)

<details>
<summary><code>def sapling_accept_completion(completion_hash: UUID, body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompleteAcceptResponse, SaplingAcceptCompletionErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_accept_completion(
    UUID("00000000-0000-0000-0000-000000000000"),
    ApiV1CompleteAcceptRequest(context=Context(completion="some example string", query="some example string")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompleteAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAcceptCompletionErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_accept_completion(
    UUID("00000000-0000-0000-0000-000000000000"),
    ApiV1CompleteAcceptRequest(context=Context(completion="some example string", query="some example string")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompleteAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAcceptCompletionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>completion_hash</code> | <code>UUID</code> | The `hash` returned by /api/v1/complete. |
| <code>body</code> | <code>[ApiV1CompleteAcceptRequest](sapling/models/api_v1_complete_accept_request.py) \| [ApiV1CompleteAcceptRequestDict](sapling/models/api_v1_complete_accept_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CompleteAcceptResponse](sapling/models/api_v1_complete_accept_response.py), [SaplingAcceptCompletionErrorBody](sapling/errors/sapling_accept_completion_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompleteAcceptResponse](sapling/models/api_v1_complete_accept_response.py)</code> -- Recorded.

**On `Failure`**: `error` is <code>[SaplingAcceptCompletionErrorBody](sapling/errors/sapling_accept_completion_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1CompleteAcceptResponse11](sapling/models/unions/api_v1_complete_accept_response11.py)</code> |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_autocomplete(body: ApiV1CompleteRequest | ApiV1CompleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompleteResponse, SaplingAutocompleteErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_autocomplete(ApiV1CompleteRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAutocompleteErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_autocomplete(
    ApiV1CompleteRequest(query="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAutocompleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CompleteRequest](sapling/models/api_v1_complete_request.py) \| [ApiV1CompleteRequestDict](sapling/models/api_v1_complete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CompleteResponse](sapling/models/api_v1_complete_response.py), [SaplingAutocompleteErrorBody](sapling/errors/sapling_autocomplete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompleteResponse](sapling/models/api_v1_complete_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/autocomplete/ An empty JSON array is returned when no completion is available (prediction failed or was shorter than the minimum length).

**On `Failure`**: `error` is <code>[SaplingAutocompleteErrorBody](sapling/errors/sapling_autocomplete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_paraphrase(body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ParaphraseResponse, SaplingParaphraseErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_paraphrase(ApiV1ParaphraseRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ParaphraseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingParaphraseErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_paraphrase(
    ApiV1ParaphraseRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ParaphraseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingParaphraseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1ParaphraseRequest](sapling/models/api_v1_paraphrase_request.py) \| [ApiV1ParaphraseRequestDict](sapling/models/api_v1_paraphrase_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1ParaphraseResponse](sapling/models/api_v1_paraphrase_response.py), [SaplingParaphraseErrorBody](sapling/errors/sapling_paraphrase_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ParaphraseResponse](sapling/models/api_v1_paraphrase_response.py)</code> -- Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}.

**On `Failure`**: `error` is <code>[SaplingParaphraseErrorBody](sapling/errors/sapling_paraphrase_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[ApiV1Paraphrase429Error1](sapling/models/api_v1_paraphrase429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_rephrase(body: ApiV1RephraseRequest | ApiV1RephraseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1RephraseResponse, SaplingRephraseErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_rephrase(ApiV1RephraseRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1RephraseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingRephraseErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_rephrase(
    ApiV1RephraseRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1RephraseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingRephraseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1RephraseRequest](sapling/models/api_v1_rephrase_request.py) \| [ApiV1RephraseRequestDict](sapling/models/api_v1_rephrase_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1RephraseResponse](sapling/models/api_v1_rephrase_response.py), [SaplingRephraseErrorBody](sapling/errors/sapling_rephrase_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1RephraseResponse](sapling/models/api_v1_rephrase_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/rephrase/

**On `Failure`**: `error` is <code>[SaplingRephraseErrorBody](sapling/errors/sapling_rephrase_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[ApiV1Rephrase429Error1](sapling/models/api_v1_rephrase429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_sentence_split(body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SentenceSplitResponse, SaplingSentenceSplitErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_sentence_split(
    ApiV1SentenceSplitRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SentenceSplitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSentenceSplitErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_sentence_split(
    ApiV1SentenceSplitRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SentenceSplitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSentenceSplitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SentenceSplitRequest](sapling/models/api_v1_sentence_split_request.py) \| [ApiV1SentenceSplitRequestDict](sapling/models/api_v1_sentence_split_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SentenceSplitResponse](sapling/models/api_v1_sentence_split_response.py), [SaplingSentenceSplitErrorBody](sapling/errors/sapling_sentence_split_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SentenceSplitResponse](sapling/models/api_v1_sentence_split_response.py)</code> -- Alternatives: {"results": [{hash, original, replacement, rephrase_type, model_version}]}. Empty when no split improves the text.

**On `Failure`**: `error` is <code>[SaplingSentenceSplitErrorBody](sapling/errors/sapling_sentence_split_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[ApiV1SentenceSplit429Error1](sapling/models/api_v1_sentence_split429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_simplify(body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SimplifyResponse, SaplingSimplifyErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_simplify(ApiV1SimplifyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SimplifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSimplifyErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_simplify(
    ApiV1SimplifyRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SimplifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSimplifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SimplifyRequest2](sapling/models/unions/api_v1_simplify_request2.py) \| [ApiV1SimplifyRequest2Dict](sapling/models/unions/api_v1_simplify_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SimplifyResponse](sapling/models/api_v1_simplify_response.py), [SaplingSimplifyErrorBody](sapling/errors/sapling_simplify_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SimplifyResponse](sapling/models/api_v1_simplify_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/simplify/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingSimplifyErrorBody](sapling/errors/sapling_simplify_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_summarize(body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SummarizeResponse, SaplingSummarizeErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_summarize(ApiV1SummarizeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SummarizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSummarizeErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_summarize(
    ApiV1SummarizeRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SummarizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSummarizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SummarizeRequest2](sapling/models/unions/api_v1_summarize_request2.py) \| [ApiV1SummarizeRequest2Dict](sapling/models/unions/api_v1_summarize_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SummarizeResponse](sapling/models/api_v1_summarize_response.py), [SaplingSummarizeErrorBody](sapling/errors/sapling_summarize_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SummarizeResponse](sapling/models/api_v1_summarize_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/summarize/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingSummarizeErrorBody](sapling/errors/sapling_summarize_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[ApiV1Summarize429Error1](sapling/models/api_v1_summarize429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_summarize_file(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1FileSummarizeResponse, SaplingSummarizeFileErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_summarize_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileSummarizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSummarizeFileErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_summarize_file(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1FileSummarizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSummarizeFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | The document to upload. |
| <code>return_usage_query</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>key</code> | <code>str \| None</code> | Sapling API key, as an alternative to the "Authorization: Bearer <key>" header.<br>**Default**: <code>None</code> |
| <code>json_params</code> | <code>FileInput \| None</code> | Optional JSON object (send it as a file part or form field): {"length": "short" \| "medium" \| "long", "key": "<API key>", "return_usage": true}. `length` defaults to "medium", as on /api/v1/summarize.<br>**Default**: <code>None</code> |
| <code>return_usage</code> | <code>bool \| None</code> | When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1FileSummarizeResponse](sapling/models/api_v1_file_summarize_response.py), [SaplingSummarizeFileErrorBody](sapling/errors/sapling_summarize_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1FileSummarizeResponse](sapling/models/api_v1_file_summarize_response.py)</code> -- Same shape as a single /api/v1/summarize response, plus `document`.

**On `Failure`**: `error` is <code>[SaplingSummarizeFileErrorBody](sapling/errors/sapling_summarize_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1FileSummarize400Error1](sapling/models/api_v1_file_summarize400_error1.py)</code> |
| 401, 403, 500, 502 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[ApiV1FileSummarize413Error1](sapling/models/api_v1_file_summarize413_error1.py)</code> |
| 429 | <code>[ApiV1FileSummarize429Error1](sapling/models/api_v1_file_summarize429_error1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_translate(body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1TranslateResponse, SaplingTranslateErrorBody]</code></summary>

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

**Sync**

```python
result = client.generation.with_raw_response.sapling_translate(ApiV1TranslateRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TranslateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingTranslateErrorBody
```

**Async**

```python
result = await async_client.generation.with_raw_response.sapling_translate(
    ApiV1TranslateRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1TranslateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingTranslateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1TranslateRequest2](sapling/models/unions/api_v1_translate_request2.py) \| [ApiV1TranslateRequest2Dict](sapling/models/unions/api_v1_translate_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1TranslateResponse](sapling/models/api_v1_translate_response.py), [SaplingTranslateErrorBody](sapling/errors/sapling_translate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1TranslateResponse](sapling/models/api_v1_translate_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/translate/ A batch (`texts`) request answers {"results": [...]} instead: one single-text response per input text, in input order.

**On `Failure`**: `error` is <code>[SaplingTranslateErrorBody](sapling/errors/sapling_translate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500, 502, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Proofreading

> Source: [Proofreading](sapling/apis/proofreading.py)

<details>
<summary><code>def sapling_accept_edit(edit_hash: UUID, body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EditsAcceptResponse, SaplingAcceptEditErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_accept_edit(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV1EditsAcceptRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAcceptEditErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_accept_edit(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV1EditsAcceptRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsAcceptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAcceptEditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>edit_hash</code> | <code>UUID</code> | The edit's `id` from /edits. |
| <code>body</code> | <code>[ApiV1EditsAcceptRequest](sapling/models/api_v1_edits_accept_request.py) \| [ApiV1EditsAcceptRequestDict](sapling/models/api_v1_edits_accept_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1EditsAcceptResponse](sapling/models/api_v1_edits_accept_response.py), [SaplingAcceptEditErrorBody](sapling/errors/sapling_accept_edit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EditsAcceptResponse](sapling/models/api_v1_edits_accept_response.py)</code> -- Acknowledged.

**On `Failure`**: `error` is <code>[SaplingAcceptEditErrorBody](sapling/errors/sapling_accept_edit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1EditsAcceptResponse11](sapling/models/unions/api_v1_edits_accept_response11.py)</code> |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_add_custom_filter(body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CustomFilterResponse1, SaplingAddCustomFilterErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_add_custom_filter(ApiV1CustomFilterRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomFilterResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddCustomFilterErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_add_custom_filter(ApiV1CustomFilterRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomFilterResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddCustomFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CustomFilterRequest](sapling/models/api_v1_custom_filter_request.py) \| [ApiV1CustomFilterRequestDict](sapling/models/api_v1_custom_filter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CustomFilterResponse1](sapling/models/api_v1_custom_filter_response1.py), [SaplingAddCustomFilterErrorBody](sapling/errors/sapling_add_custom_filter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CustomFilterResponse1](sapling/models/api_v1_custom_filter_response1.py)</code> -- The created filter.

**On `Failure`**: `error` is <code>[SaplingAddCustomFilterErrorBody](sapling/errors/sapling_add_custom_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_add_custom_mapping(body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CustomMappingResponse1, SaplingAddCustomMappingErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_add_custom_mapping(
    ApiV1CustomMappingRequest(entry="some example string", mapping="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomMappingResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddCustomMappingErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_add_custom_mapping(
    ApiV1CustomMappingRequest(entry="some example string", mapping="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomMappingResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddCustomMappingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1CustomMappingRequest](sapling/models/api_v1_custom_mapping_request.py) \| [ApiV1CustomMappingRequestDict](sapling/models/api_v1_custom_mapping_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CustomMappingResponse1](sapling/models/api_v1_custom_mapping_response1.py), [SaplingAddCustomMappingErrorBody](sapling/errors/sapling_add_custom_mapping_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CustomMappingResponse1](sapling/models/api_v1_custom_mapping_response1.py)</code> -- The created mapping.

**On `Failure`**: `error` is <code>[SaplingAddCustomMappingErrorBody](sapling/errors/sapling_add_custom_mapping_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_add_dictionary_entry(body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1DictionaryResponse1, SaplingAddDictionaryEntryErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_add_dictionary_entry(
    ApiV1DictionaryRequest(entry="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1DictionaryResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddDictionaryEntryErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_add_dictionary_entry(
    ApiV1DictionaryRequest(entry="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1DictionaryResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingAddDictionaryEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DictionaryRequest](sapling/models/api_v1_dictionary_request.py) \| [ApiV1DictionaryRequestDict](sapling/models/api_v1_dictionary_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1DictionaryResponse1](sapling/models/api_v1_dictionary_response1.py), [SaplingAddDictionaryEntryErrorBody](sapling/errors/sapling_add_dictionary_entry_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1DictionaryResponse1](sapling/models/api_v1_dictionary_response1.py)</code> -- The created entry.

**On `Failure`**: `error` is <code>[SaplingAddDictionaryEntryErrorBody](sapling/errors/sapling_add_dictionary_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_delete_custom_filter(filter_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SaplingDeleteCustomFilterErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_delete_custom_filter(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteCustomFilterErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_delete_custom_filter(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteCustomFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_id</code> | <code>UUID</code> | Custom filter id. |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;None, [SaplingDeleteCustomFilterErrorBody](sapling/errors/sapling_delete_custom_filter_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SaplingDeleteCustomFilterErrorBody](sapling/errors/sapling_delete_custom_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_delete_custom_mapping(mapping_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SaplingDeleteCustomMappingErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_delete_custom_mapping(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteCustomMappingErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_delete_custom_mapping(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteCustomMappingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mapping_id</code> | <code>UUID</code> | Custom mapping id. |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;None, [SaplingDeleteCustomMappingErrorBody](sapling/errors/sapling_delete_custom_mapping_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SaplingDeleteCustomMappingErrorBody](sapling/errors/sapling_delete_custom_mapping_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_delete_dictionary_entry(entry_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SaplingDeleteDictionaryEntryErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_delete_dictionary_entry(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteDictionaryEntryErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_delete_dictionary_entry(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingDeleteDictionaryEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entry_id</code> | <code>UUID</code> | Dictionary entry id. |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;None, [SaplingDeleteDictionaryEntryErrorBody](sapling/errors/sapling_delete_dictionary_entry_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SaplingDeleteDictionaryEntryErrorBody](sapling/errors/sapling_delete_dictionary_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_grammar_check(body: ApiV1EditsRequest | ApiV1EditsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EditsResponse, SaplingGrammarCheckErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_grammar_check(ApiV1EditsRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingGrammarCheckErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_grammar_check(
    ApiV1EditsRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingGrammarCheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1EditsRequest](sapling/models/api_v1_edits_request.py) \| [ApiV1EditsRequestDict](sapling/models/api_v1_edits_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1EditsResponse](sapling/models/api_v1_edits_response.py), [SaplingGrammarCheckErrorBody](sapling/errors/sapling_grammar_check_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EditsResponse](sapling/models/api_v1_edits_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/edits-overview/ With noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result (some corrections may be missing) adds a `degraded` object; retry for a complete result.

**On `Failure`**: `error` is <code>[SaplingGrammarCheckErrorBody](sapling/errors/sapling_grammar_check_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_list_custom_filters(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CustomFilterResponse, SaplingListCustomFiltersErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_list_custom_filters()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomFilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListCustomFiltersErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_list_custom_filters()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomFilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListCustomFiltersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CustomFilterResponse](sapling/models/api_v1_custom_filter_response.py), [SaplingListCustomFiltersErrorBody](sapling/errors/sapling_list_custom_filters_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CustomFilterResponse](sapling/models/api_v1_custom_filter_response.py)</code> -- Custom filters.

**On `Failure`**: `error` is <code>[SaplingListCustomFiltersErrorBody](sapling/errors/sapling_list_custom_filters_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_list_custom_mappings(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CustomMappingResponse, SaplingListCustomMappingsErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_list_custom_mappings()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomMappingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListCustomMappingsErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_list_custom_mappings()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CustomMappingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListCustomMappingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1CustomMappingResponse](sapling/models/api_v1_custom_mapping_response.py), [SaplingListCustomMappingsErrorBody](sapling/errors/sapling_list_custom_mappings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CustomMappingResponse](sapling/models/api_v1_custom_mapping_response.py)</code> -- Custom mappings.

**On `Failure`**: `error` is <code>[SaplingListCustomMappingsErrorBody](sapling/errors/sapling_list_custom_mappings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_list_dictionary(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ApiV1DictionaryResponse], SaplingListDictionaryErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_list_dictionary()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ApiV1DictionaryResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListDictionaryErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_list_dictionary()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ApiV1DictionaryResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingListDictionaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>return_usage</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;list&#91;[ApiV1DictionaryResponse](sapling/models/api_v1_dictionary_response.py)&#93;, [SaplingListDictionaryErrorBody](sapling/errors/sapling_list_dictionary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ApiV1DictionaryResponse](sapling/models/api_v1_dictionary_response.py)&#93;</code> -- Dictionary entries.

**On `Failure`**: `error` is <code>[SaplingListDictionaryErrorBody](sapling/errors/sapling_list_dictionary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_reject_edit(edit_hash: UUID, body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EditsRejectResponse, SaplingRejectEditErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_reject_edit(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV1EditsRejectRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsRejectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingRejectEditErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_reject_edit(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV1EditsRejectRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EditsRejectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingRejectEditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>edit_hash</code> | <code>UUID</code> | The edit's `id` from /edits. |
| <code>body</code> | <code>[ApiV1EditsRejectRequest](sapling/models/api_v1_edits_reject_request.py) \| [ApiV1EditsRejectRequestDict](sapling/models/api_v1_edits_reject_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1EditsRejectResponse](sapling/models/api_v1_edits_reject_response.py), [SaplingRejectEditErrorBody](sapling/errors/sapling_reject_edit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EditsRejectResponse](sapling/models/api_v1_edits_reject_response.py)</code> -- Acknowledged.

**On `Failure`**: `error` is <code>[SaplingRejectEditErrorBody](sapling/errors/sapling_reject_edit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV1EditsRejectResponse11](sapling/models/unions/api_v1_edits_reject_response11.py)</code> |
| 401, 403, 500 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sapling_spellcheck(body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SpellcheckResponse, SaplingSpellcheckErrorBody]</code></summary>

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

**Sync**

```python
result = client.proofreading.with_raw_response.sapling_spellcheck(ApiV1SpellcheckRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SpellcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSpellcheckErrorBody
```

**Async**

```python
result = await async_client.proofreading.with_raw_response.sapling_spellcheck(
    ApiV1SpellcheckRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SpellcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SaplingSpellcheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1SpellcheckRequest](sapling/models/api_v1_spellcheck_request.py) \| [ApiV1SpellcheckRequestDict](sapling/models/api_v1_spellcheck_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](sapling/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](sapling/core/results.py)&#91;[ApiV1SpellcheckResponse](sapling/models/api_v1_spellcheck_response.py), [SaplingSpellcheckErrorBody](sapling/errors/sapling_spellcheck_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SpellcheckResponse](sapling/models/api_v1_spellcheck_response.py)</code> -- Successful response. Field-level schemas and examples: https://sapling.ai/docs/api/spellcheck/ With noformat=true (the SDK response shape) the body is a bare array of edit objects instead. A partial result (some corrections may be missing) adds a `degraded` object; retry for a complete result.

**On `Failure`**: `error` is <code>[SaplingSpellcheckErrorBody](sapling/errors/sapling_spellcheck_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500, 503 | <code>[Error](sapling/models/error.py)</code> |
| 402 | <code>[PaymentRequired1](sapling/models/payment_required1.py)</code> |
| 413 | <code>[PayloadTooLarge1](sapling/models/payload_too_large1.py)</code> |
| 429 | <code>[RateLimited1](sapling/models/rate_limited1.py)</code> |
| anything unmapped | <code>[RawError](sapling/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

