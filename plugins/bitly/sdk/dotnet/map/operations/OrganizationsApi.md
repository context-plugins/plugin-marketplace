<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationsApi — operations

Accessor: `client.OrganizationsApi` · Source: `src/Bitly/Api/OrganizationsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOrganization

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationGuid`
- **Returns**: `Organization`
- **Error**: `ApiException<GetOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationRequest` | `src/Bitly/Requests/OrganizationsApi/GetOrganizationRequest.cs` |
| `Organization` | `src/Bitly/Models/Organization.cs` |
| `GetOrganizationError` | `src/Bitly/Errors/GetOrganizationError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetOrganizationShortenCounts

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganizationShortenCounts(GetOrganizationShortenCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationGuid`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `Metrics`
- **Error**: `ApiException<GetOrganizationShortenCountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationShortenCountsRequest` | `src/Bitly/Requests/OrganizationsApi/GetOrganizationShortenCountsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `Metrics` | `src/Bitly/Models/Metrics.cs` |
| `GetOrganizationShortenCountsError` | `src/Bitly/Errors/GetOrganizationShortenCountsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetOrganizationShortenCountsByGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganizationShortenCountsByGroup(GetOrganizationShortenCountsByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationGuid`
- **Returns**: `Metrics`
- **Error**: `ApiException<GetOrganizationShortenCountsByGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationShortenCountsByGroupRequest` | `src/Bitly/Requests/OrganizationsApi/GetOrganizationShortenCountsByGroupRequest.cs` |
| `Metrics` | `src/Bitly/Models/Metrics.cs` |
| `GetOrganizationShortenCountsByGroupError` | `src/Bitly/Errors/GetOrganizationShortenCountsByGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetOrganizations

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrganizations(GetOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `include_all` ← `IncludeAll`
- **Returns**: `Organizations`
- **Error**: `ApiException<GetOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationsRequest` | `src/Bitly/Requests/OrganizationsApi/GetOrganizationsRequest.cs` |
| `Organizations` | `src/Bitly/Models/Organizations.cs` |
| `GetOrganizationsError` | `src/Bitly/Errors/GetOrganizationsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetPlanLimits

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPlanLimits(GetPlanLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationGuid`
- **Returns**: `PlanLimits`
- **Error**: `ApiException<GetPlanLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlanLimitsRequest` | `src/Bitly/Requests/OrganizationsApi/GetPlanLimitsRequest.cs` |
| `PlanLimits` | `src/Bitly/Models/PlanLimits.cs` |
| `GetPlanLimitsError` | `src/Bitly/Errors/GetPlanLimitsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

