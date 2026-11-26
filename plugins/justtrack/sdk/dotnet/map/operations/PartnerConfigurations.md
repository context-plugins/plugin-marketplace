<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerConfigurations — operations

Accessor: `client.PartnerConfigurations` · Source: `src/Justtrack/Api/PartnerConfigurations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostManagementV1PartnerConfigurationByFeature

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1PartnerConfigurationByFeature(PostManagementV1PartnerConfigurationByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`
- **Returns**: `ListPartnerConfigurationFeaturesResponse`
- **Error**: `ApiException<PostManagementV1PartnerConfigurationByFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1PartnerConfigurationByFeatureRequest` | `src/Justtrack/Requests/PartnerConfigurations/PostManagementV1PartnerConfigurationByFeatureRequest.cs` |
| `ListPartnerConfigurationFeaturesRequest` | `src/Justtrack/Models/ListPartnerConfigurationFeaturesRequest.cs` |
| `ListPartnerConfigurationFeaturesResponse` | `src/Justtrack/Models/ListPartnerConfigurationFeaturesResponse.cs` |
| `PostManagementV1PartnerConfigurationByFeatureError` | `src/Justtrack/Errors/PostManagementV1PartnerConfigurationByFeatureError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

### PostManagementV1PartnerConfigurations

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1PartnerConfigurations(PostManagementV1PartnerConfigurationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListPartnerConfigurationsResponse`
- **Error**: `ApiException<PostManagementV1PartnerConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1PartnerConfigurationsRequest` | `src/Justtrack/Requests/PartnerConfigurations/PostManagementV1PartnerConfigurationsRequest.cs` |
| `ListPartnerConfigurationsRequest` | `src/Justtrack/Models/ListPartnerConfigurationsRequest.cs` |
| `ListPartnerConfigurationsResponse` | `src/Justtrack/Models/ListPartnerConfigurationsResponse.cs` |
| `PostManagementV1PartnerConfigurationsError` | `src/Justtrack/Errors/PostManagementV1PartnerConfigurationsError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

### PutManagementV1PartnerConfigurationByFeature

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PutManagementV1PartnerConfigurationByFeature(PutManagementV1PartnerConfigurationByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`
- **Returns**: `IReadOnlyList<PartnerConfigurationFeatureOutput>`
- **Error**: `ApiException<PutManagementV1PartnerConfigurationByFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutManagementV1PartnerConfigurationByFeatureRequest` | `src/Justtrack/Requests/PartnerConfigurations/PutManagementV1PartnerConfigurationByFeatureRequest.cs` |
| `UpsertPartnerConfigurationFeaturesRequest` | `src/Justtrack/Models/UpsertPartnerConfigurationFeaturesRequest.cs` |
| `PartnerConfigurationFeatureOutput` | `src/Justtrack/Models/PartnerConfigurationFeatureOutput.cs` |
| `PutManagementV1PartnerConfigurationByFeatureError` | `src/Justtrack/Errors/PutManagementV1PartnerConfigurationByFeatureError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

