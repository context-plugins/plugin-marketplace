<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.Discovery` · Source: `src/OddsRelay/Api/Discovery.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListBookmakers

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `ListBookmakers(ListBookmakersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `V2BookmakersResponse1`
- **Error**: `ApiException<ListBookmakersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBookmakersRequest` | `src/OddsRelay/Requests/Discovery/ListBookmakersRequest.cs` |
| `Format` | `src/OddsRelay/Models/Enums/Format.cs` |
| `V2BookmakersResponse1` | `src/OddsRelay/Models/AnyOf/V2BookmakersResponse1.cs` |
| `ListBookmakersError` | `src/OddsRelay/Errors/ListBookmakersError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

### ListEvents

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Sport`
- **Query params (wire ← C#)**: `sport` ← `Sport`, `region` ← `Region`, `format` ← `Format`, `dateFormat` ← `DateFormat`, `cursor` ← `Cursor`, `eventIds` ← `EventIds`, `commenceTimeFrom` ← `CommenceTimeFrom`, `commenceTimeTo` ← `CommenceTimeTo`
- **Returns**: `V2EventsResponse1`
- **Error**: `ApiException<ListEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError404([NotNullWhen(true)] out Error404? value)` [404] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEventsRequest` | `src/OddsRelay/Requests/Discovery/ListEventsRequest.cs` |
| `Format` | `src/OddsRelay/Models/Enums/Format.cs` |
| `DateFormat` | `src/OddsRelay/Models/Enums/DateFormat.cs` |
| `V2EventsResponse1` | `src/OddsRelay/Models/AnyOf/V2EventsResponse1.cs` |
| `ListEventsError` | `src/OddsRelay/Errors/ListEventsError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error404` | `src/OddsRelay/Models/Error404.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

### ListRegions

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `ListRegions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Regions`
- **Error**: `ApiException<ListRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Regions` | `src/OddsRelay/Models/Regions.cs` |
| `ListRegionsError` | `src/OddsRelay/Errors/ListRegionsError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

### ListSports

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `ListSports(ListSportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`, `format` ← `Format`, `dateFormat` ← `DateFormat`, `cursor` ← `Cursor`
- **Returns**: `V2SportsResponse1`
- **Error**: `ApiException<ListSportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError404([NotNullWhen(true)] out Error404? value)` [404] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSportsRequest` | `src/OddsRelay/Requests/Discovery/ListSportsRequest.cs` |
| `Format` | `src/OddsRelay/Models/Enums/Format.cs` |
| `DateFormat` | `src/OddsRelay/Models/Enums/DateFormat.cs` |
| `V2SportsResponse1` | `src/OddsRelay/Models/AnyOf/V2SportsResponse1.cs` |
| `ListSportsError` | `src/OddsRelay/Errors/ListSportsError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error404` | `src/OddsRelay/Models/Error404.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

