<!-- Generated file — do not edit; regenerated with the SDK. -->

# DynamicOffers — operations

Accessor: `client.DynamicOffers` · Source: `Api/DynamicOffers.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDynamicOffers
- **Server group**: `Default15`
- **Signature**: `GetDynamicOffers(string accountHolderId, FinancingType? financingType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `financingType` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `accountHolderId` ← `accountHolderId`, `financingType` ← `financingType`
- **Returns**: `GetDynamicOffersResponse`
- **Error**: `SdkException<GetDynamicOffersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FinancingType` | `Models/Enums/FinancingType.cs` |
| `GetDynamicOffersResponse` | `Models/GetDynamicOffersResponse.cs` |
| `GetDynamicOffersError` | `Errors/GetDynamicOffersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostDynamicOffersIdCalculate
- **Server group**: `Default15`
- **Signature**: `PostDynamicOffersIdCalculate(string id, CalculateGrantOfferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CalculatedGrantOffer`
- **Error**: `SdkException<PostDynamicOffersIdCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CalculateGrantOfferRequest` | `Models/CalculateGrantOfferRequest.cs` |
| `CalculatedGrantOffer` | `Models/CalculatedGrantOffer.cs` |
| `PostDynamicOffersIdCalculateError` | `Errors/PostDynamicOffersIdCalculateError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostDynamicOffersIdGrantOffer
- **Server group**: `Default15`
- **Signature**: `PostDynamicOffersIdGrantOffer(string id, CreateGrantOfferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GrantOffer1`
- **Error**: `SdkException<PostDynamicOffersIdGrantOfferError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGrantOfferRequest` | `Models/CreateGrantOfferRequest.cs` |
| `GrantOffer1` | `Models/GrantOffer1.cs` |
| `PostDynamicOffersIdGrantOfferError` | `Errors/PostDynamicOffersIdGrantOfferError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

