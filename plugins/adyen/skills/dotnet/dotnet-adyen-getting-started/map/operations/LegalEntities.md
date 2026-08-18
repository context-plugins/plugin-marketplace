<!-- Generated file — do not edit; regenerated with the SDK. -->

# LegalEntities — operations

Accessor: `client.LegalEntities` · Source: `Api/LegalEntities.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLegalEntitiesId
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<GetLegalEntitiesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LegalEntity3` | `Models/LegalEntity3.cs` |
| `GetLegalEntitiesIdError` | `Errors/GetLegalEntitiesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### GetLegalEntitiesIdBusinessLines
- **Server group**: `Default18`
- **Signature**: `GetLegalEntitiesIdBusinessLines(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BusinessLines`
- **Error**: `SdkException<GetLegalEntitiesIdBusinessLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BusinessLines` | `Models/BusinessLines.cs` |
| `GetLegalEntitiesIdBusinessLinesError` | `Errors/GetLegalEntitiesIdBusinessLinesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PatchLegalEntitiesId
- **Server group**: `Default18`
- **Signature**: `PatchLegalEntitiesId(string id, string? xRequestedVerificationCode, LegalEntityInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<PatchLegalEntitiesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LegalEntityInfo` | `Models/LegalEntityInfo.cs` |
| `LegalEntity3` | `Models/LegalEntity3.cs` |
| `PatchLegalEntitiesIdError` | `Errors/PatchLegalEntitiesIdError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntities
- **Server group**: `Default18`
- **Signature**: `PostLegalEntities(string? xRequestedVerificationCode, LegalEntityInfoRequiredType? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `LegalEntity3`
- **Error**: `SdkException<PostLegalEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LegalEntityInfoRequiredType` | `Models/LegalEntityInfoRequiredType.cs` |
| `LegalEntity3` | `Models/LegalEntity3.cs` |
| `PostLegalEntitiesError` | `Errors/PostLegalEntitiesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdCheckVerificationErrors
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdCheckVerificationErrors(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerificationErrors`
- **Error**: `SdkException<PostLegalEntitiesIdCheckVerificationErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `VerificationErrors` | `Models/VerificationErrors.cs` |
| `PostLegalEntitiesIdCheckVerificationErrorsError` | `Errors/PostLegalEntitiesIdCheckVerificationErrorsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdConfirmDataReview
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdConfirmDataReview(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DataReviewConfirmationResponse`
- **Error**: `SdkException<PostLegalEntitiesIdConfirmDataReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DataReviewConfirmationResponse` | `Models/DataReviewConfirmationResponse.cs` |
| `PostLegalEntitiesIdConfirmDataReviewError` | `Errors/PostLegalEntitiesIdConfirmDataReviewError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdRequestPeriodicReview
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdRequestPeriodicReview(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `JsonElement`
- **Error**: `SdkException<RawError>` — **Case B**

