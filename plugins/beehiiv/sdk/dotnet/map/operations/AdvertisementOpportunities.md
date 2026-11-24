<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdvertisementOpportunities — operations

Accessor: `client.AdvertisementOpportunities` · Source: `src/Beehiiv/Api/AdvertisementOpportunities.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index3

- **Signature**: `Index3(Index3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `AdvertisementOpportunitiesGetResponse`
- **Error**: `ApiException<Index3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index3Request` | `src/Beehiiv/Requests/AdvertisementOpportunities/Index3Request.cs` |
| `AdvertisementOpportunitiesGetResponse` | `src/Beehiiv/Models/AdvertisementOpportunitiesGetResponse.cs` |
| `Index3Error` | `src/Beehiiv/Errors/Index3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

