<!-- Generated file — do not edit; regenerated with the SDK. -->

# PciQuestionnaires — operations

Accessor: `client.PciQuestionnaires` · Source: `Api/PciQuestionnaires.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLegalEntitiesIdPciQuestionnaires
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdPciQuestionnaires(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GetPciQuestionnaireInfosResponse`
- **Error**: `SdkException<GetLegalEntitiesIdPciQuestionnairesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPciQuestionnaireInfosResponse` | `Models/GetPciQuestionnaireInfosResponse.cs` |
| `GetLegalEntitiesIdPciQuestionnairesError` | `Errors/GetLegalEntitiesIdPciQuestionnairesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetLegalEntitiesIdPciQuestionnairesPciid
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdPciQuestionnairesPciid(string id, string pciid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GetPciQuestionnaireResponse`
- **Error**: `SdkException<GetLegalEntitiesIdPciQuestionnairesPciidError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPciQuestionnaireResponse` | `Models/GetPciQuestionnaireResponse.cs` |
| `GetLegalEntitiesIdPciQuestionnairesPciidError` | `Errors/GetLegalEntitiesIdPciQuestionnairesPciidError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(string id, GeneratePciDescriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GeneratePciDescriptionResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GeneratePciDescriptionRequest` | `Models/GeneratePciDescriptionRequest.cs` |
| `GeneratePciDescriptionResponse` | `Models/GeneratePciDescriptionResponse.cs` |
| `PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError` | `Errors/PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdPciQuestionnairesSignPciTemplates
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesSignPciTemplates(string id, PciSigningRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PciSigningResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PciSigningRequest` | `Models/PciSigningRequest.cs` |
| `PciSigningResponse` | `Models/PciSigningResponse.cs` |
| `PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError` | `Errors/PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdPciQuestionnairesSigningRequired
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdPciQuestionnairesSigningRequired(string id, CalculatePciStatusRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CalculatePciStatusResponse`
- **Error**: `SdkException<PostLegalEntitiesIdPciQuestionnairesSigningRequiredError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CalculatePciStatusRequest` | `Models/CalculatePciStatusRequest.cs` |
| `CalculatePciStatusResponse` | `Models/CalculatePciStatusResponse.cs` |
| `PostLegalEntitiesIdPciQuestionnairesSigningRequiredError` | `Errors/PostLegalEntitiesIdPciQuestionnairesSigningRequiredError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

