<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionDeploymentStatusApi — operations

Accessor: `client.ExtensionDeploymentStatusApi` · Source: `src/Dynamics365BusinessCentral/Api/ExtensionDeploymentStatusApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListExtensionDeploymentStatuses

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListExtensionDeploymentStatuses(ListExtensionDeploymentStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiExtensionDeploymentStatusResponse`
- **Error**: `ApiException<ListExtensionDeploymentStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExtensionDeploymentStatusesRequest` | `src/Dynamics365BusinessCentral/Requests/ExtensionDeploymentStatusApi/ListExtensionDeploymentStatusesRequest.cs` |
| `CompaniesApiExtensionDeploymentStatusResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiExtensionDeploymentStatusResponse.cs` |
| `ListExtensionDeploymentStatusesError` | `src/Dynamics365BusinessCentral/Errors/ListExtensionDeploymentStatusesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

