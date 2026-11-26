<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.Storage` · Source: `src/Dynamics365BusinessCentral/Api/Storage.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllEnvironmentsStorage

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetAllEnvironmentsStorage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `EnvironmentsUsedstorageResponse`
- **Error**: `ApiException<GetAllEnvironmentsStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterStorageApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsUsedstorageResponse` | `src/Dynamics365BusinessCentral/Models/EnvironmentsUsedstorageResponse.cs` |
| `GetAllEnvironmentsStorageError` | `src/Dynamics365BusinessCentral/Errors/GetAllEnvironmentsStorageError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

### GetEnvironmentStorage

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetEnvironmentStorage(GetEnvironmentStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnvironmentName`
- **Returns**: `UsedStorage`
- **Error**: `ApiException<GetEnvironmentStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterStorageApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentStorageRequest` | `src/Dynamics365BusinessCentral/Requests/Storage/GetEnvironmentStorageRequest.cs` |
| `UsedStorage` | `src/Dynamics365BusinessCentral/Models/UsedStorage.cs` |
| `GetEnvironmentStorageError` | `src/Dynamics365BusinessCentral/Errors/GetEnvironmentStorageError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

### GetQuotas

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetQuotas(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Quotas`
- **Error**: `ApiException<GetQuotasError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterStorageApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Quotas` | `src/Dynamics365BusinessCentral/Models/Quotas.cs` |
| `GetQuotasError` | `src/Dynamics365BusinessCentral/Errors/GetQuotasError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/Dynamics365BusinessCentral/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

