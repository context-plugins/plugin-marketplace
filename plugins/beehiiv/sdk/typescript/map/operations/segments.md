<!-- Generated file — do not edit; regenerated with the SDK. -->

# Segments — operations

Accessor: `client.segments` · Source: `src/resources/segments.ts` · 7 operations · Request and error types: namespace `Segments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create9

- **Signature**: `create9(request: Segments.Create9Request, options?: RequestOptions): ApiPromise<SegmentShowResponse, Segments.Create9Error>`
- **Wire**: `POST /publications/{publicationId}/segments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SegmentShowResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.Create9Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.Create9Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsSegmentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsSegmentsRequest` | `publicationsSegmentsRequestSchema` | `src/models/publications-segments-request.ts` |
| `SegmentShowResponse` | `segmentShowResponseSchema` | `src/models/segment-show-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete4

- **Signature**: `delete4(request: Segments.Delete4Request, options?: RequestOptions): ApiPromise<SegmentDeleteResponse, Segments.Delete4Error>`
- **Wire**: `DELETE /publications/{publicationId}/segments/{segmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SegmentDeleteResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.Delete4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.Delete4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `segmentId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentDeleteResponse` | `segmentDeleteResponseSchema` | `src/models/segment-delete-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### expandResults

- **Signature**: `expandResults(request: Segments.ExpandResultsRequest, options?: RequestOptions): ApiPromise<SegmentsGetResponse, Segments.ExpandResultsError>`
- **Wire**: `GET /publications/{publicationId}/segments/{segmentId}/results`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SegmentsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.ExpandResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.ExpandResultsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `segmentId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentsGetResponse` | `segmentsGetResponseSchema` | `src/models/segments-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index19

- **Signature**: `index19(request: Segments.Index19Request, options?: RequestOptions): ApiPromise<SegmentsListResponse, Segments.Index19Error>`
- **Wire**: `GET /publications/{publicationId}/segments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SegmentsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.Index19Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.Index19Request` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `type` | `query` | — | `SegmentType` | no | `SegmentType.All` |
| `status` | `query` | — | `SegmentRequestStatus` | no | `SegmentRequestStatus.All` |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `orderBy` | `query` | `order_by` | `SegmentOrderBy` | no | `SegmentOrderBy.Created` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `expand` | `query` | `expand[]` | `SegmentsExpandItems[]` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentType` | `segmentTypeSchema` | `src/models/segment-type.ts` |
| `SegmentRequestStatus` | `segmentRequestStatusSchema` | `src/models/segment-request-status.ts` |
| `SegmentOrderBy` | `segmentOrderBySchema` | `src/models/segment-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `SegmentsExpandItems` | `segmentsExpandItemsSchema` | `src/models/segments-expand-items.ts` |
| `SegmentsListResponse` | `segmentsListResponseSchema` | `src/models/segments-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listMembers

- **Signature**: `listMembers(request: Segments.ListMembersRequest, options?: RequestOptions): ApiPromise<SegmentMembersResponse, Segments.ListMembersError>`
- **Wire**: `GET /publications/{publicationId}/segments/{segmentId}/members`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SegmentMembersResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.ListMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.ListMembersRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `segmentId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `expand` | `query` | `expand[]` | `SegmentMembersExpandItems[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentMembersExpandItems` | `segmentMembersExpandItemsSchema` | `src/models/segment-members-expand-items.ts` |
| `SegmentMembersResponse` | `segmentMembersResponseSchema` | `src/models/segment-members-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### recalculate

- **Signature**: `recalculate(request: Segments.RecalculateRequest, options?: RequestOptions): ApiPromise<SegmentRecalculateResponse, Segments.RecalculateError>`
- **Wire**: `PUT /publications/{publicationId}/segments/{segmentId}/recalculate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SegmentRecalculateResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.RecalculateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.RecalculateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `segmentId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentRecalculateResponse` | `segmentRecalculateResponseSchema` | `src/models/segment-recalculate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show15

- **Signature**: `show15(request: Segments.Show15Request, options?: RequestOptions): ApiPromise<SegmentShowResponse, Segments.Show15Error>`
- **Wire**: `GET /publications/{publicationId}/segments/{segmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SegmentShowResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Segments.Show15Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Segments.Show15Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `segmentId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `SegmentsExpandItems[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SegmentsExpandItems` | `segmentsExpandItemsSchema` | `src/models/segments-expand-items.ts` |
| `SegmentShowResponse` | `segmentShowResponseSchema` | `src/models/segment-show-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

