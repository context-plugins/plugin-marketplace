<!-- Generated file — do not edit; regenerated with the SDK. -->

# Endpoints — operations

Accessor: `client.Endpoints` · Source: `src/DopeSecurity/Api/Endpoints.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchEndpoints

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchEndpoints(SearchEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id` ← `Id`, `emailId` ← `EmailId`, `deviceName` ← `DeviceName`, `userId` ← `UserId`, `osVersion` ← `OsVersion`, `status` ← `Status` (comma-separated), `debugState` ← `DebugState` (comma-separated), `fallbackMode` ← `FallbackMode`, `locationId` ← `LocationId`, `agentVersion` ← `AgentVersion`, `first` ← `First`, `after` ← `After`, `order` ← `Order`
- **Returns**: `EndpointsSearchResponse`
- **Error**: `ApiException<SearchEndpointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchEndpointsRequest` | `src/DopeSecurity/Requests/Endpoints/SearchEndpointsRequest.cs` |
| `Status` | `src/DopeSecurity/Models/Enums/Status.cs` |
| `DebugState` | `src/DopeSecurity/Models/Enums/DebugState.cs` |
| `FallbackMode` | `src/DopeSecurity/Models/Enums/FallbackMode.cs` |
| `Order` | `src/DopeSecurity/Models/Enums/Order.cs` |
| `EndpointsSearchResponse` | `src/DopeSecurity/Models/EndpointsSearchResponse.cs` |
| `SearchEndpointsError` | `src/DopeSecurity/Errors/SearchEndpointsError.cs` |
| `ErrorsModel` | `src/DopeSecurity/Models/ErrorsModel.cs` |

