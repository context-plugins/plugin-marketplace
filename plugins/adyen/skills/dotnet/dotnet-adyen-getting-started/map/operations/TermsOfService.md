<!-- Generated file — do not edit; regenerated with the SDK. -->

# TermsOfService — operations

Accessor: `client.TermsOfService` · Source: `Api/TermsOfService.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(string id, string termsofserviceacceptancereference, string? termsOfServiceDocumentFormat, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `termsOfServiceDocumentFormat` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `termsOfServiceDocumentFormat` ← `termsOfServiceDocumentFormat`
- **Returns**: `GetAcceptedTermsOfServiceDocumentResponse`
- **Error**: `SdkException<GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAcceptedTermsOfServiceDocumentResponse` | `Models/GetAcceptedTermsOfServiceDocumentResponse.cs` |
| `GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError` | `Errors/GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetLegalEntitiesIdTermsOfServiceAcceptanceInfos
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdTermsOfServiceAcceptanceInfos(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GetTermsOfServiceAcceptanceInfosResponse`
- **Error**: `SdkException<GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTermsOfServiceAcceptanceInfosResponse` | `Models/GetTermsOfServiceAcceptanceInfosResponse.cs` |
| `GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError` | `Errors/GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetLegalEntitiesIdTermsOfServiceStatus
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdTermsOfServiceStatus(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CalculateTermsOfServiceStatusResponse`
- **Error**: `SdkException<GetLegalEntitiesIdTermsOfServiceStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CalculateTermsOfServiceStatusResponse` | `Models/CalculateTermsOfServiceStatusResponse.cs` |
| `GetLegalEntitiesIdTermsOfServiceStatusError` | `Errors/GetLegalEntitiesIdTermsOfServiceStatusError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid
- **Server group**: `Default18`
- **Signature**: `PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(string id, string termsofservicedocumentid, AcceptTermsOfServiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AcceptTermsOfServiceResponse`
- **Error**: `SdkException<PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptTermsOfServiceRequest` | `Models/AcceptTermsOfServiceRequest.cs` |
| `AcceptTermsOfServiceResponse` | `Models/AcceptTermsOfServiceResponse.cs` |
| `PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError` | `Errors/PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdTermsOfService
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdTermsOfService(string id, GetTermsOfServiceDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetTermsOfServiceDocumentResponse`
- **Error**: `SdkException<PostLegalEntitiesIdTermsOfServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTermsOfServiceDocumentRequest` | `Models/GetTermsOfServiceDocumentRequest.cs` |
| `GetTermsOfServiceDocumentResponse` | `Models/GetTermsOfServiceDocumentResponse.cs` |
| `PostLegalEntitiesIdTermsOfServiceError` | `Errors/PostLegalEntitiesIdTermsOfServiceError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

