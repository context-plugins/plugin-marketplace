# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudDataprocClient](google_cloud_dataproc/client.py)

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_create(projects_id: str, locations_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_create(
    "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_create(
    "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py) \| [AutoscalingPolicyDict](google_cloud_dataproc/models/autoscaling_policy.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_delete(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_get(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_get_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAutoscalingPoliciesResponse, DataprocProjectsLocationsAutoscalingPoliciesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAutoscalingPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAutoscalingPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token, returned by a previous call, to request the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py), [DataprocProjectsLocationsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_set_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_test_iam_permissions(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_update(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_autoscaling_policies_update(
    "some example string", "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_autoscaling_policies_update(
    "some example string", "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py) \| [AutoscalingPolicyDict](google_cloud_dataproc/models/autoscaling_policy.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_analyze(projects_id: str, locations_id: str, batches_id: str, body: AnalyzeBatchRequest | AnalyzeBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsBatchesAnalyzeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze a Batch for possible recommendations and insights.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_analyze(
    "some example string", "some example string", "some example string", AnalyzeBatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesAnalyzeErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_analyze(
    "some example string", "some example string", "some example string", AnalyzeBatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesAnalyzeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>body</code> | <code>[AnalyzeBatchRequest](google_cloud_dataproc/models/analyze_batch_request.py) \| [AnalyzeBatchRequestDict](google_cloud_dataproc/models/analyze_batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsBatchesAnalyzeErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_analyze_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesAnalyzeErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_analyze_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_create(projects_id: str, locations_id: str, body: Batch | BatchDict, *, batch_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsBatchesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch workload that executes asynchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_create(
    "some example string", "some example string", Batch()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_create(
    "some example string", "some example string", Batch()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Batch](google_cloud_dataproc/models/batch.py) \| [BatchDict](google_cloud_dataproc/models/batch.py)</code> | The request body. |
| <code>batch_id</code> | <code>str \| None</code> | Optional. The ID to use for the batch, which will become the final component of the batch's resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the service receives two CreateBatchRequests with the same request_id, the second request is ignored and the operation that corresponds to the first Batch created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsBatchesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_delete(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsBatchesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsBatchesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_get(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Batch, DataprocProjectsLocationsBatchesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the batch workload resource representation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Batch
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Batch
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Batch](google_cloud_dataproc/models/batch.py), [DataprocProjectsLocationsBatchesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Batch](google_cloud_dataproc/models/batch.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListBatchesResponse, DataprocProjectsLocationsBatchesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists batch workloads.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. A filter for the batches to return in the response.A filter is a logical expression constraining the values of various fields in each batch resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND/OR). Supported fields: * batch_id * batch_uuid * state * create_time * labels * runtime_info.cohort_info.cohort e.g. state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING that were created before 2023-01-01. state = RUNNING and labels.environment=production filters for batches in state in a RUNNING state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparisons.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Field(s) on which to sort the list of batches.Currently the only supported sort orders are unspecified (empty) and create_time desc to sort by most recently created batches first.See https://google.aip.dev/132#ordering for more details.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of batches to return in each response. The service may return fewer than this value. The default page size is 20; the maximum page size is 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous ListBatches call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListBatchesResponse](google_cloud_dataproc/models/list_batches_response.py), [DataprocProjectsLocationsBatchesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListBatchesResponse](google_cloud_dataproc/models/list_batches_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationResponse](google_cloud_dataproc/models/access_spark_application_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationResponse](google_cloud_dataproc/models/access_spark_application_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_environment_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationEnvironmentInfoResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_environment_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationEnvironmentInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_environment_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationEnvironmentInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_spark_application_environment_info_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_environment_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_spark_application_environment_info_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_environment_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_job(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationJobResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_job(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_job(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>job_id</code> | <code>str \| None</code> | Required. Job ID to fetch data for.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationJobResponse](google_cloud_dataproc/models/access_spark_application_job_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationJobResponse](google_cloud_dataproc/models/access_spark_application_job_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_native_build_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationNativeBuildInfoResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain build data for Native Job

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_native_build_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationNativeBuildInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_native_build_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationNativeBuildInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_spark_application_native_build_info_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_build_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_spark_application_native_build_info_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_build_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationNativeSqlQueryResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_native_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationNativeSqlQueryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_native_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationNativeSqlQueryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_native_sql_query_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_sql_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_native_sql_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_sql_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_sql_plan(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationSqlSparkPlanGraphResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_sql_plan(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationSqlSparkPlanGraphResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_sql_plan(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationSqlSparkPlanGraphResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_spark_application_sql_spark_plan_graph_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_plan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_spark_application_sql_spark_plan_graph_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_plan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationSqlQueryResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationSqlQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationSqlQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>details</code> | <code>bool \| None</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.<br>**Default**: <code>None</code> |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>plan_description</code> | <code>bool \| None</code> | Optional. Enables/ disables physical plan description on demand<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_sql_query_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_sql_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationStageAttemptResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_stage_attempt(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationStageAttemptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_stage_attempt(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationStageAttemptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_spark_application_stage_attempt_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_attempt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_spark_application_stage_attempt_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_attempt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSparkApplicationStageRddOperationGraphResponse, DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationStageRddOperationGraphResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSparkApplicationStageRddOperationGraphResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_spark_application_stage_rdd_operation_graph_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_spark_application_stage_rdd_operation_graph_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_compute_tuning_config(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, semantic_query_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ComputeTuningConfigResponse, DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns autotuning configuration for a specific query plan id and cohort id. Called by Spark during query planning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_compute_tuning_config(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComputeTuningConfigResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_compute_tuning_config(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ComputeTuningConfigResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>execution_id</code> | <code>str \| None</code> | Required. Spark execution ID for the query.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>semantic_query_id</code> | <code>str \| None</code> | Required. Spark semantic query ID.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ComputeTuningConfigResponse](google_cloud_dataproc/models/compute_tuning_config_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_compute_tuning_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ComputeTuningConfigResponse](google_cloud_dataproc/models/compute_tuning_config_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_compute_tuning_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search(projects_id: str, locations_id: str, batches_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>application_status</code> | <code>[ApplicationStatusOrStr](google_cloud_dataproc/models/enums/application_status.py) \| None</code> | Optional. Search only applications in the chosen state.<br>**Default**: <code>None</code> |
| <code>max_end_time</code> | <code>str \| None</code> | Optional. Latest end timestamp to list.<br>**Default**: <code>None</code> |
| <code>max_time</code> | <code>str \| None</code> | Optional. Latest start timestamp to list.<br>**Default**: <code>None</code> |
| <code>min_end_time</code> | <code>str \| None</code> | Optional. Earliest end timestamp to list.<br>**Default**: <code>None</code> |
| <code>min_time</code> | <code>str \| None</code> | Optional. Earliest start timestamp to list.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSparkApplications call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationsResponse](google_cloud_dataproc/models/search_spark_applications_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationsResponse](google_cloud_dataproc/models/search_spark_applications_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationExecutorStageSummaryResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationExecutorStageSummaryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationExecutorStageSummaryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_spark_application_executor_stage_summary_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_spark_application_executor_stage_summary_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationExecutorsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>executor_status</code> | <code>[ExecutorStatusOrStr](google_cloud_dataproc/models/enums/executor_status.py) \| None</code> | Optional. Filter to select whether active/ dead or all executors should be selected.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous AccessSparkApplicationExecutorsList call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_spark_application_executors_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_spark_application_executors_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationJobsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>job_status</code> | <code>[JobStatus2OrStr](google_cloud_dataproc/models/enums/job_status2.py) \| None</code> | Optional. List only jobs in the specific state.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationJobsResponse](google_cloud_dataproc/models/search_spark_application_jobs_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationJobsResponse](google_cloud_dataproc/models/search_spark_application_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationNativeSqlQueriesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationNativeSqlQueriesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationNativeSqlQueriesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSparkApplicationNativeSqlQueries call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_native_sql_queries_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_native_sql_queries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_native_sql_queries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_native_sql_queries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationSqlQueriesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationSqlQueriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationSqlQueriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>details</code> | <code>bool \| None</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>plan_description</code> | <code>bool \| None</code> | Optional. Enables/ disables physical plan description on demand<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_sql_queries_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_sql_queries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_sql_queries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_sql_queries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>sort_runtime</code> | <code>bool \| None</code> | Optional. Sort the tasks by runtime.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Optional. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Optional. Stage ID<br>**Default**: <code>None</code> |
| <code>task_status</code> | <code>[TaskStatusOrStr](google_cloud_dataproc/models/enums/task_status.py) \| None</code> | Optional. List only tasks in the state.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_spark_application_stage_attempt_tasks_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationStageAttemptsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stage_attempts(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStageAttemptsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stage_attempts(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStageAttemptsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID for which attempts are to be fetched<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_spark_application_stage_attempts_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_spark_application_stage_attempts_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSparkApplicationStagesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_search_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_status</code> | <code>[StageStatusOrStr](google_cloud_dataproc/models/enums/stage_status.py) \| None</code> | Optional. List only stages in the given state.<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSparkApplicationStagesResponse](google_cloud_dataproc/models/search_spark_application_stages_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSparkApplicationStagesResponse](google_cloud_dataproc/models/search_spark_application_stages_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSparkApplicationExecutorsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_spark_application_executors_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_executors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_spark_application_executors_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_executors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSparkApplicationJobsResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_spark_application_jobs_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_spark_application_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_spark_application_stage_attempt_tasks_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSparkApplicationStagesResponse, DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_summarize_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Batch) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_spark_application_stages_response.py), [DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_spark_application_stages_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_batches_spark_applications_write(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, body: WriteSparkApplicationContextRequest | WriteSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_batches_spark_applications_write(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    WriteSparkApplicationContextRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_batches_spark_applications_write(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    WriteSparkApplicationContextRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>batches_id</code> | <code>str</code> | Resource name segment (batchesId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>body</code> | <code>[WriteSparkApplicationContextRequest](google_cloud_dataproc/models/write_spark_application_context_request.py) \| [WriteSparkApplicationContextRequestDict](google_cloud_dataproc/models/write_spark_application_context_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_write_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_write_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsOperationsCancelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsOperationsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsOperationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOperationsResponse, DataprocProjectsLocationsOperationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsOperationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | The standard list filter.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The standard list page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The standard list page token.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py), [DataprocProjectsLocationsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_session_templates_create(projects_id: str, locations_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session template synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_session_templates_create(
    "some example string", "some example string", SessionTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_session_templates_create(
    "some example string", "some example string", SessionTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py) \| [SessionTemplateDict](google_cloud_dataproc/models/session_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SessionTemplate](google_cloud_dataproc/models/session_template.py), [DataprocProjectsLocationsSessionTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_session_templates_delete(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsSessionTemplatesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a session template.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_session_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_session_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>session_templates_id</code> | <code>str</code> | Resource name segment (sessionTemplatesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsSessionTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_session_templates_get(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a session template.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_session_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_session_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>session_templates_id</code> | <code>str</code> | Resource name segment (sessionTemplatesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SessionTemplate](google_cloud_dataproc/models/session_template.py), [DataprocProjectsLocationsSessionTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_session_templates_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListSessionTemplatesResponse, DataprocProjectsLocationsSessionTemplatesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists session templates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_session_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSessionTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_session_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSessionTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. A filter for the session templates to return in the response. Filters are case sensitive and have the following syntax:field = value AND field = value ...<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListSessionTemplatesResponse](google_cloud_dataproc/models/list_session_templates_response.py), [DataprocProjectsLocationsSessionTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListSessionTemplatesResponse](google_cloud_dataproc/models/list_session_templates_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_session_templates_patch(projects_id: str, locations_id: str, session_templates_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SessionTemplate, DataprocProjectsLocationsSessionTemplatesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the session template synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_session_templates_patch(
    "some example string", "some example string", "some example string", SessionTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_session_templates_patch(
    "some example string", "some example string", "some example string", SessionTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SessionTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionTemplatesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>session_templates_id</code> | <code>str</code> | Resource name segment (sessionTemplatesId). |
| <code>body</code> | <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py) \| [SessionTemplateDict](google_cloud_dataproc/models/session_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SessionTemplate](google_cloud_dataproc/models/session_template.py), [DataprocProjectsLocationsSessionTemplatesPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionTemplatesPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_create(projects_id: str, locations_id: str, body: Session | SessionDict, *, request_id: str | None = None, session_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsSessionsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an interactive session asynchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_create(
    "some example string", "some example string", Session()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_create(
    "some example string", "some example string", Session()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Session](google_cloud_dataproc/models/session.py) \| [SessionDict](google_cloud_dataproc/models/session.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the service receives two CreateSessionRequests (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s with the same ID, the second request is ignored, and the first Session is created and stored in the backend.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Required. The ID to use for the session, which becomes the final component of the session's resource name.This value must be 4-63 characters. Valid characters are /a-z-/.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsSessionsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_delete(projects_id: str, locations_id: str, sessions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsSessionsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the service receives two DeleteSessionRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s with the same ID, the second request is ignored.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsSessionsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_get(projects_id: str, locations_id: str, sessions_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Session, DataprocProjectsLocationsSessionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for an interactive session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Session
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Session](google_cloud_dataproc/models/session.py), [DataprocProjectsLocationsSessionsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Session](google_cloud_dataproc/models/session.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListSessionsResponse, DataprocProjectsLocationsSessionsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists interactive sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSessionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSessionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. A filter for the sessions to return in the response.A filter is a logical expression constraining the values of various fields in each session resource. Filters are case sensitive, and may contain multiple clauses combined with logical operators (AND, OR). Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a filter for sessions in an ACTIVE state that have a production environment label.See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the filter syntax and a list of supported comparators.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of sessions to return in each response. The service may return fewer than this value.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous ListSessions call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListSessionsResponse](google_cloud_dataproc/models/list_sessions_response.py), [DataprocProjectsLocationsSessionsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListSessionsResponse](google_cloud_dataproc/models/list_sessions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationResponse](google_cloud_dataproc/models/access_session_spark_application_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationResponse](google_cloud_dataproc/models/access_session_spark_application_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_environment_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationEnvironmentInfoResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_environment_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationEnvironmentInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_environment_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationEnvironmentInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_session_spark_application_environment_info_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_environment_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_session_spark_application_environment_info_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_environment_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_job(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationJobResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_job(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_job(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>job_id</code> | <code>str \| None</code> | Required. Job ID to fetch data for.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationJobResponse](google_cloud_dataproc/models/access_session_spark_application_job_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationJobResponse](google_cloud_dataproc/models/access_session_spark_application_job_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_native_build_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationNativeBuildInfoResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native Build Information for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_native_build_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationNativeBuildInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_native_build_info(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationNativeBuildInfoResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_session_spark_application_native_build_info_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_build_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_session_spark_application_native_build_info_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_build_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationNativeSqlQueryResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationNativeSqlQueryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationNativeSqlQueryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_native_sql_query_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_sql_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_native_sql_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_sql_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_sql_plan(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationSqlSparkPlanGraphResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_sql_plan(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_sql_plan(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_session_spark_application_sql_spark_plan_graph_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_plan_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_session_spark_application_sql_spark_plan_graph_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_plan_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationSqlQueryResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationSqlQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_sql_query(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationSqlQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>details</code> | <code>bool \| None</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.<br>**Default**: <code>None</code> |
| <code>execution_id</code> | <code>str \| None</code> | Required. Execution ID<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>plan_description</code> | <code>bool \| None</code> | Optional. Enables/ disables physical plan description on demand<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_sql_query_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_sql_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationStageAttemptResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationStageAttemptResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationStageAttemptResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_session_spark_application_stage_attempt_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_attempt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_session_spark_application_stage_attempt_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_attempt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccessSessionSparkApplicationStageRddOperationGraphResponse, DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AccessSessionSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_session_spark_application_stage_rdd_operation_graph_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccessSessionSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_session_spark_application_stage_rdd_operation_graph_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search(projects_id: str, locations_id: str, sessions_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>application_status</code> | <code>[ApplicationStatusOrStr](google_cloud_dataproc/models/enums/application_status.py) \| None</code> | Optional. Search only applications in the chosen state.<br>**Default**: <code>None</code> |
| <code>max_end_time</code> | <code>str \| None</code> | Optional. Latest end timestamp to list.<br>**Default**: <code>None</code> |
| <code>max_time</code> | <code>str \| None</code> | Optional. Latest start timestamp to list.<br>**Default**: <code>None</code> |
| <code>min_end_time</code> | <code>str \| None</code> | Optional. Earliest end timestamp to list.<br>**Default**: <code>None</code> |
| <code>min_time</code> | <code>str \| None</code> | Optional. Earliest start timestamp to list.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of applications to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplications call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationsResponse](google_cloud_dataproc/models/search_session_spark_applications_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationsResponse](google_cloud_dataproc/models/search_session_spark_applications_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationExecutorStageSummaryResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_session_spark_application_executor_stage_summary_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_session_spark_application_executor_stage_summary_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationExecutorsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationExecutorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>executor_status</code> | <code>[ExecutorStatusOrStr](google_cloud_dataproc/models/enums/executor_status.py) \| None</code> | Optional. Filter to select whether active/ dead or all executors should be selected.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of executors to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_session_spark_application_executors_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_session_spark_application_executors_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationJobsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>job_ids</code> | <code>list&#91;str&#93; \| None</code> | Optional. List of Job IDs to filter by if provided.<br>**Default**: <code>None</code> |
| <code>job_status</code> | <code>[JobStatus2OrStr](google_cloud_dataproc/models/enums/job_status2.py) \| None</code> | Optional. List only jobs in the specific state.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of jobs to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationJobs call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/search_session_spark_application_jobs_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/search_session_spark_application_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationNativeSqlQueriesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_native_sql_queries_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_native_sql_queries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, operation_ids: list[str] | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationSqlQueriesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationSqlQueriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_sql_queries(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationSqlQueriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>details</code> | <code>bool \| None</code> | Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.<br>**Default**: <code>None</code> |
| <code>operation_ids</code> | <code>list&#91;str&#93; \| None</code> | Optional. List of Spark Connect operation IDs to filter by if provided.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of queries to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>plan_description</code> | <code>bool \| None</code> | Optional. Enables/ disables physical plan description on demand<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_sql_queries_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_sql_queries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_sql_queries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_sql_queries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>sort_runtime</code> | <code>bool \| None</code> | Optional. Sort the tasks by runtime.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Optional. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Optional. Stage ID<br>**Default**: <code>None</code> |
| <code>task_status</code> | <code>[TaskStatusOrStr](google_cloud_dataproc/models/enums/task_status.py) \| None</code> | Optional. List only tasks in the state.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempt_tasks_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationStageAttemptsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStageAttemptsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStageAttemptsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID for which attempts are to be fetched<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempts_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempts_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_ids: list[str] | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchSessionSparkApplicationStagesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_search_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchSessionSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of stages (paging based on stage_id) to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous SearchSessionSparkApplicationStages call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_ids</code> | <code>list&#91;str&#93; \| None</code> | Optional. List of Stage IDs to filter by if provided.<br>**Default**: <code>None</code> |
| <code>stage_status</code> | <code>[StageStatusOrStr](google_cloud_dataproc/models/enums/stage_status.py) \| None</code> | Optional. List only stages in the given state.<br>**Default**: <code>None</code> |
| <code>summary_metrics_mask</code> | <code>str \| None</code> | Optional. The list of summary metrics fields to include. Empty list will default to skip all summary metrics fields. Example, if the response should include TaskQuantileMetrics, the request should have task_quantile_metrics in summary_metrics_mask field<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SearchSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/search_session_spark_application_stages_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/search_session_spark_application_stages_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSessionSparkApplicationExecutorsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationExecutorsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_executors(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationExecutorsResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_session_spark_application_executors_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_executors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_session_spark_application_executors_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_executors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSessionSparkApplicationJobsResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_jobs(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>job_ids</code> | <code>list&#91;str&#93; \| None</code> | Optional. List of Job IDs to filter by if provided.<br>**Default**: <code>None</code> |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_session_spark_application_jobs_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_session_spark_application_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSessionSparkApplicationStageAttemptTasksResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_attempt_id</code> | <code>int \| None</code> | Required. Stage Attempt ID<br>**Default**: <code>None</code> |
| <code>stage_id</code> | <code>str \| None</code> | Required. Stage ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_session_spark_application_stage_attempt_tasks_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_session_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_ids: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SummarizeSessionSparkApplicationStagesResponse, DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_summarize_stages(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SummarizeSessionSparkApplicationStagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>parent</code> | <code>str \| None</code> | Required. Parent (Session) resource reference.<br>**Default**: <code>None</code> |
| <code>stage_ids</code> | <code>list&#91;str&#93; \| None</code> | Optional. List of Stage IDs to filter by if provided.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[SummarizeSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_session_spark_application_stages_response.py), [DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SummarizeSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_session_spark_application_stages_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_spark_applications_write(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, body: WriteSessionSparkApplicationContextRequest | WriteSessionSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_write(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    WriteSessionSparkApplicationContextRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_spark_applications_write(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    WriteSessionSparkApplicationContextRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>spark_applications_id</code> | <code>str</code> | Resource name segment (sparkApplicationsId). |
| <code>body</code> | <code>[WriteSessionSparkApplicationContextRequest](google_cloud_dataproc/models/write_session_spark_application_context_request.py) \| [WriteSessionSparkApplicationContextRequestDict](google_cloud_dataproc/models/write_session_spark_application_context_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_write_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_write_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_sessions_terminate(projects_id: str, locations_id: str, sessions_id: str, body: TerminateSessionRequest | TerminateSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsSessionsTerminateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Terminates the interactive session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_sessions_terminate(
    "some example string", "some example string", "some example string", TerminateSessionRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsTerminateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_sessions_terminate(
    "some example string", "some example string", "some example string", TerminateSessionRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsSessionsTerminateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>sessions_id</code> | <code>str</code> | Resource name segment (sessionsId). |
| <code>body</code> | <code>[TerminateSessionRequest](google_cloud_dataproc/models/terminate_session_request.py) \| [TerminateSessionRequestDict](google_cloud_dataproc/models/terminate_session_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsSessionsTerminateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_terminate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsSessionsTerminateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_terminate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_create(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_create(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_create(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_delete(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>version</code> | <code>int \| None</code> | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_get(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>version</code> | <code>int \| None</code> | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsLocationsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_get_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_instantiate(projects_id: str, locations_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_instantiate(
    "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_instantiate(
    "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[InstantiateWorkflowTemplateRequest](google_cloud_dataproc/models/instantiate_workflow_template_request.py) \| [InstantiateWorkflowTemplateRequestDict](google_cloud_dataproc/models/instantiate_workflow_template_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_instantiate_inline(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_instantiate_inline(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_instantiate_inline(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_inline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_inline_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListWorkflowTemplatesResponse, DataprocProjectsLocationsWorkflowTemplatesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListWorkflowTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListWorkflowTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return in each response.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token, returned by a previous call, to request the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py), [DataprocProjectsLocationsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_set_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_test_iam_permissions(projects_id: str, locations_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_locations_workflow_templates_update(projects_id: str, locations_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_locations_workflow_templates_update(
    "some example string", "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_locations_workflow_templates_update(
    "some example string", "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_create(projects_id: str, regions_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_create(
    "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_create(
    "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>body</code> | <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py) \| [AutoscalingPolicyDict](google_cloud_dataproc/models/autoscaling_policy.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_delete(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_get(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_get_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAutoscalingPoliciesResponse, DataprocProjectsRegionsAutoscalingPoliciesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAutoscalingPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAutoscalingPoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token, returned by a previous call, to request the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py), [DataprocProjectsRegionsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_set_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_test_iam_permissions(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_autoscaling_policies_update(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutoscalingPolicy, DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_autoscaling_policies_update(
    "some example string", "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_autoscaling_policies_update(
    "some example string", "some example string", "some example string", AutoscalingPolicy()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutoscalingPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>autoscaling_policies_id</code> | <code>str</code> | Resource name segment (autoscalingPoliciesId). |
| <code>body</code> | <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py) \| [AutoscalingPolicyDict](google_cloud_dataproc/models/autoscaling_policy.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py), [DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_create(project_id: str, region: str, body: Cluster | ClusterDict, *, action_on_failed_primary_workers: ActionOnFailedPrimaryWorkersOrStr | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_create(
    "some example string", "some example string", Cluster()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_create(
    "some example string", "some example string", Cluster()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>body</code> | <code>[Cluster](google_cloud_dataproc/models/cluster.py) \| [ClusterDict](google_cloud_dataproc/models/cluster.py)</code> | The request body. |
| <code>action_on_failed_primary_workers</code> | <code>[ActionOnFailedPrimaryWorkersOrStr](google_cloud_dataproc/models/enums/action_on_failed_primary_workers.py) \| None</code> | Optional. Failure action when primary worker creation fails.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_delete(project_id: str, region: str, cluster_name: str, *, cluster_uuid: str | None = None, graceful_termination_timeout: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>cluster_uuid</code> | <code>str \| None</code> | Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.<br>**Default**: <code>None</code> |
| <code>graceful_termination_timeout</code> | <code>str \| None</code> | Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time the request will wait to complete the running jobs on the cluster before its forceful deletion. Default value is 0 indicating that the user has not enabled the graceful termination. Value can be between 60 second and 6 Hours, in case the graceful termination is enabled. (There is no separate flag to check the enabling or disabling of graceful termination, it can be checked by the values in the field).<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the server receives two DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_diagnose(project_id: str, region: str, cluster_name: str, body: DiagnoseClusterRequest | DiagnoseClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersDiagnoseErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_diagnose(
    "some example string", "some example string", "some example string", DiagnoseClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersDiagnoseErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_diagnose(
    "some example string", "some example string", "some example string", DiagnoseClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersDiagnoseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>body</code> | <code>[DiagnoseClusterRequest](google_cloud_dataproc/models/diagnose_cluster_request.py) \| [DiagnoseClusterRequestDict](google_cloud_dataproc/models/diagnose_cluster_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersDiagnoseErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_diagnose_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersDiagnoseErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_diagnose_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_get(project_id: str, region: str, cluster_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Cluster, DataprocProjectsRegionsClustersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Cluster
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Cluster
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Cluster](google_cloud_dataproc/models/cluster.py), [DataprocProjectsRegionsClustersGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Cluster](google_cloud_dataproc/models/cluster.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_get_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsClustersGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsClustersGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_inject_credentials(projects_id: str, regions_id: str, clusters_id: str, body: InjectCredentialsRequest | InjectCredentialsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersInjectCredentialsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_inject_credentials(
    "some example string", "some example string", "some example string", InjectCredentialsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersInjectCredentialsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_inject_credentials(
    "some example string", "some example string", "some example string", InjectCredentialsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersInjectCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[InjectCredentialsRequest](google_cloud_dataproc/models/inject_credentials_request.py) \| [InjectCredentialsRequestDict](google_cloud_dataproc/models/inject_credentials_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersInjectCredentialsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_inject_credentials_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersInjectCredentialsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_inject_credentials_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_list(project_id: str, region: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListClustersResponse, DataprocProjectsRegionsClustersListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all regions/{region}/clusters in a project alphabetically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListClustersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListClustersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>filter_</code> | <code>str \| None</code> | Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be "*" to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of clusters to return in each response. The service may return fewer than this value. If unspecified, the default value is 200. The maximum value is 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token received from a previous ListClusters call. Provide this token to retrieve the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListClustersResponse](google_cloud_dataproc/models/list_clusters_response.py), [DataprocProjectsRegionsClustersListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListClustersResponse](google_cloud_dataproc/models/list_clusters_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_node_groups_create(projects_id: str, regions_id: str, clusters_id: str, body: NodeGroup | NodeGroupDict, *, node_group_id: str | None = None, parent_operation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_node_groups_create(
    "some example string", "some example string", "some example string", NodeGroup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_node_groups_create(
    "some example string", "some example string", "some example string", NodeGroup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[NodeGroup](google_cloud_dataproc/models/node_group.py) \| [NodeGroupDict](google_cloud_dataproc/models/node_group.py)</code> | The request body. |
| <code>node_group_id</code> | <code>str \| None</code> | Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.<br>**Default**: <code>None</code> |
| <code>parent_operation_id</code> | <code>str \| None</code> | Optional. operation id of the parent operation sending the create request<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_node_groups_get(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NodeGroup, DataprocProjectsRegionsClustersNodeGroupsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a node group in a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_node_groups_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NodeGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_node_groups_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NodeGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>node_groups_id</code> | <code>str</code> | Resource name segment (nodeGroupsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[NodeGroup](google_cloud_dataproc/models/node_group.py), [DataprocProjectsRegionsClustersNodeGroupsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NodeGroup](google_cloud_dataproc/models/node_group.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersNodeGroupsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_node_groups_repair(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: RepairNodeGroupRequest | RepairNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repair nodes in a node group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_node_groups_repair(
    "some example string", "some example string", "some example string", "some example string", RepairNodeGroupRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_node_groups_repair(
    "some example string", "some example string", "some example string", "some example string", RepairNodeGroupRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>node_groups_id</code> | <code>str</code> | Resource name segment (nodeGroupsId). |
| <code>body</code> | <code>[RepairNodeGroupRequest](google_cloud_dataproc/models/repair_node_group_request.py) \| [RepairNodeGroupRequestDict](google_cloud_dataproc/models/repair_node_group_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_repair_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_repair_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_node_groups_resize(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: ResizeNodeGroupRequest | ResizeNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_node_groups_resize(
    "some example string", "some example string", "some example string", "some example string", ResizeNodeGroupRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_node_groups_resize(
    "some example string", "some example string", "some example string", "some example string", ResizeNodeGroupRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>node_groups_id</code> | <code>str</code> | Resource name segment (nodeGroupsId). |
| <code>body</code> | <code>[ResizeNodeGroupRequest](google_cloud_dataproc/models/resize_node_group_request.py) \| [ResizeNodeGroupRequestDict](google_cloud_dataproc/models/resize_node_group_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_resize_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_resize_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_patch(project_id: str, region: str, cluster_name: str, body: Cluster | ClusterDict, *, graceful_decommission_timeout: str | None = None, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_patch(
    "some example string", "some example string", "some example string", Cluster()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_patch(
    "some example string", "some example string", "some example string", Cluster()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>body</code> | <code>[Cluster](google_cloud_dataproc/models/cluster.py) \| [ClusterDict](google_cloud_dataproc/models/cluster.py)</code> | The request body. |
| <code>graceful_decommission_timeout</code> | <code>str \| None</code> | Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Supported in image versions 1.2 and higher.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_repair(project_id: str, region: str, cluster_name: str, body: RepairClusterRequest | RepairClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersRepairErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repairs a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_repair(
    "some example string", "some example string", "some example string", RepairClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersRepairErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_repair(
    "some example string", "some example string", "some example string", RepairClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersRepairErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>body</code> | <code>[RepairClusterRequest](google_cloud_dataproc/models/repair_cluster_request.py) \| [RepairClusterRequestDict](google_cloud_dataproc/models/repair_cluster_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_repair_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_repair_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_set_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsClustersSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsClustersSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_start(project_id: str, region: str, cluster_name: str, body: StartClusterRequest | StartClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersStartErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_start(
    "some example string", "some example string", "some example string", StartClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersStartErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_start(
    "some example string", "some example string", "some example string", StartClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersStartErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>body</code> | <code>[StartClusterRequest](google_cloud_dataproc/models/start_cluster_request.py) \| [StartClusterRequestDict](google_cloud_dataproc/models/start_cluster_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersStartErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_start_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersStartErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_start_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_stop(project_id: str, region: str, cluster_name: str, body: StopClusterRequest | StopClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsClustersStopErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_stop(
    "some example string", "some example string", "some example string", StopClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersStopErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_stop(
    "some example string", "some example string", "some example string", StopClusterRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersStopErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project the cluster belongs to. |
| <code>region</code> | <code>str</code> | Required. The region in which to handle the request. |
| <code>cluster_name</code> | <code>str</code> | Required. The cluster name. |
| <code>body</code> | <code>[StopClusterRequest](google_cloud_dataproc/models/stop_cluster_request.py) \| [StopClusterRequestDict](google_cloud_dataproc/models/stop_cluster_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsClustersStopErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_stop_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersStopErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_stop_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_clusters_test_iam_permissions(projects_id: str, regions_id: str, clusters_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsClustersTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_clusters_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_clusters_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsClustersTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>clusters_id</code> | <code>str</code> | Resource name segment (clustersId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsRegionsClustersTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsClustersTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_cancel(project_id: str, region: str, job_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, DataprocProjectsRegionsJobsCancelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>job_id</code> | <code>str</code> | Required. The job ID. |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Job](google_cloud_dataproc/models/job.py), [DataprocProjectsRegionsJobsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_delete(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsRegionsJobsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>job_id</code> | <code>str</code> | Required. The job ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsRegionsJobsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_get(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, DataprocProjectsRegionsJobsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a job in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>job_id</code> | <code>str</code> | Required. The job ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Job](google_cloud_dataproc/models/job.py), [DataprocProjectsRegionsJobsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_get_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsJobsGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsJobsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_list(project_id: str, region: str, *, cluster_name: str | None = None, filter_: str | None = None, job_state_matcher: JobStateMatcherOrStr | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListJobsResponse, DataprocProjectsRegionsJobsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists regions/{region}/jobs in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>cluster_name</code> | <code>str \| None</code> | Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or insertTime, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Allows insertTime to be a timestamp in RFC 3339 format in double quotes, such as 2025-01-01T00:00:00Z. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * AND insertTime <= "2025-01-01T00:00:00Z"<br>**Default**: <code>None</code> |
| <code>job_state_matcher</code> | <code>[JobStateMatcherOrStr](google_cloud_dataproc/models/enums/job_state_matcher.py) \| None</code> | Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The number of results to return in each response.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token, returned by a previous call, to request the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListJobsResponse](google_cloud_dataproc/models/list_jobs_response.py), [DataprocProjectsRegionsJobsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListJobsResponse](google_cloud_dataproc/models/list_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_patch(project_id: str, region: str, job_id: str, body: Job | JobDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, DataprocProjectsRegionsJobsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a job in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_patch(
    "some example string", "some example string", "some example string", Job()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_patch(
    "some example string", "some example string", "some example string", Job()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>job_id</code> | <code>str</code> | Required. The job ID. |
| <code>body</code> | <code>[Job](google_cloud_dataproc/models/job.py) \| [JobDict](google_cloud_dataproc/models/job.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Job](google_cloud_dataproc/models/job.py), [DataprocProjectsRegionsJobsPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_set_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsJobsSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsJobsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_submit(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, DataprocProjectsRegionsJobsSubmitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a job to a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_submit(
    "some example string", "some example string", SubmitJobRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSubmitErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_submit(
    "some example string", "some example string", SubmitJobRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSubmitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>body</code> | <code>[SubmitJobRequest](google_cloud_dataproc/models/submit_job_request.py) \| [SubmitJobRequestDict](google_cloud_dataproc/models/submit_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Job](google_cloud_dataproc/models/job.py), [DataprocProjectsRegionsJobsSubmitErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsSubmitErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_submit_as_operation(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsJobsSubmitAsOperationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits job to a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_submit_as_operation(
    "some example string", "some example string", SubmitJobRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSubmitAsOperationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_submit_as_operation(
    "some example string", "some example string", SubmitJobRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsSubmitAsOperationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud Platform project that the job belongs to. |
| <code>region</code> | <code>str</code> | Required. The Dataproc region in which to handle the request. |
| <code>body</code> | <code>[SubmitJobRequest](google_cloud_dataproc/models/submit_job_request.py) \| [SubmitJobRequestDict](google_cloud_dataproc/models/submit_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsJobsSubmitAsOperationErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_as_operation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsSubmitAsOperationErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_as_operation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_jobs_test_iam_permissions(projects_id: str, regions_id: str, jobs_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsJobsTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_jobs_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_jobs_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsJobsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsRegionsJobsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsJobsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_cancel(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsRegionsOperationsCancelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_cancel(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_cancel(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsRegionsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_delete(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsRegionsOperationsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsRegionsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_get(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsOperationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_get_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsOperationsGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsOperationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_list(projects_id: str, regions_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOperationsResponse, DataprocProjectsRegionsOperationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>filter_</code> | <code>str \| None</code> | The standard list filter.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The standard list page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The standard list page token.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py), [DataprocProjectsRegionsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_set_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsOperationsSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsOperationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_operations_test_iam_permissions(projects_id: str, regions_id: str, operations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_operations_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_operations_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_create(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_create(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_create(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_delete(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>version</code> | <code>int \| None</code> | Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;Any, [DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_get(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>version</code> | <code>int \| None</code> | Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsRegionsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_get_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_get_iam_policy(
    "some example string", "some example string", "some example string", GetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_dataproc/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_dataproc/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_instantiate(projects_id: str, regions_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_instantiate(
    "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_instantiate(
    "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[InstantiateWorkflowTemplateRequest](google_cloud_dataproc/models/instantiate_workflow_template_request.py) \| [InstantiateWorkflowTemplateRequestDict](google_cloud_dataproc/models/instantiate_workflow_template_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_instantiate_inline(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_instantiate_inline(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_instantiate_inline(
    "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_inline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_inline_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListWorkflowTemplatesResponse, DataprocProjectsRegionsWorkflowTemplatesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListWorkflowTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListWorkflowTemplatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return in each response.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token, returned by a previous call, to request the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py), [DataprocProjectsRegionsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_set_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_dataproc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_dataproc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy](google_cloud_dataproc/models/policy.py), [DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_test_iam_permissions(projects_id: str, regions_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dataproc_projects_regions_workflow_templates_update(projects_id: str, regions_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowTemplate, DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.dataproc_projects_regions_workflow_templates_update(
    "some example string", "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.dataproc_projects_regions_workflow_templates_update(
    "some example string", "some example string", "some example string", WorkflowTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>regions_id</code> | <code>str</code> | Resource name segment (regionsId). |
| <code>workflow_templates_id</code> | <code>str</code> | Resource name segment (workflowTemplatesId). |
| <code>body</code> | <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py) \| [WorkflowTemplateDict](google_cloud_dataproc/models/workflow_template.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py), [DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_create(projects_id: str, locations_id: str, body: Federation | FederationDict, *, federation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsFederationsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore federation in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_create(
    "some example string", "some example string", Federation()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_create(
    "some example string", "some example string", Federation()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Federation](google_cloud_dataproc/models/federation.py) \| [FederationDict](google_cloud_dataproc/models/federation.py)</code> | The request body. |
| <code>federation_id</code> | <code>str \| None</code> | Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsFederationsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_delete(projects_id: str, locations_id: str, federations_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsFederationsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single federation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsFederationsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_get(projects_id: str, locations_id: str, federations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Federation, MetastoreProjectsLocationsFederationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single federation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Federation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Federation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Federation](google_cloud_dataproc/models/federation.py), [MetastoreProjectsLocationsFederationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Federation](google_cloud_dataproc/models/federation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_get_iam_policy(projects_id: str, locations_id: str, federations_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListFederationsResponse, MetastoreProjectsLocationsFederationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists federations in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListFederationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListFederationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter to apply to list results.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of federations to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous ListFederationServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to ListFederationServices must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListFederationsResponse](google_cloud_dataproc/models/list_federations_response.py), [MetastoreProjectsLocationsFederationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListFederationsResponse](google_cloud_dataproc/models/list_federations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_patch(projects_id: str, locations_id: str, federations_id: str, body: Federation | FederationDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsFederationsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the fields of a federation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_patch(
    "some example string", "some example string", "some example string", Federation()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_patch(
    "some example string", "some example string", "some example string", Federation()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>body</code> | <code>[Federation](google_cloud_dataproc/models/federation.py) \| [FederationDict](google_cloud_dataproc/models/federation.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Required. A field mask used to specify the fields to be overwritten in the metastore federation resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsFederationsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_set_iam_policy(projects_id: str, locations_id: str, federations_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](google_cloud_dataproc/models/set_iam_policy_request2.py) \| [SetIamPolicyRequest2Dict](google_cloud_dataproc/models/set_iam_policy_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_federations_test_iam_permissions(projects_id: str, locations_id: str, federations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_federations_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_federations_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>federations_id</code> | <code>str</code> | Resource name segment (federationsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Location, MetastoreProjectsLocationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Location](google_cloud_dataproc/models/location.py), [MetastoreProjectsLocationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Location](google_cloud_dataproc/models/location.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListLocationsResponse, MetastoreProjectsLocationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service.This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: Global locations: If name is empty, the method lists the public locations available to all projects. Project-specific locations: If name follows the format projects/{project}, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project.For gRPC and client library implementations, the resource name is passed as the name field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>extra_location_types</code> | <code>list&#91;str&#93; \| None</code> | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of results to return. If not set, the service selects a default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListLocationsResponse](google_cloud_dataproc/models/list_locations_response.py), [MetastoreProjectsLocationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListLocationsResponse](google_cloud_dataproc/models/list_locations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_alter_location(projects_id: str, locations_id: str, services_id: str, body: AlterMetadataResourceLocationRequest | AlterMetadataResourceLocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesAlterLocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_alter_location(
    "some example string", "some example string", "some example string", AlterMetadataResourceLocationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesAlterLocationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_alter_location(
    "some example string", "some example string", "some example string", AlterMetadataResourceLocationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesAlterLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[AlterMetadataResourceLocationRequest](google_cloud_dataproc/models/alter_metadata_resource_location_request.py) \| [AlterMetadataResourceLocationRequestDict](google_cloud_dataproc/models/alter_metadata_resource_location_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesAlterLocationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_location_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesAlterLocationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_location_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_alter_table_properties(projects_id: str, locations_id: str, services_id: str, body: AlterTablePropertiesRequest | AlterTablePropertiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata table properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_alter_table_properties(
    "some example string", "some example string", "some example string", AlterTablePropertiesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_alter_table_properties(
    "some example string", "some example string", "some example string", AlterTablePropertiesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[AlterTablePropertiesRequest](google_cloud_dataproc/models/alter_table_properties_request.py) \| [AlterTablePropertiesRequestDict](google_cloud_dataproc/models/alter_table_properties_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_table_properties_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_table_properties_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_create(projects_id: str, locations_id: str, services_id: str, body: Backup | BackupDict, *, backup_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesBackupsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new backup in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_create(
    "some example string", "some example string", "some example string", Backup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_create(
    "some example string", "some example string", "some example string", Backup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[Backup](google_cloud_dataproc/models/backup.py) \| [BackupDict](google_cloud_dataproc/models/backup.py)</code> | The request body. |
| <code>backup_id</code> | <code>str \| None</code> | Required. The ID of the backup, which is used as the final component of the backup's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesBackupsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_delete(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesBackupsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single backup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>backups_id</code> | <code>str</code> | Resource name segment (backupsId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesBackupsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_get(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Backup, MetastoreProjectsLocationsServicesBackupsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single backup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Backup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Backup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>backups_id</code> | <code>str</code> | Resource name segment (backupsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Backup](google_cloud_dataproc/models/backup.py), [MetastoreProjectsLocationsServicesBackupsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Backup](google_cloud_dataproc/models/backup.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_get_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>backups_id</code> | <code>str</code> | Resource name segment (backupsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListBackupsResponse, MetastoreProjectsLocationsServicesBackupsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists backups in a service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBackupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListBackupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter to apply to list results.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of backups to return. The response may contain less than the maximum number. If unspecified, no more than 500 backups are returned. The maximum value is 1000; values above 1000 are changed to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListBackupsResponse](google_cloud_dataproc/models/list_backups_response.py), [MetastoreProjectsLocationsServicesBackupsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListBackupsResponse](google_cloud_dataproc/models/list_backups_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_backups_set_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_backups_set_iam_policy(
    "some example string", "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_backups_set_iam_policy(
    "some example string", "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>backups_id</code> | <code>str</code> | Resource name segment (backupsId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](google_cloud_dataproc/models/set_iam_policy_request2.py) \| [SetIamPolicyRequest2Dict](google_cloud_dataproc/models/set_iam_policy_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_cancel_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesCancelMigrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the ongoing Managed Migration process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_cancel_migration(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCancelMigrationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_cancel_migration(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCancelMigrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesCancelMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_cancel_migration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesCancelMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_cancel_migration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_complete_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesCompleteMigrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_complete_migration(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCompleteMigrationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_complete_migration(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCompleteMigrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesCompleteMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_complete_migration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesCompleteMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_complete_migration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_create(projects_id: str, locations_id: str, body: Service | ServiceDict, *, request_id: str | None = None, service_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore service in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_create(
    "some example string", "some example string", Service()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_create(
    "some example string", "some example string", Service()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Service](google_cloud_dataproc/models/service.py) \| [ServiceDict](google_cloud_dataproc/models/service.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>service_id</code> | <code>str \| None</code> | Required. The ID of the metastore service, which is used as the final component of the metastore service's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_databases_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_databases_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_databases_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>databases_id</code> | <code>str</code> | Resource name segment (databasesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_databases_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_databases_set_iam_policy(
    "some example string", "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_databases_set_iam_policy(
    "some example string", "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>databases_id</code> | <code>str</code> | Resource name segment (databasesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](google_cloud_dataproc/models/set_iam_policy_request2.py) \| [SetIamPolicyRequest2Dict](google_cloud_dataproc/models/set_iam_policy_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_databases_tables_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_databases_tables_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_databases_tables_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>databases_id</code> | <code>str</code> | Resource name segment (databasesId). |
| <code>tables_id</code> | <code>str</code> | Resource name segment (tablesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_databases_tables_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_databases_tables_set_iam_policy(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    SetIamPolicyRequest2(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_databases_tables_set_iam_policy(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    SetIamPolicyRequest2(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>databases_id</code> | <code>str</code> | Resource name segment (databasesId). |
| <code>tables_id</code> | <code>str</code> | Resource name segment (tablesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](google_cloud_dataproc/models/set_iam_policy_request2.py) \| [SetIamPolicyRequest2Dict](google_cloud_dataproc/models/set_iam_policy_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_delete(projects_id: str, locations_id: str, services_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_export_metadata(projects_id: str, locations_id: str, services_id: str, body: ExportMetadataRequest | ExportMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesExportMetadataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports metadata from a service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_export_metadata(
    "some example string", "some example string", "some example string", ExportMetadataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesExportMetadataErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_export_metadata(
    "some example string", "some example string", "some example string", ExportMetadataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesExportMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[ExportMetadataRequest](google_cloud_dataproc/models/export_metadata_request.py) \| [ExportMetadataRequestDict](google_cloud_dataproc/models/export_metadata_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesExportMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_export_metadata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesExportMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_export_metadata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_get(projects_id: str, locations_id: str, services_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Service, MetastoreProjectsLocationsServicesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Service
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Service
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Service](google_cloud_dataproc/models/service.py), [MetastoreProjectsLocationsServicesGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Service](google_cloud_dataproc/models/service.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_get_iam_policy(projects_id: str, locations_id: str, services_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesGetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListServicesResponse, MetastoreProjectsLocationsServicesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists services in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListServicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListServicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter to apply to list results.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of services to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListServicesResponse](google_cloud_dataproc/models/list_services_response.py), [MetastoreProjectsLocationsServicesListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListServicesResponse](google_cloud_dataproc/models/list_services_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_metadata_imports_create(projects_id: str, locations_id: str, services_id: str, body: MetadataImport | MetadataImportDict, *, metadata_import_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new MetadataImport in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_metadata_imports_create(
    "some example string", "some example string", "some example string", MetadataImport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_metadata_imports_create(
    "some example string", "some example string", "some example string", MetadataImport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[MetadataImport](google_cloud_dataproc/models/metadata_import.py) \| [MetadataImportDict](google_cloud_dataproc/models/metadata_import.py)</code> | The request body. |
| <code>metadata_import_id</code> | <code>str \| None</code> | Required. The ID of the metadata import, which is used as the final component of the metadata import's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_metadata_imports_get(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetadataImport, MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single import.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_metadata_imports_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetadataImport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_metadata_imports_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetadataImport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>metadata_imports_id</code> | <code>str</code> | Resource name segment (metadataImportsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[MetadataImport](google_cloud_dataproc/models/metadata_import.py), [MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetadataImport](google_cloud_dataproc/models/metadata_import.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_metadata_imports_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListMetadataImportsResponse, MetastoreProjectsLocationsServicesMetadataImportsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists imports in a service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_metadata_imports_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMetadataImportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_metadata_imports_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMetadataImportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter to apply to list results.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of imports to return. The response may contain less than the maximum number. If unspecified, no more than 500 imports are returned. The maximum value is 1000; values above 1000 are changed to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListMetadataImportsResponse](google_cloud_dataproc/models/list_metadata_imports_response.py), [MetastoreProjectsLocationsServicesMetadataImportsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListMetadataImportsResponse](google_cloud_dataproc/models/list_metadata_imports_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMetadataImportsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_metadata_imports_patch(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, body: MetadataImport | MetadataImportDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single import. Only the description field of MetadataImport is supported to be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_metadata_imports_patch(
    "some example string", "some example string", "some example string", "some example string", MetadataImport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_metadata_imports_patch(
    "some example string", "some example string", "some example string", "some example string", MetadataImport()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>metadata_imports_id</code> | <code>str</code> | Resource name segment (metadataImportsId). |
| <code>body</code> | <code>[MetadataImport](google_cloud_dataproc/models/metadata_import.py) \| [MetadataImportDict](google_cloud_dataproc/models/metadata_import.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Required. A field mask used to specify the fields to be overwritten in the metadata import resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_migration_executions_delete(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single migration execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_migration_executions_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_migration_executions_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>migration_executions_id</code> | <code>str</code> | Resource name segment (migrationExecutionsId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_migration_executions_get(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MigrationExecution, MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single migration execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_migration_executions_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MigrationExecution
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_migration_executions_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MigrationExecution
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>migration_executions_id</code> | <code>str</code> | Resource name segment (migrationExecutionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[MigrationExecution](google_cloud_dataproc/models/migration_execution.py), [MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MigrationExecution](google_cloud_dataproc/models/migration_execution.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_migration_executions_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListMigrationExecutionsResponse, MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists migration executions on a service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_migration_executions_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMigrationExecutionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_migration_executions_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMigrationExecutionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter to apply to list results.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of migration executions to return. The response may contain less than the maximum number. If unspecified, no more than 500 migration executions are returned. The maximum value is 1000; values above 1000 are changed to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous DataprocMetastore.ListMigrationExecutions call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListMigrationExecutions must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[ListMigrationExecutionsResponse](google_cloud_dataproc/models/list_migration_executions_response.py), [MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListMigrationExecutionsResponse](google_cloud_dataproc/models/list_migration_executions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_move_table_to_database(projects_id: str, locations_id: str, services_id: str, body: MoveTableToDatabaseRequest | MoveTableToDatabaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a table to another database.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_move_table_to_database(
    "some example string", "some example string", "some example string", MoveTableToDatabaseRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_move_table_to_database(
    "some example string", "some example string", "some example string", MoveTableToDatabaseRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[MoveTableToDatabaseRequest](google_cloud_dataproc/models/move_table_to_database_request.py) \| [MoveTableToDatabaseRequestDict](google_cloud_dataproc/models/move_table_to_database_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_move_table_to_database_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_move_table_to_database_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_patch(projects_id: str, locations_id: str, services_id: str, body: Service | ServiceDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_patch(
    "some example string", "some example string", "some example string", Service()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_patch(
    "some example string", "some example string", "some example string", Service()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[Service](google_cloud_dataproc/models/service.py) \| [ServiceDict](google_cloud_dataproc/models/service.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Required. A field mask used to specify the fields to be overwritten in the metastore service resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_query_metadata(projects_id: str, locations_id: str, services_id: str, body: QueryMetadataRequest | QueryMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesQueryMetadataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Dataproc Metastore metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_query_metadata(
    "some example string", "some example string", "some example string", QueryMetadataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesQueryMetadataErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_query_metadata(
    "some example string", "some example string", "some example string", QueryMetadataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesQueryMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[QueryMetadataRequest](google_cloud_dataproc/models/query_metadata_request.py) \| [QueryMetadataRequestDict](google_cloud_dataproc/models/query_metadata_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesQueryMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_query_metadata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesQueryMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_query_metadata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_restore(projects_id: str, locations_id: str, services_id: str, body: RestoreServiceRequest | RestoreServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesRestoreErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores a service from a backup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_restore(
    "some example string", "some example string", "some example string", RestoreServiceRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesRestoreErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_restore(
    "some example string", "some example string", "some example string", RestoreServiceRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesRestoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[RestoreServiceRequest](google_cloud_dataproc/models/restore_service_request.py) \| [RestoreServiceRequestDict](google_cloud_dataproc/models/restore_service_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesRestoreErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_restore_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesRestoreErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_restore_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_set_iam_policy(projects_id: str, locations_id: str, services_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy2, MetastoreProjectsLocationsServicesSetIamPolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest2()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[SetIamPolicyRequest2](google_cloud_dataproc/models/set_iam_policy_request2.py) \| [SetIamPolicyRequest2Dict](google_cloud_dataproc/models/set_iam_policy_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Policy2](google_cloud_dataproc/models/policy2.py), [MetastoreProjectsLocationsServicesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_start_migration(projects_id: str, locations_id: str, services_id: str, body: StartMigrationRequest | StartMigrationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, MetastoreProjectsLocationsServicesStartMigrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the Managed Migration process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_start_migration(
    "some example string", "some example string", "some example string", StartMigrationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesStartMigrationErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_start_migration(
    "some example string", "some example string", "some example string", StartMigrationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesStartMigrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[StartMigrationRequest](google_cloud_dataproc/models/start_migration_request.py) \| [StartMigrationRequestDict](google_cloud_dataproc/models/start_migration_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[Operation](google_cloud_dataproc/models/operation.py), [MetastoreProjectsLocationsServicesStartMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_start_migration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesStartMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_start_migration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metastore_projects_locations_services_test_iam_permissions(projects_id: str, locations_id: str, services_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.metastore_projects_locations_services_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.metastore_projects_locations_services_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>services_id</code> | <code>str</code> | Resource name segment (servicesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_dataproc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_dataproc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_dataproc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_dataproc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py), [MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_dataproc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_dataproc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

