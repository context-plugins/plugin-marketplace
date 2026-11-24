<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authors — operations

Accessor: `client.authors` · Source: `src/resources/authors.ts` · 2 operations · Request and error types: namespace `Authors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index4

- **Signature**: `index4(request: Authors.Index4Request, options?: RequestOptions): ApiPromise<AuthorsListResponse, Authors.Index4Error>`
- **Wire**: `GET /publications/{publicationId}/authors`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthorsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Authors.Index4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authors.Index4Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `name` | `query` | — | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorsListResponse` | `authorsListResponseSchema` | `src/models/authors-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show

- **Signature**: `show(request: Authors.ShowRequest, options?: RequestOptions): ApiPromise<AuthorsGetResponse, Authors.ShowError>`
- **Wire**: `GET /publications/{publicationId}/authors/{authorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthorsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Authors.ShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authors.ShowRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorsGetResponse` | `authorsGetResponseSchema` | `src/models/authors-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

