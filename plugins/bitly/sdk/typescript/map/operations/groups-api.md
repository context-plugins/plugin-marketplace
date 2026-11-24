<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsApi — operations

Accessor: `client.groupsApi` · Source: `src/resources/groups-api.ts` · 28 operations · Request and error types: namespace `GroupsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGroupMetricsByReferrer

- **Signature**: `getGroupMetricsByReferrer(request: GroupsApi.GetGroupMetricsByReferrerRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferrerError>`
- **Wire**: `GET /groups/{group_guid}/referrers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsByReferrerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsByReferrerRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupMetricsByReferringNetworks

- **Signature**: `getGroupMetricsByReferringNetworks(request: GroupsApi.GetGroupMetricsByReferringNetworksRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferringNetworksError>`
- **Wire**: `GET /groups/{group_guid}/referring_networks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsByReferringNetworksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsByReferringNetworksRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroup

- **Signature**: `getGroup(request: GroupsApi.GetGroupRequest, options?: RequestOptions): ApiPromise<Group, GroupsApi.GetGroupError>`
- **Wire**: `GET /groups/{group_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupClicks

- **Signature**: `getGroupClicks(request: GroupsApi.GetGroupClicksRequest, options?: RequestOptions): ApiPromise<GroupClicks, GroupsApi.GetGroupClicksError>`
- **Wire**: `GET /groups/{group_guid}/clicks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupClicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupClicksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupClicksRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupClicks` | `groupClicksSchema` | `src/models/group-clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupCodeScansByCity

- **Signature**: `getGroupCodeScansByCity(request: GroupsApi.GetGroupCodeScansByCityRequest, options?: RequestOptions): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupCodeScansByCityError>`
- **Wire**: `GET /groups/{group_guid}/codes/scans/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupCodeScansByCityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupCodeScansByCityRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `CityMetricsBitlyGroupsApi` | `cityMetricsBitlyGroupsApiSchema` | `src/models/city-metrics-bitly-groups-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupCodeScansByCountry

- **Signature**: `getGroupCodeScansByCountry(request: GroupsApi.GetGroupCodeScansByCountryRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupCodeScansByCountryError>`
- **Wire**: `GET /groups/{group_guid}/codes/scans/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupCodeScansByCountryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupCodeScansByCountryRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupCodeScansOverTime

- **Signature**: `getGroupCodeScansOverTime(request: GroupsApi.GetGroupCodeScansOverTimeRequest, options?: RequestOptions): ApiPromise<GroupClicks, GroupsApi.GetGroupCodeScansOverTimeError>`
- **Wire**: `GET /groups/{group_guid}/codes/scans/over_time`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupClicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupCodeScansOverTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupCodeScansOverTimeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupClicks` | `groupClicksSchema` | `src/models/group-clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupFeatureUsage

- **Signature**: `getGroupFeatureUsage(request: GroupsApi.GetGroupFeatureUsageRequest, options?: RequestOptions): ApiPromise<GroupFeatureUsage, GroupsApi.GetGroupFeatureUsageError>`
- **Wire**: `GET /groups/{group_guid}/feature_usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupFeatureUsage`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupFeatureUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupFeatureUsageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `name` | `query` | — | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupFeatureUsage` | `groupFeatureUsageSchema` | `src/models/group-feature-usage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupHistoricalUsage

- **Signature**: `getGroupHistoricalUsage(request: GroupsApi.GetGroupHistoricalUsageRequest, options?: RequestOptions): ApiPromise<GroupHistoricalUsage, GroupsApi.GetGroupHistoricalUsageError>`
- **Wire**: `GET /groups/{group_guid}/historical_usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupHistoricalUsage`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupHistoricalUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupHistoricalUsageRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `name` | `query` | — | `string[]` | no | — |
| `startDate` | `query` | `start_date` | `string` | no | — |
| `endDate` | `query` | `end_date` | `string` | no | — |
| `unit` | `query` | — | `TimeUnitDwm` | no | `TimeUnitDwm.Month` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnitDwm` | `timeUnitDwmSchema` | `src/models/time-unit-dwm.ts` |
| `GroupHistoricalUsage` | `groupHistoricalUsageSchema` | `src/models/group-historical-usage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupLinkClicksByCity

- **Signature**: `getGroupLinkClicksByCity(request: GroupsApi.GetGroupLinkClicksByCityRequest, options?: RequestOptions): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupLinkClicksByCityError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupLinkClicksByCityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupLinkClicksByCityRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `CityMetricsBitlyGroupsApi` | `cityMetricsBitlyGroupsApiSchema` | `src/models/city-metrics-bitly-groups-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupLinkClicksByCountry

- **Signature**: `getGroupLinkClicksByCountry(request: GroupsApi.GetGroupLinkClicksByCountryRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByCountryError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupLinkClicksByCountryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupLinkClicksByCountryRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupLinkClicksByDevice

- **Signature**: `getGroupLinkClicksByDevice(request: GroupsApi.GetGroupLinkClicksByDeviceRequest, options?: RequestOptions): ApiPromise<GroupsLinksClicksDevicesResponse, GroupsApi.GetGroupLinkClicksByDeviceError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/devices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsLinksClicksDevicesResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupLinkClicksByDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupLinkClicksByDeviceRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupsLinksClicksDevicesResponse` | `groupsLinksClicksDevicesResponseSchema` | `src/models/groups-links-clicks-devices-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupLinkClicksByReferrer

- **Signature**: `getGroupLinkClicksByReferrer(request: GroupsApi.GetGroupLinkClicksByReferrerRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByReferrerError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/referrers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupLinkClicksByReferrerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupLinkClicksByReferrerRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupLinkClicksOverTime

- **Signature**: `getGroupLinkClicksOverTime(request: GroupsApi.GetGroupLinkClicksOverTimeRequest, options?: RequestOptions): ApiPromise<GroupClicks, GroupsApi.GetGroupLinkClicksOverTimeError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/over_time`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupClicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupLinkClicksOverTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupLinkClicksOverTimeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupClicks` | `groupClicksSchema` | `src/models/group-clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupMetricsByCities

- **Signature**: `getGroupMetricsByCities(request: GroupsApi.GetGroupMetricsByCitiesRequest, options?: RequestOptions): ApiPromise<CityMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByCitiesError>`
- **Wire**: `GET /groups/{group_guid}/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CityMetricsBitlyGroupsApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsByCitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsByCitiesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `CityMetricsBitlyGroupsApi` | `cityMetricsBitlyGroupsApiSchema` | `src/models/city-metrics-bitly-groups-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupMetricsByCountries

- **Signature**: `getGroupMetricsByCountries(request: GroupsApi.GetGroupMetricsByCountriesRequest, options?: RequestOptions): ApiPromise<ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByCountriesError>`
- **Wire**: `GET /groups/{group_guid}/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsByCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsByCountriesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `ClickMetricsBitlyCustomBitlinksApi` | `clickMetricsBitlyCustomBitlinksApiSchema` | `src/models/click-metrics-bitly-custom-bitlinks-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupMetricsByDevices

- **Signature**: `getGroupMetricsByDevices(request: GroupsApi.GetGroupMetricsByDevicesRequest, options?: RequestOptions): ApiPromise<DeviceMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByDevicesError>`
- **Wire**: `GET /groups/{group_guid}/devices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceMetricsBitlyGroupsApi`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsByDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsByDevicesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `DeviceMetricsBitlyGroupsApi` | `deviceMetricsBitlyGroupsApiSchema` | `src/models/device-metrics-bitly-groups-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupMetricsOverTime

- **Signature**: `getGroupMetricsOverTime(request: GroupsApi.GetGroupMetricsOverTimeRequest, options?: RequestOptions): ApiPromise<GroupClicks, GroupsApi.GetGroupMetricsOverTimeError>`
- **Wire**: `GET /groups/{group_guid}/engagements/over_time`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupClicks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupMetricsOverTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupMetricsOverTimeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupClicks` | `groupClicksSchema` | `src/models/group-clicks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupPreferences

- **Signature**: `getGroupPreferences(request: GroupsApi.GetGroupPreferencesRequest, options?: RequestOptions): ApiPromise<GroupPreferences, GroupsApi.GetGroupPreferencesError>`
- **Wire**: `GET /groups/{group_guid}/preferences`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupPreferences`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupPreferencesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupPreferencesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupPreferences` | `groupPreferencesSchema` | `src/models/group-preferences.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupShortenCounts

- **Signature**: `getGroupShortenCounts(request: GroupsApi.GetGroupShortenCountsRequest, options?: RequestOptions): ApiPromise<Metrics, GroupsApi.GetGroupShortenCountsError>`
- **Wire**: `GET /groups/{group_guid}/shorten_counts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Metrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupShortenCountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupShortenCountsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `Metrics` | `metricsSchema` | `src/models/metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupTags

- **Signature**: `getGroupTags(request: GroupsApi.GetGroupTagsRequest, options?: RequestOptions): ApiPromise<Tags, GroupsApi.GetGroupTagsError>`
- **Wire**: `GET /groups/{group_guid}/tags`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tags`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupTagsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `type` | `query` | — | `Type` | no | `Type.Bitlink` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `Tags` | `tagsSchema` | `src/models/tags.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getGroupTopCodeScans

- **Signature**: `getGroupTopCodeScans(request: GroupsApi.GetGroupTopCodeScansRequest, options?: RequestOptions): ApiPromise<GroupsCodesScansTopResponse, GroupsApi.GetGroupTopCodeScansError>`
- **Wire**: `GET /groups/{group_guid}/codes/scans/top`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsCodesScansTopResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupTopCodeScansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupTopCodeScansRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |
| `decoupled` | `query` | — | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `GroupsCodesScansTopResponse` | `groupsCodesScansTopResponseSchema` | `src/models/unions/groups-codes-scans-top-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupTopLinkClicks

- **Signature**: `getGroupTopLinkClicks(request: GroupsApi.GetGroupTopLinkClicksRequest, options?: RequestOptions): ApiPromise<SortedLinks, GroupsApi.GetGroupTopLinkClicksError>`
- **Wire**: `GET /groups/{group_guid}/links/clicks/top`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SortedLinks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupTopLinkClicksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupTopLinkClicksRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `SortedLinks` | `sortedLinksSchema` | `src/models/sorted-links.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroupTopMetrics

- **Signature**: `getGroupTopMetrics(request: GroupsApi.GetGroupTopMetricsRequest, options?: RequestOptions): ApiPromise<SortedLinks, GroupsApi.GetGroupTopMetricsError>`
- **Wire**: `GET /groups/{group_guid}/engagements/top`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SortedLinks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupTopMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupTopMetricsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `size` | `query` | — | `number` | no | `50` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `SortedLinks` | `sortedLinksSchema` | `src/models/sorted-links.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getGroups

- **Signature**: `getGroups(request?: GroupsApi.GetGroupsRequest, options?: RequestOptions): ApiPromise<Groups, GroupsApi.GetGroupsError>`
- **Wire**: `GET /groups`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Groups`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.GetGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.GetGroupsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationGuid` | `query` | `organization_guid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Groups` | `groupsSchema` | `src/models/groups.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### postCreateGroupExport

- **Signature**: `postCreateGroupExport(request: GroupsApi.PostCreateGroupExportRequest, options?: RequestOptions): ApiPromise<GroupExportResponse, GroupsApi.PostCreateGroupExportError>`
- **Wire**: `POST /groups/{group_guid}/exports`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupExportResponse`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.PostCreateGroupExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [422] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.PostCreateGroupExportRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `body` | `body` | — | `GroupExportRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupExportRequestBody` | `groupExportRequestBodySchema` | `src/models/group-export-request-body.ts` |
| `GroupExportResponse` | `groupExportResponseSchema` | `src/models/group-export-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateGroup

- **Signature**: `updateGroup(request: GroupsApi.UpdateGroupRequest, options?: RequestOptions): ApiPromise<Group, GroupsApi.UpdateGroupError>`
- **Wire**: `PATCH /groups/{group_guid}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.UpdateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.UpdateGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `body` | `body` | — | `GroupUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupUpdate` | `groupUpdateSchema` | `src/models/group-update.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateGroupPreferences

- **Signature**: `updateGroupPreferences(request: GroupsApi.UpdateGroupPreferencesRequest, options?: RequestOptions): ApiPromise<GroupPreferences, GroupsApi.UpdateGroupPreferencesError>`
- **Wire**: `PATCH /groups/{group_guid}/preferences`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupPreferences`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `GroupsApi.UpdateGroupPreferencesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GroupsApi.UpdateGroupPreferencesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `path` | `group_guid` | `string` | yes |
| `body` | `body` | — | `GroupPreferences` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupPreferences` | `groupPreferencesSchema` | `src/models/group-preferences.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

