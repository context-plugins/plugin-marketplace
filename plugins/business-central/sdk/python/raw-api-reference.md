# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [Dynamics365BusinessCentralClient](dynamics_365_business_central/client.py)

## Accounts

> Source: [Accounts](dynamics_365_business_central/apis/accounts.py)

<details>
<summary><code>def get_account(company_id: UUID, account_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Account, GetAccountErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.get_account(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Account
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.get_account(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Account
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Account](dynamics_365_business_central/models/account.py), [GetAccountErrorBody](dynamics_365_business_central/errors/get_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Account](dynamics_365_business_central/models/account.py)</code> -- Successfully retrieved account

**On `Failure`**: `error` is <code>[GetAccountErrorBody](dynamics_365_business_central/errors/get_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_accounts(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiAccountsResponse, ListAccountsErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.list_accounts(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountsErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.list_accounts(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiAccountsResponse](dynamics_365_business_central/models/companies_api_accounts_response.py), [ListAccountsErrorBody](dynamics_365_business_central/errors/list_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiAccountsResponse](dynamics_365_business_central/models/companies_api_accounts_response.py)</code> -- Successfully retrieved accounts

**On `Failure`**: `error` is <code>[ListAccountsErrorBody](dynamics_365_business_central/errors/list_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_general_ledger_entries(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiGeneralLedgerEntriesResponse, ListGeneralLedgerEntriesErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.list_general_ledger_entries(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiGeneralLedgerEntriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeneralLedgerEntriesErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.list_general_ledger_entries(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiGeneralLedgerEntriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGeneralLedgerEntriesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiGeneralLedgerEntriesResponse](dynamics_365_business_central/models/companies_api_general_ledger_entries_response.py), [ListGeneralLedgerEntriesErrorBody](dynamics_365_business_central/errors/list_general_ledger_entries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiGeneralLedgerEntriesResponse](dynamics_365_business_central/models/companies_api_general_ledger_entries_response.py)</code> -- Successfully retrieved general ledger entries

**On `Failure`**: `error` is <code>[ListGeneralLedgerEntriesErrorBody](dynamics_365_business_central/errors/list_general_ledger_entries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AppManagement

> Source: [AppManagement](dynamics_365_business_central/apis/app_management.py)

<details>
<summary><code>def install_app(environment_name: str, app_id: UUID, body: AppInstallRequest | AppInstallRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, InstallAppErrorBody]</code></summary>

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
result = client.app_management.with_raw_response.install_app(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    AppInstallRequest(
        target_version="example_value", allow_preview_version=True, accept_isv_eula=True, allow_dependency_update=True
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallAppErrorBody
```

**Async**

```python
result = await async_client.app_management.with_raw_response.install_app(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    AppInstallRequest(
        target_version="example_value", allow_preview_version=True, accept_isv_eula=True, allow_dependency_update=True
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallAppErrorBody
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
| <code>body</code> | <code>[AppInstallRequest](dynamics_365_business_central/models/app_install_request.py) \| [AppInstallRequestDict](dynamics_365_business_central/models/app_install_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [InstallAppErrorBody](dynamics_365_business_central/errors/install_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- App installation scheduled

**On `Failure`**: `error` is <code>[InstallAppErrorBody](dynamics_365_business_central/errors/install_app_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_installed_apps(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsAppsResponse, ListInstalledAppsErrorBody]</code></summary>

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
result = client.app_management.with_raw_response.list_installed_apps(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsAppsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInstalledAppsErrorBody
```

**Async**

```python
result = await async_client.app_management.with_raw_response.list_installed_apps(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsAppsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInstalledAppsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsAppsResponse](dynamics_365_business_central/models/applications_environments_apps_response.py), [ListInstalledAppsErrorBody](dynamics_365_business_central/errors/list_installed_apps_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsAppsResponse](dynamics_365_business_central/models/applications_environments_apps_response.py)</code> -- Successfully retrieved installed apps

**On `Failure`**: `error` is <code>[ListInstalledAppsErrorBody](dynamics_365_business_central/errors/list_installed_apps_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_app(environment_name: str, app_id: UUID, *, application_family: str = "BusinessCentral", body: ApplicationsEnvironmentsAppsAppIdUninstallRequest | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, UninstallAppErrorBody]</code></summary>

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
result = client.app_management.with_raw_response.uninstall_app(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    application_family="some example string",
    body=ApplicationsEnvironmentsAppsAppIdUninstallRequest(delete_data=True),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallAppErrorBody
```

**Async**

```python
result = await async_client.app_management.with_raw_response.uninstall_app(
    "some example string",
    UUID("00000000-0000-0000-0000-000000000000"),
    application_family="some example string",
    body=ApplicationsEnvironmentsAppsAppIdUninstallRequest(delete_data=True),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallAppErrorBody
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
| <code>body</code> | <code>[ApplicationsEnvironmentsAppsAppIdUninstallRequest](dynamics_365_business_central/models/applications_environments_apps_app_id_uninstall_request.py) \| [ApplicationsEnvironmentsAppsAppIdUninstallRequestDict](dynamics_365_business_central/models/applications_environments_apps_app_id_uninstall_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [UninstallAppErrorBody](dynamics_365_business_central/errors/uninstall_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- App uninstallation scheduled

**On `Failure`**: `error` is <code>[UninstallAppErrorBody](dynamics_365_business_central/errors/uninstall_app_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_app(environment_name: str, app_id: UUID, body: AppUpdateRequest | AppUpdateRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, UpdateAppErrorBody]</code></summary>

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
result = client.app_management.with_raw_response.update_app(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAppErrorBody
```

**Async**

```python
result = await async_client.app_management.with_raw_response.update_app(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAppErrorBody
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
| <code>body</code> | <code>[AppUpdateRequest](dynamics_365_business_central/models/app_update_request.py) \| [AppUpdateRequestDict](dynamics_365_business_central/models/app_update_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [UpdateAppErrorBody](dynamics_365_business_central/errors/update_app_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- App update scheduled

**On `Failure`**: `error` is <code>[UpdateAppErrorBody](dynamics_365_business_central/errors/update_app_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AvailableApplications

> Source: [AvailableApplications](dynamics_365_business_central/apis/available_applications.py)

<details>
<summary><code>def list_available_countries(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsAvailableCountriesResponse, ListAvailableCountriesErrorBody]</code></summary>

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
result = client.available_applications.with_raw_response.list_available_countries(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsAvailableCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAvailableCountriesErrorBody
```

**Async**

```python
result = await async_client.available_applications.with_raw_response.list_available_countries(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsAvailableCountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAvailableCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsAvailableCountriesResponse](dynamics_365_business_central/models/applications_available_countries_response.py), [ListAvailableCountriesErrorBody](dynamics_365_business_central/errors/list_available_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsAvailableCountriesResponse](dynamics_365_business_central/models/applications_available_countries_response.py)</code> -- Successfully retrieved available countries

**On `Failure`**: `error` is <code>[ListAvailableCountriesErrorBody](dynamics_365_business_central/errors/list_available_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAvailable](dynamics_365_business_central/models/error_response_business_central_administration_center_available.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_available_versions(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsAvailableApplicationVersionsResponse, ListAvailableVersionsErrorBody]</code></summary>

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
result = client.available_applications.with_raw_response.list_available_versions(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsAvailableApplicationVersionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAvailableVersionsErrorBody
```

**Async**

```python
result = await async_client.available_applications.with_raw_response.list_available_versions(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsAvailableApplicationVersionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAvailableVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsAvailableApplicationVersionsResponse](dynamics_365_business_central/models/applications_available_application_versions_response.py), [ListAvailableVersionsErrorBody](dynamics_365_business_central/errors/list_available_versions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsAvailableApplicationVersionsResponse](dynamics_365_business_central/models/applications_available_application_versions_response.py)</code> -- Successfully retrieved available versions

**On `Failure`**: `error` is <code>[ListAvailableVersionsErrorBody](dynamics_365_business_central/errors/list_available_versions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterAvailable](dynamics_365_business_central/models/error_response_business_central_administration_center_available.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](dynamics_365_business_central/apis/companies.py)

<details>
<summary><code>def create_automation_company(company_id: UUID, body: AutomationCompanyCreate | AutomationCompanyCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationCompany, CreateAutomationCompanyErrorBody]</code></summary>

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
result = client.companies.with_raw_response.create_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"),
    AutomationCompanyCreate(name="Example Title", display_name="example_value", business_profile_id="500123"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAutomationCompanyErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.create_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"),
    AutomationCompanyCreate(name="Example Title", display_name="example_value", business_profile_id="500123"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAutomationCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[AutomationCompanyCreate](dynamics_365_business_central/models/automation_company_create.py) \| [AutomationCompanyCreateDict](dynamics_365_business_central/models/automation_company_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[AutomationCompany](dynamics_365_business_central/models/automation_company.py), [CreateAutomationCompanyErrorBody](dynamics_365_business_central/errors/create_automation_company_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationCompany](dynamics_365_business_central/models/automation_company.py)</code> -- Company created successfully

**On `Failure`**: `error` is <code>[CreateAutomationCompanyErrorBody](dynamics_365_business_central/errors/create_automation_company_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAutomationCompanyErrorBody]</code></summary>

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
result = client.companies.with_raw_response.delete_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAutomationCompanyErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.delete_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAutomationCompanyErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeleteAutomationCompanyErrorBody](dynamics_365_business_central/errors/delete_automation_company_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAutomationCompanyErrorBody](dynamics_365_business_central/errors/delete_automation_company_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationCompany, GetAutomationCompanyErrorBody]</code></summary>

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
result = client.companies.with_raw_response.get_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationCompanyErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationCompanyErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[AutomationCompany](dynamics_365_business_central/models/automation_company.py), [GetAutomationCompanyErrorBody](dynamics_365_business_central/errors/get_automation_company_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationCompany](dynamics_365_business_central/models/automation_company.py)</code> -- Successfully retrieved automation company

**On `Failure`**: `error` is <code>[GetAutomationCompanyErrorBody](dynamics_365_business_central/errors/get_automation_company_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automation_companies(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiAutomationCompaniesResponse, ListAutomationCompaniesErrorBody]</code></summary>

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
result = client.companies.with_raw_response.list_automation_companies(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiAutomationCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationCompaniesErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.list_automation_companies(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiAutomationCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAutomationCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiAutomationCompaniesResponse](dynamics_365_business_central/models/companies_api_automation_companies_response.py), [ListAutomationCompaniesErrorBody](dynamics_365_business_central/errors/list_automation_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiAutomationCompaniesResponse](dynamics_365_business_central/models/companies_api_automation_companies_response.py)</code> -- Successfully retrieved automation companies

**On `Failure`**: `error` is <code>[ListAutomationCompaniesErrorBody](dynamics_365_business_central/errors/list_automation_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesResponse, ListCompaniesErrorBody]</code></summary>

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
result = client.companies.with_raw_response.list_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCompaniesErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.list_companies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | OData filter expression to return targeted results (Business Central API/OData filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesResponse](dynamics_365_business_central/models/companies_response.py), [ListCompaniesErrorBody](dynamics_365_business_central/errors/list_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesResponse](dynamics_365_business_central/models/companies_response.py)</code> -- Successfully retrieved companies

**On `Failure`**: `error` is <code>[ListCompaniesErrorBody](dynamics_365_business_central/errors/list_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_automation_company(company_id: UUID, automation_company_id: UUID, if_match: str, body: AutomationCompanyUpdate | AutomationCompanyUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationCompany, UpdateAutomationCompanyErrorBody]</code></summary>

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
result = client.companies.with_raw_response.update_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    AutomationCompanyUpdate(name="Example Title", display_name="example_value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAutomationCompanyErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.update_automation_company(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    AutomationCompanyUpdate(name="Example Title", display_name="example_value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationCompany
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAutomationCompanyErrorBody
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
| <code>body</code> | <code>[AutomationCompanyUpdate](dynamics_365_business_central/models/automation_company_update.py) \| [AutomationCompanyUpdateDict](dynamics_365_business_central/models/automation_company_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[AutomationCompany](dynamics_365_business_central/models/automation_company.py), [UpdateAutomationCompanyErrorBody](dynamics_365_business_central/errors/update_automation_company_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationCompany](dynamics_365_business_central/models/automation_company.py)</code> -- Company updated successfully

**On `Failure`**: `error` is <code>[UpdateAutomationCompanyErrorBody](dynamics_365_business_central/errors/update_automation_company_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ConfigurationPackages

> Source: [ConfigurationPackages](dynamics_365_business_central/apis/configuration_packages.py)

<details>
<summary><code>def apply_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ApplyConfigurationPackageErrorBody]</code></summary>

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
result = client.configuration_packages.with_raw_response.apply_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApplyConfigurationPackageErrorBody
```

**Async**

```python
result = await async_client.configuration_packages.with_raw_response.apply_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApplyConfigurationPackageErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [ApplyConfigurationPackageErrorBody](dynamics_365_business_central/errors/apply_configuration_package_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ApplyConfigurationPackageErrorBody](dynamics_365_business_central/errors/apply_configuration_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_configuration_package(company_id: UUID, body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ConfigurationPackage, CreateConfigurationPackageErrorBody]</code></summary>

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
result = client.configuration_packages.with_raw_response.create_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"),
    CompaniesApiConfigurationPackagesRequest(code="example_value", package_name="example_value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConfigurationPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConfigurationPackageErrorBody
```

**Async**

```python
result = await async_client.configuration_packages.with_raw_response.create_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"),
    CompaniesApiConfigurationPackagesRequest(code="example_value", package_name="example_value"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ConfigurationPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateConfigurationPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[CompaniesApiConfigurationPackagesRequest](dynamics_365_business_central/models/companies_api_configuration_packages_request.py) \| [CompaniesApiConfigurationPackagesRequestDict](dynamics_365_business_central/models/companies_api_configuration_packages_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ConfigurationPackage](dynamics_365_business_central/models/configuration_package.py), [CreateConfigurationPackageErrorBody](dynamics_365_business_central/errors/create_configuration_package_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ConfigurationPackage](dynamics_365_business_central/models/configuration_package.py)</code> -- Configuration package created

**On `Failure`**: `error` is <code>[CreateConfigurationPackageErrorBody](dynamics_365_business_central/errors/create_configuration_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ImportConfigurationPackageErrorBody]</code></summary>

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
result = client.configuration_packages.with_raw_response.import_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportConfigurationPackageErrorBody
```

**Async**

```python
result = await async_client.configuration_packages.with_raw_response.import_configuration_package(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportConfigurationPackageErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [ImportConfigurationPackageErrorBody](dynamics_365_business_central/errors/import_configuration_package_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ImportConfigurationPackageErrorBody](dynamics_365_business_central/errors/import_configuration_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_configuration_packages(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiConfigurationPackagesResponse, ListConfigurationPackagesErrorBody]</code></summary>

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
result = client.configuration_packages.with_raw_response.list_configuration_packages(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiConfigurationPackagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListConfigurationPackagesErrorBody
```

**Async**

```python
result = await async_client.configuration_packages.with_raw_response.list_configuration_packages(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiConfigurationPackagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListConfigurationPackagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiConfigurationPackagesResponse](dynamics_365_business_central/models/companies_api_configuration_packages_response.py), [ListConfigurationPackagesErrorBody](dynamics_365_business_central/errors/list_configuration_packages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiConfigurationPackagesResponse](dynamics_365_business_central/models/companies_api_configuration_packages_response.py)</code> -- Successfully retrieved configuration packages

**On `Failure`**: `error` is <code>[ListConfigurationPackagesErrorBody](dynamics_365_business_central/errors/list_configuration_packages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_configuration_package_file(company_id: UUID, package_id: UUID, code: str, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UploadConfigurationPackageFileErrorBody]</code></summary>

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
result = client.configuration_packages.with_raw_response.upload_configuration_package_file(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "example_value",
    "some example string",
    Path("path/to/file.bin"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadConfigurationPackageFileErrorBody
```

**Async**

```python
result = await async_client.configuration_packages.with_raw_response.upload_configuration_package_file(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "example_value",
    "some example string",
    Path("path/to/file.bin"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadConfigurationPackageFileErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [UploadConfigurationPackageFileErrorBody](dynamics_365_business_central/errors/upload_configuration_package_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UploadConfigurationPackageFileErrorBody](dynamics_365_business_central/errors/upload_configuration_package_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesRegions

> Source: [CountriesRegions](dynamics_365_business_central/apis/countries_regions.py)

<details>
<summary><code>def list_countries_regions(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiCountriesRegionsResponse, ListCountriesRegionsErrorBody]</code></summary>

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
result = client.countries_regions.with_raw_response.list_countries_regions(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCountriesRegionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCountriesRegionsErrorBody
```

**Async**

```python
result = await async_client.countries_regions.with_raw_response.list_countries_regions(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCountriesRegionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCountriesRegionsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiCountriesRegionsResponse](dynamics_365_business_central/models/companies_api_countries_regions_response.py), [ListCountriesRegionsErrorBody](dynamics_365_business_central/errors/list_countries_regions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiCountriesRegionsResponse](dynamics_365_business_central/models/companies_api_countries_regions_response.py)</code> -- Successfully retrieved countries/regions

**On `Failure`**: `error` is <code>[ListCountriesRegionsErrorBody](dynamics_365_business_central/errors/list_countries_regions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CurrencyApi

> Source: [CurrencyApi](dynamics_365_business_central/apis/currency_api.py)

<details>
<summary><code>def list_currencies(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiCurrenciesResponse, ListCurrenciesErrorBody]</code></summary>

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
result = client.currency_api.with_raw_response.list_currencies(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCurrenciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCurrenciesErrorBody
```

**Async**

```python
result = await async_client.currency_api.with_raw_response.list_currencies(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCurrenciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCurrenciesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiCurrenciesResponse](dynamics_365_business_central/models/companies_api_currencies_response.py), [ListCurrenciesErrorBody](dynamics_365_business_central/errors/list_currencies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiCurrenciesResponse](dynamics_365_business_central/models/companies_api_currencies_response.py)</code> -- Successfully retrieved currencies

**On `Failure`**: `error` is <code>[ListCurrenciesErrorBody](dynamics_365_business_central/errors/list_currencies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPayments

> Source: [CustomerPayments](dynamics_365_business_central/apis/customer_payments.py)

<details>
<summary><code>def list_customer_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiCustomerPaymentJournalsResponse, ListCustomerPaymentJournalsErrorBody]</code></summary>

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
result = client.customer_payments.with_raw_response.list_customer_payment_journals(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCustomerPaymentJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerPaymentJournalsErrorBody
```

**Async**

```python
result = await async_client.customer_payments.with_raw_response.list_customer_payment_journals(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCustomerPaymentJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomerPaymentJournalsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiCustomerPaymentJournalsResponse](dynamics_365_business_central/models/companies_api_customer_payment_journals_response.py), [ListCustomerPaymentJournalsErrorBody](dynamics_365_business_central/errors/list_customer_payment_journals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiCustomerPaymentJournalsResponse](dynamics_365_business_central/models/companies_api_customer_payment_journals_response.py)</code> -- Successfully retrieved customer payment journals

**On `Failure`**: `error` is <code>[ListCustomerPaymentJournalsErrorBody](dynamics_365_business_central/errors/list_customer_payment_journals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](dynamics_365_business_central/apis/customers.py)

<details>
<summary><code>def create_customer(company_id: UUID, body: CustomerCreate | CustomerCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, CreateCustomerErrorBody]</code></summary>

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
result = client.customers.with_raw_response.create_customer(
    UUID("00000000-0000-0000-0000-000000000000"), CustomerCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.create_customer(
    UUID("00000000-0000-0000-0000-000000000000"), CustomerCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[CustomerCreate](dynamics_365_business_central/models/customer_create.py) \| [CustomerCreateDict](dynamics_365_business_central/models/customer_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Customer](dynamics_365_business_central/models/customer.py), [CreateCustomerErrorBody](dynamics_365_business_central/errors/create_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](dynamics_365_business_central/models/customer.py)</code> -- Customer created successfully

**On `Failure`**: `error` is <code>[CreateCustomerErrorBody](dynamics_365_business_central/errors/create_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer(company_id: UUID, customer_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCustomerErrorBody]</code></summary>

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
result = client.customers.with_raw_response.delete_customer(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.delete_customer(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomerErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeleteCustomerErrorBody](dynamics_365_business_central/errors/delete_customer_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCustomerErrorBody](dynamics_365_business_central/errors/delete_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer(company_id: UUID, customer_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, GetCustomerErrorBody]</code></summary>

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
result = client.customers.with_raw_response.get_customer(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.get_customer(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomerErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Customer](dynamics_365_business_central/models/customer.py), [GetCustomerErrorBody](dynamics_365_business_central/errors/get_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](dynamics_365_business_central/models/customer.py)</code> -- Successfully retrieved customer

**On `Failure`**: `error` is <code>[GetCustomerErrorBody](dynamics_365_business_central/errors/get_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customers(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiCustomersResponse, ListCustomersErrorBody]</code></summary>

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
result = client.customers.with_raw_response.list_customers(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomersErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.list_customers(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiCustomersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomersErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiCustomersResponse](dynamics_365_business_central/models/companies_api_customers_response.py), [ListCustomersErrorBody](dynamics_365_business_central/errors/list_customers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiCustomersResponse](dynamics_365_business_central/models/companies_api_customers_response.py)</code> -- Successfully retrieved customers

**On `Failure`**: `error` is <code>[ListCustomersErrorBody](dynamics_365_business_central/errors/list_customers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer(company_id: UUID, customer_id: UUID, if_match: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Customer, UpdateCustomerErrorBody]</code></summary>

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
result = client.customers.with_raw_response.update_customer(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    CustomerUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
```

**Async**

```python
result = await async_client.customers.with_raw_response.update_customer(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    CustomerUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Customer
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomerErrorBody
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
| <code>body</code> | <code>[CustomerUpdate](dynamics_365_business_central/models/customer_update.py) \| [CustomerUpdateDict](dynamics_365_business_central/models/customer_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Customer](dynamics_365_business_central/models/customer.py), [UpdateCustomerErrorBody](dynamics_365_business_central/errors/update_customer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Customer](dynamics_365_business_central/models/customer.py)</code> -- Customer updated successfully

**On `Failure`**: `error` is <code>[UpdateCustomerErrorBody](dynamics_365_business_central/errors/update_customer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](dynamics_365_business_central/apis/dimensions.py)

<details>
<summary><code>def list_dimensions(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiDimensionsResponse, ListDimensionsErrorBody]</code></summary>

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
result = client.dimensions.with_raw_response.list_dimensions(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiDimensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDimensionsErrorBody
```

**Async**

```python
result = await async_client.dimensions.with_raw_response.list_dimensions(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiDimensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDimensionsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiDimensionsResponse](dynamics_365_business_central/models/companies_api_dimensions_response.py), [ListDimensionsErrorBody](dynamics_365_business_central/errors/list_dimensions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiDimensionsResponse](dynamics_365_business_central/models/companies_api_dimensions_response.py)</code> -- Successfully retrieved dimensions

**On `Failure`**: `error` is <code>[ListDimensionsErrorBody](dynamics_365_business_central/errors/list_dimensions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Employees

> Source: [Employees](dynamics_365_business_central/apis/employees.py)

<details>
<summary><code>def list_employees(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiEmployeesResponse, ListEmployeesErrorBody]</code></summary>

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
result = client.employees.with_raw_response.list_employees(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiEmployeesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmployeesErrorBody
```

**Async**

```python
result = await async_client.employees.with_raw_response.list_employees(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiEmployeesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEmployeesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiEmployeesResponse](dynamics_365_business_central/models/companies_api_employees_response.py), [ListEmployeesErrorBody](dynamics_365_business_central/errors/list_employees_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiEmployeesResponse](dynamics_365_business_central/models/companies_api_employees_response.py)</code> -- Successfully retrieved employees

**On `Failure`**: `error` is <code>[ListEmployeesErrorBody](dynamics_365_business_central/errors/list_employees_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentOperations

> Source: [EnvironmentOperations](dynamics_365_business_central/apis/environment_operations.py)

<details>
<summary><code>def list_all_environment_operations(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsOperationsResponse, ListAllEnvironmentOperationsErrorBody]</code></summary>

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
result = client.environment_operations.with_raw_response.list_all_environment_operations(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllEnvironmentOperationsErrorBody
```

**Async**

```python
result = await async_client.environment_operations.with_raw_response.list_all_environment_operations(
    application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllEnvironmentOperationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsOperationsResponse](dynamics_365_business_central/models/applications_environments_operations_response.py), [ListAllEnvironmentOperationsErrorBody](dynamics_365_business_central/errors/list_all_environment_operations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsOperationsResponse](dynamics_365_business_central/models/applications_environments_operations_response.py)</code> -- Successfully retrieved operations

**On `Failure`**: `error` is <code>[ListAllEnvironmentOperationsErrorBody](dynamics_365_business_central/errors/list_all_environment_operations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironment](dynamics_365_business_central/models/error_response_business_central_administration_center_environment.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_environment_operations(environment_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentsOperationsResponse, ListEnvironmentOperationsErrorBody]</code></summary>

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
result = client.environment_operations.with_raw_response.list_environment_operations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentsOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvironmentOperationsErrorBody
```

**Async**

```python
result = await async_client.environment_operations.with_raw_response.list_environment_operations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentsOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvironmentOperationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentsOperationsResponse](dynamics_365_business_central/models/environments_operations_response.py), [ListEnvironmentOperationsErrorBody](dynamics_365_business_central/errors/list_environment_operations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentsOperationsResponse](dynamics_365_business_central/models/environments_operations_response.py)</code> -- Successfully retrieved operations

**On `Failure`**: `error` is <code>[ListEnvironmentOperationsErrorBody](dynamics_365_business_central/errors/list_environment_operations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironment](dynamics_365_business_central/models/error_response_business_central_administration_center_environment.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentSettingsApi

> Source: [EnvironmentSettingsApi](dynamics_365_business_central/apis/environment_settings_api.py)

<details>
<summary><code>def get_environment_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentSettings, GetEnvironmentSettingsErrorBody]</code></summary>

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
result = client.environment_settings_api.with_raw_response.get_environment_settings(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentSettingsErrorBody
```

**Async**

```python
result = await async_client.environment_settings_api.with_raw_response.get_environment_settings(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentSettingsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentSettings](dynamics_365_business_central/models/environment_settings.py), [GetEnvironmentSettingsErrorBody](dynamics_365_business_central/errors/get_environment_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentSettings](dynamics_365_business_central/models/environment_settings.py)</code> -- Successfully retrieved environment settings

**On `Failure`**: `error` is <code>[GetEnvironmentSettingsErrorBody](dynamics_365_business_central/errors/get_environment_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings](dynamics_365_business_central/models/error_response_business_central_administration_center_environment_settings.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_app_insights_key(environment_name: str, body: ApplicationsEnvironmentsSettingsAppInsightsKeyRequest | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SetAppInsightsKeyErrorBody]</code></summary>

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
result = client.environment_settings_api.with_raw_response.set_app_insights_key(
    "some example string",
    ApplicationsEnvironmentsSettingsAppInsightsKeyRequest(key="example_value"),
    application_family="some example string",
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetAppInsightsKeyErrorBody
```

**Async**

```python
result = await async_client.environment_settings_api.with_raw_response.set_app_insights_key(
    "some example string",
    ApplicationsEnvironmentsSettingsAppInsightsKeyRequest(key="example_value"),
    application_family="some example string",
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetAppInsightsKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsSettingsAppInsightsKeyRequest](dynamics_365_business_central/models/applications_environments_settings_app_insights_key_request.py) \| [ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict](dynamics_365_business_central/models/applications_environments_settings_app_insights_key_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [SetAppInsightsKeyErrorBody](dynamics_365_business_central/errors/set_app_insights_key_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SetAppInsightsKeyErrorBody](dynamics_365_business_central/errors/set_app_insights_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings](dynamics_365_business_central/models/error_response_business_central_administration_center_environment_settings.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](dynamics_365_business_central/apis/environments.py)

<details>
<summary><code>def copy_environment(environment_name: str, body: CopyEnvironmentRequest | CopyEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, CopyEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.copy_environment(
    "some example string",
    CopyEnvironmentRequest(
        environment_name="example_value", type_=Type1BusinessCentralAdministrationCenterEnvironmentsApi.PRODUCTION
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CopyEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.copy_environment(
    "some example string",
    CopyEnvironmentRequest(
        environment_name="example_value", type_=Type1BusinessCentralAdministrationCenterEnvironmentsApi.PRODUCTION
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CopyEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[CopyEnvironmentRequest](dynamics_365_business_central/models/copy_environment_request.py) \| [CopyEnvironmentRequestDict](dynamics_365_business_central/models/copy_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentModel](dynamics_365_business_central/models/environment_model.py), [CopyEnvironmentErrorBody](dynamics_365_business_central/errors/copy_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dynamics_365_business_central/models/environment_model.py)</code> -- Copy initiated (API v2.8 and earlier)

**On `Failure`**: `error` is <code>[CopyEnvironmentErrorBody](dynamics_365_business_central/errors/copy_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_environment(environment_name: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.create_environment(
    "some example string",
    CreateEnvironmentRequest(
        environment_type=EnvironmentType.PRODUCTION,
        country_code="example_value",
        ring_name="example_value",
        application_version="example_value",
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.create_environment(
    "some example string",
    CreateEnvironmentRequest(
        environment_type=EnvironmentType.PRODUCTION,
        country_code="example_value",
        ring_name="example_value",
        application_version="example_value",
    ),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[CreateEnvironmentRequest](dynamics_365_business_central/models/create_environment_request.py) \| [CreateEnvironmentRequestDict](dynamics_365_business_central/models/create_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentModel](dynamics_365_business_central/models/environment_model.py), [CreateEnvironmentErrorBody](dynamics_365_business_central/errors/create_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dynamics_365_business_central/models/environment_model.py)</code> -- Environment creation initiated (API v2.8 and earlier)

**On `Failure`**: `error` is <code>[CreateEnvironmentErrorBody](dynamics_365_business_central/errors/create_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 409 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, DeleteEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.delete_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.delete_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [DeleteEnvironmentErrorBody](dynamics_365_business_central/errors/delete_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- Delete operation scheduled

**On `Failure`**: `error` is <code>[DeleteEnvironmentErrorBody](dynamics_365_business_central/errors/delete_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_available_restore_periods(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsAvailableRestorePeriodsResponse, GetAvailableRestorePeriodsErrorBody]</code></summary>

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
result = client.environments.with_raw_response.get_available_restore_periods(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAvailableRestorePeriodsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_available_restore_periods(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAvailableRestorePeriodsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](dynamics_365_business_central/models/applications_environments_available_restore_periods_response.py), [GetAvailableRestorePeriodsErrorBody](dynamics_365_business_central/errors/get_available_restore_periods_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](dynamics_365_business_central/models/applications_environments_available_restore_periods_response.py)</code> -- Successfully retrieved restore periods

**On `Failure`**: `error` is <code>[GetAvailableRestorePeriodsErrorBody](dynamics_365_business_central/errors/get_available_restore_periods_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.get_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentModel](dynamics_365_business_central/models/environment_model.py), [GetEnvironmentErrorBody](dynamics_365_business_central/errors/get_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](dynamics_365_business_central/models/environment_model.py)</code> -- Successfully retrieved environment

**On `Failure`**: `error` is <code>[GetEnvironmentErrorBody](dynamics_365_business_central/errors/get_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_all_environments(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsResponse, ListAllEnvironmentsErrorBody]</code></summary>

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
result = client.environments.with_raw_response.list_all_environments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllEnvironmentsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.list_all_environments()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAllEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsResponse](dynamics_365_business_central/models/applications_environments_response.py), [ListAllEnvironmentsErrorBody](dynamics_365_business_central/errors/list_all_environments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsResponse](dynamics_365_business_central/models/applications_environments_response.py)</code> -- Successfully retrieved environments

**On `Failure`**: `error` is <code>[ListAllEnvironmentsErrorBody](dynamics_365_business_central/errors/list_all_environments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_environments(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsResponse, ListEnvironmentsErrorBody]</code></summary>

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
result = client.environments.with_raw_response.list_environments(application_family="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvironmentsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.list_environments(application_family="some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsResponse](dynamics_365_business_central/models/applications_environments_response.py), [ListEnvironmentsErrorBody](dynamics_365_business_central/errors/list_environments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsResponse](dynamics_365_business_central/models/applications_environments_response.py)</code> -- Successfully retrieved environments

**On `Failure`**: `error` is <code>[ListEnvironmentsErrorBody](dynamics_365_business_central/errors/list_environments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recover_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, RecoverEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.recover_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecoverEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.recover_environment(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecoverEnvironmentErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [RecoverEnvironmentErrorBody](dynamics_365_business_central/errors/recover_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- Recovery operation scheduled

**On `Failure`**: `error` is <code>[RecoverEnvironmentErrorBody](dynamics_365_business_central/errors/recover_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rename_environment(environment_name: str, body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, RenameEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.rename_environment(
    "some example string",
    ApplicationsEnvironmentsRenameRequest(new_environment_name="example_value"),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenameEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.rename_environment(
    "some example string",
    ApplicationsEnvironmentsRenameRequest(new_environment_name="example_value"),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenameEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsRenameRequest](dynamics_365_business_central/models/applications_environments_rename_request.py) \| [ApplicationsEnvironmentsRenameRequestDict](dynamics_365_business_central/models/applications_environments_rename_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [RenameEnvironmentErrorBody](dynamics_365_business_central/errors/rename_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- Rename operation scheduled

**On `Failure`**: `error` is <code>[RenameEnvironmentErrorBody](dynamics_365_business_central/errors/rename_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_environment(environment_name: str, body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentOperation, RestoreEnvironmentErrorBody]</code></summary>

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
result = client.environments.with_raw_response.restore_environment(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RestoreEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.restore_environment(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentOperation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RestoreEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[RestoreEnvironmentRequest](dynamics_365_business_central/models/restore_environment_request.py) \| [RestoreEnvironmentRequestDict](dynamics_365_business_central/models/restore_environment_request.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py), [RestoreEnvironmentErrorBody](dynamics_365_business_central/errors/restore_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentOperation](dynamics_365_business_central/models/environment_operation.py)</code> -- Restore operation scheduled

**On `Failure`**: `error` is <code>[RestoreEnvironmentErrorBody](dynamics_365_business_central/errors/restore_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_environments_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionDeploymentStatusApi

> Source: [ExtensionDeploymentStatusApi](dynamics_365_business_central/apis/extension_deployment_status_api.py)

<details>
<summary><code>def list_extension_deployment_statuses(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiExtensionDeploymentStatusResponse, ListExtensionDeploymentStatusesErrorBody]</code></summary>

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
result = client.extension_deployment_status_api.with_raw_response.list_extension_deployment_statuses(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiExtensionDeploymentStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtensionDeploymentStatusesErrorBody
```

**Async**

```python
result = await async_client.extension_deployment_status_api.with_raw_response.list_extension_deployment_statuses(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiExtensionDeploymentStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtensionDeploymentStatusesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiExtensionDeploymentStatusResponse](dynamics_365_business_central/models/companies_api_extension_deployment_status_response.py), [ListExtensionDeploymentStatusesErrorBody](dynamics_365_business_central/errors/list_extension_deployment_statuses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiExtensionDeploymentStatusResponse](dynamics_365_business_central/models/companies_api_extension_deployment_status_response.py)</code> -- Successfully retrieved deployment statuses

**On `Failure`**: `error` is <code>[ListExtensionDeploymentStatusesErrorBody](dynamics_365_business_central/errors/list_extension_deployment_statuses_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionUploadApi

> Source: [ExtensionUploadApi](dynamics_365_business_central/apis/extension_upload_api.py)

<details>
<summary><code>def create_extension_upload(company_id: UUID, body: ExtensionUploadCreate | ExtensionUploadCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExtensionUpload, CreateExtensionUploadErrorBody]</code></summary>

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
result = client.extension_upload_api.with_raw_response.create_extension_upload(
    UUID("00000000-0000-0000-0000-000000000000"),
    ExtensionUploadCreate(schedule=Schedule1.CURRENT_VERSION, schema_sync_mode=SchemaSyncMode1.ADD),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtensionUpload
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateExtensionUploadErrorBody
```

**Async**

```python
result = await async_client.extension_upload_api.with_raw_response.create_extension_upload(
    UUID("00000000-0000-0000-0000-000000000000"),
    ExtensionUploadCreate(schedule=Schedule1.CURRENT_VERSION, schema_sync_mode=SchemaSyncMode1.ADD),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtensionUpload
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateExtensionUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[ExtensionUploadCreate](dynamics_365_business_central/models/extension_upload_create.py) \| [ExtensionUploadCreateDict](dynamics_365_business_central/models/extension_upload_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ExtensionUpload](dynamics_365_business_central/models/extension_upload.py), [CreateExtensionUploadErrorBody](dynamics_365_business_central/errors/create_extension_upload_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExtensionUpload](dynamics_365_business_central/models/extension_upload.py)</code> -- Extension upload record created

**On `Failure`**: `error` is <code>[CreateExtensionUploadErrorBody](dynamics_365_business_central/errors/create_extension_upload_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def install_uploaded_extension(company_id: UUID, extension_upload_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, InstallUploadedExtensionErrorBody]</code></summary>

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
result = client.extension_upload_api.with_raw_response.install_uploaded_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallUploadedExtensionErrorBody
```

**Async**

```python
result = await async_client.extension_upload_api.with_raw_response.install_uploaded_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallUploadedExtensionErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [InstallUploadedExtensionErrorBody](dynamics_365_business_central/errors/install_uploaded_extension_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[InstallUploadedExtensionErrorBody](dynamics_365_business_central/errors/install_uploaded_extension_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_extension_file(company_id: UUID, extension_upload_id: UUID, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UploadExtensionFileErrorBody]</code></summary>

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
result = client.extension_upload_api.with_raw_response.upload_extension_file(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    Path("path/to/file.bin"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadExtensionFileErrorBody
```

**Async**

```python
result = await async_client.extension_upload_api.with_raw_response.upload_extension_file(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    Path("path/to/file.bin"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadExtensionFileErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [UploadExtensionFileErrorBody](dynamics_365_business_central/errors/upload_extension_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UploadExtensionFileErrorBody](dynamics_365_business_central/errors/upload_extension_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Extensions

> Source: [Extensions](dynamics_365_business_central/apis/extensions.py)

<details>
<summary><code>def install_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, InstallExtensionErrorBody]</code></summary>

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
result = client.extensions.with_raw_response.install_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallExtensionErrorBody
```

**Async**

```python
result = await async_client.extensions.with_raw_response.install_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InstallExtensionErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [InstallExtensionErrorBody](dynamics_365_business_central/errors/install_extension_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[InstallExtensionErrorBody](dynamics_365_business_central/errors/install_extension_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_extensions(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiExtensionsResponse, ListExtensionsErrorBody]</code></summary>

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
result = client.extensions.with_raw_response.list_extensions(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiExtensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtensionsErrorBody
```

**Async**

```python
result = await async_client.extensions.with_raw_response.list_extensions(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiExtensionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListExtensionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiExtensionsResponse](dynamics_365_business_central/models/companies_api_extensions_response.py), [ListExtensionsErrorBody](dynamics_365_business_central/errors/list_extensions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiExtensionsResponse](dynamics_365_business_central/models/companies_api_extensions_response.py)</code> -- Successfully retrieved extensions

**On `Failure`**: `error` is <code>[ListExtensionsErrorBody](dynamics_365_business_central/errors/list_extensions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_and_delete_extension_data(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UninstallAndDeleteExtensionDataErrorBody]</code></summary>

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
result = client.extensions.with_raw_response.uninstall_and_delete_extension_data(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallAndDeleteExtensionDataErrorBody
```

**Async**

```python
result = await async_client.extensions.with_raw_response.uninstall_and_delete_extension_data(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallAndDeleteExtensionDataErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [UninstallAndDeleteExtensionDataErrorBody](dynamics_365_business_central/errors/uninstall_and_delete_extension_data_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UninstallAndDeleteExtensionDataErrorBody](dynamics_365_business_central/errors/uninstall_and_delete_extension_data_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uninstall_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UninstallExtensionErrorBody]</code></summary>

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
result = client.extensions.with_raw_response.uninstall_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallExtensionErrorBody
```

**Async**

```python
result = await async_client.extensions.with_raw_response.uninstall_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UninstallExtensionErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [UninstallExtensionErrorBody](dynamics_365_business_central/errors/uninstall_extension_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UninstallExtensionErrorBody](dynamics_365_business_central/errors/uninstall_extension_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UnpublishExtensionErrorBody]</code></summary>

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
result = client.extensions.with_raw_response.unpublish_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishExtensionErrorBody
```

**Async**

```python
result = await async_client.extensions.with_raw_response.unpublish_extension(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishExtensionErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [UnpublishExtensionErrorBody](dynamics_365_business_central/errors/unpublish_extension_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UnpublishExtensionErrorBody](dynamics_365_business_central/errors/unpublish_extension_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Features

> Source: [Features](dynamics_365_business_central/apis/features.py)

<details>
<summary><code>def activate_feature(company_id: UUID, feature_id: str, *, body: CompaniesApiFeaturesApiMicrosoftNavActivateRequest | CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ActivateFeatureErrorBody]</code></summary>

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
result = client.features.with_raw_response.activate_feature(
    UUID("00000000-0000-0000-0000-000000000000"),
    "500123",
    body=CompaniesApiFeaturesApiMicrosoftNavActivateRequest(
        update_in_background=True, start_date_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateFeatureErrorBody
```

**Async**

```python
result = await async_client.features.with_raw_response.activate_feature(
    UUID("00000000-0000-0000-0000-000000000000"),
    "500123",
    body=CompaniesApiFeaturesApiMicrosoftNavActivateRequest(
        update_in_background=True, start_date_time=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateFeatureErrorBody
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
| <code>body</code> | <code>[CompaniesApiFeaturesApiMicrosoftNavActivateRequest](dynamics_365_business_central/models/companies_api_features_api_microsoft_nav_activate_request.py) \| [CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict](dynamics_365_business_central/models/companies_api_features_api_microsoft_nav_activate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [ActivateFeatureErrorBody](dynamics_365_business_central/errors/activate_feature_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ActivateFeatureErrorBody](dynamics_365_business_central/errors/activate_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deactivate_feature(company_id: UUID, feature_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeactivateFeatureErrorBody]</code></summary>

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
result = client.features.with_raw_response.deactivate_feature(UUID("00000000-0000-0000-0000-000000000000"), "500123")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeactivateFeatureErrorBody
```

**Async**

```python
result = await async_client.features.with_raw_response.deactivate_feature(
    UUID("00000000-0000-0000-0000-000000000000"), "500123"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeactivateFeatureErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeactivateFeatureErrorBody](dynamics_365_business_central/errors/deactivate_feature_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeactivateFeatureErrorBody](dynamics_365_business_central/errors/deactivate_feature_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_features(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiFeaturesResponse, ListFeaturesErrorBody]</code></summary>

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
result = client.features.with_raw_response.list_features(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFeaturesErrorBody
```

**Async**

```python
result = await async_client.features.with_raw_response.list_features(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiFeaturesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFeaturesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiFeaturesResponse](dynamics_365_business_central/models/companies_api_features_response.py), [ListFeaturesErrorBody](dynamics_365_business_central/errors/list_features_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiFeaturesResponse](dynamics_365_business_central/models/companies_api_features_response.py)</code> -- Successfully retrieved features

**On `Failure`**: `error` is <code>[ListFeaturesErrorBody](dynamics_365_business_central/errors/list_features_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ItemCategories

> Source: [ItemCategories](dynamics_365_business_central/apis/item_categories.py)

<details>
<summary><code>def list_item_categories(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiItemCategoriesResponse, ListItemCategoriesErrorBody]</code></summary>

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
result = client.item_categories.with_raw_response.list_item_categories(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiItemCategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemCategoriesErrorBody
```

**Async**

```python
result = await async_client.item_categories.with_raw_response.list_item_categories(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiItemCategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemCategoriesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiItemCategoriesResponse](dynamics_365_business_central/models/companies_api_item_categories_response.py), [ListItemCategoriesErrorBody](dynamics_365_business_central/errors/list_item_categories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiItemCategoriesResponse](dynamics_365_business_central/models/companies_api_item_categories_response.py)</code> -- Successfully retrieved item categories

**On `Failure`**: `error` is <code>[ListItemCategoriesErrorBody](dynamics_365_business_central/errors/list_item_categories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](dynamics_365_business_central/apis/items.py)

<details>
<summary><code>def create_item(company_id: UUID, body: ItemCreate | ItemCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, CreateItemErrorBody]</code></summary>

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
result = client.items.with_raw_response.create_item(
    UUID("00000000-0000-0000-0000-000000000000"), ItemCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.create_item(
    UUID("00000000-0000-0000-0000-000000000000"), ItemCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[ItemCreate](dynamics_365_business_central/models/item_create.py) \| [ItemCreateDict](dynamics_365_business_central/models/item_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Item](dynamics_365_business_central/models/item.py), [CreateItemErrorBody](dynamics_365_business_central/errors/create_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](dynamics_365_business_central/models/item.py)</code> -- Item created successfully

**On `Failure`**: `error` is <code>[CreateItemErrorBody](dynamics_365_business_central/errors/create_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_item(company_id: UUID, item_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteItemErrorBody]</code></summary>

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
result = client.items.with_raw_response.delete_item(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.delete_item(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteItemErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeleteItemErrorBody](dynamics_365_business_central/errors/delete_item_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteItemErrorBody](dynamics_365_business_central/errors/delete_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_item(company_id: UUID, item_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, GetItemErrorBody]</code></summary>

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
result = client.items.with_raw_response.get_item(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.get_item(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetItemErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Item](dynamics_365_business_central/models/item.py), [GetItemErrorBody](dynamics_365_business_central/errors/get_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](dynamics_365_business_central/models/item.py)</code> -- Successfully retrieved item

**On `Failure`**: `error` is <code>[GetItemErrorBody](dynamics_365_business_central/errors/get_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_items(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiItemsResponse, ListItemsErrorBody]</code></summary>

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
result = client.items.with_raw_response.list_items(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiItemsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemsErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.list_items(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiItemsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListItemsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiItemsResponse](dynamics_365_business_central/models/companies_api_items_response.py), [ListItemsErrorBody](dynamics_365_business_central/errors/list_items_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiItemsResponse](dynamics_365_business_central/models/companies_api_items_response.py)</code> -- Successfully retrieved items

**On `Failure`**: `error` is <code>[ListItemsErrorBody](dynamics_365_business_central/errors/list_items_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_item(company_id: UUID, item_id: UUID, if_match: str, body: ItemUpdate | ItemUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Item, UpdateItemErrorBody]</code></summary>

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
result = client.items.with_raw_response.update_item(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ItemUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateItemErrorBody
```

**Async**

```python
result = await async_client.items.with_raw_response.update_item(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ItemUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Item
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateItemErrorBody
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
| <code>body</code> | <code>[ItemUpdate](dynamics_365_business_central/models/item_update.py) \| [ItemUpdateDict](dynamics_365_business_central/models/item_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Item](dynamics_365_business_central/models/item.py), [UpdateItemErrorBody](dynamics_365_business_central/errors/update_item_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Item](dynamics_365_business_central/models/item.py)</code> -- Item updated successfully

**On `Failure`**: `error` is <code>[UpdateItemErrorBody](dynamics_365_business_central/errors/update_item_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Journals

> Source: [Journals](dynamics_365_business_central/apis/journals.py)

<details>
<summary><code>def create_journal(company_id: UUID, body: JournalCreate | JournalCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Journal, CreateJournalErrorBody]</code></summary>

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
result = client.journals.with_raw_response.create_journal(
    UUID("00000000-0000-0000-0000-000000000000"),
    JournalCreate(code="some example string", display_name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Journal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateJournalErrorBody
```

**Async**

```python
result = await async_client.journals.with_raw_response.create_journal(
    UUID("00000000-0000-0000-0000-000000000000"),
    JournalCreate(code="some example string", display_name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Journal
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateJournalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[JournalCreate](dynamics_365_business_central/models/journal_create.py) \| [JournalCreateDict](dynamics_365_business_central/models/journal_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Journal](dynamics_365_business_central/models/journal.py), [CreateJournalErrorBody](dynamics_365_business_central/errors/create_journal_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Journal](dynamics_365_business_central/models/journal.py)</code> -- Journal created successfully

**On `Failure`**: `error` is <code>[CreateJournalErrorBody](dynamics_365_business_central/errors/create_journal_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_journal_lines(company_id: UUID, journal_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiJournalsApiJournalLinesResponse, ListJournalLinesErrorBody]</code></summary>

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
result = client.journals.with_raw_response.list_journal_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiJournalsApiJournalLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJournalLinesErrorBody
```

**Async**

```python
result = await async_client.journals.with_raw_response.list_journal_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiJournalsApiJournalLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJournalLinesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiJournalsApiJournalLinesResponse](dynamics_365_business_central/models/companies_api_journals_api_journal_lines_response.py), [ListJournalLinesErrorBody](dynamics_365_business_central/errors/list_journal_lines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiJournalsApiJournalLinesResponse](dynamics_365_business_central/models/companies_api_journals_api_journal_lines_response.py)</code> -- Successfully retrieved journal lines

**On `Failure`**: `error` is <code>[ListJournalLinesErrorBody](dynamics_365_business_central/errors/list_journal_lines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiJournalsResponse, ListJournalsErrorBody]</code></summary>

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
result = client.journals.with_raw_response.list_journals(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJournalsErrorBody
```

**Async**

```python
result = await async_client.journals.with_raw_response.list_journals(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJournalsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiJournalsResponse](dynamics_365_business_central/models/companies_api_journals_response.py), [ListJournalsErrorBody](dynamics_365_business_central/errors/list_journals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiJournalsResponse](dynamics_365_business_central/models/companies_api_journals_response.py)</code> -- Successfully retrieved journals

**On `Failure`**: `error` is <code>[ListJournalsErrorBody](dynamics_365_business_central/errors/list_journals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](dynamics_365_business_central/apis/notifications.py)

<details>
<summary><code>def add_notification_recipient(environment_name: str, body: NotificationRecipient | NotificationRecipientDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotificationRecipient, AddNotificationRecipientErrorBody]</code></summary>

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
result = client.notifications.with_raw_response.add_notification_recipient(
    "some example string",
    NotificationRecipient(id=UUID("abc123"), name="Example Title", email="user@example.com"),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationRecipient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddNotificationRecipientErrorBody
```

**Async**

```python
result = await async_client.notifications.with_raw_response.add_notification_recipient(
    "some example string",
    NotificationRecipient(id=UUID("abc123"), name="Example Title", email="user@example.com"),
    application_family="some example string",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotificationRecipient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddNotificationRecipientErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[NotificationRecipient](dynamics_365_business_central/models/notification_recipient.py) \| [NotificationRecipientDict](dynamics_365_business_central/models/notification_recipient.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[NotificationRecipient](dynamics_365_business_central/models/notification_recipient.py), [AddNotificationRecipientErrorBody](dynamics_365_business_central/errors/add_notification_recipient_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotificationRecipient](dynamics_365_business_central/models/notification_recipient.py)</code> -- Notification recipient added

**On `Failure`**: `error` is <code>[AddNotificationRecipientErrorBody](dynamics_365_business_central/errors/add_notification_recipient_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_notifications_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_notification_recipients(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApplicationsEnvironmentsNotificationsResponse, ListNotificationRecipientsErrorBody]</code></summary>

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
result = client.notifications.with_raw_response.list_notification_recipients(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsNotificationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNotificationRecipientsErrorBody
```

**Async**

```python
result = await async_client.notifications.with_raw_response.list_notification_recipients(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApplicationsEnvironmentsNotificationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListNotificationRecipientsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ApplicationsEnvironmentsNotificationsResponse](dynamics_365_business_central/models/applications_environments_notifications_response.py), [ListNotificationRecipientsErrorBody](dynamics_365_business_central/errors/list_notification_recipients_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApplicationsEnvironmentsNotificationsResponse](dynamics_365_business_central/models/applications_environments_notifications_response.py)</code> -- Successfully retrieved notification recipients

**On `Failure`**: `error` is <code>[ListNotificationRecipientsErrorBody](dynamics_365_business_central/errors/list_notification_recipients_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterNotificationsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_notifications_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethods

> Source: [PaymentMethods](dynamics_365_business_central/apis/payment_methods.py)

<details>
<summary><code>def list_payment_methods(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPaymentMethodsResponse, ListPaymentMethodsErrorBody]</code></summary>

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
result = client.payment_methods.with_raw_response.list_payment_methods(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPaymentMethodsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentMethodsErrorBody
```

**Async**

```python
result = await async_client.payment_methods.with_raw_response.list_payment_methods(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPaymentMethodsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentMethodsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPaymentMethodsResponse](dynamics_365_business_central/models/companies_api_payment_methods_response.py), [ListPaymentMethodsErrorBody](dynamics_365_business_central/errors/list_payment_methods_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPaymentMethodsResponse](dynamics_365_business_central/models/companies_api_payment_methods_response.py)</code> -- Successfully retrieved payment methods

**On `Failure`**: `error` is <code>[ListPaymentMethodsErrorBody](dynamics_365_business_central/errors/list_payment_methods_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](dynamics_365_business_central/apis/payment_terms.py)

<details>
<summary><code>def list_payment_terms(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPaymentTermsResponse, ListPaymentTermsErrorBody]</code></summary>

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
result = client.payment_terms.with_raw_response.list_payment_terms(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPaymentTermsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentTermsErrorBody
```

**Async**

```python
result = await async_client.payment_terms.with_raw_response.list_payment_terms(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPaymentTermsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPaymentTermsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPaymentTermsResponse](dynamics_365_business_central/models/companies_api_payment_terms_response.py), [ListPaymentTermsErrorBody](dynamics_365_business_central/errors/list_payment_terms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPaymentTermsResponse](dynamics_365_business_central/models/companies_api_payment_terms_response.py)</code> -- Successfully retrieved payment terms

**On `Failure`**: `error` is <code>[ListPaymentTermsErrorBody](dynamics_365_business_central/errors/list_payment_terms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PermissionSets

> Source: [PermissionSets](dynamics_365_business_central/apis/permission_sets.py)

<details>
<summary><code>def create_user_permission(company_id: UUID, user_id: UUID, body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserPermission, CreateUserPermissionErrorBody]</code></summary>

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
result = client.permission_sets.with_raw_response.create_user_permission(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    CompaniesApiUsersApiUserPermissionsRequest(role_id="500123"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPermission
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserPermissionErrorBody
```

**Async**

```python
result = await async_client.permission_sets.with_raw_response.create_user_permission(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    CompaniesApiUsersApiUserPermissionsRequest(role_id="500123"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserPermission
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateUserPermissionErrorBody
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
| <code>body</code> | <code>[CompaniesApiUsersApiUserPermissionsRequest](dynamics_365_business_central/models/companies_api_users_api_user_permissions_request.py) \| [CompaniesApiUsersApiUserPermissionsRequestDict](dynamics_365_business_central/models/companies_api_users_api_user_permissions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[UserPermission](dynamics_365_business_central/models/user_permission.py), [CreateUserPermissionErrorBody](dynamics_365_business_central/errors/create_user_permission_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserPermission](dynamics_365_business_central/models/user_permission.py)</code> -- Permission set assigned

**On `Failure`**: `error` is <code>[CreateUserPermissionErrorBody](dynamics_365_business_central/errors/create_user_permission_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_permission_sets(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPermissionSetsResponse, ListPermissionSetsErrorBody]</code></summary>

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
result = client.permission_sets.with_raw_response.list_permission_sets(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPermissionSetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPermissionSetsErrorBody
```

**Async**

```python
result = await async_client.permission_sets.with_raw_response.list_permission_sets(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPermissionSetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPermissionSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPermissionSetsResponse](dynamics_365_business_central/models/companies_api_permission_sets_response.py), [ListPermissionSetsErrorBody](dynamics_365_business_central/errors/list_permission_sets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPermissionSetsResponse](dynamics_365_business_central/models/companies_api_permission_sets_response.py)</code> -- Successfully retrieved permission sets

**On `Failure`**: `error` is <code>[ListPermissionSetsErrorBody](dynamics_365_business_central/errors/list_permission_sets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_user_permissions(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiUsersApiUserPermissionsResponse, ListUserPermissionsErrorBody]</code></summary>

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
result = client.permission_sets.with_raw_response.list_user_permissions(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiUsersApiUserPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUserPermissionsErrorBody
```

**Async**

```python
result = await async_client.permission_sets.with_raw_response.list_user_permissions(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiUsersApiUserPermissionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUserPermissionsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiUsersApiUserPermissionsResponse](dynamics_365_business_central/models/companies_api_users_api_user_permissions_response.py), [ListUserPermissionsErrorBody](dynamics_365_business_central/errors/list_user_permissions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiUsersApiUserPermissionsResponse](dynamics_365_business_central/models/companies_api_users_api_user_permissions_response.py)</code> -- Successfully retrieved user permissions

**On `Failure`**: `error` is <code>[ListUserPermissionsErrorBody](dynamics_365_business_central/errors/list_user_permissions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](dynamics_365_business_central/apis/profiles.py)

<details>
<summary><code>def list_profiles(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiProfilesResponse, ListProfilesErrorBody]</code></summary>

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
result = client.profiles.with_raw_response.list_profiles(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiProfilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProfilesErrorBody
```

**Async**

```python
result = await async_client.profiles.with_raw_response.list_profiles(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiProfilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProfilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiProfilesResponse](dynamics_365_business_central/models/companies_api_profiles_response.py), [ListProfilesErrorBody](dynamics_365_business_central/errors/list_profiles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiProfilesResponse](dynamics_365_business_central/models/companies_api_profiles_response.py)</code> -- Successfully retrieved profiles

**On `Failure`**: `error` is <code>[ListProfilesErrorBody](dynamics_365_business_central/errors/list_profiles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseInvoices

> Source: [PurchaseInvoices](dynamics_365_business_central/apis/purchase_invoices.py)

<details>
<summary><code>def create_purchase_invoice(company_id: UUID, body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PurchaseInvoice, CreatePurchaseInvoiceErrorBody]</code></summary>

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
result = client.purchase_invoices.with_raw_response.create_purchase_invoice(
    UUID("00000000-0000-0000-0000-000000000000"), PurchaseInvoiceCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseInvoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePurchaseInvoiceErrorBody
```

**Async**

```python
result = await async_client.purchase_invoices.with_raw_response.create_purchase_invoice(
    UUID("00000000-0000-0000-0000-000000000000"), PurchaseInvoiceCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseInvoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePurchaseInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseInvoiceCreate](dynamics_365_business_central/models/purchase_invoice_create.py) \| [PurchaseInvoiceCreateDict](dynamics_365_business_central/models/purchase_invoice_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[PurchaseInvoice](dynamics_365_business_central/models/purchase_invoice.py), [CreatePurchaseInvoiceErrorBody](dynamics_365_business_central/errors/create_purchase_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PurchaseInvoice](dynamics_365_business_central/models/purchase_invoice.py)</code> -- Purchase invoice created successfully

**On `Failure`**: `error` is <code>[CreatePurchaseInvoiceErrorBody](dynamics_365_business_central/errors/create_purchase_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPurchaseInvoicesResponse, ListPurchaseInvoicesErrorBody]</code></summary>

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
result = client.purchase_invoices.with_raw_response.list_purchase_invoices(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseInvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseInvoicesErrorBody
```

**Async**

```python
result = await async_client.purchase_invoices.with_raw_response.list_purchase_invoices(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseInvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseInvoicesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPurchaseInvoicesResponse](dynamics_365_business_central/models/companies_api_purchase_invoices_response.py), [ListPurchaseInvoicesErrorBody](dynamics_365_business_central/errors/list_purchase_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPurchaseInvoicesResponse](dynamics_365_business_central/models/companies_api_purchase_invoices_response.py)</code> -- Successfully retrieved purchase invoices

**On `Failure`**: `error` is <code>[ListPurchaseInvoicesErrorBody](dynamics_365_business_central/errors/list_purchase_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrders

> Source: [PurchaseOrders](dynamics_365_business_central/apis/purchase_orders.py)

<details>
<summary><code>def create_purchase_order(company_id: UUID, body: PurchaseOrderCreate | PurchaseOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PurchaseOrder, CreatePurchaseOrderErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.create_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), PurchaseOrderCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePurchaseOrderErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.create_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), PurchaseOrderCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePurchaseOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseOrderCreate](dynamics_365_business_central/models/purchase_order_create.py) \| [PurchaseOrderCreateDict](dynamics_365_business_central/models/purchase_order_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py), [CreatePurchaseOrderErrorBody](dynamics_365_business_central/errors/create_purchase_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py)</code> -- Purchase order created successfully

**On `Failure`**: `error` is <code>[CreatePurchaseOrderErrorBody](dynamics_365_business_central/errors/create_purchase_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_purchase_order(company_id: UUID, purchase_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeletePurchaseOrderErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.delete_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePurchaseOrderErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.delete_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePurchaseOrderErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeletePurchaseOrderErrorBody](dynamics_365_business_central/errors/delete_purchase_order_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeletePurchaseOrderErrorBody](dynamics_365_business_central/errors/delete_purchase_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_purchase_order(company_id: UUID, purchase_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PurchaseOrder, GetPurchaseOrderErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.get_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPurchaseOrderErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.get_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPurchaseOrderErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py), [GetPurchaseOrderErrorBody](dynamics_365_business_central/errors/get_purchase_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py)</code> -- Successfully retrieved purchase order

**On `Failure`**: `error` is <code>[GetPurchaseOrderErrorBody](dynamics_365_business_central/errors/get_purchase_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_order_lines(company_id: UUID, purchase_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, ListPurchaseOrderLinesErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.list_purchase_order_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseOrderLinesErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.list_purchase_order_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseOrderLinesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](dynamics_365_business_central/models/companies_api_purchase_orders_api_purchase_order_lines_response.py), [ListPurchaseOrderLinesErrorBody](dynamics_365_business_central/errors/list_purchase_order_lines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](dynamics_365_business_central/models/companies_api_purchase_orders_api_purchase_order_lines_response.py)</code> -- Successfully retrieved purchase order lines

**On `Failure`**: `error` is <code>[ListPurchaseOrderLinesErrorBody](dynamics_365_business_central/errors/list_purchase_order_lines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_purchase_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiPurchaseOrdersResponse, ListPurchaseOrdersErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.list_purchase_orders(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseOrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseOrdersErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.list_purchase_orders(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiPurchaseOrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPurchaseOrdersErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiPurchaseOrdersResponse](dynamics_365_business_central/models/companies_api_purchase_orders_response.py), [ListPurchaseOrdersErrorBody](dynamics_365_business_central/errors/list_purchase_orders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiPurchaseOrdersResponse](dynamics_365_business_central/models/companies_api_purchase_orders_response.py)</code> -- Successfully retrieved purchase orders

**On `Failure`**: `error` is <code>[ListPurchaseOrdersErrorBody](dynamics_365_business_central/errors/list_purchase_orders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_purchase_order(company_id: UUID, purchase_order_id: UUID, if_match: str, body: PurchaseOrderUpdate | PurchaseOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PurchaseOrder, UpdatePurchaseOrderErrorBody]</code></summary>

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
result = client.purchase_orders.with_raw_response.update_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    PurchaseOrderUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePurchaseOrderErrorBody
```

**Async**

```python
result = await async_client.purchase_orders.with_raw_response.update_purchase_order(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    PurchaseOrderUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PurchaseOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePurchaseOrderErrorBody
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
| <code>body</code> | <code>[PurchaseOrderUpdate](dynamics_365_business_central/models/purchase_order_update.py) \| [PurchaseOrderUpdateDict](dynamics_365_business_central/models/purchase_order_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py), [UpdatePurchaseOrderErrorBody](dynamics_365_business_central/errors/update_purchase_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PurchaseOrder](dynamics_365_business_central/models/purchase_order.py)</code> -- Purchase order updated successfully

**On `Failure`**: `error` is <code>[UpdatePurchaseOrderErrorBody](dynamics_365_business_central/errors/update_purchase_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SalesInvoices

> Source: [SalesInvoices](dynamics_365_business_central/apis/sales_invoices.py)

<details>
<summary><code>def create_sales_invoice(company_id: UUID, body: SalesInvoiceCreate | SalesInvoiceCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SalesInvoice, CreateSalesInvoiceErrorBody]</code></summary>

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
result = client.sales_invoices.with_raw_response.create_sales_invoice(
    UUID("00000000-0000-0000-0000-000000000000"), SalesInvoiceCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesInvoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSalesInvoiceErrorBody
```

**Async**

```python
result = await async_client.sales_invoices.with_raw_response.create_sales_invoice(
    UUID("00000000-0000-0000-0000-000000000000"), SalesInvoiceCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesInvoice
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSalesInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesInvoiceCreate](dynamics_365_business_central/models/sales_invoice_create.py) \| [SalesInvoiceCreateDict](dynamics_365_business_central/models/sales_invoice_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[SalesInvoice](dynamics_365_business_central/models/sales_invoice.py), [CreateSalesInvoiceErrorBody](dynamics_365_business_central/errors/create_sales_invoice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SalesInvoice](dynamics_365_business_central/models/sales_invoice.py)</code> -- Sales invoice created successfully

**On `Failure`**: `error` is <code>[CreateSalesInvoiceErrorBody](dynamics_365_business_central/errors/create_sales_invoice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_invoices(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiSalesInvoicesResponse, ListSalesInvoicesErrorBody]</code></summary>

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
result = client.sales_invoices.with_raw_response.list_sales_invoices(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesInvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesInvoicesErrorBody
```

**Async**

```python
result = await async_client.sales_invoices.with_raw_response.list_sales_invoices(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesInvoicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesInvoicesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiSalesInvoicesResponse](dynamics_365_business_central/models/companies_api_sales_invoices_response.py), [ListSalesInvoicesErrorBody](dynamics_365_business_central/errors/list_sales_invoices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiSalesInvoicesResponse](dynamics_365_business_central/models/companies_api_sales_invoices_response.py)</code> -- Successfully retrieved sales invoices

**On `Failure`**: `error` is <code>[ListSalesInvoicesErrorBody](dynamics_365_business_central/errors/list_sales_invoices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SalesOrders

> Source: [SalesOrders](dynamics_365_business_central/apis/sales_orders.py)

<details>
<summary><code>def create_sales_order(company_id: UUID, body: SalesOrderCreate | SalesOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SalesOrder, CreateSalesOrderErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.create_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), SalesOrderCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSalesOrderErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.create_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), SalesOrderCreate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSalesOrderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesOrderCreate](dynamics_365_business_central/models/sales_order_create.py) \| [SalesOrderCreateDict](dynamics_365_business_central/models/sales_order_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[SalesOrder](dynamics_365_business_central/models/sales_order.py), [CreateSalesOrderErrorBody](dynamics_365_business_central/errors/create_sales_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SalesOrder](dynamics_365_business_central/models/sales_order.py)</code> -- Sales order created successfully

**On `Failure`**: `error` is <code>[CreateSalesOrderErrorBody](dynamics_365_business_central/errors/create_sales_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_sales_order(company_id: UUID, sales_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSalesOrderErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.delete_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSalesOrderErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.delete_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSalesOrderErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeleteSalesOrderErrorBody](dynamics_365_business_central/errors/delete_sales_order_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSalesOrderErrorBody](dynamics_365_business_central/errors/delete_sales_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sales_order(company_id: UUID, sales_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SalesOrder, GetSalesOrderErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.get_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSalesOrderErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.get_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSalesOrderErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[SalesOrder](dynamics_365_business_central/models/sales_order.py), [GetSalesOrderErrorBody](dynamics_365_business_central/errors/get_sales_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SalesOrder](dynamics_365_business_central/models/sales_order.py)</code> -- Successfully retrieved sales order

**On `Failure`**: `error` is <code>[GetSalesOrderErrorBody](dynamics_365_business_central/errors/get_sales_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_order_lines(company_id: UUID, sales_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiSalesOrdersApiSalesOrderLinesResponse, ListSalesOrderLinesErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.list_sales_order_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesOrderLinesErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.list_sales_order_lines(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesOrderLinesErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](dynamics_365_business_central/models/companies_api_sales_orders_api_sales_order_lines_response.py), [ListSalesOrderLinesErrorBody](dynamics_365_business_central/errors/list_sales_order_lines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](dynamics_365_business_central/models/companies_api_sales_orders_api_sales_order_lines_response.py)</code> -- Successfully retrieved sales order lines

**On `Failure`**: `error` is <code>[ListSalesOrderLinesErrorBody](dynamics_365_business_central/errors/list_sales_order_lines_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sales_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiSalesOrdersResponse, ListSalesOrdersErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.list_sales_orders(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesOrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesOrdersErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.list_sales_orders(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSalesOrdersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSalesOrdersErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiSalesOrdersResponse](dynamics_365_business_central/models/companies_api_sales_orders_response.py), [ListSalesOrdersErrorBody](dynamics_365_business_central/errors/list_sales_orders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiSalesOrdersResponse](dynamics_365_business_central/models/companies_api_sales_orders_response.py)</code> -- Successfully retrieved sales orders

**On `Failure`**: `error` is <code>[ListSalesOrdersErrorBody](dynamics_365_business_central/errors/list_sales_orders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_sales_order(company_id: UUID, sales_order_id: UUID, if_match: str, body: SalesOrderUpdate | SalesOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SalesOrder, UpdateSalesOrderErrorBody]</code></summary>

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
result = client.sales_orders.with_raw_response.update_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    SalesOrderUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSalesOrderErrorBody
```

**Async**

```python
result = await async_client.sales_orders.with_raw_response.update_sales_order(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    SalesOrderUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SalesOrder
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSalesOrderErrorBody
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
| <code>body</code> | <code>[SalesOrderUpdate](dynamics_365_business_central/models/sales_order_update.py) \| [SalesOrderUpdateDict](dynamics_365_business_central/models/sales_order_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[SalesOrder](dynamics_365_business_central/models/sales_order.py), [UpdateSalesOrderErrorBody](dynamics_365_business_central/errors/update_sales_order_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SalesOrder](dynamics_365_business_central/models/sales_order.py)</code> -- Sales order updated successfully

**On `Failure`**: `error` is <code>[UpdateSalesOrderErrorBody](dynamics_365_business_central/errors/update_sales_order_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduledJobs

> Source: [ScheduledJobs](dynamics_365_business_central/apis/scheduled_jobs.py)

<details>
<summary><code>def list_scheduled_jobs(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiScheduledJobsResponse, ListScheduledJobsErrorBody]</code></summary>

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
result = client.scheduled_jobs.with_raw_response.list_scheduled_jobs(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiScheduledJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScheduledJobsErrorBody
```

**Async**

```python
result = await async_client.scheduled_jobs.with_raw_response.list_scheduled_jobs(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiScheduledJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScheduledJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiScheduledJobsResponse](dynamics_365_business_central/models/companies_api_scheduled_jobs_response.py), [ListScheduledJobsErrorBody](dynamics_365_business_central/errors/list_scheduled_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiScheduledJobsResponse](dynamics_365_business_central/models/companies_api_scheduled_jobs_response.py)</code> -- Successfully retrieved scheduled jobs

**On `Failure`**: `error` is <code>[ListScheduledJobsErrorBody](dynamics_365_business_central/errors/list_scheduled_jobs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SecurityGroups

> Source: [SecurityGroups](dynamics_365_business_central/apis/security_groups.py)

<details>
<summary><code>def list_security_groups(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiSecurityGroupsResponse, ListSecurityGroupsErrorBody]</code></summary>

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
result = client.security_groups.with_raw_response.list_security_groups(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSecurityGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSecurityGroupsErrorBody
```

**Async**

```python
result = await async_client.security_groups.with_raw_response.list_security_groups(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiSecurityGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSecurityGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiSecurityGroupsResponse](dynamics_365_business_central/models/companies_api_security_groups_response.py), [ListSecurityGroupsErrorBody](dynamics_365_business_central/errors/list_security_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiSecurityGroupsResponse](dynamics_365_business_central/models/companies_api_security_groups_response.py)</code> -- Successfully retrieved security groups

**On `Failure`**: `error` is <code>[ListSecurityGroupsErrorBody](dynamics_365_business_central/errors/list_security_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](dynamics_365_business_central/apis/storage.py)

<details>
<summary><code>def get_all_environments_storage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentsUsedstorageResponse, GetAllEnvironmentsStorageErrorBody]</code></summary>

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
result = client.storage.with_raw_response.get_all_environments_storage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentsUsedstorageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEnvironmentsStorageErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.get_all_environments_storage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentsUsedstorageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEnvironmentsStorageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[EnvironmentsUsedstorageResponse](dynamics_365_business_central/models/environments_usedstorage_response.py), [GetAllEnvironmentsStorageErrorBody](dynamics_365_business_central/errors/get_all_environments_storage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentsUsedstorageResponse](dynamics_365_business_central/models/environments_usedstorage_response.py)</code> -- Successfully retrieved storage usage

**On `Failure`**: `error` is <code>[GetAllEnvironmentsStorageErrorBody](dynamics_365_business_central/errors/get_all_environments_storage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment_storage(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsedStorage, GetEnvironmentStorageErrorBody]</code></summary>

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
result = client.storage.with_raw_response.get_environment_storage(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsedStorage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentStorageErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.get_environment_storage(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsedStorage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentStorageErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[UsedStorage](dynamics_365_business_central/models/used_storage.py), [GetEnvironmentStorageErrorBody](dynamics_365_business_central/errors/get_environment_storage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsedStorage](dynamics_365_business_central/models/used_storage.py)</code> -- Successfully retrieved storage usage

**On `Failure`**: `error` is <code>[GetEnvironmentStorageErrorBody](dynamics_365_business_central/errors/get_environment_storage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_quotas(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Quotas, GetQuotasErrorBody]</code></summary>

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
result = client.storage.with_raw_response.get_quotas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Quotas
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQuotasErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.get_quotas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Quotas
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQuotasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Quotas](dynamics_365_business_central/models/quotas.py), [GetQuotasErrorBody](dynamics_365_business_central/errors/get_quotas_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Quotas](dynamics_365_business_central/models/quotas.py)</code> -- Successfully retrieved quotas

**On `Failure`**: `error` is <code>[GetQuotasErrorBody](dynamics_365_business_central/errors/get_quotas_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterStorageApi](dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SupportSettingsApi

> Source: [SupportSettingsApi](dynamics_365_business_central/apis/support_settings_api.py)

<details>
<summary><code>def get_support_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportSettings, GetSupportSettingsErrorBody]</code></summary>

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
result = client.support_settings_api.with_raw_response.get_support_settings(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSupportSettingsErrorBody
```

**Async**

```python
result = await async_client.support_settings_api.with_raw_response.get_support_settings(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportSettings
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSupportSettingsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[SupportSettings](dynamics_365_business_central/models/support_settings.py), [GetSupportSettingsErrorBody](dynamics_365_business_central/errors/get_support_settings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportSettings](dynamics_365_business_central/models/support_settings.py)</code> -- Successfully retrieved support settings

**On `Failure`**: `error` is <code>[GetSupportSettingsErrorBody](dynamics_365_business_central/errors/get_support_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi](dynamics_365_business_central/models/error_response_business_central_administration_center_support_settings_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateManagement

> Source: [UpdateManagement](dynamics_365_business_central/apis/update_management.py)

<details>
<summary><code>def get_scheduled_upgrade(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScheduledUpgrade, GetScheduledUpgradeErrorBody]</code></summary>

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
result = client.update_management.with_raw_response.get_scheduled_upgrade(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScheduledUpgrade
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScheduledUpgradeErrorBody
```

**Async**

```python
result = await async_client.update_management.with_raw_response.get_scheduled_upgrade(
    "some example string", application_family="some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScheduledUpgrade
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScheduledUpgradeErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[ScheduledUpgrade](dynamics_365_business_central/models/scheduled_upgrade.py), [GetScheduledUpgradeErrorBody](dynamics_365_business_central/errors/get_scheduled_upgrade_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScheduledUpgrade](dynamics_365_business_central/models/scheduled_upgrade.py)</code> -- Successfully retrieved scheduled upgrade information

**On `Failure`**: `error` is <code>[GetScheduledUpgradeErrorBody](dynamics_365_business_central/errors/get_scheduled_upgrade_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_update_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_update_settings(environment_name: str, body: UpdateSettings | UpdateSettingsDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SetUpdateSettingsErrorBody]</code></summary>

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
result = client.update_management.with_raw_response.set_update_settings(
    "some example string", UpdateSettings(), application_family="some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetUpdateSettingsErrorBody
```

**Async**

```python
result = await async_client.update_management.with_raw_response.set_update_settings(
    "some example string", UpdateSettings(), application_family="some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetUpdateSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment_name</code> | <code>str</code> | The name of the environment |
| <code>body</code> | <code>[UpdateSettings](dynamics_365_business_central/models/update_settings.py) \| [UpdateSettingsDict](dynamics_365_business_central/models/update_settings.py)</code> | The request body. |
| <code>application_family</code> | <code>str</code> | The application family (e.g., BusinessCentral)<br>**Default**: <code>"BusinessCentral"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [SetUpdateSettingsErrorBody](dynamics_365_business_central/errors/set_update_settings_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SetUpdateSettingsErrorBody](dynamics_365_business_central/errors/set_update_settings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi](dynamics_365_business_central/models/error_response_business_central_administration_center_update_management_api.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](dynamics_365_business_central/apis/users.py)

<details>
<summary><code>def get_new_users_from_office365(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetNewUsersFromOffice365ErrorBody]</code></summary>

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
result = client.users.with_raw_response.get_new_users_from_office365(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewUsersFromOffice365ErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_new_users_from_office365(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewUsersFromOffice365ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [GetNewUsersFromOffice365ErrorBody](dynamics_365_business_central/errors/get_new_users_from_office365_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetNewUsersFromOffice365ErrorBody](dynamics_365_business_central/errors/get_new_users_from_office365_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_new_users_from_office365_async(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetNewUsersFromOffice365AsyncErrorBody]</code></summary>

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
result = client.users.with_raw_response.get_new_users_from_office365_async(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewUsersFromOffice365AsyncErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_new_users_from_office365_async(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewUsersFromOffice365AsyncErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [GetNewUsersFromOffice365AsyncErrorBody](dynamics_365_business_central/errors/get_new_users_from_office365_async_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetNewUsersFromOffice365AsyncErrorBody](dynamics_365_business_central/errors/get_new_users_from_office365_async_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.get_user(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_user(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
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
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>user_id</code> | <code>UUID</code> | The user security ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[User](dynamics_365_business_central/models/user.py), [GetUserErrorBody](dynamics_365_business_central/errors/get_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](dynamics_365_business_central/models/user.py)</code> -- Successfully retrieved user

**On `Failure`**: `error` is <code>[GetUserErrorBody](dynamics_365_business_central/errors/get_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiUsersResponse, ListUsersErrorBody]</code></summary>

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
result = client.users.with_raw_response.list_users(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiUsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListUsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.list_users(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiUsersResponse
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
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiUsersResponse](dynamics_365_business_central/models/companies_api_users_response.py), [ListUsersErrorBody](dynamics_365_business_central/errors/list_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiUsersResponse](dynamics_365_business_central/models/companies_api_users_response.py)</code> -- Successfully retrieved users

**On `Failure`**: `error` is <code>[ListUsersErrorBody](dynamics_365_business_central/errors/list_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(company_id: UUID, user_id: UUID, if_match: str, body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, UpdateUserErrorBody]</code></summary>

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
result = client.users.with_raw_response.update_user(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    UserUpdate(state=State.ENABLED, expiry_date=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.update_user(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    UserUpdate(state=State.ENABLED, expiry_date=datetime(2026, 1, 15, 10, 30, 0, tzinfo=timezone.utc)),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
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
| <code>body</code> | <code>[UserUpdate](dynamics_365_business_central/models/user_update.py) \| [UserUpdateDict](dynamics_365_business_central/models/user_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[User](dynamics_365_business_central/models/user.py), [UpdateUserErrorBody](dynamics_365_business_central/errors/update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](dynamics_365_business_central/models/user.py)</code> -- User updated successfully

**On `Failure`**: `error` is <code>[UpdateUserErrorBody](dynamics_365_business_central/errors/update_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VendorPayments

> Source: [VendorPayments](dynamics_365_business_central/apis/vendor_payments.py)

<details>
<summary><code>def list_vendor_payment_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiVendorPaymentJournalsResponse, ListVendorPaymentJournalsErrorBody]</code></summary>

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
result = client.vendor_payments.with_raw_response.list_vendor_payment_journals(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiVendorPaymentJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVendorPaymentJournalsErrorBody
```

**Async**

```python
result = await async_client.vendor_payments.with_raw_response.list_vendor_payment_journals(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiVendorPaymentJournalsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVendorPaymentJournalsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiVendorPaymentJournalsResponse](dynamics_365_business_central/models/companies_api_vendor_payment_journals_response.py), [ListVendorPaymentJournalsErrorBody](dynamics_365_business_central/errors/list_vendor_payment_journals_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiVendorPaymentJournalsResponse](dynamics_365_business_central/models/companies_api_vendor_payment_journals_response.py)</code> -- Successfully retrieved vendor payment journals

**On `Failure`**: `error` is <code>[ListVendorPaymentJournalsErrorBody](dynamics_365_business_central/errors/list_vendor_payment_journals_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](dynamics_365_business_central/apis/vendors.py)

<details>
<summary><code>def create_vendor(company_id: UUID, body: VendorCreate | VendorCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Vendor, CreateVendorErrorBody]</code></summary>

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
result = client.vendors.with_raw_response.create_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), VendorCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVendorErrorBody
```

**Async**

```python
result = await async_client.vendors.with_raw_response.create_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), VendorCreate(display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>company_id</code> | <code>UUID</code> | The unique identifier of the company |
| <code>body</code> | <code>[VendorCreate](dynamics_365_business_central/models/vendor_create.py) \| [VendorCreateDict](dynamics_365_business_central/models/vendor_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Vendor](dynamics_365_business_central/models/vendor.py), [CreateVendorErrorBody](dynamics_365_business_central/errors/create_vendor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Vendor](dynamics_365_business_central/models/vendor.py)</code> -- Vendor created successfully

**On `Failure`**: `error` is <code>[CreateVendorErrorBody](dynamics_365_business_central/errors/create_vendor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vendor(company_id: UUID, vendor_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteVendorErrorBody]</code></summary>

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
result = client.vendors.with_raw_response.delete_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVendorErrorBody
```

**Async**

```python
result = await async_client.vendors.with_raw_response.delete_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVendorErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;None, [DeleteVendorErrorBody](dynamics_365_business_central/errors/delete_vendor_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteVendorErrorBody](dynamics_365_business_central/errors/delete_vendor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor(company_id: UUID, vendor_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Vendor, GetVendorErrorBody]</code></summary>

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
result = client.vendors.with_raw_response.get_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVendorErrorBody
```

**Async**

```python
result = await async_client.vendors.with_raw_response.get_vendor(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVendorErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Vendor](dynamics_365_business_central/models/vendor.py), [GetVendorErrorBody](dynamics_365_business_central/errors/get_vendor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Vendor](dynamics_365_business_central/models/vendor.py)</code> -- Successfully retrieved vendor

**On `Failure`**: `error` is <code>[GetVendorErrorBody](dynamics_365_business_central/errors/get_vendor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vendors(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesApiVendorsResponse, ListVendorsErrorBody]</code></summary>

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
result = client.vendors.with_raw_response.list_vendors(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiVendorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVendorsErrorBody
```

**Async**

```python
result = await async_client.vendors.with_raw_response.list_vendors(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesApiVendorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVendorsErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[CompaniesApiVendorsResponse](dynamics_365_business_central/models/companies_api_vendors_response.py), [ListVendorsErrorBody](dynamics_365_business_central/errors/list_vendors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesApiVendorsResponse](dynamics_365_business_central/models/companies_api_vendors_response.py)</code> -- Successfully retrieved vendors

**On `Failure`**: `error` is <code>[ListVendorsErrorBody](dynamics_365_business_central/errors/list_vendors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vendor(company_id: UUID, vendor_id: UUID, if_match: str, body: VendorUpdate | VendorUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Vendor, UpdateVendorErrorBody]</code></summary>

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
result = client.vendors.with_raw_response.update_vendor(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    VendorUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVendorErrorBody
```

**Async**

```python
result = await async_client.vendors.with_raw_response.update_vendor(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    VendorUpdate(),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Vendor
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVendorErrorBody
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
| <code>body</code> | <code>[VendorUpdate](dynamics_365_business_central/models/vendor_update.py) \| [VendorUpdateDict](dynamics_365_business_central/models/vendor_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dynamics_365_business_central/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dynamics_365_business_central/core/results.py)&#91;[Vendor](dynamics_365_business_central/models/vendor.py), [UpdateVendorErrorBody](dynamics_365_business_central/errors/update_vendor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Vendor](dynamics_365_business_central/models/vendor.py)</code> -- Vendor updated successfully

**On `Failure`**: `error` is <code>[UpdateVendorErrorBody](dynamics_365_business_central/errors/update_vendor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](dynamics_365_business_central/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](dynamics_365_business_central/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

