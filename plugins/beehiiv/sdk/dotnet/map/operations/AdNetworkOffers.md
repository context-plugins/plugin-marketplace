<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkOffers — operations

Accessor: `client.AdNetworkOffers` · Source: `src/Beehiiv/Api/AdNetworkOffers.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Advertisements

- **Signature**: `Advertisements(AdvertisementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `OfferId`, `Authorization`
- **Returns**: `AdOfferAdvertisementsGetResponse`
- **Error**: `ApiException<AdvertisementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AdvertisementsRequest` | `src/Beehiiv/Requests/AdNetworkOffers/AdvertisementsRequest.cs` |
| `AdOfferAdvertisementsGetResponse` | `src/Beehiiv/Models/AdOfferAdvertisementsGetResponse.cs` |
| `AdvertisementsError` | `src/Beehiiv/Errors/AdvertisementsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Create

- **Signature**: `Create(CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `AdOfferCreateResponse`
- **Error**: `ApiException<CreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRequest` | `src/Beehiiv/Requests/AdNetworkOffers/CreateRequest.cs` |
| `PublicationsAdNetworkOffersRequest` | `src/Beehiiv/Models/PublicationsAdNetworkOffersRequest.cs` |
| `AdOfferCreateResponse` | `src/Beehiiv/Models/AdOfferCreateResponse.cs` |
| `CreateError` | `src/Beehiiv/Errors/CreateError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index

- **Signature**: `Index(IndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `requested_from` ← `RequestedFrom`
- **Returns**: `AdOffersGetResponse`
- **Error**: `ApiException<IndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IndexRequest` | `src/Beehiiv/Requests/AdNetworkOffers/IndexRequest.cs` |
| `AdOffersGetResponse` | `src/Beehiiv/Models/AdOffersGetResponse.cs` |
| `IndexError` | `src/Beehiiv/Errors/IndexError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

