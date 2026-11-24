<!-- Generated file — do not edit; regenerated with the SDK. -->

# BitlinksApi — operations

Accessor: `client.BitlinksApi` · Source: `src/Bitly/Api/BitlinksApi.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBitlink(CreateBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ShortenBitlinkBody`
- **Error**: `ApiException<CreateBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 417, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/CreateBitlinkRequest.cs` |
| `Shorten` | `src/Bitly/Models/Shorten.cs` |
| `ShortenBitlinkBody` | `src/Bitly/Models/ShortenBitlinkBody.cs` |
| `CreateBitlinkError` | `src/Bitly/Errors/CreateBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### CreateFullBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateFullBitlink(CreateFullBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BitlinkBody`
- **Error**: `ApiException<CreateFullBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 417, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFullBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/CreateFullBitlinkRequest.cs` |
| `FullShorten` | `src/Bitly/Models/FullShorten.cs` |
| `BitlinkBody` | `src/Bitly/Models/BitlinkBody.cs` |
| `CreateFullBitlinkError` | `src/Bitly/Errors/CreateFullBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### DeleteBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteBitlink(DeleteBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Returns**: `LinkDeletionResponse`
- **Error**: `ApiException<DeleteBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/DeleteBitlinkRequest.cs` |
| `LinkDeletionResponse` | `src/Bitly/Models/LinkDeletionResponse.cs` |
| `DeleteBitlinkError` | `src/Bitly/Errors/DeleteBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### ExpandBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `ExpandBitlink(ExpandBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExpandedBitlink`
- **Error**: `ApiException<ExpandBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 410, 422, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExpandBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/ExpandBitlinkRequest.cs` |
| `ExpandBitlink` | `src/Bitly/Models/ExpandBitlink.cs` |
| `ExpandedBitlink` | `src/Bitly/Models/ExpandedBitlink.cs` |
| `ExpandBitlinkError` | `src/Bitly/Errors/ExpandBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBitlink(GetBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Returns**: `BitlinkBody`
- **Error**: `ApiException<GetBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/GetBitlinkRequest.cs` |
| `BitlinkBody` | `src/Bitly/Models/BitlinkBody.cs` |
| `GetBitlinkError` | `src/Bitly/Errors/GetBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetBitlinksByGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBitlinksByGroup(GetBitlinksByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `size` ← `Size`, `search_after` ← `SearchAfter`, `query` ← `Query`, `hostname_path_query` ← `HostnamePathQuery`, `created_before` ← `CreatedBefore`, `created_after` ← `CreatedAfter`, `archived` ← `Archived`, `deeplinks` ← `Deeplinks`, `domain_deeplinks` ← `DomainDeeplinks`, `campaign_guid` ← `CampaignGuid`, `channel_guid` ← `ChannelGuid`, `custom_bitlink` ← `CustomBitlink`, `has_qr_codes` ← `HasQrCodes`, `is_expired` ← `IsExpired`, `has_expiration` ← `HasExpiration`, `has_dynamic_routing` ← `HasDynamicRouting`, `tags` ← `Tags`, `launchpad_ids` ← `LaunchpadIds`, `encoding_login` ← `EncodingLogin`
- **Returns**: `Bitlinks`
- **Error**: `ApiException<GetBitlinksByGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBitlinksByGroupRequest` | `src/Bitly/Requests/BitlinksApi/GetBitlinksByGroupRequest.cs` |
| `Archived` | `src/Bitly/Models/Enums/Archived.cs` |
| `Deeplinks` | `src/Bitly/Models/Enums/Deeplinks.cs` |
| `DomainDeeplinks` | `src/Bitly/Models/Enums/DomainDeeplinks.cs` |
| `CustomBitlink` | `src/Bitly/Models/Enums/CustomBitlink.cs` |
| `HasQrCodes` | `src/Bitly/Models/Enums/HasQrCodes.cs` |
| `IsExpired` | `src/Bitly/Models/Enums/IsExpired.cs` |
| `HasExpiration` | `src/Bitly/Models/Enums/HasExpiration.cs` |
| `HasDynamicRouting` | `src/Bitly/Models/Enums/HasDynamicRouting.cs` |
| `Bitlinks` | `src/Bitly/Models/Bitlinks.cs` |
| `GetBitlinksByGroupError` | `src/Bitly/Errors/GetBitlinksByGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetClicksForBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `GetClicksForBitlink(GetClicksForBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `Clicks`
- **Error**: `ApiException<GetClicksForBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClicksForBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/GetClicksForBitlinkRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `Clicks` | `src/Bitly/Models/Clicks.cs` |
| `GetClicksForBitlinkError` | `src/Bitly/Errors/GetClicksForBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetClicksSummaryForBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `GetClicksSummaryForBitlink(GetClicksSummaryForBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `ClicksSummary`
- **Error**: `ApiException<GetClicksSummaryForBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClicksSummaryForBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/GetClicksSummaryForBitlinkRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClicksSummary` | `src/Bitly/Models/ClicksSummary.cs` |
| `GetClicksSummaryForBitlinkError` | `src/Bitly/Errors/GetClicksSummaryForBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetEngagements

- **Auth**: `options.BearerAuth`
- **Signature**: `GetEngagements(GetEngagementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `TotalEngagements`
- **Error**: `ApiException<GetEngagementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEngagementsRequest` | `src/Bitly/Requests/BitlinksApi/GetEngagementsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `TotalEngagements` | `src/Bitly/Models/TotalEngagements.cs` |
| `GetEngagementsError` | `src/Bitly/Errors/GetEngagementsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetEngagementsSummary

- **Auth**: `options.BearerAuth`
- **Signature**: `GetEngagementsSummary(GetEngagementsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `TotalEngagementsSummary`
- **Error**: `ApiException<GetEngagementsSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEngagementsSummaryRequest` | `src/Bitly/Requests/BitlinksApi/GetEngagementsSummaryRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `TotalEngagementsSummary` | `src/Bitly/Models/TotalEngagementsSummary.cs` |
| `GetEngagementsSummaryError` | `src/Bitly/Errors/GetEngagementsSummaryError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetMetricsForBitlinkByCities

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByCities(GetMetricsForBitlinkByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `CityMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByCitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByCitiesRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByCitiesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `CityMetrics` | `src/Bitly/Models/CityMetrics.cs` |
| `GetMetricsForBitlinkByCitiesError` | `src/Bitly/Errors/GetMetricsForBitlinkByCitiesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetMetricsForBitlinkByCountries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByCountries(GetMetricsForBitlinkByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByCountriesRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByCountriesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetrics` | `src/Bitly/Models/ClickMetrics.cs` |
| `GetMetricsForBitlinkByCountriesError` | `src/Bitly/Errors/GetMetricsForBitlinkByCountriesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetMetricsForBitlinkByDevices

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByDevices(GetMetricsForBitlinkByDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `DeviceMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByDevicesRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByDevicesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `DeviceMetrics` | `src/Bitly/Models/DeviceMetrics.cs` |
| `GetMetricsForBitlinkByDevicesError` | `src/Bitly/Errors/GetMetricsForBitlinkByDevicesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetMetricsForBitlinkByReferrerName

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByReferrerName(GetMetricsForBitlinkByReferrerNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByReferrerNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByReferrerNameRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrerNameRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetrics` | `src/Bitly/Models/ClickMetrics.cs` |
| `GetMetricsForBitlinkByReferrerNameError` | `src/Bitly/Errors/GetMetricsForBitlinkByReferrerNameError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetMetricsForBitlinkByReferrers

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByReferrers(GetMetricsForBitlinkByReferrersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByReferrersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByReferrersRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrersRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetrics` | `src/Bitly/Models/ClickMetrics.cs` |
| `GetMetricsForBitlinkByReferrersError` | `src/Bitly/Errors/GetMetricsForBitlinkByReferrersError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetMetricsForBitlinkByReferrersByDomains

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByReferrersByDomains(GetMetricsForBitlinkByReferrersByDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ReferrersByDomains`
- **Error**: `ApiException<GetMetricsForBitlinkByReferrersByDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByReferrersByDomainsRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrersByDomainsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ReferrersByDomains` | `src/Bitly/Models/ReferrersByDomains.cs` |
| `GetMetricsForBitlinkByReferrersByDomainsError` | `src/Bitly/Errors/GetMetricsForBitlinkByReferrersByDomainsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetMetricsForBitlinkByReferringDomains

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMetricsForBitlinkByReferringDomains(GetMetricsForBitlinkByReferringDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetrics`
- **Error**: `ApiException<GetMetricsForBitlinkByReferringDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMetricsForBitlinkByReferringDomainsRequest` | `src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferringDomainsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetrics` | `src/Bitly/Models/ClickMetrics.cs` |
| `GetMetricsForBitlinkByReferringDomainsError` | `src/Bitly/Errors/GetMetricsForBitlinkByReferringDomainsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetSortedBitlinks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSortedBitlinks(GetSortedBitlinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Sort`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`, `size` ← `Size`
- **Returns**: `SortedLinks`
- **Error**: `ApiException<GetSortedBitlinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSortedBitlinksRequest` | `src/Bitly/Requests/BitlinksApi/GetSortedBitlinksRequest.cs` |
| `Sort` | `src/Bitly/Models/Enums/Sort.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `SortedLinks` | `src/Bitly/Models/SortedLinks.cs` |
| `GetSortedBitlinksError` | `src/Bitly/Errors/GetSortedBitlinksError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetTopLinksAndQrCodesByEngagements

- **Auth**: `options.BearerAuth`
- **Signature**: `GetTopLinksAndQrCodesByEngagements(GetTopLinksAndQrCodesByEngagementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`, `size` ← `Size`
- **Returns**: `TopLinksAndQrCodes`
- **Error**: `ApiException<GetTopLinksAndQrCodesByEngagementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTopLinksAndQrCodesByEngagementsRequest` | `src/Bitly/Requests/BitlinksApi/GetTopLinksAndQrCodesByEngagementsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `TopLinksAndQrCodes` | `src/Bitly/Models/TopLinksAndQrCodes.cs` |
| `GetTopLinksAndQrCodesByEngagementsError` | `src/Bitly/Errors/GetTopLinksAndQrCodesByEngagementsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateBitlink(UpdateBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bitlink`, `Body`
- **Returns**: `BitlinkBody`
- **Error**: `ApiException<UpdateBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 409, 410, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBitlinkRequest` | `src/Bitly/Requests/BitlinksApi/UpdateBitlinkRequest.cs` |
| `BitlinkUpdateBody` | `src/Bitly/Models/BitlinkUpdateBody.cs` |
| `BitlinkBody` | `src/Bitly/Models/BitlinkBody.cs` |
| `UpdateBitlinkError` | `src/Bitly/Errors/UpdateBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateBitlinksByGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateBitlinksByGroup(UpdateBitlinksByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Body`
- **Returns**: `BulkUpdate`
- **Error**: `ApiException<UpdateBitlinksByGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 422, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBitlinksByGroupRequest` | `src/Bitly/Requests/BitlinksApi/UpdateBitlinksByGroupRequest.cs` |
| `BulkUpdateRequest` | `src/Bitly/Models/BulkUpdateRequest.cs` |
| `BulkUpdate` | `src/Bitly/Models/BulkUpdate.cs` |
| `UpdateBitlinksByGroupError` | `src/Bitly/Errors/UpdateBitlinksByGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

