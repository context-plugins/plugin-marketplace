<!-- Generated file — do not edit; regenerated with the SDK. -->

# Destinations — operations

Accessor: `client.Destinations` · Source: `src/Hightouch/Api/Destinations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateDestination(CreateDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DestinationsResponse1`
- **Error**: `ApiException<CreateDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [409, 422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDestinationRequest` | `src/Hightouch/Requests/Destinations/CreateDestinationRequest.cs` |
| `DestinationCreate` | `src/Hightouch/Models/DestinationCreate.cs` |
| `DestinationsResponse1` | `src/Hightouch/Models/AnyOf/DestinationsResponse1.cs` |
| `CreateDestinationError` | `src/Hightouch/Errors/CreateDestinationError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDestination(GetDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DestinationId`
- **Returns**: `Destination`
- **Error**: `ApiException<GetDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDestinationRequest` | `src/Hightouch/Requests/Destinations/GetDestinationRequest.cs` |
| `Destination` | `src/Hightouch/Models/Destination.cs` |
| `GetDestinationError` | `src/Hightouch/Errors/GetDestinationError.cs` |

### ListDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `ListDestination(ListDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `slug` ← `Slug`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `DestinationsResponse`
- **Error**: `ApiException<ListDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDestinationRequest` | `src/Hightouch/Requests/Destinations/ListDestinationRequest.cs` |
| `OrderByHightouchDestinationsApi` | `src/Hightouch/Models/Enums/OrderByHightouchDestinationsApi.cs` |
| `DestinationsResponse` | `src/Hightouch/Models/DestinationsResponse.cs` |
| `ListDestinationError` | `src/Hightouch/Errors/ListDestinationError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### UpdateDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateDestination(UpdateDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DestinationId`, `Body`
- **Returns**: `DestinationsResponse1`
- **Error**: `ApiException<UpdateDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDestinationRequest` | `src/Hightouch/Requests/Destinations/UpdateDestinationRequest.cs` |
| `DestinationUpdate` | `src/Hightouch/Models/DestinationUpdate.cs` |
| `DestinationsResponse1` | `src/Hightouch/Models/AnyOf/DestinationsResponse1.cs` |
| `UpdateDestinationError` | `src/Hightouch/Errors/UpdateDestinationError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

