<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.Environments` · Source: `src/Dynamics365BusinessCentral/Api/Environments.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CopyEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CopyEnvironment(CopyEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<CopyEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CopyEnvironmentOperationRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/CopyEnvironmentOperationRequest.cs` |
| `CopyEnvironmentRequest` | `src/Dynamics365BusinessCentral/Models/CopyEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/Dynamics365BusinessCentral/Models/EnvironmentModel.cs` |
| `CopyEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/CopyEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### CreateEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateEnvironment(CreateEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<CreateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [400, 401, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnvironmentOperationRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/CreateEnvironmentOperationRequest.cs` |
| `CreateEnvironmentRequest` | `src/Dynamics365BusinessCentral/Models/CreateEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/Dynamics365BusinessCentral/Models/EnvironmentModel.cs` |
| `CreateEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/CreateEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### DeleteEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<DeleteEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/DeleteEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `DeleteEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/DeleteEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### GetAvailableRestorePeriods

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetAvailableRestorePeriods(GetAvailableRestorePeriodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `ApplicationsEnvironmentsAvailableRestorePeriodsResponse`
- **Error**: `ApiException<GetAvailableRestorePeriodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAvailableRestorePeriodsRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/GetAvailableRestorePeriodsRequest.cs` |
| `ApplicationsEnvironmentsAvailableRestorePeriodsResponse` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsAvailableRestorePeriodsResponse.cs` |
| `GetAvailableRestorePeriodsError` | `src/Dynamics365BusinessCentral/Errors/GetAvailableRestorePeriodsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### GetEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<GetEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/GetEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/Dynamics365BusinessCentral/Models/EnvironmentModel.cs` |
| `GetEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/GetEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### ListAllEnvironments

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAllEnvironments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `ApiException<ListAllEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsResponse` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsResponse.cs` |
| `ListAllEnvironmentsError` | `src/Dynamics365BusinessCentral/Errors/ListAllEnvironmentsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### ListEnvironments

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListEnvironments(ListEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `ApiException<ListEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnvironmentsRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/ListEnvironmentsRequest.cs` |
| `ApplicationsEnvironmentsResponse` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsResponse.cs` |
| `ListEnvironmentsError` | `src/Dynamics365BusinessCentral/Errors/ListEnvironmentsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### RecoverEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `RecoverEnvironment(RecoverEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<RecoverEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecoverEnvironmentRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/RecoverEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `RecoverEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/RecoverEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### RenameEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `RenameEnvironment(RenameEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<RenameEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenameEnvironmentRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/RenameEnvironmentRequest.cs` |
| `ApplicationsEnvironmentsRenameRequest` | `src/Dynamics365BusinessCentral/Models/ApplicationsEnvironmentsRenameRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `RenameEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/RenameEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### RestoreEnvironment

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `RestoreEnvironment(RestoreEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`, `Body`
- **Returns**: `EnvironmentOperation`
- **Error**: `ApiException<RestoreEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreEnvironmentOperationRequest` | `src/Dynamics365BusinessCentral/Requests/Environments/RestoreEnvironmentOperationRequest.cs` |
| `RestoreEnvironmentRequest` | `src/Dynamics365BusinessCentral/Models/RestoreEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/Dynamics365BusinessCentral/Models/EnvironmentOperation.cs` |
| `RestoreEnvironmentError` | `src/Dynamics365BusinessCentral/Errors/RestoreEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

