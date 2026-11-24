<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.Environments` · Source: `src/MicrosoftDynamicsNav/Api/Environments.cs` · 10 operations

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
| `CopyEnvironmentOperationRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/CopyEnvironmentOperationRequest.cs` |
| `CopyEnvironmentRequest` | `src/MicrosoftDynamicsNav/Models/CopyEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs` |
| `CopyEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/CopyEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `CreateEnvironmentOperationRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/CreateEnvironmentOperationRequest.cs` |
| `CreateEnvironmentRequest` | `src/MicrosoftDynamicsNav/Models/CreateEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs` |
| `CreateEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/CreateEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `DeleteEnvironmentRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/DeleteEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `DeleteEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/DeleteEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `GetAvailableRestorePeriodsRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/GetAvailableRestorePeriodsRequest.cs` |
| `ApplicationsEnvironmentsAvailableRestorePeriodsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsAvailableRestorePeriodsResponse.cs` |
| `GetAvailableRestorePeriodsError` | `src/MicrosoftDynamicsNav/Errors/GetAvailableRestorePeriodsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `GetEnvironmentRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/GetEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/MicrosoftDynamicsNav/Models/EnvironmentModel.cs` |
| `GetEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/GetEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### ListAllEnvironments

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListAllEnvironments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `ApiException<ListAllEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsResponse.cs` |
| `ListAllEnvironmentsError` | `src/MicrosoftDynamicsNav/Errors/ListAllEnvironmentsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

### ListEnvironments

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListEnvironments(ListEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApplicationsEnvironmentsResponse`
- **Error**: `ApiException<ListEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnvironmentsRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/ListEnvironmentsRequest.cs` |
| `ApplicationsEnvironmentsResponse` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsResponse.cs` |
| `ListEnvironmentsError` | `src/MicrosoftDynamicsNav/Errors/ListEnvironmentsError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `RecoverEnvironmentRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/RecoverEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `RecoverEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/RecoverEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `RenameEnvironmentRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/RenameEnvironmentRequest.cs` |
| `ApplicationsEnvironmentsRenameRequest` | `src/MicrosoftDynamicsNav/Models/ApplicationsEnvironmentsRenameRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `RenameEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/RenameEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

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
| `RestoreEnvironmentOperationRequest` | `src/MicrosoftDynamicsNav/Requests/Environments/RestoreEnvironmentOperationRequest.cs` |
| `RestoreEnvironmentRequest` | `src/MicrosoftDynamicsNav/Models/RestoreEnvironmentRequest.cs` |
| `EnvironmentOperation` | `src/MicrosoftDynamicsNav/Models/EnvironmentOperation.cs` |
| `RestoreEnvironmentError` | `src/MicrosoftDynamicsNav/Errors/RestoreEnvironmentError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi.cs` |

