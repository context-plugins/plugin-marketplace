# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleCloudDataprocClient](google_cloud_dataproc/client.py)

<details>
<summary><code>def dataproc_projects_locations_autoscaling_policies_create(projects_id: str, locations_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_create(
        "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_create(
        "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_delete(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_get(projects_id: str, locations_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_get_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAutoscalingPoliciesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesListErrorBody
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

**OnSuccess**: <code>[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_set_iam_policy(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_test_iam_permissions(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_autoscaling_policies_update(projects_id: str, locations_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_locations_autoscaling_policies_update(
        "some example string", "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_autoscaling_policies_update(
        "some example string", "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_autoscaling_policies_update_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_analyze(projects_id: str, locations_id: str, batches_id: str, body: AnalyzeBatchRequest | AnalyzeBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_analyze(
        "some example string", "some example string", "some example string", AnalyzeBatchRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesAnalyzeErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_analyze(
        "some example string", "some example string", "some example string", AnalyzeBatchRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesAnalyzeErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesAnalyzeErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_analyze_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_create(projects_id: str, locations_id: str, body: Batch | BatchDict, *, batch_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_create("some example string", "some example string", Batch())
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_create(
        "some example string", "some example string", Batch()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_delete(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_get(projects_id: str, locations_id: str, batches_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Batch</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Batch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Batch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesGetErrorBody
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

**OnSuccess**: <code>[Batch](google_cloud_dataproc/models/batch.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBatchesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListBatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListBatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesListErrorBody
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

**OnSuccess**: <code>[ListBatchesResponse](google_cloud_dataproc/models/list_batches_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationResponse](google_cloud_dataproc/models/access_spark_application_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_environment_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationEnvironmentInfoResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_environment_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationEnvironmentInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_environment_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationEnvironmentInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_spark_application_environment_info_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_environment_info_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_job(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationJobResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_job(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_job(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationJobResponse](google_cloud_dataproc/models/access_spark_application_job_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_job_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_native_build_info(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationNativeBuildInfoResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_native_build_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationNativeBuildInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_native_build_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationNativeBuildInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_spark_application_native_build_info_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_build_info_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationNativeSqlQueryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_native_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationNativeSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_native_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationNativeSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_native_sql_query_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_native_sql_query_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_sql_plan(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationSqlSparkPlanGraphResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_sql_plan(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationSqlSparkPlanGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_sql_plan(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationSqlSparkPlanGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_spark_application_sql_spark_plan_graph_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_plan_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_sql_query(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationSqlQueryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_spark_application_sql_query_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_sql_query_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationStageAttemptResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_stage_attempt(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationStageAttemptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_stage_attempt(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationStageAttemptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_spark_application_stage_attempt_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_attempt_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSparkApplicationStageRddOperationGraphResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationStageRddOperationGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSparkApplicationStageRddOperationGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody
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

**OnSuccess**: <code>[AccessSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_spark_application_stage_rdd_operation_graph_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_access_stage_rdd_graph_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_compute_tuning_config(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, semantic_query_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ComputeTuningConfigResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_compute_tuning_config(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ComputeTuningConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_compute_tuning_config(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ComputeTuningConfigResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody
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

**OnSuccess**: <code>[ComputeTuningConfigResponse](google_cloud_dataproc/models/compute_tuning_config_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_compute_tuning_config_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search(projects_id: str, locations_id: str, batches_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationsResponse](google_cloud_dataproc/models/search_spark_applications_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationExecutorStageSummaryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationExecutorStageSummaryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationExecutorStageSummaryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
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

**OnSuccess**: <code>[SearchSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_spark_application_executor_stage_summary_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executor_stage_summary_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationExecutorsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_spark_application_executors_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_executors_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationJobsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationJobsResponse](google_cloud_dataproc/models/search_spark_application_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_jobs_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationNativeSqlQueriesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationNativeSqlQueriesResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_native_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationNativeSqlQueriesResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_native_sql_queries_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_native_sql_queries_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_sql_queries(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, details: bool | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationSqlQueriesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationSqlQueriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationSqlQueriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_spark_application_sql_queries_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_sql_queries_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationStageAttemptTasksResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempt_tasks_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationStageAttemptsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_stage_attempts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStageAttemptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_stage_attempts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStageAttemptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_spark_application_stage_attempts_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stage_attempts_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_search_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSparkApplicationStagesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_search_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_search_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody
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

**OnSuccess**: <code>[SearchSparkApplicationStagesResponse](google_cloud_dataproc/models/search_spark_application_stages_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_search_stages_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_executors(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSparkApplicationExecutorsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_summarize_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_summarize_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody
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

**OnSuccess**: <code>[SummarizeSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_spark_application_executors_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_executors_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_jobs(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSparkApplicationJobsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_summarize_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_summarize_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody
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

**OnSuccess**: <code>[SummarizeSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_spark_application_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_jobs_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSparkApplicationStageAttemptTasksResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
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

**OnSuccess**: <code>[SummarizeSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stage_attempt_tasks_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_summarize_stages(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSparkApplicationStagesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_summarize_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_summarize_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody
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

**OnSuccess**: <code>[SummarizeSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_spark_application_stages_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_summarize_stages_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_batches_spark_applications_write(projects_id: str, locations_id: str, batches_id: str, spark_applications_id: str, body: WriteSparkApplicationContextRequest | WriteSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_batches_spark_applications_write(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        WriteSparkApplicationContextRequest(),
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_batches_spark_applications_write(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        WriteSparkApplicationContextRequest(),
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsBatchesSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_batches_spark_applications_write_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_operations_cancel(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_operations_cancel(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsCancelErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_cancel_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_operations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_operations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsGetErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListOperationsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_operations_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_operations_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsOperationsListErrorBody
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

**OnSuccess**: <code>[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_operations_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_session_templates_create(projects_id: str, locations_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> SessionTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_session_templates_create(
        "some example string", "some example string", SessionTemplate()
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_session_templates_create(
        "some example string", "some example string", SessionTemplate()
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesCreateErrorBody
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

**OnSuccess**: <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_session_templates_delete(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_session_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_session_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_session_templates_get(projects_id: str, locations_id: str, session_templates_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SessionTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_session_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_session_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesGetErrorBody
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

**OnSuccess**: <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_session_templates_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSessionTemplatesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_session_templates_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListSessionTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_session_templates_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListSessionTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesListErrorBody
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

**OnSuccess**: <code>[ListSessionTemplatesResponse](google_cloud_dataproc/models/list_session_templates_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_session_templates_patch(projects_id: str, locations_id: str, session_templates_id: str, body: SessionTemplate | SessionTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> SessionTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_session_templates_patch(
        "some example string", "some example string", "some example string", SessionTemplate()
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_session_templates_patch(
        "some example string", "some example string", "some example string", SessionTemplate()
    )
    # TODO: Handle 'response' of type SessionTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionTemplatesPatchErrorBody
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

**OnSuccess**: <code>[SessionTemplate](google_cloud_dataproc/models/session_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionTemplatesPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_session_templates_patch_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_create(projects_id: str, locations_id: str, body: Session | SessionDict, *, request_id: str | None = None, session_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_create(
        "some example string", "some example string", Session()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_create(
        "some example string", "some example string", Session()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_delete(projects_id: str, locations_id: str, sessions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_get(projects_id: str, locations_id: str, sessions_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Session</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Session
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Session
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsGetErrorBody
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

**OnSuccess**: <code>[Session](google_cloud_dataproc/models/session.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSessionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListSessionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsListErrorBody
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

**OnSuccess**: <code>[ListSessionsResponse](google_cloud_dataproc/models/list_sessions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationResponse](google_cloud_dataproc/models/access_session_spark_application_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_environment_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationEnvironmentInfoResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_environment_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationEnvironmentInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_environment_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationEnvironmentInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationEnvironmentInfoResponse](google_cloud_dataproc/models/access_session_spark_application_environment_info_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_environment_info_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_job(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationJobResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_job(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_job(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationJobResponse](google_cloud_dataproc/models/access_session_spark_application_job_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessJobErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_job_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_native_build_info(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationNativeBuildInfoResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_native_build_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationNativeBuildInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_native_build_info(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationNativeBuildInfoResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationNativeBuildInfoResponse](google_cloud_dataproc/models/access_session_spark_application_native_build_info_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_build_info_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationNativeSqlQueryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationNativeSqlQueryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_native_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationNativeSqlQueryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationNativeSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_native_sql_query_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_native_sql_query_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_sql_plan(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, execution_id: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationSqlSparkPlanGraphResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_sql_plan(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_sql_plan(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](google_cloud_dataproc/models/access_session_spark_application_sql_spark_plan_graph_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_plan_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_sql_query(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, execution_id: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationSqlQueryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_sql_query(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationSqlQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationSqlQueryResponse](google_cloud_dataproc/models/access_session_spark_application_sql_query_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_sql_query_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationStageAttemptResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationStageAttemptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_stage_attempt(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationStageAttemptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationStageAttemptResponse](google_cloud_dataproc/models/access_session_spark_application_stage_attempt_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_attempt_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AccessSessionSparkApplicationStageRddOperationGraphResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody
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

**OnSuccess**: <code>[AccessSessionSparkApplicationStageRddOperationGraphResponse](google_cloud_dataproc/models/access_session_spark_application_stage_rdd_operation_graph_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_access_stage_rdd_graph_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search(projects_id: str, locations_id: str, sessions_id: str, *, application_status: ApplicationStatusOrStr | None = None, max_end_time: str | None = None, max_time: str | None = None, min_end_time: str | None = None, min_time: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationsResponse](google_cloud_dataproc/models/search_session_spark_applications_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationExecutorStageSummaryResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
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

**OnSuccess**: <code>[SearchSessionSparkApplicationExecutorStageSummaryResponse](google_cloud_dataproc/models/search_session_spark_application_executor_stage_summary_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executor_stage_summary_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, executor_status: ExecutorStatusOrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationExecutorsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/search_session_spark_application_executors_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_executors_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, job_status: JobStatus2OrStr | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationJobsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/search_session_spark_application_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_jobs_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationNativeSqlQueriesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationNativeSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_native_sql_queries_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_native_sql_queries_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_sql_queries(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, details: bool | None = None, operation_ids: list[str] | None = None, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, plan_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationSqlQueriesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationSqlQueriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_sql_queries(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationSqlQueriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationSqlQueriesResponse](google_cloud_dataproc/models/search_session_spark_application_sql_queries_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_sql_queries_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, sort_runtime: bool | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, task_status: TaskStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationStageAttemptTasksResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempt_tasks_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_id: str | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationStageAttemptsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_stage_attempts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptsResponse](google_cloud_dataproc/models/search_session_spark_application_stage_attempts_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stage_attempts_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_search_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, page_size: int | None = None, page_token: str | None = None, parent: str | None = None, stage_ids: list[str] | None = None, stage_status: StageStatusOrStr | None = None, summary_metrics_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchSessionSparkApplicationStagesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_search_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_search_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchSessionSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody
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

**OnSuccess**: <code>[SearchSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/search_session_spark_application_stages_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_search_stages_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_executors(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSessionSparkApplicationExecutorsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_summarize_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_summarize_executors(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationExecutorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody
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

**OnSuccess**: <code>[SummarizeSessionSparkApplicationExecutorsResponse](google_cloud_dataproc/models/summarize_session_spark_application_executors_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_executors_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_jobs(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, job_ids: list[str] | None = None, parent: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSessionSparkApplicationJobsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_summarize_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_summarize_jobs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody
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

**OnSuccess**: <code>[SummarizeSessionSparkApplicationJobsResponse](google_cloud_dataproc/models/summarize_session_spark_application_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_jobs_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_attempt_id: int | None = None, stage_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSessionSparkApplicationStageAttemptTasksResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type
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

**OnSuccess**: <code>[SummarizeSessionSparkApplicationStageAttemptTasksResponse](google_cloud_dataproc/models/summarize_session_spark_application_stage_attempt_tasks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stage_attempt_tasks_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_summarize_stages(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, *, parent: str | None = None, stage_ids: list[str] | None = None, request_options: RequestOptionsOrDict | None = None) -> SummarizeSessionSparkApplicationStagesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_summarize_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_summarize_stages(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SummarizeSessionSparkApplicationStagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody
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

**OnSuccess**: <code>[SummarizeSessionSparkApplicationStagesResponse](google_cloud_dataproc/models/summarize_session_spark_application_stages_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_summarize_stages_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_spark_applications_write(projects_id: str, locations_id: str, sessions_id: str, spark_applications_id: str, body: WriteSessionSparkApplicationContextRequest | WriteSessionSparkApplicationContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_spark_applications_write(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        WriteSessionSparkApplicationContextRequest(),
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_spark_applications_write(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        WriteSessionSparkApplicationContextRequest(),
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsSparkApplicationsWriteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_spark_applications_write_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_sessions_terminate(projects_id: str, locations_id: str, sessions_id: str, body: TerminateSessionRequest | TerminateSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_sessions_terminate(
        "some example string", "some example string", "some example string", TerminateSessionRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsTerminateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_sessions_terminate(
        "some example string", "some example string", "some example string", TerminateSessionRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsSessionsTerminateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsSessionsTerminateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_sessions_terminate_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_create(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_create(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_create(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_delete(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_get(projects_id: str, locations_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesGetErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_get_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_instantiate(projects_id: str, locations_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_instantiate(
        "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_instantiate(
        "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_instantiate_inline(projects_id: str, locations_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_instantiate_inline(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_instantiate_inline(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_instantiate_inline_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListWorkflowTemplatesResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListWorkflowTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListWorkflowTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesListErrorBody
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

**OnSuccess**: <code>[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_set_iam_policy(projects_id: str, locations_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_test_iam_permissions(projects_id: str, locations_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_locations_workflow_templates_update(projects_id: str, locations_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_locations_workflow_templates_update(
        "some example string", "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_locations_workflow_templates_update(
        "some example string", "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsLocationsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_locations_workflow_templates_update_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_create(projects_id: str, regions_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_create(
        "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_create(
        "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_delete(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_get(projects_id: str, regions_id: str, autoscaling_policies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_get_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAutoscalingPoliciesResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesListErrorBody
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

**OnSuccess**: <code>[ListAutoscalingPoliciesResponse](google_cloud_dataproc/models/list_autoscaling_policies_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_set_iam_policy(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_test_iam_permissions(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_autoscaling_policies_update(projects_id: str, regions_id: str, autoscaling_policies_id: str, body: AutoscalingPolicy | AutoscalingPolicyDict, *, request_options: RequestOptionsOrDict | None = None) -> AutoscalingPolicy</code></summary>

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
try:
    response = client.dataproc_projects_regions_autoscaling_policies_update(
        "some example string", "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_autoscaling_policies_update(
        "some example string", "some example string", "some example string", AutoscalingPolicy()
    )
    # TODO: Handle 'response' of type AutoscalingPolicy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody
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

**OnSuccess**: <code>[AutoscalingPolicy](google_cloud_dataproc/models/autoscaling_policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsAutoscalingPoliciesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_autoscaling_policies_update_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_create(project_id: str, region: str, body: Cluster | ClusterDict, *, action_on_failed_primary_workers: ActionOnFailedPrimaryWorkersOrStr | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_create("some example string", "some example string", Cluster())
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_create(
        "some example string", "some example string", Cluster()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_delete(project_id: str, region: str, cluster_name: str, *, cluster_uuid: str | None = None, graceful_termination_timeout: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_diagnose(project_id: str, region: str, cluster_name: str, body: DiagnoseClusterRequest | DiagnoseClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_diagnose(
        "some example string", "some example string", "some example string", DiagnoseClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersDiagnoseErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_diagnose(
        "some example string", "some example string", "some example string", DiagnoseClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersDiagnoseErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersDiagnoseErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_diagnose_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_get(project_id: str, region: str, cluster_name: str, *, request_options: RequestOptionsOrDict | None = None) -> Cluster</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Cluster
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Cluster
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersGetErrorBody
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

**OnSuccess**: <code>[Cluster](google_cloud_dataproc/models/cluster.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_get_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_inject_credentials(projects_id: str, regions_id: str, clusters_id: str, body: InjectCredentialsRequest | InjectCredentialsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_inject_credentials(
        "some example string", "some example string", "some example string", InjectCredentialsRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersInjectCredentialsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_inject_credentials(
        "some example string", "some example string", "some example string", InjectCredentialsRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersInjectCredentialsErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersInjectCredentialsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_inject_credentials_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_list(project_id: str, region: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListClustersResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListClustersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListClustersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersListErrorBody
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

**OnSuccess**: <code>[ListClustersResponse](google_cloud_dataproc/models/list_clusters_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_node_groups_create(projects_id: str, regions_id: str, clusters_id: str, body: NodeGroup | NodeGroupDict, *, node_group_id: str | None = None, parent_operation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_node_groups_create(
        "some example string", "some example string", "some example string", NodeGroup()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_node_groups_create(
        "some example string", "some example string", "some example string", NodeGroup()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersNodeGroupsCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_node_groups_get(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, *, request_options: RequestOptionsOrDict | None = None) -> NodeGroup</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_node_groups_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NodeGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_node_groups_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type NodeGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsGetErrorBody
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

**OnSuccess**: <code>[NodeGroup](google_cloud_dataproc/models/node_group.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersNodeGroupsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_node_groups_repair(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: RepairNodeGroupRequest | RepairNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_node_groups_repair(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        RepairNodeGroupRequest(),
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_node_groups_repair(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        RepairNodeGroupRequest(),
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersNodeGroupsRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_repair_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_node_groups_resize(projects_id: str, regions_id: str, clusters_id: str, node_groups_id: str, body: ResizeNodeGroupRequest | ResizeNodeGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_node_groups_resize(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ResizeNodeGroupRequest(),
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_node_groups_resize(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ResizeNodeGroupRequest(),
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersNodeGroupsResizeErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_node_groups_resize_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_patch(project_id: str, region: str, cluster_name: str, body: Cluster | ClusterDict, *, graceful_decommission_timeout: str | None = None, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_patch(
        "some example string", "some example string", "some example string", Cluster()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_patch(
        "some example string", "some example string", "some example string", Cluster()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersPatchErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_patch_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_repair(project_id: str, region: str, cluster_name: str, body: RepairClusterRequest | RepairClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_repair(
        "some example string", "some example string", "some example string", RepairClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersRepairErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_repair(
        "some example string", "some example string", "some example string", RepairClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersRepairErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersRepairErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_repair_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_set_iam_policy(projects_id: str, regions_id: str, clusters_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_start(project_id: str, region: str, cluster_name: str, body: StartClusterRequest | StartClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_start(
        "some example string", "some example string", "some example string", StartClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersStartErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_start(
        "some example string", "some example string", "some example string", StartClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersStartErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersStartErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_start_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_stop(project_id: str, region: str, cluster_name: str, body: StopClusterRequest | StopClusterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_stop(
        "some example string", "some example string", "some example string", StopClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersStopErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_stop(
        "some example string", "some example string", "some example string", StopClusterRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersStopErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersStopErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_stop_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_clusters_test_iam_permissions(projects_id: str, regions_id: str, clusters_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_clusters_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_clusters_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsClustersTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsClustersTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_clusters_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_cancel(project_id: str, region: str, job_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_cancel(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_cancel(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsCancelErrorBody
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

**OnSuccess**: <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_cancel_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_delete(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_get(project_id: str, region: str, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsGetErrorBody
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

**OnSuccess**: <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_get_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_list(project_id: str, region: str, *, cluster_name: str | None = None, filter_: str | None = None, job_state_matcher: JobStateMatcherOrStr | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListJobsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsListErrorBody
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

**OnSuccess**: <code>[ListJobsResponse](google_cloud_dataproc/models/list_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_patch(project_id: str, region: str, job_id: str, body: Job | JobDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_patch(
        "some example string", "some example string", "some example string", Job()
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_patch(
        "some example string", "some example string", "some example string", Job()
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsPatchErrorBody
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

**OnSuccess**: <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsPatchErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_patch_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_set_iam_policy(projects_id: str, regions_id: str, jobs_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_submit(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_submit(
        "some example string", "some example string", SubmitJobRequest()
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSubmitErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_submit(
        "some example string", "some example string", SubmitJobRequest()
    )
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSubmitErrorBody
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

**OnSuccess**: <code>[Job](google_cloud_dataproc/models/job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsSubmitErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_submit_as_operation(project_id: str, region: str, body: SubmitJobRequest | SubmitJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_submit_as_operation(
        "some example string", "some example string", SubmitJobRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSubmitAsOperationErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_submit_as_operation(
        "some example string", "some example string", SubmitJobRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsSubmitAsOperationErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsSubmitAsOperationErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_submit_as_operation_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_jobs_test_iam_permissions(projects_id: str, regions_id: str, jobs_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_jobs_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_jobs_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsJobsTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsJobsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_jobs_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_cancel(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_cancel(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_cancel(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsCancelErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsCancelErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_cancel_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_delete(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_get(projects_id: str, regions_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsGetErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_get_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_list(projects_id: str, regions_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListOperationsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsListErrorBody
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

**OnSuccess**: <code>[ListOperationsResponse](google_cloud_dataproc/models/list_operations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_set_iam_policy(projects_id: str, regions_id: str, operations_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_operations_test_iam_permissions(projects_id: str, regions_id: str, operations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_operations_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_operations_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsOperationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_operations_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_create(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_create(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_create(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesCreateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_create_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_delete(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesDeleteErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_delete_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_get(projects_id: str, regions_id: str, workflow_templates_id: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesGetErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesGetErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_get_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_instantiate(projects_id: str, regions_id: str, workflow_templates_id: str, body: InstantiateWorkflowTemplateRequest | InstantiateWorkflowTemplateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_instantiate(
        "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_instantiate(
        "some example string", "some example string", "some example string", InstantiateWorkflowTemplateRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesInstantiateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_instantiate_inline(projects_id: str, regions_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_instantiate_inline(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_instantiate_inline(
        "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_instantiate_inline_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_list(projects_id: str, regions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListWorkflowTemplatesResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListWorkflowTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesListErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListWorkflowTemplatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesListErrorBody
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

**OnSuccess**: <code>[ListWorkflowTemplatesResponse](google_cloud_dataproc/models/list_workflow_templates_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesListErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_list_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_set_iam_policy(projects_id: str, regions_id: str, workflow_templates_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy](google_cloud_dataproc/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_test_iam_permissions(projects_id: str, regions_id: str, workflow_templates_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def dataproc_projects_regions_workflow_templates_update(projects_id: str, regions_id: str, workflow_templates_id: str, body: WorkflowTemplate | WorkflowTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowTemplate</code></summary>

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
try:
    response = client.dataproc_projects_regions_workflow_templates_update(
        "some example string", "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.dataproc_projects_regions_workflow_templates_update(
        "some example string", "some example string", "some example string", WorkflowTemplate()
    )
    # TODO: Handle 'response' of type WorkflowTemplate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody
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

**OnSuccess**: <code>[WorkflowTemplate](google_cloud_dataproc/models/workflow_template.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[DataprocProjectsRegionsWorkflowTemplatesUpdateErrorBody](google_cloud_dataproc/errors/dataproc_projects_regions_workflow_templates_update_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_create(projects_id: str, locations_id: str, body: Federation | FederationDict, *, federation_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_create(
        "some example string", "some example string", Federation()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_create(
        "some example string", "some example string", Federation()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_create_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_delete(projects_id: str, locations_id: str, federations_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_delete_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_get(projects_id: str, locations_id: str, federations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Federation</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Federation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Federation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsGetErrorBody
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

**OnSuccess**: <code>[Federation](google_cloud_dataproc/models/federation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_get_iam_policy(projects_id: str, locations_id: str, federations_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListFederationsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListFederationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListFederationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsListErrorBody
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

**OnSuccess**: <code>[ListFederationsResponse](google_cloud_dataproc/models/list_federations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_patch(projects_id: str, locations_id: str, federations_id: str, body: Federation | FederationDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_patch(
        "some example string", "some example string", "some example string", Federation()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_patch(
        "some example string", "some example string", "some example string", Federation()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsPatchErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_patch_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_set_iam_policy(projects_id: str, locations_id: str, federations_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest2()
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest2()
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_federations_test_iam_permissions(projects_id: str, locations_id: str, federations_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_federations_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_federations_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsFederationsTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_federations_test_iam_permissions_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Location</code></summary>

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
try:
    response = client.metastore_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsGetErrorBody
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

**OnSuccess**: <code>[Location](google_cloud_dataproc/models/location.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListLocationsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsListErrorBody
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

**OnSuccess**: <code>[ListLocationsResponse](google_cloud_dataproc/models/list_locations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_alter_location(projects_id: str, locations_id: str, services_id: str, body: AlterMetadataResourceLocationRequest | AlterMetadataResourceLocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_alter_location(
        "some example string", "some example string", "some example string", AlterMetadataResourceLocationRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesAlterLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_alter_location(
        "some example string", "some example string", "some example string", AlterMetadataResourceLocationRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesAlterLocationErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesAlterLocationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_location_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_alter_table_properties(projects_id: str, locations_id: str, services_id: str, body: AlterTablePropertiesRequest | AlterTablePropertiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_alter_table_properties(
        "some example string", "some example string", "some example string", AlterTablePropertiesRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_alter_table_properties(
        "some example string", "some example string", "some example string", AlterTablePropertiesRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesAlterTablePropertiesErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_alter_table_properties_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_create(projects_id: str, locations_id: str, services_id: str, body: Backup | BackupDict, *, backup_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_create(
        "some example string", "some example string", "some example string", Backup()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_create(
        "some example string", "some example string", "some example string", Backup()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_create_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_delete(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_delete_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_get(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Backup</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Backup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Backup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsGetErrorBody
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

**OnSuccess**: <code>[Backup](google_cloud_dataproc/models/backup.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_get_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_get_iam_policy(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_get_iam_policy(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBackupsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListBackupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListBackupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsListErrorBody
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

**OnSuccess**: <code>[ListBackupsResponse](google_cloud_dataproc/models/list_backups_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_backups_set_iam_policy(projects_id: str, locations_id: str, services_id: str, backups_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_backups_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_backups_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesBackupsSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_backups_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_cancel_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_cancel_migration(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCancelMigrationErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_cancel_migration(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCancelMigrationErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesCancelMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_cancel_migration_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_complete_migration(projects_id: str, locations_id: str, services_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_complete_migration(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCompleteMigrationErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_complete_migration(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCompleteMigrationErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesCompleteMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_complete_migration_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_create(projects_id: str, locations_id: str, body: Service | ServiceDict, *, request_id: str | None = None, service_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_create(
        "some example string", "some example string", Service()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_create(
        "some example string", "some example string", Service()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_create_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_databases_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_databases_get_iam_policy(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_databases_get_iam_policy(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesDatabasesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_databases_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_databases_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_databases_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesDatabasesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_databases_tables_get_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_databases_tables_get_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_databases_tables_get_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_databases_tables_set_iam_policy(projects_id: str, locations_id: str, services_id: str, databases_id: str, tables_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_databases_tables_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_databases_tables_set_iam_policy(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        SetIamPolicyRequest2(),
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_databases_tables_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_delete(projects_id: str, locations_id: str, services_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_delete_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_export_metadata(projects_id: str, locations_id: str, services_id: str, body: ExportMetadataRequest | ExportMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_export_metadata(
        "some example string", "some example string", "some example string", ExportMetadataRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesExportMetadataErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_export_metadata(
        "some example string", "some example string", "some example string", ExportMetadataRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesExportMetadataErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesExportMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_export_metadata_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_get(projects_id: str, locations_id: str, services_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Service</code></summary>

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
try:
    response = client.metastore_projects_locations_services_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Service
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Service
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesGetErrorBody
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

**OnSuccess**: <code>[Service](google_cloud_dataproc/models/service.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_get_iam_policy(projects_id: str, locations_id: str, services_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesGetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesGetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_get_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListServicesResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_services_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListServicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListServicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesListErrorBody
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

**OnSuccess**: <code>[ListServicesResponse](google_cloud_dataproc/models/list_services_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_metadata_imports_create(projects_id: str, locations_id: str, services_id: str, body: MetadataImport | MetadataImportDict, *, metadata_import_id: str | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_metadata_imports_create(
        "some example string", "some example string", "some example string", MetadataImport()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_metadata_imports_create(
        "some example string", "some example string", "some example string", MetadataImport()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMetadataImportsCreateErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_create_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_metadata_imports_get(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, *, request_options: RequestOptionsOrDict | None = None) -> MetadataImport</code></summary>

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
try:
    response = client.metastore_projects_locations_services_metadata_imports_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MetadataImport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_metadata_imports_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MetadataImport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody
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

**OnSuccess**: <code>[MetadataImport](google_cloud_dataproc/models/metadata_import.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMetadataImportsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_metadata_imports_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListMetadataImportsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_services_metadata_imports_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListMetadataImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_metadata_imports_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListMetadataImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsListErrorBody
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

**OnSuccess**: <code>[ListMetadataImportsResponse](google_cloud_dataproc/models/list_metadata_imports_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMetadataImportsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_metadata_imports_patch(projects_id: str, locations_id: str, services_id: str, metadata_imports_id: str, body: MetadataImport | MetadataImportDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_metadata_imports_patch(
        "some example string", "some example string", "some example string", "some example string", MetadataImport()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_metadata_imports_patch(
        "some example string", "some example string", "some example string", "some example string", MetadataImport()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMetadataImportsPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_metadata_imports_patch_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_migration_executions_delete(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_migration_executions_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_migration_executions_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMigrationExecutionsDeleteErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_delete_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_migration_executions_get(projects_id: str, locations_id: str, services_id: str, migration_executions_id: str, *, request_options: RequestOptionsOrDict | None = None) -> MigrationExecution</code></summary>

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
try:
    response = client.metastore_projects_locations_services_migration_executions_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MigrationExecution
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_migration_executions_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MigrationExecution
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody
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

**OnSuccess**: <code>[MigrationExecution](google_cloud_dataproc/models/migration_execution.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMigrationExecutionsGetErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_get_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_migration_executions_list(projects_id: str, locations_id: str, services_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListMigrationExecutionsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_services_migration_executions_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListMigrationExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_migration_executions_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListMigrationExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody
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

**OnSuccess**: <code>[ListMigrationExecutionsResponse](google_cloud_dataproc/models/list_migration_executions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMigrationExecutionsListErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_migration_executions_list_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_move_table_to_database(projects_id: str, locations_id: str, services_id: str, body: MoveTableToDatabaseRequest | MoveTableToDatabaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_move_table_to_database(
        "some example string", "some example string", "some example string", MoveTableToDatabaseRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_move_table_to_database(
        "some example string", "some example string", "some example string", MoveTableToDatabaseRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesMoveTableToDatabaseErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_move_table_to_database_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_patch(projects_id: str, locations_id: str, services_id: str, body: Service | ServiceDict, *, request_id: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_patch(
        "some example string", "some example string", "some example string", Service()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_patch(
        "some example string", "some example string", "some example string", Service()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesPatchErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesPatchErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_patch_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_query_metadata(projects_id: str, locations_id: str, services_id: str, body: QueryMetadataRequest | QueryMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_query_metadata(
        "some example string", "some example string", "some example string", QueryMetadataRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesQueryMetadataErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_query_metadata(
        "some example string", "some example string", "some example string", QueryMetadataRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesQueryMetadataErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesQueryMetadataErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_query_metadata_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_restore(projects_id: str, locations_id: str, services_id: str, body: RestoreServiceRequest | RestoreServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_restore(
        "some example string", "some example string", "some example string", RestoreServiceRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesRestoreErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_restore(
        "some example string", "some example string", "some example string", RestoreServiceRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesRestoreErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesRestoreErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_restore_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_set_iam_policy(projects_id: str, locations_id: str, services_id: str, body: SetIamPolicyRequest2 | SetIamPolicyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> Policy2</code></summary>

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
try:
    response = client.metastore_projects_locations_services_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest2()
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest2()
    )
    # TODO: Handle 'response' of type Policy2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesSetIamPolicyErrorBody
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

**OnSuccess**: <code>[Policy2](google_cloud_dataproc/models/policy2.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesSetIamPolicyErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_set_iam_policy_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_start_migration(projects_id: str, locations_id: str, services_id: str, body: StartMigrationRequest | StartMigrationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.metastore_projects_locations_services_start_migration(
        "some example string", "some example string", "some example string", StartMigrationRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesStartMigrationErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_start_migration(
        "some example string", "some example string", "some example string", StartMigrationRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesStartMigrationErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_dataproc/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesStartMigrationErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_start_migration_error.py)&#93;</code>

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
<summary><code>def metastore_projects_locations_services_test_iam_permissions(projects_id: str, locations_id: str, services_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

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
try:
    response = client.metastore_projects_locations_services_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.metastore_projects_locations_services_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody
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

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_dataproc/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_dataproc/core/exceptions.py)&#91;[MetastoreProjectsLocationsServicesTestIamPermissionsErrorBody](google_cloud_dataproc/errors/metastore_projects_locations_services_test_iam_permissions_error.py)&#93;</code>

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

