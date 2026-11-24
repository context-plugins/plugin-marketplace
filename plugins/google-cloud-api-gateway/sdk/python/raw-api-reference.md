# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudApiGatewayClient](google_cloud_api_gateway/client.py)

<details>
<summary><code>def apigateway_projects_locations_apis_configs_create(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayApiConfig | ApigatewayApiConfigDict, *, api_config_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ApiConfig in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_configs_create(
    "some example string", "some example string", "some example string", ApigatewayApiConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_create(
    "some example string", "some example string", "some example string", ApigatewayApiConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewayApiConfig](google_cloud_api_gateway/models/apigateway_api_config.py) \| [ApigatewayApiConfigDict](google_cloud_api_gateway/models/apigateway_api_config.py)</code> | The request body. |
| <code>api_config_id</code> | <code>str \| None</code> | Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisConfigsCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_delete(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_configs_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisConfigsDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_get(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, view: ViewOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayApiConfig, ApigatewayProjectsLocationsApisConfigsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_configs_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayApiConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayApiConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>view</code> | <code>[ViewOrStr](google_cloud_api_gateway/models/enums/view.py) \| None</code> | Optional. Specifies which fields of the API Config are returned in the response. Defaults to `BASIC` view.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayApiConfig](google_cloud_api_gateway/models/apigateway_api_config.py), [ApigatewayProjectsLocationsApisConfigsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayApiConfig](google_cloud_api_gateway/models/apigateway_api_config.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_get_iam_policy(projects_id: str, locations_id: str, apis_id: str, configs_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_configs_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_get_iam_policy(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_list(projects_id: str, locations_id: str, apis_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayListApiConfigsResponse, ApigatewayProjectsLocationsApisConfigsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists ApiConfigs in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_configs_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListApiConfigsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListApiConfigsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by parameters.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayListApiConfigsResponse](google_cloud_api_gateway/models/apigateway_list_api_configs_response.py), [ApigatewayProjectsLocationsApisConfigsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayListApiConfigsResponse](google_cloud_api_gateway/models/apigateway_list_api_configs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_patch(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewayApiConfig | ApigatewayApiConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisConfigsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_configs_patch(
    "some example string", "some example string", "some example string", "some example string", ApigatewayApiConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_patch(
    "some example string", "some example string", "some example string", "some example string", ApigatewayApiConfig()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>body</code> | <code>[ApigatewayApiConfig](google_cloud_api_gateway/models/apigateway_api_config.py) \| [ApigatewayApiConfigDict](google_cloud_api_gateway/models/apigateway_api_config.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisConfigsPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_set_iam_policy(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_configs_set_iam_policy(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    ApigatewaySetIamPolicyRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_set_iam_policy(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    ApigatewaySetIamPolicyRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py) \| [ApigatewaySetIamPolicyRequestDict](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_configs_test_iam_permissions(projects_id: str, locations_id: str, apis_id: str, configs_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_configs_test_iam_permissions(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    ApigatewayTestIamPermissionsRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_configs_test_iam_permissions(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    ApigatewayTestIamPermissionsRequest(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>configs_id</code> | <code>str</code> | Resource name segment (configsId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py) \| [ApigatewayTestIamPermissionsRequestDict](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py), [ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisConfigsTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_configs_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_create(projects_id: str, locations_id: str, body: ApigatewayApi | ApigatewayApiDict, *, api_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Api in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_create(
    "some example string", "some example string", ApigatewayApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_create(
    "some example string", "some example string", ApigatewayApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[ApigatewayApi](google_cloud_api_gateway/models/apigateway_api.py) \| [ApigatewayApiDict](google_cloud_api_gateway/models/apigateway_api.py)</code> | The request body. |
| <code>api_id</code> | <code>str \| None</code> | Required. Identifier to assign to the API. Must be unique within scope of the parent resource.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_delete(projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_get(projects_id: str, locations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayApi, ApigatewayProjectsLocationsApisGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayApi](google_cloud_api_gateway/models/apigateway_api.py), [ApigatewayProjectsLocationsApisGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayApi](google_cloud_api_gateway/models/apigateway_api.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_get_iam_policy(projects_id: str, locations_id: str, apis_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsApisGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayListApisResponse, ApigatewayProjectsLocationsApisListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Apis in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by parameters.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayListApisResponse](google_cloud_api_gateway/models/apigateway_list_apis_response.py), [ApigatewayProjectsLocationsApisListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayListApisResponse](google_cloud_api_gateway/models/apigateway_list_apis_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_patch(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayApi | ApigatewayApiDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsApisPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_apis_patch(
    "some example string", "some example string", "some example string", ApigatewayApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_patch(
    "some example string", "some example string", "some example string", ApigatewayApi()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewayApi](google_cloud_api_gateway/models/apigateway_api.py) \| [ApigatewayApiDict](google_cloud_api_gateway/models/apigateway_api.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Optional. Field mask is used to specify the fields to be overwritten in the Api resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsApisPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_set_iam_policy(projects_id: str, locations_id: str, apis_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsApisSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_set_iam_policy(
    "some example string", "some example string", "some example string", ApigatewaySetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_set_iam_policy(
    "some example string", "some example string", "some example string", ApigatewaySetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py) \| [ApigatewaySetIamPolicyRequestDict](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsApisSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_apis_test_iam_permissions(projects_id: str, locations_id: str, apis_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_apis_test_iam_permissions(
    "some example string", "some example string", "some example string", ApigatewayTestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_apis_test_iam_permissions(
    "some example string", "some example string", "some example string", ApigatewayTestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>apis_id</code> | <code>str</code> | Resource name segment (apisId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py) \| [ApigatewayTestIamPermissionsRequestDict](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py), [ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsApisTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_apis_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_create(projects_id: str, locations_id: str, body: ApigatewayGateway | ApigatewayGatewayDict, *, gateway_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Gateway in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_gateways_create(
    "some example string", "some example string", ApigatewayGateway()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_create(
    "some example string", "some example string", ApigatewayGateway()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[ApigatewayGateway](google_cloud_api_gateway/models/apigateway_gateway.py) \| [ApigatewayGatewayDict](google_cloud_api_gateway/models/apigateway_gateway.py)</code> | The request body. |
| <code>gateway_id</code> | <code>str \| None</code> | Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsGatewaysCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysCreateErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_delete(projects_id: str, locations_id: str, gateways_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_gateways_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsGatewaysDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_get(projects_id: str, locations_id: str, gateways_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayGateway, ApigatewayProjectsLocationsGatewaysGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_gateways_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayGateway
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayGateway
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayGateway](google_cloud_api_gateway/models/apigateway_gateway.py), [ApigatewayProjectsLocationsGatewaysGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayGateway](google_cloud_api_gateway/models/apigateway_gateway.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_get_iam_policy(projects_id: str, locations_id: str, gateways_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_gateways_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_get_iam_policy(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>options_requested_policy_version</code> | <code>int \| None</code> | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysGetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_get_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_list(projects_id: str, locations_id: str, *, filter_: str | None = None, order_by: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayListGatewaysResponse, ApigatewayProjectsLocationsGatewaysListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Gateways in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_gateways_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListGatewaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListGatewaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter.<br>**Default**: <code>None</code> |
| <code>order_by</code> | <code>str \| None</code> | Optional. Order by parameters.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. Page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayListGatewaysResponse](google_cloud_api_gateway/models/apigateway_list_gateways_response.py), [ApigatewayProjectsLocationsGatewaysListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayListGatewaysResponse](google_cloud_api_gateway/models/apigateway_list_gateways_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_patch(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewayGateway | ApigatewayGatewayDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsGatewaysPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.apigateway_projects_locations_gateways_patch(
    "some example string", "some example string", "some example string", ApigatewayGateway()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_patch(
    "some example string", "some example string", "some example string", ApigatewayGateway()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>body</code> | <code>[ApigatewayGateway](google_cloud_api_gateway/models/apigateway_gateway.py) \| [ApigatewayGatewayDict](google_cloud_api_gateway/models/apigateway_gateway.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if `update_mask` is missing or empty.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsGatewaysPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysPatchErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_set_iam_policy(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewaySetIamPolicyRequest | ApigatewaySetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayPolicy, ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_gateways_set_iam_policy(
    "some example string", "some example string", "some example string", ApigatewaySetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_set_iam_policy(
    "some example string", "some example string", "some example string", ApigatewaySetIamPolicyRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayPolicy
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>body</code> | <code>[ApigatewaySetIamPolicyRequest](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py) \| [ApigatewaySetIamPolicyRequestDict](google_cloud_api_gateway/models/apigateway_set_iam_policy_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py), [ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_set_iam_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayPolicy](google_cloud_api_gateway/models/apigateway_policy.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysSetIamPolicyErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_set_iam_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_gateways_test_iam_permissions(projects_id: str, locations_id: str, gateways_id: str, body: ApigatewayTestIamPermissionsRequest | ApigatewayTestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayTestIamPermissionsResponse, ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_gateways_test_iam_permissions(
    "some example string", "some example string", "some example string", ApigatewayTestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_gateways_test_iam_permissions(
    "some example string", "some example string", "some example string", ApigatewayTestIamPermissionsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayTestIamPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>gateways_id</code> | <code>str</code> | Resource name segment (gatewaysId). |
| <code>body</code> | <code>[ApigatewayTestIamPermissionsRequest](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py) \| [ApigatewayTestIamPermissionsRequestDict](google_cloud_api_gateway/models/apigateway_test_iam_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py), [ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_test_iam_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayTestIamPermissionsResponse](google_cloud_api_gateway/models/apigateway_test_iam_permissions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGatewaysTestIamPermissionsErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_gateways_test_iam_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayLocation, ApigatewayProjectsLocationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayLocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayLocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayLocation](google_cloud_api_gateway/models/apigateway_location.py), [ApigatewayProjectsLocationsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayLocation](google_cloud_api_gateway/models/apigateway_location.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayListLocationsResponse, ApigatewayProjectsLocationsListErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsListErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayListLocationsResponse](google_cloud_api_gateway/models/apigateway_list_locations_response.py), [ApigatewayProjectsLocationsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayListLocationsResponse](google_cloud_api_gateway/models/apigateway_list_locations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, ApigatewayProjectsLocationsOperationsCancelErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsCancelErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;Any, [ApigatewayProjectsLocationsOperationsCancelErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsOperationsCancelErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, ApigatewayProjectsLocationsOperationsDeleteErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsDeleteErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;Any, [ApigatewayProjectsLocationsOperationsDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsOperationsDeleteErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayOperation, ApigatewayProjectsLocationsOperationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsGetErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py), [ApigatewayProjectsLocationsOperationsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayOperation](google_cloud_api_gateway/models/apigateway_operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsOperationsGetErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apigateway_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApigatewayListOperationsResponse, ApigatewayProjectsLocationsOperationsListErrorBody]</code></summary>

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
result = client.with_raw_response.apigateway_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.apigateway_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApigatewayListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApigatewayProjectsLocationsOperationsListErrorBody
```

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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_api_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_api_gateway/core/results.py)&#91;[ApigatewayListOperationsResponse](google_cloud_api_gateway/models/apigateway_list_operations_response.py), [ApigatewayProjectsLocationsOperationsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApigatewayListOperationsResponse](google_cloud_api_gateway/models/apigateway_list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ApigatewayProjectsLocationsOperationsListErrorBody](google_cloud_api_gateway/errors/apigateway_projects_locations_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_api_gateway/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_api_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

