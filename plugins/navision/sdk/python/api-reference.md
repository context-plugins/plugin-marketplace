# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [MicrosoftDynamicsNavClient](microsoft_dynamics_nav/client.py)

## Accounts

> Source: [Accounts](microsoft_dynamics_nav/apis/accounts.py)

<details>
<summary><code>def get_account(company_id: UUID, account_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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

**Sync**

```python
try:
    response = client.accounts.get_account(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.get_account(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>account_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](microsoft_dynamics_nav/models/account.py)</code> -- Successfully retrieved account

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetAccountErrorBody](microsoft_dynamics_nav/errors/get_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_accounts(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiAccountsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.accounts.list_accounts(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.list_accounts(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiAccountsResponse](microsoft_dynamics_nav/models/companies_api_accounts_response.py)</code> -- Successfully retrieved accounts

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAccountsErrorBody](microsoft_dynamics_nav/errors/list_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_general_ledger_entries(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiGeneralLedgerEntriesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.accounts.list_general_ledger_entries(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiGeneralLedgerEntriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeneralLedgerEntriesErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.list_general_ledger_entries(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiGeneralLedgerEntriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGeneralLedgerEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiGeneralLedgerEntriesResponse](microsoft_dynamics_nav/models/companies_api_general_ledger_entries_response.py)</code> -- Successfully retrieved general ledger entries

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListGeneralLedgerEntriesErrorBody](microsoft_dynamics_nav/errors/list_general_ledger_entries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AppManagement

> Source: [AppManagement](microsoft_dynamics_nav/apis/app_management.py)

<details>
<summary><code>def install_app(environment_name: str, app_id: UUID, body: AppInstallRequest | AppInstallRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.app_management.install_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        AppInstallRequest(
            target_version="example_value",
            allow_preview_version=True,
            accept_isv_eula=True,
            allow_dependency_update=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallAppErrorBody
```

**Async**

```python
try:
    response = await async_client.app_management.install_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        AppInstallRequest(
            target_version="example_value",
            allow_preview_version=True,
            accept_isv_eula=True,
            allow_dependency_update=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallAppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>app_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[AppInstallRequest](microsoft_dynamics_nav/models/app_install_request.py) \| [AppInstallRequestDict](microsoft_dynamics_nav/models/app_install_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- App installation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[InstallAppErrorBody](microsoft_dynamics_nav/errors/install_app_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_installed_apps(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsAppsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.app_management.list_installed_apps(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsAppsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInstalledAppsErrorBody
```

**Async**

```python
try:
    response = await async_client.app_management.list_installed_apps(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsAppsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInstalledAppsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsAppsResponse](microsoft_dynamics_nav/models/applications_environments_apps_response.py)</code> -- Successfully retrieved installed apps

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListInstalledAppsErrorBody](microsoft_dynamics_nav/errors/list_installed_apps_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_app(environment_name: str, app_id: UUID, *, application_family: str = "BusinessCentral", body: ApplicationsEnvironmentsAppsAppIdUninstallRequest | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.app_management.uninstall_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        application_family="some example string",
        body=ApplicationsEnvironmentsAppsAppIdUninstallRequest(delete_data=True),
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallAppErrorBody
```

**Async**

```python
try:
    response = await async_client.app_management.uninstall_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        application_family="some example string",
        body=ApplicationsEnvironmentsAppsAppIdUninstallRequest(delete_data=True),
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallAppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>app_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>body</code> | <code>[ApplicationsEnvironmentsAppsAppIdUninstallRequest](microsoft_dynamics_nav/models/applications_environments_apps_app_id_uninstall_request.py) \| [ApplicationsEnvironmentsAppsAppIdUninstallRequestDict](microsoft_dynamics_nav/models/applications_environments_apps_app_id_uninstall_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- App uninstallation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UninstallAppErrorBody](microsoft_dynamics_nav/errors/uninstall_app_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_app(environment_name: str, app_id: UUID, body: AppUpdateRequest | AppUpdateRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.app_management.update_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        AppUpdateRequest(
            target_version="example_value",
            allow_preview_version=True,
            ignore_upgrade_window=True,
            allow_dependency_update=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAppErrorBody
```

**Async**

```python
try:
    response = await async_client.app_management.update_app(
        "some example string",
        UUID("00000000-0000-0000-0000-000000000000"),
        AppUpdateRequest(
            target_version="example_value",
            allow_preview_version=True,
            ignore_upgrade_window=True,
            allow_dependency_update=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAppErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>app_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[AppUpdateRequest](microsoft_dynamics_nav/models/app_update_request.py) \| [AppUpdateRequestDict](microsoft_dynamics_nav/models/app_update_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- App update scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateAppErrorBody](microsoft_dynamics_nav/errors/update_app_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AvailableApplications

> Source: [AvailableApplications](microsoft_dynamics_nav/apis/available_applications.py)

<details>
<summary><code>def list_available_countries(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsAvailableCountriesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.available_applications.list_available_countries(application_family="some example string")
    # TODO: Handle 'response' of type ApplicationsAvailableCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAvailableCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.available_applications.list_available_countries(
        application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsAvailableCountriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAvailableCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsAvailableCountriesResponse](microsoft_dynamics_nav/models/applications_available_countries_response.py)</code> -- Successfully retrieved available countries

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAvailableCountriesErrorBody](microsoft_dynamics_nav/errors/list_available_countries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAvailable](microsoft_dynamics_nav/models/error_response_business_central_administration_center_available.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_available_versions(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsAvailableApplicationVersionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.available_applications.list_available_versions(application_family="some example string")
    # TODO: Handle 'response' of type ApplicationsAvailableApplicationVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAvailableVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.available_applications.list_available_versions(
        application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsAvailableApplicationVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAvailableVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsAvailableApplicationVersionsResponse](microsoft_dynamics_nav/models/applications_available_application_versions_response.py)</code> -- Successfully retrieved available versions

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAvailableVersionsErrorBody](microsoft_dynamics_nav/errors/list_available_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAvailable](microsoft_dynamics_nav/models/error_response_business_central_administration_center_available.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](microsoft_dynamics_nav/apis/companies.py)

<details>
<summary><code>def create_automation_company(company_id: UUID, body: AutomationCompanyCreate | AutomationCompanyCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> AutomationCompany</code></summary>

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

**Sync**

```python
try:
    response = client.companies.create_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"),
        AutomationCompanyCreate(name="Example Title", display_name="example_value", business_profile_id="500123"),
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutomationCompanyErrorBody
```

**Async**

```python
try:
    response = await async_client.companies.create_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"),
        AutomationCompanyCreate(name="Example Title", display_name="example_value", business_profile_id="500123"),
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutomationCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[AutomationCompanyCreate](microsoft_dynamics_nav/models/automation_company_create.py) \| [AutomationCompanyCreateDict](microsoft_dynamics_nav/models/automation_company_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](microsoft_dynamics_nav/models/automation_company.py)</code> -- Company created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateAutomationCompanyErrorBody](microsoft_dynamics_nav/errors/create_automation_company_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.companies.delete_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomationCompanyErrorBody
```

**Async**

```python
try:
    await async_client.companies.delete_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomationCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>automation_company_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteAutomationCompanyErrorBody](microsoft_dynamics_nav/errors/delete_automation_company_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> AutomationCompany</code></summary>

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

**Sync**

```python
try:
    response = client.companies.get_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationCompanyErrorBody
```

**Async**

```python
try:
    response = await async_client.companies.get_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAutomationCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>automation_company_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](microsoft_dynamics_nav/models/automation_company.py)</code> -- Successfully retrieved automation company

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetAutomationCompanyErrorBody](microsoft_dynamics_nav/errors/get_automation_company_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automation_companies(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiAutomationCompaniesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.companies.list_automation_companies(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiAutomationCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies.list_automation_companies(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiAutomationCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomationCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiAutomationCompaniesResponse](microsoft_dynamics_nav/models/companies_api_automation_companies_response.py)</code> -- Successfully retrieved automation companies

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAutomationCompaniesErrorBody](microsoft_dynamics_nav/errors/list_automation_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.companies.list_companies()
    # TODO: Handle 'response' of type CompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies.list_companies()
    # TODO: Handle 'response' of type CompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to return targeted results (Business Central API/OData filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesResponse](microsoft_dynamics_nav/models/companies_response.py)</code> -- Successfully retrieved companies

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListCompaniesErrorBody](microsoft_dynamics_nav/errors/list_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_automation_company(company_id: UUID, automation_company_id: UUID, if_match: str, body: AutomationCompanyUpdate | AutomationCompanyUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> AutomationCompany</code></summary>

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

**Sync**

```python
try:
    response = client.companies.update_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        AutomationCompanyUpdate(name="Example Title", display_name="example_value"),
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomationCompanyErrorBody
```

**Async**

```python
try:
    response = await async_client.companies.update_automation_company(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        AutomationCompanyUpdate(name="Example Title", display_name="example_value"),
    )
    # TODO: Handle 'response' of type AutomationCompany
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomationCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>automation_company_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[AutomationCompanyUpdate](microsoft_dynamics_nav/models/automation_company_update.py) \| [AutomationCompanyUpdateDict](microsoft_dynamics_nav/models/automation_company_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationCompany](microsoft_dynamics_nav/models/automation_company.py)</code> -- Company updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateAutomationCompanyErrorBody](microsoft_dynamics_nav/errors/update_automation_company_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ConfigurationPackages

> Source: [ConfigurationPackages](microsoft_dynamics_nav/apis/configuration_packages.py)

<details>
<summary><code>def apply_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.configuration_packages.apply_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApplyConfigurationPackageErrorBody
```

**Async**

```python
try:
    await async_client.configuration_packages.apply_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApplyConfigurationPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>package_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ApplyConfigurationPackageErrorBody](microsoft_dynamics_nav/errors/apply_configuration_package_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_configuration_package(company_id: UUID, body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ConfigurationPackage</code></summary>

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

**Sync**

```python
try:
    response = client.configuration_packages.create_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"),
        CompaniesApiConfigurationPackagesRequest(code="example_value", package_name="example_value"),
    )
    # TODO: Handle 'response' of type ConfigurationPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateConfigurationPackageErrorBody
```

**Async**

```python
try:
    response = await async_client.configuration_packages.create_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"),
        CompaniesApiConfigurationPackagesRequest(code="example_value", package_name="example_value"),
    )
    # TODO: Handle 'response' of type ConfigurationPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateConfigurationPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[CompaniesApiConfigurationPackagesRequest](microsoft_dynamics_nav/models/companies_api_configuration_packages_request.py) \| [CompaniesApiConfigurationPackagesRequestDict](microsoft_dynamics_nav/models/companies_api_configuration_packages_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConfigurationPackage](microsoft_dynamics_nav/models/configuration_package.py)</code> -- Configuration package created

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateConfigurationPackageErrorBody](microsoft_dynamics_nav/errors/create_configuration_package_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.configuration_packages.import_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportConfigurationPackageErrorBody
```

**Async**

```python
try:
    await async_client.configuration_packages.import_configuration_package(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportConfigurationPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>package_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ImportConfigurationPackageErrorBody](microsoft_dynamics_nav/errors/import_configuration_package_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_configuration_packages(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiConfigurationPackagesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.configuration_packages.list_configuration_packages(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiConfigurationPackagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListConfigurationPackagesErrorBody
```

**Async**

```python
try:
    response = await async_client.configuration_packages.list_configuration_packages(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiConfigurationPackagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListConfigurationPackagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiConfigurationPackagesResponse](microsoft_dynamics_nav/models/companies_api_configuration_packages_response.py)</code> -- Successfully retrieved configuration packages

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListConfigurationPackagesErrorBody](microsoft_dynamics_nav/errors/list_configuration_packages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_configuration_package_file(company_id: UUID, package_id: UUID, code: str, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.configuration_packages.upload_configuration_package_file(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "example_value",
        "some example string",
        Path("path/to/file.bin"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadConfigurationPackageFileErrorBody
```

**Async**

```python
try:
    await async_client.configuration_packages.upload_configuration_package_file(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "example_value",
        "some example string",
        Path("path/to/file.bin"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadConfigurationPackageFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>package_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>code</code> | <code>str</code> | Value sent with the request. |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>FileInput</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UploadConfigurationPackageFileErrorBody](microsoft_dynamics_nav/errors/upload_configuration_package_file_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesRegions

> Source: [CountriesRegions](microsoft_dynamics_nav/apis/countries_regions.py)

<details>
<summary><code>def list_countries_regions(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiCountriesRegionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.countries_regions.list_countries_regions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCountriesRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCountriesRegionsErrorBody
```

**Async**

```python
try:
    response = await async_client.countries_regions.list_countries_regions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCountriesRegionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCountriesRegionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCountriesRegionsResponse](microsoft_dynamics_nav/models/companies_api_countries_regions_response.py)</code> -- Successfully retrieved countries/regions

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListCountriesRegionsErrorBody](microsoft_dynamics_nav/errors/list_countries_regions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CurrencyApi

> Source: [CurrencyApi](microsoft_dynamics_nav/apis/currency_api.py)

<details>
<summary><code>def list_currencies(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiCurrenciesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.currency_api.list_currencies(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCurrenciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCurrenciesErrorBody
```

**Async**

```python
try:
    response = await async_client.currency_api.list_currencies(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCurrenciesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCurrenciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCurrenciesResponse](microsoft_dynamics_nav/models/companies_api_currencies_response.py)</code> -- Successfully retrieved currencies

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListCurrenciesErrorBody](microsoft_dynamics_nav/errors/list_currencies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPayments

> Source: [CustomerPayments](microsoft_dynamics_nav/apis/customer_payments.py)

<details>
<summary><code>def list_customer_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiCustomerPaymentJournalsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.customer_payments.list_customer_payment_journals(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCustomerPaymentJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerPaymentJournalsErrorBody
```

**Async**

```python
try:
    response = await async_client.customer_payments.list_customer_payment_journals(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiCustomerPaymentJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerPaymentJournalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCustomerPaymentJournalsResponse](microsoft_dynamics_nav/models/companies_api_customer_payment_journals_response.py)</code> -- Successfully retrieved customer payment journals

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListCustomerPaymentJournalsErrorBody](microsoft_dynamics_nav/errors/list_customer_payment_journals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](microsoft_dynamics_nav/apis/customers.py)

<details>
<summary><code>def create_customer(company_id: UUID, body: CustomerCreate | CustomerCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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

**Sync**

```python
try:
    response = client.customers.create_customer(
        UUID("00000000-0000-0000-0000-000000000000"), CustomerCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer(
        UUID("00000000-0000-0000-0000-000000000000"), CustomerCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[CustomerCreate](microsoft_dynamics_nav/models/customer_create.py) \| [CustomerCreateDict](microsoft_dynamics_nav/models/customer_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](microsoft_dynamics_nav/models/customer.py)</code> -- Customer created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateCustomerErrorBody](microsoft_dynamics_nav/errors/create_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer(company_id: UUID, customer_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.customers.delete_customer(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerErrorBody
```

**Async**

```python
try:
    await async_client.customers.delete_customer(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>customer_id</code> | <code>UUID</code> | The unique identifier of the customer |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteCustomerErrorBody](microsoft_dynamics_nav/errors/delete_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer(company_id: UUID, customer_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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

**Sync**

```python
try:
    response = client.customers.get_customer(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>customer_id</code> | <code>UUID</code> | The unique identifier of the customer |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](microsoft_dynamics_nav/models/customer.py)</code> -- Successfully retrieved customer

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetCustomerErrorBody](microsoft_dynamics_nav/errors/get_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customers(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiCustomersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.customers.list_customers(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customers(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiCustomersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiCustomersResponse](microsoft_dynamics_nav/models/companies_api_customers_response.py)</code> -- Successfully retrieved customers

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListCustomersErrorBody](microsoft_dynamics_nav/errors/list_customers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer(company_id: UUID, customer_id: UUID, if_match: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> Customer</code></summary>

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

**Sync**

```python
try:
    response = client.customers.update_customer(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        CustomerUpdate(),
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        CustomerUpdate(),
    )
    # TODO: Handle 'response' of type Customer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>customer_id</code> | <code>UUID</code> | The unique identifier of the customer |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[CustomerUpdate](microsoft_dynamics_nav/models/customer_update.py) \| [CustomerUpdateDict](microsoft_dynamics_nav/models/customer_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](microsoft_dynamics_nav/models/customer.py)</code> -- Customer updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateCustomerErrorBody](microsoft_dynamics_nav/errors/update_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](microsoft_dynamics_nav/apis/dimensions.py)

<details>
<summary><code>def list_dimensions(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiDimensionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.dimensions.list_dimensions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiDimensionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDimensionsErrorBody
```

**Async**

```python
try:
    response = await async_client.dimensions.list_dimensions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiDimensionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDimensionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiDimensionsResponse](microsoft_dynamics_nav/models/companies_api_dimensions_response.py)</code> -- Successfully retrieved dimensions

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListDimensionsErrorBody](microsoft_dynamics_nav/errors/list_dimensions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Employees

> Source: [Employees](microsoft_dynamics_nav/apis/employees.py)

<details>
<summary><code>def list_employees(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiEmployeesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.employees.list_employees(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiEmployeesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmployeesErrorBody
```

**Async**

```python
try:
    response = await async_client.employees.list_employees(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiEmployeesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEmployeesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiEmployeesResponse](microsoft_dynamics_nav/models/companies_api_employees_response.py)</code> -- Successfully retrieved employees

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListEmployeesErrorBody](microsoft_dynamics_nav/errors/list_employees_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentOperations

> Source: [EnvironmentOperations](microsoft_dynamics_nav/apis/environment_operations.py)

<details>
<summary><code>def list_all_environment_operations(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsOperationsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.environment_operations.list_all_environment_operations(application_family="some example string")
    # TODO: Handle 'response' of type ApplicationsEnvironmentsOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllEnvironmentOperationsErrorBody
```

**Async**

```python
try:
    response = await async_client.environment_operations.list_all_environment_operations(
        application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllEnvironmentOperationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsOperationsResponse](microsoft_dynamics_nav/models/applications_environments_operations_response.py)</code> -- Successfully retrieved operations

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAllEnvironmentOperationsErrorBody](microsoft_dynamics_nav/errors/list_all_environment_operations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironment](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_environment_operations(environment_name: str, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentsOperationsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.environment_operations.list_environment_operations("some example string")
    # TODO: Handle 'response' of type EnvironmentsOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvironmentOperationsErrorBody
```

**Async**

```python
try:
    response = await async_client.environment_operations.list_environment_operations("some example string")
    # TODO: Handle 'response' of type EnvironmentsOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvironmentOperationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentsOperationsResponse](microsoft_dynamics_nav/models/environments_operations_response.py)</code> -- Successfully retrieved operations

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListEnvironmentOperationsErrorBody](microsoft_dynamics_nav/errors/list_environment_operations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironment](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentSettingsApi

> Source: [EnvironmentSettingsApi](microsoft_dynamics_nav/apis/environment_settings_api.py)

<details>
<summary><code>def get_environment_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentSettings</code></summary>

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

**Sync**

```python
try:
    response = client.environment_settings_api.get_environment_settings(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type EnvironmentSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.environment_settings_api.get_environment_settings(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type EnvironmentSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentSettings](microsoft_dynamics_nav/models/environment_settings.py)</code> -- Successfully retrieved environment settings

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetEnvironmentSettingsErrorBody](microsoft_dynamics_nav/errors/get_environment_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment_settings.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_app_insights_key(environment_name: str, body: ApplicationsEnvironmentsSettingsAppInsightsKeyRequest | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.environment_settings_api.set_app_insights_key(
        "some example string",
        ApplicationsEnvironmentsSettingsAppInsightsKeyRequest(key="example_value"),
        application_family="some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetAppInsightsKeyErrorBody
```

**Async**

```python
try:
    await async_client.environment_settings_api.set_app_insights_key(
        "some example string",
        ApplicationsEnvironmentsSettingsAppInsightsKeyRequest(key="example_value"),
        application_family="some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetAppInsightsKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsSettingsAppInsightsKeyRequest](microsoft_dynamics_nav/models/applications_environments_settings_app_insights_key_request.py) \| [ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict](microsoft_dynamics_nav/models/applications_environments_settings_app_insights_key_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[SetAppInsightsKeyErrorBody](microsoft_dynamics_nav/errors/set_app_insights_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment_settings.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](microsoft_dynamics_nav/apis/environments.py)

<details>
<summary><code>def copy_environment(environment_name: str, body: CopyEnvironmentRequest | CopyEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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

**Sync**

```python
try:
    response = client.environments.copy_environment(
        "some example string",
        CopyEnvironmentRequest(
            environment_name="example_value", type_=Type1BusinessCentralAdministrationCenterEnvironmentsApi.PRODUCTION
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CopyEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.copy_environment(
        "some example string",
        CopyEnvironmentRequest(
            environment_name="example_value", type_=Type1BusinessCentralAdministrationCenterEnvironmentsApi.PRODUCTION
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CopyEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[CopyEnvironmentRequest](microsoft_dynamics_nav/models/copy_environment_request.py) \| [CopyEnvironmentRequestDict](microsoft_dynamics_nav/models/copy_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](microsoft_dynamics_nav/models/environment_model.py)</code> -- Copy initiated (API v2.8 and earlier)

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CopyEnvironmentErrorBody](microsoft_dynamics_nav/errors/copy_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_environment(environment_name: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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

**Sync**

```python
try:
    response = client.environments.create_environment(
        "some example string",
        CreateEnvironmentRequest(
            environment_type=EnvironmentType.PRODUCTION,
            country_code="example_value",
            ring_name="example_value",
            application_version="example_value",
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.create_environment(
        "some example string",
        CreateEnvironmentRequest(
            environment_type=EnvironmentType.PRODUCTION,
            country_code="example_value",
            ring_name="example_value",
            application_version="example_value",
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[CreateEnvironmentRequest](microsoft_dynamics_nav/models/create_environment_request.py) \| [CreateEnvironmentRequestDict](microsoft_dynamics_nav/models/create_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](microsoft_dynamics_nav/models/environment_model.py)</code> -- Environment creation initiated (API v2.8 and earlier)

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateEnvironmentErrorBody](microsoft_dynamics_nav/errors/create_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 409 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.environments.delete_environment("some example string", application_family="some example string")
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.delete_environment(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- Delete operation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteEnvironmentErrorBody](microsoft_dynamics_nav/errors/delete_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_available_restore_periods(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsAvailableRestorePeriodsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.environments.get_available_restore_periods(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAvailableRestorePeriodsErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.get_available_restore_periods(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAvailableRestorePeriodsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](microsoft_dynamics_nav/models/applications_environments_available_restore_periods_response.py)</code> -- Successfully retrieved restore periods

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetAvailableRestorePeriodsErrorBody](microsoft_dynamics_nav/errors/get_available_restore_periods_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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

**Sync**

```python
try:
    response = client.environments.get_environment("some example string", application_family="some example string")
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.get_environment(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](microsoft_dynamics_nav/models/environment_model.py)</code> -- Successfully retrieved environment

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetEnvironmentErrorBody](microsoft_dynamics_nav/errors/get_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_all_environments(*, request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.environments.list_all_environments()
    # TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllEnvironmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.list_all_environments()
    # TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsResponse](microsoft_dynamics_nav/models/applications_environments_response.py)</code> -- Successfully retrieved environments

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListAllEnvironmentsErrorBody](microsoft_dynamics_nav/errors/list_all_environments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_environments(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.environments.list_environments(application_family="some example string")
    # TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvironmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.list_environments(application_family="some example string")
    # TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsResponse](microsoft_dynamics_nav/models/applications_environments_response.py)</code> -- Successfully retrieved environments

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListEnvironmentsErrorBody](microsoft_dynamics_nav/errors/list_environments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recover_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.environments.recover_environment("some example string", application_family="some example string")
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecoverEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.recover_environment(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecoverEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- Recovery operation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[RecoverEnvironmentErrorBody](microsoft_dynamics_nav/errors/recover_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rename_environment(environment_name: str, body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.environments.rename_environment(
        "some example string",
        ApplicationsEnvironmentsRenameRequest(new_environment_name="example_value"),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RenameEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.rename_environment(
        "some example string",
        ApplicationsEnvironmentsRenameRequest(new_environment_name="example_value"),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RenameEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsRenameRequest](microsoft_dynamics_nav/models/applications_environments_rename_request.py) \| [ApplicationsEnvironmentsRenameRequestDict](microsoft_dynamics_nav/models/applications_environments_rename_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- Rename operation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[RenameEnvironmentErrorBody](microsoft_dynamics_nav/errors/rename_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_environment(environment_name: str, body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> EnvironmentOperation</code></summary>

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

**Sync**

```python
try:
    response = client.environments.restore_environment(
        "some example string",
        RestoreEnvironmentRequest(
            environment_name="example_value",
            environment_type=EnvironmentType1.PRODUCTION,
            point_in_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc),
            skip_installing_ptes=True,
            skip_installing_third_party_global_apps=True,
            skip_environment_cleanup=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.restore_environment(
        "some example string",
        RestoreEnvironmentRequest(
            environment_name="example_value",
            environment_type=EnvironmentType1.PRODUCTION,
            point_in_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc),
            skip_installing_ptes=True,
            skip_installing_third_party_global_apps=True,
            skip_environment_cleanup=True,
        ),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type EnvironmentOperation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[RestoreEnvironmentRequest](microsoft_dynamics_nav/models/restore_environment_request.py) \| [RestoreEnvironmentRequestDict](microsoft_dynamics_nav/models/restore_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentOperation](microsoft_dynamics_nav/models/environment_operation.py)</code> -- Restore operation scheduled

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[RestoreEnvironmentErrorBody](microsoft_dynamics_nav/errors/restore_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionDeploymentStatusApi

> Source: [ExtensionDeploymentStatusApi](microsoft_dynamics_nav/apis/extension_deployment_status_api.py)

<details>
<summary><code>def list_extension_deployment_statuses(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiExtensionDeploymentStatusResponse</code></summary>

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

**Sync**

```python
try:
    response = client.extension_deployment_status_api.list_extension_deployment_statuses(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiExtensionDeploymentStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionDeploymentStatusesErrorBody
```

**Async**

```python
try:
    response = await async_client.extension_deployment_status_api.list_extension_deployment_statuses(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiExtensionDeploymentStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionDeploymentStatusesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiExtensionDeploymentStatusResponse](microsoft_dynamics_nav/models/companies_api_extension_deployment_status_response.py)</code> -- Successfully retrieved deployment statuses

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListExtensionDeploymentStatusesErrorBody](microsoft_dynamics_nav/errors/list_extension_deployment_statuses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionUploadApi

> Source: [ExtensionUploadApi](microsoft_dynamics_nav/apis/extension_upload_api.py)

<details>
<summary><code>def create_extension_upload(company_id: UUID, body: ExtensionUploadCreate | ExtensionUploadCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ExtensionUpload</code></summary>

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

**Sync**

```python
try:
    response = client.extension_upload_api.create_extension_upload(
        UUID("00000000-0000-0000-0000-000000000000"),
        ExtensionUploadCreate(schedule=Schedule1.CURRENT_VERSION, schema_sync_mode=SchemaSyncMode1.ADD),
    )
    # TODO: Handle 'response' of type ExtensionUpload
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExtensionUploadErrorBody
```

**Async**

```python
try:
    response = await async_client.extension_upload_api.create_extension_upload(
        UUID("00000000-0000-0000-0000-000000000000"),
        ExtensionUploadCreate(schedule=Schedule1.CURRENT_VERSION, schema_sync_mode=SchemaSyncMode1.ADD),
    )
    # TODO: Handle 'response' of type ExtensionUpload
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExtensionUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[ExtensionUploadCreate](microsoft_dynamics_nav/models/extension_upload_create.py) \| [ExtensionUploadCreateDict](microsoft_dynamics_nav/models/extension_upload_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionUpload](microsoft_dynamics_nav/models/extension_upload.py)</code> -- Extension upload record created

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateExtensionUploadErrorBody](microsoft_dynamics_nav/errors/create_extension_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def install_uploaded_extension(company_id: UUID, extension_upload_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extension_upload_api.install_uploaded_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallUploadedExtensionErrorBody
```

**Async**

```python
try:
    await async_client.extension_upload_api.install_uploaded_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallUploadedExtensionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_upload_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[InstallUploadedExtensionErrorBody](microsoft_dynamics_nav/errors/install_uploaded_extension_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_extension_file(company_id: UUID, extension_upload_id: UUID, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extension_upload_api.upload_extension_file(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        Path("path/to/file.bin"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadExtensionFileErrorBody
```

**Async**

```python
try:
    await async_client.extension_upload_api.upload_extension_file(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        Path("path/to/file.bin"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadExtensionFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_upload_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>FileInput</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UploadExtensionFileErrorBody](microsoft_dynamics_nav/errors/upload_extension_file_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Extensions

> Source: [Extensions](microsoft_dynamics_nav/apis/extensions.py)

<details>
<summary><code>def install_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extensions.install_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallExtensionErrorBody
```

**Async**

```python
try:
    await async_client.extensions.install_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InstallExtensionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_id</code> | <code>UUID</code> | The package ID of the extension |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[InstallExtensionErrorBody](microsoft_dynamics_nav/errors/install_extension_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_extensions(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiExtensionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.extensions.list_extensions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiExtensionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionsErrorBody
```

**Async**

```python
try:
    response = await async_client.extensions.list_extensions(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiExtensionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiExtensionsResponse](microsoft_dynamics_nav/models/companies_api_extensions_response.py)</code> -- Successfully retrieved extensions

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListExtensionsErrorBody](microsoft_dynamics_nav/errors/list_extensions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_and_delete_extension_data(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extensions.uninstall_and_delete_extension_data(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallAndDeleteExtensionDataErrorBody
```

**Async**

```python
try:
    await async_client.extensions.uninstall_and_delete_extension_data(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallAndDeleteExtensionDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_id</code> | <code>UUID</code> | The package ID of the extension |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UninstallAndDeleteExtensionDataErrorBody](microsoft_dynamics_nav/errors/uninstall_and_delete_extension_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extensions.uninstall_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallExtensionErrorBody
```

**Async**

```python
try:
    await async_client.extensions.uninstall_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UninstallExtensionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_id</code> | <code>UUID</code> | The package ID of the extension |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UninstallExtensionErrorBody](microsoft_dynamics_nav/errors/uninstall_extension_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.extensions.unpublish_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishExtensionErrorBody
```

**Async**

```python
try:
    await async_client.extensions.unpublish_extension(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishExtensionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>extension_id</code> | <code>UUID</code> | The package ID of the extension |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UnpublishExtensionErrorBody](microsoft_dynamics_nav/errors/unpublish_extension_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Features

> Source: [Features](microsoft_dynamics_nav/apis/features.py)

<details>
<summary><code>def activate_feature(company_id: UUID, feature_id: str, *, body: CompaniesApiFeaturesApiMicrosoftNavActivateRequest | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.features.activate_feature(
        UUID("00000000-0000-0000-0000-000000000000"),
        "500123",
        body=CompaniesApiFeaturesApiMicrosoftNavActivateRequest(
            update_in_background=True, start_date_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateFeatureErrorBody
```

**Async**

```python
try:
    await async_client.features.activate_feature(
        UUID("00000000-0000-0000-0000-000000000000"),
        "500123",
        body=CompaniesApiFeaturesApiMicrosoftNavActivateRequest(
            update_in_background=True, start_date_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)
        ),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>feature_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CompaniesApiFeaturesApiMicrosoftNavActivateRequest](microsoft_dynamics_nav/models/companies_api_features_api_microsoft_nav_activate_request.py) \| [CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict](microsoft_dynamics_nav/models/companies_api_features_api_microsoft_nav_activate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ActivateFeatureErrorBody](microsoft_dynamics_nav/errors/activate_feature_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deactivate_feature(company_id: UUID, feature_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.features.deactivate_feature(UUID("00000000-0000-0000-0000-000000000000"), "500123")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeactivateFeatureErrorBody
```

**Async**

```python
try:
    await async_client.features.deactivate_feature(UUID("00000000-0000-0000-0000-000000000000"), "500123")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeactivateFeatureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>feature_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeactivateFeatureErrorBody](microsoft_dynamics_nav/errors/deactivate_feature_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_features(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiFeaturesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.features.list_features(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFeaturesErrorBody
```

**Async**

```python
try:
    response = await async_client.features.list_features(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiFeaturesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFeaturesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiFeaturesResponse](microsoft_dynamics_nav/models/companies_api_features_response.py)</code> -- Successfully retrieved features

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListFeaturesErrorBody](microsoft_dynamics_nav/errors/list_features_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ItemCategories

> Source: [ItemCategories](microsoft_dynamics_nav/apis/item_categories.py)

<details>
<summary><code>def list_item_categories(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiItemCategoriesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.item_categories.list_item_categories(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiItemCategoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemCategoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.item_categories.list_item_categories(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiItemCategoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiItemCategoriesResponse](microsoft_dynamics_nav/models/companies_api_item_categories_response.py)</code> -- Successfully retrieved item categories

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListItemCategoriesErrorBody](microsoft_dynamics_nav/errors/list_item_categories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](microsoft_dynamics_nav/apis/items.py)

<details>
<summary><code>def create_item(company_id: UUID, body: ItemCreate | ItemCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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

**Sync**

```python
try:
    response = client.items.create_item(
        UUID("00000000-0000-0000-0000-000000000000"), ItemCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.create_item(
        UUID("00000000-0000-0000-0000-000000000000"), ItemCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[ItemCreate](microsoft_dynamics_nav/models/item_create.py) \| [ItemCreateDict](microsoft_dynamics_nav/models/item_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](microsoft_dynamics_nav/models/item.py)</code> -- Item created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateItemErrorBody](microsoft_dynamics_nav/errors/create_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_item(company_id: UUID, item_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.items.delete_item(UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteItemErrorBody
```

**Async**

```python
try:
    await async_client.items.delete_item(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>item_id</code> | <code>UUID</code> | The unique identifier of the item |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteItemErrorBody](microsoft_dynamics_nav/errors/delete_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_item(company_id: UUID, item_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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

**Sync**

```python
try:
    response = client.items.get_item(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.get_item(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>item_id</code> | <code>UUID</code> | The unique identifier of the item |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](microsoft_dynamics_nav/models/item.py)</code> -- Successfully retrieved item

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetItemErrorBody](microsoft_dynamics_nav/errors/get_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_items(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiItemsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.items.list_items(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.items.list_items(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiItemsResponse](microsoft_dynamics_nav/models/companies_api_items_response.py)</code> -- Successfully retrieved items

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListItemsErrorBody](microsoft_dynamics_nav/errors/list_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_item(company_id: UUID, item_id: UUID, if_match: str, body: ItemUpdate | ItemUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> Item</code></summary>

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

**Sync**

```python
try:
    response = client.items.update_item(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ItemUpdate(),
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemErrorBody
```

**Async**

```python
try:
    response = await async_client.items.update_item(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ItemUpdate(),
    )
    # TODO: Handle 'response' of type Item
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>item_id</code> | <code>UUID</code> | The unique identifier of the item |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[ItemUpdate](microsoft_dynamics_nav/models/item_update.py) \| [ItemUpdateDict](microsoft_dynamics_nav/models/item_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Item](microsoft_dynamics_nav/models/item.py)</code> -- Item updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateItemErrorBody](microsoft_dynamics_nav/errors/update_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Journals

> Source: [Journals](microsoft_dynamics_nav/apis/journals.py)

<details>
<summary><code>def create_journal(company_id: UUID, body: JournalCreate | JournalCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Journal</code></summary>

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

**Sync**

```python
try:
    response = client.journals.create_journal(
        UUID("00000000-0000-0000-0000-000000000000"),
        JournalCreate(code="some example string", display_name="some example string"),
    )
    # TODO: Handle 'response' of type Journal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateJournalErrorBody
```

**Async**

```python
try:
    response = await async_client.journals.create_journal(
        UUID("00000000-0000-0000-0000-000000000000"),
        JournalCreate(code="some example string", display_name="some example string"),
    )
    # TODO: Handle 'response' of type Journal
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateJournalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[JournalCreate](microsoft_dynamics_nav/models/journal_create.py) \| [JournalCreateDict](microsoft_dynamics_nav/models/journal_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Journal](microsoft_dynamics_nav/models/journal.py)</code> -- Journal created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateJournalErrorBody](microsoft_dynamics_nav/errors/create_journal_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_journal_lines(company_id: UUID, journal_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiJournalsApiJournalLinesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.journals.list_journal_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiJournalsApiJournalLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJournalLinesErrorBody
```

**Async**

```python
try:
    response = await async_client.journals.list_journal_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiJournalsApiJournalLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJournalLinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>journal_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiJournalsApiJournalLinesResponse](microsoft_dynamics_nav/models/companies_api_journals_api_journal_lines_response.py)</code> -- Successfully retrieved journal lines

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListJournalLinesErrorBody](microsoft_dynamics_nav/errors/list_journal_lines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiJournalsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.journals.list_journals(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJournalsErrorBody
```

**Async**

```python
try:
    response = await async_client.journals.list_journals(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJournalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiJournalsResponse](microsoft_dynamics_nav/models/companies_api_journals_response.py)</code> -- Successfully retrieved journals

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListJournalsErrorBody](microsoft_dynamics_nav/errors/list_journals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](microsoft_dynamics_nav/apis/notifications.py)

<details>
<summary><code>def add_notification_recipient(environment_name: str, body: NotificationRecipient | NotificationRecipientDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> NotificationRecipient</code></summary>

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

**Sync**

```python
try:
    response = client.notifications.add_notification_recipient(
        "some example string",
        NotificationRecipient(id=UUID("abc123"), name="Example Title", email="user@example.com"),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type NotificationRecipient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddNotificationRecipientErrorBody
```

**Async**

```python
try:
    response = await async_client.notifications.add_notification_recipient(
        "some example string",
        NotificationRecipient(id=UUID("abc123"), name="Example Title", email="user@example.com"),
        application_family="some example string",
    )
    # TODO: Handle 'response' of type NotificationRecipient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddNotificationRecipientErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[NotificationRecipient](microsoft_dynamics_nav/models/notification_recipient.py) \| [NotificationRecipientDict](microsoft_dynamics_nav/models/notification_recipient.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationRecipient](microsoft_dynamics_nav/models/notification_recipient.py)</code> -- Notification recipient added

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[AddNotificationRecipientErrorBody](microsoft_dynamics_nav/errors/add_notification_recipient_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_notifications_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_notification_recipients(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApplicationsEnvironmentsNotificationsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.notifications.list_notification_recipients(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsNotificationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNotificationRecipientsErrorBody
```

**Async**

```python
try:
    response = await async_client.notifications.list_notification_recipients(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ApplicationsEnvironmentsNotificationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListNotificationRecipientsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationsEnvironmentsNotificationsResponse](microsoft_dynamics_nav/models/applications_environments_notifications_response.py)</code> -- Successfully retrieved notification recipients

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListNotificationRecipientsErrorBody](microsoft_dynamics_nav/errors/list_notification_recipients_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_notifications_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethods

> Source: [PaymentMethods](microsoft_dynamics_nav/apis/payment_methods.py)

<details>
<summary><code>def list_payment_methods(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPaymentMethodsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.payment_methods.list_payment_methods(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPaymentMethodsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentMethodsErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_methods.list_payment_methods(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPaymentMethodsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentMethodsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPaymentMethodsResponse](microsoft_dynamics_nav/models/companies_api_payment_methods_response.py)</code> -- Successfully retrieved payment methods

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPaymentMethodsErrorBody](microsoft_dynamics_nav/errors/list_payment_methods_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](microsoft_dynamics_nav/apis/payment_terms.py)

<details>
<summary><code>def list_payment_terms(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPaymentTermsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.payment_terms.list_payment_terms(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPaymentTermsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentTermsErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_terms.list_payment_terms(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPaymentTermsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentTermsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPaymentTermsResponse](microsoft_dynamics_nav/models/companies_api_payment_terms_response.py)</code> -- Successfully retrieved payment terms

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPaymentTermsErrorBody](microsoft_dynamics_nav/errors/list_payment_terms_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PermissionSets

> Source: [PermissionSets](microsoft_dynamics_nav/apis/permission_sets.py)

<details>
<summary><code>def create_user_permission(company_id: UUID, user_id: UUID, body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> UserPermission</code></summary>

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

**Sync**

```python
try:
    response = client.permission_sets.create_user_permission(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        CompaniesApiUsersApiUserPermissionsRequest(role_id="500123"),
    )
    # TODO: Handle 'response' of type UserPermission
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserPermissionErrorBody
```

**Async**

```python
try:
    response = await async_client.permission_sets.create_user_permission(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        CompaniesApiUsersApiUserPermissionsRequest(role_id="500123"),
    )
    # TODO: Handle 'response' of type UserPermission
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserPermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>user_id</code> | <code>UUID</code> | The user security ID |
| <code>body</code> | <code>[CompaniesApiUsersApiUserPermissionsRequest](microsoft_dynamics_nav/models/companies_api_users_api_user_permissions_request.py) \| [CompaniesApiUsersApiUserPermissionsRequestDict](microsoft_dynamics_nav/models/companies_api_users_api_user_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPermission](microsoft_dynamics_nav/models/user_permission.py)</code> -- Permission set assigned

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateUserPermissionErrorBody](microsoft_dynamics_nav/errors/create_user_permission_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_permission_sets(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPermissionSetsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.permission_sets.list_permission_sets(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPermissionSetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPermissionSetsErrorBody
```

**Async**

```python
try:
    response = await async_client.permission_sets.list_permission_sets(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPermissionSetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPermissionSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPermissionSetsResponse](microsoft_dynamics_nav/models/companies_api_permission_sets_response.py)</code> -- Successfully retrieved permission sets

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPermissionSetsErrorBody](microsoft_dynamics_nav/errors/list_permission_sets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_user_permissions(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiUsersApiUserPermissionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.permission_sets.list_user_permissions(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiUsersApiUserPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUserPermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.permission_sets.list_user_permissions(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiUsersApiUserPermissionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUserPermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>user_id</code> | <code>UUID</code> | The user security ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiUsersApiUserPermissionsResponse](microsoft_dynamics_nav/models/companies_api_users_api_user_permissions_response.py)</code> -- Successfully retrieved user permissions

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListUserPermissionsErrorBody](microsoft_dynamics_nav/errors/list_user_permissions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](microsoft_dynamics_nav/apis/profiles.py)

<details>
<summary><code>def list_profiles(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiProfilesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.profiles.list_profiles(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiProfilesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProfilesErrorBody
```

**Async**

```python
try:
    response = await async_client.profiles.list_profiles(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiProfilesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProfilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiProfilesResponse](microsoft_dynamics_nav/models/companies_api_profiles_response.py)</code> -- Successfully retrieved profiles

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListProfilesErrorBody](microsoft_dynamics_nav/errors/list_profiles_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseInvoices

> Source: [PurchaseInvoices](microsoft_dynamics_nav/apis/purchase_invoices.py)

<details>
<summary><code>def create_purchase_invoice(company_id: UUID, body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> PurchaseInvoice</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_invoices.create_purchase_invoice(
        UUID("00000000-0000-0000-0000-000000000000"), PurchaseInvoiceCreate()
    )
    # TODO: Handle 'response' of type PurchaseInvoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePurchaseInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_invoices.create_purchase_invoice(
        UUID("00000000-0000-0000-0000-000000000000"), PurchaseInvoiceCreate()
    )
    # TODO: Handle 'response' of type PurchaseInvoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePurchaseInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseInvoiceCreate](microsoft_dynamics_nav/models/purchase_invoice_create.py) \| [PurchaseInvoiceCreateDict](microsoft_dynamics_nav/models/purchase_invoice_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseInvoice](microsoft_dynamics_nav/models/purchase_invoice.py)</code> -- Purchase invoice created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreatePurchaseInvoiceErrorBody](microsoft_dynamics_nav/errors/create_purchase_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPurchaseInvoicesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_invoices.list_purchase_invoices(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPurchaseInvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_invoices.list_purchase_invoices(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPurchaseInvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseInvoicesResponse](microsoft_dynamics_nav/models/companies_api_purchase_invoices_response.py)</code> -- Successfully retrieved purchase invoices

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPurchaseInvoicesErrorBody](microsoft_dynamics_nav/errors/list_purchase_invoices_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrders

> Source: [PurchaseOrders](microsoft_dynamics_nav/apis/purchase_orders.py)

<details>
<summary><code>def create_purchase_order(company_id: UUID, body: PurchaseOrderCreate | PurchaseOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> PurchaseOrder</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_orders.create_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), PurchaseOrderCreate()
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePurchaseOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_orders.create_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), PurchaseOrderCreate()
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePurchaseOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseOrderCreate](microsoft_dynamics_nav/models/purchase_order_create.py) \| [PurchaseOrderCreateDict](microsoft_dynamics_nav/models/purchase_order_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](microsoft_dynamics_nav/models/purchase_order.py)</code> -- Purchase order created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreatePurchaseOrderErrorBody](microsoft_dynamics_nav/errors/create_purchase_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_purchase_order(company_id: UUID, purchase_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.purchase_orders.delete_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePurchaseOrderErrorBody
```

**Async**

```python
try:
    await async_client.purchase_orders.delete_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePurchaseOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>purchase_order_id</code> | <code>UUID</code> | The unique identifier of the purchase order |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeletePurchaseOrderErrorBody](microsoft_dynamics_nav/errors/delete_purchase_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_purchase_order(company_id: UUID, purchase_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PurchaseOrder</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_orders.get_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPurchaseOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_orders.get_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPurchaseOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>purchase_order_id</code> | <code>UUID</code> | The unique identifier of the purchase order |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](microsoft_dynamics_nav/models/purchase_order.py)</code> -- Successfully retrieved purchase order

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetPurchaseOrderErrorBody](microsoft_dynamics_nav/errors/get_purchase_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_order_lines(company_id: UUID, purchase_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_orders.list_purchase_order_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseOrderLinesErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_orders.list_purchase_order_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseOrderLinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>purchase_order_id</code> | <code>UUID</code> | The unique identifier of the purchase order |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](microsoft_dynamics_nav/models/companies_api_purchase_orders_api_purchase_order_lines_response.py)</code> -- Successfully retrieved purchase order lines

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPurchaseOrderLinesErrorBody](microsoft_dynamics_nav/errors/list_purchase_order_lines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiPurchaseOrdersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_orders.list_purchase_orders(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPurchaseOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_orders.list_purchase_orders(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiPurchaseOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPurchaseOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiPurchaseOrdersResponse](microsoft_dynamics_nav/models/companies_api_purchase_orders_response.py)</code> -- Successfully retrieved purchase orders

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListPurchaseOrdersErrorBody](microsoft_dynamics_nav/errors/list_purchase_orders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_purchase_order(company_id: UUID, purchase_order_id: UUID, if_match: str, body: PurchaseOrderUpdate | PurchaseOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> PurchaseOrder</code></summary>

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

**Sync**

```python
try:
    response = client.purchase_orders.update_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        PurchaseOrderUpdate(),
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePurchaseOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.purchase_orders.update_purchase_order(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        PurchaseOrderUpdate(),
    )
    # TODO: Handle 'response' of type PurchaseOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePurchaseOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>purchase_order_id</code> | <code>UUID</code> | The unique identifier of the purchase order |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[PurchaseOrderUpdate](microsoft_dynamics_nav/models/purchase_order_update.py) \| [PurchaseOrderUpdateDict](microsoft_dynamics_nav/models/purchase_order_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PurchaseOrder](microsoft_dynamics_nav/models/purchase_order.py)</code> -- Purchase order updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdatePurchaseOrderErrorBody](microsoft_dynamics_nav/errors/update_purchase_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SalesInvoices

> Source: [SalesInvoices](microsoft_dynamics_nav/apis/sales_invoices.py)

<details>
<summary><code>def create_sales_invoice(company_id: UUID, body: SalesInvoiceCreate | SalesInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> SalesInvoice</code></summary>

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

**Sync**

```python
try:
    response = client.sales_invoices.create_sales_invoice(
        UUID("00000000-0000-0000-0000-000000000000"), SalesInvoiceCreate()
    )
    # TODO: Handle 'response' of type SalesInvoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSalesInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_invoices.create_sales_invoice(
        UUID("00000000-0000-0000-0000-000000000000"), SalesInvoiceCreate()
    )
    # TODO: Handle 'response' of type SalesInvoice
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSalesInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesInvoiceCreate](microsoft_dynamics_nav/models/sales_invoice_create.py) \| [SalesInvoiceCreateDict](microsoft_dynamics_nav/models/sales_invoice_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesInvoice](microsoft_dynamics_nav/models/sales_invoice.py)</code> -- Sales invoice created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateSalesInvoiceErrorBody](microsoft_dynamics_nav/errors/create_sales_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiSalesInvoicesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sales_invoices.list_sales_invoices(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSalesInvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_invoices.list_sales_invoices(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSalesInvoicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesInvoicesResponse](microsoft_dynamics_nav/models/companies_api_sales_invoices_response.py)</code> -- Successfully retrieved sales invoices

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListSalesInvoicesErrorBody](microsoft_dynamics_nav/errors/list_sales_invoices_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SalesOrders

> Source: [SalesOrders](microsoft_dynamics_nav/apis/sales_orders.py)

<details>
<summary><code>def create_sales_order(company_id: UUID, body: SalesOrderCreate | SalesOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> SalesOrder</code></summary>

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

**Sync**

```python
try:
    response = client.sales_orders.create_sales_order(UUID("00000000-0000-0000-0000-000000000000"), SalesOrderCreate())
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSalesOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_orders.create_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"), SalesOrderCreate()
    )
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSalesOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesOrderCreate](microsoft_dynamics_nav/models/sales_order_create.py) \| [SalesOrderCreateDict](microsoft_dynamics_nav/models/sales_order_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](microsoft_dynamics_nav/models/sales_order.py)</code> -- Sales order created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateSalesOrderErrorBody](microsoft_dynamics_nav/errors/create_sales_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sales_order(company_id: UUID, sales_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.sales_orders.delete_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSalesOrderErrorBody
```

**Async**

```python
try:
    await async_client.sales_orders.delete_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSalesOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>sales_order_id</code> | <code>UUID</code> | The unique identifier of the sales order |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteSalesOrderErrorBody](microsoft_dynamics_nav/errors/delete_sales_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sales_order(company_id: UUID, sales_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SalesOrder</code></summary>

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

**Sync**

```python
try:
    response = client.sales_orders.get_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSalesOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_orders.get_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSalesOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>sales_order_id</code> | <code>UUID</code> | The unique identifier of the sales order |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](microsoft_dynamics_nav/models/sales_order.py)</code> -- Successfully retrieved sales order

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetSalesOrderErrorBody](microsoft_dynamics_nav/errors/get_sales_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_order_lines(company_id: UUID, sales_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiSalesOrdersApiSalesOrderLinesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sales_orders.list_sales_order_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesOrderLinesErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_orders.list_sales_order_lines(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesOrderLinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>sales_order_id</code> | <code>UUID</code> | The unique identifier of the sales order |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](microsoft_dynamics_nav/models/companies_api_sales_orders_api_sales_order_lines_response.py)</code> -- Successfully retrieved sales order lines

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListSalesOrderLinesErrorBody](microsoft_dynamics_nav/errors/list_sales_order_lines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiSalesOrdersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sales_orders.list_sales_orders(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSalesOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesOrdersErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_orders.list_sales_orders(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSalesOrdersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSalesOrdersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>expand</code> | <code>str \| None</code> | Related entities to expand inline<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSalesOrdersResponse](microsoft_dynamics_nav/models/companies_api_sales_orders_response.py)</code> -- Successfully retrieved sales orders

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListSalesOrdersErrorBody](microsoft_dynamics_nav/errors/list_sales_orders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_sales_order(company_id: UUID, sales_order_id: UUID, if_match: str, body: SalesOrderUpdate | SalesOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> SalesOrder</code></summary>

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

**Sync**

```python
try:
    response = client.sales_orders.update_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        SalesOrderUpdate(),
    )
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSalesOrderErrorBody
```

**Async**

```python
try:
    response = await async_client.sales_orders.update_sales_order(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        SalesOrderUpdate(),
    )
    # TODO: Handle 'response' of type SalesOrder
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSalesOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>sales_order_id</code> | <code>UUID</code> | The unique identifier of the sales order |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[SalesOrderUpdate](microsoft_dynamics_nav/models/sales_order_update.py) \| [SalesOrderUpdateDict](microsoft_dynamics_nav/models/sales_order_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SalesOrder](microsoft_dynamics_nav/models/sales_order.py)</code> -- Sales order updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateSalesOrderErrorBody](microsoft_dynamics_nav/errors/update_sales_order_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduledJobs

> Source: [ScheduledJobs](microsoft_dynamics_nav/apis/scheduled_jobs.py)

<details>
<summary><code>def list_scheduled_jobs(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiScheduledJobsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.scheduled_jobs.list_scheduled_jobs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiScheduledJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListScheduledJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.scheduled_jobs.list_scheduled_jobs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiScheduledJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListScheduledJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiScheduledJobsResponse](microsoft_dynamics_nav/models/companies_api_scheduled_jobs_response.py)</code> -- Successfully retrieved scheduled jobs

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListScheduledJobsErrorBody](microsoft_dynamics_nav/errors/list_scheduled_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SecurityGroups

> Source: [SecurityGroups](microsoft_dynamics_nav/apis/security_groups.py)

<details>
<summary><code>def list_security_groups(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiSecurityGroupsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.security_groups.list_security_groups(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSecurityGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSecurityGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.security_groups.list_security_groups(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiSecurityGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSecurityGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiSecurityGroupsResponse](microsoft_dynamics_nav/models/companies_api_security_groups_response.py)</code> -- Successfully retrieved security groups

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListSecurityGroupsErrorBody](microsoft_dynamics_nav/errors/list_security_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](microsoft_dynamics_nav/apis/storage.py)

<details>
<summary><code>def get_all_environments_storage(*, request_options: RequestOptionsOrDict | None = None) -> EnvironmentsUsedstorageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.storage.get_all_environments_storage()
    # TODO: Handle 'response' of type EnvironmentsUsedstorageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllEnvironmentsStorageErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.get_all_environments_storage()
    # TODO: Handle 'response' of type EnvironmentsUsedstorageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAllEnvironmentsStorageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentsUsedstorageResponse](microsoft_dynamics_nav/models/environments_usedstorage_response.py)</code> -- Successfully retrieved storage usage

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetAllEnvironmentsStorageErrorBody](microsoft_dynamics_nav/errors/get_all_environments_storage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment_storage(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> UsedStorage</code></summary>

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

**Sync**

```python
try:
    response = client.storage.get_environment_storage("some example string", application_family="some example string")
    # TODO: Handle 'response' of type UsedStorage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentStorageErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.get_environment_storage(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type UsedStorage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentStorageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsedStorage](microsoft_dynamics_nav/models/used_storage.py)</code> -- Successfully retrieved storage usage

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetEnvironmentStorageErrorBody](microsoft_dynamics_nav/errors/get_environment_storage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_quotas(*, request_options: RequestOptionsOrDict | None = None) -> Quotas</code></summary>

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

**Sync**

```python
try:
    response = client.storage.get_quotas()
    # TODO: Handle 'response' of type Quotas
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQuotasErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.get_quotas()
    # TODO: Handle 'response' of type Quotas
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQuotasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Quotas](microsoft_dynamics_nav/models/quotas.py)</code> -- Successfully retrieved quotas

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetQuotasErrorBody](microsoft_dynamics_nav/errors/get_quotas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SupportSettingsApi

> Source: [SupportSettingsApi](microsoft_dynamics_nav/apis/support_settings_api.py)

<details>
<summary><code>def get_support_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> SupportSettings</code></summary>

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

**Sync**

```python
try:
    response = client.support_settings_api.get_support_settings(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type SupportSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSupportSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.support_settings_api.get_support_settings(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type SupportSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSupportSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportSettings](microsoft_dynamics_nav/models/support_settings.py)</code> -- Successfully retrieved support settings

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetSupportSettingsErrorBody](microsoft_dynamics_nav/errors/get_support_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_support_settings_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateManagement

> Source: [UpdateManagement](microsoft_dynamics_nav/apis/update_management.py)

<details>
<summary><code>def get_scheduled_upgrade(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ScheduledUpgrade</code></summary>

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

**Sync**

```python
try:
    response = client.update_management.get_scheduled_upgrade(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ScheduledUpgrade
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScheduledUpgradeErrorBody
```

**Async**

```python
try:
    response = await async_client.update_management.get_scheduled_upgrade(
        "some example string", application_family="some example string"
    )
    # TODO: Handle 'response' of type ScheduledUpgrade
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScheduledUpgradeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduledUpgrade](microsoft_dynamics_nav/models/scheduled_upgrade.py)</code> -- Successfully retrieved scheduled upgrade information

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetScheduledUpgradeErrorBody](microsoft_dynamics_nav/errors/get_scheduled_upgrade_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_update_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_update_settings(environment_name: str, body: UpdateSettings | UpdateSettingsDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.update_management.set_update_settings(
        "some example string", UpdateSettings(), application_family="some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetUpdateSettingsErrorBody
```

**Async**

```python
try:
    await async_client.update_management.set_update_settings(
        "some example string", UpdateSettings(), application_family="some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetUpdateSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[UpdateSettings](microsoft_dynamics_nav/models/update_settings.py) \| [UpdateSettingsDict](microsoft_dynamics_nav/models/update_settings.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[SetUpdateSettingsErrorBody](microsoft_dynamics_nav/errors/set_update_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi](microsoft_dynamics_nav/models/error_response_business_central_administration_center_update_management_api.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](microsoft_dynamics_nav/apis/users.py)

<details>
<summary><code>def get_new_users_from_office365(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.users.get_new_users_from_office365(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewUsersFromOffice365ErrorBody
```

**Async**

```python
try:
    await async_client.users.get_new_users_from_office365(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewUsersFromOffice365ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetNewUsersFromOffice365ErrorBody](microsoft_dynamics_nav/errors/get_new_users_from_office365_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_new_users_from_office365_async(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.users.get_new_users_from_office365_async(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewUsersFromOffice365AsyncErrorBody
```

**Async**

```python
try:
    await async_client.users.get_new_users_from_office365_async(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetNewUsersFromOffice365AsyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetNewUsersFromOffice365AsyncErrorBody](microsoft_dynamics_nav/errors/get_new_users_from_office365_async_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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

**Sync**

```python
try:
    response = client.users.get_user(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_user(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type User
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
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>user_id</code> | <code>UUID</code> | The user security ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](microsoft_dynamics_nav/models/user.py)</code> -- Successfully retrieved user

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetUserErrorBody](microsoft_dynamics_nav/errors/get_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiUsersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.users.list_users(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiUsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.list_users(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiUsersResponse
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
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiUsersResponse](microsoft_dynamics_nav/models/companies_api_users_response.py)</code> -- Successfully retrieved users

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListUsersErrorBody](microsoft_dynamics_nav/errors/list_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(company_id: UUID, user_id: UUID, if_match: str, body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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

**Sync**

```python
try:
    response = client.users.update_user(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        UserUpdate(state=State.ENABLED, expiry_date=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)),
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.update_user(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        UserUpdate(state=State.ENABLED, expiry_date=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)),
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>user_id</code> | <code>UUID</code> | The user security ID |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[UserUpdate](microsoft_dynamics_nav/models/user_update.py) \| [UserUpdateDict](microsoft_dynamics_nav/models/user_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](microsoft_dynamics_nav/models/user.py)</code> -- User updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateUserErrorBody](microsoft_dynamics_nav/errors/update_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VendorPayments

> Source: [VendorPayments](microsoft_dynamics_nav/apis/vendor_payments.py)

<details>
<summary><code>def list_vendor_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiVendorPaymentJournalsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.vendor_payments.list_vendor_payment_journals(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiVendorPaymentJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorPaymentJournalsErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_payments.list_vendor_payment_journals(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type CompaniesApiVendorPaymentJournalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorPaymentJournalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiVendorPaymentJournalsResponse](microsoft_dynamics_nav/models/companies_api_vendor_payment_journals_response.py)</code> -- Successfully retrieved vendor payment journals

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListVendorPaymentJournalsErrorBody](microsoft_dynamics_nav/errors/list_vendor_payment_journals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](microsoft_dynamics_nav/apis/vendors.py)

<details>
<summary><code>def create_vendor(company_id: UUID, body: VendorCreate | VendorCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> Vendor</code></summary>

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

**Sync**

```python
try:
    response = client.vendors.create_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), VendorCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.create_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), VendorCreate(display_name="some example string")
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[VendorCreate](microsoft_dynamics_nav/models/vendor_create.py) \| [VendorCreateDict](microsoft_dynamics_nav/models/vendor_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](microsoft_dynamics_nav/models/vendor.py)</code> -- Vendor created successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[CreateVendorErrorBody](microsoft_dynamics_nav/errors/create_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vendor(company_id: UUID, vendor_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.vendors.delete_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorErrorBody
```

**Async**

```python
try:
    await async_client.vendors.delete_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>vendor_id</code> | <code>UUID</code> | The unique identifier of the vendor |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[DeleteVendorErrorBody](microsoft_dynamics_nav/errors/delete_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor(company_id: UUID, vendor_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Vendor</code></summary>

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

**Sync**

```python
try:
    response = client.vendors.get_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.get_vendor(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>vendor_id</code> | <code>UUID</code> | The unique identifier of the vendor |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](microsoft_dynamics_nav/models/vendor.py)</code> -- Successfully retrieved vendor

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[GetVendorErrorBody](microsoft_dynamics_nav/errors/get_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vendors(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CompaniesApiVendorsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.vendors.list_vendors(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiVendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorsErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.list_vendors(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CompaniesApiVendorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>top</code> | <code>int \| None</code> | Maximum number of items to return<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of items to skip<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression<br>**Default**: <code>None</code> |
| <code>orderby</code> | <code>str \| None</code> | OData order by expression<br>**Default**: <code>None</code> |
| <code>select</code> | <code>str \| None</code> | Comma-separated list of properties to include in the response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesApiVendorsResponse](microsoft_dynamics_nav/models/companies_api_vendors_response.py)</code> -- Successfully retrieved vendors

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[ListVendorsErrorBody](microsoft_dynamics_nav/errors/list_vendors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vendor(company_id: UUID, vendor_id: UUID, if_match: str, body: VendorUpdate | VendorUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> Vendor</code></summary>

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

**Sync**

```python
try:
    response = client.vendors.update_vendor(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        VendorUpdate(),
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.update_vendor(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        VendorUpdate(),
    )
    # TODO: Handle 'response' of type Vendor
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>vendor_id</code> | <code>UUID</code> | The unique identifier of the vendor |
| <code>if_match</code> | <code>str</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[VendorUpdate](microsoft_dynamics_nav/models/vendor_update.py) \| [VendorUpdateDict](microsoft_dynamics_nav/models/vendor_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](microsoft_dynamics_nav/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Vendor](microsoft_dynamics_nav/models/vendor.py)</code> -- Vendor updated successfully

**OnError**: <code>[ApiError](microsoft_dynamics_nav/core/exceptions.py)&#91;[UpdateVendorErrorBody](microsoft_dynamics_nav/errors/update_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](microsoft_dynamics_nav/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](microsoft_dynamics_nav/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

