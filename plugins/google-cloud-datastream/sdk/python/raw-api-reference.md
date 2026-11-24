# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudDatastreamClient](google_cloud_datastream/client.py)

<details>
<summary><code>def datastream_projects_locations_connection_profiles_create(projects_id: str, locations_id: str, body: ConnectionProfile | ConnectionProfileDict, *, connection_profile_id: str | None = None, force: bool | None = None, request_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a connection profile in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_create(
    "some example string", "some example string", ConnectionProfile()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_create(
    "some example string", "some example string", ConnectionProfile()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[ConnectionProfile](google_cloud_datastream/models/connection_profile.py) \| [ConnectionProfileDict](google_cloud_datastream/models/connection_profile.py)</code> | The request body. |
| <code>connection_profile_id</code> | <code>str \| None</code> | Required. The connection profile identifier.<br>**Default**: <code>None</code> |
| <code>force</code> | <code>bool \| None</code> | Optional. Create the connection profile without validating it.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. Only validate the connection profile, but don't create any resources. The default is false.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsConnectionProfilesCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_connection_profiles_delete(projects_id: str, locations_id: str, connection_profiles_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connection_profiles_id</code> | <code>str</code> | Resource name segment (connectionProfilesId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_connection_profiles_discover(projects_id: str, locations_id: str, body: DiscoverConnectionProfileRequest | DiscoverConnectionProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DiscoverConnectionProfileResponse, DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_discover(
    "some example string", "some example string", DiscoverConnectionProfileRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoverConnectionProfileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_discover(
    "some example string", "some example string", DiscoverConnectionProfileRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoverConnectionProfileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[DiscoverConnectionProfileRequest](google_cloud_datastream/models/discover_connection_profile_request.py) \| [DiscoverConnectionProfileRequestDict](google_cloud_datastream/models/discover_connection_profile_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[DiscoverConnectionProfileResponse](google_cloud_datastream/models/discover_connection_profile_response.py), [DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_discover_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DiscoverConnectionProfileResponse](google_cloud_datastream/models/discover_connection_profile_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesDiscoverErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_discover_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_connection_profiles_get(projects_id: str, locations_id: str, connection_profiles_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConnectionProfile, DatastreamProjectsLocationsConnectionProfilesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConnectionProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connection_profiles_id</code> | <code>str</code> | Resource name segment (connectionProfilesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ConnectionProfile](google_cloud_datastream/models/connection_profile.py), [DatastreamProjectsLocationsConnectionProfilesGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConnectionProfile](google_cloud_datastream/models/connection_profile.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_connection_profiles_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListConnectionProfilesResponse, DatastreamProjectsLocationsConnectionProfilesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list connection profiles created in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListConnectionProfilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListConnectionProfilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by fields for the result.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListConnectionProfilesResponse](google_cloud_datastream/models/list_connection_profiles_response.py), [DatastreamProjectsLocationsConnectionProfilesListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListConnectionProfilesResponse](google_cloud_datastream/models/list_connection_profiles_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_connection_profiles_patch(projects_id: str, locations_id: str, connection_profiles_id: str, body: ConnectionProfile | ConnectionProfileDict, *, force: bool | None = None, request_id: str | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsConnectionProfilesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the parameters of a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_connection_profiles_patch(
    "some example string", "some example string", "some example string", ConnectionProfile()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_connection_profiles_patch(
    "some example string", "some example string", "some example string", ConnectionProfile()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsConnectionProfilesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>connection_profiles_id</code> | <code>str</code> | Resource name segment (connectionProfilesId). |
| <code>body</code> | <code>[ConnectionProfile](google_cloud_datastream/models/connection_profile.py) \| [ConnectionProfileDict](google_cloud_datastream/models/connection_profile.py)</code> | The request body. |
| <code>force</code> | <code>bool \| None</code> | Optional. Update the connection profile without validating it.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. Only validate the connection profile, but don't update any resources. The default is false.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsConnectionProfilesPatchErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsConnectionProfilesPatchErrorBody](google_cloud_datastream/errors/datastream_projects_locations_connection_profiles_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_fetch_static_ips(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FetchStaticIpsResponse, DatastreamProjectsLocationsFetchStaticIpsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_fetch_static_ips(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FetchStaticIpsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsFetchStaticIpsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_fetch_static_ips(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FetchStaticIpsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsFetchStaticIpsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of Ips to return, will likely not be specified.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A page token, received from a previous `ListStaticIps` call. will likely not be specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[FetchStaticIpsResponse](google_cloud_datastream/models/fetch_static_ips_response.py), [DatastreamProjectsLocationsFetchStaticIpsErrorBody](google_cloud_datastream/errors/datastream_projects_locations_fetch_static_ips_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FetchStaticIpsResponse](google_cloud_datastream/models/fetch_static_ips_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsFetchStaticIpsErrorBody](google_cloud_datastream/errors/datastream_projects_locations_fetch_static_ips_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Location, DatastreamProjectsLocationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Location](google_cloud_datastream/models/location.py), [DatastreamProjectsLocationsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Location](google_cloud_datastream/models/location.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListLocationsResponse, DatastreamProjectsLocationsListErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsListErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListLocationsResponse](google_cloud_datastream/models/list_locations_response.py), [DatastreamProjectsLocationsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListLocationsResponse](google_cloud_datastream/models/list_locations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DatastreamProjectsLocationsOperationsCancelErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsCancelErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;Any, [DatastreamProjectsLocationsOperationsCancelErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsOperationsCancelErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DatastreamProjectsLocationsOperationsDeleteErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsDeleteErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;Any, [DatastreamProjectsLocationsOperationsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsOperationsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsOperationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsGetErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsOperationsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsOperationsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOperationsResponse, DatastreamProjectsLocationsOperationsListErrorBody]</code></summary>

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
result = client.with_raw_response.datastream_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsOperationsListErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListOperationsResponse](google_cloud_datastream/models/list_operations_response.py), [DatastreamProjectsLocationsOperationsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOperationsResponse](google_cloud_datastream/models/list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsOperationsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_create(projects_id: str, locations_id: str, body: PrivateConnection | PrivateConnectionDict, *, force: bool | None = None, private_connection_id: str | None = None, request_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_create(
    "some example string", "some example string", PrivateConnection()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_create(
    "some example string", "some example string", PrivateConnection()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[PrivateConnection](google_cloud_datastream/models/private_connection.py) \| [PrivateConnectionDict](google_cloud_datastream/models/private_connection.py)</code> | The request body. |
| <code>force</code> | <code>bool \| None</code> | Optional. If set to true, will skip validations.<br>**Default**: <code>None</code> |
| <code>private_connection_id</code> | <code>str \| None</code> | Required. The private connectivity identifier.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_delete(projects_id: str, locations_id: str, private_connections_id: str, *, force: bool | None = None, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>force</code> | <code>bool \| None</code> | Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_get(projects_id: str, locations_id: str, private_connections_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PrivateConnection, DatastreamProjectsLocationsPrivateConnectionsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PrivateConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PrivateConnection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[PrivateConnection](google_cloud_datastream/models/private_connection.py), [DatastreamProjectsLocationsPrivateConnectionsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PrivateConnection](google_cloud_datastream/models/private_connection.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPrivateConnectionsResponse, DatastreamProjectsLocationsPrivateConnectionsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list private connectivity configurations in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPrivateConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPrivateConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by fields for the result.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListPrivateConnectionsResponse](google_cloud_datastream/models/list_private_connections_response.py), [DatastreamProjectsLocationsPrivateConnectionsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPrivateConnectionsResponse](google_cloud_datastream/models/list_private_connections_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_routes_create(projects_id: str, locations_id: str, private_connections_id: str, body: Route | RouteDict, *, request_id: str | None = None, route_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a route for a private connectivity configuration in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_routes_create(
    "some example string", "some example string", "some example string", Route()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_routes_create(
    "some example string", "some example string", "some example string", Route()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>body</code> | <code>[Route](google_cloud_datastream/models/route.py) \| [RouteDict](google_cloud_datastream/models/route.py)</code> | The request body. |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>route_id</code> | <code>str \| None</code> | Required. The Route identifier.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsRoutesCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_routes_delete(projects_id: str, locations_id: str, private_connections_id: str, routes_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a route.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_routes_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_routes_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>routes_id</code> | <code>str</code> | Resource name segment (routesId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_routes_get(projects_id: str, locations_id: str, private_connections_id: str, routes_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Route, DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a route.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_routes_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Route
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_routes_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Route
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>routes_id</code> | <code>str</code> | Resource name segment (routesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Route](google_cloud_datastream/models/route.py), [DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Route](google_cloud_datastream/models/route.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsRoutesGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_private_connections_routes_list(projects_id: str, locations_id: str, private_connections_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListRoutesResponse, DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list routes created for a private connectivity configuration in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_private_connections_routes_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRoutesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_private_connections_routes_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListRoutesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>private_connections_id</code> | <code>str</code> | Resource name segment (privateConnectionsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by fields for the result.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListRoutesResponse](google_cloud_datastream/models/list_routes_response.py), [DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListRoutesResponse](google_cloud_datastream/models/list_routes_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsPrivateConnectionsRoutesListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_private_connections_routes_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_create(projects_id: str, locations_id: str, body: Stream | StreamDict, *, force: bool | None = None, request_id: str | None = None, stream_id: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_create(
    "some example string", "some example string", Stream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_create(
    "some example string", "some example string", Stream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Stream](google_cloud_datastream/models/stream.py) \| [StreamDict](google_cloud_datastream/models/stream.py)</code> | The request body. |
| <code>force</code> | <code>bool \| None</code> | Optional. Create the stream without validating it.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>stream_id</code> | <code>str \| None</code> | Required. The stream identifier.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. Only validate the stream, but don't create any resources. The default is false.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsStreamsCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsCreateErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_delete(projects_id: str, locations_id: str, streams_id: str, *, request_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsStreamsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsDeleteErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_get(projects_id: str, locations_id: str, streams_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stream, DatastreamProjectsLocationsStreamsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stream
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Stream](google_cloud_datastream/models/stream.py), [DatastreamProjectsLocationsStreamsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stream](google_cloud_datastream/models/stream.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListStreamsResponse, DatastreamProjectsLocationsStreamsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list streams in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListStreamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListStreamsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter request.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by fields for the result.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListStreamsResponse](google_cloud_datastream/models/list_streams_response.py), [DatastreamProjectsLocationsStreamsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListStreamsResponse](google_cloud_datastream/models/list_streams_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_objects_get(projects_id: str, locations_id: str, streams_id: str, objects_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_objects_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StreamObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_objects_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StreamObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>objects_id</code> | <code>str</code> | Resource name segment (objectsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[StreamObject](google_cloud_datastream/models/stream_object.py), [DatastreamProjectsLocationsStreamsObjectsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StreamObject](google_cloud_datastream/models/stream_object.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsObjectsGetErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_objects_list(projects_id: str, locations_id: str, streams_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListStreamObjectsResponse, DatastreamProjectsLocationsStreamsObjectsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list the objects of a specific stream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_objects_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListStreamObjectsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_objects_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListStreamObjectsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[ListStreamObjectsResponse](google_cloud_datastream/models/list_stream_objects_response.py), [DatastreamProjectsLocationsStreamsObjectsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListStreamObjectsResponse](google_cloud_datastream/models/list_stream_objects_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsObjectsListErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_objects_lookup(projects_id: str, locations_id: str, streams_id: str, body: LookupStreamObjectRequest | LookupStreamObjectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StreamObject, DatastreamProjectsLocationsStreamsObjectsLookupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to look up a stream object by its source object identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_objects_lookup(
    "some example string", "some example string", "some example string", LookupStreamObjectRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StreamObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsLookupErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_objects_lookup(
    "some example string", "some example string", "some example string", LookupStreamObjectRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StreamObject
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>body</code> | <code>[LookupStreamObjectRequest](google_cloud_datastream/models/lookup_stream_object_request.py) \| [LookupStreamObjectRequestDict](google_cloud_datastream/models/lookup_stream_object_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[StreamObject](google_cloud_datastream/models/stream_object.py), [DatastreamProjectsLocationsStreamsObjectsLookupErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_lookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StreamObject](google_cloud_datastream/models/stream_object.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsObjectsLookupErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_lookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_objects_start_backfill_job(projects_id: str, locations_id: str, streams_id: str, objects_id: str, body: StartBackfillJobRequest | StartBackfillJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start a backfill job for the specified stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_objects_start_backfill_job(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    StartBackfillJobRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartBackfillJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_objects_start_backfill_job(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    StartBackfillJobRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartBackfillJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>objects_id</code> | <code>str</code> | Resource name segment (objectsId). |
| <code>body</code> | <code>[StartBackfillJobRequest](google_cloud_datastream/models/start_backfill_job_request.py) \| [StartBackfillJobRequestDict](google_cloud_datastream/models/start_backfill_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[StartBackfillJobResponse](google_cloud_datastream/models/start_backfill_job_response.py), [DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_start_backfill_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartBackfillJobResponse](google_cloud_datastream/models/start_backfill_job_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsObjectsStartBackfillJobErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_start_backfill_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_objects_stop_backfill_job(projects_id: str, locations_id: str, streams_id: str, objects_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StopBackfillJobResponse, DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to stop a backfill job for the specified stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_objects_stop_backfill_job(
    "some example string", "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StopBackfillJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_objects_stop_backfill_job(
    "some example string", "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StopBackfillJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>objects_id</code> | <code>str</code> | Resource name segment (objectsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[StopBackfillJobResponse](google_cloud_datastream/models/stop_backfill_job_response.py), [DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_stop_backfill_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StopBackfillJobResponse](google_cloud_datastream/models/stop_backfill_job_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsObjectsStopBackfillJobErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_objects_stop_backfill_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_patch(projects_id: str, locations_id: str, streams_id: str, body: Stream | StreamDict, *, force: bool | None = None, request_id: str | None = None, update_mask: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the configuration of a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_patch(
    "some example string", "some example string", "some example string", Stream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_patch(
    "some example string", "some example string", "some example string", Stream()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>body</code> | <code>[Stream](google_cloud_datastream/models/stream.py) \| [StreamDict](google_cloud_datastream/models/stream.py)</code> | The request body. |
| <code>force</code> | <code>bool \| None</code> | Optional. Update the stream without validating it.<br>**Default**: <code>None</code> |
| <code>request_id</code> | <code>str \| None</code> | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).<br>**Default**: <code>None</code> |
| <code>update_mask</code> | <code>str \| None</code> | Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.<br>**Default**: <code>None</code> |
| <code>validate_only</code> | <code>bool \| None</code> | Optional. Only validate the stream with the changes, without actually updating it. The default is false.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsStreamsPatchErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsPatchErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datastream_projects_locations_streams_run(projects_id: str, locations_id: str, streams_id: str, body: RunStreamRequest | RunStreamRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, DatastreamProjectsLocationsStreamsRunErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start, resume or recover a stream with a non default CDC strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.datastream_projects_locations_streams_run(
    "some example string", "some example string", "some example string", RunStreamRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsRunErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.datastream_projects_locations_streams_run(
    "some example string", "some example string", "some example string", RunStreamRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatastreamProjectsLocationsStreamsRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>streams_id</code> | <code>str</code> | Resource name segment (streamsId). |
| <code>body</code> | <code>[RunStreamRequest](google_cloud_datastream/models/run_stream_request.py) \| [RunStreamRequestDict](google_cloud_datastream/models/run_stream_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_datastream/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_datastream/core/results.py)&#91;[Operation](google_cloud_datastream/models/operation.py), [DatastreamProjectsLocationsStreamsRunErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_datastream/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DatastreamProjectsLocationsStreamsRunErrorBody](google_cloud_datastream/errors/datastream_projects_locations_streams_run_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_datastream/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_datastream/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

