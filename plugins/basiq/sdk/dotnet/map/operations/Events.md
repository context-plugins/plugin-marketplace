<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Basiq/Api/Events.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEventTypeById

- **Auth**: `options.ServicesToken`
- **Signature**: `GetEventTypeById(GetEventTypeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EventsTypesResponse1`
- **Error**: `ApiException<GetEventTypeByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetEventsTypes400Error1([NotNullWhen(true)] out EventsTypes400Error1? value)` [400] · `TryGetEventsTypes401Error1([NotNullWhen(true)] out EventsTypes401Error1? value)` [401] · `TryGetEventsTypes403Error1([NotNullWhen(true)] out EventsTypes403Error1? value)` [403] · `TryGetEventsTypes404Error1([NotNullWhen(true)] out EventsTypes404Error1? value)` [404] · `TryGetEventsTypes429Error1([NotNullWhen(true)] out EventsTypes429Error1? value)` [429] · `TryGetEventsTypes500Error1([NotNullWhen(true)] out EventsTypes500Error1? value)` [500] · `TryGetEventsTypes503Error1([NotNullWhen(true)] out EventsTypes503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEventTypeByIdRequest` | `src/Basiq/Requests/Events/GetEventTypeByIdRequest.cs` |
| `EventsTypesResponse1` | `src/Basiq/Models/EventsTypesResponse1.cs` |
| `GetEventTypeByIdError` | `src/Basiq/Errors/GetEventTypeByIdError.cs` |
| `EventsTypes400Error1` | `src/Basiq/Models/EventsTypes400Error1.cs` |
| `EventsTypes401Error1` | `src/Basiq/Models/EventsTypes401Error1.cs` |
| `EventsTypes403Error1` | `src/Basiq/Models/EventsTypes403Error1.cs` |
| `EventsTypes404Error1` | `src/Basiq/Models/EventsTypes404Error1.cs` |
| `EventsTypes429Error1` | `src/Basiq/Models/EventsTypes429Error1.cs` |
| `EventsTypes500Error1` | `src/Basiq/Models/EventsTypes500Error1.cs` |
| `EventsTypes503Error1` | `src/Basiq/Models/EventsTypes503Error1.cs` |

### GetEvents

- **Auth**: `options.ServicesToken`
- **Signature**: `GetEvents(GetEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `EventsGetResponseResource`
- **Error**: `ApiException<GetEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetEvents400Error1([NotNullWhen(true)] out Events400Error1? value)` [400] · `TryGetEvents401Error1([NotNullWhen(true)] out Events401Error1? value)` [401] · `TryGetEvents403Error1([NotNullWhen(true)] out Events403Error1? value)` [403] · `TryGetEvents404Error1([NotNullWhen(true)] out Events404Error1? value)` [404] · `TryGetEvents500Error1([NotNullWhen(true)] out Events500Error1? value)` [500] · `TryGetEvents503Error1([NotNullWhen(true)] out Events503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEventsRequest` | `src/Basiq/Requests/Events/GetEventsRequest.cs` |
| `EventsGetResponseResource` | `src/Basiq/Models/EventsGetResponseResource.cs` |
| `GetEventsError` | `src/Basiq/Errors/GetEventsError.cs` |
| `Events400Error1` | `src/Basiq/Models/Events400Error1.cs` |
| `Events401Error1` | `src/Basiq/Models/Events401Error1.cs` |
| `Events403Error1` | `src/Basiq/Models/Events403Error1.cs` |
| `Events404Error1` | `src/Basiq/Models/Events404Error1.cs` |
| `Events500Error1` | `src/Basiq/Models/Events500Error1.cs` |
| `Events503Error1` | `src/Basiq/Models/Events503Error1.cs` |

### GetTypeById

- **Auth**: `options.ServicesToken`
- **Signature**: `GetTypeById(GetTypeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EventsResponse`
- **Error**: `ApiException<GetTypeByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetEvents400Error21([NotNullWhen(true)] out Events400Error21? value)` [400] · `TryGetEvents401Error21([NotNullWhen(true)] out Events401Error21? value)` [401] · `TryGetEvents403Error21([NotNullWhen(true)] out Events403Error21? value)` [403] · `TryGetEvents404Error21([NotNullWhen(true)] out Events404Error21? value)` [404] · `TryGetEvents429Error1([NotNullWhen(true)] out Events429Error1? value)` [429] · `TryGetEvents500Error21([NotNullWhen(true)] out Events500Error21? value)` [500] · `TryGetEvents503Error21([NotNullWhen(true)] out Events503Error21? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTypeByIdRequest` | `src/Basiq/Requests/Events/GetTypeByIdRequest.cs` |
| `EventsResponse` | `src/Basiq/Models/EventsResponse.cs` |
| `GetTypeByIdError` | `src/Basiq/Errors/GetTypeByIdError.cs` |
| `Events400Error21` | `src/Basiq/Models/Events400Error21.cs` |
| `Events401Error21` | `src/Basiq/Models/Events401Error21.cs` |
| `Events403Error21` | `src/Basiq/Models/Events403Error21.cs` |
| `Events404Error21` | `src/Basiq/Models/Events404Error21.cs` |
| `Events429Error1` | `src/Basiq/Models/Events429Error1.cs` |
| `Events500Error21` | `src/Basiq/Models/Events500Error21.cs` |
| `Events503Error21` | `src/Basiq/Models/Events503Error21.cs` |

### ListEventTypes

- **Auth**: `options.ServicesToken`
- **Signature**: `ListEventTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `EventsTypesResponse`
- **Error**: `ApiException<ListEventTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetEventsTypes401Error1([NotNullWhen(true)] out EventsTypes401Error1? value)` [401] · `TryGetEventsTypes403Error1([NotNullWhen(true)] out EventsTypes403Error1? value)` [403] · `TryGetEventsTypes429Error1([NotNullWhen(true)] out EventsTypes429Error1? value)` [429] · `TryGetEventsTypes500Error1([NotNullWhen(true)] out EventsTypes500Error1? value)` [500] · `TryGetEventsTypes503Error1([NotNullWhen(true)] out EventsTypes503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventsTypesResponse` | `src/Basiq/Models/EventsTypesResponse.cs` |
| `ListEventTypesError` | `src/Basiq/Errors/ListEventTypesError.cs` |
| `EventsTypes401Error1` | `src/Basiq/Models/EventsTypes401Error1.cs` |
| `EventsTypes403Error1` | `src/Basiq/Models/EventsTypes403Error1.cs` |
| `EventsTypes429Error1` | `src/Basiq/Models/EventsTypes429Error1.cs` |
| `EventsTypes500Error1` | `src/Basiq/Models/EventsTypes500Error1.cs` |
| `EventsTypes503Error1` | `src/Basiq/Models/EventsTypes503Error1.cs` |

