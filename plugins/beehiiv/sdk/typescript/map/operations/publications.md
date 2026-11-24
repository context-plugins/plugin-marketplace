<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publications — operations

Accessor: `client.publications` · Source: `src/resources/publications.ts` · 2 operations · Request and error types: namespace `Publications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index18

- **Signature**: `index18(request: Publications.Index18Request, options?: RequestOptions): ApiPromise<PublicationsListResponse, Publications.Index18Error>`
- **Wire**: `GET /publications`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicationsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Publications.Index18Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Publications.Index18Request` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `expand` | `query` | — | `PublicationsRequestExpandItem[]` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `orderBy` | `query` | `order_by` | `PublicationsListRequestOrderBy` | no | `PublicationsListRequestOrderBy.Created` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsRequestExpandItem` | `publicationsRequestExpandItemSchema` | `src/models/publications-request-expand-item.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PublicationsListRequestOrderBy` | `publicationsListRequestOrderBySchema` | `src/models/publications-list-request-order-by.ts` |
| `PublicationsListResponse` | `publicationsListResponseSchema` | `src/models/publications-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show13

- **Signature**: `show13(request: Publications.Show13Request, options?: RequestOptions): ApiPromise<PublicationsGetResponse, Publications.Show13Error>`
- **Wire**: `GET /publications/{publicationId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicationsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Publications.Show13Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Publications.Show13Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `expand` | `query` | — | `PublicationsGetRequestExpandItem[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsGetRequestExpandItem` | `publicationsGetRequestExpandItemSchema` | `src/models/publications-get-request-expand-item.ts` |
| `PublicationsGetResponse` | `publicationsGetResponseSchema` | `src/models/publications-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

