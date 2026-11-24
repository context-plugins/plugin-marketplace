<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeaturesV2 — operations

Accessor: `client.FeaturesV2` · Source: `src/DevCycle/Api/FeaturesV2.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FeaturesControllerCreate

- **Signature**: `FeaturesControllerCreate(FeaturesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerCreateRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerCreateRequest.cs` |
| `CreateFeatureDto` | `src/DevCycle/Models/CreateFeatureDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerCreateError` | `src/DevCycle/Errors/FeaturesControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerFindAll

- **Signature**: `FeaturesControllerFindAll(FeaturesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`, `type` ← `Type`, `status` ← `Status`, `customStatus` ← `CustomStatus`, `keys` ← `Keys`, `includeLatestUpdate` ← `IncludeLatestUpdate`, `staleness` ← `Staleness`
- **Returns**: `IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>`
- **Error**: `ApiException<FeaturesControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindAllRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Type9` | `src/DevCycle/Models/Enums/Type9.cs` |
| `Status5` | `src/DevCycle/Models/Enums/Status5.cs` |
| `Staleness` | `src/DevCycle/Models/Enums/Staleness.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerFindAllError` | `src/DevCycle/Errors/FeaturesControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### FeaturesControllerFindOne

- **Signature**: `FeaturesControllerFindOne(FeaturesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindOneRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindOneRequest.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerFindOneError` | `src/DevCycle/Errors/FeaturesControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeaturesControllerFindStaticConfiguration

- **Signature**: `FeaturesControllerFindStaticConfiguration(FeaturesControllerFindStaticConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `StaticConfiguration`
- **Error**: `ApiException<FeaturesControllerFindStaticConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindStaticConfigurationRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerFindStaticConfigurationRequest.cs` |
| `StaticConfiguration` | `src/DevCycle/Models/StaticConfiguration.cs` |
| `FeaturesControllerFindStaticConfigurationError` | `src/DevCycle/Errors/FeaturesControllerFindStaticConfigurationError.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerGetStaleness

- **Signature**: `FeaturesControllerGetStaleness(FeaturesControllerGetStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `FeatureStalenessEntity`
- **Error**: `ApiException<FeaturesControllerGetStalenessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerGetStalenessRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerGetStalenessRequest.cs` |
| `FeatureStalenessEntity` | `src/DevCycle/Models/FeatureStalenessEntity.cs` |
| `FeaturesControllerGetStalenessError` | `src/DevCycle/Errors/FeaturesControllerGetStalenessError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeaturesControllerUpdate

- **Signature**: `FeaturesControllerUpdate(FeaturesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateRequest.cs` |
| `UpdateFeatureDto` | `src/DevCycle/Models/UpdateFeatureDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerUpdateError` | `src/DevCycle/Errors/FeaturesControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateStaleness

- **Signature**: `FeaturesControllerUpdateStaleness(FeaturesControllerUpdateStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureStalenessEntity`
- **Error**: `ApiException<FeaturesControllerUpdateStalenessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateStalenessRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStalenessRequest.cs` |
| `UpdateStalenessDto` | `src/DevCycle/Models/UpdateStalenessDto.cs` |
| `FeatureStalenessEntity` | `src/DevCycle/Models/FeatureStalenessEntity.cs` |
| `FeaturesControllerUpdateStalenessError` | `src/DevCycle/Errors/FeaturesControllerUpdateStalenessError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateStaticConfiguration

- **Signature**: `FeaturesControllerUpdateStaticConfiguration(FeaturesControllerUpdateStaticConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `StaticConfiguration`
- **Error**: `ApiException<FeaturesControllerUpdateStaticConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateStaticConfigurationRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStaticConfigurationRequest.cs` |
| `UpdateStaticConfigurationDto` | `src/DevCycle/Models/UpdateStaticConfigurationDto.cs` |
| `StaticConfiguration` | `src/DevCycle/Models/StaticConfiguration.cs` |
| `FeaturesControllerUpdateStaticConfigurationError` | `src/DevCycle/Errors/FeaturesControllerUpdateStaticConfigurationError.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateStatus

- **Signature**: `FeaturesControllerUpdateStatus(FeaturesControllerUpdateStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerUpdateStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateStatusRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateStatusRequest.cs` |
| `UpdateFeatureStatusDto` | `src/DevCycle/Models/UpdateFeatureStatusDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerUpdateStatusError` | `src/DevCycle/Errors/FeaturesControllerUpdateStatusError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateSummary

- **Signature**: `FeaturesControllerUpdateSummary(FeaturesControllerUpdateSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureSummary`
- **Error**: `ApiException<FeaturesControllerUpdateSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateSummaryRequest` | `src/DevCycle/Requests/FeaturesV2/FeaturesControllerUpdateSummaryRequest.cs` |
| `UpdateFeatureSummaryDto` | `src/DevCycle/Models/UpdateFeatureSummaryDto.cs` |
| `FeatureSummary` | `src/DevCycle/Models/FeatureSummary.cs` |
| `FeaturesControllerUpdateSummaryError` | `src/DevCycle/Errors/FeaturesControllerUpdateSummaryError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

