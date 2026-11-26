<!-- Generated file — do not edit; regenerated with the SDK. -->

# Features — operations

Accessor: `client.Features` · Source: `src/Dynamics365BusinessCentral/Api/Features.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateFeature

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ActivateFeature(ActivateFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `FeatureId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ActivateFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateFeatureRequest` | `src/Dynamics365BusinessCentral/Requests/Features/ActivateFeatureRequest.cs` |
| `CompaniesApiFeaturesApiMicrosoftNavActivateRequest` | `src/Dynamics365BusinessCentral/Models/CompaniesApiFeaturesApiMicrosoftNavActivateRequest.cs` |
| `ActivateFeatureError` | `src/Dynamics365BusinessCentral/Errors/ActivateFeatureError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### DeactivateFeature

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeactivateFeature(DeactivateFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `FeatureId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeactivateFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeactivateFeatureRequest` | `src/Dynamics365BusinessCentral/Requests/Features/DeactivateFeatureRequest.cs` |
| `DeactivateFeatureError` | `src/Dynamics365BusinessCentral/Errors/DeactivateFeatureError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListFeatures

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListFeatures(ListFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiFeaturesResponse`
- **Error**: `ApiException<ListFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFeaturesRequest` | `src/Dynamics365BusinessCentral/Requests/Features/ListFeaturesRequest.cs` |
| `CompaniesApiFeaturesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiFeaturesResponse.cs` |
| `ListFeaturesError` | `src/Dynamics365BusinessCentral/Errors/ListFeaturesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

