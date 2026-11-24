# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [RelmCrmClient](src/RelmCrm/RelmCrmClient.cs)

## Activities

> Source: [Activities](src/RelmCrm/Api/Activities.cs)

<details>
<summary><code>Task&lt;Activity&gt; CreateActivity(CreateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.CreateActivity(new CreateActivityRequest { Body = new ActivityInput() });
    // TODO: Handle 'response' of type Activity
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateActivityRequest](src/RelmCrm/Requests/Activities/CreateActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](src/RelmCrm/Models/Activity.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteActivity(DeleteActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.DeleteActivity(new DeleteActivityRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteActivityRequest](src/RelmCrm/Requests/Activities/DeleteActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Activity&gt; GetActivity(GetActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.GetActivity(new GetActivityRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Activity
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetActivityRequest](src/RelmCrm/Requests/Activities/GetActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](src/RelmCrm/Models/Activity.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActivityList&gt; ListActivities(ListActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.ListActivities(new ListActivitiesRequest());
    // TODO: Handle 'response' of type ActivityList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListActivitiesRequest](src/RelmCrm/Requests/Activities/ListActivitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActivityList](src/RelmCrm/Models/ActivityList.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Activity&gt; RestoreActivity(RestoreActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.RestoreActivity(new RestoreActivityRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Activity
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreActivityRequest](src/RelmCrm/Requests/Activities/RestoreActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](src/RelmCrm/Models/Activity.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Activity&gt; UpdateActivity(UpdateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Activities.UpdateActivity(new UpdateActivityRequest
    {
        Id = "some example string",
        Body = new ActivityInput(),
    });
    // TODO: Handle 'response' of type Activity
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateActivityRequest](src/RelmCrm/Requests/Activities/UpdateActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Activity](src/RelmCrm/Models/Activity.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/RelmCrm/Api/Automations.cs)

<details>
<summary><code>Task&lt;object&gt; AutomationsCapabilities(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.AutomationsCapabilities();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CreateAutomation(CreateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.CreateAutomation(new CreateAutomationRequest
    {
        Body = new AutomationInput
        {
            Name = "some example string",
            TriggerEvent = TriggerEvent.ContactCreated,
            Actions = [new ActionModel()],
        },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAutomationRequest](src/RelmCrm/Requests/Automations/CreateAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteAutomation(DeleteAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.DeleteAutomation(new DeleteAutomationRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAutomationRequest](src/RelmCrm/Requests/Automations/DeleteAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.GetAutomation(new GetAutomationRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAutomationRequest](src/RelmCrm/Requests/Automations/GetAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListAutomations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.ListAutomations();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; SetAutomationEnabled(SetAutomationEnabledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.SetAutomationEnabled(new SetAutomationEnabledRequest
    {
        Id = "some example string",
        Body = new AutomationsRequest { Enabled = true },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetAutomationEnabledRequest](src/RelmCrm/Requests/Automations/SetAutomationEnabledRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](src/RelmCrm/Api/Batch.cs)

<details>
<summary><code>Task&lt;object&gt; BatchInvoke(BatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Batch.BatchInvoke(new BatchOperationRequest
    {
        Body = new BatchRequest { Operations = [new Operation()] },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchOperationRequest](src/RelmCrm/Requests/Batch/BatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](src/RelmCrm/Api/Companies.cs)

<details>
<summary><code>Task&lt;Company&gt; CreateCompany(CreateCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.CreateCompany(new CreateCompanyRequest
    {
        Body = new CompanyInput { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCompanyRequest](src/RelmCrm/Requests/Companies/CreateCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/RelmCrm/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteCompany(DeleteCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.DeleteCompany(new DeleteCompanyRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCompanyRequest](src/RelmCrm/Requests/Companies/DeleteCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; GetCompany(GetCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompany(new GetCompanyRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyRequest](src/RelmCrm/Requests/Companies/GetCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/RelmCrm/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyList&gt; ListCompanies(ListCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.ListCompanies(new ListCompaniesRequest());
    // TODO: Handle 'response' of type CompanyList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCompaniesRequest](src/RelmCrm/Requests/Companies/ListCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyList](src/RelmCrm/Models/CompanyList.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; RestoreCompany(RestoreCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.RestoreCompany(new RestoreCompanyRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreCompanyRequest](src/RelmCrm/Requests/Companies/RestoreCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/RelmCrm/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; UpdateCompany(UpdateCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.UpdateCompany(new UpdateCompanyRequest
    {
        Id = "some example string",
        Body = new CompanyInput { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCompanyRequest](src/RelmCrm/Requests/Companies/UpdateCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/RelmCrm/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](src/RelmCrm/Api/Connections.cs)

<details>
<summary><code>Task&lt;object&gt; CreateConnection(CreateConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.CreateConnection(new CreateConnectionRequest
    {
        Body = new ConnectionsRequest { ApiKey = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateConnectionRequest](src/RelmCrm/Requests/Connections/CreateConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.DeleteConnection(new DeleteConnectionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteConnectionRequest](src/RelmCrm/Requests/Connections/DeleteConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListConnections(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.ListConnections();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contacts

> Source: [Contacts](src/RelmCrm/Api/Contacts.cs)

<details>
<summary><code>Task&lt;Contact&gt; CreateContact(CreateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email is unique per workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.CreateContact(new CreateContactRequest { Body = new ContactInput() });
    // TODO: Handle 'response' of type Contact
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContactRequest](src/RelmCrm/Requests/Contacts/CreateContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/RelmCrm/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteContact(DeleteContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.DeleteContact(new DeleteContactRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteContactRequest](src/RelmCrm/Requests/Contacts/DeleteContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; GetContact(GetContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.GetContact(new GetContactRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Contact
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactRequest](src/RelmCrm/Requests/Contacts/GetContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/RelmCrm/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactList&gt; ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.ListContacts(new ListContactsRequest());
    // TODO: Handle 'response' of type ContactList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContactsRequest](src/RelmCrm/Requests/Contacts/ListContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactList](src/RelmCrm/Models/ContactList.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; RestoreContact(RestoreContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.RestoreContact(new RestoreContactRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Contact
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreContactRequest](src/RelmCrm/Requests/Contacts/RestoreContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/RelmCrm/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Contact&gt; UpdateContact(UpdateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contacts.UpdateContact(new UpdateContactRequest
    {
        Id = "some example string",
        Body = new ContactInput(),
    });
    // TODO: Handle 'response' of type Contact
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContactRequest](src/RelmCrm/Requests/Contacts/UpdateContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Contact](src/RelmCrm/Models/Contact.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deals

> Source: [Deals](src/RelmCrm/Api/Deals.cs)

<details>
<summary><code>Task&lt;Deal&gt; CreateDeal(CreateDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.CreateDeal(new CreateDealRequest
    {
        Body = new DealInput { Title = "some example string" },
    });
    // TODO: Handle 'response' of type Deal
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDealRequest](src/RelmCrm/Requests/Deals/CreateDealRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](src/RelmCrm/Models/Deal.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteDeal(DeleteDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.DeleteDeal(new DeleteDealRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDealRequest](src/RelmCrm/Requests/Deals/DeleteDealRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deal&gt; GetDeal(GetDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.GetDeal(new GetDealRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deal
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDealRequest](src/RelmCrm/Requests/Deals/GetDealRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](src/RelmCrm/Models/Deal.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DealList&gt; ListDeals(ListDealsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.ListDeals(new ListDealsRequest());
    // TODO: Handle 'response' of type DealList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDealsRequest](src/RelmCrm/Requests/Deals/ListDealsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DealList](src/RelmCrm/Models/DealList.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deal&gt; RestoreDeal(RestoreDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.RestoreDeal(new RestoreDealRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deal
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreDealRequest](src/RelmCrm/Requests/Deals/RestoreDealRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](src/RelmCrm/Models/Deal.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deal&gt; UpdateDeal(UpdateDealRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deals.UpdateDeal(new UpdateDealRequest
    {
        Id = "some example string",
        Body = new DealInput { Title = "some example string" },
    });
    // TODO: Handle 'response' of type Deal
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDealRequest](src/RelmCrm/Requests/Deals/UpdateDealRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deal](src/RelmCrm/Models/Deal.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/RelmCrm/Api/Discovery.cs)

<details>
<summary><code>Task&lt;SchemaDoc&gt; GetSchema(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.GetSchema();
    // TODO: Handle 'response' of type SchemaDoc
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SchemaDoc](src/RelmCrm/Models/SchemaDoc.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Settings&gt; GetSettings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.GetSettings();
    // TODO: Handle 'response' of type Settings
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settings](src/RelmCrm/Models/Settings.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Usage&gt; GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.GetUsage();
    // TODO: Handle 'response' of type Usage
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Usage](src/RelmCrm/Models/Usage.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Settings&gt; SetSettings(SetSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.SetSettings(new SetSettingsRequest
    {
        Body = new SettingsRequest { OverageCapUsd = 1.5d },
    });
    // TODO: Handle 'response' of type Settings
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetSettingsRequest](src/RelmCrm/Requests/Discovery/SetSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Settings](src/RelmCrm/Models/Settings.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](src/RelmCrm/Api/Pipelines.cs)

<details>
<summary><code>Task&lt;Pipeline&gt; AddStage(AddStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.AddStage(new AddStageRequest
    {
        Key = "some example string",
        Body = new PipelinesStagesRequest { Key = "some example string" },
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddStageRequest](src/RelmCrm/Requests/Pipelines/AddStageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; CreatePipeline(CreatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreatePipeline(new CreatePipelineRequest { Body = new PipelineInput() });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePipelineRequest](src/RelmCrm/Requests/Pipelines/CreatePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeletePipeline(DeletePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.DeletePipeline(new DeletePipelineRequest { Key = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePipelineRequest](src/RelmCrm/Requests/Pipelines/DeletePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; DeleteStage(DeleteStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.DeleteStage(new DeleteStageRequest
    {
        Key = "some example string",
        Stage = "some example string",
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStageRequest](src/RelmCrm/Requests/Pipelines/DeleteStageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipeline(new GetPipelineRequest { Key = "some example string" });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPipelineRequest](src/RelmCrm/Requests/Pipelines/GetPipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListPipelines(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.ListPipelines();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; ReorderStages(ReorderStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.ReorderStages(new ReorderStagesRequest
    {
        Key = "some example string",
        Body = new PipelinesStagesReorderRequest { Order = ["some example string"] },
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReorderStagesRequest](src/RelmCrm/Requests/Pipelines/ReorderStagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; SetDefaultPipeline(SetDefaultPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.SetDefaultPipeline(new SetDefaultPipelineRequest
    {
        Key = "some example string",
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetDefaultPipelineRequest](src/RelmCrm/Requests/Pipelines/SetDefaultPipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; UpdatePipeline(UpdatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdatePipeline(new UpdatePipelineRequest
    {
        Key = "some example string",
        Body = new PipelinesRequest(),
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePipelineRequest](src/RelmCrm/Requests/Pipelines/UpdatePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; UpdateStage(UpdateStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateStage(new UpdateStageRequest
    {
        Key = "some example string",
        Stage = "some example string",
        Body = new PipelinesStagesRequest1(),
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStageRequest](src/RelmCrm/Requests/Pipelines/UpdateStageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/RelmCrm/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Registry

> Source: [Registry](src/RelmCrm/Api/Registry.cs)

<details>
<summary><code>Task&lt;object&gt; CreateEnumValue(CreateEnumValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registry.CreateEnumValue(new CreateEnumValueRequest
    {
        Body = new EnumsRequest { Group = "some example string", Value = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEnumValueRequest](src/RelmCrm/Requests/Registry/CreateEnumValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CreateField(CreateFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registry.CreateField(new CreateFieldRequest
    {
        Body = new FieldsRequest { Object = ObjectRelmCrmBatchApi.Contact, Key = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFieldRequest](src/RelmCrm/Requests/Registry/CreateFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CreateType(CreateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registry.CreateType(new CreateTypeRequest
    {
        Body = new TypesRequest { Key = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTypeRequest](src/RelmCrm/Requests/Registry/CreateTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListEnums(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registry.ListEnums();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/RelmCrm/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResult&gt; SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchInvoke(new SearchRequest { Q = "some example string" });
    // TODO: Handle 'response' of type SearchResult
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchRequest](src/RelmCrm/Requests/Search/SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResult](src/RelmCrm/Models/SearchResult.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sequences

> Source: [Sequences](src/RelmCrm/Api/Sequences.cs)

<details>
<summary><code>Task&lt;object&gt; CreateSequence(CreateSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.CreateSequence(new CreateSequenceRequest
    {
        Body = new SequenceInput { Name = "some example string", Steps = [new Step()] },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSequenceRequest](src/RelmCrm/Requests/Sequences/CreateSequenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteSequence(DeleteSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.DeleteSequence(new DeleteSequenceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSequenceRequest](src/RelmCrm/Requests/Sequences/DeleteSequenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Enroll(EnrollRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.Enroll(new EnrollRequest
    {
        Id = "some example string",
        Body = new SequencesEnrollRequest { ContactId = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrollRequest](src/RelmCrm/Requests/Sequences/EnrollRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetSequence(GetSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.GetSequence(new GetSequenceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSequenceRequest](src/RelmCrm/Requests/Sequences/GetSequenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListEnrollments(ListEnrollmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.ListEnrollments(new ListEnrollmentsRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEnrollmentsRequest](src/RelmCrm/Requests/Sequences/ListEnrollmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListSequences(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.ListSequences();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PreviewSequence(PreviewSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.PreviewSequence(new PreviewSequenceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PreviewSequenceRequest](src/RelmCrm/Requests/Sequences/PreviewSequenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; SetSequenceEnabled(SetSequenceEnabledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sequences.SetSequenceEnabled(new SetSequenceEnabledRequest
    {
        Id = "some example string",
        Body = new SequencesRequest { Enabled = true },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetSequenceEnabledRequest](src/RelmCrm/Requests/Sequences/SetSequenceEnabledRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/RelmCrm/Api/Templates.cs)

<details>
<summary><code>Task&lt;object&gt; CreateTemplate(CreateTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.CreateTemplate(new CreateTemplateRequest
    {
        Body = new TemplatesRequest { Name = "some example string", Html = "some example string" },
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTemplateRequest](src/RelmCrm/Requests/Templates/CreateTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteTemplate(DeleteTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.DeleteTemplate(new DeleteTemplateRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTemplateRequest](src/RelmCrm/Requests/Templates/DeleteTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetTemplate(GetTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.GetTemplate(new GetTemplateRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTemplateRequest](src/RelmCrm/Requests/Templates/GetTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.ListTemplates();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UpdateTemplate(UpdateTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.UpdateTemplate(new UpdateTemplateRequest
    {
        Id = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTemplateRequest](src/RelmCrm/Requests/Templates/UpdateTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/RelmCrm/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;Webhook&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        Body = new WebhookInput { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/RelmCrm/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/RelmCrm/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deleted&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Deleted
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/RelmCrm/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deleted](src/RelmCrm/Models/Deleted.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookRequest](src/RelmCrm/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/RelmCrm/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListDeliveries(ListDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListDeliveries(new ListDeliveriesRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDeliveriesRequest](src/RelmCrm/Requests/WebhooksApi/ListDeliveriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks();
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest
    {
        Id = "some example string",
        Body = new WebhookInput { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookRequest](src/RelmCrm/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/RelmCrm/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/RelmCrm/Core/Exceptions/ApiException.cs)&lt;[RawError](src/RelmCrm/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

