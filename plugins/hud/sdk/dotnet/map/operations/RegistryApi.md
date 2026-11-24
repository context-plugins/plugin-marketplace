<!-- Generated file — do not edit; regenerated with the SDK. -->

# RegistryApi — operations

Accessor: `client.RegistryApi` · Source: `src/Hud/Api/RegistryApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet

- **Signature**: `GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Query params (wire ← C#)**: `build_id` ← `BuildId`
- **Returns**: `RegistrySourceUrlResponse`
- **Error**: `ApiException<GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest` | `src/Hud/Requests/RegistryApi/GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest.cs` |
| `BuildId1` | `src/Hud/Models/AnyOf/BuildId1.cs` |
| `RegistrySourceUrlResponse` | `src/Hud/Models/RegistrySourceUrlResponse.cs` |
| `GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError` | `src/Hud/Errors/GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetRegistryV2RegistryRegistryIdGet

- **Signature**: `GetRegistryV2RegistryRegistryIdGet(GetRegistryV2RegistryRegistryIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Returns**: `RegistryDetailResponse`
- **Error**: `ApiException<GetRegistryV2RegistryRegistryIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRegistryV2RegistryRegistryIdGetRequest` | `src/Hud/Requests/RegistryApi/GetRegistryV2RegistryRegistryIdGetRequest.cs` |
| `RegistryDetailResponse` | `src/Hud/Models/RegistryDetailResponse.cs` |
| `GetRegistryV2RegistryRegistryIdGetError` | `src/Hud/Errors/GetRegistryV2RegistryRegistryIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListRegistriesV2RegistryGet

- **Signature**: `ListRegistriesV2RegistryGet(ListRegistriesV2RegistryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `search` ← `Search`, `match_templates` ← `MatchTemplates`, `include_latest_scenarios` ← `IncludeLatestScenarios`, `public_only` ← `PublicOnly`, `featured_only` ← `FeaturedOnly`, `owner_only` ← `OwnerOnly`, `project_id` ← `ProjectId`, `sort_by` ← `SortBy`
- **Returns**: `PaginatedResponseRegistryDetailResponse`
- **Error**: `ApiException<ListRegistriesV2RegistryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRegistriesV2RegistryGetRequest` | `src/Hud/Requests/RegistryApi/ListRegistriesV2RegistryGetRequest.cs` |
| `SearchHudPlatformRegistryApi` | `src/Hud/Models/AnyOf/SearchHudPlatformRegistryApi.cs` |
| `ProjectId1` | `src/Hud/Models/AnyOf/ProjectId1.cs` |
| `SortBy` | `src/Hud/Models/Enums/SortBy.cs` |
| `PaginatedResponseRegistryDetailResponse` | `src/Hud/Models/PaginatedResponseRegistryDetailResponse.cs` |
| `ListRegistriesV2RegistryGetError` | `src/Hud/Errors/ListRegistriesV2RegistryGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListRegistryScenariosV2RegistryRegistryIdScenariosGet

- **Signature**: `ListRegistryScenariosV2RegistryRegistryIdScenariosGet(ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Query params (wire ← C#)**: `build_id` ← `BuildId`
- **Returns**: `IReadOnlyList<ScenarioResponse>`
- **Error**: `ApiException<ListRegistryScenariosV2RegistryRegistryIdScenariosGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest` | `src/Hud/Requests/RegistryApi/ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest.cs` |
| `BuildId2` | `src/Hud/Models/AnyOf/BuildId2.cs` |
| `ScenarioResponse` | `src/Hud/Models/ScenarioResponse.cs` |
| `ListRegistryScenariosV2RegistryRegistryIdScenariosGetError` | `src/Hud/Errors/ListRegistryScenariosV2RegistryRegistryIdScenariosGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

