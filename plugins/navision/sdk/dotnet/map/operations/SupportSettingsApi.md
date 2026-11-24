<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportSettingsApi — operations

Accessor: `client.SupportSettingsApi` · Source: `src/MicrosoftDynamicsNav/Api/SupportSettingsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSupportSettings

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetSupportSettings(GetSupportSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `SupportSettings`
- **Error**: `ApiException<GetSupportSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSupportSettingsRequest` | `src/MicrosoftDynamicsNav/Requests/SupportSettingsApi/GetSupportSettingsRequest.cs` |
| `SupportSettings` | `src/MicrosoftDynamicsNav/Models/SupportSettings.cs` |
| `GetSupportSettingsError` | `src/MicrosoftDynamicsNav/Errors/GetSupportSettingsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi.cs` |

