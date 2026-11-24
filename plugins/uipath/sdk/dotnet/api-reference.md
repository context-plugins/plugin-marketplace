# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [UiPathClient](src/UiPath/UiPathClient.cs)

## Alerts

> Source: [Alerts](src/UiPath/Api/Alerts.cs)

<details>
<summary><code>Task&lt;ODataAlertCollection&gt; ListAlerts(ListAlertsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Alerts.ListAlerts(new ListAlertsRequest());
    // TODO: Handle 'response' of type ODataAlertCollection
}
catch (ApiException<ListAlertsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAlertsRequest](src/UiPath/Requests/Alerts/ListAlertsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataAlertCollection](src/UiPath/Models/ODataAlertCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListAlertsError](src/UiPath/Errors/ListAlertsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AppInventory

> Source: [AppInventory](src/UiPath/Api/AppInventory.cs)

<details>
<summary><code>Task&lt;AppInventoryListResponse&gt; BulkUpsertAppInventory(BulkUpsertAppInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AppInventory.BulkUpsertAppInventory(new BulkUpsertAppInventoryRequest
    {
        Body = new AppinventoryRequest(),
    });
    // TODO: Handle 'response' of type AppInventoryListResponse
}
catch (ApiException<BulkUpsertAppInventoryError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkUpsertAppInventoryRequest](src/UiPath/Requests/AppInventory/BulkUpsertAppInventoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppInventoryListResponse](src/UiPath/Models/AppInventoryListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[BulkUpsertAppInventoryError](src/UiPath/Errors/BulkUpsertAppInventoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteApplication(DeleteApplicationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AppInventory.DeleteApplication(new DeleteApplicationRequest { ApplicationId = 12345 });
}
catch (ApiException<DeleteApplicationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApplicationRequest](src/UiPath/Requests/AppInventory/DeleteApplicationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteApplicationError](src/UiPath/Errors/DeleteApplicationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppInventoryListResponse&gt; ListAppInventory(ListAppInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AppInventory.ListAppInventory(new ListAppInventoryRequest { Page = 1, PageSize = 1 });
    // TODO: Handle 'response' of type AppInventoryListResponse
}
catch (ApiException<ListAppInventoryError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAppInventoryRequest](src/UiPath/Requests/AppInventory/ListAppInventoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppInventoryListResponse](src/UiPath/Models/AppInventoryListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListAppInventoryError](src/UiPath/Errors/ListAppInventoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/UiPath/Api/Assets.cs)

<details>
<summary><code>Task&lt;Asset&gt; CreateAsset(CreateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.CreateAsset(new CreateAssetRequest
    {
        Body = new Asset
        {
            Id = 1L,
            Name = "example-value",
            ValueType = ValueTypeEnum.Text,
            StringValue = "example-value",
            IntValue = 1,
            BoolValue = true,
            CredentialUsername = "example-value",
            CredentialPassword = "example-value",
            Description = "example-value",
            OrganizationUnitId = 1L,
        },
    });
    // TODO: Handle 'response' of type Asset
}
catch (ApiException<CreateAssetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAssetRequest](src/UiPath/Requests/Assets/CreateAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Asset](src/UiPath/Models/Asset.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateAssetError](src/UiPath/Errors/CreateAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAsset(DeleteAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Assets.DeleteAsset(new DeleteAssetRequest { Key = 1L });
}
catch (ApiException<DeleteAssetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAssetRequest](src/UiPath/Requests/Assets/DeleteAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteAssetError](src/UiPath/Errors/DeleteAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Asset&gt; GetAsset(GetAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.GetAsset(new GetAssetRequest { Key = 1L });
    // TODO: Handle 'response' of type Asset
}
catch (ApiException<GetAssetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAssetRequest](src/UiPath/Requests/Assets/GetAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Asset](src/UiPath/Models/Asset.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetAssetError](src/UiPath/Errors/GetAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataAssetCollection&gt; ListAssets(ListAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.ListAssets(new ListAssetsRequest());
    // TODO: Handle 'response' of type ODataAssetCollection
}
catch (ApiException<ListAssetsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAssetsRequest](src/UiPath/Requests/Assets/ListAssetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataAssetCollection](src/UiPath/Models/ODataAssetCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListAssetsError](src/UiPath/Errors/ListAssetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Asset&gt; UpdateAsset(UpdateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.UpdateAsset(new UpdateAssetRequest
    {
        Key = 1L,
        Body = new Asset
        {
            Id = 1L,
            Name = "example-value",
            ValueType = ValueTypeEnum.Text,
            StringValue = "example-value",
            IntValue = 1,
            BoolValue = true,
            CredentialUsername = "example-value",
            CredentialPassword = "example-value",
            Description = "example-value",
            OrganizationUnitId = 1L,
        },
    });
    // TODO: Handle 'response' of type Asset
}
catch (ApiException<UpdateAssetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAssetRequest](src/UiPath/Requests/Assets/UpdateAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Asset](src/UiPath/Models/Asset.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[UpdateAssetError](src/UiPath/Errors/UpdateAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/UiPath/Api/AuditLogs.cs)

<details>
<summary><code>Task&lt;AuditSources&gt; GetOrganizationAuditSources(GetOrganizationAuditSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AuditLogs.GetOrganizationAuditSources(new GetOrganizationAuditSourcesRequest
    {
        OrganizationName = "some example string",
    });
    // TODO: Handle 'response' of type AuditSources
}
catch (ApiException<GetOrganizationAuditSourcesError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationAuditSourcesRequest](src/UiPath/Requests/AuditLogs/GetOrganizationAuditSourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditSources](src/UiPath/Models/AuditSources.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationAuditSourcesError](src/UiPath/Errors/GetOrganizationAuditSourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuditEventCollection&gt; QueryOrganizationAuditEvents(QueryOrganizationAuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AuditLogs.QueryOrganizationAuditEvents(new QueryOrganizationAuditEventsRequest
    {
        OrganizationName = "some example string",
    });
    // TODO: Handle 'response' of type AuditEventCollection
}
catch (ApiException<QueryOrganizationAuditEventsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryOrganizationAuditEventsRequest](src/UiPath/Requests/AuditLogs/QueryOrganizationAuditEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditEventCollection](src/UiPath/Models/AuditEventCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[QueryOrganizationAuditEventsError](src/UiPath/Errors/QueryOrganizationAuditEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuditEventCollection&gt; QueryTenantAuditEvents(QueryTenantAuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AuditLogs.QueryTenantAuditEvents(new QueryTenantAuditEventsRequest
    {
        OrganizationName = "some example string",
        TenantName = "some example string",
    });
    // TODO: Handle 'response' of type AuditEventCollection
}
catch (ApiException<QueryTenantAuditEventsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryTenantAuditEventsRequest](src/UiPath/Requests/AuditLogs/QueryTenantAuditEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditEventCollection](src/UiPath/Models/AuditEventCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[QueryTenantAuditEventsError](src/UiPath/Errors/QueryTenantAuditEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/UiPath/Api/Automations.cs)

<details>
<summary><code>Task&lt;Automation&gt; CreateAutomationIdea(CreateAutomationIdeaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.CreateAutomationIdea(new CreateAutomationIdeaOperationRequest
    {
        Body = new CreateAutomationIdeaRequest { Name = "some example string", Description = "some example string" },
    });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<CreateAutomationIdeaError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAutomationIdeaOperationRequest](src/UiPath/Requests/Automations/CreateAutomationIdeaOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/UiPath/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateAutomationIdeaError](src/UiPath/Errors/CreateAutomationIdeaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAutomation(DeleteAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Automations.DeleteAutomation(new DeleteAutomationRequest { AutomationId = 1 });
}
catch (ApiException<DeleteAutomationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAutomationRequest](src/UiPath/Requests/Automations/DeleteAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteAutomationError](src/UiPath/Errors/DeleteAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Automation&gt; GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.GetAutomation(new GetAutomationRequest { AutomationId = 1 });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<GetAutomationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAutomationRequest](src/UiPath/Requests/Automations/GetAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/UiPath/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetAutomationError](src/UiPath/Errors/GetAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationsCollaboratorsResponse&gt; ListAutomationCollaborators(ListAutomationCollaboratorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.ListAutomationCollaborators(new ListAutomationCollaboratorsRequest
    {
        AutomationId = 1,
    });
    // TODO: Handle 'response' of type AutomationsCollaboratorsResponse
}
catch (ApiException<ListAutomationCollaboratorsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAutomationCollaboratorsRequest](src/UiPath/Requests/Automations/ListAutomationCollaboratorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationsCollaboratorsResponse](src/UiPath/Models/AutomationsCollaboratorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListAutomationCollaboratorsError](src/UiPath/Errors/ListAutomationCollaboratorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationListResponse&gt; ListAutomations(ListAutomationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.ListAutomations(new ListAutomationsRequest
    {
        Phase = "example-value",
        Status = "Active",
        Page = 1,
        PageSize = 1,
    });
    // TODO: Handle 'response' of type AutomationListResponse
}
catch (ApiException<ListAutomationsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAutomationsRequest](src/UiPath/Requests/Automations/ListAutomationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationListResponse](src/UiPath/Models/AutomationListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListAutomationsError](src/UiPath/Errors/ListAutomationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveAutomationCollaborator(RemoveAutomationCollaboratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Automations.RemoveAutomationCollaborator(new RemoveAutomationCollaboratorRequest
    {
        AutomationId = 1,
        UserId = 12345,
    });
}
catch (ApiException<RemoveAutomationCollaboratorError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveAutomationCollaboratorRequest](src/UiPath/Requests/Automations/RemoveAutomationCollaboratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[RemoveAutomationCollaboratorError](src/UiPath/Errors/RemoveAutomationCollaboratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Automation&gt; UpdateAutomation(UpdateAutomationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.UpdateAutomation(new UpdateAutomationOperationRequest
    {
        AutomationId = 1,
        Body = new UpdateAutomationRequest(),
    });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<UpdateAutomationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAutomationOperationRequest](src/UiPath/Requests/Automations/UpdateAutomationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/UiPath/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[UpdateAutomationError](src/UiPath/Errors/UpdateAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Classification

> Source: [Classification](src/UiPath/Api/Classification.cs)

<details>
<summary><code>Task&lt;AsyncJobStartResponse&gt; ClassifyDocumentAsync(ClassifyDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Classification.ClassifyDocumentAsync(new ClassifyDocumentAsyncRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
        Body = new ClassificationRequest
        {
            DocumentId = "some example string",
            ClassifiersOptions = [new ClassifierOption { ClassifierId = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type AsyncJobStartResponse
}
catch (ApiException<ClassifyDocumentAsyncError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClassifyDocumentAsyncRequest](src/UiPath/Requests/Classification/ClassifyDocumentAsyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncJobStartResponse](src/UiPath/Models/AsyncJobStartResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ClassifyDocumentAsyncError](src/UiPath/Errors/ClassifyDocumentAsyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClassificationResult&gt; GetClassificationResult(GetClassificationResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Classification.GetClassificationResult(new GetClassificationResultRequest
    {
        ProjectId = "some example string",
        RequestId = "some example string",
        ApiVersion = "1.0.0",
    });
    // TODO: Handle 'response' of type ClassificationResult
}
catch (ApiException<GetClassificationResultError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetClassificationResultRequest](src/UiPath/Requests/Classification/GetClassificationResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationResult](src/UiPath/Models/ClassificationResult.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetClassificationResultError](src/UiPath/Errors/GetClassificationResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Digitization

> Source: [Digitization](src/UiPath/Api/Digitization.cs)

<details>
<summary><code>Task&lt;DigitizationResult&gt; DigitizeDocument(DigitizeDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Digitization.DigitizeDocument(new DigitizeDocumentRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
        Body = new DigitizationRequest
        {
            DocumentId = "example-value",
            ContentType = ContentType.ImageJpeg,
            DocumentBase64 = "example-value",
        },
    });
    // TODO: Handle 'response' of type DigitizationResult
}
catch (ApiException<DigitizeDocumentError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DigitizeDocumentRequest](src/UiPath/Requests/Digitization/DigitizeDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DigitizationResult](src/UiPath/Models/DigitizationResult.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DigitizeDocumentError](src/UiPath/Errors/DigitizeDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/UiPath/Api/Discovery.cs)

<details>
<summary><code>Task&lt;ProjectsClassifiersResponse&gt; ListClassifiers(ListClassifiersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Discovery.ListClassifiers(new ListClassifiersRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
    });
    // TODO: Handle 'response' of type ProjectsClassifiersResponse
}
catch (ApiException<ListClassifiersError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListClassifiersRequest](src/UiPath/Requests/Discovery/ListClassifiersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsClassifiersResponse](src/UiPath/Models/ProjectsClassifiersResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListClassifiersError](src/UiPath/Errors/ListClassifiersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsExtractorsResponse&gt; ListExtractors(ListExtractorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Discovery.ListExtractors(new ListExtractorsRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
    });
    // TODO: Handle 'response' of type ProjectsExtractorsResponse
}
catch (ApiException<ListExtractorsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListExtractorsRequest](src/UiPath/Requests/Discovery/ListExtractorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsExtractorsResponse](src/UiPath/Models/ProjectsExtractorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListExtractorsError](src/UiPath/Errors/ListExtractorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectsResponse&gt; ListProjects(ListProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Discovery.ListProjects(new ListProjectsRequest { ApiVersion = "1.0.0" });
    // TODO: Handle 'response' of type ProjectsResponse
}
catch (ApiException<ListProjectsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListProjectsRequest](src/UiPath/Requests/Discovery/ListProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectsResponse](src/UiPath/Models/ProjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListProjectsError](src/UiPath/Errors/ListProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Entities

> Source: [Entities](src/UiPath/Api/Entities.cs)

<details>
<summary><code>Task&lt;EntityRecord&gt; CreateEntityRecord(CreateEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entities.CreateEntityRecord(new CreateEntityRecordRequest
    {
        EntityName = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type EntityRecord
}
catch (ApiException<CreateEntityRecordError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEntityRecordRequest](src/UiPath/Requests/Entities/CreateEntityRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityRecord](src/UiPath/Models/EntityRecord.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateEntityRecordError](src/UiPath/Errors/CreateEntityRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEntityRecord(DeleteEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Entities.DeleteEntityRecord(new DeleteEntityRecordRequest
    {
        EntityName = "some example string",
        RecordId = "some example string",
    });
}
catch (ApiException<DeleteEntityRecordError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEntityRecordRequest](src/UiPath/Requests/Entities/DeleteEntityRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteEntityRecordError](src/UiPath/Errors/DeleteEntityRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityRecord&gt; GetEntityRecord(GetEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entities.GetEntityRecord(new GetEntityRecordRequest
    {
        EntityName = "some example string",
        RecordId = "some example string",
        Select = "example-value",
        Expand = "example-value",
    });
    // TODO: Handle 'response' of type EntityRecord
}
catch (ApiException<GetEntityRecordError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEntityRecordRequest](src/UiPath/Requests/Entities/GetEntityRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityRecord](src/UiPath/Models/EntityRecord.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetEntityRecordError](src/UiPath/Errors/GetEntityRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityRecordCollection&gt; ListEntityRecords(ListEntityRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entities.ListEntityRecords(new ListEntityRecordsRequest
    {
        EntityName = "some example string",
        Filter = "example-value",
        Orderby = "example-value",
        Top = 1,
        Skip = 1,
        Select = "example-value",
        Expand = "example-value",
    });
    // TODO: Handle 'response' of type EntityRecordCollection
}
catch (ApiException<ListEntityRecordsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEntityRecordsRequest](src/UiPath/Requests/Entities/ListEntityRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityRecordCollection](src/UiPath/Models/EntityRecordCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListEntityRecordsError](src/UiPath/Errors/ListEntityRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityRecordCollection&gt; QueryEntityRecords(QueryEntityRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entities.QueryEntityRecords(new QueryEntityRecordsRequest
    {
        EntityName = "some example string",
        Body = new EntityQueryRequest(),
    });
    // TODO: Handle 'response' of type EntityRecordCollection
}
catch (ApiException<QueryEntityRecordsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryEntityRecordsRequest](src/UiPath/Requests/Entities/QueryEntityRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityRecordCollection](src/UiPath/Models/EntityRecordCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[QueryEntityRecordsError](src/UiPath/Errors/QueryEntityRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityRecord&gt; UpdateEntityRecord(UpdateEntityRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entities.UpdateEntityRecord(new UpdateEntityRecordRequest
    {
        EntityName = "some example string",
        RecordId = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type EntityRecord
}
catch (ApiException<UpdateEntityRecordError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEntityRecordRequest](src/UiPath/Requests/Entities/UpdateEntityRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityRecord](src/UiPath/Models/EntityRecord.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[UpdateEntityRecordError](src/UiPath/Errors/UpdateEntityRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Extraction

> Source: [Extraction](src/UiPath/Api/Extraction.cs)

<details>
<summary><code>Task&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi&gt; ExtractDocumentAsync(ExtractDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Extraction.ExtractDocumentAsync(new ExtractDocumentAsyncRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
        Body = new ExtractionRequest
        {
            DocumentId = "some example string",
            ExtractorsOptions = [new ExtractorOption { ExtractorId = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
}
catch (ApiException<ExtractDocumentAsyncError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExtractDocumentAsyncRequest](src/UiPath/Requests/Extraction/ExtractDocumentAsyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/UiPath/Models/AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ExtractDocumentAsyncError](src/UiPath/Errors/ExtractDocumentAsyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExtractionResult&gt; GetExtractionResult(GetExtractionResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Extraction.GetExtractionResult(new GetExtractionResultRequest
    {
        ProjectId = "some example string",
        RequestId = "some example string",
        ApiVersion = "1.0.0",
    });
    // TODO: Handle 'response' of type ExtractionResult
}
catch (ApiException<GetExtractionResultError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExtractionResultRequest](src/UiPath/Requests/Extraction/GetExtractionResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtractionResult](src/UiPath/Models/ExtractionResult.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetExtractionResultError](src/UiPath/Errors/GetExtractionResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/UiPath/Api/Folders.cs)

<details>
<summary><code>Task&lt;ODataFolderCollection&gt; ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Folders.ListFolders(new ListFoldersRequest());
    // TODO: Handle 'response' of type ODataFolderCollection
}
catch (ApiException<ListFoldersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFoldersRequest](src/UiPath/Requests/Folders/ListFoldersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataFolderCollection](src/UiPath/Models/ODataFolderCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListFoldersError](src/UiPath/Errors/ListFoldersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/UiPath/Api/Groups.cs)

<details>
<summary><code>Task&lt;Group&gt; CreateGroup(CreateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Groups.CreateGroup(new CreateGroupOperationRequest
    {
        OrganizationName = "some example string",
        Body = new CreateGroupRequest { Name = "example-value", Type = TypeEnum.Local },
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<CreateGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGroupOperationRequest](src/UiPath/Requests/Groups/CreateGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/UiPath/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateGroupError](src/UiPath/Errors/CreateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Group&gt; GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Groups.GetGroup(new GetGroupRequest
    {
        OrganizationName = "some example string",
        PartitionGlobalId = "some example string",
        GroupId = "abc123",
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<GetGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGroupRequest](src/UiPath/Requests/Groups/GetGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/UiPath/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetGroupError](src/UiPath/Errors/GetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IdentityApiGroupResponse&gt; ListGroups(ListGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Groups.ListGroups(new ListGroupsRequest
    {
        OrganizationName = "some example string",
        PartitionGlobalId = "some example string",
    });
    // TODO: Handle 'response' of type IdentityApiGroupResponse
}
catch (ApiException<ListGroupsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGroupsRequest](src/UiPath/Requests/Groups/ListGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentityApiGroupResponse](src/UiPath/Models/IdentityApiGroupResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListGroupsError](src/UiPath/Errors/ListGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/UiPath/Api/Jobs.cs)

<details>
<summary><code>Task&lt;Job&gt; GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Jobs.GetJob(new GetJobRequest { Key = 1L });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<GetJobError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetJobRequest](src/UiPath/Requests/Jobs/GetJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/UiPath/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetJobError](src/UiPath/Errors/GetJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataJobCollection&gt; ListJobs(ListJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Jobs.ListJobs(new ListJobsRequest());
    // TODO: Handle 'response' of type ODataJobCollection
}
catch (ApiException<ListJobsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListJobsRequest](src/UiPath/Requests/Jobs/ListJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataJobCollection](src/UiPath/Models/ODataJobCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListJobsError](src/UiPath/Errors/ListJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataJobCollection&gt; StartJobs(StartJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Jobs.StartJobs(new StartJobsOperationRequest
    {
        Body = new StartJobsRequest
        {
            StartInfo = new StartInfo
            {
                ReleaseKey = Guid.Parse("00000000-0000-0000-0000-000000000000"),
                Strategy = Strategy.All,
            },
        },
    });
    // TODO: Handle 'response' of type ODataJobCollection
}
catch (ApiException<StartJobsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartJobsOperationRequest](src/UiPath/Requests/Jobs/StartJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataJobCollection](src/UiPath/Models/ODataJobCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[StartJobsError](src/UiPath/Errors/StartJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopJob(StopJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Jobs.StopJob(new StopJobOperationRequest
    {
        Body = new StopJobRequest { JobId = 1L, Strategy = Strategy1.SoftStop },
    });
}
catch (ApiException<StopJobError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopJobOperationRequest](src/UiPath/Requests/Jobs/StopJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[StopJobError](src/UiPath/Errors/StopJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Licenses

> Source: [Licenses](src/UiPath/Api/Licenses.cs)

<details>
<summary><code>Task&lt;GroupLicenseAllocation&gt; GetGroupLicenseAllocation(GetGroupLicenseAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Licenses.GetGroupLicenseAllocation(new GetGroupLicenseAllocationRequest
    {
        OrganizationName = "some example string",
        AccountId = "abc123",
        GroupId = "abc123",
    });
    // TODO: Handle 'response' of type GroupLicenseAllocation
}
catch (ApiException<GetGroupLicenseAllocationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGroupLicenseAllocationRequest](src/UiPath/Requests/Licenses/GetGroupLicenseAllocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupLicenseAllocation](src/UiPath/Models/GroupLicenseAllocation.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetGroupLicenseAllocationError](src/UiPath/Errors/GetGroupLicenseAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupLicenseAllocation&gt; UpdateGroupLicenseAllocation(UpdateGroupLicenseAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Licenses.UpdateGroupLicenseAllocation(new UpdateGroupLicenseAllocationOperationRequest
    {
        OrganizationName = "some example string",
        AccountId = "abc123",
        GroupId = "abc123",
        Body = new UpdateGroupLicenseAllocationRequest { UserLicenses = [new LicenseAllocationEntry()] },
    });
    // TODO: Handle 'response' of type GroupLicenseAllocation
}
catch (ApiException<UpdateGroupLicenseAllocationError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGroupLicenseAllocationOperationRequest](src/UiPath/Requests/Licenses/UpdateGroupLicenseAllocationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupLicenseAllocation](src/UiPath/Models/GroupLicenseAllocation.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[UpdateGroupLicenseAllocationError](src/UiPath/Errors/UpdateGroupLicenseAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Machines

> Source: [Machines](src/UiPath/Api/Machines.cs)

<details>
<summary><code>Task&lt;ODataMachineCollection&gt; ListMachines(ListMachinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Machines.ListMachines(new ListMachinesRequest());
    // TODO: Handle 'response' of type ODataMachineCollection
}
catch (ApiException<ListMachinesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMachinesRequest](src/UiPath/Requests/Machines/ListMachinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataMachineCollection](src/UiPath/Models/ODataMachineCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListMachinesError](src/UiPath/Errors/ListMachinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Packages

> Source: [Packages](src/UiPath/Api/Packages.cs)

<details>
<summary><code>Task&lt;ODataPackageCollection&gt; ListPackages(ListPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Packages.ListPackages(new ListPackagesRequest());
    // TODO: Handle 'response' of type ODataPackageCollection
}
catch (ApiException<ListPackagesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPackagesRequest](src/UiPath/Requests/Packages/ListPackagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataPackageCollection](src/UiPath/Models/ODataPackageCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListPackagesError](src/UiPath/Errors/ListPackagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipeline

> Source: [Pipeline](src/UiPath/Api/Pipeline.cs)

<details>
<summary><code>Task&lt;PipelineData&gt; GetAutomationPipeline(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Pipeline.GetAutomationPipeline();
    // TODO: Handle 'response' of type PipelineData
}
catch (ApiException<GetAutomationPipelineError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineData](src/UiPath/Models/PipelineData.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetAutomationPipelineError](src/UiPath/Errors/GetAutomationPipelineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](src/UiPath/Api/Processes.cs)

<details>
<summary><code>Task&lt;ODataProcessCollection&gt; ListProcesses(ListProcessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Processes.ListProcesses(new ListProcessesRequest());
    // TODO: Handle 'response' of type ODataProcessCollection
}
catch (ApiException<ListProcessesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListProcessesRequest](src/UiPath/Requests/Processes/ListProcessesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataProcessCollection](src/UiPath/Models/ODataProcessCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListProcessesError](src/UiPath/Errors/ListProcessesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/UiPath/Api/Projects.cs)

<details>
<summary><code>Task&lt;ProjectUiPathTestManagerProjectsApi&gt; CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.CreateProject(new CreateProjectOperationRequest
    {
        Body = new CreateProjectRequest { Name = "example-value", Description = "example-value" },
    });
    // TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
}
catch (ApiException<CreateProjectError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProjectOperationRequest](src/UiPath/Requests/Projects/CreateProjectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](src/UiPath/Models/ProjectUiPathTestManagerProjectsApi.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/UiPath/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectUiPathTestManagerProjectsApi&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest { ProjectId = "some example string" });
    // TODO: Handle 'response' of type ProjectUiPathTestManagerProjectsApi
}
catch (ApiException<GetProjectError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectRequest](src/UiPath/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUiPathTestManagerProjectsApi](src/UiPath/Models/ProjectUiPathTestManagerProjectsApi.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/UiPath/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectListResponse&gt; ListProjects2(ListProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.ListProjects2(new ListProjects2Request { Page = 1, PageSize = 1 });
    // TODO: Handle 'response' of type ProjectListResponse
}
catch (ApiException<ListProjects2Error> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListProjects2Request](src/UiPath/Requests/Projects/ListProjects2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectListResponse](src/UiPath/Models/ProjectListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListProjects2Error](src/UiPath/Errors/ListProjects2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QueueItems

> Source: [QueueItems](src/UiPath/Api/QueueItems.cs)

<details>
<summary><code>Task&lt;QueueItem&gt; AddQueueItem(AddQueueItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QueueItems.AddQueueItem(new AddQueueItemOperationRequest
    {
        Body = new AddQueueItemRequest { ItemData = new QueueItemData { Name = "some example string" } },
    });
    // TODO: Handle 'response' of type QueueItem
}
catch (ApiException<AddQueueItemError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddQueueItemOperationRequest](src/UiPath/Requests/QueueItems/AddQueueItemOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueItem](src/UiPath/Models/QueueItem.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[AddQueueItemError](src/UiPath/Errors/AddQueueItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataQueueItemCollection&gt; ListQueueItems(ListQueueItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QueueItems.ListQueueItems(new ListQueueItemsRequest());
    // TODO: Handle 'response' of type ODataQueueItemCollection
}
catch (ApiException<ListQueueItemsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListQueueItemsRequest](src/UiPath/Requests/QueueItems/ListQueueItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataQueueItemCollection](src/UiPath/Models/ODataQueueItemCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListQueueItemsError](src/UiPath/Errors/ListQueueItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](src/UiPath/Api/Queues.cs)

<details>
<summary><code>Task&lt;QueueDefinition&gt; CreateQueue(CreateQueueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Queues.CreateQueue(new CreateQueueRequest
    {
        Body = new QueueDefinition
        {
            Id = 1L,
            Name = "example-value",
            Description = "example-value",
            MaxNumberOfRetries = 1,
            AcceptAutomaticallyRetry = true,
            EnforceUniqueReference = true,
            OrganizationUnitId = 1L,
        },
    });
    // TODO: Handle 'response' of type QueueDefinition
}
catch (ApiException<CreateQueueError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateQueueRequest](src/UiPath/Requests/Queues/CreateQueueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueDefinition](src/UiPath/Models/QueueDefinition.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateQueueError](src/UiPath/Errors/CreateQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataQueueDefinitionCollection&gt; ListQueues(ListQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Queues.ListQueues(new ListQueuesRequest());
    // TODO: Handle 'response' of type ODataQueueDefinitionCollection
}
catch (ApiException<ListQueuesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListQueuesRequest](src/UiPath/Requests/Queues/ListQueuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataQueueDefinitionCollection](src/UiPath/Models/ODataQueueDefinitionCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListQueuesError](src/UiPath/Errors/ListQueuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Requirements

> Source: [Requirements](src/UiPath/Api/Requirements.cs)

<details>
<summary><code>Task&lt;Requirement&gt; CreateRequirement(CreateRequirementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Requirements.CreateRequirement(new CreateRequirementOperationRequest
    {
        ProjectId = "some example string",
        Body = new CreateRequirementRequest
        {
            Name = "example-value",
            Description = "example-value",
            ExternalId = "example-value",
        },
    });
    // TODO: Handle 'response' of type Requirement
}
catch (ApiException<CreateRequirementError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRequirementOperationRequest](src/UiPath/Requests/Requirements/CreateRequirementOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Requirement](src/UiPath/Models/Requirement.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateRequirementError](src/UiPath/Errors/CreateRequirementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RequirementListResponse&gt; ListRequirements(ListRequirementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Requirements.ListRequirements(new ListRequirementsRequest
    {
        ProjectId = "some example string",
        Page = 1,
        PageSize = 1,
    });
    // TODO: Handle 'response' of type RequirementListResponse
}
catch (ApiException<ListRequirementsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRequirementsRequest](src/UiPath/Requests/Requirements/ListRequirementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequirementListResponse](src/UiPath/Models/RequirementListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListRequirementsError](src/UiPath/Errors/ListRequirementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Robots

> Source: [Robots](src/UiPath/Api/Robots.cs)

<details>
<summary><code>Task&lt;ODataRobotCollection&gt; ListRobots(ListRobotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Robots.ListRobots(new ListRobotsRequest());
    // TODO: Handle 'response' of type ODataRobotCollection
}
catch (ApiException<ListRobotsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRobotsRequest](src/UiPath/Requests/Robots/ListRobotsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataRobotCollection](src/UiPath/Models/ODataRobotCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListRobotsError](src/UiPath/Errors/ListRobotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/UiPath/Api/Roles.cs)

<details>
<summary><code>Task&lt;ODataRoleCollection&gt; ListRoles(ListRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Roles.ListRoles(new ListRolesRequest());
    // TODO: Handle 'response' of type ODataRoleCollection
}
catch (ApiException<ListRolesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRolesRequest](src/UiPath/Requests/Roles/ListRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataRoleCollection](src/UiPath/Models/ODataRoleCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListRolesError](src/UiPath/Errors/ListRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](src/UiPath/Api/Schedules.cs)

<details>
<summary><code>Task&lt;ODataScheduleCollection&gt; ListSchedules(ListSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Schedules.ListSchedules(new ListSchedulesRequest());
    // TODO: Handle 'response' of type ODataScheduleCollection
}
catch (ApiException<ListSchedulesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSchedulesRequest](src/UiPath/Requests/Schedules/ListSchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataScheduleCollection](src/UiPath/Models/ODataScheduleCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListSchedulesError](src/UiPath/Errors/ListSchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StorageBuckets

> Source: [StorageBuckets](src/UiPath/Api/StorageBuckets.cs)

<details>
<summary><code>Task&lt;ODataStorageBucketCollection&gt; ListStorageBuckets(ListStorageBucketsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.StorageBuckets.ListStorageBuckets(new ListStorageBucketsRequest());
    // TODO: Handle 'response' of type ODataStorageBucketCollection
}
catch (ApiException<ListStorageBucketsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListStorageBucketsRequest](src/UiPath/Requests/StorageBuckets/ListStorageBucketsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataStorageBucketCollection](src/UiPath/Models/ODataStorageBucketCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListStorageBucketsError](src/UiPath/Errors/ListStorageBucketsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TestCases

> Source: [TestCases](src/UiPath/Api/TestCases.cs)

<details>
<summary><code>Task&lt;TestCase&gt; CreateTestCase(CreateTestCaseOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestCases.CreateTestCase(new CreateTestCaseOperationRequest
    {
        ProjectId = "some example string",
        Body = new CreateTestCaseRequest
        {
            Name = "example-value",
            Description = "example-value",
            Labels = ["example-value"],
        },
    });
    // TODO: Handle 'response' of type TestCase
}
catch (ApiException<CreateTestCaseError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTestCaseOperationRequest](src/UiPath/Requests/TestCases/CreateTestCaseOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestCase](src/UiPath/Models/TestCase.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateTestCaseError](src/UiPath/Errors/CreateTestCaseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestCase&gt; GetTestCase(GetTestCaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestCases.GetTestCase(new GetTestCaseRequest
    {
        ProjectId = "some example string",
        TestCaseId = "some example string",
    });
    // TODO: Handle 'response' of type TestCase
}
catch (ApiException<GetTestCaseError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTestCaseRequest](src/UiPath/Requests/TestCases/GetTestCaseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestCase](src/UiPath/Models/TestCase.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetTestCaseError](src/UiPath/Errors/GetTestCaseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestCaseListResponse&gt; ListTestCases(ListTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestCases.ListTestCases(new ListTestCasesRequest
    {
        ProjectId = "some example string",
        Page = 1,
        PageSize = 1,
    });
    // TODO: Handle 'response' of type TestCaseListResponse
}
catch (ApiException<ListTestCasesError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestCasesRequest](src/UiPath/Requests/TestCases/ListTestCasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestCaseListResponse](src/UiPath/Models/TestCaseListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListTestCasesError](src/UiPath/Errors/ListTestCasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TestExecutions

> Source: [TestExecutions](src/UiPath/Api/TestExecutions.cs)

<details>
<summary><code>Task&lt;TestExecutionListResponse&gt; ListTestExecutions(ListTestExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestExecutions.ListTestExecutions(new ListTestExecutionsRequest
    {
        ProjectId = "some example string",
        Page = 1,
        PageSize = 1,
    });
    // TODO: Handle 'response' of type TestExecutionListResponse
}
catch (ApiException<ListTestExecutionsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestExecutionsRequest](src/UiPath/Requests/TestExecutions/ListTestExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestExecutionListResponse](src/UiPath/Models/TestExecutionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListTestExecutionsError](src/UiPath/Errors/ListTestExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TestSets

> Source: [TestSets](src/UiPath/Api/TestSets.cs)

<details>
<summary><code>Task&lt;TestSet&gt; CreateTestSet(CreateTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestSets.CreateTestSet(new CreateTestSetOperationRequest
    {
        ProjectId = "some example string",
        Body = new CreateTestSetRequest { Name = "example-value", Description = "example-value" },
    });
    // TODO: Handle 'response' of type TestSet
}
catch (ApiException<CreateTestSetError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTestSetOperationRequest](src/UiPath/Requests/TestSets/CreateTestSetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestSet](src/UiPath/Models/TestSet.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateTestSetError](src/UiPath/Errors/CreateTestSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestSetListResponse&gt; ListTestSets(ListTestSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.TestSets.ListTestSets(new ListTestSetsRequest
    {
        ProjectId = "some example string",
        Page = 1,
        PageSize = 1,
    });
    // TODO: Handle 'response' of type TestSetListResponse
}
catch (ApiException<ListTestSetsError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathTestManagerProjectsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathTestManagerProjectsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTestSetsRequest](src/UiPath/Requests/TestSets/ListTestSetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestSetListResponse](src/UiPath/Models/TestSetListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListTestSetsError](src/UiPath/Errors/ListTestSetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/UiPath/Api/Users.cs)

<details>
<summary><code>Task&lt;User&gt; AddUser(AddUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.AddUser(new AddUserOperationRequest
    {
        Body = new AddUserRequest { Email = "user@example.com", Role = "example-value" },
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<AddUserError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddUserOperationRequest](src/UiPath/Requests/Users/AddUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/UiPath/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[AddUserError](src/UiPath/Errors/AddUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User2&gt; CreateUser(CreateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.CreateUser(new CreateUserOperationRequest
    {
        OrganizationName = "some example string",
        Body = new CreateUserRequest { Email = "user@example.com", Name = "example-value", Surname = "example-value" },
    });
    // TODO: Handle 'response' of type User2
}
catch (ApiException<CreateUserError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateUserOperationRequest](src/UiPath/Requests/Users/CreateUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User2](src/UiPath/Models/User2.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateUserError](src/UiPath/Errors/CreateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Users.DeleteUser(new DeleteUserRequest
    {
        OrganizationName = "some example string",
        UserId = "some example string",
    });
}
catch (ApiException<DeleteUserError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUserRequest](src/UiPath/Requests/Users/DeleteUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteUserError](src/UiPath/Errors/DeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; EditUser(EditUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.EditUser(new EditUserOperationRequest
    {
        Body = new EditUserRequest { Id = 1, Role = "example-value", IsActive = true },
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<EditUserError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EditUserOperationRequest](src/UiPath/Requests/Users/EditUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/UiPath/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[EditUserError](src/UiPath/Errors/EditUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataUserCollection&gt; GetOdataUsers(GetOdataUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.GetOdataUsers(new GetOdataUsersRequest());
    // TODO: Handle 'response' of type ODataUserCollection
}
catch (ApiException<GetOdataUsersError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOdataUsersRequest](src/UiPath/Requests/Users/GetOdataUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataUserCollection](src/UiPath/Models/ODataUserCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetOdataUsersError](src/UiPath/Errors/GetOdataUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User2&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest
    {
        OrganizationName = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type User2
}
catch (ApiException<GetUserError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserRequest](src/UiPath/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User2](src/UiPath/Models/User2.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/UiPath/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RolesResponse&gt; ListRoles2(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.ListRoles2();
    // TODO: Handle 'response' of type RolesResponse
}
catch (ApiException<ListRoles2Error> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RolesResponse](src/UiPath/Models/RolesResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListRoles2Error](src/UiPath/Errors/ListRoles2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserListResponse&gt; ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.ListUsers(new ListUsersRequest { Page = 1, PageSize = 1 });
    // TODO: Handle 'response' of type UserListResponse
}
catch (ApiException<ListUsersError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathAutomationHubAppInventoryApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathAutomationHubAppInventoryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUsersRequest](src/UiPath/Requests/Users/ListUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserListResponse](src/UiPath/Models/UserListResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/UiPath/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ValidationApi

> Source: [ValidationApi](src/UiPath/Api/ValidationApi.cs)

<details>
<summary><code>Task&lt;AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi&gt; ValidateDocumentAsync(ValidateDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ValidationApi.ValidateDocumentAsync(new ValidateDocumentAsyncRequest
    {
        ProjectId = "some example string",
        ApiVersion = "1.0.0",
        Body = new ValidationRequest { DocumentId = "some example string" },
    });
    // TODO: Handle 'response' of type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi
}
catch (ApiException<ValidateDocumentAsyncError> ex)
{
    if (ex.Error.TryGetErrorResponseUiPathPlatformManagementAuditLogsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseUiPathPlatformManagementAuditLogsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateDocumentAsyncRequest](src/UiPath/Requests/ValidationApi/ValidateDocumentAsyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi](src/UiPath/Models/AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ValidateDocumentAsyncError](src/UiPath/Errors/ValidateDocumentAsyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/UiPath/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;Webhook&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        Body = new Webhook
        {
            Id = 1L,
            Url = "https://cloud.uipath.com/example",
            Enabled = true,
            Secret = "example-value",
            SubscribeToAllEvents = true,
            AllowInsecureSsl = true,
            Events = ["example-value"],
        },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<CreateWebhookError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/UiPath/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/UiPath/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/UiPath/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest { Key = 1L });
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/UiPath/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/UiPath/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse&gt; GetWebhookEventTypes(GetWebhookEventTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookEventTypes(new GetWebhookEventTypesRequest());
    // TODO: Handle 'response' of type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse
}
catch (ApiException<GetWebhookEventTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookEventTypesRequest](src/UiPath/Requests/WebhooksApi/GetWebhookEventTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse](src/UiPath/Models/OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[GetWebhookEventTypesError](src/UiPath/Errors/GetWebhookEventTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ODataWebhookCollection&gt; ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks(new ListWebhooksRequest());
    // TODO: Handle 'response' of type ODataWebhookCollection
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWebhooksRequest](src/UiPath/Requests/WebhooksApi/ListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ODataWebhookCollection](src/UiPath/Models/ODataWebhookCollection.cs)</code>

**OnError**: <code>[ApiException](src/UiPath/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/UiPath/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

