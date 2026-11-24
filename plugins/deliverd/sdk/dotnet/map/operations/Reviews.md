<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.Reviews` · Source: `src/Deliverd/Api/Reviews.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Reviews

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Reviews(GetApiV1ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `externalId` ← `ExternalId`, `reportId` ← `ReportId`
- **Returns**: `ApiV1ReviewsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReviewsRequest` | `src/Deliverd/Requests/Reviews/GetApiV1ReviewsRequest.cs` |
| `StatusDeliverdDevReviewsApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevReviewsApi.cs` |
| `ApiV1ReviewsResponse1` | `src/Deliverd/Models/ApiV1ReviewsResponse1.cs` |

### GetApiV1ReviewsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReviewsById(GetApiV1ReviewsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ReviewsResponse`
- **Error**: `ApiException<GetApiV1ReviewsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ReviewsByIdRequest` | `src/Deliverd/Requests/Reviews/GetApiV1ReviewsByIdRequest.cs` |
| `ApiV1ReviewsResponse` | `src/Deliverd/Models/ApiV1ReviewsResponse.cs` |
| `GetApiV1ReviewsByIdError` | `src/Deliverd/Errors/GetApiV1ReviewsByIdError.cs` |

### PostApiV1Reviews

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Reviews(PostApiV1ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ReviewsResponse`
- **Error**: `ApiException<PostApiV1ReviewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReviewsRequest` | `src/Deliverd/Requests/Reviews/PostApiV1ReviewsRequest.cs` |
| `ApiV1ReviewsRequest` | `src/Deliverd/Models/ApiV1ReviewsRequest.cs` |
| `ApiV1ReviewsResponse` | `src/Deliverd/Models/ApiV1ReviewsResponse.cs` |
| `PostApiV1ReviewsError` | `src/Deliverd/Errors/PostApiV1ReviewsError.cs` |

### PostApiV1ReviewsByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReviewsByIdCancel(PostApiV1ReviewsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ReviewsCancelResponse`
- **Error**: `ApiException<PostApiV1ReviewsByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReviewsByIdCancelRequest` | `src/Deliverd/Requests/Reviews/PostApiV1ReviewsByIdCancelRequest.cs` |
| `ApiV1ReviewsCancelResponse` | `src/Deliverd/Models/ApiV1ReviewsCancelResponse.cs` |
| `PostApiV1ReviewsByIdCancelError` | `src/Deliverd/Errors/PostApiV1ReviewsByIdCancelError.cs` |

