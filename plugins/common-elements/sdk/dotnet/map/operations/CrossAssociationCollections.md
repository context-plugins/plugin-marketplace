<!-- Generated file — do not edit; regenerated with the SDK. -->

# CrossAssociationCollections — operations

Accessor: `client.CrossAssociationCollections` · Source: `src/CommonElements/Api/CrossAssociationCollections.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ResourceCollectionComplaints

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceCollectionComplaints(ResourceCollectionComplaintsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`, `state` ← `State`, `county_fips` ← `CountyFips`, `jurisdiction` ← `Jurisdiction`
- **Returns**: `ApiV1ComplaintsResponse`
- **Error**: `ApiException<ResourceCollectionComplaintsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceCollectionComplaintsRequest` | `src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionComplaintsRequest.cs` |
| `ApiV1ComplaintsResponse` | `src/CommonElements/Models/ApiV1ComplaintsResponse.cs` |
| `ResourceCollectionComplaintsError` | `src/CommonElements/Errors/ResourceCollectionComplaintsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceCollectionInsuranceCarriers

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceCollectionInsuranceCarriers(ResourceCollectionInsuranceCarriersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`, `state` ← `State`, `county_fips` ← `CountyFips`, `jurisdiction` ← `Jurisdiction`
- **Returns**: `ApiV1InsuranceCarriersResponse`
- **Error**: `ApiException<ResourceCollectionInsuranceCarriersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceCollectionInsuranceCarriersRequest` | `src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionInsuranceCarriersRequest.cs` |
| `ApiV1InsuranceCarriersResponse` | `src/CommonElements/Models/ApiV1InsuranceCarriersResponse.cs` |
| `ResourceCollectionInsuranceCarriersError` | `src/CommonElements/Errors/ResourceCollectionInsuranceCarriersError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceCollectionLegalCases

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceCollectionLegalCases(ResourceCollectionLegalCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`, `state` ← `State`, `county_fips` ← `CountyFips`, `jurisdiction` ← `Jurisdiction`
- **Returns**: `ApiV1LegalCasesResponse`
- **Error**: `ApiException<ResourceCollectionLegalCasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceCollectionLegalCasesRequest` | `src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionLegalCasesRequest.cs` |
| `ApiV1LegalCasesResponse` | `src/CommonElements/Models/ApiV1LegalCasesResponse.cs` |
| `ResourceCollectionLegalCasesError` | `src/CommonElements/Errors/ResourceCollectionLegalCasesError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceCollectionRateFilings

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceCollectionRateFilings(ResourceCollectionRateFilingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`, `state` ← `State`, `county_fips` ← `CountyFips`, `jurisdiction` ← `Jurisdiction`
- **Returns**: `ApiV1InsuranceRateFilingsResponse`
- **Error**: `ApiException<ResourceCollectionRateFilingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceCollectionRateFilingsRequest` | `src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionRateFilingsRequest.cs` |
| `ApiV1InsuranceRateFilingsResponse` | `src/CommonElements/Models/ApiV1InsuranceRateFilingsResponse.cs` |
| `ResourceCollectionRateFilingsError` | `src/CommonElements/Errors/ResourceCollectionRateFilingsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceCollectionStormEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceCollectionStormEvents(ResourceCollectionStormEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`, `state` ← `State`, `county_fips` ← `CountyFips`, `jurisdiction` ← `Jurisdiction`
- **Returns**: `ApiV1StormEventsResponse`
- **Error**: `ApiException<ResourceCollectionStormEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceCollectionStormEventsRequest` | `src/CommonElements/Requests/CrossAssociationCollections/ResourceCollectionStormEventsRequest.cs` |
| `ApiV1StormEventsResponse` | `src/CommonElements/Models/ApiV1StormEventsResponse.cs` |
| `ResourceCollectionStormEventsError` | `src/CommonElements/Errors/ResourceCollectionStormEventsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

