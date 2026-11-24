<!-- Generated file — do not edit; regenerated with the SDK. -->

# Associations — operations

Accessor: `client.Associations` · Source: `src/CommonElements/Api/Associations.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociationsBuildingSafety

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsBuildingSafety(AssociationsBuildingSafetyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsBuildingSafetyResponse`
- **Error**: `ApiException<AssociationsBuildingSafetyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsBuildingSafetyRequest` | `src/CommonElements/Requests/Associations/AssociationsBuildingSafetyRequest.cs` |
| `ApiV1AssociationsBuildingSafetyResponse` | `src/CommonElements/Models/ApiV1AssociationsBuildingSafetyResponse.cs` |
| `AssociationsBuildingSafetyError` | `src/CommonElements/Errors/AssociationsBuildingSafetyError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsBuildings

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsBuildings(AssociationsBuildingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsBuildingsResponse`
- **Error**: `ApiException<AssociationsBuildingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsBuildingsRequest` | `src/CommonElements/Requests/Associations/AssociationsBuildingsRequest.cs` |
| `ApiV1AssociationsBuildingsResponse` | `src/CommonElements/Models/ApiV1AssociationsBuildingsResponse.cs` |
| `AssociationsBuildingsError` | `src/CommonElements/Errors/AssociationsBuildingsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsByAddress

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsByAddress(AssociationsByAddressRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Address`, `Zip`
- **Query params (wire ← C#)**: `address` ← `Address`, `zip` ← `Zip`, `limit` ← `Limit`
- **Returns**: `ApiV1AssociationsByAddressResponse`
- **Error**: `ApiException<AssociationsByAddressError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsByAddressRequest` | `src/CommonElements/Requests/Associations/AssociationsByAddressRequest.cs` |
| `ApiV1AssociationsByAddressResponse` | `src/CommonElements/Models/ApiV1AssociationsByAddressResponse.cs` |
| `AssociationsByAddressError` | `src/CommonElements/Errors/AssociationsByAddressError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsDetail

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsDetail(AssociationsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsResponse`
- **Error**: `ApiException<AssociationsDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsDetailRequest` | `src/CommonElements/Requests/Associations/AssociationsDetailRequest.cs` |
| `ApiV1AssociationsResponse` | `src/CommonElements/Models/ApiV1AssociationsResponse.cs` |
| `AssociationsDetailError` | `src/CommonElements/Errors/AssociationsDetailError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsLookup

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsLookup(AssociationsLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `subtype` ← `Subtype`, `county` ← `County`, `registration_number` ← `RegistrationNumber`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1AssociationsLookupResponse`
- **Error**: `ApiException<AssociationsLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsLookupRequest` | `src/CommonElements/Requests/Associations/AssociationsLookupRequest.cs` |
| `ApiV1AssociationsLookupResponse` | `src/CommonElements/Models/ApiV1AssociationsLookupResponse.cs` |
| `AssociationsLookupError` | `src/CommonElements/Errors/AssociationsLookupError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsManagement

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsManagement(AssociationsManagementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsManagementResponse`
- **Error**: `ApiException<AssociationsManagementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsManagementRequest` | `src/CommonElements/Requests/Associations/AssociationsManagementRequest.cs` |
| `ApiV1AssociationsManagementResponse` | `src/CommonElements/Models/ApiV1AssociationsManagementResponse.cs` |
| `AssociationsManagementError` | `src/CommonElements/Errors/AssociationsManagementError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsMatch

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsMatch(AssociationsMatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`, `State`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `county` ← `County`, `min_similarity` ← `MinSimilarity`, `limit` ← `Limit`
- **Returns**: `ApiV1AssociationsMatchResponse`
- **Error**: `ApiException<AssociationsMatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsMatchRequest` | `src/CommonElements/Requests/Associations/AssociationsMatchRequest.cs` |
| `ApiV1AssociationsMatchResponse` | `src/CommonElements/Models/ApiV1AssociationsMatchResponse.cs` |
| `AssociationsMatchError` | `src/CommonElements/Errors/AssociationsMatchError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsNearby

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsNearby(AssociationsNearbyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lng`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lng` ← `Lng`, `radius_km` ← `RadiusKm`, `subtype` ← `Subtype`, `limit` ← `Limit`
- **Returns**: `ApiV1AssociationsNearbyResponse`
- **Error**: `ApiException<AssociationsNearbyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsNearbyRequest` | `src/CommonElements/Requests/Associations/AssociationsNearbyRequest.cs` |
| `ApiV1AssociationsNearbyResponse` | `src/CommonElements/Models/ApiV1AssociationsNearbyResponse.cs` |
| `AssociationsNearbyError` | `src/CommonElements/Errors/AssociationsNearbyError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsOfficers

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsOfficers(AssociationsOfficersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsOfficersResponse`
- **Error**: `ApiException<AssociationsOfficersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsOfficersRequest` | `src/CommonElements/Requests/Associations/AssociationsOfficersRequest.cs` |
| `ApiV1AssociationsOfficersResponse` | `src/CommonElements/Models/ApiV1AssociationsOfficersResponse.cs` |
| `AssociationsOfficersError` | `src/CommonElements/Errors/AssociationsOfficersError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsRisk

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsRisk(AssociationsRiskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsRiskResponse`
- **Error**: `ApiException<AssociationsRiskError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsRiskRequest` | `src/CommonElements/Requests/Associations/AssociationsRiskRequest.cs` |
| `ApiV1AssociationsRiskResponse` | `src/CommonElements/Models/ApiV1AssociationsRiskResponse.cs` |
| `AssociationsRiskError` | `src/CommonElements/Errors/AssociationsRiskError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### AssociationsVendors

- **Auth**: `options.BearerAuth`
- **Signature**: `AssociationsVendors(AssociationsVendorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AssociationsVendorsResponse`
- **Error**: `ApiException<AssociationsVendorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationsVendorsRequest` | `src/CommonElements/Requests/Associations/AssociationsVendorsRequest.cs` |
| `ApiV1AssociationsVendorsResponse` | `src/CommonElements/Models/ApiV1AssociationsVendorsResponse.cs` |
| `AssociationsVendorsError` | `src/CommonElements/Errors/AssociationsVendorsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

