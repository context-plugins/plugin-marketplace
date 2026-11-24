<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataApi — operations

Accessor: `client.DataApi` · Source: `src/StayingApi/Api/DataApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Availability

- **Auth**: `options.BearerAuth`
- **Signature**: `Availability(AvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Platform`, `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `platform` ← `Platform`, `startDate` ← `StartDate`, `endDate` ← `EndDate`, `listingId` ← `ListingId`, `listingIds` ← `ListingIds`, `url` ← `Url`, `onlyAvailable` ← `OnlyAvailable`
- **Returns**: `AvailabilityResponse`
- **Error**: `ApiException<AvailabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AvailabilityRequest` | `src/StayingApi/Requests/DataApi/AvailabilityRequest.cs` |
| `Platform` | `src/StayingApi/Models/Enums/Platform.cs` |
| `AvailabilityResponse` | `src/StayingApi/Models/AvailabilityResponse.cs` |
| `AvailabilityError` | `src/StayingApi/Errors/AvailabilityError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### Listing

- **Auth**: `options.BearerAuth`
- **Signature**: `Listing(ListingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Platform`, `Id`
- **Query params (wire ← C#)**: `country` ← `Country`, `checkIn` ← `CheckIn`, `checkOut` ← `CheckOut`, `currency` ← `Currency`
- **Returns**: `ListingResponse`
- **Error**: `ApiException<ListingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListingRequest` | `src/StayingApi/Requests/DataApi/ListingRequest.cs` |
| `Platform` | `src/StayingApi/Models/Enums/Platform.cs` |
| `ListingResponse` | `src/StayingApi/Models/ListingResponse.cs` |
| `ListingError` | `src/StayingApi/Errors/ListingError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### Price

- **Auth**: `options.BearerAuth`
- **Signature**: `Price(PriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Platform`, `ListingId`, `CheckIn`, `CheckOut`
- **Query params (wire ← C#)**: `platform` ← `Platform`, `listingId` ← `ListingId`, `checkIn` ← `CheckIn`, `checkOut` ← `CheckOut`, `currency` ← `Currency`
- **Returns**: `PriceResponse`
- **Error**: `ApiException<PriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PriceRequest` | `src/StayingApi/Requests/DataApi/PriceRequest.cs` |
| `Platform` | `src/StayingApi/Models/Enums/Platform.cs` |
| `PriceResponse` | `src/StayingApi/Models/PriceResponse.cs` |
| `PriceError` | `src/StayingApi/Errors/PriceError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### PriceCompare

- **Auth**: `options.BearerAuth`
- **Signature**: `PriceCompare(PriceCompareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CheckIn`, `CheckOut`
- **Query params (wire ← C#)**: `checkIn` ← `CheckIn`, `checkOut` ← `CheckOut`, `listings` ← `Listings`, `name` ← `Name`, `location` ← `Location`, `googleHotelId` ← `GoogleHotelId`, `adults` ← `Adults`, `children` ← `Children`, `currency` ← `Currency`
- **Returns**: `PriceCompareResponse`
- **Error**: `ApiException<PriceCompareError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PriceCompareRequest` | `src/StayingApi/Requests/DataApi/PriceCompareRequest.cs` |
| `PriceCompareResponse` | `src/StayingApi/Models/PriceCompareResponse.cs` |
| `PriceCompareError` | `src/StayingApi/Errors/PriceCompareError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### Reviews

- **Auth**: `options.BearerAuth`
- **Signature**: `Reviews(ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Platform`
- **Query params (wire ← C#)**: `platform` ← `Platform`, `listingId` ← `ListingId`, `url` ← `Url`, `limit` ← `Limit`, `cursor` ← `Cursor`, `language` ← `Language`, `sort` ← `Sort`
- **Returns**: `ReviewsResponse`
- **Error**: `ApiException<ReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReviewsRequest` | `src/StayingApi/Requests/DataApi/ReviewsRequest.cs` |
| `Platform` | `src/StayingApi/Models/Enums/Platform.cs` |
| `ReviewsResponse` | `src/StayingApi/Models/ReviewsResponse.cs` |
| `ReviewsError` | `src/StayingApi/Errors/ReviewsError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### SearchGet

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchGet(SearchGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Location`
- **Query params (wire ← C#)**: `location` ← `Location`, `checkIn` ← `CheckIn`, `checkOut` ← `CheckOut`, `platforms` ← `Platforms`, `platform` ← `Platform`, `adults` ← `Adults`, `children` ← `Children`, `rooms` ← `Rooms`, `currency` ← `Currency`, `limit` ← `Limit`, `cursor` ← `Cursor`, `sort` ← `Sort`
- **Returns**: `SearchResponse`
- **Error**: `ApiException<SearchGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchGetRequest` | `src/StayingApi/Requests/DataApi/SearchGetRequest.cs` |
| `SearchResponse` | `src/StayingApi/Models/SearchResponse.cs` |
| `SearchGetError` | `src/StayingApi/Errors/SearchGetError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

### SearchPost

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPost(SearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResponse`
- **Error**: `ApiException<SearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [400, 401, 402, 403, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPostRequest` | `src/StayingApi/Requests/DataApi/SearchPostRequest.cs` |
| `SearchResponse` | `src/StayingApi/Models/SearchResponse.cs` |
| `SearchPostError` | `src/StayingApi/Errors/SearchPostError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

