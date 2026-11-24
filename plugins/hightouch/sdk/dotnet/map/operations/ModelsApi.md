<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.ModelsApi` · Source: `src/Hightouch/Api/ModelsApi.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateModel

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateModel(CreateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `skipColumnQuery` ← `SkipColumnQuery`
- **Returns**: `ModelsResponse1`
- **Error**: `ApiException<CreateModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateModelRequest` | `src/Hightouch/Requests/ModelsApi/CreateModelRequest.cs` |
| `ModelCreate` | `src/Hightouch/Models/ModelCreate.cs` |
| `ModelsResponse1` | `src/Hightouch/Models/AnyOf/ModelsResponse1.cs` |
| `CreateModelError` | `src/Hightouch/Errors/CreateModelError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### DeleteModel

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteModel(DeleteModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `ModelsResponse11`
- **Error**: `ApiException<DeleteModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteModelRequest` | `src/Hightouch/Requests/ModelsApi/DeleteModelRequest.cs` |
| `ModelsResponse11` | `src/Hightouch/Models/AnyOf/ModelsResponse11.cs` |
| `DeleteModelError` | `src/Hightouch/Errors/DeleteModelError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetAudienceSize

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAudienceSize(GetAudienceSizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`, `JobId`
- **Returns**: `ModelsSizeResponse1`
- **Error**: `ApiException<GetAudienceSizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAudienceSizeRequest` | `src/Hightouch/Requests/ModelsApi/GetAudienceSizeRequest.cs` |
| `ModelsSizeResponse1` | `src/Hightouch/Models/AnyOf/ModelsSizeResponse1.cs` |
| `GetAudienceSizeError` | `src/Hightouch/Errors/GetAudienceSizeError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetModel

- **Auth**: `options.BearerAuth`
- **Signature**: `GetModel(GetModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `Model`
- **Error**: `ApiException<GetModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetModelRequest` | `src/Hightouch/Requests/ModelsApi/GetModelRequest.cs` |
| `Model` | `src/Hightouch/Models/Model.cs` |
| `GetModelError` | `src/Hightouch/Errors/GetModelError.cs` |

### ListEnrichmentRuns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListEnrichmentRuns(ListEnrichmentRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Query params (wire ← C#)**: `region` ← `Region`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ModelsMatchBoosterRunsResponse`
- **Error**: `ApiException<ListEnrichmentRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnrichmentRunsRequest` | `src/Hightouch/Requests/ModelsApi/ListEnrichmentRunsRequest.cs` |
| `Region1` | `src/Hightouch/Models/Enums/Region1.cs` |
| `ModelsMatchBoosterRunsResponse` | `src/Hightouch/Models/AnyOf/ModelsMatchBoosterRunsResponse.cs` |
| `ListEnrichmentRunsError` | `src/Hightouch/Errors/ListEnrichmentRunsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### ListModel

- **Auth**: `options.BearerAuth`
- **Signature**: `ListModel(ListModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `slug` ← `Slug`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`, `tags` ← `Tags`
- **Returns**: `ModelsResponse`
- **Error**: `ApiException<ListModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListModelRequest` | `src/Hightouch/Requests/ModelsApi/ListModelRequest.cs` |
| `OrderByHightouchDestinationsApi` | `src/Hightouch/Models/Enums/OrderByHightouchDestinationsApi.cs` |
| `ModelsResponse` | `src/Hightouch/Models/ModelsResponse.cs` |
| `ListModelError` | `src/Hightouch/Errors/ListModelError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### StartAudienceSizeJob

- **Auth**: `options.BearerAuth`
- **Signature**: `StartAudienceSizeJob(StartAudienceSizeJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `ModelsSizeResponse`
- **Error**: `ApiException<StartAudienceSizeJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartAudienceSizeJobRequest` | `src/Hightouch/Requests/ModelsApi/StartAudienceSizeJobRequest.cs` |
| `ModelsSizeResponse` | `src/Hightouch/Models/AnyOf/ModelsSizeResponse.cs` |
| `StartAudienceSizeJobError` | `src/Hightouch/Errors/StartAudienceSizeJobError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### TriggerEnrichment

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerEnrichment(TriggerEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `ModelsMatchBoosterTriggerResponse`
- **Error**: `ApiException<TriggerEnrichmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerEnrichmentRequest` | `src/Hightouch/Requests/ModelsApi/TriggerEnrichmentRequest.cs` |
| `MatchBoosterTriggerInput` | `src/Hightouch/Models/MatchBoosterTriggerInput.cs` |
| `ModelsMatchBoosterTriggerResponse` | `src/Hightouch/Models/AnyOf/ModelsMatchBoosterTriggerResponse.cs` |
| `TriggerEnrichmentError` | `src/Hightouch/Errors/TriggerEnrichmentError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### UpdateModel

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateModel(UpdateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`, `Body`
- **Returns**: `ModelsResponse1`
- **Error**: `ApiException<UpdateModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateModelRequest` | `src/Hightouch/Requests/ModelsApi/UpdateModelRequest.cs` |
| `ModelUpdate` | `src/Hightouch/Models/ModelUpdate.cs` |
| `ModelsResponse1` | `src/Hightouch/Models/AnyOf/ModelsResponse1.cs` |
| `UpdateModelError` | `src/Hightouch/Errors/UpdateModelError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

