<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComplimentaryAccessApi — operations

Accessor: `client.complimentaryAccessApi` · Source: `src/resources/complimentary-access-api.ts` · 2 operations · Request and error types: namespace `ComplimentaryAccessApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index8

- **Signature**: `index8(request: ComplimentaryAccessApi.Index8Request, options?: RequestOptions): ApiPromise<IndexComplimentaryAccessResponse, ComplimentaryAccessApi.Index8Error>`
- **Wire**: `GET /publications/{publicationId}/complimentary_access`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndexComplimentaryAccessResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `ComplimentaryAccessApi.Index8Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ComplimentaryAccessApi.Index8Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexComplimentaryAccessResponse` | `indexComplimentaryAccessResponseSchema` | `src/models/index-complimentary-access-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show5

- **Signature**: `show5(request: ComplimentaryAccessApi.Show5Request, options?: RequestOptions): ApiPromise<ComplimentaryAccessResponse, ComplimentaryAccessApi.Show5Error>`
- **Wire**: `GET /publications/{publicationId}/complimentary_access/{complimentaryAccessId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ComplimentaryAccessResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `ComplimentaryAccessApi.Show5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ComplimentaryAccessApi.Show5Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `complimentaryAccessId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComplimentaryAccessResponse` | `complimentaryAccessResponseSchema` | `src/models/complimentary-access-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

