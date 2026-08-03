# GrantOffersApi — operations

Accessor: `client.GrantOffersApi` · Source: `Api/GrantOffersApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrantOffers
- **HTTP**: `GET /grantOffers` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of all grant offers available for `accountHolderId` specified as a query parameter.
- **Signature**: `GetGrantOffers(string accountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountHolderId` ← `accountHolderId`
- **Returns**: `GrantOffers`
- **Error**: `SdkException<GetGrantOffersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantOffersGrantOfferId
- **HTTP**: `GET /grantOffers/{grantOfferId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a single grant offer.
- **Signature**: `GetGrantOffersGrantOfferId(string grantOfferId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GrantOffer`
- **Error**: `SdkException<GetGrantOffersGrantOfferIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantOffersId
- **HTTP**: `GET /grantOffers/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the specified static offer.
- **Signature**: `GetGrantOffersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GrantOffer1`
- **Error**: `SdkException<GetGrantOffersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrantOffers404Error1(out GrantOffers404Error1)` [404] · `TryGetGrantOffers422Error31(out GrantOffers422Error31)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
