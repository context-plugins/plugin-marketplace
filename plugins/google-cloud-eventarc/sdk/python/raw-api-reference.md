# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudEventarcClient](google_cloud_eventarc/client.py)

<details>
<summary><code>def eventarc_projects_locations_channel_connections_create(projects_id: str, locations_id: str, body: ChannelConnection | ChannelConnectionDict, *, channel_connection_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new ChannelConnection in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channel_connections_create(
    "some example string", "some example string", ChannelConnection()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_create(
    "some example string", "some example string", ChannelConnection()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[ChannelConnection](google_cloud_eventarc/models/channel_connection.py) \| [ChannelConnectionDict](google_cloud_eventarc/models/channel_connection.py)</code> | The request body. |
| <code>channel_connection_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the channel connection.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsChannelConnectionsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_delete(projects_id: str, locations_id: str, channel_connections_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelConnectionsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single ChannelConnection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channel_connections_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channel_connections_id</code> | <code>str</code> | Resource name segment (channelConnectionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsChannelConnectionsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_get(projects_id: str, locations_id: str, channel_connections_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ChannelConnection, EventarcProjectsLocationsChannelConnectionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single ChannelConnection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channel_connections_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChannelConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChannelConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channel_connections_id</code> | <code>str</code> | Resource name segment (channelConnectionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ChannelConnection](google_cloud_eventarc/models/channel_connection.py), [EventarcProjectsLocationsChannelConnectionsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ChannelConnection](google_cloud_eventarc/models/channel_connection.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_get_iam_policy(projects_id: str, locations_id: str, channel_connections_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channel_connections_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channel_connections_id</code> | <code>str</code> | Resource name segment (channelConnectionsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListChannelConnectionsResponse, EventarcProjectsLocationsChannelConnectionsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channel connections.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channel_connections_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of channel connections to return on each page. Note: The service may send fewer responses.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListChannelConnectionsResponse](google_cloud_eventarc/models/list_channel_connections_response.py), [EventarcProjectsLocationsChannelConnectionsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListChannelConnectionsResponse](google_cloud_eventarc/models/list_channel_connections_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_set_iam_policy(projects_id: str, locations_id: str, channel_connections_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channel_connections_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channel_connections_id</code> | <code>str</code> | Resource name segment (channelConnectionsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channel_connections_test_iam_permissions(projects_id: str, locations_id: str, channel_connections_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channel_connections_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channel_connections_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channel_connections_id</code> | <code>str</code> | Resource name segment (channelConnectionsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelConnectionsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channel_connections_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_create(projects_id: str, locations_id: str, body: Channel | ChannelDict, *, channel_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new channel in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channels_create(
    "some example string", "some example string", Channel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_create(
    "some example string", "some example string", Channel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Channel](google_cloud_eventarc/models/channel.py) \| [ChannelDict](google_cloud_eventarc/models/channel.py)</code> | The request body. |
| <code>channel_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the channel.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsChannelsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_delete(projects_id: str, locations_id: str, channels_id: str, *, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channels_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsChannelsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_get(projects_id: str, locations_id: str, channels_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Channel, EventarcProjectsLocationsChannelsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channels_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Channel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Channel](google_cloud_eventarc/models/channel.py), [EventarcProjectsLocationsChannelsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Channel](google_cloud_eventarc/models/channel.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_get_iam_policy(projects_id: str, locations_id: str, channels_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsChannelsGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channels_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsChannelsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_list(projects_id: str, locations_id: str, *, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListChannelsResponse, EventarcProjectsLocationsChannelsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channels.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channels_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>order_by</code> | <code>str \| None</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of channels to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListChannelsResponse](google_cloud_eventarc/models/list_channels_response.py), [EventarcProjectsLocationsChannelsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListChannelsResponse](google_cloud_eventarc/models/list_channels_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_patch(projects_id: str, locations_id: str, channels_id: str, body: Channel | ChannelDict, *, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsChannelsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_channels_patch(
    "some example string", "some example string", "some example string", Channel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_patch(
    "some example string", "some example string", "some example string", Channel()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>body</code> | <code>[Channel](google_cloud_eventarc/models/channel.py) \| [ChannelDict](google_cloud_eventarc/models/channel.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsChannelsPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_set_iam_policy(projects_id: str, locations_id: str, channels_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsChannelsSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channels_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsChannelsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_channels_test_iam_permissions(projects_id: str, locations_id: str, channels_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_channels_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_channels_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>channels_id</code> | <code>str</code> | Resource name segment (channelsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_channels_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_create(projects_id: str, locations_id: str, body: Enrollment | EnrollmentDict, *, enrollment_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Enrollment in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_enrollments_create(
    "some example string", "some example string", Enrollment()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_create(
    "some example string", "some example string", Enrollment()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Enrollment](google_cloud_eventarc/models/enrollment.py) \| [EnrollmentDict](google_cloud_eventarc/models/enrollment.py)</code> | The request body. |
| <code>enrollment_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the Enrollment. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsEnrollmentsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_delete(projects_id: str, locations_id: str, enrollments_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_enrollments_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server.<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsEnrollmentsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_get(projects_id: str, locations_id: str, enrollments_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Enrollment, EventarcProjectsLocationsEnrollmentsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_enrollments_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Enrollment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Enrollment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Enrollment](google_cloud_eventarc/models/enrollment.py), [EventarcProjectsLocationsEnrollmentsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Enrollment](google_cloud_eventarc/models/enrollment.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_get_iam_policy(projects_id: str, locations_id: str, enrollments_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_enrollments_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListEnrollmentsResponse, EventarcProjectsLocationsEnrollmentsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Enrollments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_enrollments_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEnrollmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListEnrollmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListEnrollmentsResponse](google_cloud_eventarc/models/list_enrollments_response.py), [EventarcProjectsLocationsEnrollmentsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListEnrollmentsResponse](google_cloud_eventarc/models/list_enrollments_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_patch(projects_id: str, locations_id: str, enrollments_id: str, body: Enrollment | EnrollmentDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsEnrollmentsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_enrollments_patch(
    "some example string", "some example string", "some example string", Enrollment()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_patch(
    "some example string", "some example string", "some example string", Enrollment()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>body</code> | <code>[Enrollment](google_cloud_eventarc/models/enrollment.py) \| [EnrollmentDict](google_cloud_eventarc/models/enrollment.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, `update_mask` is ignored.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsEnrollmentsPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_set_iam_policy(projects_id: str, locations_id: str, enrollments_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_enrollments_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_enrollments_test_iam_permissions(projects_id: str, locations_id: str, enrollments_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_enrollments_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_enrollments_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>enrollments_id</code> | <code>str</code> | Resource name segment (enrollmentsId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsEnrollmentsTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_enrollments_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Location, EventarcProjectsLocationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Location](google_cloud_eventarc/models/location.py), [EventarcProjectsLocationsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Location](google_cloud_eventarc/models/location.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_get_google_channel_config(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleChannelConfig, EventarcProjectsLocationsGetGoogleChannelConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_get_google_channel_config(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleChannelConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGetGoogleChannelConfigErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_get_google_channel_config(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleChannelConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGetGoogleChannelConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleChannelConfig](google_cloud_eventarc/models/google_channel_config.py), [EventarcProjectsLocationsGetGoogleChannelConfigErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_get_google_channel_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleChannelConfig](google_cloud_eventarc/models/google_channel_config.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGetGoogleChannelConfigErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_get_google_channel_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_create(projects_id: str, locations_id: str, body: GoogleApiSource | GoogleApiSourceDict, *, google_api_source_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new GoogleApiSource in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_create(
    "some example string", "some example string", GoogleApiSource()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_create(
    "some example string", "some example string", GoogleApiSource()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[GoogleApiSource](google_cloud_eventarc/models/google_api_source.py) \| [GoogleApiSourceDict](google_cloud_eventarc/models/google_api_source.py)</code> | The request body. |
| <code>google_api_source_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_delete(projects_id: str, locations_id: str, google_api_sources_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but no action will be taken on the server.<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the current etag on the resource.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_get(projects_id: str, locations_id: str, google_api_sources_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleApiSource, EventarcProjectsLocationsGoogleApiSourcesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleApiSource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleApiSource
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleApiSource](google_cloud_eventarc/models/google_api_source.py), [EventarcProjectsLocationsGoogleApiSourcesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleApiSource](google_cloud_eventarc/models/google_api_source.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_get_iam_policy(projects_id: str, locations_id: str, google_api_sources_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListGoogleApiSourcesResponse, EventarcProjectsLocationsGoogleApiSourcesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List GoogleApiSources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGoogleApiSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGoogleApiSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListGoogleApiSourcesResponse](google_cloud_eventarc/models/list_google_api_sources_response.py), [EventarcProjectsLocationsGoogleApiSourcesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListGoogleApiSourcesResponse](google_cloud_eventarc/models/list_google_api_sources_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_patch(projects_id: str, locations_id: str, google_api_sources_id: str, body: GoogleApiSource | GoogleApiSourceDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_patch(
    "some example string", "some example string", "some example string", GoogleApiSource()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_patch(
    "some example string", "some example string", "some example string", GoogleApiSource()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>body</code> | <code>[GoogleApiSource](google_cloud_eventarc/models/google_api_source.py) \| [GoogleApiSourceDict](google_cloud_eventarc/models/google_api_source.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be created. In this situation, `update_mask` is ignored.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_set_iam_policy(projects_id: str, locations_id: str, google_api_sources_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_google_api_sources_test_iam_permissions(projects_id: str, locations_id: str, google_api_sources_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_google_api_sources_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_google_api_sources_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>google_api_sources_id</code> | <code>str</code> | Resource name segment (googleApiSourcesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_google_api_sources_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListLocationsResponse, EventarcProjectsLocationsListErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsListErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListLocationsResponse](google_cloud_eventarc/models/list_locations_response.py), [EventarcProjectsLocationsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListLocationsResponse](google_cloud_eventarc/models/list_locations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_create(projects_id: str, locations_id: str, body: MessageBus | MessageBusDict, *, message_bus_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new MessageBus in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_create(
    "some example string", "some example string", MessageBus()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_create(
    "some example string", "some example string", MessageBus()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[MessageBus](google_cloud_eventarc/models/message_bus.py) \| [MessageBusDict](google_cloud_eventarc/models/message_bus.py)</code> | The request body. |
| <code>message_bus_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsMessageBusesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_delete(projects_id: str, locations_id: str, message_buses_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single message bus.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server.<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsMessageBusesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_get(projects_id: str, locations_id: str, message_buses_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageBus, EventarcProjectsLocationsMessageBusesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single MessageBus.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageBus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageBus
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[MessageBus](google_cloud_eventarc/models/message_bus.py), [EventarcProjectsLocationsMessageBusesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageBus](google_cloud_eventarc/models/message_bus.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_get_iam_policy(projects_id: str, locations_id: str, message_buses_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_message_buses_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListMessageBusesResponse, EventarcProjectsLocationsMessageBusesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message buses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMessageBusesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMessageBusesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListMessageBusesResponse](google_cloud_eventarc/models/list_message_buses_response.py), [EventarcProjectsLocationsMessageBusesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListMessageBusesResponse](google_cloud_eventarc/models/list_message_buses_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_list_enrollments(projects_id: str, locations_id: str, message_buses_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListMessageBusEnrollmentsResponse, EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message bus enrollments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_list_enrollments(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMessageBusEnrollmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_list_enrollments(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListMessageBusEnrollmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListMessageBusEnrollmentsResponse](google_cloud_eventarc/models/list_message_bus_enrollments_response.py), [EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_enrollments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListMessageBusEnrollmentsResponse](google_cloud_eventarc/models/list_message_bus_enrollments_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesListEnrollmentsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_list_enrollments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_patch(projects_id: str, locations_id: str, message_buses_id: str, body: MessageBus | MessageBusDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsMessageBusesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single message bus.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_message_buses_patch(
    "some example string", "some example string", "some example string", MessageBus()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_patch(
    "some example string", "some example string", "some example string", MessageBus()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>body</code> | <code>[MessageBus](google_cloud_eventarc/models/message_bus.py) \| [MessageBusDict](google_cloud_eventarc/models/message_bus.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created. In this situation, `update_mask` is ignored.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsMessageBusesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_set_iam_policy(projects_id: str, locations_id: str, message_buses_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_message_buses_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_message_buses_test_iam_permissions(projects_id: str, locations_id: str, message_buses_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_message_buses_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_message_buses_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>message_buses_id</code> | <code>str</code> | Resource name segment (messageBusesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsMessageBusesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_message_buses_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, EventarcProjectsLocationsOperationsCancelErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsCancelErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;Any, [EventarcProjectsLocationsOperationsCancelErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsOperationsCancelErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, EventarcProjectsLocationsOperationsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsDeleteErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;Any, [EventarcProjectsLocationsOperationsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsOperationsDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsOperationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsGetErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsOperationsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsOperationsGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningListOperationsResponse, EventarcProjectsLocationsOperationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsOperationsListErrorBody
```

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
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningListOperationsResponse](google_cloud_eventarc/models/google_longrunning_list_operations_response.py), [EventarcProjectsLocationsOperationsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningListOperationsResponse](google_cloud_eventarc/models/google_longrunning_list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsOperationsListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_create(projects_id: str, locations_id: str, body: Pipeline | PipelineDict, *, pipeline_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Pipeline in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_pipelines_create(
    "some example string", "some example string", Pipeline()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_create(
    "some example string", "some example string", Pipeline()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Pipeline](google_cloud_eventarc/models/pipeline.py) \| [PipelineDict](google_cloud_eventarc/models/pipeline.py)</code> | The request body. |
| <code>pipeline_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the Pipeline. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsPipelinesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_delete(projects_id: str, locations_id: str, pipelines_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_pipelines_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the Pipeline is not found, the request will succeed but no action will be taken on the server.<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the resource.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsPipelinesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_get(projects_id: str, locations_id: str, pipelines_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Pipeline, EventarcProjectsLocationsPipelinesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_pipelines_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Pipeline
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Pipeline](google_cloud_eventarc/models/pipeline.py), [EventarcProjectsLocationsPipelinesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Pipeline](google_cloud_eventarc/models/pipeline.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_get_iam_policy(projects_id: str, locations_id: str, pipelines_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_pipelines_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPipelinesResponse, EventarcProjectsLocationsPipelinesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List pipelines.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_pipelines_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPipelinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPipelinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. The filter field that the list request will filter on. Possible filters are described in https://google.aip.dev/160.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. The maximum number of results to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListPipelinesResponse](google_cloud_eventarc/models/list_pipelines_response.py), [EventarcProjectsLocationsPipelinesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPipelinesResponse](google_cloud_eventarc/models/list_pipelines_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_patch(projects_id: str, locations_id: str, pipelines_id: str, body: Pipeline | PipelineDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsPipelinesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_pipelines_patch(
    "some example string", "some example string", "some example string", Pipeline()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_patch(
    "some example string", "some example string", "some example string", Pipeline()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>body</code> | <code>[Pipeline](google_cloud_eventarc/models/pipeline.py) \| [PipelineDict](google_cloud_eventarc/models/pipeline.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In this situation, `update_mask` is ignored.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsPipelinesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_set_iam_policy(projects_id: str, locations_id: str, pipelines_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_pipelines_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_pipelines_test_iam_permissions(projects_id: str, locations_id: str, pipelines_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_pipelines_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_pipelines_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>pipelines_id</code> | <code>str</code> | Resource name segment (pipelinesId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsPipelinesTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_pipelines_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_providers_get(projects_id: str, locations_id: str, providers_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Provider, EventarcProjectsLocationsProvidersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Provider.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_providers_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Provider
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsProvidersGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_providers_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Provider
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsProvidersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>providers_id</code> | <code>str</code> | Resource name segment (providersId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Provider](google_cloud_eventarc/models/provider.py), [EventarcProjectsLocationsProvidersGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_providers_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Provider](google_cloud_eventarc/models/provider.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsProvidersGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_providers_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_providers_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListProvidersResponse, EventarcProjectsLocationsProvidersListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List providers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_providers_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListProvidersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsProvidersListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_providers_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListProvidersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsProvidersListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | The filter field that the list request will filter on.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of providers to return on each page.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListProvidersResponse](google_cloud_eventarc/models/list_providers_response.py), [EventarcProjectsLocationsProvidersListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_providers_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListProvidersResponse](google_cloud_eventarc/models/list_providers_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsProvidersListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_providers_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_create(projects_id: str, locations_id: str, body: Trigger | TriggerDict, *, trigger_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new trigger in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_triggers_create(
    "some example string", "some example string", Trigger()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_create(
    "some example string", "some example string", Trigger()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Trigger](google_cloud_eventarc/models/trigger.py) \| [TriggerDict](google_cloud_eventarc/models/trigger.py)</code> | The request body. |
| <code>trigger_id</code> | <code>str \| None</code> | Required. The user-provided ID to be assigned to the trigger.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsTriggersCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersCreateErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_delete(projects_id: str, locations_id: str, triggers_id: str, *, allow_missing: bool | None = None, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_triggers_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>allow_missing</code> | <code>bool \| None</code> | If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server.<br>**Default**: <code>None</code> |
| <code>etag</code> | <code>str \| None</code> | If provided, the trigger will only be deleted if the etag matches the current etag on the resource.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsTriggersDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersDeleteErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_get(projects_id: str, locations_id: str, triggers_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Trigger, EventarcProjectsLocationsTriggersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_triggers_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Trigger
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Trigger
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Trigger](google_cloud_eventarc/models/trigger.py), [EventarcProjectsLocationsTriggersGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Trigger](google_cloud_eventarc/models/trigger.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersGetErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_get_iam_policy(projects_id: str, locations_id: str, triggers_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsTriggersGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_triggers_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsTriggersGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersGetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTriggersResponse, EventarcProjectsLocationsTriggersListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List triggers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_triggers_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTriggersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTriggersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of triggers to return on each page. Note: The service may send fewer.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[ListTriggersResponse](google_cloud_eventarc/models/list_triggers_response.py), [EventarcProjectsLocationsTriggersListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTriggersResponse](google_cloud_eventarc/models/list_triggers_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersListErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_patch(projects_id: str, locations_id: str, triggers_id: str, body: Trigger | TriggerDict, *, allow_missing: bool | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleLongrunningOperation, EventarcProjectsLocationsTriggersPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_triggers_patch(
    "some example string", "some example string", "some example string", Trigger()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_patch(
    "some example string", "some example string", "some example string", Trigger()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleLongrunningOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>body</code> | <code>[Trigger](google_cloud_eventarc/models/trigger.py) \| [TriggerDict](google_cloud_eventarc/models/trigger.py)</code> | The request body. |
| <code>allow_missing</code> | <code>bool \| None</code> | If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored.<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. If set, validate the request and preview the review, but do not post it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py), [EventarcProjectsLocationsTriggersPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleLongrunningOperation](google_cloud_eventarc/models/google_longrunning_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersPatchErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_set_iam_policy(projects_id: str, locations_id: str, triggers_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Policy, EventarcProjectsLocationsTriggersSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_triggers_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_set_iam_policy(
    "some example string", "some example string", "some example string", SetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Policy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>body</code> | <code>[SetIamPolicyRequest](google_cloud_eventarc/models/set_iam_policy_request.py) \| [SetIamPolicyRequestDict](google_cloud_eventarc/models/set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[Policy](google_cloud_eventarc/models/policy.py), [EventarcProjectsLocationsTriggersSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Policy](google_cloud_eventarc/models/policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersSetIamPolicyErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_triggers_test_iam_permissions(projects_id: str, locations_id: str, triggers_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestIamPermissionsResponse, EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.eventarc_projects_locations_triggers_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_triggers_test_iam_permissions(
    "some example string", "some example string", "some example string", TestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>triggers_id</code> | <code>str</code> | Resource name segment (triggersId). |
| <code>body</code> | <code>[TestIamPermissionsRequest](google_cloud_eventarc/models/test_iam_permissions_request.py) \| [TestIamPermissionsRequestDict](google_cloud_eventarc/models/test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py), [EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestIamPermissionsResponse](google_cloud_eventarc/models/test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsTriggersTestIamPermissionsErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_triggers_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def eventarc_projects_locations_update_google_channel_config(projects_id: str, locations_id: str, body: GoogleChannelConfig | GoogleChannelConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GoogleChannelConfig, EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleChannelConfig

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.eventarc_projects_locations_update_google_channel_config(
    "some example string", "some example string", GoogleChannelConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleChannelConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.eventarc_projects_locations_update_google_channel_config(
    "some example string", "some example string", GoogleChannelConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GoogleChannelConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[GoogleChannelConfig](google_cloud_eventarc/models/google_channel_config.py) \| [GoogleChannelConfigDict](google_cloud_eventarc/models/google_channel_config.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_eventarc/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_eventarc/core/results.py)&#91;[GoogleChannelConfig](google_cloud_eventarc/models/google_channel_config.py), [EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_update_google_channel_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GoogleChannelConfig](google_cloud_eventarc/models/google_channel_config.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[EventarcProjectsLocationsUpdateGoogleChannelConfigErrorBody](google_cloud_eventarc/errors/eventarc_projects_locations_update_google_channel_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_eventarc/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_eventarc/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

