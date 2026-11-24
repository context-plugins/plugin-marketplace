<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsApi — operations

Accessor: `client.GroupsApi` · Source: `src/Bitly/Api/GroupsApi.cs` · 28 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Returns**: `Group`
- **Error**: `ApiException<GetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupRequest` | `src/Bitly/Requests/GroupsApi/GetGroupRequest.cs` |
| `Group` | `src/Bitly/Models/Group.cs` |
| `GetGroupError` | `src/Bitly/Errors/GetGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupClicks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupClicks(GetGroupClicksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `GroupClicks`
- **Error**: `ApiException<GetGroupClicksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupClicksRequest` | `src/Bitly/Requests/GroupsApi/GetGroupClicksRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupClicks` | `src/Bitly/Models/GroupClicks.cs` |
| `GetGroupClicksError` | `src/Bitly/Errors/GetGroupClicksError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupCodeScansByCity

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupCodeScansByCity(GetGroupCodeScansByCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `ApiException<GetGroupCodeScansByCityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupCodeScansByCityRequest` | `src/Bitly/Requests/GroupsApi/GetGroupCodeScansByCityRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `CityMetricsBitlyGroupsApi` | `src/Bitly/Models/CityMetricsBitlyGroupsApi.cs` |
| `GetGroupCodeScansByCityError` | `src/Bitly/Errors/GetGroupCodeScansByCityError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupCodeScansByCountry

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupCodeScansByCountry(GetGroupCodeScansByCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupCodeScansByCountryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupCodeScansByCountryRequest` | `src/Bitly/Requests/GroupsApi/GetGroupCodeScansByCountryRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupCodeScansByCountryError` | `src/Bitly/Errors/GetGroupCodeScansByCountryError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupCodeScansOverTime

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupCodeScansOverTime(GetGroupCodeScansOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `GroupClicks`
- **Error**: `ApiException<GetGroupCodeScansOverTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupCodeScansOverTimeRequest` | `src/Bitly/Requests/GroupsApi/GetGroupCodeScansOverTimeRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupClicks` | `src/Bitly/Models/GroupClicks.cs` |
| `GetGroupCodeScansOverTimeError` | `src/Bitly/Errors/GetGroupCodeScansOverTimeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupFeatureUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupFeatureUsage(GetGroupFeatureUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `GroupFeatureUsage`
- **Error**: `ApiException<GetGroupFeatureUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupFeatureUsageRequest` | `src/Bitly/Requests/GroupsApi/GetGroupFeatureUsageRequest.cs` |
| `GroupFeatureUsage` | `src/Bitly/Models/GroupFeatureUsage.cs` |
| `GetGroupFeatureUsageError` | `src/Bitly/Errors/GetGroupFeatureUsageError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupHistoricalUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupHistoricalUsage(GetGroupHistoricalUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `name` ← `Name`, `start_date` ← `StartDate`, `end_date` ← `EndDate`, `unit` ← `Unit`
- **Returns**: `GroupHistoricalUsage`
- **Error**: `ApiException<GetGroupHistoricalUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupHistoricalUsageRequest` | `src/Bitly/Requests/GroupsApi/GetGroupHistoricalUsageRequest.cs` |
| `TimeUnitDwm` | `src/Bitly/Models/Enums/TimeUnitDwm.cs` |
| `GroupHistoricalUsage` | `src/Bitly/Models/GroupHistoricalUsage.cs` |
| `GetGroupHistoricalUsageError` | `src/Bitly/Errors/GetGroupHistoricalUsageError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupLinkClicksByCity

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLinkClicksByCity(GetGroupLinkClicksByCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `ApiException<GetGroupLinkClicksByCityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLinkClicksByCityRequest` | `src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByCityRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `CityMetricsBitlyGroupsApi` | `src/Bitly/Models/CityMetricsBitlyGroupsApi.cs` |
| `GetGroupLinkClicksByCityError` | `src/Bitly/Errors/GetGroupLinkClicksByCityError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupLinkClicksByCountry

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLinkClicksByCountry(GetGroupLinkClicksByCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupLinkClicksByCountryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLinkClicksByCountryRequest` | `src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByCountryRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupLinkClicksByCountryError` | `src/Bitly/Errors/GetGroupLinkClicksByCountryError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupLinkClicksByDevice

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLinkClicksByDevice(GetGroupLinkClicksByDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `GroupsLinksClicksDevicesResponse`
- **Error**: `ApiException<GetGroupLinkClicksByDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLinkClicksByDeviceRequest` | `src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByDeviceRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupsLinksClicksDevicesResponse` | `src/Bitly/Models/GroupsLinksClicksDevicesResponse.cs` |
| `GetGroupLinkClicksByDeviceError` | `src/Bitly/Errors/GetGroupLinkClicksByDeviceError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupLinkClicksByReferrer

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLinkClicksByReferrer(GetGroupLinkClicksByReferrerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupLinkClicksByReferrerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLinkClicksByReferrerRequest` | `src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByReferrerRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupLinkClicksByReferrerError` | `src/Bitly/Errors/GetGroupLinkClicksByReferrerError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupLinkClicksOverTime

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLinkClicksOverTime(GetGroupLinkClicksOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `GroupClicks`
- **Error**: `ApiException<GetGroupLinkClicksOverTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLinkClicksOverTimeRequest` | `src/Bitly/Requests/GroupsApi/GetGroupLinkClicksOverTimeRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupClicks` | `src/Bitly/Models/GroupClicks.cs` |
| `GetGroupLinkClicksOverTimeError` | `src/Bitly/Errors/GetGroupLinkClicksOverTimeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupMetricsByCities

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsByCities(GetGroupMetricsByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `ApiException<GetGroupMetricsByCitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsByCitiesRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsByCitiesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `CityMetricsBitlyGroupsApi` | `src/Bitly/Models/CityMetricsBitlyGroupsApi.cs` |
| `GetGroupMetricsByCitiesError` | `src/Bitly/Errors/GetGroupMetricsByCitiesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupMetricsByCountries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsByCountries(GetGroupMetricsByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupMetricsByCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsByCountriesRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsByCountriesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupMetricsByCountriesError` | `src/Bitly/Errors/GetGroupMetricsByCountriesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupMetricsByDevices

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsByDevices(GetGroupMetricsByDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `DeviceMetricsBitlyGroupsApi`
- **Error**: `ApiException<GetGroupMetricsByDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsByDevicesRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsByDevicesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `DeviceMetricsBitlyGroupsApi` | `src/Bitly/Models/DeviceMetricsBitlyGroupsApi.cs` |
| `GetGroupMetricsByDevicesError` | `src/Bitly/Errors/GetGroupMetricsByDevicesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupMetricsByReferrer

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsByReferrer(GetGroupMetricsByReferrerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupMetricsByReferrerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsByReferrerRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsByReferrerRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupMetricsByReferrerError` | `src/Bitly/Errors/GetGroupMetricsByReferrerError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupMetricsByReferringNetworks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsByReferringNetworks(GetGroupMetricsByReferringNetworksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetGroupMetricsByReferringNetworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsByReferringNetworksRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsByReferringNetworksRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetGroupMetricsByReferringNetworksError` | `src/Bitly/Errors/GetGroupMetricsByReferringNetworksError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupMetricsOverTime

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupMetricsOverTime(GetGroupMetricsOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `GroupClicks`
- **Error**: `ApiException<GetGroupMetricsOverTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupMetricsOverTimeRequest` | `src/Bitly/Requests/GroupsApi/GetGroupMetricsOverTimeRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupClicks` | `src/Bitly/Models/GroupClicks.cs` |
| `GetGroupMetricsOverTimeError` | `src/Bitly/Errors/GetGroupMetricsOverTimeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupPreferences

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupPreferences(GetGroupPreferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Returns**: `GroupPreferences`
- **Error**: `ApiException<GetGroupPreferencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupPreferencesRequest` | `src/Bitly/Requests/GroupsApi/GetGroupPreferencesRequest.cs` |
| `GroupPreferences` | `src/Bitly/Models/GroupPreferences.cs` |
| `GetGroupPreferencesError` | `src/Bitly/Errors/GetGroupPreferencesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupShortenCounts

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupShortenCounts(GetGroupShortenCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `Metrics`
- **Error**: `ApiException<GetGroupShortenCountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupShortenCountsRequest` | `src/Bitly/Requests/GroupsApi/GetGroupShortenCountsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `Metrics` | `src/Bitly/Models/Metrics.cs` |
| `GetGroupShortenCountsError` | `src/Bitly/Errors/GetGroupShortenCountsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupTags

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupTags(GetGroupTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `type` ← `Type`
- **Returns**: `Tags`
- **Error**: `ApiException<GetGroupTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupTagsRequest` | `src/Bitly/Requests/GroupsApi/GetGroupTagsRequest.cs` |
| `TypeEnum` | `src/Bitly/Models/Enums/TypeEnum.cs` |
| `Tags` | `src/Bitly/Models/Tags.cs` |
| `GetGroupTagsError` | `src/Bitly/Errors/GetGroupTagsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetGroupTopCodeScans

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupTopCodeScans(GetGroupTopCodeScansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`, `decoupled` ← `Decoupled`
- **Returns**: `GroupsCodesScansTopResponse`
- **Error**: `ApiException<GetGroupTopCodeScansError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupTopCodeScansRequest` | `src/Bitly/Requests/GroupsApi/GetGroupTopCodeScansRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `GroupsCodesScansTopResponse` | `src/Bitly/Models/AnyOf/GroupsCodesScansTopResponse.cs` |
| `GetGroupTopCodeScansError` | `src/Bitly/Errors/GetGroupTopCodeScansError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupTopLinkClicks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupTopLinkClicks(GetGroupTopLinkClicksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `SortedLinks`
- **Error**: `ApiException<GetGroupTopLinkClicksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupTopLinkClicksRequest` | `src/Bitly/Requests/GroupsApi/GetGroupTopLinkClicksRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `SortedLinks` | `src/Bitly/Models/SortedLinks.cs` |
| `GetGroupTopLinkClicksError` | `src/Bitly/Errors/GetGroupTopLinkClicksError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroupTopMetrics

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupTopMetrics(GetGroupTopMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `SortedLinks`
- **Error**: `ApiException<GetGroupTopMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupTopMetricsRequest` | `src/Bitly/Requests/GroupsApi/GetGroupTopMetricsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `SortedLinks` | `src/Bitly/Models/SortedLinks.cs` |
| `GetGroupTopMetricsError` | `src/Bitly/Errors/GetGroupTopMetricsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetGroups

- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroups(GetGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `organization_guid` ← `OrganizationGuid`
- **Returns**: `Groups`
- **Error**: `ApiException<GetGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupsRequest` | `src/Bitly/Requests/GroupsApi/GetGroupsRequest.cs` |
| `Groups` | `src/Bitly/Models/Groups.cs` |
| `GetGroupsError` | `src/Bitly/Errors/GetGroupsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### PostCreateGroupExport

- **Auth**: `options.BearerAuth`
- **Signature**: `PostCreateGroupExport(PostCreateGroupExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Body`
- **Returns**: `GroupExportResponse`
- **Error**: `ApiException<PostCreateGroupExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 422, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCreateGroupExportRequest` | `src/Bitly/Requests/GroupsApi/PostCreateGroupExportRequest.cs` |
| `GroupExportRequestBody` | `src/Bitly/Models/GroupExportRequestBody.cs` |
| `GroupExportResponse` | `src/Bitly/Models/GroupExportResponse.cs` |
| `PostCreateGroupExportError` | `src/Bitly/Errors/PostCreateGroupExportError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### UpdateGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateGroup(UpdateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Body`
- **Returns**: `Group`
- **Error**: `ApiException<UpdateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 422, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGroupRequest` | `src/Bitly/Requests/GroupsApi/UpdateGroupRequest.cs` |
| `GroupUpdate` | `src/Bitly/Models/GroupUpdate.cs` |
| `Group` | `src/Bitly/Models/Group.cs` |
| `UpdateGroupError` | `src/Bitly/Errors/UpdateGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### UpdateGroupPreferences

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateGroupPreferences(UpdateGroupPreferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Body`
- **Returns**: `GroupPreferences`
- **Error**: `ApiException<UpdateGroupPreferencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGroupPreferencesRequest` | `src/Bitly/Requests/GroupsApi/UpdateGroupPreferencesRequest.cs` |
| `GroupPreferences` | `src/Bitly/Models/GroupPreferences.cs` |
| `UpdateGroupPreferencesError` | `src/Bitly/Errors/UpdateGroupPreferencesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

