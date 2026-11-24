<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactPoints — operations

Accessor: `client.contactPoints` · Source: `src/resources/contact-points.ts` · 5 operations · Request and error types: namespace `ContactPoints`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContactPoint

- **Signature**: `createContactPoint(request: ContactPoints.CreateContactPointRequest, options?: RequestOptions): ApiPromise<ContactPointResult, ContactPoints.CreateContactPointError>`
- **Wire**: `POST /v1/api/contactPoints`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactPointResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `ContactPoints.CreateContactPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactPoints.CreateContactPointRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactPointRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactPointRequestBody` | `contactPointRequestBodySchema` | `src/models/contact-point-request-body.ts` |
| `ContactPointResult` | `contactPointResultSchema` | `src/models/contact-point-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteContactPoint

- **Signature**: `deleteContactPoint(request: ContactPoints.DeleteContactPointRequest, options?: RequestOptions): ApiPromise<ContactPointResult, ContactPoints.DeleteContactPointError>`
- **Wire**: `DELETE /v1/api/contactPoints/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactPointResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `ContactPoints.DeleteContactPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactPoints.DeleteContactPointRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactPointResult` | `contactPointResultSchema` | `src/models/contact-point-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactPoint

- **Signature**: `getContactPoint(request: ContactPoints.GetContactPointRequest, options?: RequestOptions): ApiPromise<ContactPointResult, ContactPoints.GetContactPointError>`
- **Wire**: `GET /v1/api/contactPoints/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactPointResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `ContactPoints.GetContactPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactPoints.GetContactPointRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactPointResult` | `contactPointResultSchema` | `src/models/contact-point-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listContactPoints

- **Signature**: `listContactPoints(request: ContactPoints.ListContactPointsRequest, options?: RequestOptions): ApiPromise<ContactPointListResult, ContactPoints.ListContactPointsError>`
- **Wire**: `GET /v1/api/contactPoints`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactPointListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `ContactPoints.ListContactPointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactPoints.ListContactPointsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `ContactPointSortBy` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `status` | `query` | `Status1[]` | no | — |
| `type` | `query` | `Type1[]` | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactPointSortBy` | `contactPointSortBySchema` | `src/models/contact-point-sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `ContactPointListResult` | `contactPointListResultSchema` | `src/models/contact-point-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateContactPoint

- **Signature**: `updateContactPoint(request: ContactPoints.UpdateContactPointRequest, options?: RequestOptions): ApiPromise<ContactPointResult, ContactPoints.UpdateContactPointError>`
- **Wire**: `PATCH /v1/api/contactPoints/{uuid}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactPointResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `ContactPoints.UpdateContactPointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactPoints.UpdateContactPointRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uuid` | `path` | `string` | yes |
| `body` | `body` | `ContactPointUpdateBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactPointUpdateBody` | `contactPointUpdateBodySchema` | `src/models/contact-point-update-body.ts` |
| `ContactPointResult` | `contactPointResultSchema` | `src/models/contact-point-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

