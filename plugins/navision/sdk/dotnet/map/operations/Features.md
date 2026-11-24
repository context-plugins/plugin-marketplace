<!-- Generated file — do not edit; regenerated with the SDK. -->

# Features — operations

Accessor: `client.Features` · Source: `src/MicrosoftDynamicsNav/Api/Features.cs` · 3 operations

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
| `ActivateFeatureRequest` | `src/MicrosoftDynamicsNav/Requests/Features/ActivateFeatureRequest.cs` |
| `CompaniesApiFeaturesApiMicrosoftNavActivateRequest` | `src/MicrosoftDynamicsNav/Models/CompaniesApiFeaturesApiMicrosoftNavActivateRequest.cs` |
| `ActivateFeatureError` | `src/MicrosoftDynamicsNav/Errors/ActivateFeatureError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `DeactivateFeatureRequest` | `src/MicrosoftDynamicsNav/Requests/Features/DeactivateFeatureRequest.cs` |
| `DeactivateFeatureError` | `src/MicrosoftDynamicsNav/Errors/DeactivateFeatureError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListFeaturesRequest` | `src/MicrosoftDynamicsNav/Requests/Features/ListFeaturesRequest.cs` |
| `CompaniesApiFeaturesResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiFeaturesResponse.cs` |
| `ListFeaturesError` | `src/MicrosoftDynamicsNav/Errors/ListFeaturesError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

