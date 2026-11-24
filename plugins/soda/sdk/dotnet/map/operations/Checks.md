<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.Checks` · Source: `src/Soda/Api/Checks.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1ChecksCheckId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1ChecksCheckId(DeleteApiV1ChecksCheckIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CheckId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApiV1ChecksCheckIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1ChecksCheckIdRequest` | `src/Soda/Requests/Checks/DeleteApiV1ChecksCheckIdRequest.cs` |
| `DeleteApiV1ChecksCheckIdError` | `src/Soda/Errors/DeleteApiV1ChecksCheckIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Checks

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Checks(GetApiV1ChecksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `checkIds` ← `CheckIds`, `dataStandardId` ← `DataStandardId`, `datasetId` ← `DatasetId`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiChecksResponse`
- **Error**: `ApiException<GetApiV1ChecksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ChecksRequest` | `src/Soda/Requests/Checks/GetApiV1ChecksRequest.cs` |
| `PublicApiChecksResponse` | `src/Soda/Models/PublicApiChecksResponse.cs` |
| `GetApiV1ChecksError` | `src/Soda/Errors/GetApiV1ChecksError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

