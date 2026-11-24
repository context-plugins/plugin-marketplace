# Reference

> Source: [AmazonDevOpsGuruClient](src/client.ts)

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>describeAccountHealth(options?: RequestOptions): ApiPromise&lt;DescribeAccountHealthResponse, Accounts.DescribeAccountHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.describeAccountHealth();
  // TODO: Handle 'response' of type DescribeAccountHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.DescribeAccountHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.describeAccountHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeAccountHealthResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.describeAccountHealth()`

- **OnSuccess**: <code>[DescribeAccountHealthResponse](src/models/describe-account-health-response.ts)</code>
- **OnError**: throws <code>[Accounts.DescribeAccountHealthError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.describeAccountHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeAccountHealthResponse, Accounts.DescribeAccountHealthError&gt;</code>, with `result.value` of type <code>[DescribeAccountHealthResponse](src/models/describe-account-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAccountOverview(request?: Accounts.DescribeAccountOverviewRequest, options?: RequestOptions): ApiPromise&lt;DescribeAccountOverviewResponse, Accounts.DescribeAccountOverviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.describeAccountOverview();
  // TODO: Handle 'response' of type DescribeAccountOverviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.DescribeAccountOverviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.describeAccountOverview().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeAccountOverviewResponse
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
| <code>body?</code> | <code>[AccountsOverviewRequest](src/models/accounts-overview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.describeAccountOverview(request)`

- **OnSuccess**: <code>[DescribeAccountOverviewResponse](src/models/describe-account-overview-response.ts)</code>
- **OnError**: throws <code>[Accounts.DescribeAccountOverviewError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.describeAccountOverview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeAccountOverviewResponse, Accounts.DescribeAccountOverviewError&gt;</code>, with `result.value` of type <code>[DescribeAccountOverviewResponse](src/models/describe-account-overview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeResourceCollectionHealth(request: Accounts.DescribeResourceCollectionHealthRequest, options?: RequestOptions): ApiPromise&lt;DescribeResourceCollectionHealthResponse, Accounts.DescribeResourceCollectionHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.describeResourceCollectionHealth({
    resourceCollectionType: ResourceCollectionType.AwsCloudFormation,
  });
  // TODO: Handle 'response' of type DescribeResourceCollectionHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.DescribeResourceCollectionHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .describeResourceCollectionHealth({ resourceCollectionType: ResourceCollectionType.AwsCloudFormation })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeResourceCollectionHealthResponse
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
| <code>resourceCollectionType</code> | <code>[ResourceCollectionType](src/models/resource-collection-type.ts)</code> | An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
| <code>nextToken?</code> | <code>string</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.describeResourceCollectionHealth(request)`

- **OnSuccess**: <code>[DescribeResourceCollectionHealthResponse](src/models/describe-resource-collection-health-response.ts)</code>
- **OnError**: throws <code>[Accounts.DescribeResourceCollectionHealthError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.describeResourceCollectionHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeResourceCollectionHealthResponse, Accounts.DescribeResourceCollectionHealthError&gt;</code>, with `result.value` of type <code>[DescribeResourceCollectionHealthResponse](src/models/describe-resource-collection-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](src/resources/anomalies.ts)

<details>
<summary><code>describeAnomaly(request: Anomalies.DescribeAnomalyRequest, options?: RequestOptions): ApiPromise&lt;DescribeAnomalyResponse, Anomalies.DescribeAnomalyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an anomaly that you specify using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalies.describeAnomaly({ id: "some example string" });
  // TODO: Handle 'response' of type DescribeAnomalyResponse
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.DescribeAnomalyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies.describeAnomaly({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeAnomalyResponse
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
| <code>id</code> | <code>string</code> | The ID of the anomaly. |
| <code>accountId?</code> | <code>string</code> | The ID of the member account. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.describeAnomaly(request)`

- **OnSuccess**: <code>[DescribeAnomalyResponse](src/models/describe-anomaly-response.ts)</code>
- **OnError**: throws <code>[Anomalies.DescribeAnomalyError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.describeAnomaly(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeAnomalyResponse, Anomalies.DescribeAnomalyError&gt;</code>, with `result.value` of type <code>[DescribeAnomalyResponse](src/models/describe-anomaly-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomaliesForInsight(request: Anomalies.ListAnomaliesForInsightRequest, options?: RequestOptions): ApiPromise&lt;ListAnomaliesForInsightResponse, Anomalies.ListAnomaliesForInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the anomalies that belong to an insight that you specify using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalies.listAnomaliesForInsight({ insightId: "some example string" });
  // TODO: Handle 'response' of type ListAnomaliesForInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Anomalies.ListAnomaliesForInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalies
  .listAnomaliesForInsight({ insightId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAnomaliesForInsightResponse
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
| <code>insightId</code> | <code>string</code> | The ID of the insight. The returned anomalies belong to this insight. |
| <code>body?</code> | <code>[AnomaliesInsightRequest](src/models/anomalies-insight-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalies.listAnomaliesForInsight(request)`

- **OnSuccess**: <code>[ListAnomaliesForInsightResponse](src/models/list-anomalies-for-insight-response.ts)</code>
- **OnError**: throws <code>[Anomalies.ListAnomaliesForInsightError](src/resources/anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalies.listAnomaliesForInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAnomaliesForInsightResponse, Anomalies.ListAnomaliesForInsightError&gt;</code>, with `result.value` of type <code>[ListAnomaliesForInsightResponse](src/models/list-anomalies-for-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/resources/channels.ts)

<details>
<summary><code>addNotificationChannel(request?: Channels.AddNotificationChannelRequest, options?: RequestOptions): ApiPromise&lt;AddNotificationChannelResponse, Channels.AddNotificationChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.addNotificationChannel();
  // TODO: Handle 'response' of type AddNotificationChannelResponse
} catch (err) {
  // TODO: Handle 'err' of type Channels.AddNotificationChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.addNotificationChannel().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddNotificationChannelResponse
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
| <code>body?</code> | <code>[ChannelsRequest](src/models/channels-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.addNotificationChannel(request)`

- **OnSuccess**: <code>[AddNotificationChannelResponse](src/models/add-notification-channel-response.ts)</code>
- **OnError**: throws <code>[Channels.AddNotificationChannelError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.addNotificationChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddNotificationChannelResponse, Channels.AddNotificationChannelError&gt;</code>, with `result.value` of type <code>[AddNotificationChannelResponse](src/models/add-notification-channel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listNotificationChannels(request?: Channels.ListNotificationChannelsRequest, options?: RequestOptions): ApiPromise&lt;ListNotificationChannelsResponse, Channels.ListNotificationChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.listNotificationChannels();
  // TODO: Handle 'response' of type ListNotificationChannelsResponse
} catch (err) {
  // TODO: Handle 'err' of type Channels.ListNotificationChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.listNotificationChannels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListNotificationChannelsResponse
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
| <code>body?</code> | <code>[ChannelsRequest1](src/models/channels-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.listNotificationChannels(request)`

- **OnSuccess**: <code>[ListNotificationChannelsResponse](src/models/list-notification-channels-response.ts)</code>
- **OnError**: throws <code>[Channels.ListNotificationChannelsError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.listNotificationChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListNotificationChannelsResponse, Channels.ListNotificationChannelsError&gt;</code>, with `result.value` of type <code>[ListNotificationChannelsResponse](src/models/list-notification-channels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeNotificationChannel(request: Channels.RemoveNotificationChannelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Channels.RemoveNotificationChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.removeNotificationChannel({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Channels.RemoveNotificationChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.removeNotificationChannel({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | The ID of the notification channel to be removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.removeNotificationChannel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Channels.RemoveNotificationChannelError](src/resources/channels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.channels.removeNotificationChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Channels.RemoveNotificationChannelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CostEstimation

> Source: [CostEstimation](src/resources/cost-estimation.ts)

<details>
<summary><code>getCostEstimation(request?: CostEstimation.GetCostEstimationRequest, options?: RequestOptions): ApiPromise&lt;GetCostEstimationResponse, CostEstimation.GetCostEstimationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.costEstimation.getCostEstimation();
  // TODO: Handle 'response' of type GetCostEstimationResponse
} catch (err) {
  // TODO: Handle 'err' of type CostEstimation.GetCostEstimationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.costEstimation.getCostEstimation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetCostEstimationResponse
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
| <code>nextToken?</code> | <code>string</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.costEstimation.getCostEstimation(request)`

- **OnSuccess**: <code>[GetCostEstimationResponse](src/models/get-cost-estimation-response.ts)</code>
- **OnError**: throws <code>[CostEstimation.GetCostEstimationError](src/resources/cost-estimation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.costEstimation.getCostEstimation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetCostEstimationResponse, CostEstimation.GetCostEstimationError&gt;</code>, with `result.value` of type <code>[GetCostEstimationResponse](src/models/get-cost-estimation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCostEstimation(request?: CostEstimation.StartCostEstimationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, CostEstimation.StartCostEstimationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.costEstimation.startCostEstimation();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type CostEstimation.StartCostEstimationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.costEstimation.startCostEstimation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[CostEstimationRequest](src/models/cost-estimation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.costEstimation.startCostEstimation(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[CostEstimation.StartCostEstimationError](src/resources/cost-estimation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.costEstimation.startCostEstimation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, CostEstimation.StartCostEstimationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EventSources

> Source: [EventSources](src/resources/event-sources.ts)

<details>
<summary><code>describeEventSourcesConfig(options?: RequestOptions): ApiPromise&lt;DescribeEventSourcesConfigResponse, EventSources.DescribeEventSourcesConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventSources.describeEventSourcesConfig();
  // TODO: Handle 'response' of type DescribeEventSourcesConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type EventSources.DescribeEventSourcesConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventSources.describeEventSourcesConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeEventSourcesConfigResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventSources.describeEventSourcesConfig()`

- **OnSuccess**: <code>[DescribeEventSourcesConfigResponse](src/models/describe-event-sources-config-response.ts)</code>
- **OnError**: throws <code>[EventSources.DescribeEventSourcesConfigError](src/resources/event-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventSources.describeEventSourcesConfig().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeEventSourcesConfigResponse, EventSources.DescribeEventSourcesConfigError&gt;</code>, with `result.value` of type <code>[DescribeEventSourcesConfigResponse](src/models/describe-event-sources-config-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEventSourcesConfig(request?: EventSources.UpdateEventSourcesConfigRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, EventSources.UpdateEventSourcesConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eventSources.updateEventSourcesConfig();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type EventSources.UpdateEventSourcesConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eventSources.updateEventSourcesConfig().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[DescribeEventSourcesConfigResponse](src/models/describe-event-sources-config-response.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.eventSources.updateEventSourcesConfig(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[EventSources.UpdateEventSourcesConfigError](src/resources/event-sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eventSources.updateEventSourcesConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, EventSources.UpdateEventSourcesConfigError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>listEvents(request?: Events.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;ListEventsResponse, Events.ListEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEvents();
  // TODO: Handle 'response' of type ListEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Events.ListEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEventsResponse
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
| <code>body?</code> | <code>[EventsRequest](src/models/events-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listEvents(request)`

- **OnSuccess**: <code>[ListEventsResponse](src/models/list-events-response.ts)</code>
- **OnError**: throws <code>[Events.ListEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEventsResponse, Events.ListEventsError&gt;</code>, with `result.value` of type <code>[ListEventsResponse](src/models/list-events-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeedbackApi

> Source: [FeedbackApi](src/resources/feedback-api.ts)

<details>
<summary><code>describeFeedback(request?: FeedbackApi.DescribeFeedbackRequest, options?: RequestOptions): ApiPromise&lt;DescribeFeedbackResponse, FeedbackApi.DescribeFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedbackApi.describeFeedback();
  // TODO: Handle 'response' of type DescribeFeedbackResponse
} catch (err) {
  // TODO: Handle 'err' of type FeedbackApi.DescribeFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedbackApi.describeFeedback().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeFeedbackResponse
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
| <code>body?</code> | <code>[FeedbackRequest](src/models/feedback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedbackApi.describeFeedback(request)`

- **OnSuccess**: <code>[DescribeFeedbackResponse](src/models/describe-feedback-response.ts)</code>
- **OnError**: throws <code>[FeedbackApi.DescribeFeedbackError](src/resources/feedback-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feedbackApi.describeFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeFeedbackResponse, FeedbackApi.DescribeFeedbackError&gt;</code>, with `result.value` of type <code>[DescribeFeedbackResponse](src/models/describe-feedback-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putFeedback(request?: FeedbackApi.PutFeedbackRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, FeedbackApi.PutFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Collects customer feedback about the specified insight.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedbackApi.putFeedback();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type FeedbackApi.PutFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedbackApi.putFeedback().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[DescribeFeedbackResponse](src/models/describe-feedback-response.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedbackApi.putFeedback(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[FeedbackApi.PutFeedbackError](src/resources/feedback-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feedbackApi.putFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, FeedbackApi.PutFeedbackError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>deleteInsight(request: Insights.DeleteInsightRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Insights.DeleteInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the insight along with the associated anomalies, events and recommendations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.deleteInsight({ id: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Insights.DeleteInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.deleteInsight({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>id</code> | <code>string</code> | The ID of the insight. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.deleteInsight(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Insights.DeleteInsightError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.deleteInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Insights.DeleteInsightError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeInsight(request: Insights.DescribeInsightRequest, options?: RequestOptions): ApiPromise&lt;DescribeInsightResponse, Insights.DescribeInsightError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an insight that you specify using its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.describeInsight({ id: "some example string" });
  // TODO: Handle 'response' of type DescribeInsightResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.DescribeInsightError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.describeInsight({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeInsightResponse
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
| <code>id</code> | <code>string</code> | The ID of the insight. |
| <code>accountId?</code> | <code>string</code> | The ID of the member account in the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.describeInsight(request)`

- **OnSuccess**: <code>[DescribeInsightResponse](src/models/describe-insight-response.ts)</code>
- **OnError**: throws <code>[Insights.DescribeInsightError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.describeInsight(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeInsightResponse, Insights.DescribeInsightError&gt;</code>, with `result.value` of type <code>[DescribeInsightResponse](src/models/describe-insight-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInsights(request?: Insights.ListInsightsRequest, options?: RequestOptions): ApiPromise&lt;ListInsightsResponse, Insights.ListInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.listInsights();
  // TODO: Handle 'response' of type ListInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.ListInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.listInsights().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInsightsResponse
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
| <code>body?</code> | <code>[InsightsRequest](src/models/insights-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.listInsights(request)`

- **OnSuccess**: <code>[ListInsightsResponse](src/models/list-insights-response.ts)</code>
- **OnError**: throws <code>[Insights.ListInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.listInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInsightsResponse, Insights.ListInsightsError&gt;</code>, with `result.value` of type <code>[ListInsightsResponse](src/models/list-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchInsights(request?: Insights.SearchInsightsRequest, options?: RequestOptions): ApiPromise&lt;SearchInsightsResponse, Insights.SearchInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.searchInsights();
  // TODO: Handle 'response' of type SearchInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.SearchInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.searchInsights().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchInsightsResponse
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
| <code>body?</code> | <code>[InsightsSearchRequest](src/models/insights-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.searchInsights(request)`

- **OnSuccess**: <code>[SearchInsightsResponse](src/models/search-insights-response.ts)</code>
- **OnError**: throws <code>[Insights.SearchInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.searchInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchInsightsResponse, Insights.SearchInsightsError&gt;</code>, with `result.value` of type <code>[SearchInsightsResponse](src/models/search-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ListLogAnomalies

> Source: [ListLogAnomalies](src/resources/list-log-anomalies.ts)

<details>
<summary><code>listAnomalousLogGroups(request?: ListLogAnomalies.ListAnomalousLogGroupsRequest, options?: RequestOptions): ApiPromise&lt;ListAnomalousLogGroupsResponse, ListLogAnomalies.ListAnomalousLogGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of log groups that contain log anomalies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listLogAnomalies.listAnomalousLogGroups();
  // TODO: Handle 'response' of type ListAnomalousLogGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type ListLogAnomalies.ListAnomalousLogGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listLogAnomalies.listAnomalousLogGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAnomalousLogGroupsResponse
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
| <code>body?</code> | <code>[ListLogAnomaliesRequest](src/models/list-log-anomalies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listLogAnomalies.listAnomalousLogGroups(request)`

- **OnSuccess**: <code>[ListAnomalousLogGroupsResponse](src/models/list-anomalous-log-groups-response.ts)</code>
- **OnError**: throws <code>[ListLogAnomalies.ListAnomalousLogGroupsError](src/resources/list-log-anomalies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listLogAnomalies.listAnomalousLogGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAnomalousLogGroupsResponse, ListLogAnomalies.ListAnomalousLogGroupsError&gt;</code>, with `result.value` of type <code>[ListAnomalousLogGroupsResponse](src/models/list-anomalous-log-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MonitoredResources

> Source: [MonitoredResources](src/resources/monitored-resources.ts)

<details>
<summary><code>listMonitoredResources(request?: MonitoredResources.ListMonitoredResourcesRequest, options?: RequestOptions): ApiPromise&lt;ListMonitoredResourcesResponse, MonitoredResources.ListMonitoredResourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.monitoredResources.listMonitoredResources();
  // TODO: Handle 'response' of type ListMonitoredResourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type MonitoredResources.ListMonitoredResourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitoredResources.listMonitoredResources().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMonitoredResourcesResponse
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
| <code>body?</code> | <code>[MonitoredResourcesRequest](src/models/monitored-resources-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitoredResources.listMonitoredResources(request)`

- **OnSuccess**: <code>[ListMonitoredResourcesResponse](src/models/list-monitored-resources-response.ts)</code>
- **OnError**: throws <code>[MonitoredResources.ListMonitoredResourcesError](src/resources/monitored-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitoredResources.listMonitoredResources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMonitoredResourcesResponse, MonitoredResources.ListMonitoredResourcesError&gt;</code>, with `result.value` of type <code>[ListMonitoredResourcesResponse](src/models/list-monitored-resources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](src/resources/organization.ts)

<details>
<summary><code>describeOrganizationHealth(request?: Organization.DescribeOrganizationHealthRequest, options?: RequestOptions): ApiPromise&lt;DescribeOrganizationHealthResponse, Organization.DescribeOrganizationHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active insights, predictive insights, and resource hours analyzed in last hour.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.describeOrganizationHealth();
  // TODO: Handle 'response' of type DescribeOrganizationHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.DescribeOrganizationHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.describeOrganizationHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeOrganizationHealthResponse
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
| <code>body?</code> | <code>[OrganizationHealthRequest](src/models/organization-health-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.describeOrganizationHealth(request)`

- **OnSuccess**: <code>[DescribeOrganizationHealthResponse](src/models/describe-organization-health-response.ts)</code>
- **OnError**: throws <code>[Organization.DescribeOrganizationHealthError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.describeOrganizationHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeOrganizationHealthResponse, Organization.DescribeOrganizationHealthError&gt;</code>, with `result.value` of type <code>[DescribeOrganizationHealthResponse](src/models/describe-organization-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeOrganizationOverview(request?: Organization.DescribeOrganizationOverviewRequest, options?: RequestOptions): ApiPromise&lt;DescribeOrganizationOverviewResponse, Organization.DescribeOrganizationOverviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.describeOrganizationOverview();
  // TODO: Handle 'response' of type DescribeOrganizationOverviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.DescribeOrganizationOverviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.describeOrganizationOverview().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeOrganizationOverviewResponse
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
| <code>body?</code> | <code>[OrganizationOverviewRequest](src/models/organization-overview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.describeOrganizationOverview(request)`

- **OnSuccess**: <code>[DescribeOrganizationOverviewResponse](src/models/describe-organization-overview-response.ts)</code>
- **OnError**: throws <code>[Organization.DescribeOrganizationOverviewError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.describeOrganizationOverview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeOrganizationOverviewResponse, Organization.DescribeOrganizationOverviewError&gt;</code>, with `result.value` of type <code>[DescribeOrganizationOverviewResponse](src/models/describe-organization-overview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeOrganizationResourceCollectionHealth(request?: Organization.DescribeOrganizationResourceCollectionHealthRequest, options?: RequestOptions): ApiPromise&lt;DescribeOrganizationResourceCollectionHealthResponse, Organization.DescribeOrganizationResourceCollectionHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.describeOrganizationResourceCollectionHealth();
  // TODO: Handle 'response' of type DescribeOrganizationResourceCollectionHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.DescribeOrganizationResourceCollectionHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.describeOrganizationResourceCollectionHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeOrganizationResourceCollectionHealthResponse
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
| <code>body?</code> | <code>[OrganizationHealthResourceCollectionRequest](src/models/organization-health-resource-collection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.describeOrganizationResourceCollectionHealth(request)`

- **OnSuccess**: <code>[DescribeOrganizationResourceCollectionHealthResponse](src/models/describe-organization-resource-collection-health-response.ts)</code>
- **OnError**: throws <code>[Organization.DescribeOrganizationResourceCollectionHealthError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.describeOrganizationResourceCollectionHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeOrganizationResourceCollectionHealthResponse, Organization.DescribeOrganizationResourceCollectionHealthError&gt;</code>, with `result.value` of type <code>[DescribeOrganizationResourceCollectionHealthResponse](src/models/describe-organization-resource-collection-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrganizationInsights(request?: Organization.ListOrganizationInsightsRequest, options?: RequestOptions): ApiPromise&lt;ListOrganizationInsightsResponse, Organization.ListOrganizationInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights associated with the account or OU Id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.listOrganizationInsights();
  // TODO: Handle 'response' of type ListOrganizationInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.ListOrganizationInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.listOrganizationInsights().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOrganizationInsightsResponse
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
| <code>body?</code> | <code>[OrganizationInsightsRequest](src/models/organization-insights-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.listOrganizationInsights(request)`

- **OnSuccess**: <code>[ListOrganizationInsightsResponse](src/models/list-organization-insights-response.ts)</code>
- **OnError**: throws <code>[Organization.ListOrganizationInsightsError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.listOrganizationInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOrganizationInsightsResponse, Organization.ListOrganizationInsightsError&gt;</code>, with `result.value` of type <code>[ListOrganizationInsightsResponse](src/models/list-organization-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchOrganizationInsights(request?: Organization.SearchOrganizationInsightsRequest, options?: RequestOptions): ApiPromise&lt;SearchOrganizationInsightsResponse, Organization.SearchOrganizationInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organization.searchOrganizationInsights();
  // TODO: Handle 'response' of type SearchOrganizationInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Organization.SearchOrganizationInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organization.searchOrganizationInsights().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchOrganizationInsightsResponse
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
| <code>body?</code> | <code>[OrganizationInsightsSearchRequest](src/models/organization-insights-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organization.searchOrganizationInsights(request)`

- **OnSuccess**: <code>[SearchOrganizationInsightsResponse](src/models/search-organization-insights-response.ts)</code>
- **OnError**: throws <code>[Organization.SearchOrganizationInsightsError](src/resources/organization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organization.searchOrganizationInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchOrganizationInsightsResponse, Organization.SearchOrganizationInsightsError&gt;</code>, with `result.value` of type <code>[SearchOrganizationInsightsResponse](src/models/search-organization-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](src/resources/recommendations.ts)

<details>
<summary><code>listRecommendations(request?: Recommendations.ListRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;ListRecommendationsResponse, Recommendations.ListRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendations.listRecommendations();
  // TODO: Handle 'response' of type ListRecommendationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Recommendations.ListRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendations.listRecommendations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListRecommendationsResponse
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
| <code>body?</code> | <code>[RecommendationsRequest](src/models/recommendations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendations.listRecommendations(request)`

- **OnSuccess**: <code>[ListRecommendationsResponse](src/models/list-recommendations-response.ts)</code>
- **OnError**: throws <code>[Recommendations.ListRecommendationsError](src/resources/recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendations.listRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListRecommendationsResponse, Recommendations.ListRecommendationsError&gt;</code>, with `result.value` of type <code>[ListRecommendationsResponse](src/models/list-recommendations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceCollections

> Source: [ResourceCollections](src/resources/resource-collections.ts)

<details>
<summary><code>getResourceCollection(request: ResourceCollections.GetResourceCollectionRequest, options?: RequestOptions): ApiPromise&lt;GetResourceCollectionResponse, ResourceCollections.GetResourceCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourceCollections.getResourceCollection({
    resourceCollectionType: ResourceCollectionType.AwsCloudFormation,
  });
  // TODO: Handle 'response' of type GetResourceCollectionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResourceCollections.GetResourceCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceCollections
  .getResourceCollection({ resourceCollectionType: ResourceCollectionType.AwsCloudFormation })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetResourceCollectionResponse
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
| <code>resourceCollectionType</code> | <code>[ResourceCollectionType](src/models/resource-collection-type.ts)</code> | The type of Amazon Web Services resource collections to return. The one valid value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks. |
| <code>nextToken?</code> | <code>string</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceCollections.getResourceCollection(request)`

- **OnSuccess**: <code>[GetResourceCollectionResponse](src/models/get-resource-collection-response.ts)</code>
- **OnError**: throws <code>[ResourceCollections.GetResourceCollectionError](src/resources/resource-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceCollections.getResourceCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetResourceCollectionResponse, ResourceCollections.GetResourceCollectionError&gt;</code>, with `result.value` of type <code>[GetResourceCollectionResponse](src/models/get-resource-collection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateResourceCollection(request?: ResourceCollections.UpdateResourceCollectionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResourceCollections.UpdateResourceCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.resourceCollections.updateResourceCollection();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResourceCollections.UpdateResourceCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resourceCollections.updateResourceCollection().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[ResourceCollectionsRequest](src/models/resource-collections-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resourceCollections.updateResourceCollection(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ResourceCollections.UpdateResourceCollectionError](src/resources/resource-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resourceCollections.updateResourceCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ResourceCollections.UpdateResourceCollectionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceIntegrations

> Source: [ServiceIntegrations](src/resources/service-integrations.ts)

<details>
<summary><code>describeServiceIntegration(options?: RequestOptions): ApiPromise&lt;DescribeServiceIntegrationResponse, ServiceIntegrations.DescribeServiceIntegrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceIntegrations.describeServiceIntegration();
  // TODO: Handle 'response' of type DescribeServiceIntegrationResponse
} catch (err) {
  // TODO: Handle 'err' of type ServiceIntegrations.DescribeServiceIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceIntegrations.describeServiceIntegration().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DescribeServiceIntegrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceIntegrations.describeServiceIntegration()`

- **OnSuccess**: <code>[DescribeServiceIntegrationResponse](src/models/describe-service-integration-response.ts)</code>
- **OnError**: throws <code>[ServiceIntegrations.DescribeServiceIntegrationError](src/resources/service-integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceIntegrations.describeServiceIntegration().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DescribeServiceIntegrationResponse, ServiceIntegrations.DescribeServiceIntegrationError&gt;</code>, with `result.value` of type <code>[DescribeServiceIntegrationResponse](src/models/describe-service-integration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateServiceIntegration(request?: ServiceIntegrations.UpdateServiceIntegrationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ServiceIntegrations.UpdateServiceIntegrationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceIntegrations.updateServiceIntegration();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ServiceIntegrations.UpdateServiceIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceIntegrations.updateServiceIntegration().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[ServiceIntegrationsRequest](src/models/service-integrations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceIntegrations.updateServiceIntegration(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ServiceIntegrations.UpdateServiceIntegrationError](src/resources/service-integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serviceIntegrations.updateServiceIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ServiceIntegrations.UpdateServiceIntegrationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonDevOpsGuruError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

