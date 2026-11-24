<!-- Generated file — do not edit; regenerated with the SDK. -->

# Segments — operations

Accessor: `client.segments` · Source: `beehiiv/apis/segments.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.segments.create9

- **Route**: `POST /publications/{publicationId}/segments`
- **Server**: `default`
- **Signature**: `def create9(publication_id: str, authorization: str, *, body: PublicationsSegmentsRequest | PublicationsSegmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SegmentShowResponse`
- **Returns (raw)**: `ApiResult[SegmentShowResponse, Create9ErrorBody]`
- **Error**: `Create9ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSegmentsRequest` | `beehiiv/models/publications_segments_request.py` |
| `PublicationsSegmentsRequestDict` | `beehiiv/models/publications_segments_request.py` |
| `SegmentShowResponse` | `beehiiv/models/segment_show_response.py` |
| `Create9ErrorBody` | `beehiiv/errors/create9_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.delete4

- **Route**: `DELETE /publications/{publicationId}/segments/{segmentId}`
- **Server**: `default`
- **Signature**: `def delete4(publication_id: str, segment_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `segment_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `segment_id` — path `segmentId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentDeleteResponse`
- **Returns (raw)**: `ApiResult[SegmentDeleteResponse, Delete4ErrorBody]`
- **Error**: `Delete4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentDeleteResponse` | `beehiiv/models/segment_delete_response.py` |
| `Delete4ErrorBody` | `beehiiv/errors/delete4_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.expand_results

- **Route**: `GET /publications/{publicationId}/segments/{segmentId}/results`
- **Server**: `default`
- **Signature**: `def expand_results(publication_id: str, segment_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `segment_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `segment_id` — path `segmentId` · `limit` — query · `page` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentsGetResponse`
- **Returns (raw)**: `ApiResult[SegmentsGetResponse, ExpandResultsErrorBody]`
- **Error**: `ExpandResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentsGetResponse` | `beehiiv/models/segments_get_response.py` |
| `ExpandResultsErrorBody` | `beehiiv/errors/expand_results_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.index19

- **Route**: `GET /publications/{publicationId}/segments`
- **Server**: `default`
- **Signature**: `def index19(publication_id: str, authorization: str, *, type_: SegmentTypeOrStr | None = SegmentType.ALL, status: SegmentRequestStatusOrStr | None = SegmentRequestStatus.ALL, limit: int | None = None, page: int | None = None, order_by: SegmentOrderByOrStr | None = SegmentOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[SegmentsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `type_` — query `type` · `status` — query · `limit` — query · `page` — query · `order_by` — query · `direction` — query · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentsListResponse`
- **Returns (raw)**: `ApiResult[SegmentsListResponse, Index19ErrorBody]`
- **Error**: `Index19ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentTypeOrStr` | `beehiiv/models/enums/segment_type.py` |
| `SegmentRequestStatusOrStr` | `beehiiv/models/enums/segment_request_status.py` |
| `SegmentOrderByOrStr` | `beehiiv/models/enums/segment_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `SegmentsExpandItemsOrStr` | `beehiiv/models/enums/segments_expand_items.py` |
| `SegmentsListResponse` | `beehiiv/models/segments_list_response.py` |
| `Index19ErrorBody` | `beehiiv/errors/index19_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.list_members

- **Route**: `GET /publications/{publicationId}/segments/{segmentId}/members`
- **Server**: `default`
- **Signature**: `def list_members(publication_id: str, segment_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, expand: list[SegmentMembersExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `segment_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `segment_id` — path `segmentId` · `limit` — query · `page` — query · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentMembersResponse`
- **Returns (raw)**: `ApiResult[SegmentMembersResponse, ListMembersErrorBody]`
- **Error**: `ListMembersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentMembersExpandItemsOrStr` | `beehiiv/models/enums/segment_members_expand_items.py` |
| `SegmentMembersResponse` | `beehiiv/models/segment_members_response.py` |
| `ListMembersErrorBody` | `beehiiv/errors/list_members_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.recalculate

- **Route**: `PUT /publications/{publicationId}/segments/{segmentId}/recalculate`
- **Server**: `default`
- **Signature**: `def recalculate(publication_id: str, segment_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `segment_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `segment_id` — path `segmentId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentRecalculateResponse`
- **Returns (raw)**: `ApiResult[SegmentRecalculateResponse, RecalculateErrorBody]`
- **Error**: `RecalculateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentRecalculateResponse` | `beehiiv/models/segment_recalculate_response.py` |
| `RecalculateErrorBody` | `beehiiv/errors/recalculate_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.segments.show15

- **Route**: `GET /publications/{publicationId}/segments/{segmentId}`
- **Server**: `default`
- **Signature**: `def show15(publication_id: str, segment_id: str, authorization: str, *, expand: list[SegmentsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `segment_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `segment_id` — path `segmentId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SegmentShowResponse`
- **Returns (raw)**: `ApiResult[SegmentShowResponse, Show15ErrorBody]`
- **Error**: `Show15ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SegmentsExpandItemsOrStr` | `beehiiv/models/enums/segments_expand_items.py` |
| `SegmentShowResponse` | `beehiiv/models/segment_show_response.py` |
| `Show15ErrorBody` | `beehiiv/errors/show15_error.py` |
| `Error` | `beehiiv/models/error.py` |

