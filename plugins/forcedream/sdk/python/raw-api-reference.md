# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ForceDreamClient](force_dream/client.py)

<details>
<summary><code>def anomaly_detection(*, x_payment_intent_id: str | None = None, body: V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AnomalyDetectionErrorBody]</code></summary>

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
result = client.with_raw_response.anomaly_detection()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnomalyDetectionErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.anomaly_detection()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnomalyDetectionErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [AnomalyDetectionErrorBody](force_dream/errors/anomaly_detection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AnomalyDetectionErrorBody](force_dream/errors/anomaly_detection_error.py)</code>

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
<summary><code>def classification(*, x_payment_intent_id: str | None = None, body: V1OracleClassificationRequest | V1OracleClassificationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ClassificationErrorBody]</code></summary>

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
result = client.with_raw_response.classification()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClassificationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.classification()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClassificationErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [ClassificationErrorBody](force_dream/errors/classification_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ClassificationErrorBody](force_dream/errors/classification_error.py)</code>

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
<summary><code>def code_generation(*, x_payment_intent_id: str | None = None, body: V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CodeGenerationErrorBody]</code></summary>

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
result = client.with_raw_response.code_generation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CodeGenerationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.code_generation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CodeGenerationErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [CodeGenerationErrorBody](force_dream/errors/code_generation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CodeGenerationErrorBody](force_dream/errors/code_generation_error.py)</code>

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
<summary><code>def fraud_signal(*, x_payment_intent_id: str | None = None, body: V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, FraudSignalErrorBody]</code></summary>

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
result = client.with_raw_response.fraud_signal()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FraudSignalErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.fraud_signal()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FraudSignalErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [FraudSignalErrorBody](force_dream/errors/fraud_signal_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[FraudSignalErrorBody](force_dream/errors/fraud_signal_error.py)</code>

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
<summary><code>def lead_score(*, x_payment_intent_id: str | None = None, body: V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, LeadScoreErrorBody]</code></summary>

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
result = client.with_raw_response.lead_score()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LeadScoreErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.lead_score()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LeadScoreErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [LeadScoreErrorBody](force_dream/errors/lead_score_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[LeadScoreErrorBody](force_dream/errors/lead_score_error.py)</code>

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
<summary><code>def model_inference(*, x_payment_intent_id: str | None = None, body: V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ModelInferenceErrorBody]</code></summary>

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
result = client.with_raw_response.model_inference()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelInferenceErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.model_inference()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelInferenceErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [ModelInferenceErrorBody](force_dream/errors/model_inference_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ModelInferenceErrorBody](force_dream/errors/model_inference_error.py)</code>

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
<summary><code>def prompt_template(*, x_payment_intent_id: str | None = None, body: V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PromptTemplateErrorBody]</code></summary>

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
result = client.with_raw_response.prompt_template()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PromptTemplateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.prompt_template()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PromptTemplateErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [PromptTemplateErrorBody](force_dream/errors/prompt_template_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PromptTemplateErrorBody](force_dream/errors/prompt_template_error.py)</code>

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
<summary><code>def proof_of_work(*, x_payment_intent_id: str | None = None, body: V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ProofOfWorkErrorBody]</code></summary>

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
result = client.with_raw_response.proof_of_work()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProofOfWorkErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.proof_of_work()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProofOfWorkErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [ProofOfWorkErrorBody](force_dream/errors/proof_of_work_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ProofOfWorkErrorBody](force_dream/errors/proof_of_work_error.py)</code>

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
<summary><code>def security_scan(*, x_payment_intent_id: str | None = None, body: V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SecurityScanErrorBody]</code></summary>

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
result = client.with_raw_response.security_scan()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SecurityScanErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.security_scan()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SecurityScanErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [SecurityScanErrorBody](force_dream/errors/security_scan_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SecurityScanErrorBody](force_dream/errors/security_scan_error.py)</code>

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
<summary><code>def semantic_cache(*, x_payment_intent_id: str | None = None, body: V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SemanticCacheErrorBody]</code></summary>

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
result = client.with_raw_response.semantic_cache()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SemanticCacheErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.semantic_cache()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SemanticCacheErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [SemanticCacheErrorBody](force_dream/errors/semantic_cache_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SemanticCacheErrorBody](force_dream/errors/semantic_cache_error.py)</code>

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
<summary><code>def sentiment_feed(*, x_payment_intent_id: str | None = None, body: V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SentimentFeedErrorBody]</code></summary>

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
result = client.with_raw_response.sentiment_feed()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SentimentFeedErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.sentiment_feed()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SentimentFeedErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [SentimentFeedErrorBody](force_dream/errors/sentiment_feed_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SentimentFeedErrorBody](force_dream/errors/sentiment_feed_error.py)</code>

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
<summary><code>def summarization(*, x_payment_intent_id: str | None = None, body: V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SummarizationErrorBody]</code></summary>

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
result = client.with_raw_response.summarization()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SummarizationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.summarization()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SummarizationErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [SummarizationErrorBody](force_dream/errors/summarization_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SummarizationErrorBody](force_dream/errors/summarization_error.py)</code>

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
<summary><code>def tax_jar_lookup(*, x_payment_intent_id: str | None = None, body: V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TaxJarLookupErrorBody]</code></summary>

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
result = client.with_raw_response.tax_jar_lookup()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TaxJarLookupErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.tax_jar_lookup()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TaxJarLookupErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [TaxJarLookupErrorBody](force_dream/errors/tax_jar_lookup_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TaxJarLookupErrorBody](force_dream/errors/tax_jar_lookup_error.py)</code>

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
<summary><code>def translation(*, x_payment_intent_id: str | None = None, body: V1OracleTranslationRequest | V1OracleTranslationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TranslationErrorBody]</code></summary>

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
result = client.with_raw_response.translation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslationErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [TranslationErrorBody](force_dream/errors/translation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TranslationErrorBody](force_dream/errors/translation_error.py)</code>

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
<summary><code>def validation(*, x_payment_intent_id: str | None = None, body: V1OracleValidationRequest | V1OracleValidationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ValidationErrorBody]</code></summary>

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
result = client.with_raw_response.validation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.validation()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidationErrorBody
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

**Returns**: <code>[ApiResult](force_dream/core/results.py)&#91;None, [ValidationErrorBody](force_dream/errors/validation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ValidationErrorBody](force_dream/errors/validation_error.py)</code>

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

