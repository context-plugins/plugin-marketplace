<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.Storage` · Source: `src/MicrosoftDynamicsNav/Api/Storage.cs` · 3 operations

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
| `EnvironmentsUsedstorageResponse` | `src/MicrosoftDynamicsNav/Models/EnvironmentsUsedstorageResponse.cs` |
| `GetAllEnvironmentsStorageError` | `src/MicrosoftDynamicsNav/Errors/GetAllEnvironmentsStorageError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

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
| `GetEnvironmentStorageRequest` | `src/MicrosoftDynamicsNav/Requests/Storage/GetEnvironmentStorageRequest.cs` |
| `UsedStorage` | `src/MicrosoftDynamicsNav/Models/UsedStorage.cs` |
| `GetEnvironmentStorageError` | `src/MicrosoftDynamicsNav/Errors/GetEnvironmentStorageError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

### GetQuotas

- **Server group**: `DefaultBusinessCentralAdministrationCenterAppManagementApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetQuotas(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Quotas`
- **Error**: `ApiException<GetQuotasError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBusinessCentralAdministrationCenterStorageApi([NotNullWhen(true)] out ErrorResponseBusinessCentralAdministrationCenterStorageApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Quotas` | `src/MicrosoftDynamicsNav/Models/Quotas.cs` |
| `GetQuotasError` | `src/MicrosoftDynamicsNav/Errors/GetQuotasError.cs` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `src/MicrosoftDynamicsNav/Models/ErrorResponseBusinessCentralAdministrationCenterStorageApi.cs` |

