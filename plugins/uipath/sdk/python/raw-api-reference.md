# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [UiPathClient](ui_path/client.py)

## Alerts

> Source: [Alerts](ui_path/apis/alerts.py)

<details>
<summary><code>def list_alerts(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataAlertCollection, ListAlertsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.alerts.with_raw_response.list_alerts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataAlertCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertsErrorBody
```

**Async**

```python
result = await async_client.alerts.with_raw_response.list_alerts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataAlertCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAlertsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData orderby clause (e.g., CreationTime desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataAlertCollection](ui_path/models/o_data_alert_collection.py), [ListAlertsErrorBody](ui_path/errors/list_alerts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataAlertCollection](ui_path/models/o_data_alert_collection.py)</code> -- A list of alerts

**On `Failure`**: `error` is <code>[ListAlertsErrorBody](ui_path/errors/list_alerts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AppInventory

> Source: [AppInventory](ui_path/apis/app_inventory.py)

<details>
<summary><code>def bulk_upsert_app_inventory(body: AppinventoryRequest | AppinventoryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppInventoryListResponse, BulkUpsertAppInventoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or updates application entries in bulk. If an application with the same name already exists, it will be updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the application inventory from an external CMDB or asset register.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_inventory.with_raw_response.bulk_upsert_app_inventory(AppinventoryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppInventoryListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpsertAppInventoryErrorBody
```

**Async**

```python
result = await async_client.app_inventory.with_raw_response.bulk_upsert_app_inventory(AppinventoryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppInventoryListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpsertAppInventoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AppinventoryRequest](ui_path/models/appinventory_request.py) \| [AppinventoryRequestDict](ui_path/models/appinventory_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py), [BulkUpsertAppInventoryErrorBody](ui_path/errors/bulk_upsert_app_inventory_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py)</code> -- Applications upserted successfully

**On `Failure`**: `error` is <code>[BulkUpsertAppInventoryErrorBody](ui_path/errors/bulk_upsert_app_inventory_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_application(application_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteApplicationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes an application entry from the application inventory by its unique identifier. Automations that reference this application will lose the association.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_inventory.with_raw_response.delete_application(12345)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApplicationErrorBody
```

**Async**

```python
result = await async_client.app_inventory.with_raw_response.delete_application(12345)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApplicationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_id</code> | <code>int</code> | Unique identifier of the application to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteApplicationErrorBody](ui_path/errors/delete_application_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteApplicationErrorBody](ui_path/errors/delete_application_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_app_inventory(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppInventoryListResponse, ListAppInventoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the application inventory used for automation assessments. Each entry represents a business application that may be involved in automations. Inventory data is used in the assessment process to calculate automation complexity and effort.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.app_inventory.with_raw_response.list_app_inventory(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppInventoryListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAppInventoryErrorBody
```

**Async**

```python
result = await async_client.app_inventory.with_raw_response.list_app_inventory(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppInventoryListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAppInventoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (1-based)<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py), [ListAppInventoryErrorBody](ui_path/errors/list_app_inventory_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py)</code> -- A list of application inventory entries

**On `Failure`**: `error` is <code>[ListAppInventoryErrorBody](ui_path/errors/list_app_inventory_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](ui_path/apis/assets.py)

<details>
<summary><code>def create_asset(body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Asset, CreateAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer, Bool, or Credential. Credential assets store username and password pairs securely.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.create_asset(
    Asset(
        id=1,
        name="example-value",
        value_type=ValueType.TEXT,
        string_value="example-value",
        int_value=1,
        bool_value=True,
        credential_username="example-value",
        credential_password="example-value",
        description="example-value",
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.create_asset(
    Asset(
        id=1,
        name="example-value",
        value_type=ValueType.TEXT,
        string_value="example-value",
        int_value=1,
        bool_value=True,
        credential_username="example-value",
        credential_password="example-value",
        description="example-value",
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Asset](ui_path/models/asset.py) \| [AssetDict](ui_path/models/asset.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Asset](ui_path/models/asset.py), [CreateAssetErrorBody](ui_path/errors/create_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Asset](ui_path/models/asset.py)</code> -- Asset created successfully

**On `Failure`**: `error` is <code>[CreateAssetErrorBody](ui_path/errors/create_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be undone. Processes that reference this asset will fail until the asset is recreated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.delete_asset(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.delete_asset(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>int</code> | The unique integer identifier of the entity |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteAssetErrorBody](ui_path/errors/delete_asset_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAssetErrorBody](ui_path/errors/delete_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Asset, GetAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type, value, and folder scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.get_asset(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.get_asset(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>int</code> | The unique integer identifier of the entity |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Asset](ui_path/models/asset.py), [GetAssetErrorBody](ui_path/errors/get_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Asset](ui_path/models/asset.py)</code> -- The requested asset

**On `Failure`**: `error` is <code>[GetAssetErrorBody](ui_path/errors/get_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_assets(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataAssetCollection, ListAssetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials, text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.list_assets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataAssetCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAssetsErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.list_assets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataAssetCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAssetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataAssetCollection](ui_path/models/o_data_asset_collection.py), [ListAssetsErrorBody](ui_path/errors/list_assets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataAssetCollection](ui_path/models/o_data_asset_collection.py)</code> -- A list of assets

**On `Failure`**: `error` is <code>[ListAssetsErrorBody](ui_path/errors/list_assets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_asset(key: int, body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Asset, UpdateAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing asset by its unique integer identifier. The full asset object must be provided in the request body with the updated values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.update_asset(
    1,
    Asset(
        id=1,
        name="example-value",
        value_type=ValueType.TEXT,
        string_value="example-value",
        int_value=1,
        bool_value=True,
        credential_username="example-value",
        credential_password="example-value",
        description="example-value",
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.update_asset(
    1,
    Asset(
        id=1,
        name="example-value",
        value_type=ValueType.TEXT,
        string_value="example-value",
        int_value=1,
        bool_value=True,
        credential_username="example-value",
        credential_password="example-value",
        description="example-value",
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>int</code> | The unique integer identifier of the entity |
| <code>body</code> | <code>[Asset](ui_path/models/asset.py) \| [AssetDict](ui_path/models/asset.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Asset](ui_path/models/asset.py), [UpdateAssetErrorBody](ui_path/errors/update_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Asset](ui_path/models/asset.py)</code> -- Asset updated successfully

**On `Failure`**: `error` is <code>[UpdateAssetErrorBody](ui_path/errors/update_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](ui_path/apis/audit_logs.py)

<details>
<summary><code>def get_organization_audit_sources(organization_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuditSources, GetOrganizationAuditSourcesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves metadata about available audit event sources at the organization level. Returns the list of services that generate audit events along with available event types and categories for use as filters in the query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audit_logs.with_raw_response.get_organization_audit_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditSources
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationAuditSourcesErrorBody
```

**Async**

```python
result = await async_client.audit_logs.with_raw_response.get_organization_audit_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditSources
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationAuditSourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AuditSources](ui_path/models/audit_sources.py), [GetOrganizationAuditSourcesErrorBody](ui_path/errors/get_organization_audit_sources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuditSources](ui_path/models/audit_sources.py)</code> -- Available organization audit event sources

**On `Failure`**: `error` is <code>[GetOrganizationAuditSourcesErrorBody](ui_path/errors/get_organization_audit_sources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_organization_audit_events(organization_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuditEventCollection, QueryOrganizationAuditEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves audit events at the organization level filtered by time range, event source, event type, user, and other criteria. Returns a paginated list of audit events with actor information, event details, and status. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audit_logs.with_raw_response.query_organization_audit_events("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditEventCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryOrganizationAuditEventsErrorBody
```

**Async**

```python
result = await async_client.audit_logs.with_raw_response.query_organization_audit_events("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditEventCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryOrganizationAuditEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Start of the audit event time range (ISO 8601 datetime)<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | End of the audit event time range (ISO 8601 datetime)<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | Filter by event source service name<br>**Default**: <code>None</code> |
| <code>max_count</code> | <code>int \| None</code> | Maximum number of audit events to return<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AuditEventCollection](ui_path/models/audit_event_collection.py), [QueryOrganizationAuditEventsErrorBody](ui_path/errors/query_organization_audit_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuditEventCollection](ui_path/models/audit_event_collection.py)</code> -- Audit events matching the query criteria

**On `Failure`**: `error` is <code>[QueryOrganizationAuditEventsErrorBody](ui_path/errors/query_organization_audit_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_tenant_audit_events(organization_name: str, tenant_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuditEventCollection, QueryTenantAuditEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user, and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audit_logs.with_raw_response.query_tenant_audit_events("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditEventCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryTenantAuditEventsErrorBody
```

**Async**

```python
result = await async_client.audit_logs.with_raw_response.query_tenant_audit_events(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditEventCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryTenantAuditEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>tenant_name</code> | <code>str</code> | The name of the UiPath tenant |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Start of the audit event time range (ISO 8601 datetime)<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | End of the audit event time range (ISO 8601 datetime)<br>**Default**: <code>None</code> |
| <code>source</code> | <code>list&#91;str&#93; \| None</code> | Filter by event source service name<br>**Default**: <code>None</code> |
| <code>max_count</code> | <code>int \| None</code> | Maximum number of audit events to return<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AuditEventCollection](ui_path/models/audit_event_collection.py), [QueryTenantAuditEventsErrorBody](ui_path/errors/query_tenant_audit_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuditEventCollection](ui_path/models/audit_event_collection.py)</code> -- Tenant-level audit events matching the query criteria

**On `Failure`**: `error` is <code>[QueryTenantAuditEventsErrorBody](ui_path/errors/query_tenant_audit_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](ui_path/apis/automations.py)

<details>
<summary><code>def create_automation_idea(body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, CreateAutomationIdeaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and is available for assessment and prioritization by CoE administrators. The request body must include the idea name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.create_automation_idea(
    CreateAutomationIdeaRequest(name="some example string", description="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAutomationIdeaErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.create_automation_idea(
    CreateAutomationIdeaRequest(name="some example string", description="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAutomationIdeaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAutomationIdeaRequest](ui_path/models/create_automation_idea_request.py) \| [CreateAutomationIdeaRequestDict](ui_path/models/create_automation_idea_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Automation](ui_path/models/automation.py), [CreateAutomationIdeaErrorBody](ui_path/errors/create_automation_idea_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](ui_path/models/automation.py)</code> -- Automation idea created successfully

**On `Failure`**: `error` is <code>[CreateAutomationIdeaErrorBody](ui_path/errors/create_automation_idea_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.delete_automation(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.delete_automation(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automation_id</code> | <code>int</code> | Unique integer identifier of the automation idea or project |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteAutomationErrorBody](ui_path/errors/delete_automation_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAutomationErrorBody](ui_path/errors/delete_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, GetAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase, status, cost-benefit analysis data, collaborators, documents, and tags.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.get_automation(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.get_automation(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automation_id</code> | <code>int</code> | Unique integer identifier of the automation idea or project |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Automation](ui_path/models/automation.py), [GetAutomationErrorBody](ui_path/errors/get_automation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](ui_path/models/automation.py)</code> -- The requested automation record

**On `Failure`**: `error` is <code>[GetAutomationErrorBody](ui_path/errors/get_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automation_collaborators(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationsCollaboratorsResponse, ListAutomationCollaboratorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have defined roles such as subject matter expert, developer, or reviewer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.list_automation_collaborators(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationsCollaboratorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationCollaboratorsErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.list_automation_collaborators(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationsCollaboratorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationCollaboratorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automation_id</code> | <code>int</code> | Unique integer identifier of the automation idea or project |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AutomationsCollaboratorsResponse](ui_path/models/automations_collaborators_response.py), [ListAutomationCollaboratorsErrorBody](ui_path/errors/list_automation_collaborators_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationsCollaboratorsResponse](ui_path/models/automations_collaborators_response.py)</code> -- A list of collaborators for the automation

**On `Failure`**: `error` is <code>[ListAutomationCollaboratorsErrorBody](ui_path/errors/list_automation_collaborators_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automations(*, phase: str | None = None, status: str | None = None, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationListResponse, ListAutomationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status, and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit analysis data, and submission details. Used by CoE teams to programmatically query and track the automation pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.list_automations(
    phase="example-value", status="Active", page=1, page_size=1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationsErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.list_automations(
    phase="example-value", status="Active", page=1, page_size=1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>phase</code> | <code>str \| None</code> | Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production)<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Filter automations by status within their current phase<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (1-based)<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AutomationListResponse](ui_path/models/automation_list_response.py), [ListAutomationsErrorBody](ui_path/errors/list_automations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationListResponse](ui_path/models/automation_list_response.py)</code> -- A paginated list of automations

**On `Failure`**: `error` is <code>[ListAutomationsErrorBody](ui_path/errors/list_automations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_automation_collaborator(automation_id: int, user_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RemoveAutomationCollaboratorErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the automation idea or project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.remove_automation_collaborator(1, 12345)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveAutomationCollaboratorErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.remove_automation_collaborator(1, 12345)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveAutomationCollaboratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automation_id</code> | <code>int</code> | Unique integer identifier of the automation idea or project |
| <code>user_id</code> | <code>int</code> | Unique identifier of the user to remove as a collaborator |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [RemoveAutomationCollaboratorErrorBody](ui_path/errors/remove_automation_collaborator_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RemoveAutomationCollaboratorErrorBody](ui_path/errors/remove_automation_collaborator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_automation(automation_id: int, body: UpdateAutomationRequest | UpdateAutomationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, UpdateAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates an automation record by its unique identifier. Commonly used to advance an automation through the pipeline by updating its phase and status. Only fields included in the request body are modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.update_automation(1, UpdateAutomationRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.update_automation(1, UpdateAutomationRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automation_id</code> | <code>int</code> | Unique integer identifier of the automation idea or project |
| <code>body</code> | <code>[UpdateAutomationRequest](ui_path/models/update_automation_request.py) \| [UpdateAutomationRequestDict](ui_path/models/update_automation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Automation](ui_path/models/automation.py), [UpdateAutomationErrorBody](ui_path/errors/update_automation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](ui_path/models/automation.py)</code> -- Automation updated successfully

**On `Failure`**: `error` is <code>[UpdateAutomationErrorBody](ui_path/errors/update_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Classification

> Source: [Classification](ui_path/apis/classification.py)

<details>
<summary><code>def classify_document_async(project_id: str, body: ClassificationRequest | ClassificationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncJobStartResponse, ClassifyDocumentAsyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once processing is complete.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.classification.with_raw_response.classify_document_async(
    "some example string",
    ClassificationRequest(
        document_id="some example string", classifiers_options=[ClassifierOption(classifier_id="some example string")]
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClassifyDocumentAsyncErrorBody
```

**Async**

```python
result = await async_client.classification.with_raw_response.classify_document_async(
    "some example string",
    ClassificationRequest(
        document_id="some example string", classifiers_options=[ClassifierOption(classifier_id="some example string")]
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClassifyDocumentAsyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>body</code> | <code>[ClassificationRequest](ui_path/models/classification_request.py) \| [ClassificationRequestDict](ui_path/models/classification_request.py)</code> | The request body. |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AsyncJobStartResponse](ui_path/models/async_job_start_response.py), [ClassifyDocumentAsyncErrorBody](ui_path/errors/classify_document_async_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncJobStartResponse](ui_path/models/async_job_start_response.py)</code> -- Classification job started; use the returned requestId to poll for results

**On `Failure`**: `error` is <code>[ClassifyDocumentAsyncErrorBody](ui_path/errors/classify_document_async_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClassificationResult, GetClassificationResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the result of an asynchronous classification request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results are available for 24 hours from the time the job completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.classification.with_raw_response.get_classification_result(
    "some example string", "some example string", api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClassificationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClassificationResultErrorBody
```

**Async**

```python
result = await async_client.classification.with_raw_response.get_classification_result(
    "some example string", "some example string", api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClassificationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetClassificationResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>request_id</code> | <code>str</code> | Unique identifier of the asynchronous job request to retrieve results for |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ClassificationResult](ui_path/models/classification_result.py), [GetClassificationResultErrorBody](ui_path/errors/get_classification_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClassificationResult](ui_path/models/classification_result.py)</code> -- Classification result or current job status

**On `Failure`**: `error` is <code>[GetClassificationResultErrorBody](ui_path/errors/get_classification_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Digitization

> Source: [Digitization](ui_path/apis/digitization.py)

<details>
<summary><code>def digitize_document(project_id: str, body: DigitizationRequest | DigitizationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[DigitizationResult, DigitizeDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a document for digitization, converting it into a structured digital representation that can be used for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The response includes a documentId that must be used in subsequent classification, extraction, and validation requests. Digitized results are retained for seven days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.digitization.with_raw_response.digitize_document(
    "some example string",
    DigitizationRequest(
        document_id="example-value", content_type=ContentType.IMAGE_JPEG, document_base64="example-value"
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DigitizationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DigitizeDocumentErrorBody
```

**Async**

```python
result = await async_client.digitization.with_raw_response.digitize_document(
    "some example string",
    DigitizationRequest(
        document_id="example-value", content_type=ContentType.IMAGE_JPEG, document_base64="example-value"
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DigitizationResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DigitizeDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>body</code> | <code>[DigitizationRequest](ui_path/models/digitization_request.py) \| [DigitizationRequestDict](ui_path/models/digitization_request.py)</code> | The request body. |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[DigitizationResult](ui_path/models/digitization_result.py), [DigitizeDocumentErrorBody](ui_path/errors/digitize_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DigitizationResult](ui_path/models/digitization_result.py)</code> -- Document digitized successfully

**On `Failure`**: `error` is <code>[DigitizeDocumentErrorBody](ui_path/errors/digitize_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](ui_path/apis/discovery.py)

<details>
<summary><code>def list_classifiers(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectsClassifiersResponse, ListClassifiersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available classifier models configured within a specific Document Understanding project. Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning models trained on specific document types; generative classifiers use large language models.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.discovery.with_raw_response.list_classifiers("some example string", api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsClassifiersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListClassifiersErrorBody
```

**Async**

```python
result = await async_client.discovery.with_raw_response.list_classifiers("some example string", api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsClassifiersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListClassifiersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectsClassifiersResponse](ui_path/models/projects_classifiers_response.py), [ListClassifiersErrorBody](ui_path/errors/list_classifiers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectsClassifiersResponse](ui_path/models/projects_classifiers_response.py)</code> -- A list of classifiers for the project

**On `Failure`**: `error` is <code>[ListClassifiersErrorBody](ui_path/errors/list_classifiers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_extractors(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectsExtractorsResponse, ListExtractorsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available extractor models configured within a specific Document Understanding project. Each extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in extraction requests to invoke the correct model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.discovery.with_raw_response.list_extractors("some example string", api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsExtractorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtractorsErrorBody
```

**Async**

```python
result = await async_client.discovery.with_raw_response.list_extractors("some example string", api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsExtractorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtractorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectsExtractorsResponse](ui_path/models/projects_extractors_response.py), [ListExtractorsErrorBody](ui_path/errors/list_extractors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectsExtractorsResponse](ui_path/models/projects_extractors_response.py)</code> -- A list of extractors for the project

**On `Failure`**: `error` is <code>[ListExtractorsErrorBody](ui_path/errors/list_extractors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects(*, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectsResponse, ListProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available Document Understanding projects accessible to the authenticated user. Each project contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use project IDs to scope classification and extraction requests to a specific project's models.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.discovery.with_raw_response.list_projects(api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

**Async**

```python
result = await async_client.discovery.with_raw_response.list_projects(api_version="1.0.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectsResponse](ui_path/models/projects_response.py), [ListProjectsErrorBody](ui_path/errors/list_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectsResponse](ui_path/models/projects_response.py)</code> -- A list of available Document Understanding projects

**On `Failure`**: `error` is <code>[ListProjectsErrorBody](ui_path/errors/list_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](ui_path/apis/entities.py)

<details>
<summary><code>def create_entity_record(entity_name: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityRecord, CreateEntityRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new record for the specified custom entity type. The request body must conform to the entity's schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and should not be included in the request body. Requires the DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.create_entity_record("some example string", {})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntityRecordErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.create_entity_record("some example string", {})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntityRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[EntityRecord](ui_path/models/entity_record.py), [CreateEntityRecordErrorBody](ui_path/errors/create_entity_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- Entity record created successfully

**On `Failure`**: `error` is <code>[CreateEntityRecordErrorBody](ui_path/errors/create_entity_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_entity_record(entity_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEntityRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.delete_entity_record("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntityRecordErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.delete_entity_record(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntityRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>record_id</code> | <code>str</code> | Unique identifier of the entity record |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteEntityRecordErrorBody](ui_path/errors/delete_entity_record_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEntityRecordErrorBody](ui_path/errors/delete_entity_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_entity_record(entity_name: str, record_id: str, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityRecord, GetEntityRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single entity record by its unique identifier. Returns all fields of the record including system fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.get_entity_record(
    "some example string", "some example string", select="example-value", expand="example-value"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityRecordErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.get_entity_record(
    "some example string", "some example string", select="example-value", expand="example-value"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>record_id</code> | <code>str</code> | Unique identifier of the entity record |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of field names to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entity references to expand inline in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[EntityRecord](ui_path/models/entity_record.py), [GetEntityRecordErrorBody](ui_path/errors/get_entity_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- The requested entity record

**On `Failure`**: `error` is <code>[GetEntityRecordErrorBody](ui_path/errors/get_entity_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_entity_records(entity_name: str, *, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityRecordCollection, ListEntityRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions, ordering, pagination via skip and top, and field selection. The available entity names and their fields depend on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.list_entity_records(
    "some example string",
    filter_="example-value",
    orderby="example-value",
    top=1,
    skip=1,
    select="example-value",
    expand="example-value",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecordCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEntityRecordsErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.list_entity_records(
    "some example string",
    filter_="example-value",
    orderby="example-value",
    top=1,
    skip=1,
    select="example-value",
    expand="example-value",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecordCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEntityRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>filter_</code> | <code>str \| None</code> | Filter expression to narrow results by field values<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | Field name and direction to sort results (e.g., CreatedOn desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of field names to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entity references to expand inline in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[EntityRecordCollection](ui_path/models/entity_record_collection.py), [ListEntityRecordsErrorBody](ui_path/errors/list_entity_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityRecordCollection](ui_path/models/entity_record_collection.py)</code> -- A list of entity records matching the query criteria

**On `Failure`**: `error` is <code>[ListEntityRecordsErrorBody](ui_path/errors/list_entity_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_entity_records(entity_name: str, body: EntityQueryRequest | EntityQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityRecordCollection, QueryEntityRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs an advanced query against the entity using a structured filter expression in the request body. Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.query_entity_records("some example string", EntityQueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecordCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryEntityRecordsErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.query_entity_records("some example string", EntityQueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecordCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryEntityRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>body</code> | <code>[EntityQueryRequest](ui_path/models/entity_query_request.py) \| [EntityQueryRequestDict](ui_path/models/entity_query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[EntityRecordCollection](ui_path/models/entity_record_collection.py), [QueryEntityRecordsErrorBody](ui_path/errors/query_entity_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityRecordCollection](ui_path/models/entity_record_collection.py)</code> -- Records matching the query criteria

**On `Failure`**: `error` is <code>[QueryEntityRecordsErrorBody](ui_path/errors/query_entity_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_entity_record(entity_name: str, record_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityRecord, UpdateEntityRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing entity record by its unique identifier. The request body should include only the fields to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and ModifiedBy are updated automatically. Requires the DataService.Data scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entities.with_raw_response.update_entity_record("some example string", "some example string", {})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntityRecordErrorBody
```

**Async**

```python
result = await async_client.entities.with_raw_response.update_entity_record(
    "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityRecord
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntityRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_name</code> | <code>str</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>record_id</code> | <code>str</code> | Unique identifier of the entity record |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[EntityRecord](ui_path/models/entity_record.py), [UpdateEntityRecordErrorBody](ui_path/errors/update_entity_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- Entity record updated successfully

**On `Failure`**: `error` is <code>[UpdateEntityRecordErrorBody](ui_path/errors/update_entity_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Extraction

> Source: [Extraction](ui_path/apis/extraction.py)

<details>
<summary><code>def extract_document_async(project_id: str, body: ExtractionRequest | ExtractionRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ExtractDocumentAsyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the document type must be specified in the request body. Returns a requestId to poll for results. Results are retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.extraction.with_raw_response.extract_document_async(
    "some example string",
    ExtractionRequest(
        document_id="some example string", extractors_options=[ExtractorOption(extractor_id="some example string")]
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractDocumentAsyncErrorBody
```

**Async**

```python
result = await async_client.extraction.with_raw_response.extract_document_async(
    "some example string",
    ExtractionRequest(
        document_id="some example string", extractors_options=[ExtractorOption(extractor_id="some example string")]
    ),
    api_version="1.0.0",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractDocumentAsyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>body</code> | <code>[ExtractionRequest](ui_path/models/extraction_request.py) \| [ExtractionRequestDict](ui_path/models/extraction_request.py)</code> | The request body. |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py), [ExtractDocumentAsyncErrorBody](ui_path/errors/extract_document_async_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py)</code> -- Extraction job started; use the returned requestId to poll for results

**On `Failure`**: `error` is <code>[ExtractDocumentAsyncErrorBody](ui_path/errors/extract_document_async_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_extraction_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExtractionResult, GetExtractionResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the result of an asynchronous extraction request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns extracted field values with associated confidence scores. Results are available for 24 hours from the time the job completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.extraction.with_raw_response.get_extraction_result(
    "some example string", "some example string", api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtractionResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExtractionResultErrorBody
```

**Async**

```python
result = await async_client.extraction.with_raw_response.get_extraction_result(
    "some example string", "some example string", api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtractionResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExtractionResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>request_id</code> | <code>str</code> | Unique identifier of the asynchronous job request to retrieve results for |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ExtractionResult](ui_path/models/extraction_result.py), [GetExtractionResultErrorBody](ui_path/errors/get_extraction_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExtractionResult](ui_path/models/extraction_result.py)</code> -- Extraction result or current job status

**On `Failure`**: `error` is <code>[GetExtractionResultErrorBody](ui_path/errors/get_extraction_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](ui_path/apis/folders.py)

<details>
<summary><code>def list_folders(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataFolderCollection, ListFoldersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the X-UIPATH-OrganizationUnitId request header.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.list_folders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataFolderCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.list_folders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataFolderCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataFolderCollection](ui_path/models/o_data_folder_collection.py), [ListFoldersErrorBody](ui_path/errors/list_folders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataFolderCollection](ui_path/models/o_data_folder_collection.py)</code> -- A list of folders

**On `Failure`**: `error` is <code>[ListFoldersErrorBody](ui_path/errors/list_folders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](ui_path/apis/groups.py)

<details>
<summary><code>def create_group(organization_name: str, body: CreateGroupRequest | CreateGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, CreateGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.create_group(
    "some example string", CreateGroupRequest(name="example-value", type_=Type.LOCAL)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.create_group(
    "some example string", CreateGroupRequest(name="example-value", type_=Type.LOCAL)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>body</code> | <code>[CreateGroupRequest](ui_path/models/create_group_request.py) \| [CreateGroupRequestDict](ui_path/models/create_group_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Group](ui_path/models/group.py), [CreateGroupErrorBody](ui_path/errors/create_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](ui_path/models/group.py)</code> -- Group created successfully

**On `Failure`**: `error` is <code>[CreateGroupErrorBody](ui_path/errors/create_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group(organization_name: str, partition_global_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, GetGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific user group by its unique identifier within the specified organizational partition. Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.get_group("some example string", "some example string", "abc123")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.get_group("some example string", "some example string", "abc123")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>partition_global_id</code> | <code>str</code> | Global partition identifier for the organization or tenant scope |
| <code>group_id</code> | <code>str</code> | Unique identifier of the group |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Group](ui_path/models/group.py), [GetGroupErrorBody](ui_path/errors/get_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](ui_path/models/group.py)</code> -- The requested group

**On `Failure`**: `error` is <code>[GetGroupErrorBody](ui_path/errors/get_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_groups(organization_name: str, partition_global_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IdentityApiGroupResponse, ListGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all user groups within the specified organizational partition (tenant or organization). Groups aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.list_groups("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentityApiGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupsErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.list_groups("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IdentityApiGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>partition_global_id</code> | <code>str</code> | Global partition identifier for the organization or tenant scope |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[IdentityApiGroupResponse](ui_path/models/identity_api_group_response.py), [ListGroupsErrorBody](ui_path/errors/list_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IdentityApiGroupResponse](ui_path/models/identity_api_group_response.py)</code> -- A list of user groups

**On `Failure`**: `error` is <code>[ListGroupsErrorBody](ui_path/errors/list_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](ui_path/apis/jobs.py)

<details>
<summary><code>def get_job(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, GetJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single job by its unique integer identifier. Returns full job details including state, start and end times, robot information, and associated process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>int</code> | The unique integer identifier of the entity |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Job](ui_path/models/job.py), [GetJobErrorBody](ui_path/errors/get_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](ui_path/models/job.py)</code> -- The requested job

**On `Failure`**: `error` is <code>[GetJobErrorBody](ui_path/errors/get_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_jobs(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataJobCollection, ListJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby, $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes by robots.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataJobCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobsErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataJobCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData orderby clause (e.g., CreationTime desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of property names to include in the response<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataJobCollection](ui_path/models/o_data_job_collection.py), [ListJobsErrorBody](ui_path/errors/list_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataJobCollection](ui_path/models/o_data_job_collection.py)</code> -- A list of jobs matching the query criteria

**On `Failure`**: `error` is <code>[ListJobsErrorBody](ui_path/errors/list_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_jobs(body: StartJobsRequest | StartJobsRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataJobCollection, StartJobsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target folder. Returns details of the created jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.start_jobs(
    StartJobsRequest(
        start_info=StartInfo(release_key=UUID("00000000-0000-0000-0000-000000000000"), strategy=Strategy.ALL)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataJobCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartJobsErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.start_jobs(
    StartJobsRequest(
        start_info=StartInfo(release_key=UUID("00000000-0000-0000-0000-000000000000"), strategy=Strategy.ALL)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataJobCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartJobsRequest](ui_path/models/start_jobs_request.py) \| [StartJobsRequestDict](ui_path/models/start_jobs_request.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataJobCollection](ui_path/models/o_data_job_collection.py), [StartJobsErrorBody](ui_path/errors/start_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataJobCollection](ui_path/models/o_data_job_collection.py)</code> -- Jobs were successfully created and started

**On `Failure`**: `error` is <code>[StartJobsErrorBody](ui_path/errors/start_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_job(body: StopJobRequest | StopJobRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StopJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish) or Kill (forcefully terminates the job immediately). Requires the job ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.stop_job(StopJobRequest(job_id=1, strategy=Strategy1.SOFT_STOP))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopJobErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.stop_job(StopJobRequest(job_id=1, strategy=Strategy1.SOFT_STOP))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StopJobRequest](ui_path/models/stop_job_request.py) \| [StopJobRequestDict](ui_path/models/stop_job_request.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [StopJobErrorBody](ui_path/errors/stop_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StopJobErrorBody](ui_path/errors/stop_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Licenses

> Source: [Licenses](ui_path/apis/licenses.py)

<details>
<summary><code>def get_group_license_allocation(organization_name: str, account_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupLicenseAllocation, GetGroupLicenseAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the user license allocation rule for a specific group within the organization account. Returns the license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.licenses.with_raw_response.get_group_license_allocation("some example string", "abc123", "abc123")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupLicenseAllocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLicenseAllocationErrorBody
```

**Async**

```python
result = await async_client.licenses.with_raw_response.get_group_license_allocation(
    "some example string", "abc123", "abc123"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupLicenseAllocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupLicenseAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>account_id</code> | <code>str</code> | Unique identifier of the organization account |
| <code>group_id</code> | <code>str</code> | Unique identifier of the user group |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[GroupLicenseAllocation](ui_path/models/group_license_allocation.py), [GetGroupLicenseAllocationErrorBody](ui_path/errors/get_group_license_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupLicenseAllocation](ui_path/models/group_license_allocation.py)</code> -- License allocation for the group

**On `Failure`**: `error` is <code>[GetGroupLicenseAllocationErrorBody](ui_path/errors/get_group_license_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_group_license_allocation(organization_name: str, account_id: str, group_id: str, body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GroupLicenseAllocation, UpdateGroupLicenseAllocationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allocates or updates user licenses for a specific group. The rule defines which license types members of this group are entitled to. This controls the licenses automatically assigned when a member of the group first logs in. Requires the PM.License OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.licenses.with_raw_response.update_group_license_allocation(
    "some example string",
    "abc123",
    "abc123",
    UpdateGroupLicenseAllocationRequest(user_licenses=[LicenseAllocationEntry()]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupLicenseAllocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupLicenseAllocationErrorBody
```

**Async**

```python
result = await async_client.licenses.with_raw_response.update_group_license_allocation(
    "some example string",
    "abc123",
    "abc123",
    UpdateGroupLicenseAllocationRequest(user_licenses=[LicenseAllocationEntry()]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GroupLicenseAllocation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupLicenseAllocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>account_id</code> | <code>str</code> | Unique identifier of the organization account |
| <code>group_id</code> | <code>str</code> | Unique identifier of the user group |
| <code>body</code> | <code>[UpdateGroupLicenseAllocationRequest](ui_path/models/update_group_license_allocation_request.py) \| [UpdateGroupLicenseAllocationRequestDict](ui_path/models/update_group_license_allocation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[GroupLicenseAllocation](ui_path/models/group_license_allocation.py), [UpdateGroupLicenseAllocationErrorBody](ui_path/errors/update_group_license_allocation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GroupLicenseAllocation](ui_path/models/group_license_allocation.py)</code> -- License allocation updated successfully

**On `Failure`**: `error` is <code>[UpdateGroupLicenseAllocationErrorBody](ui_path/errors/update_group_license_allocation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Machines

> Source: [Machines](ui_path/apis/machines.py)

<details>
<summary><code>def list_machines(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataMachineCollection, ListMachinesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of machine templates and registered machines. Machine templates define the number of runtimes available for cloud robots, while standard machines represent physical or virtual machines where Unattended Robot is installed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.machines.with_raw_response.list_machines()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataMachineCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMachinesErrorBody
```

**Async**

```python
result = await async_client.machines.with_raw_response.list_machines()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataMachineCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMachinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataMachineCollection](ui_path/models/o_data_machine_collection.py), [ListMachinesErrorBody](ui_path/errors/list_machines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataMachineCollection](ui_path/models/o_data_machine_collection.py)</code> -- A list of machines

**On `Failure`**: `error` is <code>[ListMachinesErrorBody](ui_path/errors/list_machines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Packages

> Source: [Packages](ui_path/apis/packages.py)

<details>
<summary><code>def list_packages(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataPackageCollection, ListPackagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation packages uploaded to Orchestrator. Each package represents a versioned NuGet package containing one or more automation processes. Supports filtering by package name and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.packages.with_raw_response.list_packages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataPackageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPackagesErrorBody
```

**Async**

```python
result = await async_client.packages.with_raw_response.list_packages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataPackageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPackagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataPackageCollection](ui_path/models/o_data_package_collection.py), [ListPackagesErrorBody](ui_path/errors/list_packages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataPackageCollection](ui_path/models/o_data_package_collection.py)</code> -- A list of packages

**On `Failure`**: `error` is <code>[ListPackagesErrorBody](ui_path/errors/list_packages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pipeline

> Source: [Pipeline](ui_path/apis/pipeline.py)

<details>
<summary><code>def get_automation_pipeline(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineData, GetAutomationPipelineErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the automation program.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.pipeline.with_raw_response.get_automation_pipeline()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineData
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationPipelineErrorBody
```

**Async**

```python
result = await async_client.pipeline.with_raw_response.get_automation_pipeline()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineData
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationPipelineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[PipelineData](ui_path/models/pipeline_data.py), [GetAutomationPipelineErrorBody](ui_path/errors/get_automation_pipeline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineData](ui_path/models/pipeline_data.py)</code> -- Automation pipeline summary data

**On `Failure`**: `error` is <code>[GetAutomationPipelineErrorBody](ui_path/errors/get_automation_pipeline_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](ui_path/apis/processes.py)

<details>
<summary><code>def list_processes(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataProcessCollection, ListProcessesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation processes deployed in the current folder. Each process represents a specific version of a published package configured for execution. Supports OData filtering and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.list_processes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataProcessCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProcessesErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.list_processes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataProcessCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProcessesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData orderby clause (e.g., CreationTime desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataProcessCollection](ui_path/models/o_data_process_collection.py), [ListProcessesErrorBody](ui_path/errors/list_processes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataProcessCollection](ui_path/models/o_data_process_collection.py)</code> -- A list of processes

**On `Failure`**: `error` is <code>[ListProcessesErrorBody](ui_path/errors/list_processes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](ui_path/apis/projects.py)

<details>
<summary><code>def create_project(body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectUiPathTestManagerProjectsApi, CreateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test project in Test Manager. The project becomes the container for all test cases, requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.create_project(
    CreateProjectRequest(name="example-value", description="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUiPathTestManagerProjectsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.create_project(
    CreateProjectRequest(name="example-value", description="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUiPathTestManagerProjectsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProjectRequest](ui_path/models/create_project_request.py) \| [CreateProjectRequestDict](ui_path/models/create_project_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py), [CreateProjectErrorBody](ui_path/errors/create_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py)</code> -- Test project created successfully

**On `Failure`**: `error` is <code>[CreateProjectErrorBody](ui_path/errors/create_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(project_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectUiPathTestManagerProjectsApi, GetProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific test project by its unique identifier. Returns project details including name, description, creation date, and summary statistics for test cases and requirements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUiPathTestManagerProjectsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectUiPathTestManagerProjectsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py), [GetProjectErrorBody](ui_path/errors/get_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py)</code> -- The requested test project

**On `Failure`**: `error` is <code>[GetProjectErrorBody](ui_path/errors/get_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects2(*, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectListResponse, ListProjects2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.list_projects2(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjects2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.list_projects2(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjects2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (0-based)<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ProjectListResponse](ui_path/models/project_list_response.py), [ListProjects2ErrorBody](ui_path/errors/list_projects2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectListResponse](ui_path/models/project_list_response.py)</code> -- A list of test projects

**On `Failure`**: `error` is <code>[ListProjects2ErrorBody](ui_path/errors/list_projects2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## QueueItems

> Source: [QueueItems](ui_path/apis/queue_items.py)

<details>
<summary><code>def add_queue_item(body: AddQueueItemRequest | AddQueueItemRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QueueItem, AddQueueItemErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new transaction item to a specified queue. The item can include specific content (custom key-value data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item with its assigned ID and key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queue_items.with_raw_response.add_queue_item(
    AddQueueItemRequest(item_data=QueueItemData(name="some example string"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueueItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddQueueItemErrorBody
```

**Async**

```python
result = await async_client.queue_items.with_raw_response.add_queue_item(
    AddQueueItemRequest(item_data=QueueItemData(name="some example string"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueueItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddQueueItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddQueueItemRequest](ui_path/models/add_queue_item_request.py) \| [AddQueueItemRequestDict](ui_path/models/add_queue_item_request.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[QueueItem](ui_path/models/queue_item.py), [AddQueueItemErrorBody](ui_path/errors/add_queue_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QueueItem](ui_path/models/queue_item.py)</code> -- Queue item added successfully

**On `Failure`**: `error` is <code>[AddQueueItemErrorBody](ui_path/errors/add_queue_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_queue_items(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataQueueItemCollection, ListQueueItemsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and priority. Supports OData filtering, ordering, and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queue_items.with_raw_response.list_queue_items()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataQueueItemCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueueItemsErrorBody
```

**Async**

```python
result = await async_client.queue_items.with_raw_response.list_queue_items()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataQueueItemCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueueItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData orderby clause (e.g., CreationTime desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataQueueItemCollection](ui_path/models/o_data_queue_item_collection.py), [ListQueueItemsErrorBody](ui_path/errors/list_queue_items_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataQueueItemCollection](ui_path/models/o_data_queue_item_collection.py)</code> -- A list of queue items

**On `Failure`**: `error` is <code>[ListQueueItemsErrorBody](ui_path/errors/list_queue_items_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](ui_path/apis/queues.py)

<details>
<summary><code>def create_queue(body: QueueDefinition | QueueDefinitionDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QueueDefinition, CreateQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum retry count, whether to accept only unique references, and enforcement settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.create_queue(
    QueueDefinition(
        id=1,
        name="example-value",
        description="example-value",
        max_number_of_retries=1,
        accept_automatically_retry=True,
        enforce_unique_reference=True,
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueueDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.create_queue(
    QueueDefinition(
        id=1,
        name="example-value",
        description="example-value",
        max_number_of_retries=1,
        accept_automatically_retry=True,
        enforce_unique_reference=True,
        organization_unit_id=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QueueDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueueDefinition](ui_path/models/queue_definition.py) \| [QueueDefinitionDict](ui_path/models/queue_definition.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[QueueDefinition](ui_path/models/queue_definition.py), [CreateQueueErrorBody](ui_path/errors/create_queue_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QueueDefinition](ui_path/models/queue_definition.py)</code> -- Queue definition created successfully

**On `Failure`**: `error` is <code>[CreateQueueErrorBody](ui_path/errors/create_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_queues(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataQueueDefinitionCollection, ListQueuesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA configurations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.list_queues()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataQueueDefinitionCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueuesErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.list_queues()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataQueueDefinitionCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataQueueDefinitionCollection](ui_path/models/o_data_queue_definition_collection.py), [ListQueuesErrorBody](ui_path/errors/list_queues_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataQueueDefinitionCollection](ui_path/models/o_data_queue_definition_collection.py)</code> -- A list of queue definitions

**On `Failure`**: `error` is <code>[ListQueuesErrorBody](ui_path/errors/list_queues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Requirements

> Source: [Requirements](ui_path/apis/requirements.py)

<details>
<summary><code>def create_requirement(project_id: str, body: CreateRequirementRequest | CreateRequirementRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Requirement, CreateRequirementErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new requirement within a test project. Requirements can be linked to test cases to establish traceability coverage. Requires the TM.Requirements OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.requirements.with_raw_response.create_requirement(
    "some example string",
    CreateRequirementRequest(name="example-value", description="example-value", external_id="example-value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Requirement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRequirementErrorBody
```

**Async**

```python
result = await async_client.requirements.with_raw_response.create_requirement(
    "some example string",
    CreateRequirementRequest(name="example-value", description="example-value", external_id="example-value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Requirement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRequirementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateRequirementRequest](ui_path/models/create_requirement_request.py) \| [CreateRequirementRequestDict](ui_path/models/create_requirement_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Requirement](ui_path/models/requirement.py), [CreateRequirementErrorBody](ui_path/errors/create_requirement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Requirement](ui_path/models/requirement.py)</code> -- Requirement created successfully

**On `Failure`**: `error` is <code>[CreateRequirementErrorBody](ui_path/errors/create_requirement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_requirements(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RequirementListResponse, ListRequirementsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all requirements defined within a specific test project. Requirements represent business or technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the TM.Requirements or TM.Requirements.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.requirements.with_raw_response.list_requirements("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequirementListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRequirementsErrorBody
```

**Async**

```python
result = await async_client.requirements.with_raw_response.list_requirements("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequirementListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRequirementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (0-based)<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[RequirementListResponse](ui_path/models/requirement_list_response.py), [ListRequirementsErrorBody](ui_path/errors/list_requirements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RequirementListResponse](ui_path/models/requirement_list_response.py)</code> -- A list of requirements in the project

**On `Failure`**: `error` is <code>[ListRequirementsErrorBody](ui_path/errors/list_requirements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Robots

> Source: [Robots](ui_path/apis/robots.py)

<details>
<summary><code>def list_robots(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataRobotCollection, ListRobotsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of software robots registered with Orchestrator. Each robot entry includes connection state, machine assignment, user assignment, robot type, and licensing information. Supports OData filtering and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.robots.with_raw_response.list_robots()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataRobotCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRobotsErrorBody
```

**Async**

```python
result = await async_client.robots.with_raw_response.list_robots()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataRobotCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRobotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData orderby clause (e.g., CreationTime desc)<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataRobotCollection](ui_path/models/o_data_robot_collection.py), [ListRobotsErrorBody](ui_path/errors/list_robots_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataRobotCollection](ui_path/models/o_data_robot_collection.py)</code> -- A list of robots

**On `Failure`**: `error` is <code>[ListRobotsErrorBody](ui_path/errors/list_robots_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](ui_path/apis/roles.py)

<details>
<summary><code>def list_roles(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataRoleCollection, ListRolesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned to users or groups to control their access to resources and operations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.roles.with_raw_response.list_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataRoleCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRolesErrorBody
```

**Async**

```python
result = await async_client.roles.with_raw_response.list_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataRoleCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataRoleCollection](ui_path/models/o_data_role_collection.py), [ListRolesErrorBody](ui_path/errors/list_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataRoleCollection](ui_path/models/o_data_role_collection.py)</code> -- A list of roles

**On `Failure`**: `error` is <code>[ListRolesErrorBody](ui_path/errors/list_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](ui_path/apis/schedules.py)

<details>
<summary><code>def list_schedules(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataScheduleCollection, ListSchedulesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of time-based triggers configured for automation processes. Each schedule defines when and how often a process should run, along with the target robots and input arguments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.schedules.with_raw_response.list_schedules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataScheduleCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSchedulesErrorBody
```

**Async**

```python
result = await async_client.schedules.with_raw_response.list_schedules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataScheduleCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataScheduleCollection](ui_path/models/o_data_schedule_collection.py), [ListSchedulesErrorBody](ui_path/errors/list_schedules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataScheduleCollection](ui_path/models/o_data_schedule_collection.py)</code> -- A list of process schedules

**On `Failure`**: `error` is <code>[ListSchedulesErrorBody](ui_path/errors/list_schedules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StorageBuckets

> Source: [StorageBuckets](ui_path/apis/storage_buckets.py)

<details>
<summary><code>def list_storage_buckets(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataStorageBucketCollection, ListStorageBucketsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of storage buckets defined in the current folder. Storage buckets provide file storage capabilities for automation processes, backed by providers such as Azure Blob, Amazon S3, or the UiPath internal storage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.storage_buckets.with_raw_response.list_storage_buckets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataStorageBucketCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStorageBucketsErrorBody
```

**Async**

```python
result = await async_client.storage_buckets.with_raw_response.list_storage_buckets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataStorageBucketCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStorageBucketsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataStorageBucketCollection](ui_path/models/o_data_storage_bucket_collection.py), [ListStorageBucketsErrorBody](ui_path/errors/list_storage_buckets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataStorageBucketCollection](ui_path/models/o_data_storage_bucket_collection.py)</code> -- A list of storage buckets

**On `Failure`**: `error` is <code>[ListStorageBucketsErrorBody](ui_path/errors/list_storage_buckets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TestCases

> Source: [TestCases](ui_path/apis/test_cases.py)

<details>
<summary><code>def create_test_case(project_id: str, body: CreateTestCaseRequest | CreateTestCaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestCase, CreateTestCaseErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test case within a test project. The test case can be linked to automation packages deployed in Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_cases.with_raw_response.create_test_case(
    "some example string",
    CreateTestCaseRequest(name="example-value", description="example-value", labels=["example-value"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCase
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTestCaseErrorBody
```

**Async**

```python
result = await async_client.test_cases.with_raw_response.create_test_case(
    "some example string",
    CreateTestCaseRequest(name="example-value", description="example-value", labels=["example-value"]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCase
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTestCaseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateTestCaseRequest](ui_path/models/create_test_case_request.py) \| [CreateTestCaseRequestDict](ui_path/models/create_test_case_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestCase](ui_path/models/test_case.py), [CreateTestCaseErrorBody](ui_path/errors/create_test_case_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestCase](ui_path/models/test_case.py)</code> -- Test case created successfully

**On `Failure`**: `error` is <code>[CreateTestCaseErrorBody](ui_path/errors/create_test_case_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_test_case(project_id: str, test_case_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestCase, GetTestCaseErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific test case by its unique identifier within a project. Returns full test case details including steps, labels, custom fields, automation linkage, and preconditions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_cases.with_raw_response.get_test_case("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCase
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTestCaseErrorBody
```

**Async**

```python
result = await async_client.test_cases.with_raw_response.get_test_case("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCase
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTestCaseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>test_case_id</code> | <code>str</code> | Unique identifier of the test case |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestCase](ui_path/models/test_case.py), [GetTestCaseErrorBody](ui_path/errors/get_test_case_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestCase](ui_path/models/test_case.py)</code> -- The requested test case

**On `Failure`**: `error` is <code>[GetTestCaseErrorBody](ui_path/errors/get_test_case_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_cases(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestCaseListResponse, ListTestCasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test cases defined within a specific test project. Each test case represents a single test scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the TM.TestCases or TM.TestCases.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_cases.with_raw_response.list_test_cases("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCaseListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestCasesErrorBody
```

**Async**

```python
result = await async_client.test_cases.with_raw_response.list_test_cases("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestCaseListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestCasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (0-based)<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestCaseListResponse](ui_path/models/test_case_list_response.py), [ListTestCasesErrorBody](ui_path/errors/list_test_cases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestCaseListResponse](ui_path/models/test_case_list_response.py)</code> -- A list of test cases in the project

**On `Failure`**: `error` is <code>[ListTestCasesErrorBody](ui_path/errors/list_test_cases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TestExecutions

> Source: [TestExecutions](ui_path/apis/test_executions.py)

<details>
<summary><code>def list_test_executions(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestExecutionListResponse, ListTestExecutionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves test execution results within a specific test project. Test executions represent runs of test sets and contain the aggregate pass/fail status across all included test cases. References to individual test case log objects are included for drill-down.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_executions.with_raw_response.list_test_executions("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestExecutionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestExecutionsErrorBody
```

**Async**

```python
result = await async_client.test_executions.with_raw_response.list_test_executions(
    "some example string", page=1, page_size=1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestExecutionListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (0-based)<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestExecutionListResponse](ui_path/models/test_execution_list_response.py), [ListTestExecutionsErrorBody](ui_path/errors/list_test_executions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestExecutionListResponse](ui_path/models/test_execution_list_response.py)</code> -- A list of test executions in the project

**On `Failure`**: `error` is <code>[ListTestExecutionsErrorBody](ui_path/errors/list_test_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TestSets

> Source: [TestSets](ui_path/apis/test_sets.py)

<details>
<summary><code>def create_test_set(project_id: str, body: CreateTestSetRequest | CreateTestSetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestSet, CreateTestSetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test set within a project. The test set can include test cases and be configured to execute against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_sets.with_raw_response.create_test_set(
    "some example string", CreateTestSetRequest(name="example-value", description="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTestSetErrorBody
```

**Async**

```python
result = await async_client.test_sets.with_raw_response.create_test_set(
    "some example string", CreateTestSetRequest(name="example-value", description="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTestSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateTestSetRequest](ui_path/models/create_test_set_request.py) \| [CreateTestSetRequestDict](ui_path/models/create_test_set_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestSet](ui_path/models/test_set.py), [CreateTestSetErrorBody](ui_path/errors/create_test_set_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestSet](ui_path/models/test_set.py)</code> -- Test set created successfully

**On `Failure`**: `error` is <code>[CreateTestSetErrorBody](ui_path/errors/create_test_set_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_sets(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestSetListResponse, ListTestSetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution runs and can be linked to Orchestrator processes to trigger automated execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.test_sets.with_raw_response.list_test_sets("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestSetListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestSetsErrorBody
```

**Async**

```python
result = await async_client.test_sets.with_raw_response.list_test_sets("some example string", page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestSetListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTestSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the test project |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (0-based)<br>**Default**: <code>0</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[TestSetListResponse](ui_path/models/test_set_list_response.py), [ListTestSetsErrorBody](ui_path/errors/list_test_sets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestSetListResponse](ui_path/models/test_set_list_response.py)</code> -- A list of test sets in the project

**On `Failure`**: `error` is <code>[ListTestSetsErrorBody](ui_path/errors/list_test_sets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseUiPathTestManagerProjectsApi](ui_path/models/error_response_ui_path_test_manager_projects_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](ui_path/apis/users.py)

<details>
<summary><code>def add_user(body: AddUserRequest | AddUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, AddUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea submission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.add_user(AddUserRequest(email="user@example.com", role="example-value"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.add_user(
    AddUserRequest(email="user@example.com", role="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddUserRequest](ui_path/models/add_user_request.py) \| [AddUserRequestDict](ui_path/models/add_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[User](ui_path/models/user.py), [AddUserErrorBody](ui_path/errors/add_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](ui_path/models/user.py)</code> -- User added successfully

**On `Failure`**: `error` is <code>[AddUserErrorBody](ui_path/errors/add_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_user(organization_name: str, body: CreateUserRequest | CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User2, CreateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user account in the UiPath organization. The user will receive an invitation email to set up their credentials. The request must include the user's email address, display name, and the tenants or roles to initially assign. Requires the PM.Users OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.create_user(
    "some example string", CreateUserRequest(email="user@example.com", name="example-value", surname="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.create_user(
    "some example string", CreateUserRequest(email="user@example.com", name="example-value", surname="example-value")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>body</code> | <code>[CreateUserRequest](ui_path/models/create_user_request.py) \| [CreateUserRequestDict](ui_path/models/create_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[User2](ui_path/models/user2.py), [CreateUserErrorBody](ui_path/errors/create_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User2](ui_path/models/user2.py)</code> -- User created successfully

**On `Failure`**: `error` is <code>[CreateUserErrorBody](ui_path/errors/create_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user account from the organization by their unique identifier. This action removes the user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone. Requires the PM.Users OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.delete_user("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.delete_user("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>user_id</code> | <code>str</code> | Unique identifier of the user |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteUserErrorBody](ui_path/errors/delete_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteUserErrorBody](ui_path/errors/delete_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| 404 | <code>[ErrorResponse3](ui_path/models/error_response3.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def edit_user(body: EditUserRequest | EditUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, EditUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The user is identified by their unique ID in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.edit_user(EditUserRequest(id=1, role="example-value", is_active=True))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EditUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.edit_user(
    EditUserRequest(id=1, role="example-value", is_active=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EditUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EditUserRequest](ui_path/models/edit_user_request.py) \| [EditUserRequestDict](ui_path/models/edit_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[User](ui_path/models/user.py), [EditUserErrorBody](ui_path/errors/edit_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](ui_path/models/user.py)</code> -- User updated successfully

**On `Failure`**: `error` is <code>[EditUserErrorBody](ui_path/errors/edit_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_odata_users(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataUserCollection, GetOdataUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations, and folder memberships. Supports OData filtering and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_odata_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataUserCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOdataUsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_odata_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataUserCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOdataUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataUserCollection](ui_path/models/o_data_user_collection.py), [GetOdataUsersErrorBody](ui_path/errors/get_odata_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataUserCollection](ui_path/models/o_data_user_collection.py)</code> -- A list of users

**On `Failure`**: `error` is <code>[GetOdataUsersErrorBody](ui_path/errors/get_odata_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User2, GetUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves user account information by the user's unique identifier. Returns user properties including name, email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_user("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_user("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_name</code> | <code>str</code> | The name of the UiPath organization |
| <code>user_id</code> | <code>str</code> | Unique identifier of the user |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[User2](ui_path/models/user2.py), [GetUserErrorBody](ui_path/errors/get_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User2](ui_path/models/user2.py)</code> -- The requested user account

**On `Failure`**: `error` is <code>[GetUserErrorBody](ui_path/errors/get_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| 404 | <code>[ErrorResponse3](ui_path/models/error_response3.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_roles2(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RolesResponse, ListRoles2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling what a user can view and perform within the platform. Roles are assigned when adding or editing users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.list_roles2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRoles2ErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.list_roles2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRoles2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[RolesResponse](ui_path/models/roles_response.py), [ListRoles2ErrorBody](ui_path/errors/list_roles2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RolesResponse](ui_path/models/roles_response.py)</code> -- A list of available roles

**On `Failure`**: `error` is <code>[ListRoles2ErrorBody](ui_path/errors/list_roles2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserListResponse, ListUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and assigned roles. Used by administrators to manage user assignments and role configurations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.list_users(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.list_users(page=1, page_size=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Page number for pagination (1-based)<br>**Default**: <code>1</code> |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[UserListResponse](ui_path/models/user_list_response.py), [ListUsersErrorBody](ui_path/errors/list_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserListResponse](ui_path/models/user_list_response.py)</code> -- A list of users

**On `Failure`**: `error` is <code>[ListUsersErrorBody](ui_path/errors/list_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseUiPathAutomationHubAppInventoryApi](ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Validation

> Source: [Validation](ui_path/apis/validation.py)

<details>
<summary><code>def validate_document_async(project_id: str, body: ValidationRequest | ValidationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ApiResult[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, ValidateDocumentAsyncErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits digitization, classification, and extraction results for asynchronous validation. Validation checks the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence extractions. Returns a requestId for polling.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.validation.with_raw_response.validate_document_async(
    "some example string", ValidationRequest(document_id="some example string"), api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateDocumentAsyncErrorBody
```

**Async**

```python
result = await async_client.validation.with_raw_response.validate_document_async(
    "some example string", ValidationRequest(document_id="some example string"), api_version="1.0.0"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ValidateDocumentAsyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_id</code> | <code>str</code> | Unique identifier of the Document Understanding project |
| <code>body</code> | <code>[ValidationRequest](ui_path/models/validation_request.py) \| [ValidationRequestDict](ui_path/models/validation_request.py)</code> | The request body. |
| <code>api_version</code> | <code>str \| None</code> | API version to use for this request<br>**Default**: <code>"1"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py), [ValidateDocumentAsyncErrorBody](ui_path/errors/validate_document_async_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py)</code> -- Validation job started successfully

**On `Failure`**: `error` is <code>[ValidateDocumentAsyncErrorBody](ui_path/errors/validate_document_async_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseUiPathPlatformManagementAuditLogsApi](ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](ui_path/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: Webhook | WebhookDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification, whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(
    Webhook(
        id=1,
        url="https://cloud.uipath.com/example",
        enabled=True,
        secret="example-value",
        subscribe_to_all_events=True,
        allow_insecure_ssl=True,
        events=["example-value"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(
    Webhook(
        id=1,
        url="https://cloud.uipath.com/example",
        enabled=True,
        secret="example-value",
        subscribe_to_all_events=True,
        allow_insecure_ssl=True,
        events=["example-value"],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Webhook](ui_path/models/webhook.py) \| [WebhookDict](ui_path/models/webhook.py)</code> | The request body. |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[Webhook](ui_path/models/webhook.py), [CreateWebhookErrorBody](ui_path/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](ui_path/models/webhook.py)</code> -- Webhook created successfully

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](ui_path/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL will no longer receive event notifications from Orchestrator.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>int</code> | The unique integer identifier of the entity |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;None, [DeleteWebhookErrorBody](ui_path/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](ui_path/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_event_types(*, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, GetWebhookEventTypesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as job.faulted or queueItem.transactionCompleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhook_event_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookEventTypesErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook_event_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookEventTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](ui_path/models/odata_webhooks_ui_path_server_configuration_o_data_get_event_types_response.py), [GetWebhookEventTypesErrorBody](ui_path/errors/get_webhook_event_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](ui_path/models/odata_webhooks_ui_path_server_configuration_o_data_get_event_types_response.py)</code> -- A list of available webhook event types

**On `Failure`**: `error` is <code>[GetWebhookEventTypesErrorBody](ui_path/errors/get_webhook_event_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ODataWebhookCollection, ListWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the events to subscribe to, and an HMAC secret for payload signature verification.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataWebhookCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ODataWebhookCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to narrow results (e.g., State eq 'Running')<br>**Default**: <code>None</code> |
| <code>top</code> | <code>int \| None</code> | Maximum number of records to return (default 100, max 1000)<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination<br>**Default**: <code>None</code> |
| <code>x_uipath_organization_unit_id</code> | <code>int \| None</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](ui_path/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](ui_path/core/results.py)&#91;[ODataWebhookCollection](ui_path/models/o_data_webhook_collection.py), [ListWebhooksErrorBody](ui_path/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ODataWebhookCollection](ui_path/models/o_data_webhook_collection.py)</code> -- A list of webhooks

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](ui_path/errors/list_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](ui_path/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](ui_path/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

