<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.Sources` · Source: `src/Hightouch/Api/Sources.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSource

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSource(CreateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SourcesResponse1`
- **Error**: `ApiException<CreateSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSourceRequest` | `src/Hightouch/Requests/Sources/CreateSourceRequest.cs` |
| `SourceCreate` | `src/Hightouch/Models/SourceCreate.cs` |
| `SourcesResponse1` | `src/Hightouch/Models/AnyOf/SourcesResponse1.cs` |
| `CreateSourceError` | `src/Hightouch/Errors/CreateSourceError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetSource

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSource(GetSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`
- **Returns**: `Source`
- **Error**: `ApiException<GetSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSourceRequest` | `src/Hightouch/Requests/Sources/GetSourceRequest.cs` |
| `Source` | `src/Hightouch/Models/Source.cs` |
| `GetSourceError` | `src/Hightouch/Errors/GetSourceError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListSource

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSource(ListSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `slug` ← `Slug`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `SourcesResponse`
- **Error**: `ApiException<ListSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSourceRequest` | `src/Hightouch/Requests/Sources/ListSourceRequest.cs` |
| `OrderByHightouchDestinationsApi` | `src/Hightouch/Models/Enums/OrderByHightouchDestinationsApi.cs` |
| `SourcesResponse` | `src/Hightouch/Models/SourcesResponse.cs` |
| `ListSourceError` | `src/Hightouch/Errors/ListSourceError.cs` |

### UpdateSource

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateSource(UpdateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `Body`
- **Returns**: `SourcesResponse1`
- **Error**: `ApiException<UpdateSourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSourceRequest` | `src/Hightouch/Requests/Sources/UpdateSourceRequest.cs` |
| `SourceUpdate` | `src/Hightouch/Models/SourceUpdate.cs` |
| `SourcesResponse1` | `src/Hightouch/Models/AnyOf/SourcesResponse1.cs` |
| `UpdateSourceError` | `src/Hightouch/Errors/UpdateSourceError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

