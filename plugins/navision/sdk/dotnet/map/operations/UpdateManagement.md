<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateManagement — operations

Accessor: `client.UpdateManagement` · Source: `src/MicrosoftDynamicsNav/Api/UpdateManagement.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetScheduledUpgrade

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetScheduledUpgrade(GetScheduledUpgradeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `ScheduledUpgrade`
- **Error**: `ApiException<GetScheduledUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScheduledUpgradeRequest` | `src/MicrosoftDynamicsNav/Requests/UpdateManagement/GetScheduledUpgradeRequest.cs` |
| `ScheduledUpgrade` | `src/MicrosoftDynamicsNav/Models/ScheduledUpgrade.cs` |
| `GetScheduledUpgradeError` | `src/MicrosoftDynamicsNav/Errors/GetScheduledUpgradeError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi.cs` |

### SetUpdateSettings

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `SetUpdateSettings(SetUpdateSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetUpdateSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetUpdateSettingsRequest` | `src/MicrosoftDynamicsNav/Requests/UpdateManagement/SetUpdateSettingsRequest.cs` |
| `UpdateSettings` | `src/MicrosoftDynamicsNav/Models/UpdateSettings.cs` |
| `SetUpdateSettingsError` | `src/MicrosoftDynamicsNav/Errors/SetUpdateSettingsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi.cs` |

