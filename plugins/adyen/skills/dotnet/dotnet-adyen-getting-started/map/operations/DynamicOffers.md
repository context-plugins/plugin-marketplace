# DynamicOffers — operations

Accessor: `client.DynamicOffers` · Source: `Api/DynamicOffers.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDynamicOffers
- **HTTP**: `GET /dynamicOffers` (Default15 (balanceplatform-api-test))
- **Notes**: Returns a list of all dynamic offers available for `accountHolderId` specified as a query parameter.
- **Signature**: `GetDynamicOffers(string accountHolderId, FinancingType? financingType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `financingType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountHolderId` ← `accountHolderId`, `financingType` ← `financingType`
- **Returns**: `GetDynamicOffersResponse`
- **Error**: `SdkException<GetDynamicOffersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDynamicOffersIdCalculate
- **HTTP**: `POST /dynamicOffers/{id}/calculate` (Default15 (balanceplatform-api-test))
- **Notes**: Calculates a preliminary offer for the financing amount that the user selected from a dynamic offer . The preliminary offer is for informational purposes only and cannot be used to initiate a grant. Requests to this endpoint are subject to rate limits: Live environments: 120 requests per minute. Test environments: 120 requests per minute.
- **Signature**: `PostDynamicOffersIdCalculate(string id, CalculateGrantOfferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CalculatedGrantOffer`
- **Error**: `SdkException<PostDynamicOffersIdCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDynamicOffersIdGrantOffer
- **HTTP**: `POST /dynamicOffers/{id}/grantOffer` (Default15 (balanceplatform-api-test))
- **Notes**: Creates a static offer for the financing amount that the user selected from the dynamic offer . Requests to this endpoint are subject to rate limits: Live environments: 30 requests per minute. Test environments: 30 requests per minute.
- **Signature**: `PostDynamicOffersIdGrantOffer(string id, CreateGrantOfferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GrantOffer1`
- **Error**: `SdkException<PostDynamicOffersIdGrantOfferError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
