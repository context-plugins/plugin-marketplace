# TaxEDeliveryConsent — operations

Accessor: `client.TaxEDeliveryConsent` · Source: `Api/TaxEDeliveryConsent.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostLegalEntitiesIdCheckTaxElectronicDeliveryConsent
- **HTTP**: `POST /legalEntities/{id}/checkTaxElectronicDeliveryConsent` (Default (balanceplatform-api-test))
- **Notes**: Returns the consent status for electronic delivery of tax forms. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdCheckTaxElectronicDeliveryConsent(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CheckTaxElectronicDeliveryConsentResponse`
- **Error**: `SdkException<PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostLegalEntitiesIdSetTaxElectronicDeliveryConsent
- **HTTP**: `POST /legalEntities/{id}/setTaxElectronicDeliveryConsent` (Default (balanceplatform-api-test))
- **Notes**: Set the consent status for electronic delivery of tax forms. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostLegalEntitiesIdSetTaxElectronicDeliveryConsent(string id, SetTaxElectronicDeliveryConsentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
