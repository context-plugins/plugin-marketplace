# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonFreeRtosClient](amazon_free_rtos/client.py)

## OtaUpdates

> Source: [OtaUpdates](amazon_free_rtos/apis/ota_updates.py)

<details>
<summary><code>def create_ota_update(body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OtaUpdate, CreateOtaUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an AWS IoT OTA update on a target group of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ota_updates.with_raw_response.create_ota_update(
    CreateOtaUpdateRequest(ota_update_id="some example string", targets=["some example string"], files=[{}])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOtaUpdateErrorBody
```

**Async**

```python
result = await async_client.ota_updates.with_raw_response.create_ota_update(
    CreateOtaUpdateRequest(ota_update_id="some example string", targets=["some example string"], files=[{}])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateOtaUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateOtaUpdateRequest](amazon_free_rtos/models/create_ota_update_request.py) \| [CreateOtaUpdateRequestDict](amazon_free_rtos/models/create_ota_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[OtaUpdate](amazon_free_rtos/models/ota_update.py), [CreateOtaUpdateErrorBody](amazon_free_rtos/errors/create_ota_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OtaUpdate](amazon_free_rtos/models/ota_update.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateOtaUpdateErrorBody](amazon_free_rtos/errors/create_ota_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_ota_update(ota_update_id: str, *, delete_stream: bool | None = None, force_delete_aws_job: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteOtaUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an OTA update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ota_updates.with_raw_response.delete_ota_update("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteOtaUpdateErrorBody
```

**Async**

```python
result = await async_client.ota_updates.with_raw_response.delete_ota_update("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteOtaUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ota_update_id</code> | <code>str</code> | The OTA update ID to delete. |
| <code>delete_stream</code> | <code>bool \| None</code> | Whether to delete the stream associated with the update.<br>**Default**: <code>None</code> |
| <code>force_delete_aws_job</code> | <code>bool \| None</code> | Whether to force delete the associated AWS IoT job.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;None, [DeleteOtaUpdateErrorBody](amazon_free_rtos/errors/delete_ota_update_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteOtaUpdateErrorBody](amazon_free_rtos/errors/delete_ota_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ota_update(ota_update_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OtaUpdateInfo, GetOtaUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an OTA update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ota_updates.with_raw_response.get_ota_update("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdateInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOtaUpdateErrorBody
```

**Async**

```python
result = await async_client.ota_updates.with_raw_response.get_ota_update("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdateInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOtaUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ota_update_id</code> | <code>str</code> | The OTA update ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[OtaUpdateInfo](amazon_free_rtos/models/ota_update_info.py), [GetOtaUpdateErrorBody](amazon_free_rtos/errors/get_ota_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OtaUpdateInfo](amazon_free_rtos/models/ota_update_info.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetOtaUpdateErrorBody](amazon_free_rtos/errors/get_ota_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_ota_updates(*, max_results: int | None = None, next_token: str | None = None, ota_update_status: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OtaUpdatesResponse, ListOtaUpdatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists OTA updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ota_updates.with_raw_response.list_ota_updates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOtaUpdatesErrorBody
```

**Async**

```python
result = await async_client.ota_updates.with_raw_response.list_ota_updates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OtaUpdatesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOtaUpdatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum results.<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Pagination token.<br>**Default**: <code>None</code> |
| <code>ota_update_status</code> | <code>str \| None</code> | Filter by OTA update status.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[OtaUpdatesResponse](amazon_free_rtos/models/ota_updates_response.py), [ListOtaUpdatesErrorBody](amazon_free_rtos/errors/list_ota_updates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OtaUpdatesResponse](amazon_free_rtos/models/ota_updates_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListOtaUpdatesErrorBody](amazon_free_rtos/errors/list_ota_updates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareConfigurations

> Source: [SoftwareConfigurations](amazon_free_rtos/apis/software_configurations.py)

<details>
<summary><code>def create_software_configuration(body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SoftwareConfiguration, CreateSoftwareConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.software_configurations.with_raw_response.create_software_configuration(
    CreateSoftwareConfigurationRequest(name="some example string", hardware_platform="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSoftwareConfigurationErrorBody
```

**Async**

```python
result = await async_client.software_configurations.with_raw_response.create_software_configuration(
    CreateSoftwareConfigurationRequest(name="some example string", hardware_platform="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSoftwareConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSoftwareConfigurationRequest](amazon_free_rtos/models/create_software_configuration_request.py) \| [CreateSoftwareConfigurationRequestDict](amazon_free_rtos/models/create_software_configuration_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py), [CreateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/create_software_configuration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/create_software_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSoftwareConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.software_configurations.with_raw_response.delete_software_configuration("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSoftwareConfigurationErrorBody
```

**Async**

```python
result = await async_client.software_configurations.with_raw_response.delete_software_configuration(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSoftwareConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>config_id</code> | <code>str</code> | ID of the software configuration to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;None, [DeleteSoftwareConfigurationErrorBody](amazon_free_rtos/errors/delete_software_configuration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSoftwareConfigurationErrorBody](amazon_free_rtos/errors/delete_software_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SoftwareConfiguration, DescribeSoftwareConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.software_configurations.with_raw_response.describe_software_configuration("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeSoftwareConfigurationErrorBody
```

**Async**

```python
result = await async_client.software_configurations.with_raw_response.describe_software_configuration(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeSoftwareConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>config_id</code> | <code>str</code> | ID of the software configuration. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py), [DescribeSoftwareConfigurationErrorBody](amazon_free_rtos/errors/describe_software_configuration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**On `Failure`**: `error` is <code>[DescribeSoftwareConfigurationErrorBody](amazon_free_rtos/errors/describe_software_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_software_configurations(*, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SoftwareConfigurationRecordsResponse, ListSoftwareConfigurationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists FreeRTOS software configuration records.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.software_configurations.with_raw_response.list_software_configurations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfigurationRecordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSoftwareConfigurationsErrorBody
```

**Async**

```python
result = await async_client.software_configurations.with_raw_response.list_software_configurations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfigurationRecordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSoftwareConfigurationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_results</code> | <code>int \| None</code> | Maximum results to return.<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Pagination token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[SoftwareConfigurationRecordsResponse](amazon_free_rtos/models/software_configuration_records_response.py), [ListSoftwareConfigurationsErrorBody](amazon_free_rtos/errors/list_software_configurations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SoftwareConfigurationRecordsResponse](amazon_free_rtos/models/software_configuration_records_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListSoftwareConfigurationsErrorBody](amazon_free_rtos/errors/list_software_configurations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_software_configuration(config_id: str, body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SoftwareConfiguration, UpdateSoftwareConfigurationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.software_configurations.with_raw_response.update_software_configuration(
    "some example string", UpdateSoftwareConfigurationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSoftwareConfigurationErrorBody
```

**Async**

```python
result = await async_client.software_configurations.with_raw_response.update_software_configuration(
    "some example string", UpdateSoftwareConfigurationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SoftwareConfiguration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSoftwareConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>config_id</code> | <code>str</code> | ID of the software configuration to update. |
| <code>body</code> | <code>[UpdateSoftwareConfigurationRequest](amazon_free_rtos/models/update_software_configuration_request.py) \| [UpdateSoftwareConfigurationRequestDict](amazon_free_rtos/models/update_software_configuration_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py), [UpdateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/update_software_configuration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/update_software_configuration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](amazon_free_rtos/apis/tags.py)

<details>
<summary><code>def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagsResponse, ListTagsForResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags (metadata) you have assigned to the resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.list_tags_for_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.list_tags_for_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
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
| <code>resource_arn</code> | <code>str</code> | The ARN of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;[TagsResponse](amazon_free_rtos/models/tags_response.py), [ListTagsForResourceErrorBody](amazon_free_rtos/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagsResponse](amazon_free_rtos/models/tags_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](amazon_free_rtos/errors/list_tags_for_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(resource_arn: str, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds to or modifies the tags of the given resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.tag_resource(
    "some example string", TagsRequest(tags={"key": "some example string"})
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.tag_resource(
    "some example string", TagsRequest(tags={"key": "some example string"})
)
match result:
    case Success():
        ...  # 2xx, no content
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
| <code>resource_arn</code> | <code>str</code> | The ARN of the resource. |
| <code>body</code> | <code>[TagsRequest](amazon_free_rtos/models/tags_request.py) \| [TagsRequestDict](amazon_free_rtos/models/tags_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_free_rtos/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_free_rtos/core/results.py)&#91;None, [TagResourceErrorBody](amazon_free_rtos/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagResourceErrorBody](amazon_free_rtos/errors/tag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[ErrorResponse](amazon_free_rtos/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](amazon_free_rtos/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

