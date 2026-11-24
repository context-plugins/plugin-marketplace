<!-- Generated file — do not edit; regenerated with the SDK. -->

# FindAll — operations

Accessor: `client.FindAll` · Source: `src/ParallelSdk/Api/FindAll.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelFindallRunV1BetaFindallRunsFindallIdCancelPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CancelFindallRunV1BetaFindallRunsFindallIdCancelPost(CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 409] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest` | `src/ParallelSdk/Requests/FindAll/CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError` | `src/ParallelSdk/Errors/CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`, `Body`
- **Returns**: `FindAllSchema`
- **Error**: `ApiException<EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest` | `src/ParallelSdk/Requests/FindAll/EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllEnrichInput` | `src/ParallelSdk/Models/FindAllEnrichInput.cs` |
| `FindAllSchema` | `src/ParallelSdk/Models/FindAllSchema.cs` |
| `EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError` | `src/ParallelSdk/Errors/EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost(ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`, `Body`
- **Returns**: `FindAllSchema`
- **Error**: `ApiException<ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest` | `src/ParallelSdk/Requests/FindAll/ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllExtendInput` | `src/ParallelSdk/Models/FindAllExtendInput.cs` |
| `FindAllSchema` | `src/ParallelSdk/Models/FindAllSchema.cs` |
| `ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError` | `src/ParallelSdk/Errors/ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### FindallEntitySearchV1BetaFindallEntitySearchPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `FindallEntitySearchV1BetaFindallEntitySearchPost(FindallEntitySearchV1BetaFindallEntitySearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FindAllEntitySearchResponse`
- **Error**: `ApiException<FindallEntitySearchV1BetaFindallEntitySearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindallEntitySearchV1BetaFindallEntitySearchPostRequest` | `src/ParallelSdk/Requests/FindAll/FindallEntitySearchV1BetaFindallEntitySearchPostRequest.cs` |
| `FindAllEntitySearchRequest` | `src/ParallelSdk/Models/FindAllEntitySearchRequest.cs` |
| `FindAllEntitySearchResponse` | `src/ParallelSdk/Models/FindAllEntitySearchResponse.cs` |
| `FindallEntitySearchV1BetaFindallEntitySearchPostError` | `src/ParallelSdk/Errors/FindallEntitySearchV1BetaFindallEntitySearchPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### FindallRunsV1GetV1BetaFindallRunsFindallIdGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `FindallRunsV1GetV1BetaFindallRunsFindallIdGet(FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`
- **Returns**: `FindAllRun`
- **Error**: `ApiException<FindallRunsV1GetV1BetaFindallRunsFindallIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest` | `src/ParallelSdk/Requests/FindAll/FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllRun` | `src/ParallelSdk/Models/FindAllRun.cs` |
| `FindallRunsV1GetV1BetaFindallRunsFindallIdGetError` | `src/ParallelSdk/Errors/FindallRunsV1GetV1BetaFindallRunsFindallIdGetError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### FindallRunsV1V1BetaFindallRunsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `FindallRunsV1V1BetaFindallRunsPost(FindallRunsV1V1BetaFindallRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FindAllRun`
- **Error**: `ApiException<FindallRunsV1V1BetaFindallRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [402, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindallRunsV1V1BetaFindallRunsPostRequest` | `src/ParallelSdk/Requests/FindAll/FindallRunsV1V1BetaFindallRunsPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllRunInput` | `src/ParallelSdk/Models/FindAllRunInput.cs` |
| `FindAllRun` | `src/ParallelSdk/Models/FindAllRun.cs` |
| `FindallRunsV1V1BetaFindallRunsPostError` | `src/ParallelSdk/Errors/FindallRunsV1V1BetaFindallRunsPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### GetFindallEventsV1BetaFindallRunsFindallIdEventsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`
- **Query params (wire ← C#)**: `last_event_id` ← `LastEventId`, `timeout` ← `Timeout`
- **Returns**: `IAsyncEnumerable<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>`
- **Error**: `ApiException<GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest` | `src/ParallelSdk/Requests/FindAll/GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest.cs` |
| `LastEventId1` | `src/ParallelSdk/Models/AnyOf/LastEventId1.cs` |
| `TimeoutModel` | `src/ParallelSdk/Models/AnyOf/TimeoutModel.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet` | `src/ParallelSdk/Models/OneOf/Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.cs` |
| `GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError` | `src/ParallelSdk/Errors/GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### GetFindallResultV1BetaFindallRunsFindallIdResultGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetFindallResultV1BetaFindallRunsFindallIdResultGet(GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`
- **Returns**: `FindAllRunResult`
- **Error**: `ApiException<GetFindallResultV1BetaFindallRunsFindallIdResultGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest` | `src/ParallelSdk/Requests/FindAll/GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllRunResult` | `src/ParallelSdk/Models/FindAllRunResult.cs` |
| `GetFindallResultV1BetaFindallRunsFindallIdResultGetError` | `src/ParallelSdk/Errors/GetFindallResultV1BetaFindallRunsFindallIdResultGetError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FindallId`
- **Returns**: `FindAllSchema`
- **Error**: `ApiException<GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest` | `src/ParallelSdk/Requests/FindAll/GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `FindAllSchema` | `src/ParallelSdk/Models/FindAllSchema.cs` |
| `GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError` | `src/ParallelSdk/Errors/GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### IngestFindallRunV1BetaFindallIngestPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `IngestFindallRunV1BetaFindallIngestPost(IngestFindallRunV1BetaFindallIngestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FindAllSchema`
- **Error**: `ApiException<IngestFindallRunV1BetaFindallIngestPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IngestFindallRunV1BetaFindallIngestPostRequest` | `src/ParallelSdk/Requests/FindAll/IngestFindallRunV1BetaFindallIngestPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `IngestInput` | `src/ParallelSdk/Models/IngestInput.cs` |
| `FindAllSchema` | `src/ParallelSdk/Models/FindAllSchema.cs` |
| `IngestFindallRunV1BetaFindallIngestPostError` | `src/ParallelSdk/Errors/IngestFindallRunV1BetaFindallIngestPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

