# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleCloudStorageTransferServiceClient](google_cloud_storage_transfer_service/client.py)

## GoogleServiceAccounts

> Source: [GoogleServiceAccounts](google_cloud_storage_transfer_service/apis/google_service_accounts.py)

<details>
<summary><code>def storagetransfer_google_service_accounts_get(project_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GoogleServiceAccount</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.google_service_accounts.storagetransfer_google_service_accounts_get("some example string")
    # TODO: Handle 'response' of type GoogleServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferGoogleServiceAccountsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.google_service_accounts.storagetransfer_google_service_accounts_get(
        "some example string"
    )
    # TODO: Handle 'response' of type GoogleServiceAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferGoogleServiceAccountsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud project that the Google service account is associated with. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleServiceAccount](google_cloud_storage_transfer_service/models/google_service_account.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferGoogleServiceAccountsGetErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_google_service_accounts_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](google_cloud_storage_transfer_service/apis/projects.py)

<details>
<summary><code>def storagetransfer_projects_agent_pools_create(projects_id: str, body: AgentPool | AgentPoolDict, *, agent_pool_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AgentPool</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an agent pool resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.storagetransfer_projects_agent_pools_create("some example string", AgentPool())
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.storagetransfer_projects_agent_pools_create(
        "some example string", AgentPool()
    )
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[AgentPool](google_cloud_storage_transfer_service/models/agent_pool.py) \| [AgentPoolDict](google_cloud_storage_transfer_service/models/agent_pool.py)</code> | The request body. |
| <code>agent_pool_id</code> | <code>str \| None</code> | Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](google_cloud_storage_transfer_service/models/agent_pool.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferProjectsAgentPoolsCreateErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_projects_agent_pools_delete(projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an agent pool.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.storagetransfer_projects_agent_pools_delete("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.storagetransfer_projects_agent_pools_delete(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>agent_pools_id</code> | <code>str</code> | Resource name segment (agentPoolsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferProjectsAgentPoolsDeleteErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_projects_agent_pools_get(projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AgentPool</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an agent pool.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.storagetransfer_projects_agent_pools_get("some example string", "some example string")
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.storagetransfer_projects_agent_pools_get(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>agent_pools_id</code> | <code>str</code> | Resource name segment (agentPoolsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](google_cloud_storage_transfer_service/models/agent_pool.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferProjectsAgentPoolsGetErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_projects_agent_pools_list(projects_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAgentPoolsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists agent pools.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.storagetransfer_projects_agent_pools_list("some example string")
    # TODO: Handle 'response' of type ListAgentPoolsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsListErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.storagetransfer_projects_agent_pools_list("some example string")
    # TODO: Handle 'response' of type ListAgentPoolsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>filter_</code> | <code>str \| None</code> | An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The list page size. The max allowed value is `256`.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The list page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAgentPoolsResponse](google_cloud_storage_transfer_service/models/list_agent_pools_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferProjectsAgentPoolsListErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_projects_agent_pools_patch(projects_id: str, agent_pools_id: str, body: AgentPool | AgentPoolDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AgentPool</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing agent pool resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.storagetransfer_projects_agent_pools_patch(
        "some example string", "some example string", AgentPool()
    )
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.storagetransfer_projects_agent_pools_patch(
        "some example string", "some example string", AgentPool()
    )
    # TODO: Handle 'response' of type AgentPool
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferProjectsAgentPoolsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>agent_pools_id</code> | <code>str</code> | Resource name segment (agentPoolsId). |
| <code>body</code> | <code>[AgentPool](google_cloud_storage_transfer_service/models/agent_pool.py) \| [AgentPoolDict](google_cloud_storage_transfer_service/models/agent_pool.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](google_cloud_storage_transfer_service/models/agent_pool.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferProjectsAgentPoolsPatchErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TransferJobs

> Source: [TransferJobs](google_cloud_storage_transfer_service/apis/transfer_jobs.py)

<details>
<summary><code>def storagetransfer_transfer_jobs_create(body: TransferJob | TransferJobDict, *, request_options: RequestOptionsOrDict | None = None) -> TransferJob</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transfer job that runs periodically.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_create(TransferJob())
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_create(TransferJob())
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferJob](google_cloud_storage_transfer_service/models/transfer_job.py) \| [TransferJobDict](google_cloud_storage_transfer_service/models/transfer_job.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](google_cloud_storage_transfer_service/models/transfer_job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsCreateErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_jobs_delete(transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_delete("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_delete(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_jobs_id</code> | <code>str</code> | Resource name segment (transferJobsId). |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud project that owns the job. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsDeleteErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_jobs_get(transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TransferJob</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a transfer job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_get("some example string", "some example string")
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_get(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_jobs_id</code> | <code>str</code> | Resource name segment (transferJobsId). |
| <code>project_id</code> | <code>str</code> | Required. The ID of the Google Cloud project that owns the job. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](google_cloud_storage_transfer_service/models/transfer_job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsGetErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_jobs_list(filter_: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTransferJobsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_list("some example string")
    # TODO: Handle 'response' of type ListTransferJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsListErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_list("some example string")
    # TODO: Handle 'response' of type ListTransferJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str</code> | Required. A list of query parameters specified as JSON text in the form of: `` { "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS", "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } `` The JSON formatting in the example is for display only; provide the query parameters without spaces or line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `jobNames` and `jobStatuses` are optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a particular bucket with `sinkBucket`. |
| <code>page_size</code> | <code>int \| None</code> | The list page size. The max allowed value is 256.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The list page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransferJobsResponse](google_cloud_storage_transfer_service/models/list_transfer_jobs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsListErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_jobs_patch(transfer_jobs_id: str, body: UpdateTransferJobRequest | UpdateTransferJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TransferJob</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_patch(
        "some example string", UpdateTransferJobRequest()
    )
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_patch(
        "some example string", UpdateTransferJobRequest()
    )
    # TODO: Handle 'response' of type TransferJob
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_jobs_id</code> | <code>str</code> | Resource name segment (transferJobsId). |
| <code>body</code> | <code>[UpdateTransferJobRequest](google_cloud_storage_transfer_service/models/update_transfer_job_request.py) \| [UpdateTransferJobRequestDict](google_cloud_storage_transfer_service/models/update_transfer_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](google_cloud_storage_transfer_service/models/transfer_job.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsPatchErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_jobs_run(transfer_jobs_id: str, body: RunTransferJobRequest | RunTransferJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_jobs.storagetransfer_transfer_jobs_run("some example string", RunTransferJobRequest())
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsRunErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_jobs.storagetransfer_transfer_jobs_run(
        "some example string", RunTransferJobRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferJobsRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_jobs_id</code> | <code>str</code> | Resource name segment (transferJobsId). |
| <code>body</code> | <code>[RunTransferJobRequest](google_cloud_storage_transfer_service/models/run_transfer_job_request.py) \| [RunTransferJobRequestDict](google_cloud_storage_transfer_service/models/run_transfer_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_storage_transfer_service/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferJobsRunErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TransferOperations

> Source: [TransferOperations](google_cloud_storage_transfer_service/apis/transfer_operations.py)

<details>
<summary><code>def storagetransfer_transfer_operations_cancel(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_operations.storagetransfer_transfer_operations_cancel("some example string", {})
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_operations.storagetransfer_transfer_operations_cancel(
        "some example string", {}
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsCancelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_operations_id</code> | <code>str</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferOperationsCancelErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_operations_get(transfer_operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
    response = client.transfer_operations.storagetransfer_transfer_operations_get("some example string")
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_operations.storagetransfer_transfer_operations_get("some example string")
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_operations_id</code> | <code>str</code> | Resource name segment (transferOperationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_storage_transfer_service/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferOperationsGetErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_operations_list(filter_: str, *, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListOperationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_operations.storagetransfer_transfer_operations_list("some example string")
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_operations.storagetransfer_transfer_operations_list("some example string")
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str</code> | Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern": "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern": "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime": "max_creation_time", "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is the only argument that is required. If specified, `jobNamePattern` and `operationNamePattern` must match the full job or operation name respectively. '*' is a wildcard matching 0 or more characters. `minCreationTime` and `maxCreationTime` should be timestamps encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED. |
| <code>page_size</code> | <code>int \| None</code> | The list page size. The max allowed value is 256.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The list page token.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](google_cloud_storage_transfer_service/models/list_operations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferOperationsListErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_operations_pause(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses a transfer operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_operations.storagetransfer_transfer_operations_pause("some example string", {})
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsPauseErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_operations.storagetransfer_transfer_operations_pause(
        "some example string", {}
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsPauseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_operations_id</code> | <code>str</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferOperationsPauseErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_pause_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def storagetransfer_transfer_operations_resume(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a transfer operation that is paused.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transfer_operations.storagetransfer_transfer_operations_resume("some example string", {})
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsResumeErrorBody
```

**Async**

```python
try:
    response = await async_client.transfer_operations.storagetransfer_transfer_operations_resume(
        "some example string", {}
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StoragetransferTransferOperationsResumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transfer_operations_id</code> | <code>str</code> | Resource name segment (transferOperationsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_storage_transfer_service/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_storage_transfer_service/core/exceptions.py)&#91;[StoragetransferTransferOperationsResumeErrorBody](google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_resume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_storage_transfer_service/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_storage_transfer_service/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

