# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonDevOpsGuruClient](amazon_dev_ops_guru/client.py)

## Accounts

> Source: [Accounts](amazon_dev_ops_guru/apis/accounts.py)

<details>
<summary><code>def describe_account_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeAccountHealthResponse, DescribeAccountHealthErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.describe_account_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAccountHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAccountHealthErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.describe_account_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAccountHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAccountHealthErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeAccountHealthResponse](amazon_dev_ops_guru/models/describe_account_health_response.py), [DescribeAccountHealthErrorBody](amazon_dev_ops_guru/errors/describe_account_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeAccountHealthResponse](amazon_dev_ops_guru/models/describe_account_health_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeAccountHealthErrorBody](amazon_dev_ops_guru/errors/describe_account_health_error.py)</code>

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
<summary><code>def describe_account_overview(*, body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeAccountOverviewResponse, DescribeAccountOverviewErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.describe_account_overview()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAccountOverviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAccountOverviewErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.describe_account_overview()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAccountOverviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAccountOverviewErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeAccountOverviewResponse](amazon_dev_ops_guru/models/describe_account_overview_response.py), [DescribeAccountOverviewErrorBody](amazon_dev_ops_guru/errors/describe_account_overview_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeAccountOverviewResponse](amazon_dev_ops_guru/models/describe_account_overview_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeAccountOverviewErrorBody](amazon_dev_ops_guru/errors/describe_account_overview_error.py)</code>

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
<summary><code>def describe_resource_collection_health(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeResourceCollectionHealthResponse, DescribeResourceCollectionHealthErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.describe_resource_collection_health(
    ResourceCollectionType.AWS_CLOUD_FORMATION
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeResourceCollectionHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeResourceCollectionHealthErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.describe_resource_collection_health(
    ResourceCollectionType.AWS_CLOUD_FORMATION
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeResourceCollectionHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeResourceCollectionHealthErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_resource_collection_health_response.py), [DescribeResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_resource_collection_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_resource_collection_health_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_resource_collection_health_error.py)</code>

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
<summary><code>def describe_anomaly(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeAnomalyResponse, DescribeAnomalyErrorBody]</code></summary>

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
result = client.anomalies.with_raw_response.describe_anomaly("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAnomalyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAnomalyErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.describe_anomaly("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeAnomalyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeAnomalyErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeAnomalyResponse](amazon_dev_ops_guru/models/describe_anomaly_response.py), [DescribeAnomalyErrorBody](amazon_dev_ops_guru/errors/describe_anomaly_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeAnomalyResponse](amazon_dev_ops_guru/models/describe_anomaly_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeAnomalyErrorBody](amazon_dev_ops_guru/errors/describe_anomaly_error.py)</code>

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
<summary><code>def list_anomalies_for_insight(insight_id: str, *, body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAnomaliesForInsightResponse, ListAnomaliesForInsightErrorBody]</code></summary>

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
result = client.anomalies.with_raw_response.list_anomalies_for_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAnomaliesForInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomaliesForInsightErrorBody
```

**Async**

```python
result = await async_client.anomalies.with_raw_response.list_anomalies_for_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAnomaliesForInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomaliesForInsightErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListAnomaliesForInsightResponse](amazon_dev_ops_guru/models/list_anomalies_for_insight_response.py), [ListAnomaliesForInsightErrorBody](amazon_dev_ops_guru/errors/list_anomalies_for_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAnomaliesForInsightResponse](amazon_dev_ops_guru/models/list_anomalies_for_insight_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListAnomaliesForInsightErrorBody](amazon_dev_ops_guru/errors/list_anomalies_for_insight_error.py)</code>

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
<summary><code>def add_notification_channel(*, body: ChannelsRequest | ChannelsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AddNotificationChannelResponse, AddNotificationChannelErrorBody]</code></summary>

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
result = client.channels.with_raw_response.add_notification_channel()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AddNotificationChannelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddNotificationChannelErrorBody
```

**Async**

```python
result = await async_client.channels.with_raw_response.add_notification_channel()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AddNotificationChannelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddNotificationChannelErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[AddNotificationChannelResponse](amazon_dev_ops_guru/models/add_notification_channel_response.py), [AddNotificationChannelErrorBody](amazon_dev_ops_guru/errors/add_notification_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AddNotificationChannelResponse](amazon_dev_ops_guru/models/add_notification_channel_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[AddNotificationChannelErrorBody](amazon_dev_ops_guru/errors/add_notification_channel_error.py)</code>

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
<summary><code>def list_notification_channels(*, body: ChannelsRequest1 | ChannelsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListNotificationChannelsResponse, ListNotificationChannelsErrorBody]</code></summary>

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
result = client.channels.with_raw_response.list_notification_channels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListNotificationChannelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNotificationChannelsErrorBody
```

**Async**

```python
result = await async_client.channels.with_raw_response.list_notification_channels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListNotificationChannelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNotificationChannelsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListNotificationChannelsResponse](amazon_dev_ops_guru/models/list_notification_channels_response.py), [ListNotificationChannelsErrorBody](amazon_dev_ops_guru/errors/list_notification_channels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListNotificationChannelsResponse](amazon_dev_ops_guru/models/list_notification_channels_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListNotificationChannelsErrorBody](amazon_dev_ops_guru/errors/list_notification_channels_error.py)</code>

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
<summary><code>def remove_notification_channel(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RemoveNotificationChannelErrorBody]</code></summary>

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
result = client.channels.with_raw_response.remove_notification_channel("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveNotificationChannelErrorBody
```

**Async**

```python
result = await async_client.channels.with_raw_response.remove_notification_channel("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveNotificationChannelErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [RemoveNotificationChannelErrorBody](amazon_dev_ops_guru/errors/remove_notification_channel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[RemoveNotificationChannelErrorBody](amazon_dev_ops_guru/errors/remove_notification_channel_error.py)</code>

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
<summary><code>def get_cost_estimation(*, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetCostEstimationResponse, GetCostEstimationErrorBody]</code></summary>

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
result = client.cost_estimation.with_raw_response.get_cost_estimation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetCostEstimationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCostEstimationErrorBody
```

**Async**

```python
result = await async_client.cost_estimation.with_raw_response.get_cost_estimation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetCostEstimationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCostEstimationErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[GetCostEstimationResponse](amazon_dev_ops_guru/models/get_cost_estimation_response.py), [GetCostEstimationErrorBody](amazon_dev_ops_guru/errors/get_cost_estimation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetCostEstimationResponse](amazon_dev_ops_guru/models/get_cost_estimation_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetCostEstimationErrorBody](amazon_dev_ops_guru/errors/get_cost_estimation_error.py)</code>

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
<summary><code>def start_cost_estimation(*, body: CostEstimationRequest | CostEstimationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, StartCostEstimationErrorBody]</code></summary>

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
result = client.cost_estimation.with_raw_response.start_cost_estimation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCostEstimationErrorBody
```

**Async**

```python
result = await async_client.cost_estimation.with_raw_response.start_cost_estimation()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCostEstimationErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [StartCostEstimationErrorBody](amazon_dev_ops_guru/errors/start_cost_estimation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[StartCostEstimationErrorBody](amazon_dev_ops_guru/errors/start_cost_estimation_error.py)</code>

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
<summary><code>def describe_event_sources_config(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeEventSourcesConfigResponse, DescribeEventSourcesConfigErrorBody]</code></summary>

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
result = client.event_sources.with_raw_response.describe_event_sources_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeEventSourcesConfigResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeEventSourcesConfigErrorBody
```

**Async**

```python
result = await async_client.event_sources.with_raw_response.describe_event_sources_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeEventSourcesConfigResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeEventSourcesConfigErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeEventSourcesConfigResponse](amazon_dev_ops_guru/models/describe_event_sources_config_response.py), [DescribeEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/describe_event_sources_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeEventSourcesConfigResponse](amazon_dev_ops_guru/models/describe_event_sources_config_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/describe_event_sources_config_error.py)</code>

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
<summary><code>def update_event_sources_config(*, body: DescribeEventSourcesConfigResponse | DescribeEventSourcesConfigResponseDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UpdateEventSourcesConfigErrorBody]</code></summary>

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
result = client.event_sources.with_raw_response.update_event_sources_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEventSourcesConfigErrorBody
```

**Async**

```python
result = await async_client.event_sources.with_raw_response.update_event_sources_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEventSourcesConfigErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [UpdateEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/update_event_sources_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[UpdateEventSourcesConfigErrorBody](amazon_dev_ops_guru/errors/update_event_sources_config_error.py)</code>

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
<summary><code>def list_events(*, body: EventsRequest | EventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListEventsResponse, ListEventsErrorBody]</code></summary>

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
result = client.events.with_raw_response.list_events()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.list_events()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListEventsResponse](amazon_dev_ops_guru/models/list_events_response.py), [ListEventsErrorBody](amazon_dev_ops_guru/errors/list_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListEventsResponse](amazon_dev_ops_guru/models/list_events_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListEventsErrorBody](amazon_dev_ops_guru/errors/list_events_error.py)</code>

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
<summary><code>def describe_feedback(*, body: FeedbackRequest | FeedbackRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeFeedbackResponse, DescribeFeedbackErrorBody]</code></summary>

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
result = client.feedback_api.with_raw_response.describe_feedback()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeFeedbackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeFeedbackErrorBody
```

**Async**

```python
result = await async_client.feedback_api.with_raw_response.describe_feedback()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeFeedbackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeFeedbackErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeFeedbackResponse](amazon_dev_ops_guru/models/describe_feedback_response.py), [DescribeFeedbackErrorBody](amazon_dev_ops_guru/errors/describe_feedback_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeFeedbackResponse](amazon_dev_ops_guru/models/describe_feedback_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeFeedbackErrorBody](amazon_dev_ops_guru/errors/describe_feedback_error.py)</code>

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
<summary><code>def put_feedback(*, body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, PutFeedbackErrorBody]</code></summary>

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
result = client.feedback_api.with_raw_response.put_feedback()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutFeedbackErrorBody
```

**Async**

```python
result = await async_client.feedback_api.with_raw_response.put_feedback()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutFeedbackErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [PutFeedbackErrorBody](amazon_dev_ops_guru/errors/put_feedback_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[PutFeedbackErrorBody](amazon_dev_ops_guru/errors/put_feedback_error.py)</code>

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
<summary><code>def delete_insight(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteInsightErrorBody]</code></summary>

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
result = client.insights.with_raw_response.delete_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.delete_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteInsightErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [DeleteInsightErrorBody](amazon_dev_ops_guru/errors/delete_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteInsightErrorBody](amazon_dev_ops_guru/errors/delete_insight_error.py)</code>

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
<summary><code>def describe_insight(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeInsightResponse, DescribeInsightErrorBody]</code></summary>

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
result = client.insights.with_raw_response.describe_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeInsightErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.describe_insight("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeInsightResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeInsightErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeInsightResponse](amazon_dev_ops_guru/models/describe_insight_response.py), [DescribeInsightErrorBody](amazon_dev_ops_guru/errors/describe_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeInsightResponse](amazon_dev_ops_guru/models/describe_insight_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeInsightErrorBody](amazon_dev_ops_guru/errors/describe_insight_error.py)</code>

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
<summary><code>def list_insights(*, body: InsightsRequest | InsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListInsightsResponse, ListInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.list_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.list_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInsightsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListInsightsResponse](amazon_dev_ops_guru/models/list_insights_response.py), [ListInsightsErrorBody](amazon_dev_ops_guru/errors/list_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListInsightsResponse](amazon_dev_ops_guru/models/list_insights_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListInsightsErrorBody](amazon_dev_ops_guru/errors/list_insights_error.py)</code>

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
<summary><code>def search_insights(*, body: InsightsSearchRequest | InsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchInsightsResponse, SearchInsightsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.search_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchInsightsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.search_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchInsightsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[SearchInsightsResponse](amazon_dev_ops_guru/models/search_insights_response.py), [SearchInsightsErrorBody](amazon_dev_ops_guru/errors/search_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchInsightsResponse](amazon_dev_ops_guru/models/search_insights_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[SearchInsightsErrorBody](amazon_dev_ops_guru/errors/search_insights_error.py)</code>

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
<summary><code>def list_anomalous_log_groups(*, body: ListLogAnomaliesRequest | ListLogAnomaliesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAnomalousLogGroupsResponse, ListAnomalousLogGroupsErrorBody]</code></summary>

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
result = client.list_log_anomalies.with_raw_response.list_anomalous_log_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAnomalousLogGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomalousLogGroupsErrorBody
```

**Async**

```python
result = await async_client.list_log_anomalies.with_raw_response.list_anomalous_log_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAnomalousLogGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAnomalousLogGroupsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListAnomalousLogGroupsResponse](amazon_dev_ops_guru/models/list_anomalous_log_groups_response.py), [ListAnomalousLogGroupsErrorBody](amazon_dev_ops_guru/errors/list_anomalous_log_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAnomalousLogGroupsResponse](amazon_dev_ops_guru/models/list_anomalous_log_groups_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListAnomalousLogGroupsErrorBody](amazon_dev_ops_guru/errors/list_anomalous_log_groups_error.py)</code>

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
<summary><code>def list_monitored_resources(*, body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListMonitoredResourcesResponse, ListMonitoredResourcesErrorBody]</code></summary>

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
result = client.monitored_resources.with_raw_response.list_monitored_resources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMonitoredResourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitoredResourcesErrorBody
```

**Async**

```python
result = await async_client.monitored_resources.with_raw_response.list_monitored_resources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMonitoredResourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitoredResourcesErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListMonitoredResourcesResponse](amazon_dev_ops_guru/models/list_monitored_resources_response.py), [ListMonitoredResourcesErrorBody](amazon_dev_ops_guru/errors/list_monitored_resources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListMonitoredResourcesResponse](amazon_dev_ops_guru/models/list_monitored_resources_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListMonitoredResourcesErrorBody](amazon_dev_ops_guru/errors/list_monitored_resources_error.py)</code>

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
<summary><code>def describe_organization_health(*, body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeOrganizationHealthResponse, DescribeOrganizationHealthErrorBody]</code></summary>

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
result = client.organization.with_raw_response.describe_organization_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationHealthErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.describe_organization_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationHealthErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeOrganizationHealthResponse](amazon_dev_ops_guru/models/describe_organization_health_response.py), [DescribeOrganizationHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeOrganizationHealthResponse](amazon_dev_ops_guru/models/describe_organization_health_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeOrganizationHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_health_error.py)</code>

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
<summary><code>def describe_organization_overview(*, body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeOrganizationOverviewResponse, DescribeOrganizationOverviewErrorBody]</code></summary>

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
result = client.organization.with_raw_response.describe_organization_overview()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationOverviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationOverviewErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.describe_organization_overview()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationOverviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationOverviewErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeOrganizationOverviewResponse](amazon_dev_ops_guru/models/describe_organization_overview_response.py), [DescribeOrganizationOverviewErrorBody](amazon_dev_ops_guru/errors/describe_organization_overview_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeOrganizationOverviewResponse](amazon_dev_ops_guru/models/describe_organization_overview_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeOrganizationOverviewErrorBody](amazon_dev_ops_guru/errors/describe_organization_overview_error.py)</code>

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
<summary><code>def describe_organization_resource_collection_health(*, body: OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeOrganizationResourceCollectionHealthResponse, DescribeOrganizationResourceCollectionHealthErrorBody]</code></summary>

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
result = client.organization.with_raw_response.describe_organization_resource_collection_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationResourceCollectionHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationResourceCollectionHealthErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.describe_organization_resource_collection_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeOrganizationResourceCollectionHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeOrganizationResourceCollectionHealthErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeOrganizationResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_organization_resource_collection_health_response.py), [DescribeOrganizationResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_resource_collection_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeOrganizationResourceCollectionHealthResponse](amazon_dev_ops_guru/models/describe_organization_resource_collection_health_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeOrganizationResourceCollectionHealthErrorBody](amazon_dev_ops_guru/errors/describe_organization_resource_collection_health_error.py)</code>

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
<summary><code>def list_organization_insights(*, body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOrganizationInsightsResponse, ListOrganizationInsightsErrorBody]</code></summary>

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
result = client.organization.with_raw_response.list_organization_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOrganizationInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrganizationInsightsErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.list_organization_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOrganizationInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOrganizationInsightsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListOrganizationInsightsResponse](amazon_dev_ops_guru/models/list_organization_insights_response.py), [ListOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/list_organization_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOrganizationInsightsResponse](amazon_dev_ops_guru/models/list_organization_insights_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/list_organization_insights_error.py)</code>

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
<summary><code>def search_organization_insights(*, body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchOrganizationInsightsResponse, SearchOrganizationInsightsErrorBody]</code></summary>

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
result = client.organization.with_raw_response.search_organization_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchOrganizationInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchOrganizationInsightsErrorBody
```

**Async**

```python
result = await async_client.organization.with_raw_response.search_organization_insights()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchOrganizationInsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchOrganizationInsightsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[SearchOrganizationInsightsResponse](amazon_dev_ops_guru/models/search_organization_insights_response.py), [SearchOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/search_organization_insights_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchOrganizationInsightsResponse](amazon_dev_ops_guru/models/search_organization_insights_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[SearchOrganizationInsightsErrorBody](amazon_dev_ops_guru/errors/search_organization_insights_error.py)</code>

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
<summary><code>def list_recommendations(*, body: RecommendationsRequest | RecommendationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListRecommendationsResponse, ListRecommendationsErrorBody]</code></summary>

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
result = client.recommendations.with_raw_response.list_recommendations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRecommendationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecommendationsErrorBody
```

**Async**

```python
result = await async_client.recommendations.with_raw_response.list_recommendations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRecommendationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecommendationsErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[ListRecommendationsResponse](amazon_dev_ops_guru/models/list_recommendations_response.py), [ListRecommendationsErrorBody](amazon_dev_ops_guru/errors/list_recommendations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListRecommendationsResponse](amazon_dev_ops_guru/models/list_recommendations_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListRecommendationsErrorBody](amazon_dev_ops_guru/errors/list_recommendations_error.py)</code>

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
<summary><code>def get_resource_collection(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetResourceCollectionResponse, GetResourceCollectionErrorBody]</code></summary>

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
result = client.resource_collections.with_raw_response.get_resource_collection(
    ResourceCollectionType.AWS_CLOUD_FORMATION
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetResourceCollectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourceCollectionErrorBody
```

**Async**

```python
result = await async_client.resource_collections.with_raw_response.get_resource_collection(
    ResourceCollectionType.AWS_CLOUD_FORMATION
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetResourceCollectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourceCollectionErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[GetResourceCollectionResponse](amazon_dev_ops_guru/models/get_resource_collection_response.py), [GetResourceCollectionErrorBody](amazon_dev_ops_guru/errors/get_resource_collection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetResourceCollectionResponse](amazon_dev_ops_guru/models/get_resource_collection_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetResourceCollectionErrorBody](amazon_dev_ops_guru/errors/get_resource_collection_error.py)</code>

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
<summary><code>def update_resource_collection(*, body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UpdateResourceCollectionErrorBody]</code></summary>

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
result = client.resource_collections.with_raw_response.update_resource_collection()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResourceCollectionErrorBody
```

**Async**

```python
result = await async_client.resource_collections.with_raw_response.update_resource_collection()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResourceCollectionErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [UpdateResourceCollectionErrorBody](amazon_dev_ops_guru/errors/update_resource_collection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[UpdateResourceCollectionErrorBody](amazon_dev_ops_guru/errors/update_resource_collection_error.py)</code>

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
<summary><code>def describe_service_integration(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DescribeServiceIntegrationResponse, DescribeServiceIntegrationErrorBody]</code></summary>

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
result = client.service_integrations.with_raw_response.describe_service_integration()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeServiceIntegrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeServiceIntegrationErrorBody
```

**Async**

```python
result = await async_client.service_integrations.with_raw_response.describe_service_integration()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DescribeServiceIntegrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeServiceIntegrationErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;[DescribeServiceIntegrationResponse](amazon_dev_ops_guru/models/describe_service_integration_response.py), [DescribeServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/describe_service_integration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DescribeServiceIntegrationResponse](amazon_dev_ops_guru/models/describe_service_integration_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/describe_service_integration_error.py)</code>

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
<summary><code>def update_service_integration(*, body: ServiceIntegrationsRequest | ServiceIntegrationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UpdateServiceIntegrationErrorBody]</code></summary>

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
result = client.service_integrations.with_raw_response.update_service_integration()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceIntegrationErrorBody
```

**Async**

```python
result = await async_client.service_integrations.with_raw_response.update_service_integration()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateServiceIntegrationErrorBody
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

**Returns**: <code>[ApiResult](amazon_dev_ops_guru/core/results.py)&#91;Any, [UpdateServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/update_service_integration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[UpdateServiceIntegrationErrorBody](amazon_dev_ops_guru/errors/update_service_integration_error.py)</code>

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

