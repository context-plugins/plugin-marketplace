<!-- Generated file — do not edit; regenerated with the SDK. -->

# Segments — operations

Accessor: `client.Segments` · Source: `src/Beehiiv/Api/Segments.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create9

- **Signature**: `Create9(Create9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `SegmentShowResponse`
- **Error**: `ApiException<Create9Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create9Request` | `src/Beehiiv/Requests/Segments/Create9Request.cs` |
| `PublicationsSegmentsRequest` | `src/Beehiiv/Models/PublicationsSegmentsRequest.cs` |
| `SegmentShowResponse` | `src/Beehiiv/Models/SegmentShowResponse.cs` |
| `Create9Error` | `src/Beehiiv/Errors/Create9Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete4

- **Signature**: `Delete4(Delete4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SegmentId`, `Authorization`
- **Returns**: `SegmentDeleteResponse`
- **Error**: `ApiException<Delete4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Delete4Request` | `src/Beehiiv/Requests/Segments/Delete4Request.cs` |
| `SegmentDeleteResponse` | `src/Beehiiv/Models/SegmentDeleteResponse.cs` |
| `Delete4Error` | `src/Beehiiv/Errors/Delete4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ExpandResults

- **Signature**: `ExpandResults(ExpandResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SegmentId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `SegmentsGetResponse`
- **Error**: `ApiException<ExpandResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExpandResultsRequest` | `src/Beehiiv/Requests/Segments/ExpandResultsRequest.cs` |
| `SegmentsGetResponse` | `src/Beehiiv/Models/SegmentsGetResponse.cs` |
| `ExpandResultsError` | `src/Beehiiv/Errors/ExpandResultsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index19

- **Signature**: `Index19(Index19Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `type` ← `Type`, `status` ← `Status`, `limit` ← `Limit`, `page` ← `Page`, `order_by` ← `OrderBy`, `direction` ← `Direction`, `expand[]` ← `Expand`
- **Returns**: `SegmentsListResponse`
- **Error**: `ApiException<Index19Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index19Request` | `src/Beehiiv/Requests/Segments/Index19Request.cs` |
| `SegmentType` | `src/Beehiiv/Models/Enums/SegmentType.cs` |
| `SegmentRequestStatus` | `src/Beehiiv/Models/Enums/SegmentRequestStatus.cs` |
| `SegmentOrderBy` | `src/Beehiiv/Models/Enums/SegmentOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `SegmentsExpandItems` | `src/Beehiiv/Models/Enums/SegmentsExpandItems.cs` |
| `SegmentsListResponse` | `src/Beehiiv/Models/SegmentsListResponse.cs` |
| `Index19Error` | `src/Beehiiv/Errors/Index19Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ListMembers

- **Signature**: `ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SegmentId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`, `expand[]` ← `Expand`
- **Returns**: `SegmentMembersResponse`
- **Error**: `ApiException<ListMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMembersRequest` | `src/Beehiiv/Requests/Segments/ListMembersRequest.cs` |
| `SegmentMembersExpandItems` | `src/Beehiiv/Models/Enums/SegmentMembersExpandItems.cs` |
| `SegmentMembersResponse` | `src/Beehiiv/Models/SegmentMembersResponse.cs` |
| `ListMembersError` | `src/Beehiiv/Errors/ListMembersError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Recalculate

- **Signature**: `Recalculate(RecalculateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SegmentId`, `Authorization`
- **Returns**: `SegmentRecalculateResponse`
- **Error**: `ApiException<RecalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecalculateRequest` | `src/Beehiiv/Requests/Segments/RecalculateRequest.cs` |
| `SegmentRecalculateResponse` | `src/Beehiiv/Models/SegmentRecalculateResponse.cs` |
| `RecalculateError` | `src/Beehiiv/Errors/RecalculateError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show15

- **Signature**: `Show15(Show15Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SegmentId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `SegmentShowResponse`
- **Error**: `ApiException<Show15Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show15Request` | `src/Beehiiv/Requests/Segments/Show15Request.cs` |
| `SegmentsExpandItems` | `src/Beehiiv/Models/Enums/SegmentsExpandItems.cs` |
| `SegmentShowResponse` | `src/Beehiiv/Models/SegmentShowResponse.cs` |
| `Show15Error` | `src/Beehiiv/Errors/Show15Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

