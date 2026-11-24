# Reference

> Source: [UiPathClient](src/client.ts)

## Alerts

> Source: [Alerts](src/resources/alerts.ts)

<details>
<summary><code>listAlerts(request?: Alerts.ListAlertsRequest, options?: RequestOptions): ApiPromise&lt;ODataAlertCollection, Alerts.ListAlertsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.alerts.listAlerts();
  // TODO: Handle 'response' of type ODataAlertCollection
} catch (err) {
  // TODO: Handle 'err' of type Alerts.ListAlertsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.alerts.listAlerts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataAlertCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>orderby?</code> | <code>string</code> | OData orderby clause (e.g., CreationTime desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.alerts.listAlerts(request)`

- **OnSuccess**: <code>[ODataAlertCollection](src/models/odata-alert-collection.ts)</code>
- **OnError**: throws <code>[Alerts.ListAlertsError](src/resources/alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.alerts.listAlerts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataAlertCollection, Alerts.ListAlertsError&gt;</code>, with `result.value` of type <code>[ODataAlertCollection](src/models/odata-alert-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppInventory

> Source: [AppInventory](src/resources/app-inventory.ts)

<details>
<summary><code>bulkUpsertAppInventory(request: AppInventory.BulkUpsertAppInventoryRequest, options?: RequestOptions): ApiPromise&lt;AppInventoryListResponse, AppInventory.BulkUpsertAppInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds or updates application entries in bulk. If an application with the same name already exists, it will be updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the application inventory from an external CMDB or asset register.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appInventory.bulkUpsertAppInventory({ body: {} });
  // TODO: Handle 'response' of type AppInventoryListResponse
} catch (err) {
  // TODO: Handle 'err' of type AppInventory.BulkUpsertAppInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appInventory.bulkUpsertAppInventory({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppInventoryListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AppinventoryRequest](src/models/appinventory-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appInventory.bulkUpsertAppInventory(request)`

- **OnSuccess**: <code>[AppInventoryListResponse](src/models/app-inventory-list-response.ts)</code>
- **OnError**: throws <code>[AppInventory.BulkUpsertAppInventoryError](src/resources/app-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appInventory.bulkUpsertAppInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppInventoryListResponse, AppInventory.BulkUpsertAppInventoryError&gt;</code>, with `result.value` of type <code>[AppInventoryListResponse](src/models/app-inventory-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteApplication(request: AppInventory.DeleteApplicationRequest, options?: RequestOptions): ApiPromise&lt;undefined, AppInventory.DeleteApplicationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes an application entry from the application inventory by its unique identifier. Automations that reference this application will lose the association.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.appInventory.deleteApplication({ applicationId: 12345 });
} catch (err) {
  // TODO: Handle 'err' of type AppInventory.DeleteApplicationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appInventory.deleteApplication({ applicationId: 12345 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>applicationId</code> | <code>number</code> | Unique identifier of the application to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appInventory.deleteApplication(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AppInventory.DeleteApplicationError](src/resources/app-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appInventory.deleteApplication(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AppInventory.DeleteApplicationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAppInventory(request?: AppInventory.ListAppInventoryRequest, options?: RequestOptions): ApiPromise&lt;AppInventoryListResponse, AppInventory.ListAppInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the application inventory used for automation assessments. Each entry represents a business application that may be involved in automations. Inventory data is used in the assessment process to calculate automation complexity and effort.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appInventory.listAppInventory({ page: 1, pageSize: 1 });
  // TODO: Handle 'response' of type AppInventoryListResponse
} catch (err) {
  // TODO: Handle 'err' of type AppInventory.ListAppInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appInventory.listAppInventory({ page: 1, pageSize: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppInventoryListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Page number for pagination (1-based)<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appInventory.listAppInventory(request)`

- **OnSuccess**: <code>[AppInventoryListResponse](src/models/app-inventory-list-response.ts)</code>
- **OnError**: throws <code>[AppInventory.ListAppInventoryError](src/resources/app-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appInventory.listAppInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppInventoryListResponse, AppInventory.ListAppInventoryError&gt;</code>, with `result.value` of type <code>[AppInventoryListResponse](src/models/app-inventory-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/resources/assets.ts)

<details>
<summary><code>createAsset(request: Assets.CreateAssetRequest, options?: RequestOptions): ApiPromise&lt;Asset, Assets.CreateAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new asset in the current folder. The asset type determines the kind of value stored: Text, Integer, Bool, or Credential. Credential assets store username and password pairs securely.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.createAsset({
    body: {
      id: 1,
      name: "example-value",
      valueType: ValueType.Text,
      stringValue: "example-value",
      intValue: 1,
      boolValue: true,
      credentialUsername: "example-value",
      credentialPassword: "example-value",
      description: "example-value",
      organizationUnitId: 1,
    },
  });
  // TODO: Handle 'response' of type Asset
} catch (err) {
  // TODO: Handle 'err' of type Assets.CreateAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets
  .createAsset({
    body: {
      id: 1,
      name: "example-value",
      valueType: ValueType.Text,
      stringValue: "example-value",
      intValue: 1,
      boolValue: true,
      credentialUsername: "example-value",
      credentialPassword: "example-value",
      description: "example-value",
      organizationUnitId: 1,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Asset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[Asset](src/models/asset.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.createAsset(request)`

- **OnSuccess**: <code>[Asset](src/models/asset.ts)</code>
- **OnError**: throws <code>[Assets.CreateAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.createAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Asset, Assets.CreateAssetError&gt;</code>, with `result.value` of type <code>[Asset](src/models/asset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAsset(request: Assets.DeleteAssetRequest, options?: RequestOptions): ApiPromise&lt;undefined, Assets.DeleteAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an asset from the current folder by its unique integer identifier. This action cannot be undone. Processes that reference this asset will fail until the asset is recreated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assets.deleteAsset({ key: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Assets.DeleteAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.deleteAsset({ key: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>number</code> | The unique integer identifier of the entity |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.deleteAsset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Assets.DeleteAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.deleteAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Assets.DeleteAssetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsset(request: Assets.GetAssetRequest, options?: RequestOptions): ApiPromise&lt;Asset, Assets.GetAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single asset by its unique integer identifier. Returns the full asset definition including type, value, and folder scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getAsset({ key: 1 });
  // TODO: Handle 'response' of type Asset
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.getAsset({ key: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Asset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>number</code> | The unique integer identifier of the entity |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getAsset(request)`

- **OnSuccess**: <code>[Asset](src/models/asset.ts)</code>
- **OnError**: throws <code>[Assets.GetAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Asset, Assets.GetAssetError&gt;</code>, with `result.value` of type <code>[Asset](src/models/asset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAssets(request?: Assets.ListAssetsRequest, options?: RequestOptions): ApiPromise&lt;ODataAssetCollection, Assets.ListAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of assets defined in the current folder. Assets store shared values such as credentials, text, integers, and booleans that can be consumed by automation processes. Supports OData filtering and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.listAssets();
  // TODO: Handle 'response' of type ODataAssetCollection
} catch (err) {
  // TODO: Handle 'err' of type Assets.ListAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.listAssets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataAssetCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.listAssets(request)`

- **OnSuccess**: <code>[ODataAssetCollection](src/models/odata-asset-collection.ts)</code>
- **OnError**: throws <code>[Assets.ListAssetsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.listAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataAssetCollection, Assets.ListAssetsError&gt;</code>, with `result.value` of type <code>[ODataAssetCollection](src/models/odata-asset-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAsset(request: Assets.UpdateAssetRequest, options?: RequestOptions): ApiPromise&lt;Asset, Assets.UpdateAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing asset by its unique integer identifier. The full asset object must be provided in the request body with the updated values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.updateAsset({
    key: 1,
    body: {
      id: 1,
      name: "example-value",
      valueType: ValueType.Text,
      stringValue: "example-value",
      intValue: 1,
      boolValue: true,
      credentialUsername: "example-value",
      credentialPassword: "example-value",
      description: "example-value",
      organizationUnitId: 1,
    },
  });
  // TODO: Handle 'response' of type Asset
} catch (err) {
  // TODO: Handle 'err' of type Assets.UpdateAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets
  .updateAsset({
    key: 1,
    body: {
      id: 1,
      name: "example-value",
      valueType: ValueType.Text,
      stringValue: "example-value",
      intValue: 1,
      boolValue: true,
      credentialUsername: "example-value",
      credentialPassword: "example-value",
      description: "example-value",
      organizationUnitId: 1,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Asset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>number</code> | The unique integer identifier of the entity |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[Asset](src/models/asset.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.updateAsset(request)`

- **OnSuccess**: <code>[Asset](src/models/asset.ts)</code>
- **OnError**: throws <code>[Assets.UpdateAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.updateAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Asset, Assets.UpdateAssetError&gt;</code>, with `result.value` of type <code>[Asset](src/models/asset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/resources/audit-logs.ts)

<details>
<summary><code>getOrganizationAuditSources(request: AuditLogs.GetOrganizationAuditSourcesRequest, options?: RequestOptions): ApiPromise&lt;AuditSources, AuditLogs.GetOrganizationAuditSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves metadata about available audit event sources at the organization level. Returns the list of services that generate audit events along with available event types and categories for use as filters in the query events endpoint. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.getOrganizationAuditSources({
    organizationName: "some example string",
  });
  // TODO: Handle 'response' of type AuditSources
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.GetOrganizationAuditSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs
  .getOrganizationAuditSources({ organizationName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditSources
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.getOrganizationAuditSources(request)`

- **OnSuccess**: <code>[AuditSources](src/models/audit-sources.ts)</code>
- **OnError**: throws <code>[AuditLogs.GetOrganizationAuditSourcesError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.getOrganizationAuditSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditSources, AuditLogs.GetOrganizationAuditSourcesError&gt;</code>, with `result.value` of type <code>[AuditSources](src/models/audit-sources.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryOrganizationAuditEvents(request: AuditLogs.QueryOrganizationAuditEventsRequest, options?: RequestOptions): ApiPromise&lt;AuditEventCollection, AuditLogs.QueryOrganizationAuditEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves audit events at the organization level filtered by time range, event source, event type, user, and other criteria. Returns a paginated list of audit events with actor information, event details, and status. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.queryOrganizationAuditEvents({
    organizationName: "some example string",
  });
  // TODO: Handle 'response' of type AuditEventCollection
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.QueryOrganizationAuditEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs
  .queryOrganizationAuditEvents({ organizationName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditEventCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>from?</code> | <code>Date</code> (date-time) | Start of the audit event time range (ISO 8601 datetime) |
| <code>to?</code> | <code>Date</code> (date-time) | End of the audit event time range (ISO 8601 datetime) |
| <code>source?</code> | <code>string[]</code> | Filter by event source service name |
| <code>maxCount?</code> | <code>number</code> | Maximum number of audit events to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.queryOrganizationAuditEvents(request)`

- **OnSuccess**: <code>[AuditEventCollection](src/models/audit-event-collection.ts)</code>
- **OnError**: throws <code>[AuditLogs.QueryOrganizationAuditEventsError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.queryOrganizationAuditEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditEventCollection, AuditLogs.QueryOrganizationAuditEventsError&gt;</code>, with `result.value` of type <code>[AuditEventCollection](src/models/audit-event-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryTenantAuditEvents(request: AuditLogs.QueryTenantAuditEventsRequest, options?: RequestOptions): ApiPromise&lt;AuditEventCollection, AuditLogs.QueryTenantAuditEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves audit events scoped to a specific tenant, filtered by time range, event source, event type, user, and other criteria. Tenant-level audit events cover actions within Orchestrator, Document Understanding, and other tenant-scoped services. Requires the PM.Audit or PM.Audit.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.queryTenantAuditEvents({
    organizationName: "some example string",
    tenantName: "some example string",
  });
  // TODO: Handle 'response' of type AuditEventCollection
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.QueryTenantAuditEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs
  .queryTenantAuditEvents({ organizationName: "some example string", tenantName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditEventCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>tenantName</code> | <code>string</code> | The name of the UiPath tenant |
| <code>from?</code> | <code>Date</code> (date-time) | Start of the audit event time range (ISO 8601 datetime) |
| <code>to?</code> | <code>Date</code> (date-time) | End of the audit event time range (ISO 8601 datetime) |
| <code>source?</code> | <code>string[]</code> | Filter by event source service name |
| <code>maxCount?</code> | <code>number</code> | Maximum number of audit events to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.queryTenantAuditEvents(request)`

- **OnSuccess**: <code>[AuditEventCollection](src/models/audit-event-collection.ts)</code>
- **OnError**: throws <code>[AuditLogs.QueryTenantAuditEventsError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.queryTenantAuditEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditEventCollection, AuditLogs.QueryTenantAuditEventsError&gt;</code>, with `result.value` of type <code>[AuditEventCollection](src/models/audit-event-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/resources/automations.ts)

<details>
<summary><code>createAutomationIdea(request: Automations.CreateAutomationIdeaRequestParams, options?: RequestOptions): ApiPromise&lt;Automation, Automations.CreateAutomationIdeaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the Idea phase and is available for assessment and prioritization by CoE administrators. The request body must include the idea name, description, submitter information, and the estimated benefit details used in cost-benefit analysis.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.createAutomationIdea({
    body: { name: "some example string", description: "some example string" },
  });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.CreateAutomationIdeaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .createAutomationIdea({ body: { name: "some example string", description: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateAutomationIdeaRequest](src/models/create-automation-idea-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.createAutomationIdea(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.CreateAutomationIdeaError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.createAutomationIdea(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.CreateAutomationIdeaError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAutomation(request: Automations.DeleteAutomationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Automations.DeleteAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an automation record from Automation Hub by its unique identifier. This action removes the idea and all associated documents, comments, and collaborator data. This action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.automations.deleteAutomation({ automationId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Automations.DeleteAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations.deleteAutomation({ automationId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automationId</code> | <code>number</code> | Unique integer identifier of the automation idea or project |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.deleteAutomation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Automations.DeleteAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.deleteAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Automations.DeleteAutomationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAutomation(request: Automations.GetAutomationRequest, options?: RequestOptions): ApiPromise&lt;Automation, Automations.GetAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single automation record by its unique identifier. Returns full details including pipeline phase, status, cost-benefit analysis data, collaborators, documents, and tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.getAutomation({ automationId: 1 });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.GetAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations.getAutomation({ automationId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automationId</code> | <code>number</code> | Unique integer identifier of the automation idea or project |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.getAutomation(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.GetAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.getAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.GetAutomationError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAutomationCollaborators(request: Automations.ListAutomationCollaboratorsRequest, options?: RequestOptions): ApiPromise&lt;AutomationsCollaboratorsResponse, Automations.ListAutomationCollaboratorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of collaborators assigned to a specific automation idea or project. Collaborators have defined roles such as subject matter expert, developer, or reviewer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.listAutomationCollaborators({ automationId: 1 });
  // TODO: Handle 'response' of type AutomationsCollaboratorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automations.ListAutomationCollaboratorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations.listAutomationCollaborators({ automationId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationsCollaboratorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automationId</code> | <code>number</code> | Unique integer identifier of the automation idea or project |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.listAutomationCollaborators(request)`

- **OnSuccess**: <code>[AutomationsCollaboratorsResponse](src/models/automations-collaborators-response.ts)</code>
- **OnError**: throws <code>[Automations.ListAutomationCollaboratorsError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.listAutomationCollaborators(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationsCollaboratorsResponse, Automations.ListAutomationCollaboratorsError&gt;</code>, with `result.value` of type <code>[AutomationsCollaboratorsResponse](src/models/automations-collaborators-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAutomations(request?: Automations.ListAutomationsRequest, options?: RequestOptions): ApiPromise&lt;AutomationListResponse, Automations.ListAutomationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by phase, status, and other pipeline attributes. Returns a paginated list of automation records including metadata, cost-benefit analysis data, and submission details. Used by CoE teams to programmatically query and track the automation pipeline.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.listAutomations({
    phase: "example-value",
    status: "Active",
    page: 1,
    pageSize: 1,
  });
  // TODO: Handle 'response' of type AutomationListResponse
} catch (err) {
  // TODO: Handle 'err' of type Automations.ListAutomationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .listAutomations({ phase: "example-value", status: "Active", page: 1, pageSize: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>phase?</code> | <code>string</code> | Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing, Production) |
| <code>status?</code> | <code>string</code> | Filter automations by status within their current phase |
| <code>page?</code> | <code>number</code> | Page number for pagination (1-based)<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.listAutomations(request)`

- **OnSuccess**: <code>[AutomationListResponse](src/models/automation-list-response.ts)</code>
- **OnError**: throws <code>[Automations.ListAutomationsError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.listAutomations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationListResponse, Automations.ListAutomationsError&gt;</code>, with `result.value` of type <code>[AutomationListResponse](src/models/automation-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAutomationCollaborator(request: Automations.RemoveAutomationCollaboratorRequest, options?: RequestOptions): ApiPromise&lt;undefined, Automations.RemoveAutomationCollaboratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a collaborator from an automation by their user ID. The user will lose access to collaborate on the automation idea or project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.automations.removeAutomationCollaborator({ automationId: 1, userId: 12345 });
} catch (err) {
  // TODO: Handle 'err' of type Automations.RemoveAutomationCollaboratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .removeAutomationCollaborator({ automationId: 1, userId: 12345 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automationId</code> | <code>number</code> | Unique integer identifier of the automation idea or project |
| <code>userId</code> | <code>number</code> | Unique identifier of the user to remove as a collaborator |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.removeAutomationCollaborator(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Automations.RemoveAutomationCollaboratorError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.removeAutomationCollaborator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Automations.RemoveAutomationCollaboratorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAutomation(request: Automations.UpdateAutomationRequestParams, options?: RequestOptions): ApiPromise&lt;Automation, Automations.UpdateAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates an automation record by its unique identifier. Commonly used to advance an automation through the pipeline by updating its phase and status. Only fields included in the request body are modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.updateAutomation({ automationId: 1, body: {} });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.UpdateAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations.updateAutomation({ automationId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>automationId</code> | <code>number</code> | Unique integer identifier of the automation idea or project |
| <code>body</code> | <code>[UpdateAutomationRequest](src/models/update-automation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.updateAutomation(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.UpdateAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.updateAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.UpdateAutomationError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Classification

> Source: [Classification](src/resources/classification.ts)

<details>
<summary><code>classifyDocumentAsync(request: Classification.ClassifyDocumentAsyncRequest, options?: RequestOptions): ApiPromise&lt;AsyncJobStartResponse, Classification.ClassifyDocumentAsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once processing is complete.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classification.classifyDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: {
      documentId: "some example string",
      classifiersOptions: [{ classifierId: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type AsyncJobStartResponse
} catch (err) {
  // TODO: Handle 'err' of type Classification.ClassifyDocumentAsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classification
  .classifyDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: {
      documentId: "some example string",
      classifiersOptions: [{ classifierId: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncJobStartResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |
| <code>body</code> | <code>[ClassificationRequest](src/models/classification-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classification.classifyDocumentAsync(request)`

- **OnSuccess**: <code>[AsyncJobStartResponse](src/models/async-job-start-response.ts)</code>
- **OnError**: throws <code>[Classification.ClassifyDocumentAsyncError](src/resources/classification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classification.classifyDocumentAsync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncJobStartResponse, Classification.ClassifyDocumentAsyncError&gt;</code>, with `result.value` of type <code>[AsyncJobStartResponse](src/models/async-job-start-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClassificationResult(request: Classification.GetClassificationResultRequest, options?: RequestOptions): ApiPromise&lt;ClassificationResult, Classification.GetClassificationResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the result of an asynchronous classification request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results are available for 24 hours from the time the job completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.classification.getClassificationResult({
    projectId: "some example string",
    requestId: "some example string",
    apiVersion: "1.0.0",
  });
  // TODO: Handle 'response' of type ClassificationResult
} catch (err) {
  // TODO: Handle 'err' of type Classification.GetClassificationResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.classification
  .getClassificationResult({
    projectId: "some example string",
    requestId: "some example string",
    apiVersion: "1.0.0",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClassificationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>requestId</code> | <code>string</code> | Unique identifier of the asynchronous job request to retrieve results for |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.classification.getClassificationResult(request)`

- **OnSuccess**: <code>[ClassificationResult](src/models/classification-result.ts)</code>
- **OnError**: throws <code>[Classification.GetClassificationResultError](src/resources/classification.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.classification.getClassificationResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClassificationResult, Classification.GetClassificationResultError&gt;</code>, with `result.value` of type <code>[ClassificationResult](src/models/classification-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Digitization

> Source: [Digitization](src/resources/digitization.ts)

<details>
<summary><code>digitizeDocument(request: Digitization.DigitizeDocumentRequest, options?: RequestOptions): ApiPromise&lt;DigitizationResult, Digitization.DigitizeDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a document for digitization, converting it into a structured digital representation that can be used for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The response includes a documentId that must be used in subsequent classification, extraction, and validation requests. Digitized results are retained for seven days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.digitization.digitizeDocument({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: {
      documentId: "example-value",
      contentType: ContentType.ImageJpeg,
      documentBase64: "example-value",
    },
  });
  // TODO: Handle 'response' of type DigitizationResult
} catch (err) {
  // TODO: Handle 'err' of type Digitization.DigitizeDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.digitization
  .digitizeDocument({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: {
      documentId: "example-value",
      contentType: ContentType.ImageJpeg,
      documentBase64: "example-value",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DigitizationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |
| <code>body</code> | <code>[DigitizationRequest](src/models/digitization-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.digitization.digitizeDocument(request)`

- **OnSuccess**: <code>[DigitizationResult](src/models/digitization-result.ts)</code>
- **OnError**: throws <code>[Digitization.DigitizeDocumentError](src/resources/digitization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.digitization.digitizeDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DigitizationResult, Digitization.DigitizeDocumentError&gt;</code>, with `result.value` of type <code>[DigitizationResult](src/models/digitization-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/resources/discovery.ts)

<details>
<summary><code>listClassifiers(request: Discovery.ListClassifiersRequest, options?: RequestOptions): ApiPromise&lt;ProjectsClassifiersResponse, Discovery.ListClassifiersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available classifier models configured within a specific Document Understanding project. Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning models trained on specific document types; generative classifiers use large language models.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listClassifiers({
    projectId: "some example string",
    apiVersion: "1.0.0",
  });
  // TODO: Handle 'response' of type ProjectsClassifiersResponse
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListClassifiersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery
  .listClassifiers({ projectId: "some example string", apiVersion: "1.0.0" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsClassifiersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listClassifiers(request)`

- **OnSuccess**: <code>[ProjectsClassifiersResponse](src/models/projects-classifiers-response.ts)</code>
- **OnError**: throws <code>[Discovery.ListClassifiersError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listClassifiers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsClassifiersResponse, Discovery.ListClassifiersError&gt;</code>, with `result.value` of type <code>[ProjectsClassifiersResponse](src/models/projects-classifiers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExtractors(request: Discovery.ListExtractorsRequest, options?: RequestOptions): ApiPromise&lt;ProjectsExtractorsResponse, Discovery.ListExtractorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available extractor models configured within a specific Document Understanding project. Each extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in extraction requests to invoke the correct model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listExtractors({
    projectId: "some example string",
    apiVersion: "1.0.0",
  });
  // TODO: Handle 'response' of type ProjectsExtractorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListExtractorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery
  .listExtractors({ projectId: "some example string", apiVersion: "1.0.0" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsExtractorsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listExtractors(request)`

- **OnSuccess**: <code>[ProjectsExtractorsResponse](src/models/projects-extractors-response.ts)</code>
- **OnError**: throws <code>[Discovery.ListExtractorsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listExtractors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsExtractorsResponse, Discovery.ListExtractorsError&gt;</code>, with `result.value` of type <code>[ProjectsExtractorsResponse](src/models/projects-extractors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects(request?: Discovery.ListProjectsRequest, options?: RequestOptions): ApiPromise&lt;ProjectsResponse, Discovery.ListProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all available Document Understanding projects accessible to the authenticated user. Each project contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use project IDs to scope classification and extraction requests to a specific project's models.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listProjects({ apiVersion: "1.0.0" });
  // TODO: Handle 'response' of type ProjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery.listProjects({ apiVersion: "1.0.0" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listProjects(request)`

- **OnSuccess**: <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: throws <code>[Discovery.ListProjectsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectsResponse, Discovery.ListProjectsError&gt;</code>, with `result.value` of type <code>[ProjectsResponse](src/models/projects-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](src/resources/entities.ts)

<details>
<summary><code>createEntityRecord(request: Entities.CreateEntityRecordRequest, options?: RequestOptions): ApiPromise&lt;EntityRecord, Entities.CreateEntityRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new record for the specified custom entity type. The request body must conform to the entity's schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and should not be included in the request body. Requires the DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.createEntityRecord({ entityName: "some example string", body: {} });
  // TODO: Handle 'response' of type EntityRecord
} catch (err) {
  // TODO: Handle 'err' of type Entities.CreateEntityRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .createEntityRecord({ entityName: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityRecord
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.createEntityRecord(request)`

- **OnSuccess**: <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: throws <code>[Entities.CreateEntityRecordError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.createEntityRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityRecord, Entities.CreateEntityRecordError&gt;</code>, with `result.value` of type <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEntityRecord(request: Entities.DeleteEntityRecordRequest, options?: RequestOptions): ApiPromise&lt;undefined, Entities.DeleteEntityRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entities.deleteEntityRecord({
    entityName: "some example string",
    recordId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Entities.DeleteEntityRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .deleteEntityRecord({ entityName: "some example string", recordId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>recordId</code> | <code>string</code> | Unique identifier of the entity record |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.deleteEntityRecord(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Entities.DeleteEntityRecordError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.deleteEntityRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Entities.DeleteEntityRecordError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEntityRecord(request: Entities.GetEntityRecordRequest, options?: RequestOptions): ApiPromise&lt;EntityRecord, Entities.GetEntityRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single entity record by its unique identifier. Returns all fields of the record including system fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.getEntityRecord({
    entityName: "some example string",
    recordId: "some example string",
    select: "example-value",
    expand: "example-value",
  });
  // TODO: Handle 'response' of type EntityRecord
} catch (err) {
  // TODO: Handle 'err' of type Entities.GetEntityRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .getEntityRecord({
    entityName: "some example string",
    recordId: "some example string",
    select: "example-value",
    expand: "example-value",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityRecord
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>recordId</code> | <code>string</code> | Unique identifier of the entity record |
| <code>select?</code> | <code>string</code> | Comma-separated list of field names to include in the response |
| <code>expand?</code> | <code>string</code> | Related entity references to expand inline in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.getEntityRecord(request)`

- **OnSuccess**: <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: throws <code>[Entities.GetEntityRecordError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.getEntityRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityRecord, Entities.GetEntityRecordError&gt;</code>, with `result.value` of type <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntityRecords(request: Entities.ListEntityRecordsRequest, options?: RequestOptions): ApiPromise&lt;EntityRecordCollection, Entities.ListEntityRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions, ordering, pagination via skip and top, and field selection. The available entity names and their fields depend on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.listEntityRecords({
    entityName: "some example string",
    filter: "example-value",
    orderby: "example-value",
    top: 1,
    skip: 1,
    select: "example-value",
    expand: "example-value",
  });
  // TODO: Handle 'response' of type EntityRecordCollection
} catch (err) {
  // TODO: Handle 'err' of type Entities.ListEntityRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .listEntityRecords({
    entityName: "some example string",
    filter: "example-value",
    orderby: "example-value",
    top: 1,
    skip: 1,
    select: "example-value",
    expand: "example-value",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityRecordCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>filter?</code> | <code>string</code> | Filter expression to narrow results by field values |
| <code>orderby?</code> | <code>string</code> | Field name and direction to sort results (e.g., CreatedOn desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>select?</code> | <code>string</code> | Comma-separated list of field names to include in the response |
| <code>expand?</code> | <code>string</code> | Related entity references to expand inline in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.listEntityRecords(request)`

- **OnSuccess**: <code>[EntityRecordCollection](src/models/entity-record-collection.ts)</code>
- **OnError**: throws <code>[Entities.ListEntityRecordsError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.listEntityRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityRecordCollection, Entities.ListEntityRecordsError&gt;</code>, with `result.value` of type <code>[EntityRecordCollection](src/models/entity-record-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryEntityRecords(request: Entities.QueryEntityRecordsRequest, options?: RequestOptions): ApiPromise&lt;EntityRecordCollection, Entities.QueryEntityRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs an advanced query against the entity using a structured filter expression in the request body. Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.queryEntityRecords({ entityName: "some example string", body: {} });
  // TODO: Handle 'response' of type EntityRecordCollection
} catch (err) {
  // TODO: Handle 'err' of type Entities.QueryEntityRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .queryEntityRecords({ entityName: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityRecordCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>body</code> | <code>[EntityQueryRequest](src/models/entity-query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.queryEntityRecords(request)`

- **OnSuccess**: <code>[EntityRecordCollection](src/models/entity-record-collection.ts)</code>
- **OnError**: throws <code>[Entities.QueryEntityRecordsError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.queryEntityRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityRecordCollection, Entities.QueryEntityRecordsError&gt;</code>, with `result.value` of type <code>[EntityRecordCollection](src/models/entity-record-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEntityRecord(request: Entities.UpdateEntityRecordRequest, options?: RequestOptions): ApiPromise&lt;EntityRecord, Entities.UpdateEntityRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing entity record by its unique identifier. The request body should include only the fields to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and ModifiedBy are updated automatically. Requires the DataService.Data scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entities.updateEntityRecord({
    entityName: "some example string",
    recordId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type EntityRecord
} catch (err) {
  // TODO: Handle 'err' of type Entities.UpdateEntityRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entities
  .updateEntityRecord({ entityName: "some example string", recordId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityRecord
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityName</code> | <code>string</code> | Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive. |
| <code>recordId</code> | <code>string</code> | Unique identifier of the entity record |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entities.updateEntityRecord(request)`

- **OnSuccess**: <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: throws <code>[Entities.UpdateEntityRecordError](src/resources/entities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entities.updateEntityRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityRecord, Entities.UpdateEntityRecordError&gt;</code>, with `result.value` of type <code>[EntityRecord](src/models/entity-record.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Extraction

> Source: [Extraction](src/resources/extraction.ts)

<details>
<summary><code>extractDocumentAsync(request: Extraction.ExtractDocumentAsyncRequest, options?: RequestOptions): ApiPromise&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Extraction.ExtractDocumentAsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the document type must be specified in the request body. Returns a requestId to poll for results. Results are retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing completes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extraction.extractDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: { documentId: "some example string", extractorsOptions: [{ extractorId: "some example string" }] },
  });
  // TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
} catch (err) {
  // TODO: Handle 'err' of type Extraction.ExtractDocumentAsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extraction
  .extractDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: { documentId: "some example string", extractorsOptions: [{ extractorId: "some example string" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |
| <code>body</code> | <code>[ExtractionRequest](src/models/extraction-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extraction.extractDocumentAsync(request)`

- **OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts)</code>
- **OnError**: throws <code>[Extraction.ExtractDocumentAsyncError](src/resources/extraction.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extraction.extractDocumentAsync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Extraction.ExtractDocumentAsyncError&gt;</code>, with `result.value` of type <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExtractionResult(request: Extraction.GetExtractionResultRequest, options?: RequestOptions): ApiPromise&lt;ExtractionResult, Extraction.GetExtractionResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the result of an asynchronous extraction request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns extracted field values with associated confidence scores. Results are available for 24 hours from the time the job completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extraction.getExtractionResult({
    projectId: "some example string",
    requestId: "some example string",
    apiVersion: "1.0.0",
  });
  // TODO: Handle 'response' of type ExtractionResult
} catch (err) {
  // TODO: Handle 'err' of type Extraction.GetExtractionResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extraction
  .getExtractionResult({
    projectId: "some example string",
    requestId: "some example string",
    apiVersion: "1.0.0",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtractionResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>requestId</code> | <code>string</code> | Unique identifier of the asynchronous job request to retrieve results for |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extraction.getExtractionResult(request)`

- **OnSuccess**: <code>[ExtractionResult](src/models/extraction-result.ts)</code>
- **OnError**: throws <code>[Extraction.GetExtractionResultError](src/resources/extraction.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extraction.getExtractionResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtractionResult, Extraction.GetExtractionResultError&gt;</code>, with `result.value` of type <code>[ExtractionResult](src/models/extraction-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/resources/folders.ts)

<details>
<summary><code>listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise&lt;ODataFolderCollection, Folders.ListFoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the X-UIPATH-OrganizationUnitId request header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.listFolders();
  // TODO: Handle 'response' of type ODataFolderCollection
} catch (err) {
  // TODO: Handle 'err' of type Folders.ListFoldersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.listFolders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataFolderCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.listFolders(request)`

- **OnSuccess**: <code>[ODataFolderCollection](src/models/odata-folder-collection.ts)</code>
- **OnError**: throws <code>[Folders.ListFoldersError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.listFolders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataFolderCollection, Folders.ListFoldersError&gt;</code>, with `result.value` of type <code>[ODataFolderCollection](src/models/odata-folder-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>createGroup(request: Groups.CreateGroupRequestParams, options?: RequestOptions): ApiPromise&lt;Group, Groups.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.createGroup({
    organizationName: "some example string",
    body: { name: "example-value", type: Type.Local },
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type Groups.CreateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .createGroup({ organizationName: "some example string", body: { name: "example-value", type: Type.Local } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>body</code> | <code>[CreateGroupRequest](src/models/create-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.createGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[Groups.CreateGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.createGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, Groups.CreateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, Groups.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific user group by its unique identifier within the specified organizational partition. Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroup({
    organizationName: "some example string",
    partitionGlobalId: "some example string",
    groupId: "abc123",
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type Groups.GetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .getGroup({
    organizationName: "some example string",
    partitionGlobalId: "some example string",
    groupId: "abc123",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>partitionGlobalId</code> | <code>string</code> | Global partition identifier for the organization or tenant scope |
| <code>groupId</code> | <code>string</code> | Unique identifier of the group |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[Groups.GetGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, Groups.GetGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroups(request: Groups.ListGroupsRequest, options?: RequestOptions): ApiPromise&lt;IdentityApiGroupResponse, Groups.ListGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all user groups within the specified organizational partition (tenant or organization). Groups aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroups({
    organizationName: "some example string",
    partitionGlobalId: "some example string",
  });
  // TODO: Handle 'response' of type IdentityApiGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type Groups.ListGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .listGroups({ organizationName: "some example string", partitionGlobalId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityApiGroupResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>partitionGlobalId</code> | <code>string</code> | Global partition identifier for the organization or tenant scope |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listGroups(request)`

- **OnSuccess**: <code>[IdentityApiGroupResponse](src/models/identity-api-group-response.ts)</code>
- **OnError**: throws <code>[Groups.ListGroupsError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.listGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityApiGroupResponse, Groups.ListGroupsError&gt;</code>, with `result.value` of type <code>[IdentityApiGroupResponse](src/models/identity-api-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise&lt;Job, Jobs.GetJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single job by its unique integer identifier. Returns full job details including state, start and end times, robot information, and associated process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJob({ key: 1 });
  // TODO: Handle 'response' of type Job
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getJob({ key: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Job
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>number</code> | The unique integer identifier of the entity |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJob(request)`

- **OnSuccess**: <code>[Job](src/models/job.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Job, Jobs.GetJobError&gt;</code>, with `result.value` of type <code>[Job](src/models/job.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobs(request?: Jobs.ListJobsRequest, options?: RequestOptions): ApiPromise&lt;ODataJobCollection, Jobs.ListJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby, $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes by robots.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listJobs();
  // TODO: Handle 'response' of type ODataJobCollection
} catch (err) {
  // TODO: Handle 'err' of type Jobs.ListJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.listJobs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataJobCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>orderby?</code> | <code>string</code> | OData orderby clause (e.g., CreationTime desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>select?</code> | <code>string</code> | Comma-separated list of property names to include in the response |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listJobs(request)`

- **OnSuccess**: <code>[ODataJobCollection](src/models/odata-job-collection.ts)</code>
- **OnError**: throws <code>[Jobs.ListJobsError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.listJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataJobCollection, Jobs.ListJobsError&gt;</code>, with `result.value` of type <code>[ODataJobCollection](src/models/odata-job-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startJobs(request: Jobs.StartJobsRequestParams, options?: RequestOptions): ApiPromise&lt;ODataJobCollection, Jobs.StartJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target folder. Returns details of the created jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.startJobs({
    body: { startInfo: { releaseKey: "00000000-0000-0000-0000-000000000000", strategy: Strategy.All } },
  });
  // TODO: Handle 'response' of type ODataJobCollection
} catch (err) {
  // TODO: Handle 'err' of type Jobs.StartJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs
  .startJobs({
    body: { startInfo: { releaseKey: "00000000-0000-0000-0000-000000000000", strategy: Strategy.All } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataJobCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[StartJobsRequest](src/models/start-jobs-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.startJobs(request)`

- **OnSuccess**: <code>[ODataJobCollection](src/models/odata-job-collection.ts)</code>
- **OnError**: throws <code>[Jobs.StartJobsError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.startJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataJobCollection, Jobs.StartJobsError&gt;</code>, with `result.value` of type <code>[ODataJobCollection](src/models/odata-job-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopJob(request: Jobs.StopJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Jobs.StopJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish) or Kill (forcefully terminates the job immediately). Requires the job ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.jobs.stopJob({ body: { jobId: 1, strategy: Strategy1.SoftStop } });
} catch (err) {
  // TODO: Handle 'err' of type Jobs.StopJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.stopJob({ body: { jobId: 1, strategy: Strategy1.SoftStop } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[StopJobRequest](src/models/stop-job-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.stopJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Jobs.StopJobError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.stopJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Jobs.StopJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Licenses

> Source: [Licenses](src/resources/licenses.ts)

<details>
<summary><code>getGroupLicenseAllocation(request: Licenses.GetGroupLicenseAllocationRequest, options?: RequestOptions): ApiPromise&lt;GroupLicenseAllocation, Licenses.GetGroupLicenseAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the user license allocation rule for a specific group within the organization account. Returns the license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.licenses.getGroupLicenseAllocation({
    organizationName: "some example string",
    accountId: "abc123",
    groupId: "abc123",
  });
  // TODO: Handle 'response' of type GroupLicenseAllocation
} catch (err) {
  // TODO: Handle 'err' of type Licenses.GetGroupLicenseAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.licenses
  .getGroupLicenseAllocation({
    organizationName: "some example string",
    accountId: "abc123",
    groupId: "abc123",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupLicenseAllocation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>accountId</code> | <code>string</code> | Unique identifier of the organization account |
| <code>groupId</code> | <code>string</code> | Unique identifier of the user group |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.licenses.getGroupLicenseAllocation(request)`

- **OnSuccess**: <code>[GroupLicenseAllocation](src/models/group-license-allocation.ts)</code>
- **OnError**: throws <code>[Licenses.GetGroupLicenseAllocationError](src/resources/licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.licenses.getGroupLicenseAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupLicenseAllocation, Licenses.GetGroupLicenseAllocationError&gt;</code>, with `result.value` of type <code>[GroupLicenseAllocation](src/models/group-license-allocation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroupLicenseAllocation(request: Licenses.UpdateGroupLicenseAllocationRequestParams, options?: RequestOptions): ApiPromise&lt;GroupLicenseAllocation, Licenses.UpdateGroupLicenseAllocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allocates or updates user licenses for a specific group. The rule defines which license types members of this group are entitled to. This controls the licenses automatically assigned when a member of the group first logs in. Requires the PM.License OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.licenses.updateGroupLicenseAllocation({
    organizationName: "some example string",
    accountId: "abc123",
    groupId: "abc123",
    body: { userLicenses: [{}] },
  });
  // TODO: Handle 'response' of type GroupLicenseAllocation
} catch (err) {
  // TODO: Handle 'err' of type Licenses.UpdateGroupLicenseAllocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.licenses
  .updateGroupLicenseAllocation({
    organizationName: "some example string",
    accountId: "abc123",
    groupId: "abc123",
    body: { userLicenses: [{}] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupLicenseAllocation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>accountId</code> | <code>string</code> | Unique identifier of the organization account |
| <code>groupId</code> | <code>string</code> | Unique identifier of the user group |
| <code>body</code> | <code>[UpdateGroupLicenseAllocationRequest](src/models/update-group-license-allocation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.licenses.updateGroupLicenseAllocation(request)`

- **OnSuccess**: <code>[GroupLicenseAllocation](src/models/group-license-allocation.ts)</code>
- **OnError**: throws <code>[Licenses.UpdateGroupLicenseAllocationError](src/resources/licenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.licenses.updateGroupLicenseAllocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupLicenseAllocation, Licenses.UpdateGroupLicenseAllocationError&gt;</code>, with `result.value` of type <code>[GroupLicenseAllocation](src/models/group-license-allocation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Machines

> Source: [Machines](src/resources/machines.ts)

<details>
<summary><code>listMachines(request?: Machines.ListMachinesRequest, options?: RequestOptions): ApiPromise&lt;ODataMachineCollection, Machines.ListMachinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of machine templates and registered machines. Machine templates define the number of runtimes available for cloud robots, while standard machines represent physical or virtual machines where Unattended Robot is installed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.machines.listMachines();
  // TODO: Handle 'response' of type ODataMachineCollection
} catch (err) {
  // TODO: Handle 'err' of type Machines.ListMachinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.machines.listMachines().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataMachineCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.machines.listMachines(request)`

- **OnSuccess**: <code>[ODataMachineCollection](src/models/odata-machine-collection.ts)</code>
- **OnError**: throws <code>[Machines.ListMachinesError](src/resources/machines.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.machines.listMachines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataMachineCollection, Machines.ListMachinesError&gt;</code>, with `result.value` of type <code>[ODataMachineCollection](src/models/odata-machine-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Packages

> Source: [Packages](src/resources/packages.ts)

<details>
<summary><code>listPackages(request?: Packages.ListPackagesRequest, options?: RequestOptions): ApiPromise&lt;ODataPackageCollection, Packages.ListPackagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation packages uploaded to Orchestrator. Each package represents a versioned NuGet package containing one or more automation processes. Supports filtering by package name and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.packages.listPackages();
  // TODO: Handle 'response' of type ODataPackageCollection
} catch (err) {
  // TODO: Handle 'err' of type Packages.ListPackagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.packages.listPackages().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataPackageCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.packages.listPackages(request)`

- **OnSuccess**: <code>[ODataPackageCollection](src/models/odata-package-collection.ts)</code>
- **OnError**: throws <code>[Packages.ListPackagesError](src/resources/packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.packages.listPackages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataPackageCollection, Packages.ListPackagesError&gt;</code>, with `result.value` of type <code>[ODataPackageCollection](src/models/odata-package-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pipeline

> Source: [Pipeline](src/resources/pipeline.ts)

<details>
<summary><code>getAutomationPipeline(options?: RequestOptions): ApiPromise&lt;PipelineData, Pipeline.GetAutomationPipelineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the automation program.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pipeline.getAutomationPipeline();
  // TODO: Handle 'response' of type PipelineData
} catch (err) {
  // TODO: Handle 'err' of type Pipeline.GetAutomationPipelineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pipeline.getAutomationPipeline().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PipelineData
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pipeline.getAutomationPipeline()`

- **OnSuccess**: <code>[PipelineData](src/models/pipeline-data.ts)</code>
- **OnError**: throws <code>[Pipeline.GetAutomationPipelineError](src/resources/pipeline.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pipeline.getAutomationPipeline().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PipelineData, Pipeline.GetAutomationPipelineError&gt;</code>, with `result.value` of type <code>[PipelineData](src/models/pipeline-data.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](src/resources/processes.ts)

<details>
<summary><code>listProcesses(request?: Processes.ListProcessesRequest, options?: RequestOptions): ApiPromise&lt;ODataProcessCollection, Processes.ListProcessesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of automation processes deployed in the current folder. Each process represents a specific version of a published package configured for execution. Supports OData filtering and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.listProcesses();
  // TODO: Handle 'response' of type ODataProcessCollection
} catch (err) {
  // TODO: Handle 'err' of type Processes.ListProcessesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.listProcesses().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataProcessCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>orderby?</code> | <code>string</code> | OData orderby clause (e.g., CreationTime desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.listProcesses(request)`

- **OnSuccess**: <code>[ODataProcessCollection](src/models/odata-process-collection.ts)</code>
- **OnError**: throws <code>[Processes.ListProcessesError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.listProcesses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataProcessCollection, Processes.ListProcessesError&gt;</code>, with `result.value` of type <code>[ODataProcessCollection](src/models/odata-process-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>createProject(request: Projects.CreateProjectRequestParams, options?: RequestOptions): ApiPromise&lt;ProjectUiPathTestManagerProjectsApi, Projects.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test project in Test Manager. The project becomes the container for all test cases, requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProject({
    body: { name: "example-value", description: "example-value" },
  });
  // TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProject({ body: { name: "example-value", description: "example-value" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectUiPathTestManagerProjectsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProjectRequest](src/models/create-project-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProject(request)`

- **OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](src/models/project-ui-path-test-manager-projects-api.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectUiPathTestManagerProjectsApi, Projects.CreateProjectError&gt;</code>, with `result.value` of type <code>[ProjectUiPathTestManagerProjectsApi](src/models/project-ui-path-test-manager-projects-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;ProjectUiPathTestManagerProjectsApi, Projects.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific test project by its unique identifier. Returns project details including name, description, creation date, and summary statistics for test cases and requirements.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProject({ projectId: "some example string" });
  // TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getProject({ projectId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectUiPathTestManagerProjectsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProject(request)`

- **OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](src/models/project-ui-path-test-manager-projects-api.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectUiPathTestManagerProjectsApi, Projects.GetProjectError&gt;</code>, with `result.value` of type <code>[ProjectUiPathTestManagerProjectsApi](src/models/project-ui-path-test-manager-projects-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects2(request?: Projects.ListProjects2Request, options?: RequestOptions): ApiPromise&lt;ProjectListResponse, Projects.ListProjects2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.listProjects2({ page: 1, pageSize: 1 });
  // TODO: Handle 'response' of type ProjectListResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.ListProjects2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.listProjects2({ page: 1, pageSize: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Page number for pagination (0-based)<br>**Default**: 0 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.listProjects2(request)`

- **OnSuccess**: <code>[ProjectListResponse](src/models/project-list-response.ts)</code>
- **OnError**: throws <code>[Projects.ListProjects2Error](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.listProjects2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectListResponse, Projects.ListProjects2Error&gt;</code>, with `result.value` of type <code>[ProjectListResponse](src/models/project-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QueueItems

> Source: [QueueItems](src/resources/queue-items.ts)

<details>
<summary><code>addQueueItem(request: QueueItems.AddQueueItemRequestParams, options?: RequestOptions): ApiPromise&lt;QueueItem, QueueItems.AddQueueItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new transaction item to a specified queue. The item can include specific content (custom key-value data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item with its assigned ID and key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.queueItems.addQueueItem({
    body: { itemData: { name: "some example string" } },
  });
  // TODO: Handle 'response' of type QueueItem
} catch (err) {
  // TODO: Handle 'err' of type QueueItems.AddQueueItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queueItems
  .addQueueItem({ body: { itemData: { name: "some example string" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueueItem
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[AddQueueItemRequest](src/models/add-queue-item-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queueItems.addQueueItem(request)`

- **OnSuccess**: <code>[QueueItem](src/models/queue-item.ts)</code>
- **OnError**: throws <code>[QueueItems.AddQueueItemError](src/resources/queue-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queueItems.addQueueItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueueItem, QueueItems.AddQueueItemError&gt;</code>, with `result.value` of type <code>[QueueItem](src/models/queue-item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQueueItems(request?: QueueItems.ListQueueItemsRequest, options?: RequestOptions): ApiPromise&lt;ODataQueueItemCollection, QueueItems.ListQueueItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and priority. Supports OData filtering, ordering, and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.queueItems.listQueueItems();
  // TODO: Handle 'response' of type ODataQueueItemCollection
} catch (err) {
  // TODO: Handle 'err' of type QueueItems.ListQueueItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queueItems.listQueueItems().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataQueueItemCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>orderby?</code> | <code>string</code> | OData orderby clause (e.g., CreationTime desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queueItems.listQueueItems(request)`

- **OnSuccess**: <code>[ODataQueueItemCollection](src/models/odata-queue-item-collection.ts)</code>
- **OnError**: throws <code>[QueueItems.ListQueueItemsError](src/resources/queue-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queueItems.listQueueItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataQueueItemCollection, QueueItems.ListQueueItemsError&gt;</code>, with `result.value` of type <code>[ODataQueueItemCollection](src/models/odata-queue-item-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](src/resources/queues.ts)

<details>
<summary><code>createQueue(request: Queues.CreateQueueRequest, options?: RequestOptions): ApiPromise&lt;QueueDefinition, Queues.CreateQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum retry count, whether to accept only unique references, and enforcement settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.queues.createQueue({
    body: {
      id: 1,
      name: "example-value",
      description: "example-value",
      maxNumberOfRetries: 1,
      acceptAutomaticallyRetry: true,
      enforceUniqueReference: true,
      organizationUnitId: 1,
    },
  });
  // TODO: Handle 'response' of type QueueDefinition
} catch (err) {
  // TODO: Handle 'err' of type Queues.CreateQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .createQueue({
    body: {
      id: 1,
      name: "example-value",
      description: "example-value",
      maxNumberOfRetries: 1,
      acceptAutomaticallyRetry: true,
      enforceUniqueReference: true,
      organizationUnitId: 1,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueueDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[QueueDefinition](src/models/queue-definition.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.createQueue(request)`

- **OnSuccess**: <code>[QueueDefinition](src/models/queue-definition.ts)</code>
- **OnError**: throws <code>[Queues.CreateQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.createQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueueDefinition, Queues.CreateQueueError&gt;</code>, with `result.value` of type <code>[QueueDefinition](src/models/queue-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQueues(request?: Queues.ListQueuesRequest, options?: RequestOptions): ApiPromise&lt;ODataQueueDefinitionCollection, Queues.ListQueuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA configurations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.queues.listQueues();
  // TODO: Handle 'response' of type ODataQueueDefinitionCollection
} catch (err) {
  // TODO: Handle 'err' of type Queues.ListQueuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues.listQueues().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataQueueDefinitionCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.listQueues(request)`

- **OnSuccess**: <code>[ODataQueueDefinitionCollection](src/models/odata-queue-definition-collection.ts)</code>
- **OnError**: throws <code>[Queues.ListQueuesError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.listQueues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataQueueDefinitionCollection, Queues.ListQueuesError&gt;</code>, with `result.value` of type <code>[ODataQueueDefinitionCollection](src/models/odata-queue-definition-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Requirements

> Source: [Requirements](src/resources/requirements.ts)

<details>
<summary><code>createRequirement(request: Requirements.CreateRequirementRequestParams, options?: RequestOptions): ApiPromise&lt;Requirement, Requirements.CreateRequirementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new requirement within a test project. Requirements can be linked to test cases to establish traceability coverage. Requires the TM.Requirements OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.requirements.createRequirement({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value", externalId: "example-value" },
  });
  // TODO: Handle 'response' of type Requirement
} catch (err) {
  // TODO: Handle 'err' of type Requirements.CreateRequirementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.requirements
  .createRequirement({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value", externalId: "example-value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Requirement
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateRequirementRequest](src/models/create-requirement-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.requirements.createRequirement(request)`

- **OnSuccess**: <code>[Requirement](src/models/requirement.ts)</code>
- **OnError**: throws <code>[Requirements.CreateRequirementError](src/resources/requirements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.requirements.createRequirement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Requirement, Requirements.CreateRequirementError&gt;</code>, with `result.value` of type <code>[Requirement](src/models/requirement.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRequirements(request: Requirements.ListRequirementsRequest, options?: RequestOptions): ApiPromise&lt;RequirementListResponse, Requirements.ListRequirementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all requirements defined within a specific test project. Requirements represent business or technical specifications that test cases are mapped to for traceability. Supports pagination. Requires the TM.Requirements or TM.Requirements.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.requirements.listRequirements({
    projectId: "some example string",
    page: 1,
    pageSize: 1,
  });
  // TODO: Handle 'response' of type RequirementListResponse
} catch (err) {
  // TODO: Handle 'err' of type Requirements.ListRequirementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.requirements
  .listRequirements({ projectId: "some example string", page: 1, pageSize: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequirementListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>page?</code> | <code>number</code> | Page number for pagination (0-based)<br>**Default**: 0 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.requirements.listRequirements(request)`

- **OnSuccess**: <code>[RequirementListResponse](src/models/requirement-list-response.ts)</code>
- **OnError**: throws <code>[Requirements.ListRequirementsError](src/resources/requirements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.requirements.listRequirements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequirementListResponse, Requirements.ListRequirementsError&gt;</code>, with `result.value` of type <code>[RequirementListResponse](src/models/requirement-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Robots

> Source: [Robots](src/resources/robots.ts)

<details>
<summary><code>listRobots(request?: Robots.ListRobotsRequest, options?: RequestOptions): ApiPromise&lt;ODataRobotCollection, Robots.ListRobotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of software robots registered with Orchestrator. Each robot entry includes connection state, machine assignment, user assignment, robot type, and licensing information. Supports OData filtering and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.robots.listRobots();
  // TODO: Handle 'response' of type ODataRobotCollection
} catch (err) {
  // TODO: Handle 'err' of type Robots.ListRobotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.robots.listRobots().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataRobotCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>orderby?</code> | <code>string</code> | OData orderby clause (e.g., CreationTime desc) |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.robots.listRobots(request)`

- **OnSuccess**: <code>[ODataRobotCollection](src/models/odata-robot-collection.ts)</code>
- **OnError**: throws <code>[Robots.ListRobotsError](src/resources/robots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.robots.listRobots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataRobotCollection, Robots.ListRobotsError&gt;</code>, with `result.value` of type <code>[ODataRobotCollection](src/models/odata-robot-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/resources/roles.ts)

<details>
<summary><code>listRoles(request?: Roles.ListRolesRequest, options?: RequestOptions): ApiPromise&lt;ODataRoleCollection, Roles.ListRolesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned to users or groups to control their access to resources and operations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.roles.listRoles();
  // TODO: Handle 'response' of type ODataRoleCollection
} catch (err) {
  // TODO: Handle 'err' of type Roles.ListRolesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.roles.listRoles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataRoleCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.roles.listRoles(request)`

- **OnSuccess**: <code>[ODataRoleCollection](src/models/odata-role-collection.ts)</code>
- **OnError**: throws <code>[Roles.ListRolesError](src/resources/roles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.roles.listRoles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataRoleCollection, Roles.ListRolesError&gt;</code>, with `result.value` of type <code>[ODataRoleCollection](src/models/odata-role-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](src/resources/schedules.ts)

<details>
<summary><code>listSchedules(request?: Schedules.ListSchedulesRequest, options?: RequestOptions): ApiPromise&lt;ODataScheduleCollection, Schedules.ListSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of time-based triggers configured for automation processes. Each schedule defines when and how often a process should run, along with the target robots and input arguments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.schedules.listSchedules();
  // TODO: Handle 'response' of type ODataScheduleCollection
} catch (err) {
  // TODO: Handle 'err' of type Schedules.ListSchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.schedules.listSchedules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataScheduleCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.schedules.listSchedules(request)`

- **OnSuccess**: <code>[ODataScheduleCollection](src/models/odata-schedule-collection.ts)</code>
- **OnError**: throws <code>[Schedules.ListSchedulesError](src/resources/schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.schedules.listSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataScheduleCollection, Schedules.ListSchedulesError&gt;</code>, with `result.value` of type <code>[ODataScheduleCollection](src/models/odata-schedule-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StorageBuckets

> Source: [StorageBuckets](src/resources/storage-buckets.ts)

<details>
<summary><code>listStorageBuckets(request?: StorageBuckets.ListStorageBucketsRequest, options?: RequestOptions): ApiPromise&lt;ODataStorageBucketCollection, StorageBuckets.ListStorageBucketsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of storage buckets defined in the current folder. Storage buckets provide file storage capabilities for automation processes, backed by providers such as Azure Blob, Amazon S3, or the UiPath internal storage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storageBuckets.listStorageBuckets();
  // TODO: Handle 'response' of type ODataStorageBucketCollection
} catch (err) {
  // TODO: Handle 'err' of type StorageBuckets.ListStorageBucketsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storageBuckets.listStorageBuckets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataStorageBucketCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storageBuckets.listStorageBuckets(request)`

- **OnSuccess**: <code>[ODataStorageBucketCollection](src/models/odata-storage-bucket-collection.ts)</code>
- **OnError**: throws <code>[StorageBuckets.ListStorageBucketsError](src/resources/storage-buckets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storageBuckets.listStorageBuckets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataStorageBucketCollection, StorageBuckets.ListStorageBucketsError&gt;</code>, with `result.value` of type <code>[ODataStorageBucketCollection](src/models/odata-storage-bucket-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TestCases

> Source: [TestCases](src/resources/test-cases.ts)

<details>
<summary><code>createTestCase(request: TestCases.CreateTestCaseRequestParams, options?: RequestOptions): ApiPromise&lt;TestCase, TestCases.CreateTestCaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test case within a test project. The test case can be linked to automation packages deployed in Orchestrator to enable automated test execution via test sets. Requires the TM.TestCases OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testCases.createTestCase({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value", labels: ["example-value"] },
  });
  // TODO: Handle 'response' of type TestCase
} catch (err) {
  // TODO: Handle 'err' of type TestCases.CreateTestCaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testCases
  .createTestCase({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value", labels: ["example-value"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestCase
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateTestCaseRequest](src/models/create-test-case-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testCases.createTestCase(request)`

- **OnSuccess**: <code>[TestCase](src/models/test-case.ts)</code>
- **OnError**: throws <code>[TestCases.CreateTestCaseError](src/resources/test-cases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testCases.createTestCase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestCase, TestCases.CreateTestCaseError&gt;</code>, with `result.value` of type <code>[TestCase](src/models/test-case.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTestCase(request: TestCases.GetTestCaseRequest, options?: RequestOptions): ApiPromise&lt;TestCase, TestCases.GetTestCaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific test case by its unique identifier within a project. Returns full test case details including steps, labels, custom fields, automation linkage, and preconditions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testCases.getTestCase({
    projectId: "some example string",
    testCaseId: "some example string",
  });
  // TODO: Handle 'response' of type TestCase
} catch (err) {
  // TODO: Handle 'err' of type TestCases.GetTestCaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testCases
  .getTestCase({ projectId: "some example string", testCaseId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestCase
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>testCaseId</code> | <code>string</code> | Unique identifier of the test case |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testCases.getTestCase(request)`

- **OnSuccess**: <code>[TestCase](src/models/test-case.ts)</code>
- **OnError**: throws <code>[TestCases.GetTestCaseError](src/resources/test-cases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testCases.getTestCase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestCase, TestCases.GetTestCaseError&gt;</code>, with `result.value` of type <code>[TestCase](src/models/test-case.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestCases(request: TestCases.ListTestCasesRequest, options?: RequestOptions): ApiPromise&lt;TestCaseListResponse, TestCases.ListTestCasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test cases defined within a specific test project. Each test case represents a single test scenario with preconditions, steps, and expected results. Supports pagination and filtering. Requires the TM.TestCases or TM.TestCases.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testCases.listTestCases({
    projectId: "some example string",
    page: 1,
    pageSize: 1,
  });
  // TODO: Handle 'response' of type TestCaseListResponse
} catch (err) {
  // TODO: Handle 'err' of type TestCases.ListTestCasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testCases
  .listTestCases({ projectId: "some example string", page: 1, pageSize: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestCaseListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>page?</code> | <code>number</code> | Page number for pagination (0-based)<br>**Default**: 0 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testCases.listTestCases(request)`

- **OnSuccess**: <code>[TestCaseListResponse](src/models/test-case-list-response.ts)</code>
- **OnError**: throws <code>[TestCases.ListTestCasesError](src/resources/test-cases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testCases.listTestCases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestCaseListResponse, TestCases.ListTestCasesError&gt;</code>, with `result.value` of type <code>[TestCaseListResponse](src/models/test-case-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TestExecutions

> Source: [TestExecutions](src/resources/test-executions.ts)

<details>
<summary><code>listTestExecutions(request: TestExecutions.ListTestExecutionsRequest, options?: RequestOptions): ApiPromise&lt;TestExecutionListResponse, TestExecutions.ListTestExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves test execution results within a specific test project. Test executions represent runs of test sets and contain the aggregate pass/fail status across all included test cases. References to individual test case log objects are included for drill-down.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testExecutions.listTestExecutions({
    projectId: "some example string",
    page: 1,
    pageSize: 1,
  });
  // TODO: Handle 'response' of type TestExecutionListResponse
} catch (err) {
  // TODO: Handle 'err' of type TestExecutions.ListTestExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testExecutions
  .listTestExecutions({ projectId: "some example string", page: 1, pageSize: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestExecutionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>page?</code> | <code>number</code> | Page number for pagination (0-based)<br>**Default**: 0 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testExecutions.listTestExecutions(request)`

- **OnSuccess**: <code>[TestExecutionListResponse](src/models/test-execution-list-response.ts)</code>
- **OnError**: throws <code>[TestExecutions.ListTestExecutionsError](src/resources/test-executions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testExecutions.listTestExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestExecutionListResponse, TestExecutions.ListTestExecutionsError&gt;</code>, with `result.value` of type <code>[TestExecutionListResponse](src/models/test-execution-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TestSets

> Source: [TestSets](src/resources/test-sets.ts)

<details>
<summary><code>createTestSet(request: TestSets.CreateTestSetRequestParams, options?: RequestOptions): ApiPromise&lt;TestSet, TestSets.CreateTestSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new test set within a project. The test set can include test cases and be configured to execute against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testSets.createTestSet({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value" },
  });
  // TODO: Handle 'response' of type TestSet
} catch (err) {
  // TODO: Handle 'err' of type TestSets.CreateTestSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testSets
  .createTestSet({
    projectId: "some example string",
    body: { name: "example-value", description: "example-value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestSet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>body</code> | <code>[CreateTestSetRequest](src/models/create-test-set-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testSets.createTestSet(request)`

- **OnSuccess**: <code>[TestSet](src/models/test-set.ts)</code>
- **OnError**: throws <code>[TestSets.CreateTestSetError](src/resources/test-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testSets.createTestSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestSet, TestSets.CreateTestSetError&gt;</code>, with `result.value` of type <code>[TestSet](src/models/test-set.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTestSets(request: TestSets.ListTestSetsRequest, options?: RequestOptions): ApiPromise&lt;TestSetListResponse, TestSets.ListTestSetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all test sets within a specific test project. Test sets group test cases for coordinated execution runs and can be linked to Orchestrator processes to trigger automated execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.testSets.listTestSets({
    projectId: "some example string",
    page: 1,
    pageSize: 1,
  });
  // TODO: Handle 'response' of type TestSetListResponse
} catch (err) {
  // TODO: Handle 'err' of type TestSets.ListTestSetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.testSets
  .listTestSets({ projectId: "some example string", page: 1, pageSize: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestSetListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the test project |
| <code>page?</code> | <code>number</code> | Page number for pagination (0-based)<br>**Default**: 0 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.testSets.listTestSets(request)`

- **OnSuccess**: <code>[TestSetListResponse](src/models/test-set-list-response.ts)</code>
- **OnError**: throws <code>[TestSets.ListTestSetsError](src/resources/test-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.testSets.listTestSets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestSetListResponse, TestSets.ListTestSetsError&gt;</code>, with `result.value` of type <code>[TestSetListResponse](src/models/test-set-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>addUser(request: Users.AddUserRequestParams, options?: RequestOptions): ApiPromise&lt;User, Users.AddUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new user to Automation Hub. The user must already exist in the UiPath identity directory. This endpoint assigns the user a role within Automation Hub and makes them available for collaboration and idea submission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.addUser({ body: { email: "user@example.com", role: "example-value" } });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type Users.AddUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .addUser({ body: { email: "user@example.com", role: "example-value" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddUserRequest](src/models/add-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.addUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.AddUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.addUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.AddUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUser(request: Users.CreateUserRequestParams, options?: RequestOptions): ApiPromise&lt;User2, Users.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user account in the UiPath organization. The user will receive an invitation email to set up their credentials. The request must include the user's email address, display name, and the tenants or roles to initially assign. Requires the PM.Users OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createUser({
    organizationName: "some example string",
    body: { email: "user@example.com", name: "example-value", surname: "example-value" },
  });
  // TODO: Handle 'response' of type User2
} catch (err) {
  // TODO: Handle 'err' of type Users.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .createUser({
    organizationName: "some example string",
    body: { email: "user@example.com", name: "example-value", surname: "example-value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>body</code> | <code>[CreateUserRequest](src/models/create-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.createUser(request)`

- **OnSuccess**: <code>[User2](src/models/user2.ts)</code>
- **OnError**: throws <code>[Users.CreateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User2, Users.CreateUserError&gt;</code>, with `result.value` of type <code>[User2](src/models/user2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user account from the organization by their unique identifier. This action removes the user from all tenants and revokes their access to UiPath Automation Cloud. This action cannot be undone. Requires the PM.Users OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.deleteUser({ organizationName: "some example string", userId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .deleteUser({ organizationName: "some example string", userId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>userId</code> | <code>string</code> | Unique identifier of the user |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.DeleteUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editUser(request: Users.EditUserRequestParams, options?: RequestOptions): ApiPromise&lt;User, Users.EditUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing user's properties in Automation Hub, such as their assigned role or active status. The user is identified by their unique ID in the request body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.editUser({ body: { id: 1, role: "example-value", isActive: true } });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type Users.EditUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .editUser({ body: { id: 1, role: "example-value", isActive: true } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EditUserRequest](src/models/edit-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.editUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.EditUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.editUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.EditUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOdataUsers(request?: Users.GetOdataUsersRequest, options?: RequestOptions): ApiPromise&lt;ODataUserCollection, Users.GetOdataUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of users registered in Orchestrator. Each user has associated roles, robot configurations, and folder memberships. Supports OData filtering and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getOdataUsers();
  // TODO: Handle 'response' of type ODataUserCollection
} catch (err) {
  // TODO: Handle 'err' of type Users.GetOdataUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getOdataUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataUserCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getOdataUsers(request)`

- **OnSuccess**: <code>[ODataUserCollection](src/models/odata-user-collection.ts)</code>
- **OnError**: throws <code>[Users.GetOdataUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getOdataUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataUserCollection, Users.GetOdataUsersError&gt;</code>, with `result.value` of type <code>[ODataUserCollection](src/models/odata-user-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;User2, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves user account information by the user's unique identifier. Returns user properties including name, email address, active status, and authentication configuration. Requires the PM.Users or PM.Users.Read OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({
    organizationName: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type User2
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUser({ organizationName: "some example string", userId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationName</code> | <code>string</code> | The name of the UiPath organization |
| <code>userId</code> | <code>string</code> | Unique identifier of the user |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[User2](src/models/user2.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User2, Users.GetUserError&gt;</code>, with `result.value` of type <code>[User2](src/models/user2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRoles2(options?: RequestOptions): ApiPromise&lt;RolesResponse, Users.ListRoles2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of roles available in Automation Hub. Each role defines a set of permissions controlling what a user can view and perform within the platform. Roles are assigned when adding or editing users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listRoles2();
  // TODO: Handle 'response' of type RolesResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.ListRoles2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listRoles2().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RolesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listRoles2()`

- **OnSuccess**: <code>[RolesResponse](src/models/roles-response.ts)</code>
- **OnError**: throws <code>[Users.ListRoles2Error](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listRoles2().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RolesResponse, Users.ListRoles2Error&gt;</code>, with `result.value` of type <code>[RolesResponse](src/models/roles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsers(request?: Users.ListUsersRequest, options?: RequestOptions): ApiPromise&lt;UserListResponse, Users.ListUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of users registered in Automation Hub. Returns user identifiers, names, email addresses, and assigned roles. Used by administrators to manage user assignments and role configurations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsers({ page: 1, pageSize: 1 });
  // TODO: Handle 'response' of type UserListResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.ListUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listUsers({ page: 1, pageSize: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Page number for pagination (1-based)<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | Number of records per page<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUsers(request)`

- **OnSuccess**: <code>[UserListResponse](src/models/user-list-response.ts)</code>
- **OnError**: throws <code>[Users.ListUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserListResponse, Users.ListUsersError&gt;</code>, with `result.value` of type <code>[UserListResponse](src/models/user-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Validation

> Source: [Validation](src/resources/validation.ts)

<details>
<summary><code>validateDocumentAsync(request: Validation.ValidateDocumentAsyncRequest, options?: RequestOptions): ApiPromise&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Validation.ValidateDocumentAsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits digitization, classification, and extraction results for asynchronous validation. Validation checks the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence extractions. Returns a requestId for polling.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.validation.validateDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: { documentId: "some example string" },
  });
  // TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
} catch (err) {
  // TODO: Handle 'err' of type Validation.ValidateDocumentAsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.validation
  .validateDocumentAsync({
    projectId: "some example string",
    apiVersion: "1.0.0",
    body: { documentId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | Unique identifier of the Document Understanding project |
| <code>apiVersion?</code> | <code>string</code> | API version to use for this request<br>**Default**: "1" |
| <code>body</code> | <code>[ValidationRequest](src/models/validation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.validation.validateDocumentAsync(request)`

- **OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts)</code>
- **OnError**: throws <code>[Validation.ValidateDocumentAsyncError](src/resources/validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.validation.validateDocumentAsync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi, Validation.ValidateDocumentAsyncError&gt;</code>, with `result.value` of type <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/models/async-job-start-response-ui-path-document-understanding-extraction-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification, whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({
    body: {
      id: 1,
      url: "https://cloud.uipath.com/example",
      enabled: true,
      secret: "example-value",
      subscribeToAllEvents: true,
      allowInsecureSsl: true,
      events: ["example-value"],
    },
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createWebhook({
    body: {
      id: 1,
      url: "https://cloud.uipath.com/example",
      enabled: true,
      secret: "example-value",
      subscribeToAllEvents: true,
      allowInsecureSsl: true,
      events: ["example-value"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |
| <code>body</code> | <code>[Webhook](src/models/webhook.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.CreateWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL will no longer receive event notifications from Orchestrator.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooks.deleteWebhook({ key: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.deleteWebhook({ key: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>number</code> | The unique integer identifier of the entity |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhookEventTypes(request?: Webhooks.GetWebhookEventTypesRequest, options?: RequestOptions): ApiPromise&lt;OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, Webhooks.GetWebhookEventTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as job.faulted or queueItem.transactionCompleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getWebhookEventTypes();
  // TODO: Handle 'response' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetWebhookEventTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getWebhookEventTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getWebhookEventTypes(request)`

- **OnSuccess**: <code>[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](src/models/odata-webhooks-ui-path-server-configuration-odata-get-event-types-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetWebhookEventTypesError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getWebhookEventTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, Webhooks.GetWebhookEventTypesError&gt;</code>, with `result.value` of type <code>[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](src/models/odata-webhooks-ui-path-server-configuration-odata-get-event-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request?: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;ODataWebhookCollection, Webhooks.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the events to subscribe to, and an HMAC secret for payload signature verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks();
  // TODO: Handle 'response' of type ODataWebhookCollection
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ODataWebhookCollection
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | OData filter expression to narrow results (e.g., State eq 'Running') |
| <code>top?</code> | <code>number</code> | Maximum number of records to return (default 100, max 1000) |
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination |
| <code>xUipathOrganizationUnitId?</code> | <code>number</code> | The numeric ID of the folder context for the request. Required when accessing folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks(request)`

- **OnSuccess**: <code>[ODataWebhookCollection](src/models/odata-webhook-collection.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ODataWebhookCollection, Webhooks.ListWebhooksError&gt;</code>, with `result.value` of type <code>[ODataWebhookCollection](src/models/odata-webhook-collection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[UiPathError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

