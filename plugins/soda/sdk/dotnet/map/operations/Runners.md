<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runners — operations

Accessor: `client.Runners` · Source: `src/Soda/Api/Runners.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1RunnersRunnerId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1RunnersRunnerId(DeleteApiV1RunnersRunnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunnerId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteApiV1RunnersRunnerIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1RunnersRunnerIdRequest` | `src/Soda/Requests/Runners/DeleteApiV1RunnersRunnerIdRequest.cs` |
| `DeleteApiV1RunnersRunnerIdError` | `src/Soda/Errors/DeleteApiV1RunnersRunnerIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Runners

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Runners(GetApiV1RunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListRunnersResponse`
- **Error**: `ApiException<GetApiV1RunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1RunnersRequest` | `src/Soda/Requests/Runners/GetApiV1RunnersRequest.cs` |
| `PublicApiListRunnersResponse` | `src/Soda/Models/PublicApiListRunnersResponse.cs` |
| `GetApiV1RunnersError` | `src/Soda/Errors/GetApiV1RunnersError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1RunnersRunnerId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1RunnersRunnerId(GetApiV1RunnersRunnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunnerId`
- **Returns**: `PublicApiGetRunnerResponse`
- **Error**: `ApiException<GetApiV1RunnersRunnerIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1RunnersRunnerIdRequest` | `src/Soda/Requests/Runners/GetApiV1RunnersRunnerIdRequest.cs` |
| `PublicApiGetRunnerResponse` | `src/Soda/Models/PublicApiGetRunnerResponse.cs` |
| `GetApiV1RunnersRunnerIdError` | `src/Soda/Errors/GetApiV1RunnersRunnerIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Runners

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Runners(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PublicApiCreateRunnerResponse`
- **Error**: `ApiException<PostApiV1RunnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublicApiCreateRunnerResponse` | `src/Soda/Models/PublicApiCreateRunnerResponse.cs` |
| `PostApiV1RunnersError` | `src/Soda/Errors/PostApiV1RunnersError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

