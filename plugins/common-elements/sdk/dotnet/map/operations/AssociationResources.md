<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssociationResources — operations

Accessor: `client.AssociationResources` · Source: `src/CommonElements/Api/AssociationResources.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ResourceAssociationDocuments

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationDocuments(ResourceAssociationDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsDocumentsResponse`
- **Error**: `ApiException<ResourceAssociationDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationDocumentsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationDocumentsRequest.cs` |
| `ApiV1AssociationsDocumentsResponse` | `src/CommonElements/Models/ApiV1AssociationsDocumentsResponse.cs` |
| `ResourceAssociationDocumentsError` | `src/CommonElements/Errors/ResourceAssociationDocumentsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationFinancials

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationFinancials(ResourceAssociationFinancialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsFinancialsResponse`
- **Error**: `ApiException<ResourceAssociationFinancialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationFinancialsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationFinancialsRequest.cs` |
| `ApiV1AssociationsFinancialsResponse` | `src/CommonElements/Models/ApiV1AssociationsFinancialsResponse.cs` |
| `ResourceAssociationFinancialsError` | `src/CommonElements/Errors/ResourceAssociationFinancialsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationGovernance

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationGovernance(ResourceAssociationGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsGovernanceResponse`
- **Error**: `ApiException<ResourceAssociationGovernanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationGovernanceRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationGovernanceRequest.cs` |
| `ApiV1AssociationsGovernanceResponse` | `src/CommonElements/Models/ApiV1AssociationsGovernanceResponse.cs` |
| `ResourceAssociationGovernanceError` | `src/CommonElements/Errors/ResourceAssociationGovernanceError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationHazards

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationHazards(ResourceAssociationHazardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsHazardsResponse`
- **Error**: `ApiException<ResourceAssociationHazardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationHazardsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationHazardsRequest.cs` |
| `ApiV1AssociationsHazardsResponse` | `src/CommonElements/Models/ApiV1AssociationsHazardsResponse.cs` |
| `ResourceAssociationHazardsError` | `src/CommonElements/Errors/ResourceAssociationHazardsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationInsurance

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationInsurance(ResourceAssociationInsuranceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsInsuranceResponse`
- **Error**: `ApiException<ResourceAssociationInsuranceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationInsuranceRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationInsuranceRequest.cs` |
| `ApiV1AssociationsInsuranceResponse` | `src/CommonElements/Models/ApiV1AssociationsInsuranceResponse.cs` |
| `ResourceAssociationInsuranceError` | `src/CommonElements/Errors/ResourceAssociationInsuranceError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationLegal

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationLegal(ResourceAssociationLegalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsLegalResponse`
- **Error**: `ApiException<ResourceAssociationLegalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationLegalRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationLegalRequest.cs` |
| `ApiV1AssociationsLegalResponse` | `src/CommonElements/Models/ApiV1AssociationsLegalResponse.cs` |
| `ResourceAssociationLegalError` | `src/CommonElements/Errors/ResourceAssociationLegalError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationParcels

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationParcels(ResourceAssociationParcelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsParcelsResponse`
- **Error**: `ApiException<ResourceAssociationParcelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationParcelsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationParcelsRequest.cs` |
| `ApiV1AssociationsParcelsResponse` | `src/CommonElements/Models/ApiV1AssociationsParcelsResponse.cs` |
| `ResourceAssociationParcelsError` | `src/CommonElements/Errors/ResourceAssociationParcelsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationPermits

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationPermits(ResourceAssociationPermitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsPermitsResponse`
- **Error**: `ApiException<ResourceAssociationPermitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationPermitsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationPermitsRequest.cs` |
| `ApiV1AssociationsPermitsResponse` | `src/CommonElements/Models/ApiV1AssociationsPermitsResponse.cs` |
| `ResourceAssociationPermitsError` | `src/CommonElements/Errors/ResourceAssociationPermitsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationStructures

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationStructures(ResourceAssociationStructuresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsStructuresResponse`
- **Error**: `ApiException<ResourceAssociationStructuresError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationStructuresRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationStructuresRequest.cs` |
| `ApiV1AssociationsStructuresResponse` | `src/CommonElements/Models/ApiV1AssociationsStructuresResponse.cs` |
| `ResourceAssociationStructuresError` | `src/CommonElements/Errors/ResourceAssociationStructuresError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ResourceAssociationViolations

- **Auth**: `options.BearerAuth`
- **Signature**: `ResourceAssociationViolations(ResourceAssociationViolationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `source` ← `Source`, `since` ← `Since`, `until` ← `Until`
- **Returns**: `ApiV1AssociationsViolationsResponse`
- **Error**: `ApiException<ResourceAssociationViolationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResourceAssociationViolationsRequest` | `src/CommonElements/Requests/AssociationResources/ResourceAssociationViolationsRequest.cs` |
| `ApiV1AssociationsViolationsResponse` | `src/CommonElements/Models/ApiV1AssociationsViolationsResponse.cs` |
| `ResourceAssociationViolationsError` | `src/CommonElements/Errors/ResourceAssociationViolationsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

