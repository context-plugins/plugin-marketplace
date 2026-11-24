# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonFreeRtosClient](amazon_free_rtos/client.py)

## OtaUpdates

> Source: [OtaUpdates](amazon_free_rtos/apis/ota_updates.py)

<details>
<summary><code>def create_ota_update(body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> OtaUpdate</code></summary>

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
try:
    response = client.ota_updates.create_ota_update(
        CreateOtaUpdateRequest(ota_update_id="some example string", targets=["some example string"], files=[{}])
    )
    # TODO: Handle 'response' of type OtaUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOtaUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.ota_updates.create_ota_update(
        CreateOtaUpdateRequest(ota_update_id="some example string", targets=["some example string"], files=[{}])
    )
    # TODO: Handle 'response' of type OtaUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOtaUpdateErrorBody
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

**OnSuccess**: <code>[OtaUpdate](amazon_free_rtos/models/ota_update.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[CreateOtaUpdateErrorBody](amazon_free_rtos/errors/create_ota_update_error.py)&#93;</code>

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
<summary><code>def delete_ota_update(ota_update_id: str, *, delete_stream: bool | None = None, force_delete_aws_job: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.ota_updates.delete_ota_update("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteOtaUpdateErrorBody
```

**Async**

```python
try:
    await async_client.ota_updates.delete_ota_update("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteOtaUpdateErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[DeleteOtaUpdateErrorBody](amazon_free_rtos/errors/delete_ota_update_error.py)&#93;</code>

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
<summary><code>def get_ota_update(ota_update_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OtaUpdateInfo</code></summary>

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
try:
    response = client.ota_updates.get_ota_update("some example string")
    # TODO: Handle 'response' of type OtaUpdateInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOtaUpdateErrorBody
```

**Async**

```python
try:
    response = await async_client.ota_updates.get_ota_update("some example string")
    # TODO: Handle 'response' of type OtaUpdateInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOtaUpdateErrorBody
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

**OnSuccess**: <code>[OtaUpdateInfo](amazon_free_rtos/models/ota_update_info.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[GetOtaUpdateErrorBody](amazon_free_rtos/errors/get_ota_update_error.py)&#93;</code>

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
<summary><code>def list_ota_updates(*, max_results: int | None = None, next_token: str | None = None, ota_update_status: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OtaUpdatesResponse</code></summary>

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
try:
    response = client.ota_updates.list_ota_updates()
    # TODO: Handle 'response' of type OtaUpdatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOtaUpdatesErrorBody
```

**Async**

```python
try:
    response = await async_client.ota_updates.list_ota_updates()
    # TODO: Handle 'response' of type OtaUpdatesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOtaUpdatesErrorBody
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

**OnSuccess**: <code>[OtaUpdatesResponse](amazon_free_rtos/models/ota_updates_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[ListOtaUpdatesErrorBody](amazon_free_rtos/errors/list_ota_updates_error.py)&#93;</code>

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
<summary><code>def create_software_configuration(body: CreateSoftwareConfigurationRequest | CreateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SoftwareConfiguration</code></summary>

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
try:
    response = client.software_configurations.create_software_configuration(
        CreateSoftwareConfigurationRequest(name="some example string", hardware_platform="some example string")
    )
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSoftwareConfigurationErrorBody
```

**Async**

```python
try:
    response = await async_client.software_configurations.create_software_configuration(
        CreateSoftwareConfigurationRequest(name="some example string", hardware_platform="some example string")
    )
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSoftwareConfigurationErrorBody
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

**OnSuccess**: <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[CreateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/create_software_configuration_error.py)&#93;</code>

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
<summary><code>def delete_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.software_configurations.delete_software_configuration("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSoftwareConfigurationErrorBody
```

**Async**

```python
try:
    await async_client.software_configurations.delete_software_configuration("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSoftwareConfigurationErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[DeleteSoftwareConfigurationErrorBody](amazon_free_rtos/errors/delete_software_configuration_error.py)&#93;</code>

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
<summary><code>def describe_software_configuration(config_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SoftwareConfiguration</code></summary>

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
try:
    response = client.software_configurations.describe_software_configuration("some example string")
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSoftwareConfigurationErrorBody
```

**Async**

```python
try:
    response = await async_client.software_configurations.describe_software_configuration("some example string")
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSoftwareConfigurationErrorBody
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

**OnSuccess**: <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[DescribeSoftwareConfigurationErrorBody](amazon_free_rtos/errors/describe_software_configuration_error.py)&#93;</code>

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
<summary><code>def list_software_configurations(*, max_results: int | None = None, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SoftwareConfigurationRecordsResponse</code></summary>

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
try:
    response = client.software_configurations.list_software_configurations()
    # TODO: Handle 'response' of type SoftwareConfigurationRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSoftwareConfigurationsErrorBody
```

**Async**

```python
try:
    response = await async_client.software_configurations.list_software_configurations()
    # TODO: Handle 'response' of type SoftwareConfigurationRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSoftwareConfigurationsErrorBody
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

**OnSuccess**: <code>[SoftwareConfigurationRecordsResponse](amazon_free_rtos/models/software_configuration_records_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[ListSoftwareConfigurationsErrorBody](amazon_free_rtos/errors/list_software_configurations_error.py)&#93;</code>

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
<summary><code>def update_software_configuration(config_id: str, body: UpdateSoftwareConfigurationRequest | UpdateSoftwareConfigurationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SoftwareConfiguration</code></summary>

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
try:
    response = client.software_configurations.update_software_configuration(
        "some example string", UpdateSoftwareConfigurationRequest()
    )
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSoftwareConfigurationErrorBody
```

**Async**

```python
try:
    response = await async_client.software_configurations.update_software_configuration(
        "some example string", UpdateSoftwareConfigurationRequest()
    )
    # TODO: Handle 'response' of type SoftwareConfiguration
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSoftwareConfigurationErrorBody
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

**OnSuccess**: <code>[SoftwareConfiguration](amazon_free_rtos/models/software_configuration.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[UpdateSoftwareConfigurationErrorBody](amazon_free_rtos/errors/update_software_configuration_error.py)&#93;</code>

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
<summary><code>def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> TagsResponse</code></summary>

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
try:
    response = client.tags.list_tags_for_resource("some example string")
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.list_tags_for_resource("some example string")
    # TODO: Handle 'response' of type TagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
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

**OnSuccess**: <code>[TagsResponse](amazon_free_rtos/models/tags_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](amazon_free_rtos/errors/list_tags_for_resource_error.py)&#93;</code>

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
<summary><code>def tag_resource(resource_arn: str, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.tags.tag_resource("some example string", TagsRequest(tags={"key": "some example string"}))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.tags.tag_resource("some example string", TagsRequest(tags={"key": "some example string"}))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_free_rtos/core/exceptions.py)&#91;[TagResourceErrorBody](amazon_free_rtos/errors/tag_resource_error.py)&#93;</code>

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

