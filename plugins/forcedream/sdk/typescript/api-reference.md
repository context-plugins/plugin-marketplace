# Reference

> Source: [ForceDreamClient](src/client.ts)

<details>
<summary><code>anomalyDetection(request?: ForceDreamClient.AnomalyDetectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.AnomalyDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.anomalyDetection();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.AnomalyDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyDetection().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleAnomalyDetectionRequest](src/models/v1-oracle-anomaly-detection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalyDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.AnomalyDetectionError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.AnomalyDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>classification(request?: ForceDreamClient.ClassificationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.ClassificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.classification();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.ClassificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classification().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleClassificationRequest](src/models/v1-oracle-classification-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classification(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.ClassificationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.ClassificationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>codeGeneration(request?: ForceDreamClient.CodeGenerationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.CodeGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.codeGeneration();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.CodeGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.codeGeneration().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleCodeGenerationRequest](src/models/v1-oracle-code-generation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.codeGeneration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.CodeGenerationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.codeGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.CodeGenerationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fraudSignal(request?: ForceDreamClient.FraudSignalRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.FraudSignalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fraudSignal();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.FraudSignalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fraudSignal().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleFraudSignalRequest](src/models/v1-oracle-fraud-signal-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fraudSignal(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.FraudSignalError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fraudSignal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.FraudSignalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>leadScore(request?: ForceDreamClient.LeadScoreRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.LeadScoreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.leadScore();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.LeadScoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.leadScore().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleLeadScoreRequest](src/models/v1-oracle-lead-score-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.leadScore(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.LeadScoreError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.leadScore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.LeadScoreError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>modelInference(request?: ForceDreamClient.ModelInferenceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.ModelInferenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.modelInference();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.ModelInferenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.modelInference().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleModelInferenceRequest](src/models/v1-oracle-model-inference-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.modelInference(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.ModelInferenceError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.modelInference(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.ModelInferenceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>promptTemplate(request?: ForceDreamClient.PromptTemplateRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.PromptTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.promptTemplate();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.PromptTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promptTemplate().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OraclePromptTemplateRequest](src/models/v1-oracle-prompt-template-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.promptTemplate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.PromptTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promptTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.PromptTemplateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>proofOfWork(request?: ForceDreamClient.ProofOfWorkRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.ProofOfWorkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.proofOfWork();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.ProofOfWorkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.proofOfWork().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleProofOfWorkRequest](src/models/v1-oracle-proof-of-work-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.proofOfWork(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.ProofOfWorkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.proofOfWork(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.ProofOfWorkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>securityScan(request?: ForceDreamClient.SecurityScanRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.SecurityScanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.securityScan();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.SecurityScanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.securityScan().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleSecurityScanRequest](src/models/v1-oracle-security-scan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.securityScan(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.SecurityScanError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.securityScan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.SecurityScanError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>semanticCache(request?: ForceDreamClient.SemanticCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.SemanticCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.semanticCache();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.SemanticCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semanticCache().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleSemanticCacheRequest](src/models/v1-oracle-semantic-cache-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semanticCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.SemanticCacheError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semanticCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.SemanticCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sentimentFeed(request?: ForceDreamClient.SentimentFeedRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.SentimentFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sentimentFeed();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.SentimentFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sentimentFeed().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleSentimentFeedRequest](src/models/v1-oracle-sentiment-feed-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sentimentFeed(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.SentimentFeedError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sentimentFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.SentimentFeedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>summarization(request?: ForceDreamClient.SummarizationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.SummarizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.summarization();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.SummarizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.summarization().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleSummarizationRequest](src/models/v1-oracle-summarization-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.summarization(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.SummarizationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.summarization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.SummarizationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>taxJarLookup(request?: ForceDreamClient.TaxJarLookupRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.TaxJarLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.taxJarLookup();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.TaxJarLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taxJarLookup().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleTaxJarLookupRequest](src/models/v1-oracle-tax-jar-lookup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taxJarLookup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.TaxJarLookupError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taxJarLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.TaxJarLookupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translation(request?: ForceDreamClient.TranslationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.TranslationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.translation();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.TranslationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.translation().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleTranslationRequest](src/models/v1-oracle-translation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.TranslationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.TranslationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>validation(request?: ForceDreamClient.ValidationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ForceDreamClient.ValidationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.validation();
} catch (err) {
  // TODO: Handle 'err' of type ForceDreamClient.ValidationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.validation().asApiResult();
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
| <code>xPaymentIntentId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[V1OracleValidationRequest](src/models/v1-oracle-validation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.validation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForceDreamClient.ValidationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.validation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForceDreamClient.ValidationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ForceDreamError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

