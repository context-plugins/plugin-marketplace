<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/AppstoreSpy/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEventsPlayLiveopsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetEventsPlayLiveopsGet(GetEventsPlayLiveopsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `App`
- **Query params (wire ← C#)**: `app` ← `App`, `country` ← `Country`, `freshness` ← `Freshness`
- **Returns**: `IReadOnlyList<Event>`
- **Error**: `ApiException<GetEventsPlayLiveopsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayLiveops401Error1([NotNullWhen(true)] out PlayLiveops401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEventsPlayLiveopsGetRequest` | `src/AppstoreSpy/Requests/Events/GetEventsPlayLiveopsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `CacheTime` | `src/AppstoreSpy/Models/Enums/CacheTime.cs` |
| `Event` | `src/AppstoreSpy/Models/Event.cs` |
| `GetEventsPlayLiveopsGetError` | `src/AppstoreSpy/Errors/GetEventsPlayLiveopsGetError.cs` |
| `PlayLiveops401Error1` | `src/AppstoreSpy/Models/PlayLiveops401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

