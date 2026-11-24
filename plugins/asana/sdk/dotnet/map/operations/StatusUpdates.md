<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusUpdates — operations

Accessor: `client.StatusUpdates` · Source: `src/Asana/Api/StatusUpdates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStatusForObject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateStatusForObject(CreateStatusForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `StatusUpdatesResponse`
- **Error**: `ApiException<CreateStatusForObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStatusForObjectRequest` | `src/Asana/Requests/StatusUpdates/CreateStatusForObjectRequest.cs` |
| `StatusUpdatesRequest` | `src/Asana/Models/StatusUpdatesRequest.cs` |
| `StatusUpdatesResponse` | `src/Asana/Models/StatusUpdatesResponse.cs` |
| `CreateStatusForObjectError` | `src/Asana/Errors/CreateStatusForObjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteStatus

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteStatus(DeleteStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StatusGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `StatusUpdatesResponse1`
- **Error**: `ApiException<DeleteStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStatusRequest` | `src/Asana/Requests/StatusUpdates/DeleteStatusRequest.cs` |
| `StatusUpdatesResponse1` | `src/Asana/Models/StatusUpdatesResponse1.cs` |
| `DeleteStatusError` | `src/Asana/Errors/DeleteStatusError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetStatus

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetStatus(GetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StatusGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `StatusUpdatesResponse`
- **Error**: `ApiException<GetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatusRequest` | `src/Asana/Requests/StatusUpdates/GetStatusRequest.cs` |
| `StatusUpdatesResponse` | `src/Asana/Models/StatusUpdatesResponse.cs` |
| `GetStatusError` | `src/Asana/Errors/GetStatusError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetStatusesForObject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetStatusesForObject(GetStatusesForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Parent`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `created_since` ← `CreatedSince`
- **Returns**: `StatusUpdatesResponse2`
- **Error**: `ApiException<GetStatusesForObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatusesForObjectRequest` | `src/Asana/Requests/StatusUpdates/GetStatusesForObjectRequest.cs` |
| `StatusUpdatesResponse2` | `src/Asana/Models/StatusUpdatesResponse2.cs` |
| `GetStatusesForObjectError` | `src/Asana/Errors/GetStatusesForObjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

