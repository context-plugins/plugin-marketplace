# Reference

> Source: [MicrosoftDynamicsNavClient](src/client.ts)

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>getAccount(request: Accounts.GetAccountRequest, options?: RequestOptions): ApiPromise&lt;Account, Accounts.GetAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific account by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getAccount({
    companyId: "00000000-0000-0000-0000-000000000000",
    accountId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Account
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .getAccount({
    companyId: "00000000-0000-0000-0000-000000000000",
    accountId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Account
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>accountId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getAccount(request)`

- **OnSuccess**: <code>[Account](src/models/account.ts)</code>
- **OnError**: throws <code>[Accounts.GetAccountError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Account, Accounts.GetAccountError&gt;</code>, with `result.value` of type <code>[Account](src/models/account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccounts(request: Accounts.ListAccountsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiAccountsResponse, Accounts.ListAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of general ledger account objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listAccounts({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .listAccounts({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiAccountsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.listAccounts(request)`

- **OnSuccess**: <code>[CompaniesApiAccountsResponse](src/models/companies-api-accounts-response.ts)</code>
- **OnError**: throws <code>[Accounts.ListAccountsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiAccountsResponse, Accounts.ListAccountsError&gt;</code>, with `result.value` of type <code>[CompaniesApiAccountsResponse](src/models/companies-api-accounts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGeneralLedgerEntries(request: Accounts.ListGeneralLedgerEntriesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiGeneralLedgerEntriesResponse, Accounts.ListGeneralLedgerEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of general ledger entries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listGeneralLedgerEntries({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiGeneralLedgerEntriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListGeneralLedgerEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .listGeneralLedgerEntries({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiGeneralLedgerEntriesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.listGeneralLedgerEntries(request)`

- **OnSuccess**: <code>[CompaniesApiGeneralLedgerEntriesResponse](src/models/companies-api-general-ledger-entries-response.ts)</code>
- **OnError**: throws <code>[Accounts.ListGeneralLedgerEntriesError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listGeneralLedgerEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiGeneralLedgerEntriesResponse, Accounts.ListGeneralLedgerEntriesError&gt;</code>, with `result.value` of type <code>[CompaniesApiGeneralLedgerEntriesResponse](src/models/companies-api-general-ledger-entries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppManagement

> Source: [AppManagement](src/resources/app-management.ts)

<details>
<summary><code>installApp(request: AppManagement.InstallAppRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, AppManagement.InstallAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs the specified app in the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appManagement.installApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: {
      targetVersion: "example_value",
      allowPreviewVersion: true,
      acceptIsvEula: true,
      allowDependencyUpdate: true,
    },
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type AppManagement.InstallAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appManagement
  .installApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: {
      targetVersion: "example_value",
      allowPreviewVersion: true,
      acceptIsvEula: true,
      allowDependencyUpdate: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>appId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AppInstallRequest](src/models/app-install-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appManagement.installApp(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[AppManagement.InstallAppError](src/resources/app-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appManagement.installApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, AppManagement.InstallAppError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInstalledApps(request: AppManagement.ListInstalledAppsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsAppsResponse, AppManagement.ListInstalledAppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of apps installed in the specified environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appManagement.listInstalledApps({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsEnvironmentsAppsResponse
} catch (err) {
  // TODO: Handle 'err' of type AppManagement.ListInstalledAppsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appManagement
  .listInstalledApps({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsAppsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appManagement.listInstalledApps(request)`

- **OnSuccess**: <code>[ApplicationsEnvironmentsAppsResponse](src/models/applications-environments-apps-response.ts)</code>
- **OnError**: throws <code>[AppManagement.ListInstalledAppsError](src/resources/app-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appManagement.listInstalledApps(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsAppsResponse, AppManagement.ListInstalledAppsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsAppsResponse](src/models/applications-environments-apps-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uninstallApp(request: AppManagement.UninstallAppRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, AppManagement.UninstallAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls the specified app from the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appManagement.uninstallApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: { deleteData: true },
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type AppManagement.UninstallAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appManagement
  .uninstallApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: { deleteData: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>appId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApplicationsEnvironmentsAppsAppIdUninstallRequest](src/models/applications-environments-apps-app-id-uninstall-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appManagement.uninstallApp(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[AppManagement.UninstallAppError](src/resources/app-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appManagement.uninstallApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, AppManagement.UninstallAppError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateApp(request: AppManagement.UpdateAppRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, AppManagement.UpdateAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules an update of the specified app to a newer version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appManagement.updateApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: {
      targetVersion: "example_value",
      allowPreviewVersion: true,
      ignoreUpgradeWindow: true,
      allowDependencyUpdate: true,
    },
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type AppManagement.UpdateAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appManagement
  .updateApp({
    applicationFamily: "some example string",
    environmentName: "some example string",
    appId: "00000000-0000-0000-0000-000000000000",
    body: {
      targetVersion: "example_value",
      allowPreviewVersion: true,
      ignoreUpgradeWindow: true,
      allowDependencyUpdate: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>appId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AppUpdateRequest](src/models/app-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appManagement.updateApp(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[AppManagement.UpdateAppError](src/resources/app-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appManagement.updateApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, AppManagement.UpdateAppError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AvailableApplications

> Source: [AvailableApplications](src/resources/available-applications.ts)

<details>
<summary><code>listAvailableCountries(request?: AvailableApplications.ListAvailableCountriesRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsAvailableCountriesResponse, AvailableApplications.ListAvailableCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of countries where environments can be created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.availableApplications.listAvailableCountries({
    applicationFamily: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsAvailableCountriesResponse
} catch (err) {
  // TODO: Handle 'err' of type AvailableApplications.ListAvailableCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.availableApplications
  .listAvailableCountries({ applicationFamily: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsAvailableCountriesResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.availableApplications.listAvailableCountries(request)`

- **OnSuccess**: <code>[ApplicationsAvailableCountriesResponse](src/models/applications-available-countries-response.ts)</code>
- **OnError**: throws <code>[AvailableApplications.ListAvailableCountriesError](src/resources/available-applications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.availableApplications.listAvailableCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsAvailableCountriesResponse, AvailableApplications.ListAvailableCountriesError&gt;</code>, with `result.value` of type <code>[ApplicationsAvailableCountriesResponse](src/models/applications-available-countries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAvailableVersions(request?: AvailableApplications.ListAvailableVersionsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsAvailableApplicationVersionsResponse, AvailableApplications.ListAvailableVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of available application versions for the specified application family.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.availableApplications.listAvailableVersions({
    applicationFamily: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsAvailableApplicationVersionsResponse
} catch (err) {
  // TODO: Handle 'err' of type AvailableApplications.ListAvailableVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.availableApplications
  .listAvailableVersions({ applicationFamily: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsAvailableApplicationVersionsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.availableApplications.listAvailableVersions(request)`

- **OnSuccess**: <code>[ApplicationsAvailableApplicationVersionsResponse](src/models/applications-available-application-versions-response.ts)</code>
- **OnError**: throws <code>[AvailableApplications.ListAvailableVersionsError](src/resources/available-applications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.availableApplications.listAvailableVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsAvailableApplicationVersionsResponse, AvailableApplications.ListAvailableVersionsError&gt;</code>, with `result.value` of type <code>[ApplicationsAvailableApplicationVersionsResponse](src/models/applications-available-application-versions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](src/resources/companies.ts)

<details>
<summary><code>createAutomationCompany(request: Companies.CreateAutomationCompanyRequest, options?: RequestOptions): ApiPromise&lt;AutomationCompany, Companies.CreateAutomationCompanyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new company in the Business Central tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.createAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { name: "Example Title", displayName: "example_value", businessProfileId: "500123" },
  });
  // TODO: Handle 'response' of type AutomationCompany
} catch (err) {
  // TODO: Handle 'err' of type Companies.CreateAutomationCompanyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .createAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { name: "Example Title", displayName: "example_value", businessProfileId: "500123" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationCompany
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[AutomationCompanyCreate](src/models/automation-company-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.createAutomationCompany(request)`

- **OnSuccess**: <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: throws <code>[Companies.CreateAutomationCompanyError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.createAutomationCompany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationCompany, Companies.CreateAutomationCompanyError&gt;</code>, with `result.value` of type <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAutomationCompany(request: Companies.DeleteAutomationCompanyRequest, options?: RequestOptions): ApiPromise&lt;undefined, Companies.DeleteAutomationCompanyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a company from the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.companies.deleteAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Companies.DeleteAutomationCompanyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .deleteAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>automationCompanyId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.deleteAutomationCompany(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Companies.DeleteAutomationCompanyError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.deleteAutomationCompany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Companies.DeleteAutomationCompanyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAutomationCompany(request: Companies.GetAutomationCompanyRequest, options?: RequestOptions): ApiPromise&lt;AutomationCompany, Companies.GetAutomationCompanyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific automation company by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type AutomationCompany
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetAutomationCompanyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationCompany
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>automationCompanyId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getAutomationCompany(request)`

- **OnSuccess**: <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: throws <code>[Companies.GetAutomationCompanyError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getAutomationCompany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationCompany, Companies.GetAutomationCompanyError&gt;</code>, with `result.value` of type <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAutomationCompanies(request: Companies.ListAutomationCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiAutomationCompaniesResponse, Companies.ListAutomationCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of automation company objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.listAutomationCompanies({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiAutomationCompaniesResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.ListAutomationCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .listAutomationCompanies({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiAutomationCompaniesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.listAutomationCompanies(request)`

- **OnSuccess**: <code>[CompaniesApiAutomationCompaniesResponse](src/models/companies-api-automation-companies-response.ts)</code>
- **OnError**: throws <code>[Companies.ListAutomationCompaniesError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.listAutomationCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiAutomationCompaniesResponse, Companies.ListAutomationCompaniesError&gt;</code>, with `result.value` of type <code>[CompaniesApiAutomationCompaniesResponse](src/models/companies-api-automation-companies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCompanies(request?: Companies.ListCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesResponse, Companies.ListCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of companies available for automation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.listCompanies();
  // TODO: Handle 'response' of type CompaniesResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.ListCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.listCompanies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesResponse
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
| <code>filter?</code> | <code>string</code> | OData filter expression to return targeted results (Business Central API/OData filtering). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.listCompanies(request)`

- **OnSuccess**: <code>[CompaniesResponse](src/models/companies-response.ts)</code>
- **OnError**: throws <code>[Companies.ListCompaniesError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.listCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesResponse, Companies.ListCompaniesError&gt;</code>, with `result.value` of type <code>[CompaniesResponse](src/models/companies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAutomationCompany(request: Companies.UpdateAutomationCompanyRequest, options?: RequestOptions): ApiPromise&lt;AutomationCompany, Companies.UpdateAutomationCompanyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates properties of an automation company (e.g., rename).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.updateAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: { name: "Example Title", displayName: "example_value" },
  });
  // TODO: Handle 'response' of type AutomationCompany
} catch (err) {
  // TODO: Handle 'err' of type Companies.UpdateAutomationCompanyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .updateAutomationCompany({
    companyId: "00000000-0000-0000-0000-000000000000",
    automationCompanyId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: { name: "Example Title", displayName: "example_value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationCompany
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>automationCompanyId</code> | <code>string</code> | - |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[AutomationCompanyUpdate](src/models/automation-company-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.updateAutomationCompany(request)`

- **OnSuccess**: <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: throws <code>[Companies.UpdateAutomationCompanyError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.updateAutomationCompany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationCompany, Companies.UpdateAutomationCompanyError&gt;</code>, with `result.value` of type <code>[AutomationCompany](src/models/automation-company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConfigurationPackages

> Source: [ConfigurationPackages](src/resources/configuration-packages.ts)

<details>
<summary><code>applyConfigurationPackage(request: ConfigurationPackages.ApplyConfigurationPackageRequest, options?: RequestOptions): ApiPromise&lt;undefined, ConfigurationPackages.ApplyConfigurationPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies the imported RapidStart configuration package.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.configurationPackages.applyConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationPackages.ApplyConfigurationPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationPackages
  .applyConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>packageId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationPackages.applyConfigurationPackage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ConfigurationPackages.ApplyConfigurationPackageError](src/resources/configuration-packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationPackages.applyConfigurationPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ConfigurationPackages.ApplyConfigurationPackageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConfigurationPackage(request: ConfigurationPackages.CreateConfigurationPackageRequest, options?: RequestOptions): ApiPromise&lt;ConfigurationPackage, ConfigurationPackages.CreateConfigurationPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new RapidStart configuration package record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationPackages.createConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { code: "example_value", packageName: "example_value" },
  });
  // TODO: Handle 'response' of type ConfigurationPackage
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationPackages.CreateConfigurationPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationPackages
  .createConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { code: "example_value", packageName: "example_value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConfigurationPackage
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[CompaniesApiConfigurationPackagesRequest](src/models/companies-api-configuration-packages-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationPackages.createConfigurationPackage(request)`

- **OnSuccess**: <code>[ConfigurationPackage](src/models/configuration-package.ts)</code>
- **OnError**: throws <code>[ConfigurationPackages.CreateConfigurationPackageError](src/resources/configuration-packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationPackages.createConfigurationPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConfigurationPackage, ConfigurationPackages.CreateConfigurationPackageError&gt;</code>, with `result.value` of type <code>[ConfigurationPackage](src/models/configuration-package.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importConfigurationPackage(request: ConfigurationPackages.ImportConfigurationPackageRequest, options?: RequestOptions): ApiPromise&lt;undefined, ConfigurationPackages.ImportConfigurationPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports the uploaded RapidStart configuration package.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.configurationPackages.importConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationPackages.ImportConfigurationPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationPackages
  .importConfigurationPackage({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>packageId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationPackages.importConfigurationPackage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ConfigurationPackages.ImportConfigurationPackageError](src/resources/configuration-packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationPackages.importConfigurationPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ConfigurationPackages.ImportConfigurationPackageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listConfigurationPackages(request: ConfigurationPackages.ListConfigurationPackagesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiConfigurationPackagesResponse, ConfigurationPackages.ListConfigurationPackagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of RapidStart configuration packages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationPackages.listConfigurationPackages({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiConfigurationPackagesResponse
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationPackages.ListConfigurationPackagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationPackages
  .listConfigurationPackages({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiConfigurationPackagesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationPackages.listConfigurationPackages(request)`

- **OnSuccess**: <code>[CompaniesApiConfigurationPackagesResponse](src/models/companies-api-configuration-packages-response.ts)</code>
- **OnError**: throws <code>[ConfigurationPackages.ListConfigurationPackagesError](src/resources/configuration-packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationPackages.listConfigurationPackages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiConfigurationPackagesResponse, ConfigurationPackages.ListConfigurationPackagesError&gt;</code>, with `result.value` of type <code>[CompaniesApiConfigurationPackagesResponse](src/models/companies-api-configuration-packages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadConfigurationPackageFile(request: ConfigurationPackages.UploadConfigurationPackageFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ConfigurationPackages.UploadConfigurationPackageFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads the RapidStart package file content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.configurationPackages.uploadConfigurationPackageFile({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
    code: "example_value",
    ifMatch: "some example string",
    body: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationPackages.UploadConfigurationPackageFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationPackages
  .uploadConfigurationPackageFile({
    companyId: "00000000-0000-0000-0000-000000000000",
    packageId: "00000000-0000-0000-0000-000000000000",
    code: "example_value",
    ifMatch: "some example string",
    body: new Uint8Array(),
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>packageId</code> | <code>string</code> | - |
| <code>code</code> | <code>string</code> | - |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationPackages.uploadConfigurationPackageFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ConfigurationPackages.UploadConfigurationPackageFileError](src/resources/configuration-packages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationPackages.uploadConfigurationPackageFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ConfigurationPackages.UploadConfigurationPackageFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesRegions

> Source: [CountriesRegions](src/resources/countries-regions.ts)

<details>
<summary><code>listCountriesRegions(request: CountriesRegions.ListCountriesRegionsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiCountriesRegionsResponse, CountriesRegions.ListCountriesRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of country/region objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.countriesRegions.listCountriesRegions({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiCountriesRegionsResponse
} catch (err) {
  // TODO: Handle 'err' of type CountriesRegions.ListCountriesRegionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.countriesRegions
  .listCountriesRegions({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiCountriesRegionsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.countriesRegions.listCountriesRegions(request)`

- **OnSuccess**: <code>[CompaniesApiCountriesRegionsResponse](src/models/companies-api-countries-regions-response.ts)</code>
- **OnError**: throws <code>[CountriesRegions.ListCountriesRegionsError](src/resources/countries-regions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.countriesRegions.listCountriesRegions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiCountriesRegionsResponse, CountriesRegions.ListCountriesRegionsError&gt;</code>, with `result.value` of type <code>[CompaniesApiCountriesRegionsResponse](src/models/companies-api-countries-regions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CurrencyApi

> Source: [CurrencyApi](src/resources/currency-api.ts)

<details>
<summary><code>listCurrencies(request: CurrencyApi.ListCurrenciesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiCurrenciesResponse, CurrencyApi.ListCurrenciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of currency objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.currencyApi.listCurrencies({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiCurrenciesResponse
} catch (err) {
  // TODO: Handle 'err' of type CurrencyApi.ListCurrenciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.currencyApi
  .listCurrencies({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiCurrenciesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.currencyApi.listCurrencies(request)`

- **OnSuccess**: <code>[CompaniesApiCurrenciesResponse](src/models/companies-api-currencies-response.ts)</code>
- **OnError**: throws <code>[CurrencyApi.ListCurrenciesError](src/resources/currency-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.currencyApi.listCurrencies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiCurrenciesResponse, CurrencyApi.ListCurrenciesError&gt;</code>, with `result.value` of type <code>[CompaniesApiCurrenciesResponse](src/models/companies-api-currencies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerPayments

> Source: [CustomerPayments](src/resources/customer-payments.ts)

<details>
<summary><code>listCustomerPaymentJournals(request: CustomerPayments.ListCustomerPaymentJournalsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiCustomerPaymentJournalsResponse, CustomerPayments.ListCustomerPaymentJournalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of customer payment journal objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerPayments.listCustomerPaymentJournals({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiCustomerPaymentJournalsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomerPayments.ListCustomerPaymentJournalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerPayments
  .listCustomerPaymentJournals({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiCustomerPaymentJournalsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerPayments.listCustomerPaymentJournals(request)`

- **OnSuccess**: <code>[CompaniesApiCustomerPaymentJournalsResponse](src/models/companies-api-customer-payment-journals-response.ts)</code>
- **OnError**: throws <code>[CustomerPayments.ListCustomerPaymentJournalsError](src/resources/customer-payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customerPayments.listCustomerPaymentJournals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiCustomerPaymentJournalsResponse, CustomerPayments.ListCustomerPaymentJournalsError&gt;</code>, with `result.value` of type <code>[CompaniesApiCustomerPaymentJournalsResponse](src/models/companies-api-customer-payment-journals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise&lt;Customer, Customers.CreateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer object in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  });
  // TODO: Handle 'response' of type Customer
} catch (err) {
  // TODO: Handle 'err' of type Customers.CreateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .createCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[CustomerCreate](src/models/customer-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[Customers.CreateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, Customers.CreateCustomerError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise&lt;undefined, Customers.DeleteCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customers.deleteCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Customers.DeleteCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .deleteCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>customerId</code> | <code>string</code> | The unique identifier of the customer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Customers.DeleteCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.deleteCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Customers.DeleteCustomerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise&lt;Customer, Customers.GetCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific customer by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.getCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Customer
} catch (err) {
  // TODO: Handle 'err' of type Customers.GetCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .getCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>customerId</code> | <code>string</code> | The unique identifier of the customer |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.getCustomer(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[Customers.GetCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.getCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, Customers.GetCustomerError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiCustomersResponse, Customers.ListCustomersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of customer objects from the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type Customers.ListCustomersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .listCustomers({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiCustomersResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomers(request)`

- **OnSuccess**: <code>[CompaniesApiCustomersResponse](src/models/companies-api-customers-response.ts)</code>
- **OnError**: throws <code>[Customers.ListCustomersError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiCustomersResponse, Customers.ListCustomersError&gt;</code>, with `result.value` of type <code>[CompaniesApiCustomersResponse](src/models/companies-api-customers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise&lt;Customer, Customers.UpdateCustomerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing customer object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Customer
} catch (err) {
  // TODO: Handle 'err' of type Customers.UpdateCustomerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers
  .updateCustomer({
    companyId: "00000000-0000-0000-0000-000000000000",
    customerId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Customer
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>customerId</code> | <code>string</code> | The unique identifier of the customer |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[CustomerUpdate](src/models/customer-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>[Customer](src/models/customer.ts)</code>
- **OnError**: throws <code>[Customers.UpdateCustomerError](src/resources/customers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Customer, Customers.UpdateCustomerError&gt;</code>, with `result.value` of type <code>[Customer](src/models/customer.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](src/resources/dimensions.ts)

<details>
<summary><code>listDimensions(request: Dimensions.ListDimensionsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiDimensionsResponse, Dimensions.ListDimensionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dimension objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dimensions.listDimensions({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiDimensionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Dimensions.ListDimensionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dimensions
  .listDimensions({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiDimensionsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dimensions.listDimensions(request)`

- **OnSuccess**: <code>[CompaniesApiDimensionsResponse](src/models/companies-api-dimensions-response.ts)</code>
- **OnError**: throws <code>[Dimensions.ListDimensionsError](src/resources/dimensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dimensions.listDimensions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiDimensionsResponse, Dimensions.ListDimensionsError&gt;</code>, with `result.value` of type <code>[CompaniesApiDimensionsResponse](src/models/companies-api-dimensions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Employees

> Source: [Employees](src/resources/employees.ts)

<details>
<summary><code>listEmployees(request: Employees.ListEmployeesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiEmployeesResponse, Employees.ListEmployeesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of employee objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.employees.listEmployees({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiEmployeesResponse
} catch (err) {
  // TODO: Handle 'err' of type Employees.ListEmployeesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.employees
  .listEmployees({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiEmployeesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.employees.listEmployees(request)`

- **OnSuccess**: <code>[CompaniesApiEmployeesResponse](src/models/companies-api-employees-response.ts)</code>
- **OnError**: throws <code>[Employees.ListEmployeesError](src/resources/employees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.employees.listEmployees(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiEmployeesResponse, Employees.ListEmployeesError&gt;</code>, with `result.value` of type <code>[CompaniesApiEmployeesResponse](src/models/companies-api-employees-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentOperations

> Source: [EnvironmentOperations](src/resources/environment-operations.ts)

<details>
<summary><code>listAllEnvironmentOperations(request?: EnvironmentOperations.ListAllEnvironmentOperationsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsOperationsResponse, EnvironmentOperations.ListAllEnvironmentOperationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns operations that have occurred on all environments for the application family.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environmentOperations.listAllEnvironmentOperations({
    applicationFamily: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsEnvironmentsOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type EnvironmentOperations.ListAllEnvironmentOperationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environmentOperations
  .listAllEnvironmentOperations({ applicationFamily: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsOperationsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environmentOperations.listAllEnvironmentOperations(request)`

- **OnSuccess**: <code>[ApplicationsEnvironmentsOperationsResponse](src/models/applications-environments-operations-response.ts)</code>
- **OnError**: throws <code>[EnvironmentOperations.ListAllEnvironmentOperationsError](src/resources/environment-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environmentOperations.listAllEnvironmentOperations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsOperationsResponse, EnvironmentOperations.ListAllEnvironmentOperationsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsOperationsResponse](src/models/applications-environments-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEnvironmentOperations(request: EnvironmentOperations.ListEnvironmentOperationsRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentsOperationsResponse, EnvironmentOperations.ListEnvironmentOperationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of operations that have been performed on the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environmentOperations.listEnvironmentOperations({
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type EnvironmentsOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type EnvironmentOperations.ListEnvironmentOperationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environmentOperations
  .listEnvironmentOperations({ environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentsOperationsResponse
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
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environmentOperations.listEnvironmentOperations(request)`

- **OnSuccess**: <code>[EnvironmentsOperationsResponse](src/models/environments-operations-response.ts)</code>
- **OnError**: throws <code>[EnvironmentOperations.ListEnvironmentOperationsError](src/resources/environment-operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environmentOperations.listEnvironmentOperations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentsOperationsResponse, EnvironmentOperations.ListEnvironmentOperationsError&gt;</code>, with `result.value` of type <code>[EnvironmentsOperationsResponse](src/models/environments-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EnvironmentSettingsApi

> Source: [EnvironmentSettingsApi](src/resources/environment-settings-api.ts)

<details>
<summary><code>getEnvironmentSettings(request: EnvironmentSettingsApi.GetEnvironmentSettingsRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentSettings, EnvironmentSettingsApi.GetEnvironmentSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns settings for the specified environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environmentSettingsApi.getEnvironmentSettings({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type EnvironmentSettings
} catch (err) {
  // TODO: Handle 'err' of type EnvironmentSettingsApi.GetEnvironmentSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environmentSettingsApi
  .getEnvironmentSettings({
    applicationFamily: "some example string",
    environmentName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentSettings
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environmentSettingsApi.getEnvironmentSettings(request)`

- **OnSuccess**: <code>[EnvironmentSettings](src/models/environment-settings.ts)</code>
- **OnError**: throws <code>[EnvironmentSettingsApi.GetEnvironmentSettingsError](src/resources/environment-settings-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environmentSettingsApi.getEnvironmentSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentSettings, EnvironmentSettingsApi.GetEnvironmentSettingsError&gt;</code>, with `result.value` of type <code>[EnvironmentSettings](src/models/environment-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setAppInsightsKey(request: EnvironmentSettingsApi.SetAppInsightsKeyRequest, options?: RequestOptions): ApiPromise&lt;undefined, EnvironmentSettingsApi.SetAppInsightsKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the Azure Application Insights instrumentation key for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environmentSettingsApi.setAppInsightsKey({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { key: "example_value" },
  });
} catch (err) {
  // TODO: Handle 'err' of type EnvironmentSettingsApi.SetAppInsightsKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environmentSettingsApi
  .setAppInsightsKey({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { key: "example_value" },
  })
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsSettingsAppInsightsKeyRequest](src/models/applications-environments-settings-app-insights-key-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environmentSettingsApi.setAppInsightsKey(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EnvironmentSettingsApi.SetAppInsightsKeyError](src/resources/environment-settings-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environmentSettingsApi.setAppInsightsKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EnvironmentSettingsApi.SetAppInsightsKeyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/resources/environments.ts)

<details>
<summary><code>copyEnvironment(request: Environments.CopyEnvironmentRequestParams, options?: RequestOptions): ApiPromise&lt;Environment, Environments.CopyEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment as a copy of an existing environment's data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.copyEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentName: "example_value",
      type: Type1BusinessCentralAdministrationCenterEnvironmentsApi.Production,
    },
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.CopyEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .copyEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentName: "example_value",
      type: Type1BusinessCentralAdministrationCenterEnvironmentsApi.Production,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[CopyEnvironmentRequest](src/models/copy-environment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.copyEnvironment(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.CopyEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.copyEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.CopyEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEnvironment(request: Environments.CreateEnvironmentRequestParams, options?: RequestOptions): ApiPromise&lt;Environment, Environments.CreateEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment with sample data. The operation is asynchronous; poll the environment operations endpoint to track status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.createEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentType: EnvironmentType.Production,
      countryCode: "example_value",
      ringName: "example_value",
      applicationVersion: "example_value",
    },
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.CreateEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .createEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentType: EnvironmentType.Production,
      countryCode: "example_value",
      ringName: "example_value",
      applicationVersion: "example_value",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[CreateEnvironmentRequest](src/models/create-environment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.createEnvironment(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.CreateEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.createEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.CreateEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, Environments.DeleteEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft deletes the specified environment. The environment is retained for 14 days during which it can be recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.deleteEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type Environments.DeleteEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .deleteEnvironment({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.deleteEnvironment(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[Environments.DeleteEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.deleteEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, Environments.DeleteEnvironmentError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableRestorePeriods(request: Environments.GetAvailableRestorePeriodsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsAvailableRestorePeriodsResponse, Environments.GetAvailableRestorePeriodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an ordered list of available restore periods for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getAvailableRestorePeriods({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetAvailableRestorePeriodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .getAvailableRestorePeriods({
    applicationFamily: "some example string",
    environmentName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsAvailableRestorePeriodsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getAvailableRestorePeriods(request)`

- **OnSuccess**: <code>[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](src/models/applications-environments-available-restore-periods-response.ts)</code>
- **OnError**: throws <code>[Environments.GetAvailableRestorePeriodsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getAvailableRestorePeriods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsAvailableRestorePeriodsResponse, Environments.GetAvailableRestorePeriodsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsAvailableRestorePeriodsResponse](src/models/applications-environments-available-restore-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.GetEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the properties for the specified environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .getEnvironment({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getEnvironment(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.GetEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.GetEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllEnvironments(options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsResponse, Environments.ListAllEnvironmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all environments across all application families for the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.listAllEnvironments();
  // TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Environments.ListAllEnvironmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments.listAllEnvironments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.listAllEnvironments()`

- **OnSuccess**: <code>[ApplicationsEnvironmentsResponse](src/models/applications-environments-response.ts)</code>
- **OnError**: throws <code>[Environments.ListAllEnvironmentsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.listAllEnvironments().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsResponse, Environments.ListAllEnvironmentsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsResponse](src/models/applications-environments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEnvironments(request?: Environments.ListEnvironmentsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsResponse, Environments.ListEnvironmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of environments for the specified application family.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.listEnvironments({ applicationFamily: "some example string" });
  // TODO: Handle 'response' of type ApplicationsEnvironmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Environments.ListEnvironmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .listEnvironments({ applicationFamily: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.listEnvironments(request)`

- **OnSuccess**: <code>[ApplicationsEnvironmentsResponse](src/models/applications-environments-response.ts)</code>
- **OnError**: throws <code>[Environments.ListEnvironmentsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.listEnvironments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsResponse, Environments.ListEnvironmentsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsResponse](src/models/applications-environments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recoverEnvironment(request: Environments.RecoverEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, Environments.RecoverEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recovers a soft-deleted environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.recoverEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type Environments.RecoverEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .recoverEnvironment({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.recoverEnvironment(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[Environments.RecoverEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.recoverEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, Environments.RecoverEnvironmentError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renameEnvironment(request: Environments.RenameEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, Environments.RenameEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a rename operation on an environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.renameEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { newEnvironmentName: "example_value" },
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type Environments.RenameEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .renameEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { newEnvironmentName: "example_value" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[ApplicationsEnvironmentsRenameRequest](src/models/applications-environments-rename-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.renameEnvironment(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[Environments.RenameEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.renameEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, Environments.RenameEnvironmentError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreEnvironment(request: Environments.RestoreEnvironmentRequestParams, options?: RequestOptions): ApiPromise&lt;EnvironmentOperation, Environments.RestoreEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores an existing environment from a point in time in the past.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.restoreEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentName: "example_value",
      environmentType: EnvironmentType1.Production,
      pointInTime: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)),
      skipInstallingPtEs: true,
      skipInstallingThirdPartyGlobalApps: true,
      skipEnvironmentCleanup: true,
    },
  });
  // TODO: Handle 'response' of type EnvironmentOperation
} catch (err) {
  // TODO: Handle 'err' of type Environments.RestoreEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .restoreEnvironment({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {
      environmentName: "example_value",
      environmentType: EnvironmentType1.Production,
      pointInTime: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)),
      skipInstallingPtEs: true,
      skipInstallingThirdPartyGlobalApps: true,
      skipEnvironmentCleanup: true,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentOperation
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[RestoreEnvironmentRequest](src/models/restore-environment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.restoreEnvironment(request)`

- **OnSuccess**: <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: throws <code>[Environments.RestoreEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.restoreEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentOperation, Environments.RestoreEnvironmentError&gt;</code>, with `result.value` of type <code>[EnvironmentOperation](src/models/environment-operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionDeploymentStatusApi

> Source: [ExtensionDeploymentStatusApi](src/resources/extension-deployment-status-api.ts)

<details>
<summary><code>listExtensionDeploymentStatuses(request: ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiExtensionDeploymentStatusResponse, ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ongoing extension deployment statuses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensionDeploymentStatusApi.listExtensionDeploymentStatuses({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiExtensionDeploymentStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensionDeploymentStatusApi
  .listExtensionDeploymentStatuses({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiExtensionDeploymentStatusResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensionDeploymentStatusApi.listExtensionDeploymentStatuses(request)`

- **OnSuccess**: <code>[CompaniesApiExtensionDeploymentStatusResponse](src/models/companies-api-extension-deployment-status-response.ts)</code>
- **OnError**: throws <code>[ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError](src/resources/extension-deployment-status-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensionDeploymentStatusApi.listExtensionDeploymentStatuses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiExtensionDeploymentStatusResponse, ExtensionDeploymentStatusApi.ListExtensionDeploymentStatusesError&gt;</code>, with `result.value` of type <code>[CompaniesApiExtensionDeploymentStatusResponse](src/models/companies-api-extension-deployment-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionUploadApi

> Source: [ExtensionUploadApi](src/resources/extension-upload-api.ts)

<details>
<summary><code>createExtensionUpload(request: ExtensionUploadApi.CreateExtensionUploadRequest, options?: RequestOptions): ApiPromise&lt;ExtensionUpload, ExtensionUploadApi.CreateExtensionUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an extension upload record for uploading a per-tenant extension.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensionUploadApi.createExtensionUpload({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { schedule: Schedule1.CurrentVersion, schemaSyncMode: SchemaSyncMode1.Add },
  });
  // TODO: Handle 'response' of type ExtensionUpload
} catch (err) {
  // TODO: Handle 'err' of type ExtensionUploadApi.CreateExtensionUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensionUploadApi
  .createExtensionUpload({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { schedule: Schedule1.CurrentVersion, schemaSyncMode: SchemaSyncMode1.Add },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtensionUpload
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[ExtensionUploadCreate](src/models/extension-upload-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensionUploadApi.createExtensionUpload(request)`

- **OnSuccess**: <code>[ExtensionUpload](src/models/extension-upload.ts)</code>
- **OnError**: throws <code>[ExtensionUploadApi.CreateExtensionUploadError](src/resources/extension-upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensionUploadApi.createExtensionUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtensionUpload, ExtensionUploadApi.CreateExtensionUploadError&gt;</code>, with `result.value` of type <code>[ExtensionUpload](src/models/extension-upload.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>installUploadedExtension(request: ExtensionUploadApi.InstallUploadedExtensionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExtensionUploadApi.InstallUploadedExtensionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the installation of a previously uploaded per-tenant extension.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensionUploadApi.installUploadedExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionUploadId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type ExtensionUploadApi.InstallUploadedExtensionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensionUploadApi
  .installUploadedExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionUploadId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionUploadId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensionUploadApi.installUploadedExtension(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExtensionUploadApi.InstallUploadedExtensionError](src/resources/extension-upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensionUploadApi.installUploadedExtension(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExtensionUploadApi.InstallUploadedExtensionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadExtensionFile(request: ExtensionUploadApi.UploadExtensionFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ExtensionUploadApi.UploadExtensionFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads the extension file content to the extension upload record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensionUploadApi.uploadExtensionFile({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionUploadId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: new Uint8Array(),
  });
} catch (err) {
  // TODO: Handle 'err' of type ExtensionUploadApi.UploadExtensionFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensionUploadApi
  .uploadExtensionFile({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionUploadId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: new Uint8Array(),
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionUploadId</code> | <code>string</code> | - |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensionUploadApi.uploadExtensionFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExtensionUploadApi.UploadExtensionFileError](src/resources/extension-upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensionUploadApi.uploadExtensionFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExtensionUploadApi.UploadExtensionFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Extensions

> Source: [Extensions](src/resources/extensions.ts)

<details>
<summary><code>installExtension(request: Extensions.InstallExtensionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Extensions.InstallExtensionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs a published extension on the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensions.installExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Extensions.InstallExtensionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .installExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionId</code> | <code>string</code> | The package ID of the extension |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.installExtension(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Extensions.InstallExtensionError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.installExtension(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Extensions.InstallExtensionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExtensions(request: Extensions.ListExtensionsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiExtensionsResponse, Extensions.ListExtensionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of extensions published to the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.extensions.listExtensions({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiExtensionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Extensions.ListExtensionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .listExtensions({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiExtensionsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.listExtensions(request)`

- **OnSuccess**: <code>[CompaniesApiExtensionsResponse](src/models/companies-api-extensions-response.ts)</code>
- **OnError**: throws <code>[Extensions.ListExtensionsError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.listExtensions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiExtensionsResponse, Extensions.ListExtensionsError&gt;</code>, with `result.value` of type <code>[CompaniesApiExtensionsResponse](src/models/companies-api-extensions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uninstallAndDeleteExtensionData(request: Extensions.UninstallAndDeleteExtensionDataRequest, options?: RequestOptions): ApiPromise&lt;undefined, Extensions.UninstallAndDeleteExtensionDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensions.uninstallAndDeleteExtensionData({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Extensions.UninstallAndDeleteExtensionDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .uninstallAndDeleteExtensionData({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionId</code> | <code>string</code> | The package ID of the extension |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.uninstallAndDeleteExtensionData(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Extensions.UninstallAndDeleteExtensionDataError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.uninstallAndDeleteExtensionData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Extensions.UninstallAndDeleteExtensionDataError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uninstallExtension(request: Extensions.UninstallExtensionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Extensions.UninstallExtensionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls an extension from the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensions.uninstallExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Extensions.UninstallExtensionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .uninstallExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionId</code> | <code>string</code> | The package ID of the extension |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.uninstallExtension(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Extensions.UninstallExtensionError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.uninstallExtension(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Extensions.UninstallExtensionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishExtension(request: Extensions.UnpublishExtensionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Extensions.UnpublishExtensionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unpublishes an uninstalled extension from the tenant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.extensions.unpublishExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Extensions.UnpublishExtensionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.extensions
  .unpublishExtension({
    companyId: "00000000-0000-0000-0000-000000000000",
    extensionId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>extensionId</code> | <code>string</code> | The package ID of the extension |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.extensions.unpublishExtension(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Extensions.UnpublishExtensionError](src/resources/extensions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.extensions.unpublishExtension(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Extensions.UnpublishExtensionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Features

> Source: [Features](src/resources/features.ts)

<details>
<summary><code>activateFeature(request: Features.ActivateFeatureRequest, options?: RequestOptions): ApiPromise&lt;undefined, Features.ActivateFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the specified feature.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.features.activateFeature({
    companyId: "00000000-0000-0000-0000-000000000000",
    featureId: "500123",
    body: { updateInBackground: true, startDateTime: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)) },
  });
} catch (err) {
  // TODO: Handle 'err' of type Features.ActivateFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.features
  .activateFeature({
    companyId: "00000000-0000-0000-0000-000000000000",
    featureId: "500123",
    body: { updateInBackground: true, startDateTime: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)) },
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>featureId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[CompaniesApiFeaturesApiMicrosoftNavActivateRequest](src/models/companies-api-features-api-microsoft-nav-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.features.activateFeature(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Features.ActivateFeatureError](src/resources/features.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.features.activateFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Features.ActivateFeatureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateFeature(request: Features.DeactivateFeatureRequest, options?: RequestOptions): ApiPromise&lt;undefined, Features.DeactivateFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivates the specified feature.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.features.deactivateFeature({
    companyId: "00000000-0000-0000-0000-000000000000",
    featureId: "500123",
  });
} catch (err) {
  // TODO: Handle 'err' of type Features.DeactivateFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.features
  .deactivateFeature({ companyId: "00000000-0000-0000-0000-000000000000", featureId: "500123" })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>featureId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.features.deactivateFeature(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Features.DeactivateFeatureError](src/resources/features.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.features.deactivateFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Features.DeactivateFeatureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFeatures(request: Features.ListFeaturesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiFeaturesResponse, Features.ListFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of features available in feature management.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.features.listFeatures({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiFeaturesResponse
} catch (err) {
  // TODO: Handle 'err' of type Features.ListFeaturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.features
  .listFeatures({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiFeaturesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.features.listFeatures(request)`

- **OnSuccess**: <code>[CompaniesApiFeaturesResponse](src/models/companies-api-features-response.ts)</code>
- **OnError**: throws <code>[Features.ListFeaturesError](src/resources/features.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.features.listFeatures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiFeaturesResponse, Features.ListFeaturesError&gt;</code>, with `result.value` of type <code>[CompaniesApiFeaturesResponse](src/models/companies-api-features-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ItemCategories

> Source: [ItemCategories](src/resources/item-categories.ts)

<details>
<summary><code>listItemCategories(request: ItemCategories.ListItemCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiItemCategoriesResponse, ItemCategories.ListItemCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of item category objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemCategories.listItemCategories({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiItemCategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type ItemCategories.ListItemCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemCategories
  .listItemCategories({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiItemCategoriesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemCategories.listItemCategories(request)`

- **OnSuccess**: <code>[CompaniesApiItemCategoriesResponse](src/models/companies-api-item-categories-response.ts)</code>
- **OnError**: throws <code>[ItemCategories.ListItemCategoriesError](src/resources/item-categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemCategories.listItemCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiItemCategoriesResponse, ItemCategories.ListItemCategoriesError&gt;</code>, with `result.value` of type <code>[CompaniesApiItemCategoriesResponse](src/models/companies-api-item-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/resources/items.ts)

<details>
<summary><code>createItem(request: Items.CreateItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.CreateItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new item object in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.createItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.CreateItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .createItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[ItemCreate](src/models/item-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.createItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.CreateItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.createItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.CreateItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteItem(request: Items.DeleteItemRequest, options?: RequestOptions): ApiPromise&lt;undefined, Items.DeleteItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an item by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.items.deleteItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Items.DeleteItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .deleteItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>itemId</code> | <code>string</code> | The unique identifier of the item |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.deleteItem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Items.DeleteItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.deleteItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Items.DeleteItemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItem(request: Items.GetItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.GetItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific item by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.getItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.GetItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .getItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>itemId</code> | <code>string</code> | The unique identifier of the item |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.getItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.GetItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.getItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.GetItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listItems(request: Items.ListItemsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiItemsResponse, Items.ListItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of item objects from the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.listItems({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Items.ListItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .listItems({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiItemsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.listItems(request)`

- **OnSuccess**: <code>[CompaniesApiItemsResponse](src/models/companies-api-items-response.ts)</code>
- **OnError**: throws <code>[Items.ListItemsError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.listItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiItemsResponse, Items.ListItemsError&gt;</code>, with `result.value` of type <code>[CompaniesApiItemsResponse](src/models/companies-api-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateItem(request: Items.UpdateItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Items.UpdateItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing item object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.items.updateItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Items.UpdateItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.items
  .updateItem({
    companyId: "00000000-0000-0000-0000-000000000000",
    itemId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>itemId</code> | <code>string</code> | The unique identifier of the item |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[ItemUpdate](src/models/item-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.items.updateItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Items.UpdateItemError](src/resources/items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.items.updateItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Items.UpdateItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Journals

> Source: [Journals](src/resources/journals.ts)

<details>
<summary><code>createJournal(request: Journals.CreateJournalRequest, options?: RequestOptions): ApiPromise&lt;Journal, Journals.CreateJournalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new journal in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.journals.createJournal({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { code: "some example string", displayName: "some example string" },
  });
  // TODO: Handle 'response' of type Journal
} catch (err) {
  // TODO: Handle 'err' of type Journals.CreateJournalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.journals
  .createJournal({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { code: "some example string", displayName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Journal
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[JournalCreate](src/models/journal-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.journals.createJournal(request)`

- **OnSuccess**: <code>[Journal](src/models/journal.ts)</code>
- **OnError**: throws <code>[Journals.CreateJournalError](src/resources/journals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.journals.createJournal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Journal, Journals.CreateJournalError&gt;</code>, with `result.value` of type <code>[Journal](src/models/journal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJournalLines(request: Journals.ListJournalLinesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiJournalsApiJournalLinesResponse, Journals.ListJournalLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of journal line objects for a specific journal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.journals.listJournalLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    journalId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiJournalsApiJournalLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Journals.ListJournalLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.journals
  .listJournalLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    journalId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiJournalsApiJournalLinesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>journalId</code> | <code>string</code> | - |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.journals.listJournalLines(request)`

- **OnSuccess**: <code>[CompaniesApiJournalsApiJournalLinesResponse](src/models/companies-api-journals-api-journal-lines-response.ts)</code>
- **OnError**: throws <code>[Journals.ListJournalLinesError](src/resources/journals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.journals.listJournalLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiJournalsApiJournalLinesResponse, Journals.ListJournalLinesError&gt;</code>, with `result.value` of type <code>[CompaniesApiJournalsApiJournalLinesResponse](src/models/companies-api-journals-api-journal-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJournals(request: Journals.ListJournalsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiJournalsResponse, Journals.ListJournalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of journal objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.journals.listJournals({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiJournalsResponse
} catch (err) {
  // TODO: Handle 'err' of type Journals.ListJournalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.journals
  .listJournals({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiJournalsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.journals.listJournals(request)`

- **OnSuccess**: <code>[CompaniesApiJournalsResponse](src/models/companies-api-journals-response.ts)</code>
- **OnError**: throws <code>[Journals.ListJournalsError](src/resources/journals.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.journals.listJournals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiJournalsResponse, Journals.ListJournalsError&gt;</code>, with `result.value` of type <code>[CompaniesApiJournalsResponse](src/models/companies-api-journals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>addNotificationRecipient(request: Notifications.AddNotificationRecipientRequest, options?: RequestOptions): ApiPromise&lt;NotificationRecipient, Notifications.AddNotificationRecipientError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new notification recipient for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.addNotificationRecipient({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { id: "abc123", name: "Example Title", email: "user@example.com" },
  });
  // TODO: Handle 'response' of type NotificationRecipient
} catch (err) {
  // TODO: Handle 'err' of type Notifications.AddNotificationRecipientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications
  .addNotificationRecipient({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: { id: "abc123", name: "Example Title", email: "user@example.com" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationRecipient
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[NotificationRecipient](src/models/notification-recipient.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.addNotificationRecipient(request)`

- **OnSuccess**: <code>[NotificationRecipient](src/models/notification-recipient.ts)</code>
- **OnError**: throws <code>[Notifications.AddNotificationRecipientError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.addNotificationRecipient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationRecipient, Notifications.AddNotificationRecipientError&gt;</code>, with `result.value` of type <code>[NotificationRecipient](src/models/notification-recipient.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listNotificationRecipients(request: Notifications.ListNotificationRecipientsRequest, options?: RequestOptions): ApiPromise&lt;ApplicationsEnvironmentsNotificationsResponse, Notifications.ListNotificationRecipientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of notification recipients for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.listNotificationRecipients({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type ApplicationsEnvironmentsNotificationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Notifications.ListNotificationRecipientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications
  .listNotificationRecipients({
    applicationFamily: "some example string",
    environmentName: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationsEnvironmentsNotificationsResponse
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.listNotificationRecipients(request)`

- **OnSuccess**: <code>[ApplicationsEnvironmentsNotificationsResponse](src/models/applications-environments-notifications-response.ts)</code>
- **OnError**: throws <code>[Notifications.ListNotificationRecipientsError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.listNotificationRecipients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationsEnvironmentsNotificationsResponse, Notifications.ListNotificationRecipientsError&gt;</code>, with `result.value` of type <code>[ApplicationsEnvironmentsNotificationsResponse](src/models/applications-environments-notifications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethods

> Source: [PaymentMethods](src/resources/payment-methods.ts)

<details>
<summary><code>listPaymentMethods(request: PaymentMethods.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPaymentMethodsResponse, PaymentMethods.ListPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment method objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethods.listPaymentMethods({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPaymentMethodsResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethods.ListPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethods
  .listPaymentMethods({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPaymentMethodsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethods.listPaymentMethods(request)`

- **OnSuccess**: <code>[CompaniesApiPaymentMethodsResponse](src/models/companies-api-payment-methods-response.ts)</code>
- **OnError**: throws <code>[PaymentMethods.ListPaymentMethodsError](src/resources/payment-methods.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethods.listPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPaymentMethodsResponse, PaymentMethods.ListPaymentMethodsError&gt;</code>, with `result.value` of type <code>[CompaniesApiPaymentMethodsResponse](src/models/companies-api-payment-methods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](src/resources/payment-terms.ts)

<details>
<summary><code>listPaymentTerms(request: PaymentTerms.ListPaymentTermsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPaymentTermsResponse, PaymentTerms.ListPaymentTermsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payment terms objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentTerms.listPaymentTerms({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPaymentTermsResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentTerms.ListPaymentTermsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentTerms
  .listPaymentTerms({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPaymentTermsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentTerms.listPaymentTerms(request)`

- **OnSuccess**: <code>[CompaniesApiPaymentTermsResponse](src/models/companies-api-payment-terms-response.ts)</code>
- **OnError**: throws <code>[PaymentTerms.ListPaymentTermsError](src/resources/payment-terms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentTerms.listPaymentTerms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPaymentTermsResponse, PaymentTerms.ListPaymentTermsError&gt;</code>, with `result.value` of type <code>[CompaniesApiPaymentTermsResponse](src/models/companies-api-payment-terms-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PermissionSets

> Source: [PermissionSets](src/resources/permission-sets.ts)

<details>
<summary><code>createUserPermission(request: PermissionSets.CreateUserPermissionRequest, options?: RequestOptions): ApiPromise&lt;UserPermission, PermissionSets.CreateUserPermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a permission set to the specified user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.permissionSets.createUserPermission({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
    body: { roleId: "500123" },
  });
  // TODO: Handle 'response' of type UserPermission
} catch (err) {
  // TODO: Handle 'err' of type PermissionSets.CreateUserPermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissionSets
  .createUserPermission({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
    body: { roleId: "500123" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserPermission
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>userId</code> | <code>string</code> | The user security ID |
| <code>body</code> | <code>[CompaniesApiUsersApiUserPermissionsRequest](src/models/companies-api-users-api-user-permissions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissionSets.createUserPermission(request)`

- **OnSuccess**: <code>[UserPermission](src/models/user-permission.ts)</code>
- **OnError**: throws <code>[PermissionSets.CreateUserPermissionError](src/resources/permission-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissionSets.createUserPermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserPermission, PermissionSets.CreateUserPermissionError&gt;</code>, with `result.value` of type <code>[UserPermission](src/models/user-permission.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPermissionSets(request: PermissionSets.ListPermissionSetsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPermissionSetsResponse, PermissionSets.ListPermissionSetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of available permission sets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.permissionSets.listPermissionSets({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPermissionSetsResponse
} catch (err) {
  // TODO: Handle 'err' of type PermissionSets.ListPermissionSetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissionSets
  .listPermissionSets({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPermissionSetsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissionSets.listPermissionSets(request)`

- **OnSuccess**: <code>[CompaniesApiPermissionSetsResponse](src/models/companies-api-permission-sets-response.ts)</code>
- **OnError**: throws <code>[PermissionSets.ListPermissionSetsError](src/resources/permission-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissionSets.listPermissionSets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPermissionSetsResponse, PermissionSets.ListPermissionSetsError&gt;</code>, with `result.value` of type <code>[CompaniesApiPermissionSetsResponse](src/models/companies-api-permission-sets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserPermissions(request: PermissionSets.ListUserPermissionsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiUsersApiUserPermissionsResponse, PermissionSets.ListUserPermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permission sets assigned to the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.permissionSets.listUserPermissions({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiUsersApiUserPermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type PermissionSets.ListUserPermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissionSets
  .listUserPermissions({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiUsersApiUserPermissionsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>userId</code> | <code>string</code> | The user security ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissionSets.listUserPermissions(request)`

- **OnSuccess**: <code>[CompaniesApiUsersApiUserPermissionsResponse](src/models/companies-api-users-api-user-permissions-response.ts)</code>
- **OnError**: throws <code>[PermissionSets.ListUserPermissionsError](src/resources/permission-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissionSets.listUserPermissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiUsersApiUserPermissionsResponse, PermissionSets.ListUserPermissionsError&gt;</code>, with `result.value` of type <code>[CompaniesApiUsersApiUserPermissionsResponse](src/models/companies-api-users-api-user-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](src/resources/profiles.ts)

<details>
<summary><code>listProfiles(request: Profiles.ListProfilesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiProfilesResponse, Profiles.ListProfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of user profiles.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profiles.listProfiles({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiProfilesResponse
} catch (err) {
  // TODO: Handle 'err' of type Profiles.ListProfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profiles
  .listProfiles({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiProfilesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profiles.listProfiles(request)`

- **OnSuccess**: <code>[CompaniesApiProfilesResponse](src/models/companies-api-profiles-response.ts)</code>
- **OnError**: throws <code>[Profiles.ListProfilesError](src/resources/profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profiles.listProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiProfilesResponse, Profiles.ListProfilesError&gt;</code>, with `result.value` of type <code>[CompaniesApiProfilesResponse](src/models/companies-api-profiles-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseInvoices

> Source: [PurchaseInvoices](src/resources/purchase-invoices.ts)

<details>
<summary><code>createPurchaseInvoice(request: PurchaseInvoices.CreatePurchaseInvoiceRequest, options?: RequestOptions): ApiPromise&lt;PurchaseInvoice, PurchaseInvoices.CreatePurchaseInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new purchase invoice in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseInvoices.createPurchaseInvoice({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type PurchaseInvoice
} catch (err) {
  // TODO: Handle 'err' of type PurchaseInvoices.CreatePurchaseInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseInvoices
  .createPurchaseInvoice({ companyId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PurchaseInvoice
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseInvoiceCreate](src/models/purchase-invoice-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseInvoices.createPurchaseInvoice(request)`

- **OnSuccess**: <code>[PurchaseInvoice](src/models/purchase-invoice.ts)</code>
- **OnError**: throws <code>[PurchaseInvoices.CreatePurchaseInvoiceError](src/resources/purchase-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseInvoices.createPurchaseInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PurchaseInvoice, PurchaseInvoices.CreatePurchaseInvoiceError&gt;</code>, with `result.value` of type <code>[PurchaseInvoice](src/models/purchase-invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPurchaseInvoices(request: PurchaseInvoices.ListPurchaseInvoicesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPurchaseInvoicesResponse, PurchaseInvoices.ListPurchaseInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase invoice objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseInvoices.listPurchaseInvoices({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPurchaseInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type PurchaseInvoices.ListPurchaseInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseInvoices
  .listPurchaseInvoices({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPurchaseInvoicesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseInvoices.listPurchaseInvoices(request)`

- **OnSuccess**: <code>[CompaniesApiPurchaseInvoicesResponse](src/models/companies-api-purchase-invoices-response.ts)</code>
- **OnError**: throws <code>[PurchaseInvoices.ListPurchaseInvoicesError](src/resources/purchase-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseInvoices.listPurchaseInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPurchaseInvoicesResponse, PurchaseInvoices.ListPurchaseInvoicesError&gt;</code>, with `result.value` of type <code>[CompaniesApiPurchaseInvoicesResponse](src/models/companies-api-purchase-invoices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PurchaseOrders

> Source: [PurchaseOrders](src/resources/purchase-orders.ts)

<details>
<summary><code>createPurchaseOrder(request: PurchaseOrders.CreatePurchaseOrderRequest, options?: RequestOptions): ApiPromise&lt;PurchaseOrder, PurchaseOrders.CreatePurchaseOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new purchase order in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseOrders.createPurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type PurchaseOrder
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.CreatePurchaseOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .createPurchaseOrder({ companyId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PurchaseOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[PurchaseOrderCreate](src/models/purchase-order-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.createPurchaseOrder(request)`

- **OnSuccess**: <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: throws <code>[PurchaseOrders.CreatePurchaseOrderError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.createPurchaseOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PurchaseOrder, PurchaseOrders.CreatePurchaseOrderError&gt;</code>, with `result.value` of type <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePurchaseOrder(request: PurchaseOrders.DeletePurchaseOrderRequest, options?: RequestOptions): ApiPromise&lt;undefined, PurchaseOrders.DeletePurchaseOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a purchase order by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.purchaseOrders.deletePurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.DeletePurchaseOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .deletePurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>purchaseOrderId</code> | <code>string</code> | The unique identifier of the purchase order |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.deletePurchaseOrder(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PurchaseOrders.DeletePurchaseOrderError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.deletePurchaseOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PurchaseOrders.DeletePurchaseOrderError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPurchaseOrder(request: PurchaseOrders.GetPurchaseOrderRequest, options?: RequestOptions): ApiPromise&lt;PurchaseOrder, PurchaseOrders.GetPurchaseOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific purchase order by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseOrders.getPurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type PurchaseOrder
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.GetPurchaseOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .getPurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PurchaseOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>purchaseOrderId</code> | <code>string</code> | The unique identifier of the purchase order |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.getPurchaseOrder(request)`

- **OnSuccess**: <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: throws <code>[PurchaseOrders.GetPurchaseOrderError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.getPurchaseOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PurchaseOrder, PurchaseOrders.GetPurchaseOrderError&gt;</code>, with `result.value` of type <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPurchaseOrderLines(request: PurchaseOrders.ListPurchaseOrderLinesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, PurchaseOrders.ListPurchaseOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase order line items.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseOrders.listPurchaseOrderLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.ListPurchaseOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .listPurchaseOrderLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>purchaseOrderId</code> | <code>string</code> | The unique identifier of the purchase order |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.listPurchaseOrderLines(request)`

- **OnSuccess**: <code>[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](src/models/companies-api-purchase-orders-api-purchase-order-lines-response.ts)</code>
- **OnError**: throws <code>[PurchaseOrders.ListPurchaseOrderLinesError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.listPurchaseOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, PurchaseOrders.ListPurchaseOrderLinesError&gt;</code>, with `result.value` of type <code>[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse](src/models/companies-api-purchase-orders-api-purchase-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPurchaseOrders(request: PurchaseOrders.ListPurchaseOrdersRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiPurchaseOrdersResponse, PurchaseOrders.ListPurchaseOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of purchase order objects from the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseOrders.listPurchaseOrders({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiPurchaseOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.ListPurchaseOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .listPurchaseOrders({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiPurchaseOrdersResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.listPurchaseOrders(request)`

- **OnSuccess**: <code>[CompaniesApiPurchaseOrdersResponse](src/models/companies-api-purchase-orders-response.ts)</code>
- **OnError**: throws <code>[PurchaseOrders.ListPurchaseOrdersError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.listPurchaseOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiPurchaseOrdersResponse, PurchaseOrders.ListPurchaseOrdersError&gt;</code>, with `result.value` of type <code>[CompaniesApiPurchaseOrdersResponse](src/models/companies-api-purchase-orders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePurchaseOrder(request: PurchaseOrders.UpdatePurchaseOrderRequest, options?: RequestOptions): ApiPromise&lt;PurchaseOrder, PurchaseOrders.UpdatePurchaseOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing purchase order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.purchaseOrders.updatePurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PurchaseOrder
} catch (err) {
  // TODO: Handle 'err' of type PurchaseOrders.UpdatePurchaseOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.purchaseOrders
  .updatePurchaseOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    purchaseOrderId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PurchaseOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>purchaseOrderId</code> | <code>string</code> | The unique identifier of the purchase order |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[PurchaseOrderUpdate](src/models/purchase-order-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.purchaseOrders.updatePurchaseOrder(request)`

- **OnSuccess**: <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: throws <code>[PurchaseOrders.UpdatePurchaseOrderError](src/resources/purchase-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.purchaseOrders.updatePurchaseOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PurchaseOrder, PurchaseOrders.UpdatePurchaseOrderError&gt;</code>, with `result.value` of type <code>[PurchaseOrder](src/models/purchase-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SalesInvoices

> Source: [SalesInvoices](src/resources/sales-invoices.ts)

<details>
<summary><code>createSalesInvoice(request: SalesInvoices.CreateSalesInvoiceRequest, options?: RequestOptions): ApiPromise&lt;SalesInvoice, SalesInvoices.CreateSalesInvoiceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new sales invoice in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesInvoices.createSalesInvoice({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type SalesInvoice
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoices.CreateSalesInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoices
  .createSalesInvoice({ companyId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SalesInvoice
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesInvoiceCreate](src/models/sales-invoice-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoices.createSalesInvoice(request)`

- **OnSuccess**: <code>[SalesInvoice](src/models/sales-invoice.ts)</code>
- **OnError**: throws <code>[SalesInvoices.CreateSalesInvoiceError](src/resources/sales-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoices.createSalesInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SalesInvoice, SalesInvoices.CreateSalesInvoiceError&gt;</code>, with `result.value` of type <code>[SalesInvoice](src/models/sales-invoice.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSalesInvoices(request: SalesInvoices.ListSalesInvoicesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiSalesInvoicesResponse, SalesInvoices.ListSalesInvoicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales invoice objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesInvoices.listSalesInvoices({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiSalesInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type SalesInvoices.ListSalesInvoicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesInvoices
  .listSalesInvoices({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiSalesInvoicesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesInvoices.listSalesInvoices(request)`

- **OnSuccess**: <code>[CompaniesApiSalesInvoicesResponse](src/models/companies-api-sales-invoices-response.ts)</code>
- **OnError**: throws <code>[SalesInvoices.ListSalesInvoicesError](src/resources/sales-invoices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesInvoices.listSalesInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiSalesInvoicesResponse, SalesInvoices.ListSalesInvoicesError&gt;</code>, with `result.value` of type <code>[CompaniesApiSalesInvoicesResponse](src/models/companies-api-sales-invoices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SalesOrders

> Source: [SalesOrders](src/resources/sales-orders.ts)

<details>
<summary><code>createSalesOrder(request: SalesOrders.CreateSalesOrderRequest, options?: RequestOptions): ApiPromise&lt;SalesOrder, SalesOrders.CreateSalesOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new sales order in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesOrders.createSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type SalesOrder
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.CreateSalesOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .createSalesOrder({ companyId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SalesOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[SalesOrderCreate](src/models/sales-order-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.createSalesOrder(request)`

- **OnSuccess**: <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: throws <code>[SalesOrders.CreateSalesOrderError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.createSalesOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SalesOrder, SalesOrders.CreateSalesOrderError&gt;</code>, with `result.value` of type <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSalesOrder(request: SalesOrders.DeleteSalesOrderRequest, options?: RequestOptions): ApiPromise&lt;undefined, SalesOrders.DeleteSalesOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sales order by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.salesOrders.deleteSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.DeleteSalesOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .deleteSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>salesOrderId</code> | <code>string</code> | The unique identifier of the sales order |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.deleteSalesOrder(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SalesOrders.DeleteSalesOrderError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.deleteSalesOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SalesOrders.DeleteSalesOrderError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSalesOrder(request: SalesOrders.GetSalesOrderRequest, options?: RequestOptions): ApiPromise&lt;SalesOrder, SalesOrders.GetSalesOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific sales order by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesOrders.getSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type SalesOrder
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.GetSalesOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .getSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SalesOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>salesOrderId</code> | <code>string</code> | The unique identifier of the sales order |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.getSalesOrder(request)`

- **OnSuccess**: <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: throws <code>[SalesOrders.GetSalesOrderError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.getSalesOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SalesOrder, SalesOrders.GetSalesOrderError&gt;</code>, with `result.value` of type <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSalesOrderLines(request: SalesOrders.ListSalesOrderLinesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiSalesOrdersApiSalesOrderLinesResponse, SalesOrders.ListSalesOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales order line items.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesOrders.listSalesOrderLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.ListSalesOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .listSalesOrderLines({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiSalesOrdersApiSalesOrderLinesResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>salesOrderId</code> | <code>string</code> | The unique identifier of the sales order |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.listSalesOrderLines(request)`

- **OnSuccess**: <code>[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](src/models/companies-api-sales-orders-api-sales-order-lines-response.ts)</code>
- **OnError**: throws <code>[SalesOrders.ListSalesOrderLinesError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.listSalesOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiSalesOrdersApiSalesOrderLinesResponse, SalesOrders.ListSalesOrderLinesError&gt;</code>, with `result.value` of type <code>[CompaniesApiSalesOrdersApiSalesOrderLinesResponse](src/models/companies-api-sales-orders-api-sales-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSalesOrders(request: SalesOrders.ListSalesOrdersRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiSalesOrdersResponse, SalesOrders.ListSalesOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sales order objects from the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesOrders.listSalesOrders({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiSalesOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.ListSalesOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .listSalesOrders({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiSalesOrdersResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |
| <code>expand?</code> | <code>string</code> | Related entities to expand inline |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.listSalesOrders(request)`

- **OnSuccess**: <code>[CompaniesApiSalesOrdersResponse](src/models/companies-api-sales-orders-response.ts)</code>
- **OnError**: throws <code>[SalesOrders.ListSalesOrdersError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.listSalesOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiSalesOrdersResponse, SalesOrders.ListSalesOrdersError&gt;</code>, with `result.value` of type <code>[CompaniesApiSalesOrdersResponse](src/models/companies-api-sales-orders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSalesOrder(request: SalesOrders.UpdateSalesOrderRequest, options?: RequestOptions): ApiPromise&lt;SalesOrder, SalesOrders.UpdateSalesOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing sales order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.salesOrders.updateSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SalesOrder
} catch (err) {
  // TODO: Handle 'err' of type SalesOrders.UpdateSalesOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.salesOrders
  .updateSalesOrder({
    companyId: "00000000-0000-0000-0000-000000000000",
    salesOrderId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SalesOrder
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>salesOrderId</code> | <code>string</code> | The unique identifier of the sales order |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[SalesOrderUpdate](src/models/sales-order-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.salesOrders.updateSalesOrder(request)`

- **OnSuccess**: <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: throws <code>[SalesOrders.UpdateSalesOrderError](src/resources/sales-orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.salesOrders.updateSalesOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SalesOrder, SalesOrders.UpdateSalesOrderError&gt;</code>, with `result.value` of type <code>[SalesOrder](src/models/sales-order.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduledJobs

> Source: [ScheduledJobs](src/resources/scheduled-jobs.ts)

<details>
<summary><code>listScheduledJobs(request: ScheduledJobs.ListScheduledJobsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiScheduledJobsResponse, ScheduledJobs.ListScheduledJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled background jobs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scheduledJobs.listScheduledJobs({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiScheduledJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type ScheduledJobs.ListScheduledJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scheduledJobs
  .listScheduledJobs({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiScheduledJobsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scheduledJobs.listScheduledJobs(request)`

- **OnSuccess**: <code>[CompaniesApiScheduledJobsResponse](src/models/companies-api-scheduled-jobs-response.ts)</code>
- **OnError**: throws <code>[ScheduledJobs.ListScheduledJobsError](src/resources/scheduled-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scheduledJobs.listScheduledJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiScheduledJobsResponse, ScheduledJobs.ListScheduledJobsError&gt;</code>, with `result.value` of type <code>[CompaniesApiScheduledJobsResponse](src/models/companies-api-scheduled-jobs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SecurityGroups

> Source: [SecurityGroups](src/resources/security-groups.ts)

<details>
<summary><code>listSecurityGroups(request: SecurityGroups.ListSecurityGroupsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiSecurityGroupsResponse, SecurityGroups.ListSecurityGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of security groups.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.securityGroups.listSecurityGroups({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiSecurityGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type SecurityGroups.ListSecurityGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.securityGroups
  .listSecurityGroups({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiSecurityGroupsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.securityGroups.listSecurityGroups(request)`

- **OnSuccess**: <code>[CompaniesApiSecurityGroupsResponse](src/models/companies-api-security-groups-response.ts)</code>
- **OnError**: throws <code>[SecurityGroups.ListSecurityGroupsError](src/resources/security-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.securityGroups.listSecurityGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiSecurityGroupsResponse, SecurityGroups.ListSecurityGroupsError&gt;</code>, with `result.value` of type <code>[CompaniesApiSecurityGroupsResponse](src/models/companies-api-security-groups-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/resources/storage.ts)

<details>
<summary><code>getAllEnvironmentsStorage(options?: RequestOptions): ApiPromise&lt;EnvironmentsUsedstorageResponse, Storage.GetAllEnvironmentsStorageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns storage usage information for all environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.getAllEnvironmentsStorage();
  // TODO: Handle 'response' of type EnvironmentsUsedstorageResponse
} catch (err) {
  // TODO: Handle 'err' of type Storage.GetAllEnvironmentsStorageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage.getAllEnvironmentsStorage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentsUsedstorageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.getAllEnvironmentsStorage()`

- **OnSuccess**: <code>[EnvironmentsUsedstorageResponse](src/models/environments-usedstorage-response.ts)</code>
- **OnError**: throws <code>[Storage.GetAllEnvironmentsStorageError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.getAllEnvironmentsStorage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentsUsedstorageResponse, Storage.GetAllEnvironmentsStorageError&gt;</code>, with `result.value` of type <code>[EnvironmentsUsedstorageResponse](src/models/environments-usedstorage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnvironmentStorage(request: Storage.GetEnvironmentStorageRequest, options?: RequestOptions): ApiPromise&lt;UsedStorage, Storage.GetEnvironmentStorageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns used storage information for the specified environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.getEnvironmentStorage({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type UsedStorage
} catch (err) {
  // TODO: Handle 'err' of type Storage.GetEnvironmentStorageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage
  .getEnvironmentStorage({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsedStorage
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.getEnvironmentStorage(request)`

- **OnSuccess**: <code>[UsedStorage](src/models/used-storage.ts)</code>
- **OnError**: throws <code>[Storage.GetEnvironmentStorageError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.getEnvironmentStorage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsedStorage, Storage.GetEnvironmentStorageError&gt;</code>, with `result.value` of type <code>[UsedStorage](src/models/used-storage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQuotas(options?: RequestOptions): ApiPromise&lt;Quotas, Storage.GetQuotasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the different types of quotas and their limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storage.getQuotas();
  // TODO: Handle 'response' of type Quotas
} catch (err) {
  // TODO: Handle 'err' of type Storage.GetQuotasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storage.getQuotas().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Quotas
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storage.getQuotas()`

- **OnSuccess**: <code>[Quotas](src/models/quotas.ts)</code>
- **OnError**: throws <code>[Storage.GetQuotasError](src/resources/storage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storage.getQuotas().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Quotas, Storage.GetQuotasError&gt;</code>, with `result.value` of type <code>[Quotas](src/models/quotas.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SupportSettingsApi

> Source: [SupportSettingsApi](src/resources/support-settings-api.ts)

<details>
<summary><code>getSupportSettings(request: SupportSettingsApi.GetSupportSettingsRequest, options?: RequestOptions): ApiPromise&lt;SupportSettings, SupportSettingsApi.GetSupportSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the support contact settings for the specified environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.supportSettingsApi.getSupportSettings({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type SupportSettings
} catch (err) {
  // TODO: Handle 'err' of type SupportSettingsApi.GetSupportSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.supportSettingsApi
  .getSupportSettings({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportSettings
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.supportSettingsApi.getSupportSettings(request)`

- **OnSuccess**: <code>[SupportSettings](src/models/support-settings.ts)</code>
- **OnError**: throws <code>[SupportSettingsApi.GetSupportSettingsError](src/resources/support-settings-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.supportSettingsApi.getSupportSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportSettings, SupportSettingsApi.GetSupportSettingsError&gt;</code>, with `result.value` of type <code>[SupportSettings](src/models/support-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateManagement

> Source: [UpdateManagement](src/resources/update-management.ts)

<details>
<summary><code>getScheduledUpgrade(request: UpdateManagement.GetScheduledUpgradeRequest, options?: RequestOptions): ApiPromise&lt;ScheduledUpgrade, UpdateManagement.GetScheduledUpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about any pending scheduled upgrade for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateManagement.getScheduledUpgrade({
    applicationFamily: "some example string",
    environmentName: "some example string",
  });
  // TODO: Handle 'response' of type ScheduledUpgrade
} catch (err) {
  // TODO: Handle 'err' of type UpdateManagement.GetScheduledUpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateManagement
  .getScheduledUpgrade({ applicationFamily: "some example string", environmentName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScheduledUpgrade
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateManagement.getScheduledUpgrade(request)`

- **OnSuccess**: <code>[ScheduledUpgrade](src/models/scheduled-upgrade.ts)</code>
- **OnError**: throws <code>[UpdateManagement.GetScheduledUpgradeError](src/resources/update-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateManagement.getScheduledUpgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScheduledUpgrade, UpdateManagement.GetScheduledUpgradeError&gt;</code>, with `result.value` of type <code>[ScheduledUpgrade](src/models/scheduled-upgrade.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setUpdateSettings(request: UpdateManagement.SetUpdateSettingsRequest, options?: RequestOptions): ApiPromise&lt;undefined, UpdateManagement.SetUpdateSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the update window and other update-related settings for the environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.updateManagement.setUpdateSettings({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type UpdateManagement.SetUpdateSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateManagement
  .setUpdateSettings({
    applicationFamily: "some example string",
    environmentName: "some example string",
    body: {},
  })
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
| <code>applicationFamily?</code> | <code>string</code> | The application family (e.g., BusinessCentral)<br>**Default**: "BusinessCentral" |
| <code>environmentName</code> | <code>string</code> | The name of the environment |
| <code>body</code> | <code>[UpdateSettings](src/models/update-settings.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateManagement.setUpdateSettings(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UpdateManagement.SetUpdateSettingsError](src/resources/update-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateManagement.setUpdateSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UpdateManagement.SetUpdateSettingsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>getNewUsersFromOffice365(request: Users.GetNewUsersFromOffice365Request, options?: RequestOptions): ApiPromise&lt;undefined, Users.GetNewUsersFromOffice365Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.getNewUsersFromOffice365({ companyId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Users.GetNewUsersFromOffice365Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getNewUsersFromOffice365({ companyId: "00000000-0000-0000-0000-000000000000" })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getNewUsersFromOffice365(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.GetNewUsersFromOffice365Error](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getNewUsersFromOffice365(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.GetNewUsersFromOffice365Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNewUsersFromOffice365Async(request: Users.GetNewUsersFromOffice365AsyncRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.GetNewUsersFromOffice365AsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for tracking progress. Not supported with S2S authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.getNewUsersFromOffice365Async({ companyId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type Users.GetNewUsersFromOffice365AsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getNewUsersFromOffice365Async({ companyId: "00000000-0000-0000-0000-000000000000" })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getNewUsersFromOffice365Async(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.GetNewUsersFromOffice365AsyncError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getNewUsersFromOffice365Async(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.GetNewUsersFromOffice365AsyncError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;User, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific user by user security ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type User
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
  .getUser({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>userId</code> | <code>string</code> | The user security ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.GetUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsers(request: Users.ListUsersRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiUsersResponse, Users.ListUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Business Central users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsers({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiUsersResponse
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
const result = await client.users
  .listUsers({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiUsersResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUsers(request)`

- **OnSuccess**: <code>[CompaniesApiUsersResponse](src/models/companies-api-users-response.ts)</code>
- **OnError**: throws <code>[Users.ListUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiUsersResponse, Users.ListUsersError&gt;</code>, with `result.value` of type <code>[CompaniesApiUsersResponse](src/models/companies-api-users-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;User, Users.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates properties of a Business Central user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: { state: State.Enabled, expiryDate: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)) },
  });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .updateUser({
    companyId: "00000000-0000-0000-0000-000000000000",
    userId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: { state: State.Enabled, expiryDate: new Date(Date.UTC(2026, 0, 15, 10, 30, 0)) },
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>userId</code> | <code>string</code> | The user security ID |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[UserUpdate](src/models/user-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.UpdateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.UpdateUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VendorPayments

> Source: [VendorPayments](src/resources/vendor-payments.ts)

<details>
<summary><code>listVendorPaymentJournals(request: VendorPayments.ListVendorPaymentJournalsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiVendorPaymentJournalsResponse, VendorPayments.ListVendorPaymentJournalsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of vendor payment journal objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendorPayments.listVendorPaymentJournals({
    companyId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompaniesApiVendorPaymentJournalsResponse
} catch (err) {
  // TODO: Handle 'err' of type VendorPayments.ListVendorPaymentJournalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendorPayments
  .listVendorPaymentJournals({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiVendorPaymentJournalsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendorPayments.listVendorPaymentJournals(request)`

- **OnSuccess**: <code>[CompaniesApiVendorPaymentJournalsResponse](src/models/companies-api-vendor-payment-journals-response.ts)</code>
- **OnError**: throws <code>[VendorPayments.ListVendorPaymentJournalsError](src/resources/vendor-payments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendorPayments.listVendorPaymentJournals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiVendorPaymentJournalsResponse, VendorPayments.ListVendorPaymentJournalsError&gt;</code>, with `result.value` of type <code>[CompaniesApiVendorPaymentJournalsResponse](src/models/companies-api-vendor-payment-journals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/resources/vendors.ts)

<details>
<summary><code>createVendor(request: Vendors.CreateVendorRequest, options?: RequestOptions): ApiPromise&lt;Vendor, Vendors.CreateVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new vendor object in the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.createVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  });
  // TODO: Handle 'response' of type Vendor
} catch (err) {
  // TODO: Handle 'err' of type Vendors.CreateVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .createVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    body: { displayName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Vendor
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>body</code> | <code>[VendorCreate](src/models/vendor-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.createVendor(request)`

- **OnSuccess**: <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: throws <code>[Vendors.CreateVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.createVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Vendor, Vendors.CreateVendorError&gt;</code>, with `result.value` of type <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVendor(request: Vendors.DeleteVendorRequest, options?: RequestOptions): ApiPromise&lt;undefined, Vendors.DeleteVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a vendor by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.vendors.deleteVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type Vendors.DeleteVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .deleteVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
  })
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>vendorId</code> | <code>string</code> | The unique identifier of the vendor |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.deleteVendor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Vendors.DeleteVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.deleteVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Vendors.DeleteVendorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVendor(request: Vendors.GetVendorRequest, options?: RequestOptions): ApiPromise&lt;Vendor, Vendors.GetVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific vendor by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.getVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type Vendor
} catch (err) {
  // TODO: Handle 'err' of type Vendors.GetVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .getVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Vendor
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>vendorId</code> | <code>string</code> | The unique identifier of the vendor |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.getVendor(request)`

- **OnSuccess**: <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: throws <code>[Vendors.GetVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.getVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Vendor, Vendors.GetVendorError&gt;</code>, with `result.value` of type <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVendors(request: Vendors.ListVendorsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesApiVendorsResponse, Vendors.ListVendorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of vendor objects from the specified company.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.listVendors({ companyId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type CompaniesApiVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Vendors.ListVendorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .listVendors({ companyId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesApiVendorsResponse
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>top?</code> | <code>number</code> | Maximum number of items to return |
| <code>skip?</code> | <code>number</code> | Number of items to skip |
| <code>filter?</code> | <code>string</code> | OData filter expression |
| <code>orderby?</code> | <code>string</code> | OData order by expression |
| <code>select?</code> | <code>string</code> | Comma-separated list of properties to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.listVendors(request)`

- **OnSuccess**: <code>[CompaniesApiVendorsResponse](src/models/companies-api-vendors-response.ts)</code>
- **OnError**: throws <code>[Vendors.ListVendorsError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.listVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesApiVendorsResponse, Vendors.ListVendorsError&gt;</code>, with `result.value` of type <code>[CompaniesApiVendorsResponse](src/models/companies-api-vendors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVendor(request: Vendors.UpdateVendorRequest, options?: RequestOptions): ApiPromise&lt;Vendor, Vendors.UpdateVendorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing vendor object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.updateVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Vendor
} catch (err) {
  // TODO: Handle 'err' of type Vendors.UpdateVendorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors
  .updateVendor({
    companyId: "00000000-0000-0000-0000-000000000000",
    vendorId: "00000000-0000-0000-0000-000000000000",
    ifMatch: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Vendor
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
| <code>companyId</code> | <code>string</code> | The unique identifier of the company |
| <code>vendorId</code> | <code>string</code> | The unique identifier of the vendor |
| <code>ifMatch</code> | <code>string</code> | ETag value for optimistic concurrency control |
| <code>body</code> | <code>[VendorUpdate](src/models/vendor-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.updateVendor(request)`

- **OnSuccess**: <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: throws <code>[Vendors.UpdateVendorError](src/resources/vendors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vendors.updateVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Vendor, Vendors.UpdateVendorError&gt;</code>, with `result.value` of type <code>[Vendor](src/models/vendor.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[MicrosoftDynamicsNavError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

