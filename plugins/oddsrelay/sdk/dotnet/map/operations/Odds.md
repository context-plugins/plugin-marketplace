<!-- Generated file — do not edit; regenerated with the SDK. -->

# Odds — operations

Accessor: `client.Odds` · Source: `src/OddsRelay/Api/Odds.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMatchedBoard

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetMatchedBoard(GetMatchedBoardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `AcceptEncoding`
- **Query params (wire ← C#)**: `region` ← `Region`, `format` ← `Format`, `oddsFormat` ← `OddsFormat`, `dateFormat` ← `DateFormat`, `quote` ← `Quote`, `sports` ← `Sports`, `bookmakers` ← `Bookmakers`, `exchanges` ← `Exchanges`, `markets` ← `Markets`, `commenceTimeFrom` ← `CommenceTimeFrom`, `commenceTimeTo` ← `CommenceTimeTo`
- **Returns**: `V2OddsResponse`
- **Error**: `ApiException<GetMatchedBoardError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError402([NotNullWhen(true)] out Error402? value)` [402] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError404([NotNullWhen(true)] out Error404? value)` [404] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMatchedBoardRequest` | `src/OddsRelay/Requests/Odds/GetMatchedBoardRequest.cs` |
| `Type1` | `src/OddsRelay/Models/Enums/Type1.cs` |
| `Format` | `src/OddsRelay/Models/Enums/Format.cs` |
| `OddsFormat` | `src/OddsRelay/Models/Enums/OddsFormat.cs` |
| `DateFormat` | `src/OddsRelay/Models/Enums/DateFormat.cs` |
| `V2OddsResponse` | `src/OddsRelay/Models/AnyOf/V2OddsResponse.cs` |
| `GetMatchedBoardError` | `src/OddsRelay/Errors/GetMatchedBoardError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error402` | `src/OddsRelay/Models/Error402.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error404` | `src/OddsRelay/Models/Error404.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

### GetRawBoard

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetRawBoard(GetRawBoardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AcceptEncoding`
- **Query params (wire ← C#)**: `region` ← `Region`, `format` ← `Format`, `oddsFormat` ← `OddsFormat`, `dateFormat` ← `DateFormat`, `sports` ← `Sports`, `sport` ← `Sport`, `leagues` ← `Leagues`, `bookmakers` ← `Bookmakers`, `requireBookmakers` ← `RequireBookmakers`, `markets` ← `Markets`, `eventIds` ← `EventIds`, `commenceTimeFrom` ← `CommenceTimeFrom`, `commenceTimeTo` ← `CommenceTimeTo`, `updatedSince` ← `UpdatedSince`, `exchangesOnly` ← `ExchangesOnly`, `includeLinks` ← `IncludeLinks`, `includeLiquidity` ← `IncludeLiquidity`, `cursor` ← `Cursor`, `limit` ← `Limit`, `quote` ← `Quote`
- **Returns**: `V2OddsRawResponse`
- **Error**: `ApiException<GetRawBoardError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError402([NotNullWhen(true)] out Error402? value)` [402] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError404([NotNullWhen(true)] out Error404? value)` [404] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRawBoardRequest` | `src/OddsRelay/Requests/Odds/GetRawBoardRequest.cs` |
| `Format` | `src/OddsRelay/Models/Enums/Format.cs` |
| `OddsFormat` | `src/OddsRelay/Models/Enums/OddsFormat.cs` |
| `DateFormat` | `src/OddsRelay/Models/Enums/DateFormat.cs` |
| `ExchangesOnly` | `src/OddsRelay/Models/Enums/ExchangesOnly.cs` |
| `IncludeLinks` | `src/OddsRelay/Models/Enums/IncludeLinks.cs` |
| `IncludeLiquidity` | `src/OddsRelay/Models/Enums/IncludeLiquidity.cs` |
| `V2OddsRawResponse` | `src/OddsRelay/Models/AnyOf/V2OddsRawResponse.cs` |
| `GetRawBoardError` | `src/OddsRelay/Errors/GetRawBoardError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error402` | `src/OddsRelay/Models/Error402.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error404` | `src/OddsRelay/Models/Error404.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

### GetRawEvent

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetRawEvent(GetRawEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `region` ← `Region`, `oddsFormat` ← `OddsFormat`, `dateFormat` ← `DateFormat`, `includeLinks` ← `IncludeLinks`, `includeLiquidity` ← `IncludeLiquidity`, `quote` ← `Quote`
- **Returns**: `V2OddsEventResponse`
- **Error**: `ApiException<GetRawEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value)` [400] · `TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value)` [401] · `TryGetError402([NotNullWhen(true)] out Error402? value)` [402] · `TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value)` [403] · `TryGetError404([NotNullWhen(true)] out Error404? value)` [404] · `TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value)` [429] · `TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRawEventRequest` | `src/OddsRelay/Requests/Odds/GetRawEventRequest.cs` |
| `OddsFormat` | `src/OddsRelay/Models/Enums/OddsFormat.cs` |
| `DateFormat` | `src/OddsRelay/Models/Enums/DateFormat.cs` |
| `IncludeLinks` | `src/OddsRelay/Models/Enums/IncludeLinks.cs` |
| `IncludeLiquidity` | `src/OddsRelay/Models/Enums/IncludeLiquidity.cs` |
| `V2OddsEventResponse` | `src/OddsRelay/Models/AnyOf/V2OddsEventResponse.cs` |
| `GetRawEventError` | `src/OddsRelay/Errors/GetRawEventError.cs` |
| `Error400OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error400OddsRelayDiscoveryApi.cs` |
| `Error401OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error401OddsRelayDiscoveryApi.cs` |
| `Error402` | `src/OddsRelay/Models/Error402.cs` |
| `Error403OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error403OddsRelayDiscoveryApi.cs` |
| `Error404` | `src/OddsRelay/Models/Error404.cs` |
| `Error429OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error429OddsRelayDiscoveryApi.cs` |
| `Error500OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error500OddsRelayDiscoveryApi.cs` |
| `Error503OddsRelayDiscoveryApi` | `src/OddsRelay/Models/Error503OddsRelayDiscoveryApi.cs` |

