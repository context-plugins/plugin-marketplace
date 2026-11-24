<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Contentstack/Api/Events.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllEvents

- **Server group**: `DefaultContentstackEventsApi`
- **Signature**: `GetAllEvents(GetAllEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `EventList`
- **Error**: `ApiException<GetAllEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllEventsRequest` | `src/Contentstack/Requests/Events/GetAllEventsRequest.cs` |
| `EventList` | `src/Contentstack/Models/EventList.cs` |
| `GetAllEventsError` | `src/Contentstack/Errors/GetAllEventsError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### TrackEvents

- **Server group**: `DefaultContentstackEventsApi`
- **Signature**: `TrackEvents(TrackEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`, `XCsPersonalizeUserUid`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TrackEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrackEventsRequest` | `src/Contentstack/Requests/Events/TrackEventsRequest.cs` |
| `TrackEvent` | `src/Contentstack/Models/TrackEvent.cs` |
| `TrackEventsError` | `src/Contentstack/Errors/TrackEventsError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

