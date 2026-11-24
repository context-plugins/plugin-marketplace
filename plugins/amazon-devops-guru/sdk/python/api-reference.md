# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonDevOpsGuruClient](amazon_dev_ops_guru/client.py)

## Accounts

> Source: [Accounts](amazon_dev_ops_guru/apis/accounts.py)

<details>
<summary><code>def describe_account_health(*, request_options: RequestOptionsOrDict | None = None) -> DescribeAccountHealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.accounts.describe_account_health()
    # TODO: Handle 'response' of type DescribeAccountHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAccountHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.describe_account_health()
    # TODO: Handle 'response' of type DescribeAccountHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAccountHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAccountHealthResponse](amazon_dev_ops_guru/models/describe_account_health_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeAccountHealthErrorBody](amazon_dev_ops_guru/errors/describe_account_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_account_overview(*, body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeAccountOverviewResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.accounts.describe_account_overview()
    # TODO: Handle 'response' of type DescribeAccountOverviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAccountOverviewErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.describe_account_overview()
    # TODO: Handle 'response' of type DescribeAccountOverviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAccountOverviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountsOverviewRequest](amazon_dev_ops_guru/models/accounts_overview_request.py) \| [AccountsOverviewRequestDict](amazon_dev_ops_guru/models/accounts_overview_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAccountOverviewResponse](amazon_dev_ops_guru/models/describe_account_overview_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeAccountOverviewErrorBody](amazon_dev_ops_guru/errors/describe_account_overview_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_resource_collection_health(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeResourceCollectionHealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.accounts.describe_resource_collection_health(ResourceCollectionType.AWS_CLOUD_FORMATION)
    # TODO: Handle 'response' of type DescribeResourceCollectionHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourceCollectionHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.describe_resource_collection_health(
        ResourceCollectionType.AWS_CLOUD_FORMATION
    )
    # TODO: Handle 'response' of type DescribeResourceCollectionHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourceCollectionHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_collection_type</code> | <code>[ResourceCollectionTypeOrStr](amazon_dev_ops_guru/models/enums/resource_collection_type.py)</code> | An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. |
| <code>next_token</code> | <code>str \| None</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_resource_collection_health_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_resource_collection_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](amazon_dev_ops_guru/apis/anomalies.py)

<details>
<summary><code>def describe_anomaly(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeAnomalyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an anomaly that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.anomalies.describe_anomaly("some example string")
    # TODO: Handle 'response' of type DescribeAnomalyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAnomalyErrorBody
```

**Async**

```python
try:
    response = await async_client.anomalies.describe_anomaly("some example string")
    # TODO: Handle 'response' of type DescribeAnomalyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAnomalyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the anomaly. |
| <code>account_id</code> | <code>str \| None</code> | The ID of the member account.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAnomalyResponse](amazon_dev_ops_guru/models/describe_anomaly_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeAnomalyErrorBody](amazon_dev_ops_guru/errors/describe_anomaly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_anomalies_for_insight(insight_id: str, *, body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAnomaliesForInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the anomalies that belong to an insight that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.anomalies.list_anomalies_for_insight("some example string")
    # TODO: Handle 'response' of type ListAnomaliesForInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomaliesForInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.anomalies.list_anomalies_for_insight("some example string")
    # TODO: Handle 'response' of type ListAnomaliesForInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomaliesForInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>insight_id</code> | <code>str</code> | The ID of the insight. The returned anomalies belong to this insight. |
| <code>body</code> | <code>[AnomaliesInsightRequest](amazon_dev_ops_guru/models/anomalies_insight_request.py) \| [AnomaliesInsightRequestDict](amazon_dev_ops_guru/models/anomalies_insight_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAnomaliesForInsightResponse](amazon_dev_ops_guru/models/list_anomalies_for_insight_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListAnomaliesForInsightErrorBody](amazon_dev_ops_guru/errors/list_anomalies_for_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](amazon_dev_ops_guru/apis/channels.py)

<details>
<summary><code>def add_notification_channel(*, body: ChannelsRequest | ChannelsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> AddNotificationChannelResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.add_notification_channel()
    # TODO: Handle 'response' of type AddNotificationChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddNotificationChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.add_notification_channel()
    # TODO: Handle 'response' of type AddNotificationChannelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddNotificationChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelsRequest](amazon_dev_ops_guru/models/channels_request.py) \| [ChannelsRequestDict](amazon_dev_ops_guru/models/channels_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AddNotificationChannelResponse](amazon_dev_ops_guru/models/add_notification_channel_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[AddNotificationChannelErrorBody](amazon_dev_ops_guru/errors/add_notification_channel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_dev_ops_guru/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_notification_channels(*, body: ChannelsRequest1 | ChannelsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListNotificationChannelsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.list_notification_channels()
    # TODO: Handle 'response' of type ListNotificationChannelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNotificationChannelsErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.list_notification_channels()
    # TODO: Handle 'response' of type ListNotificationChannelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNotificationChannelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelsRequest1](amazon_dev_ops_guru/models/channels_request1.py) \| [ChannelsRequest1Dict](amazon_dev_ops_guru/models/channels_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListNotificationChannelsResponse](amazon_dev_ops_guru/models/list_notification_channels_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListNotificationChannelsErrorBody](amazon_dev_ops_guru/errors/list_notification_channels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_notification_channel(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.remove_notification_channel("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveNotificationChannelErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.remove_notification_channel("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveNotificationChannelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the notification channel to be removed. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[RemoveNotificationChannelErrorBody](amazon_dev_ops_guru/errors/remove_notification_channel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CostEstimation

> Source: [CostEstimation](amazon_dev_ops_guru/apis/cost_estimation.py)

<details>
<summary><code>def get_cost_estimation(*, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetCostEstimationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cost_estimation.get_cost_estimation()
    # TODO: Handle 'response' of type GetCostEstimationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCostEstimationErrorBody
```

**Async**

```python
try:
    response = await async_client.cost_estimation.get_cost_estimation()
    # TODO: Handle 'response' of type GetCostEstimationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCostEstimationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_token</code> | <code>str \| None</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetCostEstimationResponse](amazon_dev_ops_guru/models/get_cost_estimation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[GetCostEstimationErrorBody](amazon_dev_ops_guru/errors/get_cost_estimation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_cost_estimation(*, body: CostEstimationRequest | CostEstimationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cost_estimation.start_cost_estimation()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCostEstimationErrorBody
```

**Async**

```python
try:
    response = await async_client.cost_estimation.start_cost_estimation()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCostEstimationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CostEstimationRequest](amazon_dev_ops_guru/models/cost_estimation_request.py) \| [CostEstimationRequestDict](amazon_dev_ops_guru/models/cost_estimation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[StartCostEstimationErrorBody](amazon_dev_ops_guru/errors/start_cost_estimation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EventSources

> Source: [EventSources](amazon_dev_ops_guru/apis/event_sources.py)

<details>
<summary><code>def describe_event_sources_config(*, request_options: RequestOptionsOrDict | None = None) -> DescribeEventSourcesConfigResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.event_sources.describe_event_sources_config()
    # TODO: Handle 'response' of type DescribeEventSourcesConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEventSourcesConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.event_sources.describe_event_sources_config()
    # TODO: Handle 'response' of type DescribeEventSourcesConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEventSourcesConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeEventSourcesConfigResponse](amazon_dev_ops_guru/models/describe_event_sources_config_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/describe_event_sources_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_event_sources_config(*, body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.event_sources.update_event_sources_config()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEventSourcesConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.event_sources.update_event_sources_config()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEventSourcesConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DescribeEventSourcesConfigResponse](amazon_dev_ops_guru/models/describe_event_sources_config_response.py) \| [DescribeEventSourcesConfigResponseDict](amazon_dev_ops_guru/models/describe_event_sources_config_response.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[UpdateEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/update_event_sources_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](amazon_dev_ops_guru/apis/events.py)

<details>
<summary><code>def list_events(*, body: EventsRequest | EventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListEventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.list_events()
    # TODO: Handle 'response' of type ListEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.events.list_events()
    # TODO: Handle 'response' of type ListEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EventsRequest](amazon_dev_ops_guru/models/events_request.py) \| [EventsRequestDict](amazon_dev_ops_guru/models/events_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListEventsResponse](amazon_dev_ops_guru/models/list_events_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListEventsErrorBody](amazon_dev_ops_guru/errors/list_events_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FeedbackApi

> Source: [FeedbackApi](amazon_dev_ops_guru/apis/feedback_api.py)

<details>
<summary><code>def describe_feedback(*, body: FeedbackRequest | FeedbackRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeFeedbackResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.feedback_api.describe_feedback()
    # TODO: Handle 'response' of type DescribeFeedbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFeedbackErrorBody
```

**Async**

```python
try:
    response = await async_client.feedback_api.describe_feedback()
    # TODO: Handle 'response' of type DescribeFeedbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFeedbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FeedbackRequest](amazon_dev_ops_guru/models/feedback_request.py) \| [FeedbackRequestDict](amazon_dev_ops_guru/models/feedback_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeFeedbackResponse](amazon_dev_ops_guru/models/describe_feedback_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeFeedbackErrorBody](amazon_dev_ops_guru/errors/describe_feedback_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_feedback(*, body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Collects customer feedback about the specified insight.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.feedback_api.put_feedback()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutFeedbackErrorBody
```

**Async**

```python
try:
    response = await async_client.feedback_api.put_feedback()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutFeedbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DescribeFeedbackResponse](amazon_dev_ops_guru/models/describe_feedback_response.py) \| [DescribeFeedbackResponseDict](amazon_dev_ops_guru/models/describe_feedback_response.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[PutFeedbackErrorBody](amazon_dev_ops_guru/errors/put_feedback_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](amazon_dev_ops_guru/apis/insights.py)

<details>
<summary><code>def delete_insight(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the insight along with the associated anomalies, events and recommendations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.delete_insight("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.delete_insight("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the insight. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DeleteInsightErrorBody](amazon_dev_ops_guru/errors/delete_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_insight(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeInsightResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an insight that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.describe_insight("some example string")
    # TODO: Handle 'response' of type DescribeInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.describe_insight("some example string")
    # TODO: Handle 'response' of type DescribeInsightResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the insight. |
| <code>account_id</code> | <code>str \| None</code> | The ID of the member account in the organization.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeInsightResponse](amazon_dev_ops_guru/models/describe_insight_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeInsightErrorBody](amazon_dev_ops_guru/errors/describe_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_insights(*, body: InsightsRequest | InsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.list_insights()
    # TODO: Handle 'response' of type ListInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.list_insights()
    # TODO: Handle 'response' of type ListInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightsRequest](amazon_dev_ops_guru/models/insights_request.py) \| [InsightsRequestDict](amazon_dev_ops_guru/models/insights_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInsightsResponse](amazon_dev_ops_guru/models/list_insights_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListInsightsErrorBody](amazon_dev_ops_guru/errors/list_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_insights(*, body: InsightsSearchRequest | InsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.search_insights()
    # TODO: Handle 'response' of type SearchInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.search_insights()
    # TODO: Handle 'response' of type SearchInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightsSearchRequest](amazon_dev_ops_guru/models/insights_search_request.py) \| [InsightsSearchRequestDict](amazon_dev_ops_guru/models/insights_search_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchInsightsResponse](amazon_dev_ops_guru/models/search_insights_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[SearchInsightsErrorBody](amazon_dev_ops_guru/errors/search_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ListLogAnomalies

> Source: [ListLogAnomalies](amazon_dev_ops_guru/apis/list_log_anomalies.py)

<details>
<summary><code>def list_anomalous_log_groups(*, body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAnomalousLogGroupsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of log groups that contain log anomalies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.list_log_anomalies.list_anomalous_log_groups()
    # TODO: Handle 'response' of type ListAnomalousLogGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomalousLogGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.list_log_anomalies.list_anomalous_log_groups()
    # TODO: Handle 'response' of type ListAnomalousLogGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAnomalousLogGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListLogAnomaliesRequest](amazon_dev_ops_guru/models/list_log_anomalies_request.py) \| [ListLogAnomaliesRequestDict](amazon_dev_ops_guru/models/list_log_anomalies_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAnomalousLogGroupsResponse](amazon_dev_ops_guru/models/list_anomalous_log_groups_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListAnomalousLogGroupsErrorBody](amazon_dev_ops_guru/errors/list_anomalous_log_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MonitoredResources

> Source: [MonitoredResources](amazon_dev_ops_guru/apis/monitored_resources.py)

<details>
<summary><code>def list_monitored_resources(*, body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListMonitoredResourcesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitored_resources.list_monitored_resources()
    # TODO: Handle 'response' of type ListMonitoredResourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitoredResourcesErrorBody
```

**Async**

```python
try:
    response = await async_client.monitored_resources.list_monitored_resources()
    # TODO: Handle 'response' of type ListMonitoredResourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitoredResourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MonitoredResourcesRequest](amazon_dev_ops_guru/models/monitored_resources_request.py) \| [MonitoredResourcesRequestDict](amazon_dev_ops_guru/models/monitored_resources_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMonitoredResourcesResponse](amazon_dev_ops_guru/models/list_monitored_resources_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListMonitoredResourcesErrorBody](amazon_dev_ops_guru/errors/list_monitored_resources_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](amazon_dev_ops_guru/apis/organization.py)

<details>
<summary><code>def describe_organization_health(*, body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeOrganizationHealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active insights, predictive insights, and resource hours analyzed in last hour.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization.describe_organization_health()
    # TODO: Handle 'response' of type DescribeOrganizationHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.organization.describe_organization_health()
    # TODO: Handle 'response' of type DescribeOrganizationHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationHealthRequest](amazon_dev_ops_guru/models/organization_health_request.py) \| [OrganizationHealthRequestDict](amazon_dev_ops_guru/models/organization_health_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationHealthResponse](amazon_dev_ops_guru/models/describe_organization_health_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeOrganizationHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_organization_overview(*, body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeOrganizationOverviewResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization.describe_organization_overview()
    # TODO: Handle 'response' of type DescribeOrganizationOverviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationOverviewErrorBody
```

**Async**

```python
try:
    response = await async_client.organization.describe_organization_overview()
    # TODO: Handle 'response' of type DescribeOrganizationOverviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationOverviewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationOverviewRequest](amazon_dev_ops_guru/models/organization_overview_request.py) \| [OrganizationOverviewRequestDict](amazon_dev_ops_guru/models/organization_overview_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationOverviewResponse](amazon_dev_ops_guru/models/describe_organization_overview_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeOrganizationOverviewErrorBody](amazon_dev_ops_guru/errors/describe_organization_overview_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_organization_resource_collection_health(*, body: OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeOrganizationResourceCollectionHealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization.describe_organization_resource_collection_health()
    # TODO: Handle 'response' of type DescribeOrganizationResourceCollectionHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationResourceCollectionHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.organization.describe_organization_resource_collection_health()
    # TODO: Handle 'response' of type DescribeOrganizationResourceCollectionHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeOrganizationResourceCollectionHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationHealthResourceCollectionRequest](amazon_dev_ops_guru/models/organization_health_resource_collection_request.py) \| [OrganizationHealthResourceCollectionRequestDict](amazon_dev_ops_guru/models/organization_health_resource_collection_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_organization_resource_collection_health_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeOrganizationResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_resource_collection_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organization_insights(*, body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListOrganizationInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights associated with the account or OU Id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization.list_organization_insights()
    # TODO: Handle 'response' of type ListOrganizationInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.organization.list_organization_insights()
    # TODO: Handle 'response' of type ListOrganizationInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationInsightsRequest](amazon_dev_ops_guru/models/organization_insights_request.py) \| [OrganizationInsightsRequestDict](amazon_dev_ops_guru/models/organization_insights_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOrganizationInsightsResponse](amazon_dev_ops_guru/models/list_organization_insights_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/list_organization_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_organization_insights(*, body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchOrganizationInsightsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization.search_organization_insights()
    # TODO: Handle 'response' of type SearchOrganizationInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchOrganizationInsightsErrorBody
```

**Async**

```python
try:
    response = await async_client.organization.search_organization_insights()
    # TODO: Handle 'response' of type SearchOrganizationInsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchOrganizationInsightsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationInsightsSearchRequest](amazon_dev_ops_guru/models/organization_insights_search_request.py) \| [OrganizationInsightsSearchRequestDict](amazon_dev_ops_guru/models/organization_insights_search_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchOrganizationInsightsResponse](amazon_dev_ops_guru/models/search_organization_insights_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[SearchOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/search_organization_insights_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](amazon_dev_ops_guru/apis/recommendations.py)

<details>
<summary><code>def list_recommendations(*, body: RecommendationsRequest | RecommendationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListRecommendationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recommendations.list_recommendations()
    # TODO: Handle 'response' of type ListRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.recommendations.list_recommendations()
    # TODO: Handle 'response' of type ListRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecommendationsRequest](amazon_dev_ops_guru/models/recommendations_request.py) \| [RecommendationsRequestDict](amazon_dev_ops_guru/models/recommendations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecommendationsResponse](amazon_dev_ops_guru/models/list_recommendations_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[ListRecommendationsErrorBody](amazon_dev_ops_guru/errors/list_recommendations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceCollections

> Source: [ResourceCollections](amazon_dev_ops_guru/apis/resource_collections.py)

<details>
<summary><code>def get_resource_collection(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetResourceCollectionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resource_collections.get_resource_collection(ResourceCollectionType.AWS_CLOUD_FORMATION)
    # TODO: Handle 'response' of type GetResourceCollectionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourceCollectionErrorBody
```

**Async**

```python
try:
    response = await async_client.resource_collections.get_resource_collection(
        ResourceCollectionType.AWS_CLOUD_FORMATION
    )
    # TODO: Handle 'response' of type GetResourceCollectionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourceCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_collection_type</code> | <code>[ResourceCollectionTypeOrStr](amazon_dev_ops_guru/models/enums/resource_collection_type.py)</code> | The type of Amazon Web Services resource collections to return. The one valid value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks. |
| <code>next_token</code> | <code>str \| None</code> | The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetResourceCollectionResponse](amazon_dev_ops_guru/models/get_resource_collection_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[GetResourceCollectionErrorBody](amazon_dev_ops_guru/errors/get_resource_collection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_resource_collection(*, body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resource_collections.update_resource_collection()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourceCollectionErrorBody
```

**Async**

```python
try:
    response = await async_client.resource_collections.update_resource_collection()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourceCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ResourceCollectionsRequest](amazon_dev_ops_guru/models/resource_collections_request.py) \| [ResourceCollectionsRequestDict](amazon_dev_ops_guru/models/resource_collections_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[UpdateResourceCollectionErrorBody](amazon_dev_ops_guru/errors/update_resource_collection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceIntegrations

> Source: [ServiceIntegrations](amazon_dev_ops_guru/apis/service_integrations.py)

<details>
<summary><code>def describe_service_integration(*, request_options: RequestOptionsOrDict | None = None) -> DescribeServiceIntegrationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_integrations.describe_service_integration()
    # TODO: Handle 'response' of type DescribeServiceIntegrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeServiceIntegrationErrorBody
```

**Async**

```python
try:
    response = await async_client.service_integrations.describe_service_integration()
    # TODO: Handle 'response' of type DescribeServiceIntegrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeServiceIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeServiceIntegrationResponse](amazon_dev_ops_guru/models/describe_service_integration_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[DescribeServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/describe_service_integration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_dev_ops_guru/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_service_integration(*, body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_integrations.update_service_integration()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceIntegrationErrorBody
```

**Async**

```python
try:
    response = await async_client.service_integrations.update_service_integration()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateServiceIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceIntegrationsRequest](amazon_dev_ops_guru/models/service_integrations_request.py) \| [ServiceIntegrationsRequestDict](amazon_dev_ops_guru/models/service_integrations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_dev_ops_guru/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_dev_ops_guru/core/exceptions.py)&#91;[UpdateServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/update_service_integration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_dev_ops_guru/models/validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_dev_ops_guru/models/access_denied_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_dev_ops_guru/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_dev_ops_guru/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_dev_ops_guru/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_dev_ops_guru/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

