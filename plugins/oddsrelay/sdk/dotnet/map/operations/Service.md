<!-- Generated file — do not edit; regenerated with the SDK. -->

# Service — operations

Accessor: `client.Service` · Source: `src/OddsRelay/Api/Service.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCoverage

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader` OR anonymous
- **Signature**: `GetCoverage(GetCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`
- **Returns**: `V2CoverageResponse`
- **Error**: `ApiException<GetCoverageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value)` [400] · `TryGetError401OddsRelayServiceApi([NotNullWhen(true)] out Error401OddsRelayServiceApi? value)` [401] · `TryGetError403OddsRelayServiceApi([NotNullWhen(true)] out Error403OddsRelayServiceApi? value)` [403] · `TryGetError404OddsRelayServiceApi([NotNullWhen(true)] out Error404OddsRelayServiceApi? value)` [404] · `TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value)` [429] · `TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayServiceApi([NotNullWhen(true)] out Error503OddsRelayServiceApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCoverageRequest` | `src/OddsRelay/Requests/Service/GetCoverageRequest.cs` |
| `V2CoverageResponse` | `src/OddsRelay/Models/AnyOf/V2CoverageResponse.cs` |
| `GetCoverageError` | `src/OddsRelay/Errors/GetCoverageError.cs` |
| `Error400OddsRelayServiceApi` | `src/OddsRelay/Models/Error400OddsRelayServiceApi.cs` |
| `Error401OddsRelayServiceApi` | `src/OddsRelay/Models/Error401OddsRelayServiceApi.cs` |
| `Error403OddsRelayServiceApi` | `src/OddsRelay/Models/Error403OddsRelayServiceApi.cs` |
| `Error404OddsRelayServiceApi` | `src/OddsRelay/Models/Error404OddsRelayServiceApi.cs` |
| `Error429OddsRelayServiceApi` | `src/OddsRelay/Models/Error429OddsRelayServiceApi.cs` |
| `Error500OddsRelayServiceApi` | `src/OddsRelay/Models/Error500OddsRelayServiceApi.cs` |
| `Error503OddsRelayServiceApi` | `src/OddsRelay/Models/Error503OddsRelayServiceApi.cs` |

### GetHealth

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Health`
- **Error**: `ApiException<GetHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value)` [400] · `TryGetError401OddsRelayServiceApi([NotNullWhen(true)] out Error401OddsRelayServiceApi? value)` [401] · `TryGetError403OddsRelayServiceApi([NotNullWhen(true)] out Error403OddsRelayServiceApi? value)` [403] · `TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value)` [429] · `TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayServiceApi([NotNullWhen(true)] out Error503OddsRelayServiceApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Health` | `src/OddsRelay/Models/Health.cs` |
| `GetHealthError` | `src/OddsRelay/Errors/GetHealthError.cs` |
| `Error400OddsRelayServiceApi` | `src/OddsRelay/Models/Error400OddsRelayServiceApi.cs` |
| `Error401OddsRelayServiceApi` | `src/OddsRelay/Models/Error401OddsRelayServiceApi.cs` |
| `Error403OddsRelayServiceApi` | `src/OddsRelay/Models/Error403OddsRelayServiceApi.cs` |
| `Error429OddsRelayServiceApi` | `src/OddsRelay/Models/Error429OddsRelayServiceApi.cs` |
| `Error500OddsRelayServiceApi` | `src/OddsRelay/Models/Error500OddsRelayServiceApi.cs` |
| `Error503OddsRelayServiceApi` | `src/OddsRelay/Models/Error503OddsRelayServiceApi.cs` |

### GetLiveness

- **Signature**: `GetLiveness(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `string`
- **Error**: `ApiException<GetLivenessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetString([NotNullWhen(true)] out string? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLivenessError` | `src/OddsRelay/Errors/GetLivenessError.cs` |

### GetOpenApi

- **Signature**: `GetOpenApi(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<GetOpenApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value)` [400] · `TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value)` [429] · `TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOpenApiError` | `src/OddsRelay/Errors/GetOpenApiError.cs` |
| `Error400OddsRelayServiceApi` | `src/OddsRelay/Models/Error400OddsRelayServiceApi.cs` |
| `Error429OddsRelayServiceApi` | `src/OddsRelay/Models/Error429OddsRelayServiceApi.cs` |
| `Error500OddsRelayServiceApi` | `src/OddsRelay/Models/Error500OddsRelayServiceApi.cs` |

### GetStatus

- **Signature**: `GetStatus(GetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`
- **Returns**: `StatusOddsRelayServiceApi`
- **Error**: `ApiException<GetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value)` [400] · `TryGetError404OddsRelayServiceApi([NotNullWhen(true)] out Error404OddsRelayServiceApi? value)` [404] · `TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value)` [429] · `TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503OddsRelayServiceApi([NotNullWhen(true)] out Error503OddsRelayServiceApi? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatusRequest` | `src/OddsRelay/Requests/Service/GetStatusRequest.cs` |
| `StatusOddsRelayServiceApi` | `src/OddsRelay/Models/StatusOddsRelayServiceApi.cs` |
| `GetStatusError` | `src/OddsRelay/Errors/GetStatusError.cs` |
| `Error400OddsRelayServiceApi` | `src/OddsRelay/Models/Error400OddsRelayServiceApi.cs` |
| `Error404OddsRelayServiceApi` | `src/OddsRelay/Models/Error404OddsRelayServiceApi.cs` |
| `Error429OddsRelayServiceApi` | `src/OddsRelay/Models/Error429OddsRelayServiceApi.cs` |
| `Error500OddsRelayServiceApi` | `src/OddsRelay/Models/Error500OddsRelayServiceApi.cs` |
| `Error503OddsRelayServiceApi` | `src/OddsRelay/Models/Error503OddsRelayServiceApi.cs` |

