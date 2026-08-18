<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantOffersApi — operations

Accessor: `client.GrantOffersApi` · Source: `Api/GrantOffersApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGrantOffers
- **Server group**: `Default13`
- **Signature**: `GetGrantOffers(string accountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `accountHolderId` ← `accountHolderId`
- **Returns**: `GrantOffers`
- **Error**: `SdkException<GetGrantOffersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantOffers` | `Models/GrantOffers.cs` |
| `GetGrantOffersError` | `Errors/GetGrantOffersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetGrantOffers1
- **Server group**: `Default15`
- **Signature**: `GetGrantOffers1(string accountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `accountHolderId` ← `accountHolderId`
- **Returns**: `GrantOffers`
- **Error**: `SdkException<GetGrantOffers1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantOffers` | `Models/GrantOffers.cs` |
| `GetGrantOffers1Error` | `Errors/GetGrantOffers1Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetGrantOffersGrantOfferId
- **Server group**: `Default13`
- **Signature**: `GetGrantOffersGrantOfferId(string grantOfferId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GrantOffer`
- **Error**: `SdkException<GetGrantOffersGrantOfferIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantOffer` | `Models/GrantOffer.cs` |
| `GetGrantOffersGrantOfferIdError` | `Errors/GetGrantOffersGrantOfferIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetGrantOffersId
- **Server group**: `Default15`
- **Signature**: `GetGrantOffersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GrantOffer1`
- **Error**: `SdkException<GetGrantOffersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantOffer1` | `Models/GrantOffer1.cs` |
| `GetGrantOffersIdError` | `Errors/GetGrantOffersIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

