# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AwsXRayClient](aws_x_ray/client.py)

## Creategroup

> Source: [Creategroup](aws_x_ray/apis/creategroup.py)

<details>
<summary><code>def create_group(*, body: CreateGroupRequest | CreateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateGroupResult, CreateGroupErrorBody]</code></summary>

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
result = client.creategroup.with_raw_response.create_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
```

**Async**

```python
result = await async_client.creategroup.with_raw_response.create_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[CreateGroupResult](aws_x_ray/models/create_group_result.py), [CreateGroupErrorBody](aws_x_ray/errors/create_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateGroupResult](aws_x_ray/models/create_group_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateGroupErrorBody](aws_x_ray/errors/create_group_error.py)</code>

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
<summary><code>def create_sampling_rule(*, body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateSamplingRuleResult, CreateSamplingRuleErrorBody]</code></summary>

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
result = client.createsamplingrule.with_raw_response.create_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSamplingRuleErrorBody
```

**Async**

```python
result = await async_client.createsamplingrule.with_raw_response.create_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSamplingRuleErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[CreateSamplingRuleResult](aws_x_ray/models/create_sampling_rule_result.py), [CreateSamplingRuleErrorBody](aws_x_ray/errors/create_sampling_rule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateSamplingRuleResult](aws_x_ray/models/create_sampling_rule_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateSamplingRuleErrorBody](aws_x_ray/errors/create_sampling_rule_error.py)</code>

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
<summary><code>def delete_group(*, body: DeleteGroupRequest | DeleteGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteGroupErrorBody]</code></summary>

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
result = client.delete_group.with_raw_response.delete_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGroupErrorBody
```

**Async**

```python
result = await async_client.delete_group.with_raw_response.delete_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGroupErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [DeleteGroupErrorBody](aws_x_ray/errors/delete_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteGroupErrorBody](aws_x_ray/errors/delete_group_error.py)</code>

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
<summary><code>def delete_resource_policy(*, body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteResourcePolicyErrorBody]</code></summary>

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
result = client.deleteresourcepolicy.with_raw_response.delete_resource_policy()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
result = await async_client.deleteresourcepolicy.with_raw_response.delete_resource_policy()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourcePolicyErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [DeleteResourcePolicyErrorBody](aws_x_ray/errors/delete_resource_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteResourcePolicyErrorBody](aws_x_ray/errors/delete_resource_policy_error.py)</code>

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
<summary><code>def delete_sampling_rule(*, body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeleteSamplingRuleResult, DeleteSamplingRuleErrorBody]</code></summary>

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
result = client.deletesamplingrule.with_raw_response.delete_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeleteSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSamplingRuleErrorBody
```

**Async**

```python
result = await async_client.deletesamplingrule.with_raw_response.delete_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeleteSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSamplingRuleErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[DeleteSamplingRuleResult](aws_x_ray/models/delete_sampling_rule_result.py), [DeleteSamplingRuleErrorBody](aws_x_ray/errors/delete_sampling_rule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeleteSamplingRuleResult](aws_x_ray/models/delete_sampling_rule_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[DeleteSamplingRuleErrorBody](aws_x_ray/errors/delete_sampling_rule_error.py)</code>

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
<summary><code>def get_encryption_config(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetEncryptionConfigResult, GetEncryptionConfigErrorBody]</code></summary>

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
result = client.encryptionconfig_api.with_raw_response.get_encryption_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetEncryptionConfigResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEncryptionConfigErrorBody
```

**Async**

```python
result = await async_client.encryptionconfig_api.with_raw_response.get_encryption_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetEncryptionConfigResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEncryptionConfigErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetEncryptionConfigResult](aws_x_ray/models/get_encryption_config_result.py), [GetEncryptionConfigErrorBody](aws_x_ray/errors/get_encryption_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetEncryptionConfigResult](aws_x_ray/models/get_encryption_config_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetEncryptionConfigErrorBody](aws_x_ray/errors/get_encryption_config_error.py)</code>

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
<summary><code>def get_group(*, body: GetGroupRequest | GetGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetGroupResult, GetGroupErrorBody]</code></summary>

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
result = client.get_group.with_raw_response.get_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

**Async**

```python
result = await async_client.get_group.with_raw_response.get_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetGroupResult](aws_x_ray/models/get_group_result.py), [GetGroupErrorBody](aws_x_ray/errors/get_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetGroupResult](aws_x_ray/models/get_group_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetGroupErrorBody](aws_x_ray/errors/get_group_error.py)</code>

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
<summary><code>def get_sampling_rules(*, body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSamplingRulesResult, GetSamplingRulesErrorBody]</code></summary>

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
result = client.getsamplingrules.with_raw_response.get_sampling_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingRulesErrorBody
```

**Async**

```python
result = await async_client.getsamplingrules.with_raw_response.get_sampling_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingRulesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py), [GetSamplingRulesErrorBody](aws_x_ray/errors/get_sampling_rules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSamplingRulesErrorBody](aws_x_ray/errors/get_sampling_rules_error.py)</code>

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
<summary><code>def get_groups(*, body: GroupsRequest | GroupsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetGroupsResult, GetGroupsErrorBody]</code></summary>

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
result = client.groups.with_raw_response.get_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGroupsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupsErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.get_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGroupsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetGroupsResult](aws_x_ray/models/get_groups_result.py), [GetGroupsErrorBody](aws_x_ray/errors/get_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetGroupsResult](aws_x_ray/models/get_groups_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetGroupsErrorBody](aws_x_ray/errors/get_groups_error.py)</code>

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
<summary><code>def get_insight(*, body: InsightRequest | InsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetInsightResult, GetInsightErrorBody]</code></summary>

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
result = client.insight_api.with_raw_response.get_insight()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightErrorBody
```

**Async**

```python
result = await async_client.insight_api.with_raw_response.get_insight()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetInsightResult](aws_x_ray/models/get_insight_result.py), [GetInsightErrorBody](aws_x_ray/errors/get_insight_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetInsightResult](aws_x_ray/models/get_insight_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInsightErrorBody](aws_x_ray/errors/get_insight_error.py)</code>

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
<summary><code>def get_insight_events(*, body: InsightEventsRequest | InsightEventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetInsightEventsResult, GetInsightEventsErrorBody]</code></summary>

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
result = client.insightevents.with_raw_response.get_insight_events()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightEventsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightEventsErrorBody
```

**Async**

```python
result = await async_client.insightevents.with_raw_response.get_insight_events()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightEventsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightEventsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetInsightEventsResult](aws_x_ray/models/get_insight_events_result.py), [GetInsightEventsErrorBody](aws_x_ray/errors/get_insight_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetInsightEventsResult](aws_x_ray/models/get_insight_events_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInsightEventsErrorBody](aws_x_ray/errors/get_insight_events_error.py)</code>

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
<summary><code>def get_insight_impact_graph(*, body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetInsightImpactGraphResult, GetInsightImpactGraphErrorBody]</code></summary>

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
result = client.insightimpactgraph.with_raw_response.get_insight_impact_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightImpactGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightImpactGraphErrorBody
```

**Async**

```python
result = await async_client.insightimpactgraph.with_raw_response.get_insight_impact_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightImpactGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightImpactGraphErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetInsightImpactGraphResult](aws_x_ray/models/get_insight_impact_graph_result.py), [GetInsightImpactGraphErrorBody](aws_x_ray/errors/get_insight_impact_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetInsightImpactGraphResult](aws_x_ray/models/get_insight_impact_graph_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInsightImpactGraphErrorBody](aws_x_ray/errors/get_insight_impact_graph_error.py)</code>

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
<summary><code>def get_insight_summaries(*, body: InsightSummariesRequest | InsightSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetInsightSummariesResult, GetInsightSummariesErrorBody]</code></summary>

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
result = client.insightsummaries.with_raw_response.get_insight_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightSummariesErrorBody
```

**Async**

```python
result = await async_client.insightsummaries.with_raw_response.get_insight_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetInsightSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInsightSummariesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetInsightSummariesResult](aws_x_ray/models/get_insight_summaries_result.py), [GetInsightSummariesErrorBody](aws_x_ray/errors/get_insight_summaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetInsightSummariesResult](aws_x_ray/models/get_insight_summaries_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetInsightSummariesErrorBody](aws_x_ray/errors/get_insight_summaries_error.py)</code>

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
<summary><code>def list_tags_for_resource(*, body: ListTagsForResourceRequest | ListTagsForResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]</code></summary>

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
result = client.list_tags_for_resource.with_raw_response.list_tags_for_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTagsForResourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.list_tags_for_resource.with_raw_response.list_tags_for_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTagsForResourceResponse
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
| <code>body</code> | <code>[ListTagsForResourceRequest](aws_x_ray/models/list_tags_for_resource_request.py) \| [ListTagsForResourceRequestDict](aws_x_ray/models/list_tags_for_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[ListTagsForResourceResponse](aws_x_ray/models/list_tags_for_resource_response.py), [ListTagsForResourceErrorBody](aws_x_ray/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTagsForResourceResponse](aws_x_ray/models/list_tags_for_resource_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](aws_x_ray/errors/list_tags_for_resource_error.py)</code>

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
<summary><code>def list_resource_policies(*, body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListResourcePoliciesResult, ListResourcePoliciesErrorBody]</code></summary>

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
result = client.listresourcepolicies.with_raw_response.list_resource_policies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResourcePoliciesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourcePoliciesErrorBody
```

**Async**

```python
result = await async_client.listresourcepolicies.with_raw_response.list_resource_policies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResourcePoliciesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourcePoliciesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[ListResourcePoliciesResult](aws_x_ray/models/list_resource_policies_result.py), [ListResourcePoliciesErrorBody](aws_x_ray/errors/list_resource_policies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListResourcePoliciesResult](aws_x_ray/models/list_resource_policies_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListResourcePoliciesErrorBody](aws_x_ray/errors/list_resource_policies_error.py)</code>

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
<summary><code>def cancel_trace_retrieval(*, body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, CancelTraceRetrievalErrorBody]</code></summary>

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
result = client.operations.with_raw_response.cancel_trace_retrieval()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelTraceRetrievalErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.cancel_trace_retrieval()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelTraceRetrievalErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [CancelTraceRetrievalErrorBody](aws_x_ray/errors/cancel_trace_retrieval_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[CancelTraceRetrievalErrorBody](aws_x_ray/errors/cancel_trace_retrieval_error.py)</code>

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
<summary><code>def get_indexing_rules(*, body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetIndexingRulesResult, GetIndexingRulesErrorBody]</code></summary>

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
result = client.operations.with_raw_response.get_indexing_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetIndexingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIndexingRulesErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_indexing_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetIndexingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIndexingRulesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetIndexingRulesResult](aws_x_ray/models/get_indexing_rules_result.py), [GetIndexingRulesErrorBody](aws_x_ray/errors/get_indexing_rules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetIndexingRulesResult](aws_x_ray/models/get_indexing_rules_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetIndexingRulesErrorBody](aws_x_ray/errors/get_indexing_rules_error.py)</code>

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
<summary><code>def get_retrieved_traces_graph(*, body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetRetrievedTracesGraphResult, GetRetrievedTracesGraphErrorBody]</code></summary>

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
result = client.operations.with_raw_response.get_retrieved_traces_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetRetrievedTracesGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRetrievedTracesGraphErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_retrieved_traces_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetRetrievedTracesGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRetrievedTracesGraphErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetRetrievedTracesGraphResult](aws_x_ray/models/get_retrieved_traces_graph_result.py), [GetRetrievedTracesGraphErrorBody](aws_x_ray/errors/get_retrieved_traces_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetRetrievedTracesGraphResult](aws_x_ray/models/get_retrieved_traces_graph_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetRetrievedTracesGraphErrorBody](aws_x_ray/errors/get_retrieved_traces_graph_error.py)</code>

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
<summary><code>def get_trace_segment_destination(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTraceSegmentDestinationResult, GetTraceSegmentDestinationErrorBody]</code></summary>

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
result = client.operations.with_raw_response.get_trace_segment_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSegmentDestinationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSegmentDestinationErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_trace_segment_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSegmentDestinationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSegmentDestinationErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetTraceSegmentDestinationResult](aws_x_ray/models/get_trace_segment_destination_result.py), [GetTraceSegmentDestinationErrorBody](aws_x_ray/errors/get_trace_segment_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTraceSegmentDestinationResult](aws_x_ray/models/get_trace_segment_destination_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTraceSegmentDestinationErrorBody](aws_x_ray/errors/get_trace_segment_destination_error.py)</code>

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
<summary><code>def list_retrieved_traces(*, body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListRetrievedTracesResult, ListRetrievedTracesErrorBody]</code></summary>

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
result = client.operations.with_raw_response.list_retrieved_traces()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRetrievedTracesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRetrievedTracesErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.list_retrieved_traces()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRetrievedTracesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRetrievedTracesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[ListRetrievedTracesResult](aws_x_ray/models/list_retrieved_traces_result.py), [ListRetrievedTracesErrorBody](aws_x_ray/errors/list_retrieved_traces_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListRetrievedTracesResult](aws_x_ray/models/list_retrieved_traces_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListRetrievedTracesErrorBody](aws_x_ray/errors/list_retrieved_traces_error.py)</code>

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
<summary><code>def start_trace_retrieval(*, body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartTraceRetrievalResult, StartTraceRetrievalErrorBody]</code></summary>

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
result = client.operations.with_raw_response.start_trace_retrieval()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartTraceRetrievalResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartTraceRetrievalErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_trace_retrieval()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartTraceRetrievalResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartTraceRetrievalErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[StartTraceRetrievalResult](aws_x_ray/models/start_trace_retrieval_result.py), [StartTraceRetrievalErrorBody](aws_x_ray/errors/start_trace_retrieval_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartTraceRetrievalResult](aws_x_ray/models/start_trace_retrieval_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartTraceRetrievalErrorBody](aws_x_ray/errors/start_trace_retrieval_error.py)</code>

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
<summary><code>def update_indexing_rule(*, body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateIndexingRuleResult, UpdateIndexingRuleErrorBody]</code></summary>

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
result = client.operations.with_raw_response.update_indexing_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateIndexingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateIndexingRuleErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.update_indexing_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateIndexingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateIndexingRuleErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[UpdateIndexingRuleResult](aws_x_ray/models/update_indexing_rule_result.py), [UpdateIndexingRuleErrorBody](aws_x_ray/errors/update_indexing_rule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateIndexingRuleResult](aws_x_ray/models/update_indexing_rule_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateIndexingRuleErrorBody](aws_x_ray/errors/update_indexing_rule_error.py)</code>

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
<summary><code>def update_trace_segment_destination(*, body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateTraceSegmentDestinationResult, UpdateTraceSegmentDestinationErrorBody]</code></summary>

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
result = client.operations.with_raw_response.update_trace_segment_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateTraceSegmentDestinationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTraceSegmentDestinationErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.update_trace_segment_destination()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateTraceSegmentDestinationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTraceSegmentDestinationErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[UpdateTraceSegmentDestinationResult](aws_x_ray/models/update_trace_segment_destination_result.py), [UpdateTraceSegmentDestinationErrorBody](aws_x_ray/errors/update_trace_segment_destination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateTraceSegmentDestinationResult](aws_x_ray/models/update_trace_segment_destination_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateTraceSegmentDestinationErrorBody](aws_x_ray/errors/update_trace_segment_destination_error.py)</code>

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
<summary><code>def put_encryption_config(*, body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PutEncryptionConfigResult, PutEncryptionConfigErrorBody]</code></summary>

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
result = client.putencryptionconfig.with_raw_response.put_encryption_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutEncryptionConfigResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutEncryptionConfigErrorBody
```

**Async**

```python
result = await async_client.putencryptionconfig.with_raw_response.put_encryption_config()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutEncryptionConfigResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutEncryptionConfigErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[PutEncryptionConfigResult](aws_x_ray/models/put_encryption_config_result.py), [PutEncryptionConfigErrorBody](aws_x_ray/errors/put_encryption_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PutEncryptionConfigResult](aws_x_ray/models/put_encryption_config_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[PutEncryptionConfigErrorBody](aws_x_ray/errors/put_encryption_config_error.py)</code>

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
<summary><code>def put_resource_policy(*, body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PutResourcePolicyResult, PutResourcePolicyErrorBody]</code></summary>

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
result = client.putresourcepolicy.with_raw_response.put_resource_policy()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutResourcePolicyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutResourcePolicyErrorBody
```

**Async**

```python
result = await async_client.putresourcepolicy.with_raw_response.put_resource_policy()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutResourcePolicyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutResourcePolicyErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[PutResourcePolicyResult](aws_x_ray/models/put_resource_policy_result.py), [PutResourcePolicyErrorBody](aws_x_ray/errors/put_resource_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PutResourcePolicyResult](aws_x_ray/models/put_resource_policy_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[PutResourcePolicyErrorBody](aws_x_ray/errors/put_resource_policy_error.py)</code>

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
<summary><code>def get_sampling_rules2(*, body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSamplingRulesResult, GetSamplingRules2ErrorBody]</code></summary>

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
result = client.sampling.with_raw_response.get_sampling_rules2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingRules2ErrorBody
```

**Async**

```python
result = await async_client.sampling.with_raw_response.get_sampling_rules2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingRulesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingRules2ErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py), [GetSamplingRules2ErrorBody](aws_x_ray/errors/get_sampling_rules2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSamplingRulesResult](aws_x_ray/models/get_sampling_rules_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSamplingRules2ErrorBody](aws_x_ray/errors/get_sampling_rules2_error.py)</code>

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
<summary><code>def get_sampling_statistic_summaries(*, body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSamplingStatisticSummariesResult, GetSamplingStatisticSummariesErrorBody]</code></summary>

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
result = client.samplingstatisticsummaries.with_raw_response.get_sampling_statistic_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingStatisticSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingStatisticSummariesErrorBody
```

**Async**

```python
result = await async_client.samplingstatisticsummaries.with_raw_response.get_sampling_statistic_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingStatisticSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingStatisticSummariesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetSamplingStatisticSummariesResult](aws_x_ray/models/get_sampling_statistic_summaries_result.py), [GetSamplingStatisticSummariesErrorBody](aws_x_ray/errors/get_sampling_statistic_summaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSamplingStatisticSummariesResult](aws_x_ray/models/get_sampling_statistic_summaries_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSamplingStatisticSummariesErrorBody](aws_x_ray/errors/get_sampling_statistic_summaries_error.py)</code>

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
<summary><code>def get_sampling_targets(*, body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSamplingTargetsResult, GetSamplingTargetsErrorBody]</code></summary>

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
result = client.samplingtargets.with_raw_response.get_sampling_targets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingTargetsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingTargetsErrorBody
```

**Async**

```python
result = await async_client.samplingtargets.with_raw_response.get_sampling_targets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSamplingTargetsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSamplingTargetsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetSamplingTargetsResult](aws_x_ray/models/get_sampling_targets_result.py), [GetSamplingTargetsErrorBody](aws_x_ray/errors/get_sampling_targets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSamplingTargetsResult](aws_x_ray/models/get_sampling_targets_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSamplingTargetsErrorBody](aws_x_ray/errors/get_sampling_targets_error.py)</code>

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
<summary><code>def get_service_graph(*, body: ServiceGraphRequest | ServiceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetServiceGraphResult, GetServiceGraphErrorBody]</code></summary>

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
result = client.service_graph.with_raw_response.get_service_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetServiceGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceGraphErrorBody
```

**Async**

```python
result = await async_client.service_graph.with_raw_response.get_service_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetServiceGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServiceGraphErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetServiceGraphResult](aws_x_ray/models/get_service_graph_result.py), [GetServiceGraphErrorBody](aws_x_ray/errors/get_service_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetServiceGraphResult](aws_x_ray/models/get_service_graph_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetServiceGraphErrorBody](aws_x_ray/errors/get_service_graph_error.py)</code>

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
<summary><code>def tag_resource(*, body: TagResourceRequest | TagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TagResourceErrorBody]</code></summary>

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
result = client.tag_resource.with_raw_response.tag_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.tag_resource.with_raw_response.tag_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>body</code> | <code>[TagResourceRequest](aws_x_ray/models/tag_resource_request.py) \| [TagResourceRequestDict](aws_x_ray/models/tag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [TagResourceErrorBody](aws_x_ray/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[TagResourceErrorBody](aws_x_ray/errors/tag_resource_error.py)</code>

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
<summary><code>def put_telemetry_records(*, body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, PutTelemetryRecordsErrorBody]</code></summary>

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
result = client.telemetryrecords.with_raw_response.put_telemetry_records()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutTelemetryRecordsErrorBody
```

**Async**

```python
result = await async_client.telemetryrecords.with_raw_response.put_telemetry_records()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutTelemetryRecordsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [PutTelemetryRecordsErrorBody](aws_x_ray/errors/put_telemetry_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[PutTelemetryRecordsErrorBody](aws_x_ray/errors/put_telemetry_records_error.py)</code>

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
<summary><code>def get_time_series_service_statistics(*, body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTimeSeriesServiceStatisticsResult, GetTimeSeriesServiceStatisticsErrorBody]</code></summary>

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
result = client.timeseriesservicestatistics_api.with_raw_response.get_time_series_service_statistics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTimeSeriesServiceStatisticsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTimeSeriesServiceStatisticsErrorBody
```

**Async**

```python
result = await async_client.timeseriesservicestatistics_api.with_raw_response.get_time_series_service_statistics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTimeSeriesServiceStatisticsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTimeSeriesServiceStatisticsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetTimeSeriesServiceStatisticsResult](aws_x_ray/models/get_time_series_service_statistics_result.py), [GetTimeSeriesServiceStatisticsErrorBody](aws_x_ray/errors/get_time_series_service_statistics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTimeSeriesServiceStatisticsResult](aws_x_ray/models/get_time_series_service_statistics_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTimeSeriesServiceStatisticsErrorBody](aws_x_ray/errors/get_time_series_service_statistics_error.py)</code>

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
<summary><code>def get_trace_graph(*, body: TraceGraphRequest | TraceGraphRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTraceGraphResult, GetTraceGraphErrorBody]</code></summary>

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
result = client.tracegraph.with_raw_response.get_trace_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceGraphErrorBody
```

**Async**

```python
result = await async_client.tracegraph.with_raw_response.get_trace_graph()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceGraphResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceGraphErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetTraceGraphResult](aws_x_ray/models/get_trace_graph_result.py), [GetTraceGraphErrorBody](aws_x_ray/errors/get_trace_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTraceGraphResult](aws_x_ray/models/get_trace_graph_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTraceGraphErrorBody](aws_x_ray/errors/get_trace_graph_error.py)</code>

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
<summary><code>def batch_get_traces(*, body: TracesRequest | TracesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchGetTracesResult, BatchGetTracesErrorBody]</code></summary>

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
result = client.traces.with_raw_response.batch_get_traces()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchGetTracesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetTracesErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.batch_get_traces()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchGetTracesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetTracesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[BatchGetTracesResult](aws_x_ray/models/batch_get_traces_result.py), [BatchGetTracesErrorBody](aws_x_ray/errors/batch_get_traces_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchGetTracesResult](aws_x_ray/models/batch_get_traces_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[BatchGetTracesErrorBody](aws_x_ray/errors/batch_get_traces_error.py)</code>

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
<summary><code>def get_trace_summaries(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTraceSummariesResult, GetTraceSummariesErrorBody]</code></summary>

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
result = client.traces.with_raw_response.get_trace_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSummariesErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_summaries()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSummariesErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py), [GetTraceSummariesErrorBody](aws_x_ray/errors/get_trace_summaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTraceSummariesErrorBody](aws_x_ray/errors/get_trace_summaries_error.py)</code>

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
<summary><code>def put_trace_segments(*, body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PutTraceSegmentsResult, PutTraceSegmentsErrorBody]</code></summary>

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
result = client.tracesegments.with_raw_response.put_trace_segments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutTraceSegmentsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutTraceSegmentsErrorBody
```

**Async**

```python
result = await async_client.tracesegments.with_raw_response.put_trace_segments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutTraceSegmentsResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutTraceSegmentsErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[PutTraceSegmentsResult](aws_x_ray/models/put_trace_segments_result.py), [PutTraceSegmentsErrorBody](aws_x_ray/errors/put_trace_segments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PutTraceSegmentsResult](aws_x_ray/models/put_trace_segments_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[PutTraceSegmentsErrorBody](aws_x_ray/errors/put_trace_segments_error.py)</code>

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
<summary><code>def get_trace_summaries2(*, body: TraceSummariesRequest | TraceSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTraceSummariesResult, GetTraceSummaries2ErrorBody]</code></summary>

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
result = client.tracesummaries.with_raw_response.get_trace_summaries2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSummaries2ErrorBody
```

**Async**

```python
result = await async_client.tracesummaries.with_raw_response.get_trace_summaries2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTraceSummariesResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceSummaries2ErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py), [GetTraceSummaries2ErrorBody](aws_x_ray/errors/get_trace_summaries2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTraceSummariesResult](aws_x_ray/models/get_trace_summaries_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTraceSummaries2ErrorBody](aws_x_ray/errors/get_trace_summaries2_error.py)</code>

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
<summary><code>def untag_resource(*, body: UntagResourceRequest | UntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UntagResourceErrorBody]</code></summary>

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
result = client.untag_resource.with_raw_response.untag_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

**Async**

```python
result = await async_client.untag_resource.with_raw_response.untag_resource()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>body</code> | <code>[UntagResourceRequest](aws_x_ray/models/untag_resource_request.py) \| [UntagResourceRequestDict](aws_x_ray/models/untag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_x_ray/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;Any, [UntagResourceErrorBody](aws_x_ray/errors/untag_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[UntagResourceErrorBody](aws_x_ray/errors/untag_resource_error.py)</code>

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
<summary><code>def update_group(*, body: UpdateGroupRequest | UpdateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateGroupResult, UpdateGroupErrorBody]</code></summary>

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
result = client.update_group.with_raw_response.update_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
```

**Async**

```python
result = await async_client.update_group.with_raw_response.update_group()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGroupResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[UpdateGroupResult](aws_x_ray/models/update_group_result.py), [UpdateGroupErrorBody](aws_x_ray/errors/update_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateGroupResult](aws_x_ray/models/update_group_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateGroupErrorBody](aws_x_ray/errors/update_group_error.py)</code>

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
<summary><code>def update_sampling_rule(*, body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateSamplingRuleResult, UpdateSamplingRuleErrorBody]</code></summary>

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
result = client.updatesamplingrule.with_raw_response.update_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSamplingRuleErrorBody
```

**Async**

```python
result = await async_client.updatesamplingrule.with_raw_response.update_sampling_rule()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateSamplingRuleResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSamplingRuleErrorBody
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

**Returns**: <code>[ApiResult](aws_x_ray/core/results.py)&#91;[UpdateSamplingRuleResult](aws_x_ray/models/update_sampling_rule_result.py), [UpdateSamplingRuleErrorBody](aws_x_ray/errors/update_sampling_rule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateSamplingRuleResult](aws_x_ray/models/update_sampling_rule_result.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateSamplingRuleErrorBody](aws_x_ray/errors/update_sampling_rule_error.py)</code>

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

