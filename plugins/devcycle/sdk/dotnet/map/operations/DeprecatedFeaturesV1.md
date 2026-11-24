<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeprecatedFeaturesV1 — operations

Accessor: `client.DeprecatedFeaturesV1` · Source: `src/DevCycle/Api/DeprecatedFeaturesV1.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FeaturesControllerCreateMultipleV1

- **Signature**: `FeaturesControllerCreateMultipleV1(FeaturesControllerCreateMultipleV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>`
- **Error**: `ApiException<FeaturesControllerCreateMultipleV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerCreateMultipleV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerCreateMultipleV1Request.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerCreateMultipleV1Error` | `src/DevCycle/Errors/FeaturesControllerCreateMultipleV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerCreateV1

- **Signature**: `FeaturesControllerCreateV1(FeaturesControllerCreateV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerCreateV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerCreateV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerCreateV1Request.cs` |
| `CreateFeatureDto` | `src/DevCycle/Models/CreateFeatureDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerCreateV1Error` | `src/DevCycle/Errors/FeaturesControllerCreateV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerFindAllLinkedIssuesV1

- **Signature**: `FeaturesControllerFindAllLinkedIssuesV1(FeaturesControllerFindAllLinkedIssuesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `IReadOnlyList<JiraIssueLink>`
- **Error**: `ApiException<FeaturesControllerFindAllLinkedIssuesV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindAllLinkedIssuesV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindAllLinkedIssuesV1Request.cs` |
| `JiraIssueLink` | `src/DevCycle/Models/JiraIssueLink.cs` |
| `FeaturesControllerFindAllLinkedIssuesV1Error` | `src/DevCycle/Errors/FeaturesControllerFindAllLinkedIssuesV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### FeaturesControllerFindAllV1

- **Signature**: `FeaturesControllerFindAllV1(FeaturesControllerFindAllV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`, `type` ← `Type`, `status` ← `Status`
- **Returns**: `IReadOnlyList<FeatureDevCycleManagementDeprecatedFeaturesV1Api>`
- **Error**: `ApiException<FeaturesControllerFindAllV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindAllV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindAllV1Request.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Type9` | `src/DevCycle/Models/Enums/Type9.cs` |
| `Status5` | `src/DevCycle/Models/Enums/Status5.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerFindAllV1Error` | `src/DevCycle/Errors/FeaturesControllerFindAllV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### FeaturesControllerFindOneV1

- **Signature**: `FeaturesControllerFindOneV1(FeaturesControllerFindOneV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Key`, `Project`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerFindOneV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindOneV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindOneV1Request.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerFindOneV1Error` | `src/DevCycle/Errors/FeaturesControllerFindOneV1Error.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeaturesControllerFindStaticConfigurationV1

- **Signature**: `FeaturesControllerFindStaticConfigurationV1(FeaturesControllerFindStaticConfigurationV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Key`, `Project`
- **Returns**: `StaticConfiguration`
- **Error**: `ApiException<FeaturesControllerFindStaticConfigurationV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerFindStaticConfigurationV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerFindStaticConfigurationV1Request.cs` |
| `StaticConfiguration` | `src/DevCycle/Models/StaticConfiguration.cs` |
| `FeaturesControllerFindStaticConfigurationV1Error` | `src/DevCycle/Errors/FeaturesControllerFindStaticConfigurationV1Error.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerLinkIssueV1

- **Signature**: `FeaturesControllerLinkIssueV1(FeaturesControllerLinkIssueV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `JiraIssueLink`
- **Error**: `ApiException<FeaturesControllerLinkIssueV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerLinkIssueV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerLinkIssueV1Request.cs` |
| `LinkJiraIssueDto` | `src/DevCycle/Models/LinkJiraIssueDto.cs` |
| `JiraIssueLink` | `src/DevCycle/Models/JiraIssueLink.cs` |
| `FeaturesControllerLinkIssueV1Error` | `src/DevCycle/Errors/FeaturesControllerLinkIssueV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerRemoveLinkedIssueV1

- **Signature**: `FeaturesControllerRemoveLinkedIssueV1(FeaturesControllerRemoveLinkedIssueV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `IssueId`, `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FeaturesControllerRemoveLinkedIssueV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerRemoveLinkedIssueV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerRemoveLinkedIssueV1Request.cs` |
| `FeaturesControllerRemoveLinkedIssueV1Error` | `src/DevCycle/Errors/FeaturesControllerRemoveLinkedIssueV1Error.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeaturesControllerRemoveV1

- **Signature**: `FeaturesControllerRemoveV1(FeaturesControllerRemoveV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Key`, `Project`
- **Query params (wire ← C#)**: `deleteVariables` ← `DeleteVariables`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FeaturesControllerRemoveV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerRemoveV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerRemoveV1Request.cs` |
| `FeaturesControllerRemoveV1Error` | `src/DevCycle/Errors/FeaturesControllerRemoveV1Error.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeaturesControllerUpdateStaticConfigurationV1

- **Signature**: `FeaturesControllerUpdateStaticConfigurationV1(FeaturesControllerUpdateStaticConfigurationV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Key`, `Project`, `Body`
- **Returns**: `StaticConfiguration`
- **Error**: `ApiException<FeaturesControllerUpdateStaticConfigurationV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateStaticConfigurationV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateStaticConfigurationV1Request.cs` |
| `UpdateStaticConfigurationDto` | `src/DevCycle/Models/UpdateStaticConfigurationDto.cs` |
| `StaticConfiguration` | `src/DevCycle/Models/StaticConfiguration.cs` |
| `FeaturesControllerUpdateStaticConfigurationV1Error` | `src/DevCycle/Errors/FeaturesControllerUpdateStaticConfigurationV1Error.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateStatusV1

- **Signature**: `FeaturesControllerUpdateStatusV1(FeaturesControllerUpdateStatusV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Key`, `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerUpdateStatusV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateStatusV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateStatusV1Request.cs` |
| `UpdateFeatureStatusDto` | `src/DevCycle/Models/UpdateFeatureStatusDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerUpdateStatusV1Error` | `src/DevCycle/Errors/FeaturesControllerUpdateStatusV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### FeaturesControllerUpdateV1

- **Signature**: `FeaturesControllerUpdateV1(FeaturesControllerUpdateV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `ApiException<FeaturesControllerUpdateV1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeaturesControllerUpdateV1Request` | `src/DevCycle/Requests/DeprecatedFeaturesV1/FeaturesControllerUpdateV1Request.cs` |
| `UpdateFeatureDto` | `src/DevCycle/Models/UpdateFeatureDto.cs` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `src/DevCycle/Models/FeatureDevCycleManagementDeprecatedFeaturesV1Api.cs` |
| `FeaturesControllerUpdateV1Error` | `src/DevCycle/Errors/FeaturesControllerUpdateV1Error.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

