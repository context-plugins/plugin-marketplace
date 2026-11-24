# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AtlassianCompassClient](atlassian_compass/client.py)

## Events

> Source: [Events](atlassian_compass/apis/events.py)

<details>
<summary><code>def create_compass_event(body: CreateStreamlinedEventRequest | CreateStreamlinedEventRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateCompassEventErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.create_compass_event(
    CreateStreamlinedEventRequest(cloud_id="some example string", event=CompassEventInputDto())
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompassEventErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.create_compass_event(
    CreateStreamlinedEventRequest(cloud_id="some example string", event=CompassEventInputDto())
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCompassEventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStreamlinedEventRequest](atlassian_compass/models/create_streamlined_event_request.py) \| [CreateStreamlinedEventRequestDict](atlassian_compass/models/create_streamlined_event_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;None, [CreateCompassEventErrorBody](atlassian_compass/errors/create_compass_event_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateCompassEventErrorBody](atlassian_compass/errors/create_compass_event_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| 429 | <code>[RawError](atlassian_compass/core/results.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](atlassian_compass/apis/metrics.py)

<details>
<summary><code>def insert_metric_value(body: CompassV1MetricsRequest | CompassV1MetricsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsertMetricResponseDto, InsertMetricValueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.metrics.with_raw_response.insert_metric_value(
    InsertMetricByMetricDefinitionRequestDto(
        value=1.5, metric_definition_id="some example string", component_id="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsertMetricResponseDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InsertMetricValueErrorBody
```

**Async**

```python
result = await async_client.metrics.with_raw_response.insert_metric_value(
    InsertMetricByMetricDefinitionRequestDto(
        value=1.5, metric_definition_id="some example string", component_id="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsertMetricResponseDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InsertMetricValueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompassV1MetricsRequest](atlassian_compass/models/unions/compass_v1_metrics_request.py) \| [CompassV1MetricsRequestDict](atlassian_compass/models/unions/compass_v1_metrics_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;[InsertMetricResponseDto](atlassian_compass/models/insert_metric_response_dto.py), [InsertMetricValueErrorBody](atlassian_compass/errors/insert_metric_value_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsertMetricResponseDto](atlassian_compass/models/insert_metric_response_dto.py)</code> -- Returned if the request is successful.

**On `Failure`**: `error` is <code>[InsertMetricValueErrorBody](atlassian_compass/errors/insert_metric_value_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| 429 | <code>[InsertMetricResponseDto](atlassian_compass/models/insert_metric_response_dto.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PackageDependencies

> Source: [PackageDependencies](atlassian_compass/apis/package_dependencies.py)

<details>
<summary><code>def delete_lock_file(component_id: str, source_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteLockFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all the package dependencies associated with a particular source.The `sourceId` parameter needs to be Base64 encoded.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.package_dependencies.with_raw_response.delete_lock_file("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLockFileErrorBody
```

**Async**

```python
result = await async_client.package_dependencies.with_raw_response.delete_lock_file(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLockFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>str</code> | Value sent with the request. |
| <code>source_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;None, [DeleteLockFileErrorBody](atlassian_compass/errors/delete_lock_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteLockFileErrorBody](atlassian_compass/errors/delete_lock_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](atlassian_compass/core/results.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_lock_file(source_id: str, base_source_url: str, component_id: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UploadLockFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload package dependencies for a component.

The file with package dependency information. Currently, we only accept package-lock.json files that are below 2MB. \
\
The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where dependencies were found. \
\
The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to the lock file, with the "/" characters replaced with "_" characters.

Example: This curl command uploads a lock file to populate package dependencies for the component.
``bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/package-lock.json;type=application/json
--form componentId=
--form baseSourceUrl=
--form sourceId=
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.package_dependencies.with_raw_response.upload_lock_file(
    "some example string", "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadLockFileErrorBody
```

**Async**

```python
result = await async_client.package_dependencies.with_raw_response.upload_lock_file(
    "some example string", "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadLockFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_id</code> | <code>str</code> | Value sent with the request. |
| <code>base_source_url</code> | <code>str</code> | Value sent with the request. |
| <code>component_id</code> | <code>str</code> | Value sent with the request. |
| <code>file</code> | <code>FileInput</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;None, [UploadLockFileErrorBody](atlassian_compass/errors/upload_lock_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UploadLockFileErrorBody](atlassian_compass/errors/upload_lock_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422 | <code>[RawError](atlassian_compass/core/results.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AttachmentRestController

> Source: [AttachmentRestController](atlassian_compass/apis/attachment_rest_controller.py)

<details>
<summary><code>def delete_api_spec(component_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, DeleteApiSpecErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the API spec file for a component.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attachment_rest_controller.with_raw_response.delete_api_spec(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiSpecErrorBody
```

**Async**

```python
result = await async_client.attachment_rest_controller.with_raw_response.delete_api_spec(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiSpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;str, [DeleteApiSpecErrorBody](atlassian_compass/errors/delete_api_spec_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Returned if the API spec deletion is successful.

**On `Failure`**: `error` is <code>[DeleteApiSpecErrorBody](atlassian_compass/errors/delete_api_spec_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>str</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_attachment(component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attachment_rest_controller.with_raw_response.delete_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAttachmentErrorBody
```

**Async**

```python
result = await async_client.attachment_rest_controller.with_raw_response.delete_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>forge_app_id</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;None, [DeleteAttachmentErrorBody](atlassian_compass/errors/delete_attachment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAttachmentErrorBody](atlassian_compass/errors/delete_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_attachment(component_id: UUID, forge_app_id: str, key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Attachment, GetAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attachment_rest_controller.with_raw_response.get_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attachment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAttachmentErrorBody
```

**Async**

```python
result = await async_client.attachment_rest_controller.with_raw_response.get_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attachment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>forge_app_id</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;[Attachment](atlassian_compass/models/attachment.py), [GetAttachmentErrorBody](atlassian_compass/errors/get_attachment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Attachment](atlassian_compass/models/attachment.py)</code> -- Returned if the file exists.

**On `Failure`**: `error` is <code>[GetAttachmentErrorBody](atlassian_compass/errors/get_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_api_spec(component_id: UUID, file: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[str, UploadApiSpecErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload api specs for a component.

The request body should be a file with the api-spec content.

Example: This curl command uploads a spec file (swagger.yaml) for the component.
``bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/swagger.yaml
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attachment_rest_controller.with_raw_response.upload_api_spec(
    UUID("00000000-0000-0000-0000-000000000000"), Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadApiSpecErrorBody
```

**Async**

```python
result = await async_client.attachment_rest_controller.with_raw_response.upload_api_spec(
    UUID("00000000-0000-0000-0000-000000000000"), Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type str
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadApiSpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>file</code> | <code>FileInput</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;str, [UploadApiSpecErrorBody](atlassian_compass/errors/upload_api_spec_error.py)&#93;</code>

**On `Success`**: `payload` is <code>str</code> -- Returned if the file upload is successful.

**On `Failure`**: `error` is <code>[UploadApiSpecErrorBody](atlassian_compass/errors/upload_api_spec_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 422 | <code>str</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_attachment(component_id: UUID, forge_app_id: str, key: str, file: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Attachment, UploadAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

The request body should be a file.

Example: This curl command attaches a file to a component.
``bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/attachment.txt
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attachment_rest_controller.with_raw_response.upload_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attachment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAttachmentErrorBody
```

**Async**

```python
result = await async_client.attachment_rest_controller.with_raw_response.upload_attachment(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string", "some example string", Path("path/to/file.bin")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attachment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>forge_app_id</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | Value sent with the request. |
| <code>file</code> | <code>FileInput</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;[Attachment](atlassian_compass/models/attachment.py), [UploadAttachmentErrorBody](atlassian_compass/errors/upload_attachment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Attachment](atlassian_compass/models/attachment.py)</code> -- Returned if the file upload is successful.

**On `Failure`**: `error` is <code>[UploadAttachmentErrorBody](atlassian_compass/errors/upload_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 422, 500 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EntitlementRestController

> Source: [EntitlementRestController](atlassian_compass/apis/entitlement_rest_controller.py)

<details>
<summary><code>def evaluate_entitlements(body: EntitlementRequestDto | EntitlementRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntitlementResponseDto, EvaluateEntitlementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get entitlement results for a given user and site

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entitlement_rest_controller.with_raw_response.evaluate_entitlements(
    EntitlementRequestDto(entitlements=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntitlementResponseDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateEntitlementsErrorBody
```

**Async**

```python
result = await async_client.entitlement_rest_controller.with_raw_response.evaluate_entitlements(
    EntitlementRequestDto(entitlements=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntitlementResponseDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateEntitlementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EntitlementRequestDto](atlassian_compass/models/entitlement_request_dto.py) \| [EntitlementRequestDtoDict](atlassian_compass/models/entitlement_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;[EntitlementResponseDto](atlassian_compass/models/entitlement_response_dto.py), [EvaluateEntitlementsErrorBody](atlassian_compass/errors/evaluate_entitlements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntitlementResponseDto](atlassian_compass/models/entitlement_response_dto.py)</code> -- Returned if the file upload is successful.

**On `Failure`**: `error` is <code>[EvaluateEntitlementsErrorBody](atlassian_compass/errors/evaluate_entitlements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IncomingWebhooksRestController

> Source: [IncomingWebhooksRestController](atlassian_compass/apis/incoming_webhooks_rest_controller.py)

<details>
<summary><code>def handle_webhook_invocation(webhook_id: str, body: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, HandleWebhookInvocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Third parties can call these inbound webhooks to dothings within compass, like create deployment events for webhooks coming from github

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.incoming_webhooks_rest_controller.with_raw_response.handle_webhook_invocation(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HandleWebhookInvocationErrorBody
```

**Async**

```python
result = await async_client.incoming_webhooks_rest_controller.with_raw_response.handle_webhook_invocation(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HandleWebhookInvocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>str</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](atlassian_compass/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](atlassian_compass/core/results.py)&#91;None, [HandleWebhookInvocationErrorBody](atlassian_compass/errors/handle_webhook_invocation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[HandleWebhookInvocationErrorBody](atlassian_compass/errors/handle_webhook_invocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 405 | <code>[ErrorResponseDto](atlassian_compass/models/error_response_dto.py)</code> |
| 429 | <code>str</code> |
| anything unmapped | <code>[RawError](atlassian_compass/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

