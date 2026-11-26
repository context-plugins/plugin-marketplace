<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentSettingsApi — operations

Accessor: `client.EnvironmentSettingsApi` · Source: `src/Dynamics365BusinessCentral/Api/EnvironmentSettingsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEnvironmentSettings

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetEnvironmentSettings(GetEnvironmentSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `EnvironmentSettings`
- **Error**: `ApiException<GetEnvironmentSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentSettingsRequest` | `src/Dynamics365BusinessCentral/Requests/EnvironmentSettingsApi/GetEnvironmentSettingsRequest.cs` |
| `EnvironmentSettings` | `src/Dynamics365BusinessCentral/Models/EnvironmentSettings.cs` |
| `GetEnvironmentSettingsError` | `src/Dynamics365BusinessCentral/Errors/GetEnvironmentSettingsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings.cs` |

### SetAppInsightsKey

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `SetAppInsightsKey(SetAppInsightsKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetAppInsightsKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetAppInsightsKeyRequest` | `src/Dynamics365BusinessCentral/Requests/EnvironmentSettingsApi/SetAppInsightsKeyRequest.cs` |
| `ApplicationsEnvironmentsSettingsAppInsightsKeyRequest` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsSettingsAppInsightsKeyRequest.cs` |
| `SetAppInsightsKeyError` | `src/Dynamics365BusinessCentral/Errors/SetAppInsightsKeyError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings.cs` |

