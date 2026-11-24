# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [MicrosoftDynamicsNavClient](src/MicrosoftDynamicsNav/MicrosoftDynamicsNavClient.cs)

## Accounts

> Source: [Accounts](src/MicrosoftDynamicsNav/Api/Accounts.cs)

<details>
<summary><code>Task&lt;Account&gt; GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific account by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.GetAccount(new GetAccountRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        AccountId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Account
}
catch (ApiException<GetAccountError> ex)
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

<code>[GetAccountRequest](src/MicrosoftDynamicsNav/Requests/Accounts/GetAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/MicrosoftDynamicsNav/Models/Account.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetAccountError](src/MicrosoftDynamicsNav/Errors/GetAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiAccountsResponse&gt; ListAccounts(ListAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of general ledger account objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.ListAccounts(new ListAccountsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiAccountsResponse
}
catch (ApiException<ListAccountsError> ex)
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

<code>[ListAccountsRequest](src/MicrosoftDynamicsNav/Requests/Accounts/ListAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiAccountsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAccountsError](src/MicrosoftDynamicsNav/Errors/ListAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiGeneralLedgerEntriesResponse&gt; ListGeneralLedgerEntries(ListGeneralLedgerEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of general ledger entries.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.ListGeneralLedgerEntries(new ListGeneralLedgerEntriesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiGeneralLedgerEntriesResponse
}
catch (ApiException<ListGeneralLedgerEntriesError> ex)
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

<code>[ListGeneralLedgerEntriesRequest](src/MicrosoftDynamicsNav/Requests/Accounts/ListGeneralLedgerEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiGeneralLedgerEntriesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiGeneralLedgerEntriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListGeneralLedgerEntriesError](src/MicrosoftDynamicsNav/Errors/ListGeneralLedgerEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AppManagement

> Source: [AppManagement](src/MicrosoftDynamicsNav/Api/AppManagement.cs)

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; InstallApp(InstallAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs the specified app in the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppManagement.InstallApp(new InstallAppRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        AppId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new AppInstallRequest
        {
            TargetVersion = "example_value",
            AllowPreviewVersion = true,
            AcceptIsvEula = true,
            AllowDependencyUpdate = true,
        },
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<InstallAppError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InstallAppRequest](src/MicrosoftDynamicsNav/Requests/AppManagement/InstallAppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[InstallAppError](src/MicrosoftDynamicsNav/Errors/InstallAppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsAppsResponse&gt; ListInstalledApps(ListInstalledAppsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of apps installed in the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppManagement.ListInstalledApps(new ListInstalledAppsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsEnvironmentsAppsResponse
}
catch (ApiException<ListInstalledAppsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInstalledAppsRequest](src/MicrosoftDynamicsNav/Requests/AppManagement/ListInstalledAppsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsAppsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsAppsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListInstalledAppsError](src/MicrosoftDynamicsNav/Errors/ListInstalledAppsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; UninstallApp(UninstallAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls the specified app from the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppManagement.UninstallApp(new UninstallAppRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        AppId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ApplicationsEnvironmentsAppsAppIdUninstallRequest { DeleteData = true },
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<UninstallAppError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UninstallAppRequest](src/MicrosoftDynamicsNav/Requests/AppManagement/UninstallAppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UninstallAppError](src/MicrosoftDynamicsNav/Errors/UninstallAppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; UpdateApp(UpdateAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules an update of the specified app to a newer version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppManagement.UpdateApp(new UpdateAppRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        AppId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new AppUpdateRequest
        {
            TargetVersion = "example_value",
            AllowPreviewVersion = true,
            IgnoreUpgradeWindow = true,
            AllowDependencyUpdate = true,
        },
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<UpdateAppError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAppManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAppRequest](src/MicrosoftDynamicsNav/Requests/AppManagement/UpdateAppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateAppError](src/MicrosoftDynamicsNav/Errors/UpdateAppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AvailableApplications

> Source: [AvailableApplications](src/MicrosoftDynamicsNav/Api/AvailableApplications.cs)

<details>
<summary><code>Task&lt;ApplicationsAvailableCountriesResponse&gt; ListAvailableCountries(ListAvailableCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of countries where environments can be created.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AvailableApplications.ListAvailableCountries(new ListAvailableCountriesRequest
    {
        ApplicationFamily = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsAvailableCountriesResponse
}
catch (ApiException<ListAvailableCountriesError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAvailable(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAvailable
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAvailableCountriesRequest](src/MicrosoftDynamicsNav/Requests/AvailableApplications/ListAvailableCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsAvailableCountriesResponse](src/MicrosoftDynamicsNav/Models/ApplicationsAvailableCountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAvailableCountriesError](src/MicrosoftDynamicsNav/Errors/ListAvailableCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsAvailableApplicationVersionsResponse&gt; ListAvailableVersions(ListAvailableVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of available application versions for the specified application family.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AvailableApplications.ListAvailableVersions(new ListAvailableVersionsRequest
    {
        ApplicationFamily = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsAvailableApplicationVersionsResponse
}
catch (ApiException<ListAvailableVersionsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterAvailable(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterAvailable
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAvailableVersionsRequest](src/MicrosoftDynamicsNav/Requests/AvailableApplications/ListAvailableVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsAvailableApplicationVersionsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsAvailableApplicationVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAvailableVersionsError](src/MicrosoftDynamicsNav/Errors/ListAvailableVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](src/MicrosoftDynamicsNav/Api/Companies.cs)

<details>
<summary><code>Task&lt;AutomationCompany&gt; CreateAutomationCompany(CreateAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new company in the Business Central tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.CreateAutomationCompany(new CreateAutomationCompanyRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new AutomationCompanyCreate
        {
            Name = "Example Title",
            DisplayName = "example_value",
            BusinessProfileId = "500123",
        },
    });
    // TODO: Handle 'response' of type AutomationCompany
}
catch (ApiException<CreateAutomationCompanyError> ex)
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

<code>[CreateAutomationCompanyRequest](src/MicrosoftDynamicsNav/Requests/Companies/CreateAutomationCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](src/MicrosoftDynamicsNav/Models/AutomationCompany.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateAutomationCompanyError](src/MicrosoftDynamicsNav/Errors/CreateAutomationCompanyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAutomationCompany(DeleteAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a company from the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Companies.DeleteAutomationCompany(new DeleteAutomationCompanyRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        AutomationCompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteAutomationCompanyError> ex)
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

<code>[DeleteAutomationCompanyRequest](src/MicrosoftDynamicsNav/Requests/Companies/DeleteAutomationCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteAutomationCompanyError](src/MicrosoftDynamicsNav/Errors/DeleteAutomationCompanyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationCompany&gt; GetAutomationCompany(GetAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific automation company by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetAutomationCompany(new GetAutomationCompanyRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        AutomationCompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type AutomationCompany
}
catch (ApiException<GetAutomationCompanyError> ex)
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

<code>[GetAutomationCompanyRequest](src/MicrosoftDynamicsNav/Requests/Companies/GetAutomationCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](src/MicrosoftDynamicsNav/Models/AutomationCompany.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetAutomationCompanyError](src/MicrosoftDynamicsNav/Errors/GetAutomationCompanyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiAutomationCompaniesResponse&gt; ListAutomationCompanies(ListAutomationCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of automation company objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.ListAutomationCompanies(new ListAutomationCompaniesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiAutomationCompaniesResponse
}
catch (ApiException<ListAutomationCompaniesError> ex)
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

<code>[ListAutomationCompaniesRequest](src/MicrosoftDynamicsNav/Requests/Companies/ListAutomationCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiAutomationCompaniesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiAutomationCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAutomationCompaniesError](src/MicrosoftDynamicsNav/Errors/ListAutomationCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesResponse&gt; ListCompanies(ListCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of companies available for automation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.ListCompanies(new ListCompaniesRequest());
    // TODO: Handle 'response' of type CompaniesResponse
}
catch (ApiException<ListCompaniesError> ex)
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

<code>[ListCompaniesRequest](src/MicrosoftDynamicsNav/Requests/Companies/ListCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesResponse](src/MicrosoftDynamicsNav/Models/CompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListCompaniesError](src/MicrosoftDynamicsNav/Errors/ListCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationCompany&gt; UpdateAutomationCompany(UpdateAutomationCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates properties of an automation company (e.g., rename).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.UpdateAutomationCompany(new UpdateAutomationCompanyRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        AutomationCompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new AutomationCompanyUpdate { Name = "Example Title", DisplayName = "example_value" },
    });
    // TODO: Handle 'response' of type AutomationCompany
}
catch (ApiException<UpdateAutomationCompanyError> ex)
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

<code>[UpdateAutomationCompanyRequest](src/MicrosoftDynamicsNav/Requests/Companies/UpdateAutomationCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](src/MicrosoftDynamicsNav/Models/AutomationCompany.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateAutomationCompanyError](src/MicrosoftDynamicsNav/Errors/UpdateAutomationCompanyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConfigurationPackages

> Source: [ConfigurationPackages](src/MicrosoftDynamicsNav/Api/ConfigurationPackages.cs)

<details>
<summary><code>Task ApplyConfigurationPackage(ApplyConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies the imported RapidStart configuration package.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ConfigurationPackages.ApplyConfigurationPackage(new ApplyConfigurationPackageRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PackageId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<ApplyConfigurationPackageError> ex)
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

<code>[ApplyConfigurationPackageRequest](src/MicrosoftDynamicsNav/Requests/ConfigurationPackages/ApplyConfigurationPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ApplyConfigurationPackageError](src/MicrosoftDynamicsNav/Errors/ApplyConfigurationPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConfigurationPackage&gt; CreateConfigurationPackage(CreateConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new RapidStart configuration package record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConfigurationPackages.CreateConfigurationPackage(new CreateConfigurationPackageRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new CompaniesApiConfigurationPackagesRequest { Code = "example_value", PackageName = "example_value" },
    });
    // TODO: Handle 'response' of type ConfigurationPackage
}
catch (ApiException<CreateConfigurationPackageError> ex)
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

<code>[CreateConfigurationPackageRequest](src/MicrosoftDynamicsNav/Requests/ConfigurationPackages/CreateConfigurationPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConfigurationPackage](src/MicrosoftDynamicsNav/Models/ConfigurationPackage.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateConfigurationPackageError](src/MicrosoftDynamicsNav/Errors/CreateConfigurationPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ImportConfigurationPackage(ImportConfigurationPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports the uploaded RapidStart configuration package.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ConfigurationPackages.ImportConfigurationPackage(new ImportConfigurationPackageRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PackageId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<ImportConfigurationPackageError> ex)
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

<code>[ImportConfigurationPackageRequest](src/MicrosoftDynamicsNav/Requests/ConfigurationPackages/ImportConfigurationPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ImportConfigurationPackageError](src/MicrosoftDynamicsNav/Errors/ImportConfigurationPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiConfigurationPackagesResponse&gt; ListConfigurationPackages(ListConfigurationPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of RapidStart configuration packages.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConfigurationPackages.ListConfigurationPackages(new ListConfigurationPackagesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiConfigurationPackagesResponse
}
catch (ApiException<ListConfigurationPackagesError> ex)
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

<code>[ListConfigurationPackagesRequest](src/MicrosoftDynamicsNav/Requests/ConfigurationPackages/ListConfigurationPackagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiConfigurationPackagesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiConfigurationPackagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListConfigurationPackagesError](src/MicrosoftDynamicsNav/Errors/ListConfigurationPackagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UploadConfigurationPackageFile(UploadConfigurationPackageFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads the RapidStart package file content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ConfigurationPackages.UploadConfigurationPackageFile(new UploadConfigurationPackageFileRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PackageId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Code = "example_value",
        IfMatch = "some example string",
        Body = Array.Empty<byte>(),
    });
}
catch (ApiException<UploadConfigurationPackageFileError> ex)
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

<code>[UploadConfigurationPackageFileRequest](src/MicrosoftDynamicsNav/Requests/ConfigurationPackages/UploadConfigurationPackageFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UploadConfigurationPackageFileError](src/MicrosoftDynamicsNav/Errors/UploadConfigurationPackageFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesRegions

> Source: [CountriesRegions](src/MicrosoftDynamicsNav/Api/CountriesRegions.cs)

<details>
<summary><code>Task&lt;CompaniesApiCountriesRegionsResponse&gt; ListCountriesRegions(ListCountriesRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of country/region objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CountriesRegions.ListCountriesRegions(new ListCountriesRegionsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiCountriesRegionsResponse
}
catch (ApiException<ListCountriesRegionsError> ex)
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

<code>[ListCountriesRegionsRequest](src/MicrosoftDynamicsNav/Requests/CountriesRegions/ListCountriesRegionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCountriesRegionsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiCountriesRegionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListCountriesRegionsError](src/MicrosoftDynamicsNav/Errors/ListCountriesRegionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CurrencyApi

> Source: [CurrencyApi](src/MicrosoftDynamicsNav/Api/CurrencyApi.cs)

<details>
<summary><code>Task&lt;CompaniesApiCurrenciesResponse&gt; ListCurrencies(ListCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of currency objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CurrencyApi.ListCurrencies(new ListCurrenciesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiCurrenciesResponse
}
catch (ApiException<ListCurrenciesError> ex)
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

<code>[ListCurrenciesRequest](src/MicrosoftDynamicsNav/Requests/CurrencyApi/ListCurrenciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCurrenciesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiCurrenciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListCurrenciesError](src/MicrosoftDynamicsNav/Errors/ListCurrenciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPayments

> Source: [CustomerPayments](src/MicrosoftDynamicsNav/Api/CustomerPayments.cs)

<details>
<summary><code>Task&lt;CompaniesApiCustomerPaymentJournalsResponse&gt; ListCustomerPaymentJournals(ListCustomerPaymentJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of customer payment journal objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerPayments.ListCustomerPaymentJournals(new ListCustomerPaymentJournalsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiCustomerPaymentJournalsResponse
}
catch (ApiException<ListCustomerPaymentJournalsError> ex)
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

<code>[ListCustomerPaymentJournalsRequest](src/MicrosoftDynamicsNav/Requests/CustomerPayments/ListCustomerPaymentJournalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCustomerPaymentJournalsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiCustomerPaymentJournalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListCustomerPaymentJournalsError](src/MicrosoftDynamicsNav/Errors/ListCustomerPaymentJournalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/MicrosoftDynamicsNav/Api/Customers.cs)

<details>
<summary><code>Task&lt;Customer&gt; CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer object in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.CreateCustomer(new CreateCustomerRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new CustomerCreate { DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type Customer
}
catch (ApiException<CreateCustomerError> ex)
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

<code>[CreateCustomerRequest](src/MicrosoftDynamicsNav/Requests/Customers/CreateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/MicrosoftDynamicsNav/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerError](src/MicrosoftDynamicsNav/Errors/CreateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomer(DeleteCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Customers.DeleteCustomer(new DeleteCustomerRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        CustomerId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteCustomerError> ex)
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

<code>[DeleteCustomerRequest](src/MicrosoftDynamicsNav/Requests/Customers/DeleteCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerError](src/MicrosoftDynamicsNav/Errors/DeleteCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific customer by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomer(new GetCustomerRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        CustomerId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Customer
}
catch (ApiException<GetCustomerError> ex)
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

<code>[GetCustomerRequest](src/MicrosoftDynamicsNav/Requests/Customers/GetCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/MicrosoftDynamicsNav/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetCustomerError](src/MicrosoftDynamicsNav/Errors/GetCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiCustomersResponse&gt; ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of customer objects from the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.ListCustomers(new ListCustomersRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiCustomersResponse
}
catch (ApiException<ListCustomersError> ex)
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

<code>[ListCustomersRequest](src/MicrosoftDynamicsNav/Requests/Customers/ListCustomersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCustomersResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiCustomersResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListCustomersError](src/MicrosoftDynamicsNav/Errors/ListCustomersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Customer&gt; UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing customer object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.UpdateCustomer(new UpdateCustomerRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        CustomerId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new CustomerUpdate(),
    });
    // TODO: Handle 'response' of type Customer
}
catch (ApiException<UpdateCustomerError> ex)
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

<code>[UpdateCustomerRequest](src/MicrosoftDynamicsNav/Requests/Customers/UpdateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/MicrosoftDynamicsNav/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerError](src/MicrosoftDynamicsNav/Errors/UpdateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](src/MicrosoftDynamicsNav/Api/Dimensions.cs)

<details>
<summary><code>Task&lt;CompaniesApiDimensionsResponse&gt; ListDimensions(ListDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dimension objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dimensions.ListDimensions(new ListDimensionsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiDimensionsResponse
}
catch (ApiException<ListDimensionsError> ex)
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

<code>[ListDimensionsRequest](src/MicrosoftDynamicsNav/Requests/Dimensions/ListDimensionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiDimensionsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiDimensionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListDimensionsError](src/MicrosoftDynamicsNav/Errors/ListDimensionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Employees

> Source: [Employees](src/MicrosoftDynamicsNav/Api/Employees.cs)

<details>
<summary><code>Task&lt;CompaniesApiEmployeesResponse&gt; ListEmployees(ListEmployeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of employee objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Employees.ListEmployees(new ListEmployeesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiEmployeesResponse
}
catch (ApiException<ListEmployeesError> ex)
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

<code>[ListEmployeesRequest](src/MicrosoftDynamicsNav/Requests/Employees/ListEmployeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiEmployeesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiEmployeesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListEmployeesError](src/MicrosoftDynamicsNav/Errors/ListEmployeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentOperations

> Source: [EnvironmentOperations](src/MicrosoftDynamicsNav/Api/EnvironmentOperations.cs)

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsOperationsResponse&gt; ListAllEnvironmentOperations(ListAllEnvironmentOperationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns operations that have occurred on all environments for the application family.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvironmentOperations.ListAllEnvironmentOperations(
        new ListAllEnvironmentOperationsRequest { ApplicationFamily = "some example string" });
    // TODO: Handle 'response' of type ApplicationsEnvironmentsOperationsResponse
}
catch (ApiException<ListAllEnvironmentOperationsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironment
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAllEnvironmentOperationsRequest](src/MicrosoftDynamicsNav/Requests/EnvironmentOperations/ListAllEnvironmentOperationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsOperationsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAllEnvironmentOperationsError](src/MicrosoftDynamicsNav/Errors/ListAllEnvironmentOperationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentsOperationsResponse&gt; ListEnvironmentOperations(ListEnvironmentOperationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of operations that have been performed on the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvironmentOperations.ListEnvironmentOperations(new ListEnvironmentOperationsRequest
    {
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentsOperationsResponse
}
catch (ApiException<ListEnvironmentOperationsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironment
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEnvironmentOperationsRequest](src/MicrosoftDynamicsNav/Requests/EnvironmentOperations/ListEnvironmentOperationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentsOperationsResponse](src/MicrosoftDynamicsNav/Models/EnvironmentsOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListEnvironmentOperationsError](src/MicrosoftDynamicsNav/Errors/ListEnvironmentOperationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentSettingsApi

> Source: [EnvironmentSettingsApi](src/MicrosoftDynamicsNav/Api/EnvironmentSettingsApi.cs)

<details>
<summary><code>Task&lt;EnvironmentSettings&gt; GetEnvironmentSettings(GetEnvironmentSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns settings for the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvironmentSettingsApi.GetEnvironmentSettings(new GetEnvironmentSettingsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentSettings
}
catch (ApiException<GetEnvironmentSettingsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEnvironmentSettingsRequest](src/MicrosoftDynamicsNav/Requests/EnvironmentSettingsApi/GetEnvironmentSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentSettings](src/MicrosoftDynamicsNav/Models/EnvironmentSettings.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentSettingsError](src/MicrosoftDynamicsNav/Errors/GetEnvironmentSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetAppInsightsKey(SetAppInsightsKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the Azure Application Insights instrumentation key for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.EnvironmentSettingsApi.SetAppInsightsKey(new SetAppInsightsKeyRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new ApplicationsEnvironmentsSettingsAppInsightsKeyRequest { Key = "example_value" },
    });
}
catch (ApiException<SetAppInsightsKeyError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetAppInsightsKeyRequest](src/MicrosoftDynamicsNav/Requests/EnvironmentSettingsApi/SetAppInsightsKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[SetAppInsightsKeyError](src/MicrosoftDynamicsNav/Errors/SetAppInsightsKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/MicrosoftDynamicsNav/Api/Environments.cs)

<details>
<summary><code>Task&lt;EnvironmentModel&gt; CopyEnvironment(CopyEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment as a copy of an existing environment's data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.CopyEnvironment(new CopyEnvironmentOperationRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new CopyEnvironmentRequest
        {
            EnvironmentName = "example_value",
            Type = Type1BusinessCentralAdministrationCenterEnvironmentsApi.Production,
        },
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<CopyEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CopyEnvironmentOperationRequest](src/MicrosoftDynamicsNav/Requests/Environments/CopyEnvironmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CopyEnvironmentError](src/MicrosoftDynamicsNav/Errors/CopyEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; CreateEnvironment(CreateEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment with sample data. The operation is asynchronous; poll the environment operations endpoint to track status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.CreateEnvironment(new CreateEnvironmentOperationRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new CreateEnvironmentRequest
        {
            EnvironmentType = EnvironmentType.Production,
            CountryCode = "example_value",
            RingName = "example_value",
            ApplicationVersion = "example_value",
        },
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<CreateEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEnvironmentOperationRequest](src/MicrosoftDynamicsNav/Requests/Environments/CreateEnvironmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateEnvironmentError](src/MicrosoftDynamicsNav/Errors/CreateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft deletes the specified environment. The environment is retained for 14 days during which it can be recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.DeleteEnvironment(new DeleteEnvironmentRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<DeleteEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEnvironmentRequest](src/MicrosoftDynamicsNav/Requests/Environments/DeleteEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteEnvironmentError](src/MicrosoftDynamicsNav/Errors/DeleteEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsAvailableRestorePeriodsResponse&gt; GetAvailableRestorePeriods(GetAvailableRestorePeriodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an ordered list of available restore periods for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.GetAvailableRestorePeriods(new GetAvailableRestorePeriodsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
}
catch (ApiException<GetAvailableRestorePeriodsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAvailableRestorePeriodsRequest](src/MicrosoftDynamicsNav/Requests/Environments/GetAvailableRestorePeriodsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsAvailableRestorePeriodsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetAvailableRestorePeriodsError](src/MicrosoftDynamicsNav/Errors/GetAvailableRestorePeriodsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the properties for the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.GetEnvironment(new GetEnvironmentRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<GetEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEnvironmentRequest](src/MicrosoftDynamicsNav/Requests/Environments/GetEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentError](src/MicrosoftDynamicsNav/Errors/GetEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsResponse&gt; ListAllEnvironments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all environments across all application families for the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.ListAllEnvironments();
    // TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
}
catch (ApiException<ListAllEnvironmentsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListAllEnvironmentsError](src/MicrosoftDynamicsNav/Errors/ListAllEnvironmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsResponse&gt; ListEnvironments(ListEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of environments for the specified application family.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.ListEnvironments(new ListEnvironmentsRequest
    {
        ApplicationFamily = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
}
catch (ApiException<ListEnvironmentsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEnvironmentsRequest](src/MicrosoftDynamicsNav/Requests/Environments/ListEnvironmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListEnvironmentsError](src/MicrosoftDynamicsNav/Errors/ListEnvironmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; RecoverEnvironment(RecoverEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recovers a soft-deleted environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.RecoverEnvironment(new RecoverEnvironmentRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<RecoverEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecoverEnvironmentRequest](src/MicrosoftDynamicsNav/Requests/Environments/RecoverEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[RecoverEnvironmentError](src/MicrosoftDynamicsNav/Errors/RecoverEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; RenameEnvironment(RenameEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a rename operation on an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.RenameEnvironment(new RenameEnvironmentRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new ApplicationsEnvironmentsRenameRequest { NewEnvironmentName = "example_value" },
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<RenameEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RenameEnvironmentRequest](src/MicrosoftDynamicsNav/Requests/Environments/RenameEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[RenameEnvironmentError](src/MicrosoftDynamicsNav/Errors/RenameEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentOperation&gt; RestoreEnvironment(RestoreEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores an existing environment from a point in time in the past.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.RestoreEnvironment(new RestoreEnvironmentOperationRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new RestoreEnvironmentRequest
        {
            EnvironmentName = "example_value",
            EnvironmentType = EnvironmentType1.Production,
            PointInTime = DateTimeOffset.Parse("2026-01-15T10:30:00Z"),
            SkipInstallingPtEs = true,
            SkipInstallingThirdPartyGlobalApps = true,
            SkipEnvironmentCleanup = true,
        },
    });
    // TODO: Handle 'response' of type EnvironmentOperation
}
catch (ApiException<RestoreEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RestoreEnvironmentOperationRequest](src/MicrosoftDynamicsNav/Requests/Environments/RestoreEnvironmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[RestoreEnvironmentError](src/MicrosoftDynamicsNav/Errors/RestoreEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionDeploymentStatusApi

> Source: [ExtensionDeploymentStatusApi](src/MicrosoftDynamicsNav/Api/ExtensionDeploymentStatusApi.cs)

<details>
<summary><code>Task&lt;CompaniesApiExtensionDeploymentStatusResponse&gt; ListExtensionDeploymentStatuses(ListExtensionDeploymentStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ongoing extension deployment statuses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionDeploymentStatusApi.ListExtensionDeploymentStatuses(
        new ListExtensionDeploymentStatusesRequest { CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type CompaniesApiExtensionDeploymentStatusResponse
}
catch (ApiException<ListExtensionDeploymentStatusesError> ex)
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

<code>[ListExtensionDeploymentStatusesRequest](src/MicrosoftDynamicsNav/Requests/ExtensionDeploymentStatusApi/ListExtensionDeploymentStatusesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiExtensionDeploymentStatusResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiExtensionDeploymentStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListExtensionDeploymentStatusesError](src/MicrosoftDynamicsNav/Errors/ListExtensionDeploymentStatusesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionUploadApi

> Source: [ExtensionUploadApi](src/MicrosoftDynamicsNav/Api/ExtensionUploadApi.cs)

<details>
<summary><code>Task&lt;ExtensionUpload&gt; CreateExtensionUpload(CreateExtensionUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an extension upload record for uploading a per-tenant extension.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionUploadApi.CreateExtensionUpload(new CreateExtensionUploadRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ExtensionUploadCreate { Schedule = Schedule1.CurrentVersion, SchemaSyncMode = SchemaSyncMode1.Add },
    });
    // TODO: Handle 'response' of type ExtensionUpload
}
catch (ApiException<CreateExtensionUploadError> ex)
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

<code>[CreateExtensionUploadRequest](src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/CreateExtensionUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionUpload](src/MicrosoftDynamicsNav/Models/ExtensionUpload.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateExtensionUploadError](src/MicrosoftDynamicsNav/Errors/CreateExtensionUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task InstallUploadedExtension(InstallUploadedExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the installation of a previously uploaded per-tenant extension.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionUploadApi.InstallUploadedExtension(new InstallUploadedExtensionRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionUploadId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<InstallUploadedExtensionError> ex)
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

<code>[InstallUploadedExtensionRequest](src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/InstallUploadedExtensionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[InstallUploadedExtensionError](src/MicrosoftDynamicsNav/Errors/InstallUploadedExtensionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UploadExtensionFile(UploadExtensionFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads the extension file content to the extension upload record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionUploadApi.UploadExtensionFile(new UploadExtensionFileRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionUploadId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = Array.Empty<byte>(),
    });
}
catch (ApiException<UploadExtensionFileError> ex)
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

<code>[UploadExtensionFileRequest](src/MicrosoftDynamicsNav/Requests/ExtensionUploadApi/UploadExtensionFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UploadExtensionFileError](src/MicrosoftDynamicsNav/Errors/UploadExtensionFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionsApi

> Source: [ExtensionsApi](src/MicrosoftDynamicsNav/Api/ExtensionsApi.cs)

<details>
<summary><code>Task InstallExtension(InstallExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs a published extension on the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionsApi.InstallExtension(new InstallExtensionRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<InstallExtensionError> ex)
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

<code>[InstallExtensionRequest](src/MicrosoftDynamicsNav/Requests/ExtensionsApi/InstallExtensionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[InstallExtensionError](src/MicrosoftDynamicsNav/Errors/InstallExtensionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiExtensionsResponse&gt; ListExtensions(ListExtensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of extensions published to the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionsApi.ListExtensions(new ListExtensionsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiExtensionsResponse
}
catch (ApiException<ListExtensionsError> ex)
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

<code>[ListExtensionsRequest](src/MicrosoftDynamicsNav/Requests/ExtensionsApi/ListExtensionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiExtensionsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiExtensionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListExtensionsError](src/MicrosoftDynamicsNav/Errors/ListExtensionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UninstallAndDeleteExtensionData(UninstallAndDeleteExtensionDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionsApi.UninstallAndDeleteExtensionData(new UninstallAndDeleteExtensionDataRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<UninstallAndDeleteExtensionDataError> ex)
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

<code>[UninstallAndDeleteExtensionDataRequest](src/MicrosoftDynamicsNav/Requests/ExtensionsApi/UninstallAndDeleteExtensionDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UninstallAndDeleteExtensionDataError](src/MicrosoftDynamicsNav/Errors/UninstallAndDeleteExtensionDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UninstallExtension(UninstallExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls an extension from the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionsApi.UninstallExtension(new UninstallExtensionRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<UninstallExtensionError> ex)
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

<code>[UninstallExtensionRequest](src/MicrosoftDynamicsNav/Requests/ExtensionsApi/UninstallExtensionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UninstallExtensionError](src/MicrosoftDynamicsNav/Errors/UninstallExtensionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnpublishExtension(UnpublishExtensionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unpublishes an uninstalled extension from the tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionsApi.UnpublishExtension(new UnpublishExtensionRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<UnpublishExtensionError> ex)
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

<code>[UnpublishExtensionRequest](src/MicrosoftDynamicsNav/Requests/ExtensionsApi/UnpublishExtensionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UnpublishExtensionError](src/MicrosoftDynamicsNav/Errors/UnpublishExtensionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Features

> Source: [Features](src/MicrosoftDynamicsNav/Api/Features.cs)

<details>
<summary><code>Task ActivateFeature(ActivateFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the specified feature.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Features.ActivateFeature(new ActivateFeatureRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        FeatureId = "500123",
        Body = new CompaniesApiFeaturesApiMicrosoftNavActivateRequest
        {
            UpdateInBackground = true,
            StartDateTime = DateTimeOffset.Parse("2026-01-15T10:30:00Z"),
        },
    });
}
catch (ApiException<ActivateFeatureError> ex)
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

<code>[ActivateFeatureRequest](src/MicrosoftDynamicsNav/Requests/Features/ActivateFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ActivateFeatureError](src/MicrosoftDynamicsNav/Errors/ActivateFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeactivateFeature(DeactivateFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivates the specified feature.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Features.DeactivateFeature(new DeactivateFeatureRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        FeatureId = "500123",
    });
}
catch (ApiException<DeactivateFeatureError> ex)
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

<code>[DeactivateFeatureRequest](src/MicrosoftDynamicsNav/Requests/Features/DeactivateFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeactivateFeatureError](src/MicrosoftDynamicsNav/Errors/DeactivateFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiFeaturesResponse&gt; ListFeatures(ListFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of features available in feature management.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Features.ListFeatures(new ListFeaturesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiFeaturesResponse
}
catch (ApiException<ListFeaturesError> ex)
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

<code>[ListFeaturesRequest](src/MicrosoftDynamicsNav/Requests/Features/ListFeaturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiFeaturesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiFeaturesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListFeaturesError](src/MicrosoftDynamicsNav/Errors/ListFeaturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ItemCategories

> Source: [ItemCategories](src/MicrosoftDynamicsNav/Api/ItemCategories.cs)

<details>
<summary><code>Task&lt;CompaniesApiItemCategoriesResponse&gt; ListItemCategories(ListItemCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of item category objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ItemCategories.ListItemCategories(new ListItemCategoriesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiItemCategoriesResponse
}
catch (ApiException<ListItemCategoriesError> ex)
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

<code>[ListItemCategoriesRequest](src/MicrosoftDynamicsNav/Requests/ItemCategories/ListItemCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiItemCategoriesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiItemCategoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListItemCategoriesError](src/MicrosoftDynamicsNav/Errors/ListItemCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/MicrosoftDynamicsNav/Api/Items.cs)

<details>
<summary><code>Task&lt;Item&gt; CreateItem(CreateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new item object in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.CreateItem(new CreateItemRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ItemCreate { DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<CreateItemError> ex)
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

<code>[CreateItemRequest](src/MicrosoftDynamicsNav/Requests/Items/CreateItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/MicrosoftDynamicsNav/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateItemError](src/MicrosoftDynamicsNav/Errors/CreateItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteItem(DeleteItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an item by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Items.DeleteItem(new DeleteItemRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ItemId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteItemError> ex)
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

<code>[DeleteItemRequest](src/MicrosoftDynamicsNav/Requests/Items/DeleteItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteItemError](src/MicrosoftDynamicsNav/Errors/DeleteItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Item&gt; GetItem(GetItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific item by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.GetItem(new GetItemRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ItemId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<GetItemError> ex)
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

<code>[GetItemRequest](src/MicrosoftDynamicsNav/Requests/Items/GetItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/MicrosoftDynamicsNav/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetItemError](src/MicrosoftDynamicsNav/Errors/GetItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiItemsResponse&gt; ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of item objects from the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.ListItems(new ListItemsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiItemsResponse
}
catch (ApiException<ListItemsError> ex)
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

<code>[ListItemsRequest](src/MicrosoftDynamicsNav/Requests/Items/ListItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiItemsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListItemsError](src/MicrosoftDynamicsNav/Errors/ListItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Item&gt; UpdateItem(UpdateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing item object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.UpdateItem(new UpdateItemRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ItemId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new ItemUpdate(),
    });
    // TODO: Handle 'response' of type Item
}
catch (ApiException<UpdateItemError> ex)
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

<code>[UpdateItemRequest](src/MicrosoftDynamicsNav/Requests/Items/UpdateItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](src/MicrosoftDynamicsNav/Models/Item.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateItemError](src/MicrosoftDynamicsNav/Errors/UpdateItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Journals

> Source: [Journals](src/MicrosoftDynamicsNav/Api/Journals.cs)

<details>
<summary><code>Task&lt;Journal&gt; CreateJournal(CreateJournalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new journal in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Journals.CreateJournal(new CreateJournalRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new JournalCreate { Code = "some example string", DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type Journal
}
catch (ApiException<CreateJournalError> ex)
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

<code>[CreateJournalRequest](src/MicrosoftDynamicsNav/Requests/Journals/CreateJournalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Journal](src/MicrosoftDynamicsNav/Models/Journal.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateJournalError](src/MicrosoftDynamicsNav/Errors/CreateJournalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiJournalsApiJournalLinesResponse&gt; ListJournalLines(ListJournalLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of journal line objects for a specific journal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Journals.ListJournalLines(new ListJournalLinesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        JournalId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiJournalsApiJournalLinesResponse
}
catch (ApiException<ListJournalLinesError> ex)
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

<code>[ListJournalLinesRequest](src/MicrosoftDynamicsNav/Requests/Journals/ListJournalLinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiJournalsApiJournalLinesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiJournalsApiJournalLinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListJournalLinesError](src/MicrosoftDynamicsNav/Errors/ListJournalLinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiJournalsResponse&gt; ListJournals(ListJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of journal objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Journals.ListJournals(new ListJournalsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiJournalsResponse
}
catch (ApiException<ListJournalsError> ex)
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

<code>[ListJournalsRequest](src/MicrosoftDynamicsNav/Requests/Journals/ListJournalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiJournalsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiJournalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListJournalsError](src/MicrosoftDynamicsNav/Errors/ListJournalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/MicrosoftDynamicsNav/Api/Notifications.cs)

<details>
<summary><code>Task&lt;NotificationRecipient&gt; AddNotificationRecipient(AddNotificationRecipientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new notification recipient for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Notifications.AddNotificationRecipient(new AddNotificationRecipientRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new NotificationRecipient
        {
            Id = Guid.Parse("abc123"),
            Name = "Example Title",
            Email = "user@example.com",
        },
    });
    // TODO: Handle 'response' of type NotificationRecipient
}
catch (ApiException<AddNotificationRecipientError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterNotificationsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddNotificationRecipientRequest](src/MicrosoftDynamicsNav/Requests/Notifications/AddNotificationRecipientRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationRecipient](src/MicrosoftDynamicsNav/Models/NotificationRecipient.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[AddNotificationRecipientError](src/MicrosoftDynamicsNav/Errors/AddNotificationRecipientError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationsEnvironmentsNotificationsResponse&gt; ListNotificationRecipients(ListNotificationRecipientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of notification recipients for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Notifications.ListNotificationRecipients(new ListNotificationRecipientsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationsEnvironmentsNotificationsResponse
}
catch (ApiException<ListNotificationRecipientsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterNotificationsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterNotificationsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListNotificationRecipientsRequest](src/MicrosoftDynamicsNav/Requests/Notifications/ListNotificationRecipientsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsNotificationsResponse](src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsNotificationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListNotificationRecipientsError](src/MicrosoftDynamicsNav/Errors/ListNotificationRecipientsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethods

> Source: [PaymentMethods](src/MicrosoftDynamicsNav/Api/PaymentMethods.cs)

<details>
<summary><code>Task&lt;CompaniesApiPaymentMethodsResponse&gt; ListPaymentMethods(ListPaymentMethodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment method objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentMethods.ListPaymentMethods(new ListPaymentMethodsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPaymentMethodsResponse
}
catch (ApiException<ListPaymentMethodsError> ex)
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

<code>[ListPaymentMethodsRequest](src/MicrosoftDynamicsNav/Requests/PaymentMethods/ListPaymentMethodsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPaymentMethodsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPaymentMethodsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPaymentMethodsError](src/MicrosoftDynamicsNav/Errors/ListPaymentMethodsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](src/MicrosoftDynamicsNav/Api/PaymentTerms.cs)

<details>
<summary><code>Task&lt;CompaniesApiPaymentTermsResponse&gt; ListPaymentTerms(ListPaymentTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment terms objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PaymentTerms.ListPaymentTerms(new ListPaymentTermsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPaymentTermsResponse
}
catch (ApiException<ListPaymentTermsError> ex)
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

<code>[ListPaymentTermsRequest](src/MicrosoftDynamicsNav/Requests/PaymentTerms/ListPaymentTermsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPaymentTermsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPaymentTermsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPaymentTermsError](src/MicrosoftDynamicsNav/Errors/ListPaymentTermsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PermissionSets

> Source: [PermissionSets](src/MicrosoftDynamicsNav/Api/PermissionSets.cs)

<details>
<summary><code>Task&lt;UserPermission&gt; CreateUserPermission(CreateUserPermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a permission set to the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PermissionSets.CreateUserPermission(new CreateUserPermissionRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        UserId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new CompaniesApiUsersApiUserPermissionsRequest { RoleId = "500123" },
    });
    // TODO: Handle 'response' of type UserPermission
}
catch (ApiException<CreateUserPermissionError> ex)
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

<code>[CreateUserPermissionRequest](src/MicrosoftDynamicsNav/Requests/PermissionSets/CreateUserPermissionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPermission](src/MicrosoftDynamicsNav/Models/UserPermission.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateUserPermissionError](src/MicrosoftDynamicsNav/Errors/CreateUserPermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiPermissionSetsResponse&gt; ListPermissionSets(ListPermissionSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of available permission sets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PermissionSets.ListPermissionSets(new ListPermissionSetsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPermissionSetsResponse
}
catch (ApiException<ListPermissionSetsError> ex)
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

<code>[ListPermissionSetsRequest](src/MicrosoftDynamicsNav/Requests/PermissionSets/ListPermissionSetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPermissionSetsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPermissionSetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPermissionSetsError](src/MicrosoftDynamicsNav/Errors/ListPermissionSetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiUsersApiUserPermissionsResponse&gt; ListUserPermissions(ListUserPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permission sets assigned to the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PermissionSets.ListUserPermissions(new ListUserPermissionsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        UserId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiUsersApiUserPermissionsResponse
}
catch (ApiException<ListUserPermissionsError> ex)
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

<code>[ListUserPermissionsRequest](src/MicrosoftDynamicsNav/Requests/PermissionSets/ListUserPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiUsersApiUserPermissionsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiUsersApiUserPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListUserPermissionsError](src/MicrosoftDynamicsNav/Errors/ListUserPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](src/MicrosoftDynamicsNav/Api/Profiles.cs)

<details>
<summary><code>Task&lt;CompaniesApiProfilesResponse&gt; ListProfiles(ListProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of user profiles.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profiles.ListProfiles(new ListProfilesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiProfilesResponse
}
catch (ApiException<ListProfilesError> ex)
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

<code>[ListProfilesRequest](src/MicrosoftDynamicsNav/Requests/Profiles/ListProfilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiProfilesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiProfilesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListProfilesError](src/MicrosoftDynamicsNav/Errors/ListProfilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseInvoices

> Source: [PurchaseInvoices](src/MicrosoftDynamicsNav/Api/PurchaseInvoices.cs)

<details>
<summary><code>Task&lt;PurchaseInvoice&gt; CreatePurchaseInvoice(CreatePurchaseInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new purchase invoice in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseInvoices.CreatePurchaseInvoice(new CreatePurchaseInvoiceRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new PurchaseInvoiceCreate(),
    });
    // TODO: Handle 'response' of type PurchaseInvoice
}
catch (ApiException<CreatePurchaseInvoiceError> ex)
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

<code>[CreatePurchaseInvoiceRequest](src/MicrosoftDynamicsNav/Requests/PurchaseInvoices/CreatePurchaseInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseInvoice](src/MicrosoftDynamicsNav/Models/PurchaseInvoice.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreatePurchaseInvoiceError](src/MicrosoftDynamicsNav/Errors/CreatePurchaseInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiPurchaseInvoicesResponse&gt; ListPurchaseInvoices(ListPurchaseInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase invoice objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseInvoices.ListPurchaseInvoices(new ListPurchaseInvoicesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPurchaseInvoicesResponse
}
catch (ApiException<ListPurchaseInvoicesError> ex)
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

<code>[ListPurchaseInvoicesRequest](src/MicrosoftDynamicsNav/Requests/PurchaseInvoices/ListPurchaseInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseInvoicesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPurchaseInvoicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPurchaseInvoicesError](src/MicrosoftDynamicsNav/Errors/ListPurchaseInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrders

> Source: [PurchaseOrders](src/MicrosoftDynamicsNav/Api/PurchaseOrders.cs)

<details>
<summary><code>Task&lt;PurchaseOrder&gt; CreatePurchaseOrder(CreatePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new purchase order in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrders.CreatePurchaseOrder(new CreatePurchaseOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new PurchaseOrderCreate(),
    });
    // TODO: Handle 'response' of type PurchaseOrder
}
catch (ApiException<CreatePurchaseOrderError> ex)
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

<code>[CreatePurchaseOrderRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/CreatePurchaseOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreatePurchaseOrderError](src/MicrosoftDynamicsNav/Errors/CreatePurchaseOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePurchaseOrder(DeletePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a purchase order by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PurchaseOrders.DeletePurchaseOrder(new DeletePurchaseOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PurchaseOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeletePurchaseOrderError> ex)
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

<code>[DeletePurchaseOrderRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/DeletePurchaseOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeletePurchaseOrderError](src/MicrosoftDynamicsNav/Errors/DeletePurchaseOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PurchaseOrder&gt; GetPurchaseOrder(GetPurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific purchase order by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrders.GetPurchaseOrder(new GetPurchaseOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PurchaseOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PurchaseOrder
}
catch (ApiException<GetPurchaseOrderError> ex)
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

<code>[GetPurchaseOrderRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/GetPurchaseOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetPurchaseOrderError](src/MicrosoftDynamicsNav/Errors/GetPurchaseOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse&gt; ListPurchaseOrderLines(ListPurchaseOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase order line items.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrders.ListPurchaseOrderLines(new ListPurchaseOrderLinesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PurchaseOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
}
catch (ApiException<ListPurchaseOrderLinesError> ex)
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

<code>[ListPurchaseOrderLinesRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/ListPurchaseOrderLinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPurchaseOrderLinesError](src/MicrosoftDynamicsNav/Errors/ListPurchaseOrderLinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiPurchaseOrdersResponse&gt; ListPurchaseOrders(ListPurchaseOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase order objects from the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrders.ListPurchaseOrders(new ListPurchaseOrdersRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiPurchaseOrdersResponse
}
catch (ApiException<ListPurchaseOrdersError> ex)
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

<code>[ListPurchaseOrdersRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/ListPurchaseOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseOrdersResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiPurchaseOrdersResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListPurchaseOrdersError](src/MicrosoftDynamicsNav/Errors/ListPurchaseOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PurchaseOrder&gt; UpdatePurchaseOrder(UpdatePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing purchase order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PurchaseOrders.UpdatePurchaseOrder(new UpdatePurchaseOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        PurchaseOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new PurchaseOrderUpdate(),
    });
    // TODO: Handle 'response' of type PurchaseOrder
}
catch (ApiException<UpdatePurchaseOrderError> ex)
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

<code>[UpdatePurchaseOrderRequest](src/MicrosoftDynamicsNav/Requests/PurchaseOrders/UpdatePurchaseOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdatePurchaseOrderError](src/MicrosoftDynamicsNav/Errors/UpdatePurchaseOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SalesInvoices

> Source: [SalesInvoices](src/MicrosoftDynamicsNav/Api/SalesInvoices.cs)

<details>
<summary><code>Task&lt;SalesInvoice&gt; CreateSalesInvoice(CreateSalesInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new sales invoice in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesInvoices.CreateSalesInvoice(new CreateSalesInvoiceRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new SalesInvoiceCreate(),
    });
    // TODO: Handle 'response' of type SalesInvoice
}
catch (ApiException<CreateSalesInvoiceError> ex)
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

<code>[CreateSalesInvoiceRequest](src/MicrosoftDynamicsNav/Requests/SalesInvoices/CreateSalesInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesInvoice](src/MicrosoftDynamicsNav/Models/SalesInvoice.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateSalesInvoiceError](src/MicrosoftDynamicsNav/Errors/CreateSalesInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiSalesInvoicesResponse&gt; ListSalesInvoices(ListSalesInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales invoice objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesInvoices.ListSalesInvoices(new ListSalesInvoicesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiSalesInvoicesResponse
}
catch (ApiException<ListSalesInvoicesError> ex)
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

<code>[ListSalesInvoicesRequest](src/MicrosoftDynamicsNav/Requests/SalesInvoices/ListSalesInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesInvoicesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiSalesInvoicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListSalesInvoicesError](src/MicrosoftDynamicsNav/Errors/ListSalesInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SalesOrders

> Source: [SalesOrders](src/MicrosoftDynamicsNav/Api/SalesOrders.cs)

<details>
<summary><code>Task&lt;SalesOrder&gt; CreateSalesOrder(CreateSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new sales order in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesOrders.CreateSalesOrder(new CreateSalesOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new SalesOrderCreate(),
    });
    // TODO: Handle 'response' of type SalesOrder
}
catch (ApiException<CreateSalesOrderError> ex)
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

<code>[CreateSalesOrderRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/CreateSalesOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](src/MicrosoftDynamicsNav/Models/SalesOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateSalesOrderError](src/MicrosoftDynamicsNav/Errors/CreateSalesOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSalesOrder(DeleteSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sales order by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SalesOrders.DeleteSalesOrder(new DeleteSalesOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SalesOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteSalesOrderError> ex)
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

<code>[DeleteSalesOrderRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/DeleteSalesOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteSalesOrderError](src/MicrosoftDynamicsNav/Errors/DeleteSalesOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SalesOrder&gt; GetSalesOrder(GetSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific sales order by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesOrders.GetSalesOrder(new GetSalesOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SalesOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type SalesOrder
}
catch (ApiException<GetSalesOrderError> ex)
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

<code>[GetSalesOrderRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/GetSalesOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](src/MicrosoftDynamicsNav/Models/SalesOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetSalesOrderError](src/MicrosoftDynamicsNav/Errors/GetSalesOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiSalesOrdersApiSalesOrderLinesResponse&gt; ListSalesOrderLines(ListSalesOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales order line items.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesOrders.ListSalesOrderLines(new ListSalesOrderLinesRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SalesOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
}
catch (ApiException<ListSalesOrderLinesError> ex)
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

<code>[ListSalesOrderLinesRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/ListSalesOrderLinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiSalesOrdersApiSalesOrderLinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListSalesOrderLinesError](src/MicrosoftDynamicsNav/Errors/ListSalesOrderLinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiSalesOrdersResponse&gt; ListSalesOrders(ListSalesOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales order objects from the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesOrders.ListSalesOrders(new ListSalesOrdersRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiSalesOrdersResponse
}
catch (ApiException<ListSalesOrdersError> ex)
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

<code>[ListSalesOrdersRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/ListSalesOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesOrdersResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiSalesOrdersResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListSalesOrdersError](src/MicrosoftDynamicsNav/Errors/ListSalesOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SalesOrder&gt; UpdateSalesOrder(UpdateSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing sales order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SalesOrders.UpdateSalesOrder(new UpdateSalesOrderRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SalesOrderId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new SalesOrderUpdate(),
    });
    // TODO: Handle 'response' of type SalesOrder
}
catch (ApiException<UpdateSalesOrderError> ex)
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

<code>[UpdateSalesOrderRequest](src/MicrosoftDynamicsNav/Requests/SalesOrders/UpdateSalesOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](src/MicrosoftDynamicsNav/Models/SalesOrder.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateSalesOrderError](src/MicrosoftDynamicsNav/Errors/UpdateSalesOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduledJobs

> Source: [ScheduledJobs](src/MicrosoftDynamicsNav/Api/ScheduledJobs.cs)

<details>
<summary><code>Task&lt;CompaniesApiScheduledJobsResponse&gt; ListScheduledJobs(ListScheduledJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled background jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduledJobs.ListScheduledJobs(new ListScheduledJobsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiScheduledJobsResponse
}
catch (ApiException<ListScheduledJobsError> ex)
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

<code>[ListScheduledJobsRequest](src/MicrosoftDynamicsNav/Requests/ScheduledJobs/ListScheduledJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiScheduledJobsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiScheduledJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListScheduledJobsError](src/MicrosoftDynamicsNav/Errors/ListScheduledJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SecurityGroups

> Source: [SecurityGroups](src/MicrosoftDynamicsNav/Api/SecurityGroups.cs)

<details>
<summary><code>Task&lt;CompaniesApiSecurityGroupsResponse&gt; ListSecurityGroups(ListSecurityGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of security groups.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SecurityGroups.ListSecurityGroups(new ListSecurityGroupsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiSecurityGroupsResponse
}
catch (ApiException<ListSecurityGroupsError> ex)
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

<code>[ListSecurityGroupsRequest](src/MicrosoftDynamicsNav/Requests/SecurityGroups/ListSecurityGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSecurityGroupsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiSecurityGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListSecurityGroupsError](src/MicrosoftDynamicsNav/Errors/ListSecurityGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/MicrosoftDynamicsNav/Api/Storage.cs)

<details>
<summary><code>Task&lt;EnvironmentsUsedstorageResponse&gt; GetAllEnvironmentsStorage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns storage usage information for all environments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.GetAllEnvironmentsStorage();
    // TODO: Handle 'response' of type EnvironmentsUsedstorageResponse
}
catch (ApiException<GetAllEnvironmentsStorageError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterStorageApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentsUsedstorageResponse](src/MicrosoftDynamicsNav/Models/EnvironmentsUsedstorageResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetAllEnvironmentsStorageError](src/MicrosoftDynamicsNav/Errors/GetAllEnvironmentsStorageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsedStorage&gt; GetEnvironmentStorage(GetEnvironmentStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns used storage information for the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.GetEnvironmentStorage(new GetEnvironmentStorageRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type UsedStorage
}
catch (ApiException<GetEnvironmentStorageError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterStorageApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEnvironmentStorageRequest](src/MicrosoftDynamicsNav/Requests/Storage/GetEnvironmentStorageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsedStorage](src/MicrosoftDynamicsNav/Models/UsedStorage.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentStorageError](src/MicrosoftDynamicsNav/Errors/GetEnvironmentStorageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Quotas&gt; GetQuotas(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the different types of quotas and their limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.GetQuotas();
    // TODO: Handle 'response' of type Quotas
}
catch (ApiException<GetQuotasError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterStorageApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Quotas](src/MicrosoftDynamicsNav/Models/Quotas.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetQuotasError](src/MicrosoftDynamicsNav/Errors/GetQuotasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SupportSettingsApi

> Source: [SupportSettingsApi](src/MicrosoftDynamicsNav/Api/SupportSettingsApi.cs)

<details>
<summary><code>Task&lt;SupportSettings&gt; GetSupportSettings(GetSupportSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the support contact settings for the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportSettingsApi.GetSupportSettings(new GetSupportSettingsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type SupportSettings
}
catch (ApiException<GetSupportSettingsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSupportSettingsRequest](src/MicrosoftDynamicsNav/Requests/SupportSettingsApi/GetSupportSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportSettings](src/MicrosoftDynamicsNav/Models/SupportSettings.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetSupportSettingsError](src/MicrosoftDynamicsNav/Errors/GetSupportSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateManagement

> Source: [UpdateManagement](src/MicrosoftDynamicsNav/Api/UpdateManagement.cs)

<details>
<summary><code>Task&lt;ScheduledUpgrade&gt; GetScheduledUpgrade(GetScheduledUpgradeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about any pending scheduled upgrade for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UpdateManagement.GetScheduledUpgrade(new GetScheduledUpgradeRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
    });
    // TODO: Handle 'response' of type ScheduledUpgrade
}
catch (ApiException<GetScheduledUpgradeError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScheduledUpgradeRequest](src/MicrosoftDynamicsNav/Requests/UpdateManagement/GetScheduledUpgradeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledUpgrade](src/MicrosoftDynamicsNav/Models/ScheduledUpgrade.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetScheduledUpgradeError](src/MicrosoftDynamicsNav/Errors/GetScheduledUpgradeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetUpdateSettings(SetUpdateSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the update window and other update-related settings for the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.UpdateManagement.SetUpdateSettings(new SetUpdateSettingsRequest
    {
        ApplicationFamily = "some example string",
        EnvironmentName = "some example string",
        Body = new UpdateSettings(),
    });
}
catch (ApiException<SetUpdateSettingsError> ex)
{
    if (ex.Error.TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetUpdateSettingsRequest](src/MicrosoftDynamicsNav/Requests/UpdateManagement/SetUpdateSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[SetUpdateSettingsError](src/MicrosoftDynamicsNav/Errors/SetUpdateSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/MicrosoftDynamicsNav/Api/Users.cs)

<details>
<summary><code>Task GetNewUsersFromOffice365(GetNewUsersFromOffice365Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.GetNewUsersFromOffice365(new GetNewUsersFromOffice365Request
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<GetNewUsersFromOffice365Error> ex)
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

<code>[GetNewUsersFromOffice365Request](src/MicrosoftDynamicsNav/Requests/Users/GetNewUsersFromOffice365Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetNewUsersFromOffice365Error](src/MicrosoftDynamicsNav/Errors/GetNewUsersFromOffice365Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetNewUsersFromOffice365Async(GetNewUsersFromOffice365AsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for tracking progress. Not supported with S2S authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.GetNewUsersFromOffice365Async(new GetNewUsersFromOffice365AsyncRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<GetNewUsersFromOffice365AsyncError> ex)
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

<code>[GetNewUsersFromOffice365AsyncRequest](src/MicrosoftDynamicsNav/Requests/Users/GetNewUsersFromOffice365AsyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetNewUsersFromOffice365AsyncError](src/MicrosoftDynamicsNav/Errors/GetNewUsersFromOffice365AsyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific user by user security ID.

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
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        UserId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetUserError> ex)
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

<code>[GetUserRequest](src/MicrosoftDynamicsNav/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/MicrosoftDynamicsNav/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/MicrosoftDynamicsNav/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiUsersResponse&gt; ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Business Central users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListUsers(new ListUsersRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiUsersResponse
}
catch (ApiException<ListUsersError> ex)
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

<code>[ListUsersRequest](src/MicrosoftDynamicsNav/Requests/Users/ListUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiUsersResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiUsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/MicrosoftDynamicsNav/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates properties of a Business Central user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        UserId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new UserUpdate { State = State.Enabled, ExpiryDate = DateTimeOffset.Parse("2026-01-15T10:30:00Z") },
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<UpdateUserError> ex)
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

<code>[UpdateUserRequest](src/MicrosoftDynamicsNav/Requests/Users/UpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/MicrosoftDynamicsNav/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/MicrosoftDynamicsNav/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VendorPayments

> Source: [VendorPayments](src/MicrosoftDynamicsNav/Api/VendorPayments.cs)

<details>
<summary><code>Task&lt;CompaniesApiVendorPaymentJournalsResponse&gt; ListVendorPaymentJournals(ListVendorPaymentJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of vendor payment journal objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.VendorPayments.ListVendorPaymentJournals(new ListVendorPaymentJournalsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiVendorPaymentJournalsResponse
}
catch (ApiException<ListVendorPaymentJournalsError> ex)
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

<code>[ListVendorPaymentJournalsRequest](src/MicrosoftDynamicsNav/Requests/VendorPayments/ListVendorPaymentJournalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiVendorPaymentJournalsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiVendorPaymentJournalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListVendorPaymentJournalsError](src/MicrosoftDynamicsNav/Errors/ListVendorPaymentJournalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/MicrosoftDynamicsNav/Api/Vendors.cs)

<details>
<summary><code>Task&lt;Vendor&gt; CreateVendor(CreateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new vendor object in the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.CreateVendor(new CreateVendorRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new VendorCreate { DisplayName = "some example string" },
    });
    // TODO: Handle 'response' of type Vendor
}
catch (ApiException<CreateVendorError> ex)
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

<code>[CreateVendorRequest](src/MicrosoftDynamicsNav/Requests/Vendors/CreateVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](src/MicrosoftDynamicsNav/Models/Vendor.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[CreateVendorError](src/MicrosoftDynamicsNav/Errors/CreateVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVendor(DeleteVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a vendor by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vendors.DeleteVendor(new DeleteVendorRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        VendorId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteVendorError> ex)
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

<code>[DeleteVendorRequest](src/MicrosoftDynamicsNav/Requests/Vendors/DeleteVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[DeleteVendorError](src/MicrosoftDynamicsNav/Errors/DeleteVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Vendor&gt; GetVendor(GetVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific vendor by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.GetVendor(new GetVendorRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        VendorId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Vendor
}
catch (ApiException<GetVendorError> ex)
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

<code>[GetVendorRequest](src/MicrosoftDynamicsNav/Requests/Vendors/GetVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](src/MicrosoftDynamicsNav/Models/Vendor.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[GetVendorError](src/MicrosoftDynamicsNav/Errors/GetVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesApiVendorsResponse&gt; ListVendors(ListVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of vendor objects from the specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.ListVendors(new ListVendorsRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompaniesApiVendorsResponse
}
catch (ApiException<ListVendorsError> ex)
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

<code>[ListVendorsRequest](src/MicrosoftDynamicsNav/Requests/Vendors/ListVendorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiVendorsResponse](src/MicrosoftDynamicsNav/Models/CompaniesApiVendorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[ListVendorsError](src/MicrosoftDynamicsNav/Errors/ListVendorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Vendor&gt; UpdateVendor(UpdateVendorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing vendor object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Vendors.UpdateVendor(new UpdateVendorRequest
    {
        CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        VendorId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        IfMatch = "some example string",
        Body = new VendorUpdate(),
    });
    // TODO: Handle 'response' of type Vendor
}
catch (ApiException<UpdateVendorError> ex)
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

<code>[UpdateVendorRequest](src/MicrosoftDynamicsNav/Requests/Vendors/UpdateVendorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](src/MicrosoftDynamicsNav/Models/Vendor.cs)</code>

**OnError**: <code>[ApiException](src/MicrosoftDynamicsNav/Core/Exceptions/ApiException.cs)&lt;[UpdateVendorError](src/MicrosoftDynamicsNav/Errors/UpdateVendorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

