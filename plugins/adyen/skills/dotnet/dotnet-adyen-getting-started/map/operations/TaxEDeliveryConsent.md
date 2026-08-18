<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxEDeliveryConsent — operations

Accessor: `client.TaxEDeliveryConsent` · Source: `Api/TaxEDeliveryConsent.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostLegalEntitiesIdCheckTaxElectronicDeliveryConsent
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdCheckTaxElectronicDeliveryConsent(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CheckTaxElectronicDeliveryConsentResponse`
- **Error**: `SdkException<PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckTaxElectronicDeliveryConsentResponse` | `Models/CheckTaxElectronicDeliveryConsentResponse.cs` |
| `PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError` | `Errors/PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostLegalEntitiesIdSetTaxElectronicDeliveryConsent
- **Server group**: `Default18`
- **Signature**: `PostLegalEntitiesIdSetTaxElectronicDeliveryConsent(string id, SetTaxElectronicDeliveryConsentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SetTaxElectronicDeliveryConsentRequest` | `Models/SetTaxElectronicDeliveryConsentRequest.cs` |
| `PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError` | `Errors/PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

