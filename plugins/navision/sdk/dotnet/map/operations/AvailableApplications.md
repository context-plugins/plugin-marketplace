<!-- Generated file — do not edit; regenerated with the SDK. -->

# AvailableApplications — operations

Accessor: `client.AvailableApplications` · Source: `src/MicrosoftDynamicsNav/Api/AvailableApplications.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAvailableCountries

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAvailableCountries(ListAvailableCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsAvailableCountriesResponse`
- **Error**: `ApiException<ListAvailableCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAvailable([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAvailable? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAvailableCountriesRequest` | `src/MicrosoftDynamicsNav/Requests/AvailableApplications/ListAvailableCountriesRequest.cs` |
| `ApplicationsAvailableCountriesResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsAvailableCountriesResponse.cs` |
| `ListAvailableCountriesError` | `src/MicrosoftDynamicsNav/Errors/ListAvailableCountriesError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAvailable.cs` |

### ListAvailableVersions

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAvailableVersions(ListAvailableVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsAvailableApplicationVersionsResponse`
- **Error**: `ApiException<ListAvailableVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterAvailable([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterAvailable? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAvailableVersionsRequest` | `src/MicrosoftDynamicsNav/Requests/AvailableApplications/ListAvailableVersionsRequest.cs` |
| `ApplicationsAvailableApplicationVersionsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsAvailableApplicationVersionsResponse.cs` |
| `ListAvailableVersionsError` | `src/MicrosoftDynamicsNav/Errors/ListAvailableVersionsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterAvailable` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterAvailable.cs` |

