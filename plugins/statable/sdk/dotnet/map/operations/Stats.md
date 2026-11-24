<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stats — operations

Accessor: `client.Stats` · Source: `src/Statable/Api/Stats.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CurrentVisitors

- **Auth**: `options.BearerAuth`
- **Signature**: `CurrentVisitors(CurrentVisitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `site_id` ← `SiteId`
- **Returns**: `CurrentVisitorsResponse`
- **Error**: `ApiException<CurrentVisitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CurrentVisitorsRequest` | `src/Statable/Requests/Stats/CurrentVisitorsRequest.cs` |
| `CurrentVisitorsResponse` | `src/Statable/Models/CurrentVisitorsResponse.cs` |
| `CurrentVisitorsError` | `src/Statable/Errors/CurrentVisitorsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetSubscription

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSubscription(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<GetSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubscriptionResponse` | `src/Statable/Models/SubscriptionResponse.cs` |
| `GetSubscriptionError` | `src/Statable/Errors/GetSubscriptionError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListFunnels

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFunnels(ListFunnelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `site_id` ← `SiteId`
- **Returns**: `FunnelsResponse`
- **Error**: `ApiException<ListFunnelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFunnelsRequest` | `src/Statable/Requests/Stats/ListFunnelsRequest.cs` |
| `FunnelsResponse` | `src/Statable/Models/FunnelsResponse.cs` |
| `ListFunnelsError` | `src/Statable/Errors/ListFunnelsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListPropKeys

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPropKeys(ListPropKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `site_id` ← `SiteId`, `date_range` ← `DateRange`
- **Returns**: `PropsResponse`
- **Error**: `ApiException<ListPropKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPropKeysRequest` | `src/Statable/Requests/Stats/ListPropKeysRequest.cs` |
| `PropsResponse` | `src/Statable/Models/PropsResponse.cs` |
| `ListPropKeysError` | `src/Statable/Errors/ListPropKeysError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListSites

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSites(ListSitesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date_range` ← `DateRange`
- **Returns**: `SitesResponse`
- **Error**: `ApiException<ListSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSitesRequest` | `src/Statable/Requests/Stats/ListSitesRequest.cs` |
| `SitesResponse` | `src/Statable/Models/SitesResponse.cs` |
| `ListSitesError` | `src/Statable/Errors/ListSitesError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### Query

- **Auth**: `options.BearerAuth`
- **Signature**: `Query(QueryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QueryResponse`
- **Error**: `ApiException<QueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryOperationRequest` | `src/Statable/Requests/Stats/QueryOperationRequest.cs` |
| `QueryRequest` | `src/Statable/Models/QueryRequest.cs` |
| `QueryResponse` | `src/Statable/Models/QueryResponse.cs` |
| `QueryError` | `src/Statable/Errors/QueryError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### RunFunnelReport

- **Auth**: `options.BearerAuth`
- **Signature**: `RunFunnelReport(RunFunnelReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `FunnelReportResponse`
- **Error**: `ApiException<RunFunnelReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunFunnelReportRequest` | `src/Statable/Requests/Stats/RunFunnelReportRequest.cs` |
| `FunnelReportRequest` | `src/Statable/Models/FunnelReportRequest.cs` |
| `FunnelReportResponse` | `src/Statable/Models/FunnelReportResponse.cs` |
| `RunFunnelReportError` | `src/Statable/Errors/RunFunnelReportError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

