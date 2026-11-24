<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.Vendors` · Source: `src/CommonElements/Api/Vendors.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VendorsDetail

- **Auth**: `options.BearerAuth`
- **Signature**: `VendorsDetail(VendorsDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1VendorsResponse1`
- **Error**: `ApiException<VendorsDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VendorsDetailRequest` | `src/CommonElements/Requests/Vendors/VendorsDetailRequest.cs` |
| `ApiV1VendorsResponse1` | `src/CommonElements/Models/ApiV1VendorsResponse1.cs` |
| `VendorsDetailError` | `src/CommonElements/Errors/VendorsDetailError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### VendorsList

- **Auth**: `options.BearerAuth`
- **Signature**: `VendorsList(VendorsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `category` ← `Category`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1VendorsResponse`
- **Error**: `ApiException<VendorsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VendorsListRequest` | `src/CommonElements/Requests/Vendors/VendorsListRequest.cs` |
| `ApiV1VendorsResponse` | `src/CommonElements/Models/ApiV1VendorsResponse.cs` |
| `VendorsListError` | `src/CommonElements/Errors/VendorsListError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### VendorsReviews

- **Auth**: `options.BearerAuth`
- **Signature**: `VendorsReviews(VendorsReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1VendorsReviewsResponse`
- **Error**: `ApiException<VendorsReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VendorsReviewsRequest` | `src/CommonElements/Requests/Vendors/VendorsReviewsRequest.cs` |
| `ApiV1VendorsReviewsResponse` | `src/CommonElements/Models/ApiV1VendorsReviewsResponse.cs` |
| `VendorsReviewsError` | `src/CommonElements/Errors/VendorsReviewsError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

