<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentOperations — operations

Accessor: `client.EnvironmentOperations` · Source: `src/MicrosoftDynamicsNav/Api/EnvironmentOperations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAllEnvironmentOperations

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAllEnvironmentOperations(ListAllEnvironmentOperationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsEnvironmentsOperationsResponse`
- **Error**: `ApiException<ListAllEnvironmentOperationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironment? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAllEnvironmentOperationsRequest` | `src/MicrosoftDynamicsNav/Requests/EnvironmentOperations/ListAllEnvironmentOperationsRequest.cs` |
| `ApplicationsEnvironmentsOperationsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsOperationsResponse.cs` |
| `ListAllEnvironmentOperationsError` | `src/MicrosoftDynamicsNav/Errors/ListAllEnvironmentOperationsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironment.cs` |

### ListEnvironmentOperations

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListEnvironmentOperations(ListEnvironmentOperationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `EnvironmentsOperationsResponse`
- **Error**: `ApiException<ListEnvironmentOperationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironment([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironment? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnvironmentOperationsRequest` | `src/MicrosoftDynamicsNav/Requests/EnvironmentOperations/ListEnvironmentOperationsRequest.cs` |
| `EnvironmentsOperationsResponse` | `src/MicrosoftDynamicsNav/Models/EnvironmentsOperationsResponse.cs` |
| `ListEnvironmentOperationsError` | `src/MicrosoftDynamicsNav/Errors/ListEnvironmentOperationsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironment.cs` |

