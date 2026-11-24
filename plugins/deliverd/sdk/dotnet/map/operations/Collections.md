<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collections — operations

Accessor: `client.Collections` · Source: `src/Deliverd/Api/Collections.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Collections

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Collections(GetApiV1CollectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `externalId` ← `ExternalId`
- **Returns**: `ApiV1CollectionsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1CollectionsRequest` | `src/Deliverd/Requests/Collections/GetApiV1CollectionsRequest.cs` |
| `StatusDeliverdDevCollectionsApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevCollectionsApi.cs` |
| `ApiV1CollectionsResponse1` | `src/Deliverd/Models/ApiV1CollectionsResponse1.cs` |

### GetApiV1CollectionsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CollectionsById(GetApiV1CollectionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CollectionsResponse`
- **Error**: `ApiException<GetApiV1CollectionsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CollectionsByIdRequest` | `src/Deliverd/Requests/Collections/GetApiV1CollectionsByIdRequest.cs` |
| `ApiV1CollectionsResponse` | `src/Deliverd/Models/ApiV1CollectionsResponse.cs` |
| `GetApiV1CollectionsByIdError` | `src/Deliverd/Errors/GetApiV1CollectionsByIdError.cs` |

### PostApiV1Collections

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Collections(PostApiV1CollectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1CollectionsResponse`
- **Error**: `ApiException<PostApiV1CollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1CollectionsRequest` | `src/Deliverd/Requests/Collections/PostApiV1CollectionsRequest.cs` |
| `ApiV1CollectionsRequest` | `src/Deliverd/Models/ApiV1CollectionsRequest.cs` |
| `ApiV1CollectionsResponse` | `src/Deliverd/Models/ApiV1CollectionsResponse.cs` |
| `PostApiV1CollectionsError` | `src/Deliverd/Errors/PostApiV1CollectionsError.cs` |

### PostApiV1CollectionsByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1CollectionsByIdCancel(PostApiV1CollectionsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CollectionsCancelResponse`
- **Error**: `ApiException<PostApiV1CollectionsByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1CollectionsByIdCancelRequest` | `src/Deliverd/Requests/Collections/PostApiV1CollectionsByIdCancelRequest.cs` |
| `ApiV1CollectionsCancelResponse` | `src/Deliverd/Models/ApiV1CollectionsCancelResponse.cs` |
| `PostApiV1CollectionsByIdCancelError` | `src/Deliverd/Errors/PostApiV1CollectionsByIdCancelError.cs` |

