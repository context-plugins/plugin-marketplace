# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [UiPathClient](ui_path/client.py)

## Alerts

> Source: [Alerts](ui_path/apis/alerts.py)

<details>
<summary><code>def list_alerts(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataAlertCollection</code></summary>

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
try:
    response = client.alerts.list_alerts()
    # TODO: Handle 'response' of type ODataAlertCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertsErrorBody
```

**Async**

```python
try:
    response = await async_client.alerts.list_alerts()
    # TODO: Handle 'response' of type ODataAlertCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAlertsErrorBody
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

**OnSuccess**: <code>[ODataAlertCollection](ui_path/models/o_data_alert_collection.py)</code> -- A list of alerts

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListAlertsErrorBody](ui_path/errors/list_alerts_error.py)&#93;</code>

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
<summary><code>def bulk_upsert_app_inventory(body: AppinventoryRequest | AppinventoryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AppInventoryListResponse</code></summary>

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
try:
    response = client.app_inventory.bulk_upsert_app_inventory(AppinventoryRequest())
    # TODO: Handle 'response' of type AppInventoryListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpsertAppInventoryErrorBody
```

**Async**

```python
try:
    response = await async_client.app_inventory.bulk_upsert_app_inventory(AppinventoryRequest())
    # TODO: Handle 'response' of type AppInventoryListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpsertAppInventoryErrorBody
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

**OnSuccess**: <code>[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py)</code> -- Applications upserted successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[BulkUpsertAppInventoryErrorBody](ui_path/errors/bulk_upsert_app_inventory_error.py)&#93;</code>

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
<summary><code>def delete_application(application_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.app_inventory.delete_application(12345)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApplicationErrorBody
```

**Async**

```python
try:
    await async_client.app_inventory.delete_application(12345)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteApplicationErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteApplicationErrorBody](ui_path/errors/delete_application_error.py)&#93;</code>

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
<summary><code>def list_app_inventory(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> AppInventoryListResponse</code></summary>

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
try:
    response = client.app_inventory.list_app_inventory(page=1, page_size=1)
    # TODO: Handle 'response' of type AppInventoryListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAppInventoryErrorBody
```

**Async**

```python
try:
    response = await async_client.app_inventory.list_app_inventory(page=1, page_size=1)
    # TODO: Handle 'response' of type AppInventoryListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAppInventoryErrorBody
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

**OnSuccess**: <code>[AppInventoryListResponse](ui_path/models/app_inventory_list_response.py)</code> -- A list of application inventory entries

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListAppInventoryErrorBody](ui_path/errors/list_app_inventory_error.py)&#93;</code>

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
<summary><code>def create_asset(body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Asset</code></summary>

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
try:
    response = client.assets.create_asset(
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
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.create_asset(
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
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAssetErrorBody
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

**OnSuccess**: <code>[Asset](ui_path/models/asset.py)</code> -- Asset created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateAssetErrorBody](ui_path/errors/create_asset_error.py)&#93;</code>

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
<summary><code>def delete_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.assets.delete_asset(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAssetErrorBody
```

**Async**

```python
try:
    await async_client.assets.delete_asset(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAssetErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteAssetErrorBody](ui_path/errors/delete_asset_error.py)&#93;</code>

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
<summary><code>def get_asset(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Asset</code></summary>

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
try:
    response = client.assets.get_asset(1)
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.get_asset(1)
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAssetErrorBody
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

**OnSuccess**: <code>[Asset](ui_path/models/asset.py)</code> -- The requested asset

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetAssetErrorBody](ui_path/errors/get_asset_error.py)&#93;</code>

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
<summary><code>def list_assets(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataAssetCollection</code></summary>

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
try:
    response = client.assets.list_assets()
    # TODO: Handle 'response' of type ODataAssetCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAssetsErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.list_assets()
    # TODO: Handle 'response' of type ODataAssetCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAssetsErrorBody
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

**OnSuccess**: <code>[ODataAssetCollection](ui_path/models/o_data_asset_collection.py)</code> -- A list of assets

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListAssetsErrorBody](ui_path/errors/list_assets_error.py)&#93;</code>

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
<summary><code>def update_asset(key: int, body: Asset | AssetDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Asset</code></summary>

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
try:
    response = client.assets.update_asset(
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
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAssetErrorBody
```

**Async**

```python
try:
    response = await async_client.assets.update_asset(
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
    # TODO: Handle 'response' of type Asset
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAssetErrorBody
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

**OnSuccess**: <code>[Asset](ui_path/models/asset.py)</code> -- Asset updated successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[UpdateAssetErrorBody](ui_path/errors/update_asset_error.py)&#93;</code>

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
<summary><code>def get_organization_audit_sources(organization_name: str, *, request_options: RequestOptionsOrDict | None = None) -> AuditSources</code></summary>

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
try:
    response = client.audit_logs.get_organization_audit_sources("some example string")
    # TODO: Handle 'response' of type AuditSources
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationAuditSourcesErrorBody
```

**Async**

```python
try:
    response = await async_client.audit_logs.get_organization_audit_sources("some example string")
    # TODO: Handle 'response' of type AuditSources
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationAuditSourcesErrorBody
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

**OnSuccess**: <code>[AuditSources](ui_path/models/audit_sources.py)</code> -- Available organization audit event sources

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetOrganizationAuditSourcesErrorBody](ui_path/errors/get_organization_audit_sources_error.py)&#93;</code>

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
<summary><code>def query_organization_audit_events(organization_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AuditEventCollection</code></summary>

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
try:
    response = client.audit_logs.query_organization_audit_events("some example string")
    # TODO: Handle 'response' of type AuditEventCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryOrganizationAuditEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.audit_logs.query_organization_audit_events("some example string")
    # TODO: Handle 'response' of type AuditEventCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryOrganizationAuditEventsErrorBody
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

**OnSuccess**: <code>[AuditEventCollection](ui_path/models/audit_event_collection.py)</code> -- Audit events matching the query criteria

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[QueryOrganizationAuditEventsErrorBody](ui_path/errors/query_organization_audit_events_error.py)&#93;</code>

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
<summary><code>def query_tenant_audit_events(organization_name: str, tenant_name: str, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, source: list[str] | None = None, max_count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> AuditEventCollection</code></summary>

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
try:
    response = client.audit_logs.query_tenant_audit_events("some example string", "some example string")
    # TODO: Handle 'response' of type AuditEventCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryTenantAuditEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.audit_logs.query_tenant_audit_events("some example string", "some example string")
    # TODO: Handle 'response' of type AuditEventCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryTenantAuditEventsErrorBody
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

**OnSuccess**: <code>[AuditEventCollection](ui_path/models/audit_event_collection.py)</code> -- Tenant-level audit events matching the query criteria

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[QueryTenantAuditEventsErrorBody](ui_path/errors/query_tenant_audit_events_error.py)&#93;</code>

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
<summary><code>def create_automation_idea(body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Automation</code></summary>

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
try:
    response = client.automations.create_automation_idea(
        CreateAutomationIdeaRequest(name="some example string", description="some example string")
    )
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutomationIdeaErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.create_automation_idea(
        CreateAutomationIdeaRequest(name="some example string", description="some example string")
    )
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutomationIdeaErrorBody
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

**OnSuccess**: <code>[Automation](ui_path/models/automation.py)</code> -- Automation idea created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateAutomationIdeaErrorBody](ui_path/errors/create_automation_idea_error.py)&#93;</code>

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
<summary><code>def delete_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.automations.delete_automation(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomationErrorBody
```

**Async**

```python
try:
    await async_client.automations.delete_automation(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomationErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteAutomationErrorBody](ui_path/errors/delete_automation_error.py)&#93;</code>

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
<summary><code>def get_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Automation</code></summary>

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
try:
    response = client.automations.get_automation(1)
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.get_automation(1)
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationErrorBody
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

**OnSuccess**: <code>[Automation](ui_path/models/automation.py)</code> -- The requested automation record

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetAutomationErrorBody](ui_path/errors/get_automation_error.py)&#93;</code>

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
<summary><code>def list_automation_collaborators(automation_id: int, *, request_options: RequestOptionsOrDict | None = None) -> AutomationsCollaboratorsResponse</code></summary>

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
try:
    response = client.automations.list_automation_collaborators(1)
    # TODO: Handle 'response' of type AutomationsCollaboratorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationCollaboratorsErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.list_automation_collaborators(1)
    # TODO: Handle 'response' of type AutomationsCollaboratorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationCollaboratorsErrorBody
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

**OnSuccess**: <code>[AutomationsCollaboratorsResponse](ui_path/models/automations_collaborators_response.py)</code> -- A list of collaborators for the automation

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListAutomationCollaboratorsErrorBody](ui_path/errors/list_automation_collaborators_error.py)&#93;</code>

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
<summary><code>def list_automations(*, phase: str | None = None, status: str | None = None, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> AutomationListResponse</code></summary>

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
try:
    response = client.automations.list_automations(phase="example-value", status="Active", page=1, page_size=1)
    # TODO: Handle 'response' of type AutomationListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationsErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.list_automations(
        phase="example-value", status="Active", page=1, page_size=1
    )
    # TODO: Handle 'response' of type AutomationListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationsErrorBody
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

**OnSuccess**: <code>[AutomationListResponse](ui_path/models/automation_list_response.py)</code> -- A paginated list of automations

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListAutomationsErrorBody](ui_path/errors/list_automations_error.py)&#93;</code>

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
<summary><code>def remove_automation_collaborator(automation_id: int, user_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.automations.remove_automation_collaborator(1, 12345)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveAutomationCollaboratorErrorBody
```

**Async**

```python
try:
    await async_client.automations.remove_automation_collaborator(1, 12345)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveAutomationCollaboratorErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[RemoveAutomationCollaboratorErrorBody](ui_path/errors/remove_automation_collaborator_error.py)&#93;</code>

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
<summary><code>def update_automation(automation_id: int, body: UpdateAutomationRequest | UpdateAutomationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Automation</code></summary>

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
try:
    response = client.automations.update_automation(1, UpdateAutomationRequest())
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomationErrorBody
```

**Async**

```python
try:
    response = await async_client.automations.update_automation(1, UpdateAutomationRequest())
    # TODO: Handle 'response' of type Automation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomationErrorBody
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

**OnSuccess**: <code>[Automation](ui_path/models/automation.py)</code> -- Automation updated successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[UpdateAutomationErrorBody](ui_path/errors/update_automation_error.py)&#93;</code>

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
<summary><code>def classify_document_async(project_id: str, body: ClassificationRequest | ClassificationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> AsyncJobStartResponse</code></summary>

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
try:
    response = client.classification.classify_document_async(
        "some example string",
        ClassificationRequest(
            document_id="some example string",
            classifiers_options=[ClassifierOption(classifier_id="some example string")],
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type AsyncJobStartResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocumentAsyncErrorBody
```

**Async**

```python
try:
    response = await async_client.classification.classify_document_async(
        "some example string",
        ClassificationRequest(
            document_id="some example string",
            classifiers_options=[ClassifierOption(classifier_id="some example string")],
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type AsyncJobStartResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocumentAsyncErrorBody
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

**OnSuccess**: <code>[AsyncJobStartResponse](ui_path/models/async_job_start_response.py)</code> -- Classification job started; use the returned requestId to poll for results

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ClassifyDocumentAsyncErrorBody](ui_path/errors/classify_document_async_error.py)&#93;</code>

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
<summary><code>def get_classification_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ClassificationResult</code></summary>

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
try:
    response = client.classification.get_classification_result(
        "some example string", "some example string", api_version="1.0.0"
    )
    # TODO: Handle 'response' of type ClassificationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationResultErrorBody
```

**Async**

```python
try:
    response = await async_client.classification.get_classification_result(
        "some example string", "some example string", api_version="1.0.0"
    )
    # TODO: Handle 'response' of type ClassificationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationResultErrorBody
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

**OnSuccess**: <code>[ClassificationResult](ui_path/models/classification_result.py)</code> -- Classification result or current job status

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetClassificationResultErrorBody](ui_path/errors/get_classification_result_error.py)&#93;</code>

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
<summary><code>def digitize_document(project_id: str, body: DigitizationRequest | DigitizationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> DigitizationResult</code></summary>

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
try:
    response = client.digitization.digitize_document(
        "some example string",
        DigitizationRequest(
            document_id="example-value", content_type=ContentType.IMAGE_JPEG, document_base64="example-value"
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type DigitizationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DigitizeDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.digitization.digitize_document(
        "some example string",
        DigitizationRequest(
            document_id="example-value", content_type=ContentType.IMAGE_JPEG, document_base64="example-value"
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type DigitizationResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DigitizeDocumentErrorBody
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

**OnSuccess**: <code>[DigitizationResult](ui_path/models/digitization_result.py)</code> -- Document digitized successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DigitizeDocumentErrorBody](ui_path/errors/digitize_document_error.py)&#93;</code>

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
<summary><code>def list_classifiers(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ProjectsClassifiersResponse</code></summary>

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
try:
    response = client.discovery.list_classifiers("some example string", api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsClassifiersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassifiersErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_classifiers("some example string", api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsClassifiersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassifiersErrorBody
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

**OnSuccess**: <code>[ProjectsClassifiersResponse](ui_path/models/projects_classifiers_response.py)</code> -- A list of classifiers for the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListClassifiersErrorBody](ui_path/errors/list_classifiers_error.py)&#93;</code>

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
<summary><code>def list_extractors(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ProjectsExtractorsResponse</code></summary>

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
try:
    response = client.discovery.list_extractors("some example string", api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsExtractorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtractorsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_extractors("some example string", api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsExtractorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtractorsErrorBody
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

**OnSuccess**: <code>[ProjectsExtractorsResponse](ui_path/models/projects_extractors_response.py)</code> -- A list of extractors for the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListExtractorsErrorBody](ui_path/errors/list_extractors_error.py)&#93;</code>

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
<summary><code>def list_projects(*, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ProjectsResponse</code></summary>

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
try:
    response = client.discovery.list_projects(api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_projects(api_version="1.0.0")
    # TODO: Handle 'response' of type ProjectsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectsErrorBody
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

**OnSuccess**: <code>[ProjectsResponse](ui_path/models/projects_response.py)</code> -- A list of available Document Understanding projects

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListProjectsErrorBody](ui_path/errors/list_projects_error.py)&#93;</code>

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
<summary><code>def create_entity_record(entity_name: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> EntityRecord</code></summary>

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
try:
    response = client.entities.create_entity_record("some example string", {})
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEntityRecordErrorBody
```

**Async**

```python
try:
    response = await async_client.entities.create_entity_record("some example string", {})
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEntityRecordErrorBody
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

**OnSuccess**: <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- Entity record created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateEntityRecordErrorBody](ui_path/errors/create_entity_record_error.py)&#93;</code>

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
<summary><code>def delete_entity_record(entity_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.entities.delete_entity_record("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEntityRecordErrorBody
```

**Async**

```python
try:
    await async_client.entities.delete_entity_record("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEntityRecordErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteEntityRecordErrorBody](ui_path/errors/delete_entity_record_error.py)&#93;</code>

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
<summary><code>def get_entity_record(entity_name: str, record_id: str, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EntityRecord</code></summary>

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
try:
    response = client.entities.get_entity_record(
        "some example string", "some example string", select="example-value", expand="example-value"
    )
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityRecordErrorBody
```

**Async**

```python
try:
    response = await async_client.entities.get_entity_record(
        "some example string", "some example string", select="example-value", expand="example-value"
    )
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEntityRecordErrorBody
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

**OnSuccess**: <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- The requested entity record

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetEntityRecordErrorBody](ui_path/errors/get_entity_record_error.py)&#93;</code>

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
<summary><code>def list_entity_records(entity_name: str, *, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EntityRecordCollection</code></summary>

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
try:
    response = client.entities.list_entity_records(
        "some example string",
        filter_="example-value",
        orderby="example-value",
        top=1,
        skip=1,
        select="example-value",
        expand="example-value",
    )
    # TODO: Handle 'response' of type EntityRecordCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.entities.list_entity_records(
        "some example string",
        filter_="example-value",
        orderby="example-value",
        top=1,
        skip=1,
        select="example-value",
        expand="example-value",
    )
    # TODO: Handle 'response' of type EntityRecordCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecordsErrorBody
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

**OnSuccess**: <code>[EntityRecordCollection](ui_path/models/entity_record_collection.py)</code> -- A list of entity records matching the query criteria

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListEntityRecordsErrorBody](ui_path/errors/list_entity_records_error.py)&#93;</code>

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
<summary><code>def query_entity_records(entity_name: str, body: EntityQueryRequest | EntityQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EntityRecordCollection</code></summary>

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
try:
    response = client.entities.query_entity_records("some example string", EntityQueryRequest())
    # TODO: Handle 'response' of type EntityRecordCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryEntityRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.entities.query_entity_records("some example string", EntityQueryRequest())
    # TODO: Handle 'response' of type EntityRecordCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryEntityRecordsErrorBody
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

**OnSuccess**: <code>[EntityRecordCollection](ui_path/models/entity_record_collection.py)</code> -- Records matching the query criteria

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[QueryEntityRecordsErrorBody](ui_path/errors/query_entity_records_error.py)&#93;</code>

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
<summary><code>def update_entity_record(entity_name: str, record_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> EntityRecord</code></summary>

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
try:
    response = client.entities.update_entity_record("some example string", "some example string", {})
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEntityRecordErrorBody
```

**Async**

```python
try:
    response = await async_client.entities.update_entity_record("some example string", "some example string", {})
    # TODO: Handle 'response' of type EntityRecord
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEntityRecordErrorBody
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

**OnSuccess**: <code>[EntityRecord](ui_path/models/entity_record.py)</code> -- Entity record updated successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[UpdateEntityRecordErrorBody](ui_path/errors/update_entity_record_error.py)&#93;</code>

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
<summary><code>def extract_document_async(project_id: str, body: ExtractionRequest | ExtractionRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi</code></summary>

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
try:
    response = client.extraction.extract_document_async(
        "some example string",
        ExtractionRequest(
            document_id="some example string", extractors_options=[ExtractorOption(extractor_id="some example string")]
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractDocumentAsyncErrorBody
```

**Async**

```python
try:
    response = await async_client.extraction.extract_document_async(
        "some example string",
        ExtractionRequest(
            document_id="some example string", extractors_options=[ExtractorOption(extractor_id="some example string")]
        ),
        api_version="1.0.0",
    )
    # TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractDocumentAsyncErrorBody
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

**OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py)</code> -- Extraction job started; use the returned requestId to poll for results

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ExtractDocumentAsyncErrorBody](ui_path/errors/extract_document_async_error.py)&#93;</code>

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
<summary><code>def get_extraction_result(project_id: str, request_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> ExtractionResult</code></summary>

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
try:
    response = client.extraction.get_extraction_result(
        "some example string", "some example string", api_version="1.0.0"
    )
    # TODO: Handle 'response' of type ExtractionResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExtractionResultErrorBody
```

**Async**

```python
try:
    response = await async_client.extraction.get_extraction_result(
        "some example string", "some example string", api_version="1.0.0"
    )
    # TODO: Handle 'response' of type ExtractionResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExtractionResultErrorBody
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

**OnSuccess**: <code>[ExtractionResult](ui_path/models/extraction_result.py)</code> -- Extraction result or current job status

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetExtractionResultErrorBody](ui_path/errors/get_extraction_result_error.py)&#93;</code>

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
<summary><code>def list_folders(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataFolderCollection</code></summary>

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
try:
    response = client.folders.list_folders()
    # TODO: Handle 'response' of type ODataFolderCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFoldersErrorBody
```

**Async**

```python
try:
    response = await async_client.folders.list_folders()
    # TODO: Handle 'response' of type ODataFolderCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFoldersErrorBody
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

**OnSuccess**: <code>[ODataFolderCollection](ui_path/models/o_data_folder_collection.py)</code> -- A list of folders

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListFoldersErrorBody](ui_path/errors/list_folders_error.py)&#93;</code>

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
<summary><code>def create_group(organization_name: str, body: CreateGroupRequest | CreateGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Group</code></summary>

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
try:
    response = client.groups.create_group(
        "some example string", CreateGroupRequest(name="example-value", type_=Type.LOCAL)
    )
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.groups.create_group(
        "some example string", CreateGroupRequest(name="example-value", type_=Type.LOCAL)
    )
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateGroupErrorBody
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

**OnSuccess**: <code>[Group](ui_path/models/group.py)</code> -- Group created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateGroupErrorBody](ui_path/errors/create_group_error.py)&#93;</code>

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
<summary><code>def get_group(organization_name: str, partition_global_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Group</code></summary>

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
try:
    response = client.groups.get_group("some example string", "some example string", "abc123")
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.groups.get_group("some example string", "some example string", "abc123")
    # TODO: Handle 'response' of type Group
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupErrorBody
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

**OnSuccess**: <code>[Group](ui_path/models/group.py)</code> -- The requested group

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetGroupErrorBody](ui_path/errors/get_group_error.py)&#93;</code>

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
<summary><code>def list_groups(organization_name: str, partition_global_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IdentityApiGroupResponse</code></summary>

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
try:
    response = client.groups.list_groups("some example string", "some example string")
    # TODO: Handle 'response' of type IdentityApiGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.groups.list_groups("some example string", "some example string")
    # TODO: Handle 'response' of type IdentityApiGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGroupsErrorBody
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

**OnSuccess**: <code>[IdentityApiGroupResponse](ui_path/models/identity_api_group_response.py)</code> -- A list of user groups

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListGroupsErrorBody](ui_path/errors/list_groups_error.py)&#93;</code>

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
<summary><code>def get_job(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

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
try:
    response = client.jobs.get_job(1)
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job(1)
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobErrorBody
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

**OnSuccess**: <code>[Job](ui_path/models/job.py)</code> -- The requested job

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetJobErrorBody](ui_path/errors/get_job_error.py)&#93;</code>

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
<summary><code>def list_jobs(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataJobCollection</code></summary>

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
try:
    response = client.jobs.list_jobs()
    # TODO: Handle 'response' of type ODataJobCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_jobs()
    # TODO: Handle 'response' of type ODataJobCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobsErrorBody
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

**OnSuccess**: <code>[ODataJobCollection](ui_path/models/o_data_job_collection.py)</code> -- A list of jobs matching the query criteria

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListJobsErrorBody](ui_path/errors/list_jobs_error.py)&#93;</code>

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
<summary><code>def start_jobs(body: StartJobsRequest | StartJobsRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataJobCollection</code></summary>

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
try:
    response = client.jobs.start_jobs(
        StartJobsRequest(
            start_info=StartInfo(release_key=UUID("00000000-0000-0000-0000-000000000000"), strategy=Strategy.ALL)
        ),
    )
    # TODO: Handle 'response' of type ODataJobCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.start_jobs(
        StartJobsRequest(
            start_info=StartInfo(release_key=UUID("00000000-0000-0000-0000-000000000000"), strategy=Strategy.ALL)
        ),
    )
    # TODO: Handle 'response' of type ODataJobCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartJobsErrorBody
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

**OnSuccess**: <code>[ODataJobCollection](ui_path/models/o_data_job_collection.py)</code> -- Jobs were successfully created and started

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[StartJobsErrorBody](ui_path/errors/start_jobs_error.py)&#93;</code>

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
<summary><code>def stop_job(body: StopJobRequest | StopJobRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.jobs.stop_job(StopJobRequest(job_id=1, strategy=Strategy1.SOFT_STOP))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopJobErrorBody
```

**Async**

```python
try:
    await async_client.jobs.stop_job(StopJobRequest(job_id=1, strategy=Strategy1.SOFT_STOP))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopJobErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[StopJobErrorBody](ui_path/errors/stop_job_error.py)&#93;</code>

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
<summary><code>def get_group_license_allocation(organization_name: str, account_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GroupLicenseAllocation</code></summary>

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
try:
    response = client.licenses.get_group_license_allocation("some example string", "abc123", "abc123")
    # TODO: Handle 'response' of type GroupLicenseAllocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLicenseAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.licenses.get_group_license_allocation("some example string", "abc123", "abc123")
    # TODO: Handle 'response' of type GroupLicenseAllocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGroupLicenseAllocationErrorBody
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

**OnSuccess**: <code>[GroupLicenseAllocation](ui_path/models/group_license_allocation.py)</code> -- License allocation for the group

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetGroupLicenseAllocationErrorBody](ui_path/errors/get_group_license_allocation_error.py)&#93;</code>

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
<summary><code>def update_group_license_allocation(organization_name: str, account_id: str, group_id: str, body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GroupLicenseAllocation</code></summary>

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
try:
    response = client.licenses.update_group_license_allocation(
        "some example string",
        "abc123",
        "abc123",
        UpdateGroupLicenseAllocationRequest(user_licenses=[LicenseAllocationEntry()]),
    )
    # TODO: Handle 'response' of type GroupLicenseAllocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupLicenseAllocationErrorBody
```

**Async**

```python
try:
    response = await async_client.licenses.update_group_license_allocation(
        "some example string",
        "abc123",
        "abc123",
        UpdateGroupLicenseAllocationRequest(user_licenses=[LicenseAllocationEntry()]),
    )
    # TODO: Handle 'response' of type GroupLicenseAllocation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGroupLicenseAllocationErrorBody
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

**OnSuccess**: <code>[GroupLicenseAllocation](ui_path/models/group_license_allocation.py)</code> -- License allocation updated successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[UpdateGroupLicenseAllocationErrorBody](ui_path/errors/update_group_license_allocation_error.py)&#93;</code>

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
<summary><code>def list_machines(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataMachineCollection</code></summary>

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
try:
    response = client.machines.list_machines()
    # TODO: Handle 'response' of type ODataMachineCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMachinesErrorBody
```

**Async**

```python
try:
    response = await async_client.machines.list_machines()
    # TODO: Handle 'response' of type ODataMachineCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMachinesErrorBody
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

**OnSuccess**: <code>[ODataMachineCollection](ui_path/models/o_data_machine_collection.py)</code> -- A list of machines

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListMachinesErrorBody](ui_path/errors/list_machines_error.py)&#93;</code>

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
<summary><code>def list_packages(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataPackageCollection</code></summary>

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
try:
    response = client.packages.list_packages()
    # TODO: Handle 'response' of type ODataPackageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPackagesErrorBody
```

**Async**

```python
try:
    response = await async_client.packages.list_packages()
    # TODO: Handle 'response' of type ODataPackageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPackagesErrorBody
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

**OnSuccess**: <code>[ODataPackageCollection](ui_path/models/o_data_package_collection.py)</code> -- A list of packages

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListPackagesErrorBody](ui_path/errors/list_packages_error.py)&#93;</code>

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
<summary><code>def get_automation_pipeline(*, request_options: RequestOptionsOrDict | None = None) -> PipelineData</code></summary>

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
try:
    response = client.pipeline.get_automation_pipeline()
    # TODO: Handle 'response' of type PipelineData
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationPipelineErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline.get_automation_pipeline()
    # TODO: Handle 'response' of type PipelineData
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationPipelineErrorBody
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

**OnSuccess**: <code>[PipelineData](ui_path/models/pipeline_data.py)</code> -- Automation pipeline summary data

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetAutomationPipelineErrorBody](ui_path/errors/get_automation_pipeline_error.py)&#93;</code>

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
<summary><code>def list_processes(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataProcessCollection</code></summary>

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
try:
    response = client.processes.list_processes()
    # TODO: Handle 'response' of type ODataProcessCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProcessesErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.list_processes()
    # TODO: Handle 'response' of type ODataProcessCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProcessesErrorBody
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

**OnSuccess**: <code>[ODataProcessCollection](ui_path/models/o_data_process_collection.py)</code> -- A list of processes

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListProcessesErrorBody](ui_path/errors/list_processes_error.py)&#93;</code>

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
<summary><code>def create_project(body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUiPathTestManagerProjectsApi</code></summary>

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
try:
    response = client.projects.create_project(CreateProjectRequest(name="example-value", description="example-value"))
    # TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.create_project(
        CreateProjectRequest(name="example-value", description="example-value")
    )
    # TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
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

**OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py)</code> -- Test project created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateProjectErrorBody](ui_path/errors/create_project_error.py)&#93;</code>

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
<summary><code>def get_project(project_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUiPathTestManagerProjectsApi</code></summary>

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
try:
    response = client.projects.get_project("some example string")
    # TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.get_project("some example string")
    # TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectErrorBody
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

**OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](ui_path/models/project_ui_path_test_manager_projects_api.py)</code> -- The requested test project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetProjectErrorBody](ui_path/errors/get_project_error.py)&#93;</code>

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
<summary><code>def list_projects2(*, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ProjectListResponse</code></summary>

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
try:
    response = client.projects.list_projects2(page=1, page_size=1)
    # TODO: Handle 'response' of type ProjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjects2ErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.list_projects2(page=1, page_size=1)
    # TODO: Handle 'response' of type ProjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjects2ErrorBody
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

**OnSuccess**: <code>[ProjectListResponse](ui_path/models/project_list_response.py)</code> -- A list of test projects

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListProjects2ErrorBody](ui_path/errors/list_projects2_error.py)&#93;</code>

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
<summary><code>def add_queue_item(body: AddQueueItemRequest | AddQueueItemRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> QueueItem</code></summary>

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
try:
    response = client.queue_items.add_queue_item(
        AddQueueItemRequest(item_data=QueueItemData(name="some example string"))
    )
    # TODO: Handle 'response' of type QueueItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddQueueItemErrorBody
```

**Async**

```python
try:
    response = await async_client.queue_items.add_queue_item(
        AddQueueItemRequest(item_data=QueueItemData(name="some example string"))
    )
    # TODO: Handle 'response' of type QueueItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddQueueItemErrorBody
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

**OnSuccess**: <code>[QueueItem](ui_path/models/queue_item.py)</code> -- Queue item added successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[AddQueueItemErrorBody](ui_path/errors/add_queue_item_error.py)&#93;</code>

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
<summary><code>def list_queue_items(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataQueueItemCollection</code></summary>

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
try:
    response = client.queue_items.list_queue_items()
    # TODO: Handle 'response' of type ODataQueueItemCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQueueItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.queue_items.list_queue_items()
    # TODO: Handle 'response' of type ODataQueueItemCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQueueItemsErrorBody
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

**OnSuccess**: <code>[ODataQueueItemCollection](ui_path/models/o_data_queue_item_collection.py)</code> -- A list of queue items

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListQueueItemsErrorBody](ui_path/errors/list_queue_items_error.py)&#93;</code>

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
<summary><code>def create_queue(body: QueueDefinition | QueueDefinitionDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> QueueDefinition</code></summary>

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
try:
    response = client.queues.create_queue(
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
    # TODO: Handle 'response' of type QueueDefinition
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQueueErrorBody
```

**Async**

```python
try:
    response = await async_client.queues.create_queue(
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
    # TODO: Handle 'response' of type QueueDefinition
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateQueueErrorBody
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

**OnSuccess**: <code>[QueueDefinition](ui_path/models/queue_definition.py)</code> -- Queue definition created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateQueueErrorBody](ui_path/errors/create_queue_error.py)&#93;</code>

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
<summary><code>def list_queues(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataQueueDefinitionCollection</code></summary>

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
try:
    response = client.queues.list_queues()
    # TODO: Handle 'response' of type ODataQueueDefinitionCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQueuesErrorBody
```

**Async**

```python
try:
    response = await async_client.queues.list_queues()
    # TODO: Handle 'response' of type ODataQueueDefinitionCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQueuesErrorBody
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

**OnSuccess**: <code>[ODataQueueDefinitionCollection](ui_path/models/o_data_queue_definition_collection.py)</code> -- A list of queue definitions

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListQueuesErrorBody](ui_path/errors/list_queues_error.py)&#93;</code>

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
<summary><code>def create_requirement(project_id: str, body: CreateRequirementRequest | CreateRequirementRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Requirement</code></summary>

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
try:
    response = client.requirements.create_requirement(
        "some example string",
        CreateRequirementRequest(name="example-value", description="example-value", external_id="example-value"),
    )
    # TODO: Handle 'response' of type Requirement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRequirementErrorBody
```

**Async**

```python
try:
    response = await async_client.requirements.create_requirement(
        "some example string",
        CreateRequirementRequest(name="example-value", description="example-value", external_id="example-value"),
    )
    # TODO: Handle 'response' of type Requirement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRequirementErrorBody
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

**OnSuccess**: <code>[Requirement](ui_path/models/requirement.py)</code> -- Requirement created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateRequirementErrorBody](ui_path/errors/create_requirement_error.py)&#93;</code>

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
<summary><code>def list_requirements(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> RequirementListResponse</code></summary>

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
try:
    response = client.requirements.list_requirements("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type RequirementListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRequirementsErrorBody
```

**Async**

```python
try:
    response = await async_client.requirements.list_requirements("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type RequirementListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRequirementsErrorBody
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

**OnSuccess**: <code>[RequirementListResponse](ui_path/models/requirement_list_response.py)</code> -- A list of requirements in the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListRequirementsErrorBody](ui_path/errors/list_requirements_error.py)&#93;</code>

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
<summary><code>def list_robots(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataRobotCollection</code></summary>

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
try:
    response = client.robots.list_robots()
    # TODO: Handle 'response' of type ODataRobotCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRobotsErrorBody
```

**Async**

```python
try:
    response = await async_client.robots.list_robots()
    # TODO: Handle 'response' of type ODataRobotCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRobotsErrorBody
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

**OnSuccess**: <code>[ODataRobotCollection](ui_path/models/o_data_robot_collection.py)</code> -- A list of robots

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListRobotsErrorBody](ui_path/errors/list_robots_error.py)&#93;</code>

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
<summary><code>def list_roles(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataRoleCollection</code></summary>

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
try:
    response = client.roles.list_roles()
    # TODO: Handle 'response' of type ODataRoleCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.list_roles()
    # TODO: Handle 'response' of type ODataRoleCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRolesErrorBody
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

**OnSuccess**: <code>[ODataRoleCollection](ui_path/models/o_data_role_collection.py)</code> -- A list of roles

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListRolesErrorBody](ui_path/errors/list_roles_error.py)&#93;</code>

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
<summary><code>def list_schedules(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataScheduleCollection</code></summary>

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
try:
    response = client.schedules.list_schedules()
    # TODO: Handle 'response' of type ODataScheduleCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.schedules.list_schedules()
    # TODO: Handle 'response' of type ODataScheduleCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSchedulesErrorBody
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

**OnSuccess**: <code>[ODataScheduleCollection](ui_path/models/o_data_schedule_collection.py)</code> -- A list of process schedules

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListSchedulesErrorBody](ui_path/errors/list_schedules_error.py)&#93;</code>

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
<summary><code>def list_storage_buckets(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataStorageBucketCollection</code></summary>

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
try:
    response = client.storage_buckets.list_storage_buckets()
    # TODO: Handle 'response' of type ODataStorageBucketCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStorageBucketsErrorBody
```

**Async**

```python
try:
    response = await async_client.storage_buckets.list_storage_buckets()
    # TODO: Handle 'response' of type ODataStorageBucketCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStorageBucketsErrorBody
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

**OnSuccess**: <code>[ODataStorageBucketCollection](ui_path/models/o_data_storage_bucket_collection.py)</code> -- A list of storage buckets

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListStorageBucketsErrorBody](ui_path/errors/list_storage_buckets_error.py)&#93;</code>

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
<summary><code>def create_test_case(project_id: str, body: CreateTestCaseRequest | CreateTestCaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestCase</code></summary>

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
try:
    response = client.test_cases.create_test_case(
        "some example string",
        CreateTestCaseRequest(name="example-value", description="example-value", labels=["example-value"]),
    )
    # TODO: Handle 'response' of type TestCase
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestCaseErrorBody
```

**Async**

```python
try:
    response = await async_client.test_cases.create_test_case(
        "some example string",
        CreateTestCaseRequest(name="example-value", description="example-value", labels=["example-value"]),
    )
    # TODO: Handle 'response' of type TestCase
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestCaseErrorBody
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

**OnSuccess**: <code>[TestCase](ui_path/models/test_case.py)</code> -- Test case created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateTestCaseErrorBody](ui_path/errors/create_test_case_error.py)&#93;</code>

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
<summary><code>def get_test_case(project_id: str, test_case_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TestCase</code></summary>

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
try:
    response = client.test_cases.get_test_case("some example string", "some example string")
    # TODO: Handle 'response' of type TestCase
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTestCaseErrorBody
```

**Async**

```python
try:
    response = await async_client.test_cases.get_test_case("some example string", "some example string")
    # TODO: Handle 'response' of type TestCase
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTestCaseErrorBody
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

**OnSuccess**: <code>[TestCase](ui_path/models/test_case.py)</code> -- The requested test case

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetTestCaseErrorBody](ui_path/errors/get_test_case_error.py)&#93;</code>

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
<summary><code>def list_test_cases(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> TestCaseListResponse</code></summary>

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
try:
    response = client.test_cases.list_test_cases("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestCaseListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestCasesErrorBody
```

**Async**

```python
try:
    response = await async_client.test_cases.list_test_cases("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestCaseListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestCasesErrorBody
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

**OnSuccess**: <code>[TestCaseListResponse](ui_path/models/test_case_list_response.py)</code> -- A list of test cases in the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListTestCasesErrorBody](ui_path/errors/list_test_cases_error.py)&#93;</code>

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
<summary><code>def list_test_executions(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> TestExecutionListResponse</code></summary>

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
try:
    response = client.test_executions.list_test_executions("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestExecutionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionsErrorBody
```

**Async**

```python
try:
    response = await async_client.test_executions.list_test_executions("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestExecutionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionsErrorBody
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

**OnSuccess**: <code>[TestExecutionListResponse](ui_path/models/test_execution_list_response.py)</code> -- A list of test executions in the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListTestExecutionsErrorBody](ui_path/errors/list_test_executions_error.py)&#93;</code>

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
<summary><code>def create_test_set(project_id: str, body: CreateTestSetRequest | CreateTestSetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TestSet</code></summary>

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
try:
    response = client.test_sets.create_test_set(
        "some example string", CreateTestSetRequest(name="example-value", description="example-value")
    )
    # TODO: Handle 'response' of type TestSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetErrorBody
```

**Async**

```python
try:
    response = await async_client.test_sets.create_test_set(
        "some example string", CreateTestSetRequest(name="example-value", description="example-value")
    )
    # TODO: Handle 'response' of type TestSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetErrorBody
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

**OnSuccess**: <code>[TestSet](ui_path/models/test_set.py)</code> -- Test set created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateTestSetErrorBody](ui_path/errors/create_test_set_error.py)&#93;</code>

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
<summary><code>def list_test_sets(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> TestSetListResponse</code></summary>

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
try:
    response = client.test_sets.list_test_sets("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestSetListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetsErrorBody
```

**Async**

```python
try:
    response = await async_client.test_sets.list_test_sets("some example string", page=1, page_size=1)
    # TODO: Handle 'response' of type TestSetListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetsErrorBody
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

**OnSuccess**: <code>[TestSetListResponse](ui_path/models/test_set_list_response.py)</code> -- A list of test sets in the project

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListTestSetsErrorBody](ui_path/errors/list_test_sets_error.py)&#93;</code>

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
<summary><code>def add_user(body: AddUserRequest | AddUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
try:
    response = client.users.add_user(AddUserRequest(email="user@example.com", role="example-value"))
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.add_user(AddUserRequest(email="user@example.com", role="example-value"))
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddUserErrorBody
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

**OnSuccess**: <code>[User](ui_path/models/user.py)</code> -- User added successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[AddUserErrorBody](ui_path/errors/add_user_error.py)&#93;</code>

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
<summary><code>def create_user(organization_name: str, body: CreateUserRequest | CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> User2</code></summary>

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
try:
    response = client.users.create_user(
        "some example string",
        CreateUserRequest(email="user@example.com", name="example-value", surname="example-value"),
    )
    # TODO: Handle 'response' of type User2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.create_user(
        "some example string",
        CreateUserRequest(email="user@example.com", name="example-value", surname="example-value"),
    )
    # TODO: Handle 'response' of type User2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
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

**OnSuccess**: <code>[User2](ui_path/models/user2.py)</code> -- User created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateUserErrorBody](ui_path/errors/create_user_error.py)&#93;</code>

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
<summary><code>def delete_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.users.delete_user("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

**Async**

```python
try:
    await async_client.users.delete_user("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteUserErrorBody](ui_path/errors/delete_user_error.py)&#93;</code>

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
<summary><code>def edit_user(body: EditUserRequest | EditUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
try:
    response = client.users.edit_user(EditUserRequest(id=1, role="example-value", is_active=True))
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EditUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.edit_user(EditUserRequest(id=1, role="example-value", is_active=True))
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EditUserErrorBody
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

**OnSuccess**: <code>[User](ui_path/models/user.py)</code> -- User updated successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[EditUserErrorBody](ui_path/errors/edit_user_error.py)&#93;</code>

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
<summary><code>def get_odata_users(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataUserCollection</code></summary>

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
try:
    response = client.users.get_odata_users()
    # TODO: Handle 'response' of type ODataUserCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOdataUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_odata_users()
    # TODO: Handle 'response' of type ODataUserCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOdataUsersErrorBody
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

**OnSuccess**: <code>[ODataUserCollection](ui_path/models/o_data_user_collection.py)</code> -- A list of users

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetOdataUsersErrorBody](ui_path/errors/get_odata_users_error.py)&#93;</code>

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
<summary><code>def get_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> User2</code></summary>

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
try:
    response = client.users.get_user("some example string", "some example string")
    # TODO: Handle 'response' of type User2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_user("some example string", "some example string")
    # TODO: Handle 'response' of type User2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
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

**OnSuccess**: <code>[User2](ui_path/models/user2.py)</code> -- The requested user account

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetUserErrorBody](ui_path/errors/get_user_error.py)&#93;</code>

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
<summary><code>def list_roles2(*, request_options: RequestOptionsOrDict | None = None) -> RolesResponse</code></summary>

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
try:
    response = client.users.list_roles2()
    # TODO: Handle 'response' of type RolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRoles2ErrorBody
```

**Async**

```python
try:
    response = await async_client.users.list_roles2()
    # TODO: Handle 'response' of type RolesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRoles2ErrorBody
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

**OnSuccess**: <code>[RolesResponse](ui_path/models/roles_response.py)</code> -- A list of available roles

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListRoles2ErrorBody](ui_path/errors/list_roles2_error.py)&#93;</code>

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
<summary><code>def list_users(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> UserListResponse</code></summary>

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
try:
    response = client.users.list_users(page=1, page_size=1)
    # TODO: Handle 'response' of type UserListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.list_users(page=1, page_size=1)
    # TODO: Handle 'response' of type UserListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
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

**OnSuccess**: <code>[UserListResponse](ui_path/models/user_list_response.py)</code> -- A list of users

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListUsersErrorBody](ui_path/errors/list_users_error.py)&#93;</code>

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
<summary><code>def validate_document_async(project_id: str, body: ValidationRequest | ValidationRequestDict, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None) -> AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi</code></summary>

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
try:
    response = client.validation.validate_document_async(
        "some example string", ValidationRequest(document_id="some example string"), api_version="1.0.0"
    )
    # TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateDocumentAsyncErrorBody
```

**Async**

```python
try:
    response = await async_client.validation.validate_document_async(
        "some example string", ValidationRequest(document_id="some example string"), api_version="1.0.0"
    )
    # TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateDocumentAsyncErrorBody
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

**OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](ui_path/models/async_job_start_response_ui_path_document_understanding_extraction_api.py)</code> -- Validation job started successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ValidateDocumentAsyncErrorBody](ui_path/errors/validate_document_async_error.py)&#93;</code>

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
<summary><code>def create_webhook(body: Webhook | WebhookDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.create_webhook(
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
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_webhook(
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
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](ui_path/models/webhook.py)</code> -- Webhook created successfully

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[CreateWebhookErrorBody](ui_path/errors/create_webhook_error.py)&#93;</code>

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
<summary><code>def delete_webhook(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.webhooks_api.delete_webhook(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.delete_webhook(1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[DeleteWebhookErrorBody](ui_path/errors/delete_webhook_error.py)&#93;</code>

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
<summary><code>def get_webhook_event_types(*, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse</code></summary>

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
try:
    response = client.webhooks_api.get_webhook_event_types()
    # TODO: Handle 'response' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookEventTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook_event_types()
    # TODO: Handle 'response' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookEventTypesErrorBody
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

**OnSuccess**: <code>[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](ui_path/models/odata_webhooks_ui_path_server_configuration_o_data_get_event_types_response.py)</code> -- A list of available webhook event types

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[GetWebhookEventTypesErrorBody](ui_path/errors/get_webhook_event_types_error.py)&#93;</code>

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
<summary><code>def list_webhooks(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ODataWebhookCollection</code></summary>

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
try:
    response = client.webhooks_api.list_webhooks()
    # TODO: Handle 'response' of type ODataWebhookCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_webhooks()
    # TODO: Handle 'response' of type ODataWebhookCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
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

**OnSuccess**: <code>[ODataWebhookCollection](ui_path/models/o_data_webhook_collection.py)</code> -- A list of webhooks

**OnError**: <code>[ApiError](ui_path/core/exceptions.py)&#91;[ListWebhooksErrorBody](ui_path/errors/list_webhooks_error.py)&#93;</code>

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

