# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [ForceDreamClient](force_dream/client.py)

<details>
<summary><code>def anomaly_detection(*, x_payment_intent_id: str | None = None, body: V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.anomaly_detection()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnomalyDetectionErrorBody
```

**Async**

```python
try:
    await async_client.anomaly_detection()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnomalyDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleAnomalyDetectionRequest](force_dream/models/v1_oracle_anomaly_detection_request.py) \| [V1OracleAnomalyDetectionRequestDict](force_dream/models/v1_oracle_anomaly_detection_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[AnomalyDetectionErrorBody](force_dream/errors/anomaly_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def classification(*, x_payment_intent_id: str | None = None, body: V1OracleClassificationRequest | V1OracleClassificationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.classification()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassificationErrorBody
```

**Async**

```python
try:
    await async_client.classification()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassificationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleClassificationRequest](force_dream/models/v1_oracle_classification_request.py) \| [V1OracleClassificationRequestDict](force_dream/models/v1_oracle_classification_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[ClassificationErrorBody](force_dream/errors/classification_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def code_generation(*, x_payment_intent_id: str | None = None, body: V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.code_generation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CodeGenerationErrorBody
```

**Async**

```python
try:
    await async_client.code_generation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CodeGenerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleCodeGenerationRequest](force_dream/models/v1_oracle_code_generation_request.py) \| [V1OracleCodeGenerationRequestDict](force_dream/models/v1_oracle_code_generation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[CodeGenerationErrorBody](force_dream/errors/code_generation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fraud_signal(*, x_payment_intent_id: str | None = None, body: V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.fraud_signal()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FraudSignalErrorBody
```

**Async**

```python
try:
    await async_client.fraud_signal()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FraudSignalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleFraudSignalRequest](force_dream/models/v1_oracle_fraud_signal_request.py) \| [V1OracleFraudSignalRequestDict](force_dream/models/v1_oracle_fraud_signal_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[FraudSignalErrorBody](force_dream/errors/fraud_signal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lead_score(*, x_payment_intent_id: str | None = None, body: V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.lead_score()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LeadScoreErrorBody
```

**Async**

```python
try:
    await async_client.lead_score()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LeadScoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleLeadScoreRequest](force_dream/models/v1_oracle_lead_score_request.py) \| [V1OracleLeadScoreRequestDict](force_dream/models/v1_oracle_lead_score_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[LeadScoreErrorBody](force_dream/errors/lead_score_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def model_inference(*, x_payment_intent_id: str | None = None, body: V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.model_inference()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelInferenceErrorBody
```

**Async**

```python
try:
    await async_client.model_inference()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelInferenceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleModelInferenceRequest](force_dream/models/v1_oracle_model_inference_request.py) \| [V1OracleModelInferenceRequestDict](force_dream/models/v1_oracle_model_inference_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[ModelInferenceErrorBody](force_dream/errors/model_inference_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def prompt_template(*, x_payment_intent_id: str | None = None, body: V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.prompt_template()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PromptTemplateErrorBody
```

**Async**

```python
try:
    await async_client.prompt_template()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PromptTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OraclePromptTemplateRequest](force_dream/models/v1_oracle_prompt_template_request.py) \| [V1OraclePromptTemplateRequestDict](force_dream/models/v1_oracle_prompt_template_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[PromptTemplateErrorBody](force_dream/errors/prompt_template_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def proof_of_work(*, x_payment_intent_id: str | None = None, body: V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.proof_of_work()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProofOfWorkErrorBody
```

**Async**

```python
try:
    await async_client.proof_of_work()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProofOfWorkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleProofOfWorkRequest](force_dream/models/v1_oracle_proof_of_work_request.py) \| [V1OracleProofOfWorkRequestDict](force_dream/models/v1_oracle_proof_of_work_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[ProofOfWorkErrorBody](force_dream/errors/proof_of_work_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def security_scan(*, x_payment_intent_id: str | None = None, body: V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.security_scan()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecurityScanErrorBody
```

**Async**

```python
try:
    await async_client.security_scan()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecurityScanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleSecurityScanRequest](force_dream/models/v1_oracle_security_scan_request.py) \| [V1OracleSecurityScanRequestDict](force_dream/models/v1_oracle_security_scan_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[SecurityScanErrorBody](force_dream/errors/security_scan_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def semantic_cache(*, x_payment_intent_id: str | None = None, body: V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.semantic_cache()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SemanticCacheErrorBody
```

**Async**

```python
try:
    await async_client.semantic_cache()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SemanticCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleSemanticCacheRequest](force_dream/models/v1_oracle_semantic_cache_request.py) \| [V1OracleSemanticCacheRequestDict](force_dream/models/v1_oracle_semantic_cache_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[SemanticCacheErrorBody](force_dream/errors/semantic_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sentiment_feed(*, x_payment_intent_id: str | None = None, body: V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.sentiment_feed()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SentimentFeedErrorBody
```

**Async**

```python
try:
    await async_client.sentiment_feed()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SentimentFeedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleSentimentFeedRequest](force_dream/models/v1_oracle_sentiment_feed_request.py) \| [V1OracleSentimentFeedRequestDict](force_dream/models/v1_oracle_sentiment_feed_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[SentimentFeedErrorBody](force_dream/errors/sentiment_feed_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def summarization(*, x_payment_intent_id: str | None = None, body: V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.summarization()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SummarizationErrorBody
```

**Async**

```python
try:
    await async_client.summarization()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SummarizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleSummarizationRequest](force_dream/models/v1_oracle_summarization_request.py) \| [V1OracleSummarizationRequestDict](force_dream/models/v1_oracle_summarization_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[SummarizationErrorBody](force_dream/errors/summarization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tax_jar_lookup(*, x_payment_intent_id: str | None = None, body: V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.tax_jar_lookup()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TaxJarLookupErrorBody
```

**Async**

```python
try:
    await async_client.tax_jar_lookup()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TaxJarLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleTaxJarLookupRequest](force_dream/models/v1_oracle_tax_jar_lookup_request.py) \| [V1OracleTaxJarLookupRequestDict](force_dream/models/v1_oracle_tax_jar_lookup_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[TaxJarLookupErrorBody](force_dream/errors/tax_jar_lookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translation(*, x_payment_intent_id: str | None = None, body: V1OracleTranslationRequest | V1OracleTranslationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.translation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranslationErrorBody
```

**Async**

```python
try:
    await async_client.translation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranslationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleTranslationRequest](force_dream/models/v1_oracle_translation_request.py) \| [V1OracleTranslationRequestDict](force_dream/models/v1_oracle_translation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[TranslationErrorBody](force_dream/errors/translation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validation(*, x_payment_intent_id: str | None = None, body: V1OracleValidationRequest | V1OracleValidationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.validation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidationErrorBody
```

**Async**

```python
try:
    await async_client.validation()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_payment_intent_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[V1OracleValidationRequest](force_dream/models/v1_oracle_validation_request.py) \| [V1OracleValidationRequestDict](force_dream/models/v1_oracle_validation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](force_dream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](force_dream/core/exceptions.py)&#91;[ValidationErrorBody](force_dream/errors/validation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[RawError](force_dream/core/results.py)</code> |
| anything unmapped | <code>[RawError](force_dream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

