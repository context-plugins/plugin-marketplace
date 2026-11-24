# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleCloudBuildClient](google_cloud_build/client.py)

<details>
<summary><code>def cloudbuild_projects_locations_connections_create(projects_id: str, locations_id: str, body: Connection | ConnectionDict, *, connection_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_create(
        "some example string", "some example string", Connection()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_create(
        "some example string", "some example string", Connection()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Connection](google_cloud_build/models/connection.py) \| [ConnectionDict](google_cloud_build/models/connection.py)</code> | The request body. |
| <code>connection_id</code> | <code>str \| None</code> | Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsCreateErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_delete(projects_id: str, locations_id: str, connections_id: str, *, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>etag</code> | <code>str \| None</code> | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | If set, validate the request, but do not actually post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsDeleteErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_fetch_linkable_repositories(projects_id: str, locations_id: str, connections_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FetchLinkableRepositoriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_fetch_linkable_repositories(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FetchLinkableRepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_fetch_linkable_repositories(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FetchLinkableRepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>page_size</code> | <code>int \| None</code> | Number of results to return in the list. Default to 20.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Page start.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchLinkableRepositoriesResponse](google_cloud_build/models/fetch_linkable_repositories_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_fetch_linkable_repositories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_get(projects_id: str, locations_id: str, connections_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Connection</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Connection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Connection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Connection](google_cloud_build/models/connection.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsGetErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_get_iam_policy(projects_id: str, locations_id: str, connections_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

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
    response = client.cloudbuild_projects_locations_connections_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_get_iam_policy(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](google_cloud_build/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_get_iam_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListConnectionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Connections in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListConnectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListConnectionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | Number of results to return in the list.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Page start.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListConnectionsResponse](google_cloud_build/models/list_connections_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsListErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_patch(projects_id: str, locations_id: str, connections_id: str, body: Connection | ConnectionDict, *, allow_missing: bool | None = None, etag: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_patch(
        "some example string", "some example string", "some example string", Connection()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_patch(
        "some example string", "some example string", "some example string", Connection()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[Connection](google_cloud_build/models/connection.py) \| [ConnectionDict](google_cloud_build/models/connection.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | The list of fields to be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsPatchErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_process_webhook(projects_id: str, locations_id: str, body: HttpBody | HttpBodyDict, *, webhook_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ProcessWebhook is called by the external SCM for notifying of events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_process_webhook(
        "some example string", "some example string", HttpBody()
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_process_webhook(
        "some example string", "some example string", HttpBody()
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[HttpBody](google_cloud_build/models/http_body.py) \| [HttpBodyDict](google_cloud_build/models/http_body.py)</code> | The request body. |
| <code>webhook_key</code> | <code>str \| None</code> | Arbitrary additional key to find the matching repository for a webhook event if needed.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_process_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_access_read_token(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> FetchReadTokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read token of a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_access_read_token(
        "some example string", "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type FetchReadTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_access_read_token(
        "some example string", "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type FetchReadTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>repositories_id</code> | <code>str</code> | Resource name segment (repositoriesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchReadTokenResponse](google_cloud_build/models/fetch_read_token_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_access_read_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_access_read_write_token(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> FetchReadWriteTokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read/write token of a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_access_read_write_token(
        "some example string", "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type FetchReadWriteTokenResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_access_read_write_token(
        "some example string", "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type FetchReadWriteTokenResponse
except ApiError as e:
    # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody
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
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>repositories_id</code> | <code>str</code> | Resource name segment (repositoriesId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchReadWriteTokenResponse](google_cloud_build/models/fetch_read_write_token_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_access_read_write_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_batch_create(projects_id: str, locations_id: str, connections_id: str, body: BatchCreateRepositoriesRequest | BatchCreateRepositoriesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple repositories inside a connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_batch_create(
        "some example string", "some example string", "some example string", BatchCreateRepositoriesRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_batch_create(
        "some example string", "some example string", "some example string", BatchCreateRepositoriesRequest()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[BatchCreateRepositoriesRequest](google_cloud_build/models/batch_create_repositories_request.py) \| [BatchCreateRepositoriesRequestDict](google_cloud_build/models/batch_create_repositories_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_batch_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_create(projects_id: str, locations_id: str, connections_id: str, body: Repository | RepositoryDict, *, repository_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_create(
        "some example string", "some example string", "some example string", Repository()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_create(
        "some example string", "some example string", "some example string", Repository()
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[Repository](google_cloud_build/models/repository.py) \| [RepositoryDict](google_cloud_build/models/repository.py)</code> | The request body. |
| <code>repository_id</code> | <code>str \| None</code> | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_create_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_delete(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_delete(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>repositories_id</code> | <code>str</code> | Resource name segment (repositoriesId). |
| <code>etag</code> | <code>str \| None</code> | The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | If set, validate the request, but do not actually post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_fetch_git_refs(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, page_size: int | None = None, page_token: str | None = None, ref_type: RefTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> FetchGitRefsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the list of branches or tags for a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_fetch_git_refs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FetchGitRefsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_fetch_git_refs(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type FetchGitRefsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>repositories_id</code> | <code>str</code> | Resource name segment (repositoriesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Number of results to return in the list. Default to 20.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page start.<br>**Default**: <code>None</code> |
| <code>ref_type</code> | <code>[RefTypeOrStr](google_cloud_build/models/enums/ref_type.py) \| None</code> | Type of refs to fetch<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchGitRefsResponse](google_cloud_build/models/fetch_git_refs_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_get(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Repository</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_get(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>repositories_id</code> | <code>str</code> | Resource name segment (repositoriesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Repository](google_cloud_build/models/repository.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_repositories_list(projects_id: str, locations_id: str, connections_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListRepositoriesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Repositories in a given connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_repositories_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListRepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_repositories_list(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListRepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>filter_</code> | <code>str \| None</code> | A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of results to return in the list.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Page start.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRepositoriesResponse](google_cloud_build/models/list_repositories_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_set_iam_policy(projects_id: str, locations_id: str, connections_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Policy</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_set_iam_policy(
        "some example string", "some example string", "some example string", SetIamPolicyRequest()
    )
    # TODO: Handle 'response' of type Policy
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_build/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_build/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](google_cloud_build/models/policy.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_set_iam_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_connections_test_iam_permissions(projects_id: str, locations_id: str, connections_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestIamPermissionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_connections_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_connections_test_iam_permissions(
        "some example string", "some example string", "some example string", TestIamPermissionsRequest()
    )
    # TODO: Handle 'response' of type TestIamPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connections_id</code> | <code>str</code> | Resource name segment (connectionsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_build/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_build/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](google_cloud_build/models/test_iam_permissions_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_connections_test_iam_permissions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Location</code></summary>

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
    response = client.cloudbuild_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_get("some example string", "some example string")
    # TODO: Handle 'response' of type Location
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](google_cloud_build/models/location.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsGetErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListLocationsResponse</code></summary>

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
    response = client.cloudbuild_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_list("some example string")
    # TODO: Handle 'response' of type ListLocationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsListErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](google_cloud_build/models/list_locations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsListErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cloudbuild_projects_locations_operations_cancel(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_operations_cancel(
        "some example string", "some example string", "some example string", {}
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsOperationsCancelErrorBody
```

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
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsOperationsCancelErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_operations_cancel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cloudbuild_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
    response = client.cloudbuild_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.cloudbuild_projects_locations_operations_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CloudbuildProjectsLocationsOperationsGetErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](google_cloud_build/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_build/core/exceptions.py)&#91;[CloudbuildProjectsLocationsOperationsGetErrorBody](google_cloud_build/errors/cloudbuild_projects_locations_operations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_build/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

