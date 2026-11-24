# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AwsXRayClient](aws_x_ray/client.py)

## Creategroup

> Source: [Creategroup](aws_x_ray/apis/creategroup.py)

<details>
<summary><code>def create_group(*, body: CreateGroupRequest | CreateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateGroupResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a group resource with a name and a filter expression.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.creategroup.create_group()
    # TODO: Handle 'response' of type CreateGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.creategroup.create_group()
    # TODO: Handle 'response' of type CreateGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGroupRequest](aws_x_ray/models/create_group_request.py) \| [CreateGroupRequestDict](aws_x_ray/models/create_group_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateGroupResult](aws_x_ray/models/create_group_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[CreateGroupErrorBody](aws_x_ray/errors/create_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Createsamplingrule

> Source: [Createsamplingrule](aws_x_ray/apis/createsamplingrule.py)

<details>
<summary><code>def create_sampling_rule(*, body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateSamplingRuleResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.createsamplingrule.create_sampling_rule()
    # TODO: Handle 'response' of type CreateSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSamplingRuleErrorBody
```

**Async**

```python
try:
    response = await async_client.createsamplingrule.create_sampling_rule()
    # TODO: Handle 'response' of type CreateSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSamplingRuleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSamplingRuleRequest](aws_x_ray/models/create_sampling_rule_request.py) \| [CreateSamplingRuleRequestDict](aws_x_ray/models/create_sampling_rule_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSamplingRuleResult](aws_x_ray/models/create_sampling_rule_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[CreateSamplingRuleErrorBody](aws_x_ray/errors/create_sampling_rule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DeleteGroup

> Source: [DeleteGroup](aws_x_ray/apis/delete_group.py)

<details>
<summary><code>def delete_group(*, body: DeleteGroupRequest | DeleteGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a group resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.delete_group.delete_group()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.delete_group.delete_group()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteGroupRequest](aws_x_ray/models/delete_group_request.py) \| [DeleteGroupRequestDict](aws_x_ray/models/delete_group_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[DeleteGroupErrorBody](aws_x_ray/errors/delete_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Deleteresourcepolicy

> Source: [Deleteresourcepolicy](aws_x_ray/apis/deleteresourcepolicy.py)

<details>
<summary><code>def delete_resource_policy(*, body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy from the target Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.deleteresourcepolicy.delete_resource_policy()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.deleteresourcepolicy.delete_resource_policy()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteResourcePolicyRequest](aws_x_ray/models/delete_resource_policy_request.py) \| [DeleteResourcePolicyRequestDict](aws_x_ray/models/delete_resource_policy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[DeleteResourcePolicyErrorBody](aws_x_ray/errors/delete_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidPolicyRevisionIdException](aws_x_ray/models/invalid_policy_revision_id_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Deletesamplingrule

> Source: [Deletesamplingrule](aws_x_ray/apis/deletesamplingrule.py)

<details>
<summary><code>def delete_sampling_rule(*, body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteSamplingRuleResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.deletesamplingrule.delete_sampling_rule()
    # TODO: Handle 'response' of type DeleteSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSamplingRuleErrorBody
```

**Async**

```python
try:
    response = await async_client.deletesamplingrule.delete_sampling_rule()
    # TODO: Handle 'response' of type DeleteSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSamplingRuleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteSamplingRuleRequest](aws_x_ray/models/delete_sampling_rule_request.py) \| [DeleteSamplingRuleRequestDict](aws_x_ray/models/delete_sampling_rule_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSamplingRuleResult](aws_x_ray/models/delete_sampling_rule_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[DeleteSamplingRuleErrorBody](aws_x_ray/errors/delete_sampling_rule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EncryptionconfigApi

> Source: [EncryptionconfigApi](aws_x_ray/apis/encryptionconfig_api.py)

<details>
<summary><code>def get_encryption_config(*, request_options: RequestOptionsOrDict | None = None) -> GetEncryptionConfigResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current encryption configuration for X-Ray data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.encryptionconfig_api.get_encryption_config()
    # TODO: Handle 'response' of type GetEncryptionConfigResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEncryptionConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.encryptionconfig_api.get_encryption_config()
    # TODO: Handle 'response' of type GetEncryptionConfigResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEncryptionConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetEncryptionConfigResult](aws_x_ray/models/get_encryption_config_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetEncryptionConfigErrorBody](aws_x_ray/errors/get_encryption_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GetGroup

> Source: [GetGroup](aws_x_ray/apis/get_group.py)

<details>
<summary><code>def get_group(*, body: GetGroupRequest | GetGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetGroupResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves group resource details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.get_group.get_group()
    # TODO: Handle 'response' of type GetGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.get_group.get_group()
    # TODO: Handle 'response' of type GetGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetGroupRequest](aws_x_ray/models/get_group_request.py) \| [GetGroupRequestDict](aws_x_ray/models/get_group_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGroupResult](aws_x_ray/models/get_group_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetGroupErrorBody](aws_x_ray/errors/get_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Getsamplingrules

> Source: [Getsamplingrules](aws_x_ray/apis/getsamplingrules.py)

<details>
<summary><code>def get_sampling_rules(*, body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetSamplingRulesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.getsamplingrules.get_sampling_rules()
    # TODO: Handle 'response' of type GetSamplingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingRulesErrorBody
```

**Async**

```python
try:
    response = await async_client.getsamplingrules.get_sampling_rules()
    # TODO: Handle 'response' of type GetSamplingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingRulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetSamplingRulesRequest](aws_x_ray/models/get_sampling_rules_request.py) \| [GetSamplingRulesRequestDict](aws_x_ray/models/get_sampling_rules_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetSamplingRulesErrorBody](aws_x_ray/errors/get_sampling_rules_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](aws_x_ray/apis/groups.py)

<details>
<summary><code>def get_groups(*, body: GroupsRequest | GroupsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetGroupsResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all active group details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.groups.get_groups()
    # TODO: Handle 'response' of type GetGroupsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups.get_groups()
    # TODO: Handle 'response' of type GetGroupsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GroupsRequest](aws_x_ray/models/groups_request.py) \| [GroupsRequestDict](aws_x_ray/models/groups_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGroupsResult](aws_x_ray/models/get_groups_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetGroupsErrorBody](aws_x_ray/errors/get_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## InsightApi

> Source: [InsightApi](aws_x_ray/apis/insight_api.py)

<details>
<summary><code>def get_insight(*, body: InsightRequest | InsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInsightResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insight_api.get_insight()
    # TODO: Handle 'response' of type GetInsightResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightErrorBody
```

**Async**

```python
try:
    response = await async_client.insight_api.get_insight()
    # TODO: Handle 'response' of type GetInsightResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightRequest](aws_x_ray/models/insight_request.py) \| [InsightRequestDict](aws_x_ray/models/insight_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightResult](aws_x_ray/models/get_insight_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetInsightErrorBody](aws_x_ray/errors/get_insight_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insightevents

> Source: [Insightevents](aws_x_ray/apis/insightevents.py)

<details>
<summary><code>def get_insight_events(*, body: InsightEventsRequest | InsightEventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInsightEventsResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insightevents.get_insight_events()
    # TODO: Handle 'response' of type GetInsightEventsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.insightevents.get_insight_events()
    # TODO: Handle 'response' of type GetInsightEventsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightEventsRequest](aws_x_ray/models/insight_events_request.py) \| [InsightEventsRequestDict](aws_x_ray/models/insight_events_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightEventsResult](aws_x_ray/models/get_insight_events_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetInsightEventsErrorBody](aws_x_ray/errors/get_insight_events_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insightimpactgraph

> Source: [Insightimpactgraph](aws_x_ray/apis/insightimpactgraph.py)

<details>
<summary><code>def get_insight_impact_graph(*, body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInsightImpactGraphResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insightimpactgraph.get_insight_impact_graph()
    # TODO: Handle 'response' of type GetInsightImpactGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightImpactGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.insightimpactgraph.get_insight_impact_graph()
    # TODO: Handle 'response' of type GetInsightImpactGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightImpactGraphErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightImpactGraphRequest](aws_x_ray/models/insight_impact_graph_request.py) \| [InsightImpactGraphRequestDict](aws_x_ray/models/insight_impact_graph_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightImpactGraphResult](aws_x_ray/models/get_insight_impact_graph_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetInsightImpactGraphErrorBody](aws_x_ray/errors/get_insight_impact_graph_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insightsummaries

> Source: [Insightsummaries](aws_x_ray/apis/insightsummaries.py)

<details>
<summary><code>def get_insight_summaries(*, body: InsightSummariesRequest | InsightSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInsightSummariesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summaries of all insights in the specified group matching the provided filter values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insightsummaries.get_insight_summaries()
    # TODO: Handle 'response' of type GetInsightSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightSummariesErrorBody
```

**Async**

```python
try:
    response = await async_client.insightsummaries.get_insight_summaries()
    # TODO: Handle 'response' of type GetInsightSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInsightSummariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InsightSummariesRequest](aws_x_ray/models/insight_summaries_request.py) \| [InsightSummariesRequestDict](aws_x_ray/models/insight_summaries_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightSummariesResult](aws_x_ray/models/get_insight_summaries_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetInsightSummariesErrorBody](aws_x_ray/errors/get_insight_summaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ListTagsForResource

> Source: [ListTagsForResource](aws_x_ray/apis/list_tags_for_resource.py)

<details>
<summary><code>def list_tags_for_resource(*, body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTagsForResourceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.list_tags_for_resource.list_tags_for_resource()
    # TODO: Handle 'response' of type ListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.list_tags_for_resource.list_tags_for_resource()
    # TODO: Handle 'response' of type ListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListTagsForResourceRequest](aws_x_ray/models/list_tags_for_resource_request.py) \| [ListTagsForResourceRequestDict](aws_x_ray/models/list_tags_for_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTagsForResourceResponse](aws_x_ray/models/list_tags_for_resource_response.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](aws_x_ray/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Listresourcepolicies

> Source: [Listresourcepolicies](aws_x_ray/apis/listresourcepolicies.py)

<details>
<summary><code>def list_resource_policies(*, body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResourcePoliciesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of resource policies in the target Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.listresourcepolicies.list_resource_policies()
    # TODO: Handle 'response' of type ListResourcePoliciesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourcePoliciesErrorBody
```

**Async**

```python
try:
    response = await async_client.listresourcepolicies.list_resource_policies()
    # TODO: Handle 'response' of type ListResourcePoliciesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourcePoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListResourcePoliciesRequest](aws_x_ray/models/list_resource_policies_request.py) \| [ListResourcePoliciesRequestDict](aws_x_ray/models/list_resource_policies_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResourcePoliciesResult](aws_x_ray/models/list_resource_policies_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[ListResourcePoliciesErrorBody](aws_x_ray/errors/list_resource_policies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](aws_x_ray/apis/operations.py)

<details>
<summary><code>def cancel_trace_retrieval(*, body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.cancel_trace_retrieval()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelTraceRetrievalErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.cancel_trace_retrieval()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelTraceRetrievalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelTraceRetrievalRequest](aws_x_ray/models/cancel_trace_retrieval_request.py) \| [CancelTraceRetrievalRequestDict](aws_x_ray/models/cancel_trace_retrieval_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[CancelTraceRetrievalErrorBody](aws_x_ray/errors/cancel_trace_retrieval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_indexing_rules(*, body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetIndexingRulesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_indexing_rules()
    # TODO: Handle 'response' of type GetIndexingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIndexingRulesErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_indexing_rules()
    # TODO: Handle 'response' of type GetIndexingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIndexingRulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetIndexingRulesRequest](aws_x_ray/models/get_indexing_rules_request.py) \| [GetIndexingRulesRequestDict](aws_x_ray/models/get_indexing_rules_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIndexingRulesResult](aws_x_ray/models/get_indexing_rules_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetIndexingRulesErrorBody](aws_x_ray/errors/get_indexing_rules_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_retrieved_traces_graph(*, body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetRetrievedTracesGraphResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group generated by Transaction Search. This API does not initiate a retrieval job. You must first execute StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process incoming requests and any downstream services they call, which may include Amazon Web Services resources, external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch log is the destination, this API can support cross-account observability and service graph retrieval across linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see GetTraceGraph.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_retrieved_traces_graph()
    # TODO: Handle 'response' of type GetRetrievedTracesGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRetrievedTracesGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_retrieved_traces_graph()
    # TODO: Handle 'response' of type GetRetrievedTracesGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRetrievedTracesGraphErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetRetrievedTracesGraphRequest](aws_x_ray/models/get_retrieved_traces_graph_request.py) \| [GetRetrievedTracesGraphRequestDict](aws_x_ray/models/get_retrieved_traces_graph_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetRetrievedTracesGraphResult](aws_x_ray/models/get_retrieved_traces_graph_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetRetrievedTracesGraphErrorBody](aws_x_ray/errors/get_retrieved_traces_graph_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_segment_destination(*, request_options: RequestOptionsOrDict | None = None) -> GetTraceSegmentDestinationResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP) endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see Transaction Search and OpenTelemetry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_trace_segment_destination()
    # TODO: Handle 'response' of type GetTraceSegmentDestinationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSegmentDestinationErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_trace_segment_destination()
    # TODO: Handle 'response' of type GetTraceSegmentDestinationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSegmentDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSegmentDestinationResult](aws_x_ray/models/get_trace_segment_destination_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetTraceSegmentDestinationErrorBody](aws_x_ray/errors/get_trace_segment_destination_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_retrieved_traces(*, body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListRetrievedTracesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval has completed to access the full list of traces. For cross-account observability, this API can retrieve traces from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details, see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the Transaction Search generated log group, see BatchGetTraces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.list_retrieved_traces()
    # TODO: Handle 'response' of type ListRetrievedTracesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRetrievedTracesErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.list_retrieved_traces()
    # TODO: Handle 'response' of type ListRetrievedTracesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRetrievedTracesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListRetrievedTracesRequest](aws_x_ray/models/list_retrieved_traces_request.py) \| [ListRetrievedTracesRequestDict](aws_x_ray/models/list_retrieved_traces_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRetrievedTracesResult](aws_x_ray/models/list_retrieved_traces_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[ListRetrievedTracesErrorBody](aws_x_ray/errors/list_retrieved_traces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_trace_retrieval(*, body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartTraceRetrievalResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled. For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.start_trace_retrieval()
    # TODO: Handle 'response' of type StartTraceRetrievalResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTraceRetrievalErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.start_trace_retrieval()
    # TODO: Handle 'response' of type StartTraceRetrievalResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTraceRetrievalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartTraceRetrievalRequest](aws_x_ray/models/start_trace_retrieval_request.py) \| [StartTraceRetrievalRequestDict](aws_x_ray/models/start_trace_retrieval_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTraceRetrievalResult](aws_x_ray/models/start_trace_retrieval_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[StartTraceRetrievalErrorBody](aws_x_ray/errors/start_trace_retrieval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_indexing_rule(*, body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateIndexingRuleResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.update_indexing_rule()
    # TODO: Handle 'response' of type UpdateIndexingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateIndexingRuleErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.update_indexing_rule()
    # TODO: Handle 'response' of type UpdateIndexingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateIndexingRuleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateIndexingRuleRequest](aws_x_ray/models/update_indexing_rule_request.py) \| [UpdateIndexingRuleRequestDict](aws_x_ray/models/update_indexing_rule_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateIndexingRuleResult](aws_x_ray/models/update_indexing_rule_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[UpdateIndexingRuleErrorBody](aws_x_ray/errors/update_indexing_rule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_trace_segment_destination(*, body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateTraceSegmentDestinationResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the CloudWatchLogs destination. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.update_trace_segment_destination()
    # TODO: Handle 'response' of type UpdateTraceSegmentDestinationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTraceSegmentDestinationErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.update_trace_segment_destination()
    # TODO: Handle 'response' of type UpdateTraceSegmentDestinationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTraceSegmentDestinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateTraceSegmentDestinationRequest](aws_x_ray/models/update_trace_segment_destination_request.py) \| [UpdateTraceSegmentDestinationRequestDict](aws_x_ray/models/update_trace_segment_destination_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateTraceSegmentDestinationResult](aws_x_ray/models/update_trace_segment_destination_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[UpdateTraceSegmentDestinationErrorBody](aws_x_ray/errors/update_trace_segment_destination_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Putencryptionconfig

> Source: [Putencryptionconfig](aws_x_ray/apis/putencryptionconfig.py)

<details>
<summary><code>def put_encryption_config(*, body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutEncryptionConfigResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for X-Ray data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.putencryptionconfig.put_encryption_config()
    # TODO: Handle 'response' of type PutEncryptionConfigResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutEncryptionConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.putencryptionconfig.put_encryption_config()
    # TODO: Handle 'response' of type PutEncryptionConfigResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutEncryptionConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PutEncryptionConfigRequest](aws_x_ray/models/put_encryption_config_request.py) \| [PutEncryptionConfigRequestDict](aws_x_ray/models/put_encryption_config_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutEncryptionConfigResult](aws_x_ray/models/put_encryption_config_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[PutEncryptionConfigErrorBody](aws_x_ray/errors/put_encryption_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Putresourcepolicy

> Source: [Putresourcepolicy](aws_x_ray/apis/putresourcepolicy.py)

<details>
<summary><code>def put_resource_policy(*, body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutResourcePolicyResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.putresourcepolicy.put_resource_policy()
    # TODO: Handle 'response' of type PutResourcePolicyResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.putresourcepolicy.put_resource_policy()
    # TODO: Handle 'response' of type PutResourcePolicyResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PutResourcePolicyRequest](aws_x_ray/models/put_resource_policy_request.py) \| [PutResourcePolicyRequestDict](aws_x_ray/models/put_resource_policy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutResourcePolicyResult](aws_x_ray/models/put_resource_policy_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[PutResourcePolicyErrorBody](aws_x_ray/errors/put_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidPolicyRevisionIdException](aws_x_ray/models/invalid_policy_revision_id_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sampling

> Source: [Sampling](aws_x_ray/apis/sampling.py)

<details>
<summary><code>def get_sampling_rules2(*, body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetSamplingRulesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sampling.get_sampling_rules2()
    # TODO: Handle 'response' of type GetSamplingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingRules2ErrorBody
```

**Async**

```python
try:
    response = await async_client.sampling.get_sampling_rules2()
    # TODO: Handle 'response' of type GetSamplingRulesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingRules2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetSamplingRulesRequest](aws_x_ray/models/get_sampling_rules_request.py) \| [GetSamplingRulesRequestDict](aws_x_ray/models/get_sampling_rules_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetSamplingRules2ErrorBody](aws_x_ray/errors/get_sampling_rules2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingstatisticsummaries

> Source: [Samplingstatisticsummaries](aws_x_ray/apis/samplingstatisticsummaries.py)

<details>
<summary><code>def get_sampling_statistic_summaries(*, body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetSamplingStatisticSummariesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about recent sampling results for all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.samplingstatisticsummaries.get_sampling_statistic_summaries()
    # TODO: Handle 'response' of type GetSamplingStatisticSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingStatisticSummariesErrorBody
```

**Async**

```python
try:
    response = await async_client.samplingstatisticsummaries.get_sampling_statistic_summaries()
    # TODO: Handle 'response' of type GetSamplingStatisticSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingStatisticSummariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SamplingStatisticSummariesRequest](aws_x_ray/models/sampling_statistic_summaries_request.py) \| [SamplingStatisticSummariesRequestDict](aws_x_ray/models/sampling_statistic_summaries_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingStatisticSummariesResult](aws_x_ray/models/get_sampling_statistic_summaries_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetSamplingStatisticSummariesErrorBody](aws_x_ray/errors/get_sampling_statistic_summaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingtargets

> Source: [Samplingtargets](aws_x_ray/apis/samplingtargets.py)

<details>
<summary><code>def get_sampling_targets(*, body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetSamplingTargetsResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a sampling quota for rules that the service is using to sample requests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.samplingtargets.get_sampling_targets()
    # TODO: Handle 'response' of type GetSamplingTargetsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingTargetsErrorBody
```

**Async**

```python
try:
    response = await async_client.samplingtargets.get_sampling_targets()
    # TODO: Handle 'response' of type GetSamplingTargetsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSamplingTargetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SamplingTargetsRequest](aws_x_ray/models/sampling_targets_request.py) \| [SamplingTargetsRequestDict](aws_x_ray/models/sampling_targets_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingTargetsResult](aws_x_ray/models/get_sampling_targets_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetSamplingTargetsErrorBody](aws_x_ray/errors/get_sampling_targets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceGraph

> Source: [ServiceGraph](aws_x_ray/apis/service_graph.py)

<details>
<summary><code>def get_service_graph(*, body: ServiceGraphRequest | ServiceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetServiceGraphResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_graph.get_service_graph()
    # TODO: Handle 'response' of type GetServiceGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.service_graph.get_service_graph()
    # TODO: Handle 'response' of type GetServiceGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetServiceGraphErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceGraphRequest](aws_x_ray/models/service_graph_request.py) \| [ServiceGraphRequestDict](aws_x_ray/models/service_graph_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetServiceGraphResult](aws_x_ray/models/get_service_graph_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetServiceGraphErrorBody](aws_x_ray/errors/get_service_graph_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TagResource

> Source: [TagResource](aws_x_ray/apis/tag_resource.py)

<details>
<summary><code>def tag_resource(*, body: TagResourceRequest | TagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tag_resource.tag_resource()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.tag_resource.tag_resource()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TagResourceRequest](aws_x_ray/models/tag_resource_request.py) \| [TagResourceRequestDict](aws_x_ray/models/tag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[TagResourceErrorBody](aws_x_ray/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Telemetryrecords

> Source: [Telemetryrecords](aws_x_ray/apis/telemetryrecords.py)

<details>
<summary><code>def put_telemetry_records(*, body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.telemetryrecords.put_telemetry_records()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutTelemetryRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.telemetryrecords.put_telemetry_records()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutTelemetryRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TelemetryRecordsRequest](aws_x_ray/models/telemetry_records_request.py) \| [TelemetryRecordsRequestDict](aws_x_ray/models/telemetry_records_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[PutTelemetryRecordsErrorBody](aws_x_ray/errors/put_telemetry_records_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TimeseriesservicestatisticsApi

> Source: [TimeseriesservicestatisticsApi](aws_x_ray/apis/timeseriesservicestatistics_api.py)

<details>
<summary><code>def get_time_series_service_statistics(*, body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTimeSeriesServiceStatisticsResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an aggregation of service statistics defined by a specific time range.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.timeseriesservicestatistics_api.get_time_series_service_statistics()
    # TODO: Handle 'response' of type GetTimeSeriesServiceStatisticsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTimeSeriesServiceStatisticsErrorBody
```

**Async**

```python
try:
    response = await async_client.timeseriesservicestatistics_api.get_time_series_service_statistics()
    # TODO: Handle 'response' of type GetTimeSeriesServiceStatisticsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTimeSeriesServiceStatisticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TimeSeriesServiceStatisticsRequest](aws_x_ray/models/time_series_service_statistics_request.py) \| [TimeSeriesServiceStatisticsRequestDict](aws_x_ray/models/time_series_service_statistics_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTimeSeriesServiceStatisticsResult](aws_x_ray/models/get_time_series_service_statistics_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetTimeSeriesServiceStatisticsErrorBody](aws_x_ray/errors/get_time_series_service_statistics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tracegraph

> Source: [Tracegraph](aws_x_ray/apis/tracegraph.py)

<details>
<summary><code>def get_trace_graph(*, body: TraceGraphRequest | TraceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTraceGraphResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for one or more specific trace IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tracegraph.get_trace_graph()
    # TODO: Handle 'response' of type GetTraceGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.tracegraph.get_trace_graph()
    # TODO: Handle 'response' of type GetTraceGraphResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceGraphErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceGraphRequest](aws_x_ray/models/trace_graph_request.py) \| [TraceGraphRequestDict](aws_x_ray/models/trace_graph_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceGraphResult](aws_x_ray/models/get_trace_graph_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetTraceGraphErrorBody](aws_x_ray/errors/get_trace_graph_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](aws_x_ray/apis/traces.py)

<details>
<summary><code>def batch_get_traces(*, body: TracesRequest | TracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BatchGetTracesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.traces.batch_get_traces()
    # TODO: Handle 'response' of type BatchGetTracesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetTracesErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.batch_get_traces()
    # TODO: Handle 'response' of type BatchGetTracesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetTracesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TracesRequest](aws_x_ray/models/traces_request.py) \| [TracesRequestDict](aws_x_ray/models/traces_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchGetTracesResult](aws_x_ray/models/batch_get_traces_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[BatchGetTracesErrorBody](aws_x_ray/errors/batch_get_traces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_summaries(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTraceSummariesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.traces.get_trace_summaries()
    # TODO: Handle 'response' of type GetTraceSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSummariesErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_summaries()
    # TODO: Handle 'response' of type GetTraceSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSummariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceSummariesRequest](aws_x_ray/models/trace_summaries_request.py) \| [TraceSummariesRequestDict](aws_x_ray/models/trace_summaries_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetTraceSummariesErrorBody](aws_x_ray/errors/get_trace_summaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesegments

> Source: [Tracesegments](aws_x_ray/apis/tracesegments.py)

<details>
<summary><code>def put_trace_segments(*, body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutTraceSegmentsResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields name - The name of the service that handled the request. id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique identifier that connects all segments and subsegments originating from a single client request. start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, t

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tracesegments.put_trace_segments()
    # TODO: Handle 'response' of type PutTraceSegmentsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutTraceSegmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.tracesegments.put_trace_segments()
    # TODO: Handle 'response' of type PutTraceSegmentsResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutTraceSegmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceSegmentsRequest](aws_x_ray/models/trace_segments_request.py) \| [TraceSegmentsRequestDict](aws_x_ray/models/trace_segments_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutTraceSegmentsResult](aws_x_ray/models/put_trace_segments_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[PutTraceSegmentsErrorBody](aws_x_ray/errors/put_trace_segments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesummaries

> Source: [Tracesummaries](aws_x_ray/apis/tracesummaries.py)

<details>
<summary><code>def get_trace_summaries2(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GetTraceSummariesResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tracesummaries.get_trace_summaries2()
    # TODO: Handle 'response' of type GetTraceSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSummaries2ErrorBody
```

**Async**

```python
try:
    response = await async_client.tracesummaries.get_trace_summaries2()
    # TODO: Handle 'response' of type GetTraceSummariesResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceSummaries2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceSummariesRequest](aws_x_ray/models/trace_summaries_request.py) \| [TraceSummariesRequestDict](aws_x_ray/models/trace_summaries_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[GetTraceSummaries2ErrorBody](aws_x_ray/errors/get_trace_summaries2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UntagResource

> Source: [UntagResource](aws_x_ray/apis/untag_resource.py)

<details>
<summary><code>def untag_resource(*, body: UntagResourceRequest | UntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an aws: prefix).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.untag_resource.untag_resource()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.untag_resource.untag_resource()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UntagResourceRequest](aws_x_ray/models/untag_resource_request.py) \| [UntagResourceRequestDict](aws_x_ray/models/untag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[UntagResourceErrorBody](aws_x_ray/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](aws_x_ray/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateGroup

> Source: [UpdateGroup](aws_x_ray/apis/update_group.py)

<details>
<summary><code>def update_group(*, body: UpdateGroupRequest | UpdateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateGroupResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a group resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.update_group.update_group()
    # TODO: Handle 'response' of type UpdateGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.update_group.update_group()
    # TODO: Handle 'response' of type UpdateGroupResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateGroupRequest](aws_x_ray/models/update_group_request.py) \| [UpdateGroupRequestDict](aws_x_ray/models/update_group_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateGroupResult](aws_x_ray/models/update_group_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[UpdateGroupErrorBody](aws_x_ray/errors/update_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Updatesamplingrule

> Source: [Updatesamplingrule](aws_x_ray/apis/updatesamplingrule.py)

<details>
<summary><code>def update_sampling_rule(*, body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateSamplingRuleResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies a sampling rule's configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.updatesamplingrule.update_sampling_rule()
    # TODO: Handle 'response' of type UpdateSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSamplingRuleErrorBody
```

**Async**

```python
try:
    response = await async_client.updatesamplingrule.update_sampling_rule()
    # TODO: Handle 'response' of type UpdateSamplingRuleResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSamplingRuleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateSamplingRuleRequest](aws_x_ray/models/update_sampling_rule_request.py) \| [UpdateSamplingRuleRequestDict](aws_x_ray/models/update_sampling_rule_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSamplingRuleResult](aws_x_ray/models/update_sampling_rule_result.py)</code> -- Success

**OnError**: <code>[ApiError](aws_x_ray/core/exceptions.py)&#91;[UpdateSamplingRuleErrorBody](aws_x_ray/errors/update_sampling_rule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[InvalidRequestException](aws_x_ray/models/invalid_request_exception.py)</code> |
| 429 | <code>[ThrottledException](aws_x_ray/models/throttled_exception.py)</code> |
| anything unmapped | <code>[RawError](aws_x_ray/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

