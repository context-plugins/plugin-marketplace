# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleCloudTasksClient](google_cloud_tasks/client.py)

<details>
<summary><code>def cloudtasks_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Location</code></summary>

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
    response = client.cloudtasks_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsGetErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](google_cloud_tasks/models/location.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsGetErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_get_cmek_config(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CmekConfig</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By default there is no `kms_key` configured.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_get_cmek_config("some example string", "some example string")
    # TODO: Handle 'response' of type CmekConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsGetCmekConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_get_cmek_config(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CmekConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsGetCmekConfigErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CmekConfig](google_cloud_tasks/models/cmek_config.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsGetCmekConfigErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_get_cmek_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListLocationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of results to return. If not set, the service selects a default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](google_cloud_tasks/models/list_locations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsListErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
    response = client.cloudtasks_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsOperationsGetErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_tasks/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsOperationsGetErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_operations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_create(projects_id: str, locations_id: str, body: Queue | QueueDict, *, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_create("some example string", "some example string", Queue())
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_create(
        "some example string", "some example string", Queue()
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesCreateErrorBody
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
| <code>body</code> | <code>[Queue](google_cloud_tasks/models/queue.py) \| [QueueDict](google_cloud_tasks/models/queue.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesCreateErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_delete(projects_id: str, locations_id: str, queues_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue was successfully created with the name of the previously deleted queue. Otherwise, your queue did not successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesDeleteErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesDeleteErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_get(projects_id: str, locations_id: str, queues_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a queue.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesGetErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesGetErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_get_iam_policy(projects_id: str, locations_id: str, queues_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_get_iam_policy(
        "some example string", "some example string", "some example string", GetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[GetIamPolicyRequest](google_cloud_tasks/models/get_iam_policy_request.py) \| [GetIamPolicyRequestDict](google_cloud_tasks/models/get_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](google_cloud_tasks/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_get_iam_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListQueuesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists queues. Queues are returned in lexicographical order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListQueuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListQueuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters). Sample filter "state: PAUSED". Note that using filters might cause fewer queues than the requested page_size to be returned.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Requested page size. The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListQueuesResponse](google_cloud_tasks/models/list_queues_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesListErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_patch(projects_id: str, locations_id: str, queues_id: str, body: Queue | QueueDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_patch(
        "some example string", "some example string", "some example string", Queue()
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_patch(
        "some example string", "some example string", "some example string", Queue()
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPatchErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[Queue](google_cloud_tasks/models/queue.py) \| [QueueDict](google_cloud_tasks/models/queue.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | A mask used to specify which fields of the queue are being updated. If empty, then all fields will be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesPatchErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_pause(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_pause(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPauseErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_pause(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPauseErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesPauseErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_pause_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_purge(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_purge(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPurgeErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_purge(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesPurgeErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesPurgeErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_purge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_resume(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Queue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_resume(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesResumeErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_resume(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Queue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesResumeErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Queue](google_cloud_tasks/models/queue.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesResumeErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_resume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_set_iam_policy(projects_id: str, locations_id: str, queues_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_tasks/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_tasks/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](google_cloud_tasks/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_set_iam_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_batch_create(projects_id: str, locations_id: str, queues_id: str, body: BatchCreateTasksRequest | BatchCreateTasksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100 tasks can be created in a single batch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_batch_create(
        "some example string", "some example string", "some example string", BatchCreateTasksRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_batch_create(
        "some example string", "some example string", "some example string", BatchCreateTasksRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[BatchCreateTasksRequest](google_cloud_tasks/models/batch_create_tasks_request.py) \| [BatchCreateTasksRequestDict](google_cloud_tasks/models/batch_create_tasks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_tasks/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_batch_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_batch_delete(projects_id: str, locations_id: str, queues_id: str, body: BatchDeleteTasksRequest | BatchDeleteTasksRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A maximum of 1000 tasks can be deleted in a batch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_batch_delete(
        "some example string", "some example string", "some example string", BatchDeleteTasksRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_batch_delete(
        "some example string", "some example string", "some example string", BatchDeleteTasksRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[BatchDeleteTasksRequest](google_cloud_tasks/models/batch_delete_tasks_request.py) \| [BatchDeleteTasksRequestDict](google_cloud_tasks/models/batch_delete_tasks_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_tasks/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_batch_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_buffer(projects_id: str, locations_id: str, queues_id: str, task_id: str, body: BufferTaskRequest | BufferTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BufferTaskResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_buffer(
        "some example string", "some example string", "some example string", "some example string", BufferTaskRequest()
    )
    # TODO: Handle 'response' of type BufferTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBufferErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_buffer(
        "some example string", "some example string", "some example string", "some example string", BufferTaskRequest()
    )
    # TODO: Handle 'response' of type BufferTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksBufferErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>task_id</code> | <code>str</code> | Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID for the task. |
| <code>body</code> | <code>[BufferTaskRequest](google_cloud_tasks/models/buffer_task_request.py) \| [BufferTaskRequestDict](google_cloud_tasks/models/buffer_task_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BufferTaskResponse](google_cloud_tasks/models/buffer_task_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksBufferErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_buffer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_create(projects_id: str, locations_id: str, queues_id: str, body: CreateTaskRequest | CreateTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Task</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_create(
        "some example string", "some example string", "some example string", CreateTaskRequest()
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_create(
        "some example string", "some example string", "some example string", CreateTaskRequest()
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksCreateErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[CreateTaskRequest](google_cloud_tasks/models/create_task_request.py) \| [CreateTaskRequestDict](google_cloud_tasks/models/create_task_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Task](google_cloud_tasks/models/task.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksCreateErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_delete(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>tasks_id</code> | <code>str</code> | Resource name segment (tasksId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_get(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, *, response_view: ResponseView2OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Task</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted. A `GetTask` request for a deleted task returns a `NOT_FOUND` error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksGetErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>tasks_id</code> | <code>str</code> | Resource name segment (tasksId). |
| <code>response_view</code> | <code>[ResponseView2OrStr](google_cloud_tasks/models/enums/response_view2.py) \| None</code> | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Task](google_cloud_tasks/models/task.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksGetErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_list(projects_id: str, locations_id: str, queues_id: str, *, page_size: int | None = None, page_token: str | None = None, response_view: ResponseView2OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTasksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksListErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>page_size</code> | <code>int \| None</code> | Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If unspecified, the page size will be the maximum.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method. The page token is valid for only 2 hours.<br>**Default**: <code>None</code> |
| <code>response_view</code> | <code>[ResponseView2OrStr](google_cloud_tasks/models/enums/response_view2.py) \| None</code> | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTasksResponse](google_cloud_tasks/models/list_tasks_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksListErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_tasks_run(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, body: RunTaskRequest | RunTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Task</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_tasks_run(
        "some example string", "some example string", "some example string", "some example string", RunTaskRequest()
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksRunErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_tasks_run(
        "some example string", "some example string", "some example string", "some example string", RunTaskRequest()
    )
    # TODO: Handle 'response' of type Task
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTasksRunErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>tasks_id</code> | <code>str</code> | Resource name segment (tasksId). |
| <code>body</code> | <code>[RunTaskRequest](google_cloud_tasks/models/run_task_request.py) \| [RunTaskRequestDict](google_cloud_tasks/models/run_task_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Task](google_cloud_tasks/models/task.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTasksRunErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_queues_test_iam_permissions(projects_id: str, locations_id: str, queues_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_queues_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_queues_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody
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
| <code>queues_id</code> | <code>str</code> | Resource name segment (queuesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_tasks/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_tasks/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_tasks/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_queues_test_iam_permissions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudtasks_projects_locations_update_cmek_config(projects_id: str, locations_id: str, body: CmekConfig | CmekConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CmekConfig</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks location (Creates if the key does not already exist). All new tasks created in the location will be encrypted at-rest with the KMS-key provided in the config.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudtasks_projects_locations_update_cmek_config(
        "some example string", "some example string", CmekConfig()
    )
    # TODO: Handle 'response' of type CmekConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsUpdateCmekConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudtasks_projects_locations_update_cmek_config(
        "some example string", "some example string", CmekConfig()
    )
    # TODO: Handle 'response' of type CmekConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudtasksProjectsLocationsUpdateCmekConfigErrorBody
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
| <code>body</code> | <code>[CmekConfig](google_cloud_tasks/models/cmek_config.py) \| [CmekConfigDict](google_cloud_tasks/models/cmek_config.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | List of fields to be updated in this request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_tasks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CmekConfig](google_cloud_tasks/models/cmek_config.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_tasks/core/exceptions.py)&#91;[CloudtasksProjectsLocationsUpdateCmekConfigErrorBody](google_cloud_tasks/errors/cloudtasks_projects_locations_update_cmek_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_tasks/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_tasks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

