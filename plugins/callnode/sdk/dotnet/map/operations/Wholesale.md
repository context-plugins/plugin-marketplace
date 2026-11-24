<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wholesale — operations

Accessor: `client.Wholesale` · Source: `src/CallNode/Api/Wholesale.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListWholesaleAreas

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListWholesaleAreas(ListWholesaleAreasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `countryId` ← `CountryId`, `stateId` ← `StateId`
- **Returns**: `ApiV1WholesaleAreasResponse`
- **Error**: `ApiException<ListWholesaleAreasError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWholesaleAreasRequest` | `src/CallNode/Requests/Wholesale/ListWholesaleAreasRequest.cs` |
| `ApiV1WholesaleAreasResponse` | `src/CallNode/Models/ApiV1WholesaleAreasResponse.cs` |
| `ListWholesaleAreasError` | `src/CallNode/Errors/ListWholesaleAreasError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListWholesaleCountries

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListWholesaleCountries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1WholesaleCountriesResponse`
- **Error**: `ApiException<ListWholesaleCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleCountriesResponse` | `src/CallNode/Models/ApiV1WholesaleCountriesResponse.cs` |
| `ListWholesaleCountriesError` | `src/CallNode/Errors/ListWholesaleCountriesError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListWholesaleStates

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListWholesaleStates(ListWholesaleStatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `countryId` ← `CountryId`
- **Returns**: `ApiV1WholesaleStatesResponse`
- **Error**: `ApiException<ListWholesaleStatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWholesaleStatesRequest` | `src/CallNode/Requests/Wholesale/ListWholesaleStatesRequest.cs` |
| `ApiV1WholesaleStatesResponse` | `src/CallNode/Models/ApiV1WholesaleStatesResponse.cs` |
| `ListWholesaleStatesError` | `src/CallNode/Errors/ListWholesaleStatesError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### OrderWholesaleNumber

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `OrderWholesaleNumber(OrderWholesaleNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1WholesaleNumbersResponse`
- **Error**: `ApiException<OrderWholesaleNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 403, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrderWholesaleNumberRequest` | `src/CallNode/Requests/Wholesale/OrderWholesaleNumberRequest.cs` |
| `ApiV1WholesaleNumbersRequest` | `src/CallNode/Models/ApiV1WholesaleNumbersRequest.cs` |
| `ApiV1WholesaleNumbersResponse` | `src/CallNode/Models/ApiV1WholesaleNumbersResponse.cs` |
| `OrderWholesaleNumberError` | `src/CallNode/Errors/OrderWholesaleNumberError.cs` |

### UpdateWholesaleDelivery

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `UpdateWholesaleDelivery(UpdateWholesaleDeliveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1WholesaleNumbersDeliveryResponse`
- **Error**: `ApiException<UpdateWholesaleDeliveryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWholesaleDeliveryRequest` | `src/CallNode/Requests/Wholesale/UpdateWholesaleDeliveryRequest.cs` |
| `ApiV1WholesaleNumbersDeliveryRequest` | `src/CallNode/Models/ApiV1WholesaleNumbersDeliveryRequest.cs` |
| `ApiV1WholesaleNumbersDeliveryResponse` | `src/CallNode/Models/ApiV1WholesaleNumbersDeliveryResponse.cs` |
| `UpdateWholesaleDeliveryError` | `src/CallNode/Errors/UpdateWholesaleDeliveryError.cs` |

