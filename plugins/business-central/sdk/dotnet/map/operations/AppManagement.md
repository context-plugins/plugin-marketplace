<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppManagement — operations

Accessor: `client.AppManagement` · Source: `src/Dynamics365BusinessCentral/Api/AppManagement.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InstallApp

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `InstallApp(InstallAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `AppId`, `Body`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<InstallAppError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAppManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InstallAppRequest` | `src/Dynamics365BusinessCentral/Requests/AppManagement/InstallAppRequest.cs` |
| `AppInstallRequest` | `src/Dynamics365BusinessCentral/Models/AppInstallRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `InstallAppError` | `src/Dynamics365BusinessCentral/Errors/InstallAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

### ListInstalledApps

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListInstalledApps(ListInstalledAppsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `ApplicationsEnvironmentsAppsResponse`
- **Error**: `ApiException<ListInstalledAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAppManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInstalledAppsRequest` | `src/Dynamics365BusinessCentral/Requests/AppManagement/ListInstalledAppsRequest.cs` |
| `ApplicationsEnvironmentsAppsResponse` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsAppsResponse.cs` |
| `ListInstalledAppsError` | `src/Dynamics365BusinessCentral/Errors/ListInstalledAppsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

### UninstallApp

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UninstallApp(UninstallAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `AppId`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<UninstallAppError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAppManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UninstallAppRequest` | `src/Dynamics365BusinessCentral/Requests/AppManagement/UninstallAppRequest.cs` |
| `ApplicationsEnvironmentsAppsAppIdUninstallRequest` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsAppsAppIdUninstallRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `UninstallAppError` | `src/Dynamics365BusinessCentral/Errors/UninstallAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

### UpdateApp

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateApp(UpdateAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `AppId`, `Body`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<UpdateAppError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAppManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAppManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAppRequest` | `src/Dynamics365BusinessCentral/Requests/AppManagement/UpdateAppRequest.cs` |
| `AppUpdateRequest` | `src/Dynamics365BusinessCentral/Models/AppUpdateRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `UpdateAppError` | `src/Dynamics365BusinessCentral/Errors/UpdateAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

