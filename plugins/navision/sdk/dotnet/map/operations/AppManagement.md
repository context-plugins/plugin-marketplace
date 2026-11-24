<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppManagement — operations

Accessor: `client.AppManagement` · Source: `src/MicrosoftDynamicsNav/Api/AppManagement.cs` · 4 operations

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
| `InstallAppRequest` | `src/MicrosoftDynamicsNav/Requests/AppManagement/InstallAppRequest.cs` |
| `AppInstallRequest` | `src/MicrosoftDynamicsNav/Models/AppInstallRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `InstallAppError` | `src/MicrosoftDynamicsNav/Errors/InstallAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

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
| `ListInstalledAppsRequest` | `src/MicrosoftDynamicsNav/Requests/AppManagement/ListInstalledAppsRequest.cs` |
| `ApplicationsEnvironmentsAppsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsAppsResponse.cs` |
| `ListInstalledAppsError` | `src/MicrosoftDynamicsNav/Errors/ListInstalledAppsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

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
| `UninstallAppRequest` | `src/MicrosoftDynamicsNav/Requests/AppManagement/UninstallAppRequest.cs` |
| `ApplicationsEnvironmentsAppsAppIdUninstallRequest` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsAppsAppIdUninstallRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `UninstallAppError` | `src/MicrosoftDynamicsNav/Errors/UninstallAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

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
| `UpdateAppRequest` | `src/MicrosoftDynamicsNav/Requests/AppManagement/UpdateAppRequest.cs` |
| `AppUpdateRequest` | `src/MicrosoftDynamicsNav/Models/AppUpdateRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `UpdateAppError` | `src/MicrosoftDynamicsNav/Errors/UpdateAppError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAppManagementApi.cs` |

